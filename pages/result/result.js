Page({
  data: {
    ready: false,
    result: null,
    title: '',
    subtitle: '',
    emoji: '',
    catId: 'all'
  },

  onLoad() {
    const app = getApp();
    const result = app.globalData.lastResult;

    if (!result) {
      this.setData({
        ready: true,
        result: null,
        title: '还没有闯关记录',
        subtitle: '回首页挑一个分类开始吧。',
        emoji: '🌱'
      });
      return;
    }

    let title = '再练一关就稳了';
    let emoji = '💪';
    if (result.cleared && result.accuracy === 100) {
      title = '全对，太强了';
      emoji = '🏆';
    } else if (result.cleared) {
      title = '通关成功';
      emoji = '🎉';
    } else if (result.lives <= 0) {
      title = '机会用完了';
      emoji = '😵';
    }

    let subtitle = '答对 ' + result.correct + ' 题，错 ' + result.wrongCount + ' 题';
    if (result.wrongCount === 0) {
      subtitle = '这一关没有错题，完美。';
    }

    this.setData({
      ready: true,
      result: result,
      title: title,
      subtitle: subtitle,
      emoji: emoji,
      catId: result.catId
    });

    // 用掉的结果清空，避免下次进入显示旧数据
    app.globalData.lastResult = null;
  },

  playAgain() {
    if (this.data.catId === 'mistakes') {
      wx.redirectTo({
        url: '/pages/mistakes/mistakes'
      });
      return;
    }
    wx.redirectTo({
      url: '/pages/quiz/quiz?cat=' + this.data.catId
    });
  },

  goHome() {
    wx.reLaunch({
      url: '/pages/index/index'
    });
  },

  onShareAppMessage() {
    const result = this.data.result;
    let title = '看得懂 AI 界面上的每个按钮｜AI 界面英文';
    if (result) {
      title = '我刚在「AI 界面英文」拿了 ' + result.score + ' 分，来比一下';
    }
    return {
      title: title,
      path: '/pages/index/index'
    };
  }
});
