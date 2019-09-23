// pages/courselist/courselist.js
const util = require('../../utils/util.js')

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
    listIndex: 0,
    courseSelected: [],
    category: [],
    bgColor: [],
    courseName: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    var that = this
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      var index = data.index
      var colors = []
      for (var i = 0; i < util.categoryList[index].category.length; i++) {
        colors[i] = (i == 0) ? ".bg-white" : "bg-grey"
      }
      that.setData({
        listIndex: index,
        category: util.categoryList[index].category,
        courseName: util.categoryList[index].courseName,
        bgColor: colors,
        courseSelected: util.categoryList[index].category[0].courses
      })     
    })
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.courseName
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
    for (var i=0; i<this.data.category.length; i++) {
      colors[i] = (e.mark.index == i) ? ".bg-white": "bg-grey"
    }
    this.setData({
      bgColor: colors,
      courseSelected: this.data.category[e.mark.index].courses
    })
  },

  bindRightItemTap: function (e) {
    var that = this
    wx.navigateTo({
      url: '../coursedetail/coursedetail',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { index: e.mark.index, listIndex: that.data.listIndex })
      }
    });
  }

})