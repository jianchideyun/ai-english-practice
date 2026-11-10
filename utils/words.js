/**
 * AI 产品界面常用英文词库
 * 纯静态数据，无网络请求，不涉及任何隐私。
 * 字段：id / en / phonetic / zh / cat / example / exampleZh / note
 */

const CATEGORIES = [
  { id: 'action', name: '按钮与操作', desc: '界面上最常点的那些词', emoji: '👆', color: '#5b5bd6' },
  { id: 'setting', name: '模型与参数', desc: '设置面板里的关键词', emoji: '🎛️', color: '#0f9d8f' },
  { id: 'prompt', name: '提示词', desc: '和模型对话时的用语', emoji: '💬', color: '#c2410c' },
  { id: 'chat', name: '对话与界面', desc: '会话、记录、附件相关', emoji: '🗂️', color: '#2563eb' },
  { id: 'billing', name: '计费与限制', desc: '套餐、额度、限流', emoji: '💳', color: '#7c3aed' },
  { id: 'quality', name: '回答与质量', desc: '判断答案靠不靠谱', emoji: '🔍', color: '#be123c' }
];

const WORDS = [
  // ---------- 按钮与操作 ----------
  {
    id: 'generate',
    en: 'Generate',
    phonetic: '/ˈdʒenəreɪt/',
    zh: '生成',
    cat: 'action',
    example: 'Click Generate to create a new response.',
    exampleZh: '点击 Generate 生成一条新回复。',
    note: '最核心的按钮，等价于「让模型开始干活」。'
  },
  {
    id: 'regenerate',
    en: 'Regenerate',
    phonetic: '/ˌriːˈdʒenəreɪt/',
    zh: '重新生成',
    cat: 'action',
    example: 'Not satisfied? Hit Regenerate for another answer.',
    exampleZh: '不满意？点 Regenerate 换一个答案。',
    note: 're- 前缀表示「再一次」，答案不喜欢就用它。'
  },
  {
    id: 'submit',
    en: 'Submit',
    phonetic: '/səbˈmɪt/',
    zh: '提交',
    cat: 'action',
    example: 'Submit the form to finish your profile.',
    exampleZh: '提交表单以完成你的资料。',
    note: '比 Send 更正式，多用于表单、申请。'
  },
  {
    id: 'cancel',
    en: 'Cancel',
    phonetic: '/ˈkænsl/',
    zh: '取消',
    cat: 'action',
    example: 'Press Cancel to leave without saving.',
    exampleZh: '点 Cancel 可以放弃保存直接离开。'
  },
  {
    id: 'retry',
    en: 'Retry',
    phonetic: '/ˌriːˈtraɪ/',
    zh: '重试',
    cat: 'action',
    example: 'The request failed. Please retry.',
    exampleZh: '请求失败，请重试。'
  },
  {
    id: 'confirm',
    en: 'Confirm',
    phonetic: '/kənˈfɜːrm/',
    zh: '确认',
    cat: 'action',
    example: 'Confirm your email to activate the account.',
    exampleZh: '确认邮箱以激活账号。'
  },
  {
    id: 'copy',
    en: 'Copy',
    phonetic: '/ˈkɑːpi/',
    zh: '复制',
    cat: 'action',
    example: 'Copy the prompt and paste it into another tool.',
    exampleZh: '复制提示词，粘贴到另一个工具里。'
  },
  {
    id: 'paste',
    en: 'Paste',
    phonetic: '/peɪst/',
    zh: '粘贴',
    cat: 'action',
    example: 'Paste your text here to summarize it.',
    exampleZh: '把文本粘贴到这里来做摘要。'
  },
  {
    id: 'clear',
    en: 'Clear',
    phonetic: '/klɪr/',
    zh: '清空',
    cat: 'action',
    example: 'Clear the conversation to start over.',
    exampleZh: '清空对话，重新开始。'
  },
  {
    id: 'reset',
    en: 'Reset',
    phonetic: '/ˌriːˈset/',
    zh: '重置',
    cat: 'action',
    example: 'Reset all settings to their defaults.',
    exampleZh: '把所有设置恢复为默认值。'
  },
  {
    id: 'upload',
    en: 'Upload',
    phonetic: '/ˈʌploʊd/',
    zh: '上传',
    cat: 'action',
    example: 'Upload a PDF and ask questions about it.',
    exampleZh: '上传一个 PDF，然后针对它提问。'
  },
  {
    id: 'download',
    en: 'Download',
    phonetic: '/ˈdaʊnloʊd/',
    zh: '下载',
    cat: 'action',
    example: 'Download the result as a CSV file.',
    exampleZh: '把结果下载为 CSV 文件。'
  },
  {
    id: 'export',
    en: 'Export',
    phonetic: '/ɪkˈspɔːrt/',
    zh: '导出',
    cat: 'action',
    example: 'Export your chat history before deleting it.',
    exampleZh: '删除前先导出你的聊天记录。'
  },
  {
    id: 'delete',
    en: 'Delete',
    phonetic: '/dɪˈliːt/',
    zh: '删除',
    cat: 'action',
    example: 'Delete is permanent and cannot be undone.',
    exampleZh: '删除是永久的，无法撤销。'
  },
  {
    id: 'continue',
    en: 'Continue',
    phonetic: '/kənˈtɪnjuː/',
    zh: '继续',
    cat: 'action',
    example: 'The answer was cut off. Click Continue.',
    exampleZh: '回答被截断了，点 Continue 接着说。'
  },
  {
    id: 'stop',
    en: 'Stop',
    phonetic: '/stɑːp/',
    zh: '停止',
    cat: 'action',
    example: 'Press Stop if the output is too long.',
    exampleZh: '输出太长就点 Stop 停下来。'
  },
  {
    id: 'skip',
    en: 'Skip',
    phonetic: '/skɪp/',
    zh: '跳过',
    cat: 'action',
    example: 'Skip this step and set it up later.',
    exampleZh: '跳过这一步，以后再说。'
  },
  {
    id: 'apply',
    en: 'Apply',
    phonetic: '/əˈplaɪ/',
    zh: '应用',
    cat: 'action',
    example: 'Apply these changes to every new chat.',
    exampleZh: '把这些改动应用到所有新对话。'
  },
  {
    id: 'save',
    en: 'Save',
    phonetic: '/seɪv/',
    zh: '保存',
    cat: 'action',
    example: 'Save the draft so you do not lose it.',
    exampleZh: '保存草稿，免得丢失。'
  },
  {
    id: 'edit',
    en: 'Edit',
    phonetic: '/ˈedɪt/',
    zh: '编辑',
    cat: 'action',
    example: 'Edit your prompt and send it again.',
    exampleZh: '改一下提示词再发一次。'
  },

  // ---------- 模型与参数 ----------
  {
    id: 'model',
    en: 'Model',
    phonetic: '/ˈmɑːdl/',
    zh: '模型',
    cat: 'setting',
    example: 'Choose a model that fits the task.',
    exampleZh: '选一个适合这项任务的模型。'
  },
  {
    id: 'temperature',
    en: 'Temperature',
    phonetic: '/ˈtemprətʃər/',
    zh: '温度（随机性）',
    cat: 'setting',
    example: 'Lower the temperature for more consistent output.',
    exampleZh: '调低 temperature，输出会更稳定。',
    note: '0 附近偏严谨，接近 1 更有创意。'
  },
  {
    id: 'maxtokens',
    en: 'Max tokens',
    phonetic: '/mæks ˈtoʊkənz/',
    zh: '最大输出长度',
    cat: 'setting',
    example: 'Raise max tokens if the answer is truncated.',
    exampleZh: '回答被截断就把 max tokens 调大。',
    note: 'token 是模型的最小计费单位，不是字数。'
  },
  {
    id: 'contextwindow',
    en: 'Context window',
    phonetic: '/ˈkɑːntekst ˈwɪndoʊ/',
    zh: '上下文窗口',
    cat: 'setting',
    example: 'Long documents may exceed the context window.',
    exampleZh: '长文档可能超出上下文窗口。',
    note: '超出窗口的旧内容会被「忘掉」。'
  },
  {
    id: 'systemprompt',
    en: 'System prompt',
    phonetic: '/ˈsɪstəm prɑːmpt/',
    zh: '系统提示词',
    cat: 'setting',
    example: 'The system prompt sets the assistant’s role.',
    exampleZh: '系统提示词决定助手的角色设定。'
  },
  {
    id: 'parameter',
    en: 'Parameter',
    phonetic: '/pəˈræmɪtər/',
    zh: '参数',
    cat: 'setting',
    example: 'Only change parameters if you know the effect.',
    exampleZh: '不清楚效果就别乱改参数。'
  },
  {
    id: 'default',
    en: 'Default',
    phonetic: '/dɪˈfɔːlt/',
    zh: '默认值',
    cat: 'setting',
    example: 'The default settings work for most people.',
    exampleZh: '默认设置适合大多数人。'
  },
  {
    id: 'custom',
    en: 'Custom',
    phonetic: '/ˈkʌstəm/',
    zh: '自定义',
    cat: 'setting',
    example: 'Create a custom prompt for weekly reports.',
    exampleZh: '为周报创建一个自定义提示词。'
  },
  {
    id: 'preset',
    en: 'Preset',
    phonetic: '/ˈpriːset/',
    zh: '预设',
    cat: 'setting',
    example: 'Pick a preset instead of filling every field.',
    exampleZh: '选个预设，不用逐个填。'
  },
  {
    id: 'advanced',
    en: 'Advanced',
    phonetic: '/ədˈvænst/',
    zh: '高级设置',
    cat: 'setting',
    example: 'More options are hidden under Advanced.',
    exampleZh: '更多选项藏在 Advanced 里。'
  },
  {
    id: 'toggle',
    en: 'Toggle',
    phonetic: '/ˈtɑːɡl/',
    zh: '开关／切换',
    cat: 'setting',
    example: 'Toggle this on to enable web search.',
    exampleZh: '打开这个开关就能联网搜索。'
  },
  {
    id: 'slider',
    en: 'Slider',
    phonetic: '/ˈslaɪdər/',
    zh: '滑块',
    cat: 'setting',
    example: 'Drag the slider to set the value.',
    exampleZh: '拖动滑块来设定数值。'
  },
  {
    id: 'disabled',
    en: 'Disabled',
    phonetic: '/dɪsˈeɪbld/',
    zh: '已禁用',
    cat: 'setting',
    example: 'This option is disabled on the free plan.',
    exampleZh: '免费套餐下这个选项是禁用状态。'
  },
  {
    id: 'enabled',
    en: 'Enabled',
    phonetic: '/ɪˈneɪbld/',
    zh: '已启用',
    cat: 'setting',
    example: 'Memory is enabled by default.',
    exampleZh: '记忆功能默认是开启的。'
  },
  {
    id: 'threshold',
    en: 'Threshold',
    phonetic: '/ˈθreʃhoʊld/',
    zh: '阈值',
    cat: 'setting',
    example: 'Set a threshold for when to escalate to a human.',
    exampleZh: '设定一个阈值，超过就转人工。'
  },
  {
    id: 'version',
    en: 'Version',
    phonetic: '/ˈvɜːrʒn/',
    zh: '版本',
    cat: 'setting',
    example: 'The new version is faster but costs more.',
    exampleZh: '新版本更快，但也更贵。'
  },

  // ---------- 提示词 ----------
  {
    id: 'prompt',
    en: 'Prompt',
    phonetic: '/prɑːmpt/',
    zh: '提示词',
    cat: 'prompt',
    example: 'A clear prompt saves a lot of back and forth.',
    exampleZh: '写清提示词能省下很多来回。'
  },
  {
    id: 'instruction',
    en: 'Instruction',
    phonetic: '/ɪnˈstrʌkʃn/',
    zh: '指令',
    cat: 'prompt',
    example: 'Put the instruction before the data.',
    exampleZh: '把指令放在数据前面。'
  },
  {
    id: 'output',
    en: 'Output',
    phonetic: '/ˈaʊtpʊt/',
    zh: '输出',
    cat: 'prompt',
    example: 'Ask for JSON output if you need structure.',
    exampleZh: '需要结构化就要求 JSON 输出。'
  },
  {
    id: 'input',
    en: 'Input',
    phonetic: '/ˈɪnpʊt/',
    zh: '输入',
    cat: 'prompt',
    example: 'The input was too long for one request.',
    exampleZh: '输入太长，一次请求装不下。'
  },
  {
    id: 'constraint',
    en: 'Constraint',
    phonetic: '/kənˈstreɪnt/',
    zh: '约束条件',
    cat: 'prompt',
    example: 'Add a constraint: answer within 100 words.',
    exampleZh: '加一条约束：回答不超过 100 词。'
  },
  {
    id: 'tone',
    en: 'Tone',
    phonetic: '/toʊn/',
    zh: '语气',
    cat: 'prompt',
    example: 'Set a friendly tone for customer replies.',
    exampleZh: '把语气设定得亲切一些，用于回复客户。'
  },
  {
    id: 'format',
    en: 'Format',
    phonetic: '/ˈfɔːrmæt/',
    zh: '格式',
    cat: 'prompt',
    example: 'Specify the format: a table with three columns.',
    exampleZh: '指定格式：三列的表格。'
  },
  {
    id: 'role',
    en: 'Role',
    phonetic: '/roʊl/',
    zh: '角色',
    cat: 'prompt',
    example: 'Give the model a role, such as a code reviewer.',
    exampleZh: '给模型一个角色，比如代码审查员。'
  },
  {
    id: 'example',
    en: 'Example',
    phonetic: '/ɪɡˈzæmpl/',
    zh: '示例',
    cat: 'prompt',
    example: 'One good example is worth ten instructions.',
    exampleZh: '一个好示例胜过十条指令。'
  },
  {
    id: 'refine',
    en: 'Refine',
    phonetic: '/rɪˈfaɪn/',
    zh: '优化／细化',
    cat: 'prompt',
    example: 'Refine the prompt until the output is stable.',
    exampleZh: '不断优化提示词，直到输出稳定。'
  },
  {
    id: 'iterate',
    en: 'Iterate',
    phonetic: '/ˈɪtəreɪt/',
    zh: '迭代',
    cat: 'prompt',
    example: 'Iterate on the draft instead of rewriting it.',
    exampleZh: '在草稿上迭代，而不是推倒重写。'
  },
  {
    id: 'clarify',
    en: 'Clarify',
    phonetic: '/ˈklærəfaɪ/',
    zh: '澄清／说明清楚',
    cat: 'prompt',
    example: 'The model may ask you to clarify the request.',
    exampleZh: '模型可能会请你把需求说清楚。'
  },

  // ---------- 对话与界面 ----------
  {
    id: 'conversation',
    en: 'Conversation',
    phonetic: '/ˌkɑːnvərˈseɪʃn/',
    zh: '对话',
    cat: 'chat',
    example: 'Each conversation keeps its own context.',
    exampleZh: '每个对话各自保留上下文。'
  },
  {
    id: 'thread',
    en: 'Thread',
    phonetic: '/θred/',
    zh: '会话串',
    cat: 'chat',
    example: 'Reply in the same thread to keep things tidy.',
    exampleZh: '在同一个会话串里回复，保持整洁。'
  },
  {
    id: 'history',
    en: 'History',
    phonetic: '/ˈhɪstri/',
    zh: '历史记录',
    cat: 'chat',
    example: 'Your history is stored locally on this device.',
    exampleZh: '你的历史记录只存在这台设备本地。'
  },
  {
    id: 'attachment',
    en: 'Attachment',
    phonetic: '/əˈtætʃmənt/',
    zh: '附件',
    cat: 'chat',
    example: 'Add an attachment before you send the message.',
    exampleZh: '发送消息前先添加附件。'
  },
  {
    id: 'memory',
    en: 'Memory',
    phonetic: '/ˈmeməri/',
    zh: '记忆',
    cat: 'chat',
    example: 'Turn off memory if you do not want it to persist.',
    exampleZh: '不想被记住就关掉 memory。'
  },
  {
    id: 'pin',
    en: 'Pin',
    phonetic: '/pɪn/',
    zh: '置顶',
    cat: 'chat',
    example: 'Pin the chat so you can find it quickly.',
    exampleZh: '把对话置顶，方便快速找到。'
  },
  {
    id: 'sidebar',
    en: 'Sidebar',
    phonetic: '/ˈsaɪdbɑːr/',
    zh: '侧边栏',
    cat: 'chat',
    example: 'Your chats are listed in the left sidebar.',
    exampleZh: '聊天列表在左侧边栏。'
  },
  {
    id: 'workspace',
    en: 'Workspace',
    phonetic: '/ˈwɜːrkspeɪs/',
    zh: '工作区',
    cat: 'chat',
    example: 'Invite teammates to the same workspace.',
    exampleZh: '把同事邀请到同一个工作区。'
  },
  {
    id: 'draft',
    en: 'Draft',
    phonetic: '/dræft/',
    zh: '草稿',
    cat: 'chat',
    example: 'The draft was not sent by accident.',
    exampleZh: '草稿没有被误发出去。'
  },
  {
    id: 'notification',
    en: 'Notification',
    phonetic: '/ˌnoʊtɪfɪˈkeɪʃn/',
    zh: '通知',
    cat: 'chat',
    example: 'Enable notifications to know when it finishes.',
    exampleZh: '打开通知，完成时才知道。'
  },
  {
    id: 'settings',
    en: 'Settings',
    phonetic: '/ˈsetɪŋz/',
    zh: '设置',
    cat: 'chat',
    example: 'You can change the language in Settings.',
    exampleZh: '在 Settings 里可以改语言。'
  },
  {
    id: 'archive',
    en: 'Archive',
    phonetic: '/ˈɑːrkaɪv/',
    zh: '归档',
    cat: 'chat',
    example: 'Archive old chats instead of deleting them.',
    exampleZh: '旧对话归档就好，不用删。'
  },

  // ---------- 计费与限制 ----------
  {
    id: 'plan',
    en: 'Plan',
    phonetic: '/plæn/',
    zh: '套餐',
    cat: 'billing',
    example: 'The Pro plan includes higher limits.',
    exampleZh: 'Pro 套餐的额度更高。'
  },
  {
    id: 'subscription',
    en: 'Subscription',
    phonetic: '/səbˈskrɪpʃn/',
    zh: '订阅',
    cat: 'billing',
    example: 'Cancel your subscription anytime.',
    exampleZh: '随时可以取消订阅。'
  },
  {
    id: 'credits',
    en: 'Credits',
    phonetic: '/ˈkredɪts/',
    zh: '额度／积分',
    cat: 'billing',
    example: 'You have 500 credits left this month.',
    exampleZh: '你本月还剩 500 额度。'
  },
  {
    id: 'quota',
    en: 'Quota',
    phonetic: '/ˈkwoʊtə/',
    zh: '配额',
    cat: 'billing',
    example: 'The daily quota resets at midnight.',
    exampleZh: '每日配额在午夜重置。'
  },
  {
    id: 'ratelimit',
    en: 'Rate limit',
    phonetic: '/reɪt ˈlɪmɪt/',
    zh: '频率限制',
    cat: 'billing',
    example: 'You hit the rate limit; wait a minute and retry.',
    exampleZh: '你触发了频率限制，等一分钟再试。'
  },
  {
    id: 'usage',
    en: 'Usage',
    phonetic: '/ˈjuːsɪdʒ/',
    zh: '用量',
    cat: 'billing',
    example: 'Check usage before the billing cycle ends.',
    exampleZh: '计费周期结束前看看用量。'
  },
  {
    id: 'upgrade',
    en: 'Upgrade',
    phonetic: '/ˈʌpɡreɪd/',
    zh: '升级',
    cat: 'billing',
    example: 'Upgrade to unlock the faster model.',
    exampleZh: '升级才能用更快的模型。'
  },
  {
    id: 'freetrial',
    en: 'Free trial',
    phonetic: '/friː ˈtraɪəl/',
    zh: '免费试用',
    cat: 'billing',
    example: 'The free trial lasts 14 days.',
    exampleZh: '免费试用为期 14 天。'
  },
  {
    id: 'invoice',
    en: 'Invoice',
    phonetic: '/ˈɪnvɔɪs/',
    zh: '账单／发票',
    cat: 'billing',
    example: 'Download the invoice from the billing page.',
    exampleZh: '在计费页面下载发票。'
  },
  {
    id: 'billing',
    en: 'Billing',
    phonetic: '/ˈbɪlɪŋ/',
    zh: '计费',
    cat: 'billing',
    example: 'Billing is based on tokens used.',
    exampleZh: '计费按消耗的 token 计算。'
  },
  {
    id: 'expire',
    en: 'Expire',
    phonetic: '/ɪkˈspaɪər/',
    zh: '过期',
    cat: 'billing',
    example: 'Your credits expire at the end of the year.',
    exampleZh: '你的额度会在年底过期。'
  },
  {
    id: 'renew',
    en: 'Renew',
    phonetic: '/rɪˈnuː/',
    zh: '续费',
    cat: 'billing',
    example: 'Renew early to avoid interruption.',
    exampleZh: '提前续费，避免服务中断。'
  },

  // ---------- 回答与质量 ----------
  {
    id: 'hallucination',
    en: 'Hallucination',
    phonetic: '/həˌluːsɪˈneɪʃn/',
    zh: '幻觉（编造内容）',
    cat: 'quality',
    example: 'The citation was a hallucination.',
    exampleZh: '那个引用是模型编造的。',
    note: 'AI 说得越自信，越要核实。'
  },
  {
    id: 'citation',
    en: 'Citation',
    phonetic: '/saɪˈteɪʃn/',
    zh: '引用出处',
    cat: 'quality',
    example: 'Open the citation to check the source.',
    exampleZh: '点开引用去看原始来源。'
  },
  {
    id: 'source',
    en: 'Source',
    phonetic: '/sɔːrs/',
    zh: '来源',
    cat: 'quality',
    example: 'The source is a blog post, not a paper.',
    exampleZh: '来源是博客文章，不是论文。'
  },
  {
    id: 'reasoning',
    en: 'Reasoning',
    phonetic: '/ˈriːzənɪŋ/',
    zh: '推理',
    cat: 'quality',
    example: 'Show the reasoning before the final answer.',
    exampleZh: '先给推理过程，再给最终答案。'
  },
  {
    id: 'summary',
    en: 'Summary',
    phonetic: '/ˈsʌməri/',
    zh: '摘要',
    cat: 'quality',
    example: 'Give me a three-sentence summary.',
    exampleZh: '给我一个三句话的摘要。'
  },
  {
    id: 'accurate',
    en: 'Accurate',
    phonetic: '/ˈækjərət/',
    zh: '准确的',
    cat: 'quality',
    example: 'The numbers were accurate but outdated.',
    exampleZh: '数字是准确的，但已经过时。'
  },
  {
    id: 'bias',
    en: 'Bias',
    phonetic: '/ˈbaɪəs/',
    zh: '偏见',
    cat: 'quality',
    example: 'Training data can introduce bias.',
    exampleZh: '训练数据可能带入偏见。'
  },
  {
    id: 'grounding',
    en: 'Grounding',
    phonetic: '/ˈɡraʊndɪŋ/',
    zh: '事实依据／接地',
    cat: 'quality',
    example: 'Grounding the answer in your documents reduces errors.',
    exampleZh: '让回答基于你的文档，能减少错误。'
  },
  {
    id: 'verify',
    en: 'Verify',
    phonetic: '/ˈverɪfaɪ/',
    zh: '核实',
    cat: 'quality',
    example: 'Always verify facts before publishing.',
    exampleZh: '发布前一定要核实事实。'
  },
  {
    id: 'disclaimer',
    en: 'Disclaimer',
    phonetic: '/dɪsˈkleɪmər/',
    zh: '免责声明',
    cat: 'quality',
    example: 'The disclaimer says output may be inaccurate.',
    exampleZh: '免责声明写着输出可能不准确。'
  },
  {
    id: 'limitation',
    en: 'Limitation',
    phonetic: '/ˌlɪmɪˈteɪʃn/',
    zh: '局限性',
    cat: 'quality',
    example: 'Know the model’s limitations before relying on it.',
    exampleZh: '依赖它之前，先了解它的局限。'
  },
  {
    id: 'confidence',
    en: 'Confidence',
    phonetic: '/ˈkɑːnfɪdəns/',
    zh: '置信度',
    cat: 'quality',
    example: 'Low confidence does not always mean it is wrong.',
    exampleZh: '置信度低不一定就是错的。'
  }
];

const WORD_MAP = {};
for (let i = 0; i < WORDS.length; i++) {
  WORD_MAP[WORDS[i].id] = WORDS[i];
}

const CAT_MAP = {};
for (let i = 0; i < CATEGORIES.length; i++) {
  CAT_MAP[CATEGORIES[i].id] = CATEGORIES[i];
}

module.exports = {
  CATEGORIES,
  WORDS,
  WORD_MAP,
  CAT_MAP,
  total: WORDS.length
};
