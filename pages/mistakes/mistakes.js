const wordsLib = require('../../utils/words.js');
const store = require('../../utils/store.js');

Page({
  data: {
    list: [],
    count: 0,
    empty: true
  },

  onShow() {
    this.refresh();
  },

  refresh() {
    const mistakes = store.getMistakes().data;
    const list = [];
    const ids = Object.keys(mistakes);

    for (let i = 0; i < ids.length; i++) {
      const word = wordsLib.WORD_MAP[ids[i]];
      if (!word) {
        continue;
      }
      const record = mistakes[ids[i]];
      list.push({
        id: word.id,
        en: word.en,
        zh: word.zh,
        phonetic: word.phonetic,
        example: word.example,
        count: record.count || 1
      });
    }

    list.sort(function (a, b) {
      return b.count - a.count;
    });

    this.setData({
      list: list,
      count: list.length,
      empty: list.length === 0
    });
  },

  practiceAll() {
    if (!this.data.list.length) {
      return;
    }
    const ids = [];
    for (let i = 0; i < this.data.list.length; i++) {
      ids.push(this.data.list[i].id);
    }
    getApp().globalData.pendingWordIds = ids;
    wx.navigateTo({
      url: '/pages/quiz/quiz?mode=mistakes'
    });
  },

  clearAll() {
    const that = this;
    wx.showModal({
      title: '清空错题本',
      content: '错题记录会被清空，学习统计不受影响。',
      confirmText: '清空',
      confirmColor: '#ef4d6a',
      success(res) {
        if (res.confirm) {
          store.clearMistakes();
          that.refresh();
          wx.showToast({ title: '已清空', icon: 'none' });
        }
      }
    });
  },

  goHome() {
    wx.reLaunch({
      url: '/pages/index/index'
    });
  }
});
