// pages/courselist/courselist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // courseName: '',
    // categoryList: ["托福", "雅思"],
    // bgColor: [
    //   ".bg-white", ".bg-grey"
    // ],
    // courseSelected: ["VIP一对三班", "托福精品班"],
    // courses:[
    //   ["VIP一对三班", "托福精品班"],
    //   ["VIP一对三班", "雅思精品班"],
    // ], 
    listSelected: {},
    courseSelected: [],
    list: [
      {
        courseName: '海外留学',
        category: [
          {
            name: "托福",
            bgColor: ".bg-white",
            courses: ["VIP一对三班", "托福精品班"]
          },
          {
            name: "雅思",
            bgColor: ".bg-grey",
            courses: ["VIP一对三班", "雅思精品班"]
          }
        ]
      },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    var that = this
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      that.setData({
        listSelected: that.data.list[data],
        courseSelected: that.data.listSelected.category[0].courses
      })
      
      wx.setNavigationBarTitle({
        title: that.data.listSelected.courseName
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindLeftItemTap: function (e) {
    // var node = wx.createSelectorQuery().selectAll('.left-item').node(function (res) {
    //   console.log(res.node) // 节点对应的 Canvas 实例。
    // }).exec()
    // console.log(node)
    var colors = []
    for (var i=0; i<this.data.bgColor.length; i++) {
      colors[i] = (e.mark.index == i) ? ".bg-white": "bg-grey"
    }
    this.setData({
      bgColor: colors,
      courseSelected: this.data.courses[e.mark.index]
    })
  }

})