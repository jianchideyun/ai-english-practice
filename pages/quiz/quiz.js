const wordsLib = require('../../utils/words.js');
const quizLib = require('../../utils/quiz.js');
const store = require('../../utils/store.js');

const QUESTION_COUNT = 10;
const MAX_LIVES = 3;
const LETTERS = ['A', 'B', 'C', 'D'];

function heartsOf(lives) {
  const arr = [];
  for (let i = 0; i < MAX_LIVES; i++) {
    arr.push({ id: 'h' + i, on: i < lives });
  }
  return arr;
}

Page({
  data: {
    catId: 'all',
    catName: '全部词',
    ready: false,

    questions: [],
    total: 0,
    idx: 0,
    indexText: '1/10',
    current: null,

    selected: -1,
    answered: false,
    isCorrect: false,
    feedbackTitle: '',
    nextText: '下一题',

    score: 0,
    combo: 0,
    maxCombo: 0,
    correctCount: 0,

    lives: MAX_LIVES,
    hearts: heartsOf(MAX_LIVES),
    progressPercent: 0,

    wrongList: []
  },

  onLoad(query) {
    const mode = (query && query.mode) || '';
    let catId = (query && query.cat) || 'all';
    let catName = '全部词';

    if (mode === 'mistakes') {
      catId = 'mistakes';
      catName = '错题重练';
    } else if (catId !== 'all') {
      const cat = wordsLib.CAT_MAP[catId];
      if (cat) {
        catName = cat.name;
      } else {
        catId = 'all';
      }
    }

    let pool = wordsLib.WORDS;
    if (catId === 'mistakes') {
      const app = getApp();
      const pending = app.globalData.pendingWordIds || [];
      pool = [];
      for (let i = 0; i < pending.length; i++) {
        const word = wordsLib.WORD_MAP[pending[i]];
        if (word) {
          pool.push(word);
        }
      }
      // 用完即清，避免下次带着旧数据进来
      app.globalData.pendingWordIds = null;
    } else if (catId !== 'all') {
      pool = [];
      for (let i = 0; i < wordsLib.WORDS.length; i++) {
        if (wordsLib.WORDS[i].cat === catId) {
          pool.push(wordsLib.WORDS[i]);
        }
      }
    }

    const questions = quizLib.buildQuestions(pool, wordsLib.WORDS, QUESTION_COUNT, 4);

    for (let i = 0; i < questions.length; i++) {
      const options = [];
      for (let k = 0; k < questions[i].options.length; k++) {
        options.push({
          letter: LETTERS[k],
          text: questions[i].options[k]
        });
      }
      questions[i].options = options;
    }

    if (!questions.length) {
      this.setData({ ready: true, total: 0, catName: catName });
      return;
    }

    const total = questions.length;
    this.setData({
      catId: catId,
      catName: catName,
      questions: questions,
      total: total,
      ready: true,
      current: questions[0],
      indexText: '1/' + total,
      progressPercent: 0
    });

    let navTitle = '全部词闯关';
    if (catId === 'mistakes') {
      navTitle = '错题重练';
    } else if (catId !== 'all') {
      navTitle = catName + '闯关';
    }
    wx.setNavigationBarTitle({
      title: navTitle
    });
  },

  handleOption(event) {
    if (this.data.answered) {
      return;
    }
    const index = Number(event.currentTarget.dataset.index);
    const current = this.data.current;
    const isCorrect = index === current.answerIndex;

    let score = this.data.score;
    let combo = this.data.combo;
    let maxCombo = this.data.maxCombo;
    let correctCount = this.data.correctCount;
    let lives = this.data.lives;
    const wrongList = this.data.wrongList.slice();

    if (isCorrect) {
      combo = combo + 1;
      if (combo > maxCombo) {
        maxCombo = combo;
      }
      score = score + quizLib.scoreOf(combo);
      correctCount = correctCount + 1;
    } else {
      combo = 0;
      lives = lives - 1;
      wrongList.push({
        id: current.wordId,
        en: current.en,
        zh: current.zh,
        phonetic: current.phonetic
      });
    }

    store.recordAnswer(current.wordId, isCorrect);

    const isLast = this.data.idx + 1 >= this.data.total;
    const outOfLives = lives <= 0;
    let nextText = '下一题';
    if (isLast || outOfLives) {
      nextText = '查看结果';
    }

    this.setData({
      selected: index,
      answered: true,
      isCorrect: isCorrect,
      score: score,
      combo: combo,
      maxCombo: maxCombo,
      correctCount: correctCount,
      lives: lives,
      hearts: heartsOf(lives),
      wrongList: wrongList,
      nextText: nextText,
      feedbackTitle: isCorrect ? '答对了 +' + quizLib.scoreOf(combo) : '正确答案是这样'
    });
  },

  handleNext() {
    const nextIndex = this.data.idx + 1;
    const finished = nextIndex >= this.data.total || this.data.lives <= 0;

    if (finished) {
      this.finish();
      return;
    }

    const percent = Math.round((nextIndex / this.data.total) * 100);
    this.setData({
      idx: nextIndex,
      current: this.data.questions[nextIndex],
      indexText: nextIndex + 1 + '/' + this.data.total,
      progressPercent: percent,
      selected: -1,
      answered: false,
      isCorrect: false,
      feedbackTitle: '',
      nextText: '下一题'
    });
  },

  finish() {
    const answeredCount = this.data.idx + 1;
    const total = this.data.total;
    const correct = this.data.correctCount;
    const wrong = this.data.wrongList;
    const cleared = this.data.lives > 0 && answeredCount >= total;
    const accuracy = answeredCount > 0 ? Math.round((correct / answeredCount) * 100) : 0;

    store.recordQuiz({
      total: answeredCount,
      correct: correct,
      score: this.data.score,
      bestCombo: this.data.maxCombo
    });

    getApp().globalData.lastResult = {
      catId: this.data.catId,
      catName: this.data.catName,
      total: total,
      answered: answeredCount,
      correct: correct,
      wrongCount: wrong.length,
      score: this.data.score,
      maxCombo: this.data.maxCombo,
      accuracy: accuracy,
      lives: this.data.lives,
      cleared: cleared,
      wrongList: wrong
    };

    wx.redirectTo({
      url: '/pages/result/result'
    });
  }
});
