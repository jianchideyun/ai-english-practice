/**
 * 出题与判分：纯函数，不读写存储、不联网。
 */

function shuffle(list) {
  const arr = list.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function uniqueTexts(list, field, exclude) {
  const seen = {};
  const out = [];
  for (let i = 0; i < list.length; i++) {
    const value = list[i][field];
    if (!value || value === exclude || seen[value]) {
      continue;
    }
    seen[value] = true;
    out.push(value);
  }
  return out;
}

/**
 * @param {Array} pool 候选词（已按分类过滤）
 * @param {Array} backup 全量词，用于候选不够时补充干扰项
 * @param {number} count 题目数量
 * @param {number} optionCount 选项数量
 */
function buildQuestions(pool, backup, count, optionCount) {
  const size = optionCount || 4;
  const source = pool && pool.length ? pool : backup;
  const total = Math.min(count || 10, source.length);
  const picked = shuffle(source).slice(0, total);
  const questions = [];

  for (let i = 0; i < picked.length; i++) {
    const word = picked[i];
    const isEn2Zh = i % 2 === 0;

    const answerText = isEn2Zh ? word.zh : word.en;
    const field = isEn2Zh ? 'zh' : 'en';

    let others = uniqueTexts(source, field, answerText);
    if (others.length < size - 1) {
      const extra = uniqueTexts(backup || [], field, answerText);
      for (let k = 0; k < extra.length; k++) {
        if (others.indexOf(extra[k]) === -1) {
          others.push(extra[k]);
        }
      }
    }
    const distractors = shuffle(others).slice(0, size - 1);

    const options = shuffle(distractors.concat([answerText]));
    let answerIndex = 0;
    for (let k = 0; k < options.length; k++) {
      if (options[k] === answerText) {
        answerIndex = k;
        break;
      }
    }

    questions.push({
      key: 'q' + i,
      wordId: word.id,
      type: isEn2Zh ? 'en2zh' : 'zh2en',
      typeLabel: isEn2Zh ? '选出中文意思' : '选出英文单词',
      promptText: isEn2Zh ? word.en : word.zh,
      promptSub: isEn2Zh ? word.phonetic : '',
      promptHint: isEn2Zh ? '' : '请选出对应的英文',
      options: options,
      answerIndex: answerIndex,
      en: word.en,
      zh: word.zh,
      phonetic: word.phonetic,
      example: word.example,
      exampleZh: word.exampleZh,
      note: word.note || ''
    });
  }

  return questions;
}

/**
 * 计分：基础 10 分 + 连击奖励（每连对 +2，最多 +10）
 */
function scoreOf(combo) {
  const bonus = Math.min(combo * 2, 10);
  return 10 + bonus;
}

module.exports = {
  shuffle,
  buildQuestions,
  scoreOf
};
