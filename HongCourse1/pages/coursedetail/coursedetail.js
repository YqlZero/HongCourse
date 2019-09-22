// pages/coursedetail/coursedetail.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseIndex: "",
    colorIndex: "",
    table: [],
    courseName: "",
    coursePrice: "",
    category: "",
    category_en: "",
    titleLogoColor: "",
    rowTextColor: "",
    titleLogoShape: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // var index = 0  //data.index
    // that.setData({
    //   courseIndex: index,
    //   table: util.tableData[index].listData,
    //   courseName: util.tableData[index].tableHeaderName,
    //   coursePrice: util.tableData[index].tableHeaderFee

    // })
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      var index = data.index
      var cIndex = parseInt(index/2) %2
      console.log(data.listIndex)
      that.setData({
        courseIndex: index,
        table: util.tableData[index].listData,
        courseName: util.tableData[index].tableHeaderName,
        coursePrice: util.tableData[index].tableHeaderFee,
        category: util.tableData[index].category,
        category_en: util.tableData[index].category_en,
        titleLogoColor: "title-logo-color" + cIndex,
        rowTextColor: "row-text-color" + cIndex,
        colorIndex: cIndex,
        titleLogoShape: "title-logo-shape" + data.listIndex
      })

      wx.setNavigationBarTitle({
        title: that.data.category + "--" + that.data.courseName
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})