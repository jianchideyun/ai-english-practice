const wordsLib = require('../../utils/words.js');
const store = require('../../utils/store.js');

Page({
  data: {
    keyword: '',
    activeCat: 'all',
    chips: [],
    list: [],
    countText: '',
    expanded: ''
  },

  onLoad() {
    const chips = [{ id: 'all', name: '全部' }];
    for (let i = 0; i < wordsLib.CATEGORIES.length; i++) {
      const cat = wordsLib.CATEGORIES[i];
      chips.push({ id: cat.id, name: cat.name });
    }
    this.setData({ chips: chips });
    this.refresh();
  },

  onShow() {
    this.refresh();
  },

  refresh() {
    const keyword = (this.data.keyword || '').trim().toLowerCase();
    const activeCat = this.data.activeCat;
    const mastery = store.getMastery().data;
    const list = [];

    for (let i = 0; i < wordsLib.WORDS.length; i++) {
      const word = wordsLib.WORDS[i];
      if (activeCat !== 'all' && word.cat !== activeCat) {
        continue;
      }
      if (keyword) {
        const hitEn = word.en.toLowerCase().indexOf(keyword) > -1;
        const hitZh = word.zh.indexOf(keyword) > -1;
        if (!hitEn && !hitZh) {
          continue;
        }
      }

      const record = mastery[word.id];
      let level = '未学';
      let levelClass = 'lv-new';
      if (record && record.right >= 2) {
        level = '已掌握';
        levelClass = 'lv-ok';
      } else if (record && record.right > 0) {
        level = '学过';
        levelClass = 'lv-mid';
      }

      const cat = wordsLib.CAT_MAP[word.cat];
      list.push({
        id: word.id,
        en: word.en,
        phonetic: word.phonetic,
        zh: word.zh,
        example: word.example,
        exampleZh: word.exampleZh,
        note: word.note || '',
        catName: cat ? cat.name : '',
        level: level,
        levelClass: levelClass
      });
    }

    this.setData({
      list: list,
      countText: '共 ' + list.length + ' 个词'
    });
  },

  handleInput(event) {
    this.setData({ keyword: event.detail.value }, () => {
      this.refresh();
    });
  },

  clearKeyword() {
    this.setData({ keyword: '' }, () => {
      this.refresh();
    });
  },

  selectCat(event) {
    const id = event.currentTarget.dataset.id;
    this.setData({ activeCat: id }, () => {
      this.refresh();
    });
  },

  toggleItem(event) {
    const id = event.currentTarget.dataset.id;
    const expanded = this.data.expanded === id ? '' : id;
    this.setData({ expanded: expanded });
  }
});
