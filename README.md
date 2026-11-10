# AI 英文小练

> 用闯关的方式，记住 AI 产品界面上的高频英文。

界面上全是 `Generate`、`Prompt`、`Token`、`Context window`，看不懂就只能瞎点。这个项目把 84 个最常见的关键词做成 10 题一关的小测验，答错自动进错题本，一两分钟就能练一轮。

提供两种形态，共用同一份词库：

| 形态 | 位置 | 说明 |
|---|---|---|
| 微信小程序 | 仓库根目录 | 原生小程序工程，用微信开发者工具打开 |
| 电脑单文件版 | `desktop/index.html` | 双击即用，无需安装、无需联网 |

## 功能

- **闯关答题**：每关 10 题，3 次机会，连击越高得分越多（满分 180）
- **双向出题**：英文选中文、中文选英文交替出现
- **错题本**：答错记一次，答对减一次，减到 0 自动移出
- **完整词库**：支持中英文搜索、按分类筛选、点开看例句
- **离线可用**：词库内嵌，不发起任何网络请求
- **本地存储**：进度只存在本机，不上传、不登录

## 目录结构

```
├── app.js / app.json / app.wxss      小程序入口与全局样式
├── project.config.json               小程序工程配置
├── sitemap.json                      微信索引规则
├── pages/
│   ├── index/       首页：总览 + 分类入口
│   ├── quiz/        答题：进度、生命、连击计分
│   ├── result/      结算：得分、正确率、本关错词
│   ├── wordbook/    词库：搜索 + 筛选 + 例句
│   └── mistakes/    错题本：按错误次数排序
├── utils/
│   ├── words.js     词库数据（84 词 / 6 分类）
│   ├── store.js     本地存储层，统一返回 { data, error }
│   └── quiz.js      出题与计分，纯函数
└── desktop/
    └── index.html   电脑单文件版（词库由构建注入）
```

## 运行

### 微信小程序

1. 用微信开发者工具「导入项目」，选择本仓库根目录
2. 没有 AppID 时选择「测试号」即可预览

### 电脑版

双击 `desktop/index.html`，用 Edge / Chrome 打开即可。

键盘操作：`1`–`4` 选择选项，`Enter` 下一题，`Esc` 回首页。

## 修改词库

编辑 `utils/words.js`，照现有格式加一条，`id` 不能重复：

```js
{
  id: 'promptcache',
  en: 'Prompt cache',
  phonetic: '/prɑːmpt kæʃ/',
  zh: '提示词缓存',
  cat: 'setting',
  example: 'Prompt cache cuts cost for repeated requests.',
  exampleZh: '提示词缓存能降低重复请求的成本。',
  note: '相同前缀的请求会命中缓存，省时省钱。'
}
```

首页进度、分类统计、出题、词库搜索会自动跟上，无需改动其他文件。

分类定义在 `words.js` 顶部的 `CATEGORIES`，新增分类时记得给 `id`、`name`、`desc`、`emoji`、`color`。

> 电脑版是单文件，词库已内嵌其中。修改 `utils/words.js` 后需要重新注入数据才能同步，或直接编辑 `desktop/index.html` 里的 `const DATA =` 部分。

## 数据与隐私

- 不收集任何用户信息，无登录、无埋点、无第三方 SDK
- 所有学习记录存在本机（小程序用 `wx.Storage`，电脑版用 `localStorage`）
- 全文无外部链接、无 `fetch` / `XMLHttpRequest`，断网可正常使用
- 两种形态的数据各自独立，不互通

## 许可

代码以 [MIT](./LICENSE) 许可发布。词库中的单词与音标属公共语言事实；例句与释义部分可自由使用，注明出处即可。
