/**
 * 本地存储层：只读写 wx.Storage，不联网、不上传。
 * 所有方法都返回 { data, error }，不会 reject。
 */

const KEY_STATS = 'aiwords_stats_v1';
const KEY_MISTAKES = 'aiwords_mistakes_v1';
const KEY_MASTERY = 'aiwords_mastery_v1';

const EMPTY_STATS = {
  totalAnswered: 0,
  totalCorrect: 0,
  bestCombo: 0,
  plays: 0,
  bestScore: 0
};

function readRaw(key, fallback) {
  try {
    const value = wx.getStorageSync(key);
    if (value === '' || value === null || value === undefined) {
      return fallback;
    }
    return value;
  } catch (e) {
    return fallback;
  }
}

function writeRaw(key, value) {
  try {
    wx.setStorageSync(key, value);
    return { data: value, error: null };
  } catch (e) {
    return { data: null, error: 'CLIENT_EXCEPTION' };
  }
}

function getStats() {
  const raw = readRaw(KEY_STATS, null);
  if (!raw || typeof raw !== 'object') {
    return { data: Object.assign({}, EMPTY_STATS), error: null };
  }
  return { data: Object.assign({}, EMPTY_STATS, raw), error: null };
}

function getMistakes() {
  const raw = readRaw(KEY_MISTAKES, null);
  if (!raw || typeof raw !== 'object') {
    return { data: {}, error: null };
  }
  return { data: raw, error: null };
}

function getMastery() {
  const raw = readRaw(KEY_MASTERY, null);
  if (!raw || typeof raw !== 'object') {
    return { data: {}, error: null };
  }
  return { data: raw, error: null };
}

/**
 * 记录一次作答：更新熟练度、错题本
 */
function recordAnswer(wordId, isCorrect) {
  if (!wordId) {
    return { data: null, error: 'INVALID_ID' };
  }

  const masteryRes = getMastery();
  const mastery = masteryRes.data;
  const item = mastery[wordId] || { right: 0, wrong: 0 };
  if (isCorrect) {
    item.right = item.right + 1;
  } else {
    item.wrong = item.wrong + 1;
  }
  mastery[wordId] = item;
  const writeMastery = writeRaw(KEY_MASTERY, mastery);

  const mistakeRes = getMistakes();
  const mistakes = mistakeRes.data;
  if (isCorrect) {
    if (mistakes[wordId]) {
      const left = (mistakes[wordId].count || 1) - 1;
      if (left <= 0) {
        delete mistakes[wordId];
      } else {
        mistakes[wordId] = { count: left, at: Date.now() };
      }
    }
  } else {
    const prev = mistakes[wordId] || { count: 0 };
    mistakes[wordId] = { count: (prev.count || 0) + 1, at: Date.now() };
  }
  const writeMistakes = writeRaw(KEY_MISTAKES, mistakes);

  if (writeMastery.error) {
    return { data: null, error: writeMastery.error };
  }
  if (writeMistakes.error) {
    return { data: null, error: writeMistakes.error };
  }
  return { data: { mastery: item, mistakes: mistakes }, error: null };
}

/**
 * 结算一局
 */
function recordQuiz(payload) {
  const p = payload || {};
  const statsRes = getStats();
  const stats = statsRes.data;

  stats.totalAnswered = stats.totalAnswered + (p.total || 0);
  stats.totalCorrect = stats.totalCorrect + (p.correct || 0);
  stats.plays = stats.plays + 1;

  const combo = p.bestCombo || 0;
  if (combo > stats.bestCombo) {
    stats.bestCombo = combo;
  }
  const score = p.score || 0;
  if (score > stats.bestScore) {
    stats.bestScore = score;
  }

  return writeRaw(KEY_STATS, stats);
}

/**
 * 首页概览：已学词数、正确率
 */
function getOverview(totalWords) {
  const masteryRes = getMastery();
  const statsRes = getStats();
  const mastery = masteryRes.data;
  const stats = statsRes.data;

  let learned = 0;
  const ids = Object.keys(mastery);
  for (let i = 0; i < ids.length; i++) {
    const item = mastery[ids[i]];
    if (item && item.right > 0) {
      learned = learned + 1;
    }
  }

  let accuracy = 0;
  if (stats.totalAnswered > 0) {
    accuracy = Math.round((stats.totalCorrect / stats.totalAnswered) * 100);
  }

  return {
    learned: learned,
    totalWords: totalWords || 0,
    accuracy: accuracy,
    bestCombo: stats.bestCombo,
    bestScore: stats.bestScore,
    plays: stats.plays
  };
}

function clearMistakes() {
  return writeRaw(KEY_MISTAKES, {});
}

function resetAll() {
  try {
    wx.removeStorageSync(KEY_STATS);
    wx.removeStorageSync(KEY_MISTAKES);
    wx.removeStorageSync(KEY_MASTERY);
    return { data: true, error: null };
  } catch (e) {
    return { data: null, error: 'CLIENT_EXCEPTION' };
  }
}

module.exports = {
  getStats,
  getMistakes,
  getMastery,
  getOverview,
  recordAnswer,
  recordQuiz,
  clearMistakes,
  resetAll
};
