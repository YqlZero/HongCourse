const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const tableData = [
  {
    index: 0,
    category: '托福',
    category_en: 'TOEFL',
    tableHeaderName: 'VIP一对三班',
    tableHeaderFee: '32800元/人',
    searchContent: '托福VIP一对三班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "60小时，30节（冲90分）" },
      { "imgPath": "/images/desk.png", "text": "3人" },
      { "imgPath": "/images/book.png", "text": "托福阅读、讲座听力、对话听力、托福口语、综合写作、独立写作、托福词汇" },
      { "imgPath": "/images/calendar.png", "text": "9月21日—12月21日（周六/周日班）" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>美国、加拿大留学</label>意向的高中学生", }
    ],
    listIndex: 0
  },
  {
    index: 1,
    category: '托福',
    category_en: 'TOEFL',
    tableHeaderName: '托福精品班',
    tableHeaderFee: '26800元/人',
    searchContent: '托福精品班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "70小时，35节" },
      { "imgPath": "/images/desk.png", "text": "6-10人" },
      { "imgPath": "/images/book.png", "text": "托福阅读、讲座听力、对话听力、托福口语、综合写作、独立写作、托福词汇、模考" },
      { "imgPath": "/images/calendar.png", "text": "9月21日—12月21日（周六/周日班）" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>美国、加拿大留学</label>意向的高中学生", }
    ],
    listIndex: 0
  },
  {
    index: 2,
    category: '雅思',
    category_en: 'IELTS',
    tableHeaderName: 'VIP一对三班',
    tableHeaderFee: '36800元/人',
    searchContent: '雅思VIP一对三班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "60小时，30节（冲7.5分）" },
      { "imgPath": "/images/desk.png", "text": "3人" },
      { "imgPath": "/images/book.png", "text": "雅思阅读、雅思听力、雅思口语、图表写作、独立写作、雅思词汇" },
      { "imgPath": "/images/calendar.png", "text": "9月21日—12月21日（周六/周日班）" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>英、澳、新加坡及欧洲留学</label>意向的高中学生", }
    ],
    listIndex: 0
  },
  {
    index: 3,
    category: '雅思',
    category_en: 'IELTS',
    tableHeaderName: '雅思精品班',
    tableHeaderFee: '26800元/人',
    searchContent: '雅思精品班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "70小时，35节" },
      { "imgPath": "/images/desk.png", "text": "6-10人" },
      { "imgPath": "/images/book.png", "text": "雅思阅读、雅思听力、雅思口语、图表写作、独立写作、雅思词汇、模考" },
      { "imgPath": "/images/calendar.png", "text": "9月21日—12月21日（周六/周日班）" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>英、澳、新加坡及欧洲留学</label>意向的高中学生", }
    ],
    listIndex: 0
  },
  {
    index: 4,
    category: '生物',
    category_en: 'BIO',
    tableHeaderName: '合格考班',
    tableHeaderFee: '6800元/人',
    searchContent: '生物合格考班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "15节，90分钟/节" },
      { "imgPath": "/images/desk.png", "text": "15人" },
      { "imgPath": "/images/book.png", "text": "高一生物基础、合格考涉及内容、合格考模考" },
      { "imgPath": "/images/calendar.png", "text": "周日班（11月18日--明年3月1日）、寒假集训班" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>所有高一学生（不分文理）</label>" }
    ],
    listIndex: 1
  },
  {
    index: 5,
    category: '生物',
    category_en: 'BIO',
    tableHeaderName: '等级考班',
    tableHeaderFee: '9800元/人',
    searchContent: '生物等级考班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "15节，90分钟/节" },
      { "imgPath": "/images/desk.png", "text": "15人" },
      { "imgPath": "/images/book.png", "text": "高二生物重难点、等级考（小高考）刷题、模考" },
      { "imgPath": "/images/calendar.png", "text": "寒假集训班、春季冲刺班（2月2日—5月10日）" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>高二学生（选择生物小三门）</label>" }
    ],
    listIndex: 1
  },
  {
    index: 6,
    category: '地理',
    category_en: 'GEO',
    tableHeaderName: '合格考班',
    tableHeaderFee: '6800元/人',
    searchContent: '地理合格考班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "15节，90分钟/节" },
      { "imgPath": "/images/desk.png", "text": "15人" },
      { "imgPath": "/images/book.png", "text": "高一地理基础、合格考涉及内容、合格考模考" },
      { "imgPath": "/images/calendar.png", "text": "周日班（11月18日--明年3月1日）、寒假集训班" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>所有高一学生（不分文理）</label>" }
    ],
    listIndex: 1
  },
  {
    index: 7,
    category: '地理',
    category_en: 'GEO',
    tableHeaderName: '等级考班',
    tableHeaderFee: '9800元/人',
    searchContent: '地理等级考班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "15节，90分钟/节" },
      { "imgPath": "/images/desk.png", "text": "15人" },
      { "imgPath": "/images/book.png", "text": "高二地理重难点、等级考（小高考）刷题、模考" },
      { "imgPath": "/images/calendar.png", "text": "寒假集训班、春季冲刺班（2月2日—5月10日）" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>高二学生（选择地理小三门）</label>" }
    ],
    listIndex: 1
  },
  {
    index: 8,
    category: '数学',
    category_en: 'Math',
    tableHeaderName: '高一强化班',
    tableHeaderFee: '7800元/人',
    searchContent: '数学高一强化班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "15节，90分钟/节" },
      { "imgPath": "/images/desk.png", "text": "10-15人" },
      { "imgPath": "/images/book.png", "text": "高一数学集合概念、函数与反函数运用、不等式等知识点补习" },
      { "imgPath": "/images/calendar.png", "text": "周六班（9.21开班）、周日班（9.22开班）、寒假集训班" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>所有高一学生（不分文理）</label>" }
    ],
    listIndex: 1
  },
  {
    index: 9,
    category: '数学',
    category_en: 'Math',
    tableHeaderName: '一模班',
    tableHeaderFee: '9800元/人',
    searchContent: '数学一模班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "15节，90分钟/节" },
      { "imgPath": "/images/desk.png", "text": "10-15人" },
      { "imgPath": "/images/book.png", "text": "针对高二下学期一模考内容" },
      { "imgPath": "/images/calendar.png", "text": "周六班（10.12开班）、周日班（10.13开班）、寒假集训班" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>所有高二学生（不分文理）</label>" }
    ],
    listIndex: 1
  },
  {
    index: 10,
    category: '英语',
    category_en: 'ENG',
    tableHeaderName: '高一语法班',
    tableHeaderFee: '7800元/人',
    searchContent: '英语高一语法班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "15节，90分钟/节" },
      { "imgPath": "/images/desk.png", "text": "10-15人" },
      { "imgPath": "/images/book.png", "text": "高一英语语法：句子成分、非谓语、定语从句、状语从句、名词性从句、倒装句等重点语法" },
      { "imgPath": "/images/calendar.png", "text": "周六班（9.21开班）、周日班（9.22开班）、寒假集训班" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>所有高一学生（不分文理）</label>" }
    ],
    listIndex: 1
  },
  {
    index: 11,
    category: '英语',
    category_en: 'ENG',
    tableHeaderName: '一模班',
    tableHeaderFee: '9800元/人',
    searchContent: '英语一模班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "15节，90分钟/节" },
      { "imgPath": "/images/desk.png", "text": "10-15人" },
      { "imgPath": "/images/book.png", "text": "针对高二一模考阅读、语法、写作、翻译等难点" },
      { "imgPath": "/images/calendar.png", "text": "周六班（10.12—明年1.11）、周日班（10.13—明年1.12）、寒假集训班" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>所有高二学生（不分文理）</label>" }
    ],
    listIndex: 1
  },
  {
    index: 12,
    category: '语文',
    category_en: 'CHN',
    tableHeaderName: '写作班',
    tableHeaderFee: '7800元/人',
    searchContent: '语文写作班',
    listData: [
      { "imgPath": "/images/clock.png", "text": "12节，90分钟/节" },
      { "imgPath": "/images/desk.png", "text": "10-15人" },
      { "imgPath": "/images/book.png", "text": "高中语文写作、文学常识" },
      { "imgPath": "/images/calendar.png", "text": "周日班（9.22开班）、寒假集训班" },
      { "imgPath": "/images/level.png", "text": "<label class='table-big-font'>所有高一、高二、高三学生（不分文理）</label>" }
    ],
    listIndex: 1
  }
]

