const wordsLib = require('../../utils/words.js');
const store = require('../../utils/store.js');

Page({
  data: {
    overview: {
      learned: 0,
      totalWords: 0,
      accuracy: 0,
      bestCombo: 0
    },
    categories: [],
    mistakeCount: 0,
    ready: false
  },

  onShow() {
    this.refresh();
  },

  refresh() {
    const overview = store.getOverview(wordsLib.total);
    const mastery = store.getMastery().data;
    const mistakes = store.getMistakes().data;

    const categories = wordsLib.CATEGORIES.map(function (cat) {
      let total = 0;
      let learned = 0;
      for (let i = 0; i < wordsLib.WORDS.length; i++) {
        const word = wordsLib.WORDS[i];
        if (word.cat !== cat.id) {
          continue;
        }
        total = total + 1;
        const record = mastery[word.id];
        if (record && record.right > 0) {
          learned = learned + 1;
        }
      }
      const percent = total > 0 ? Math.round((learned / total) * 100) : 0;
      return {
        id: cat.id,
        name: cat.name,
        desc: cat.desc,
        emoji: cat.emoji,
        color: cat.color,
        total: total,
        learned: learned,
        percent: percent,
        progressText: learned + '/' + total
      };
    });

    this.setData({
      overview: overview,
      categories: categories,
      mistakeCount: Object.keys(mistakes).length,
      ready: true
    });
  },

  startAll() {
    wx.navigateTo({
      url: '/pages/quiz/quiz?cat=all'
    });
  },

  startCategory(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/quiz/quiz?cat=' + id
    });
  },

  openWordbook() {
    wx.navigateTo({
      url: '/pages/wordbook/wordbook'
    });
  },

  openMistakes() {
    wx.navigateTo({
      url: '/pages/mistakes/mistakes'
    });
  },

  // 转发给微信好友 / 群
  onShareAppMessage() {
    return {
      title: '看得懂 AI 界面上的每个按钮｜AI 界面英文',
      path: '/pages/index/index'
    };
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: 'AI 产品界面常用英文，闯关式记 84 个高频词'
    };
  }
});