const categoryList = [
  {
    courseName: '海外留学',
    category: [
      { name: "托福", courses: [{ index: 0, name: "VIP一对三班" }, { index: 1, name: "托福精品班" }] },
      { name: "雅思", courses: [{ index: 2, name: "VIP一对三班" }, { index: 3, name: "雅思精品班" }] }
    ]
  },
  {
    courseName: '高中课程',
    category: [
      { name: "生物", courses: [{ index: 4, name: "合格考班" }, { index: 5, name: "等级考班" }] },
      { name: "地理", courses: [{ index: 6, name: "合格考班" }, { index: 7, name: "等级考班" }] },
      { name: "数学", courses: [{ index: 8, name: "高一强化班" }, { index: 9, name: "一模班" }] },
      { name: "英语", courses: [{ index: 10, name: "高一语法班" }, { index: 11, name: "一模班" }] },
      { name: "语文", courses: [{ index: 12, name: "写作班" }] },
    ]
  }
]

const searchResult = word => {
  var result = []
  for (var i = 0; i < tableData.length; i++) {
    if (tableData[i].searchContent.indexOf(word) > -1) {
      result.push(tableData[i])
    }
  }
  return result
}


module.exports = {
  formatTime: formatTime,
  tableData: tableData,
  categoryList: categoryList,
  searchResult: searchResult
}
