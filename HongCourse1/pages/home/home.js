// pages/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      '/images/logo-n.png',
      '/images/logo-n1.png',
      '/images/logo-n2.png'
    ],
    info: "",
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    latitude: 31.147340,
    longitude: 121.135830,
    markers: [{
      latitude: 31.147340,
      longitude: 121.135830,
      label: {
        content: "托普教育"
      }
    }],
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      this.setData({
        search: this.search.bind(this)
      })
      wx.setNavigationBarTitle({
        title: "托普教育"
      })
    },
    moved: function () { },
    detached: function () { },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    search: function (value) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
        }, 200)
      })
    },
    selectResult: function (e) {
      console.log('select result', e.detail)
    },
    bindButtonTap: function (e) {
      wx.navigateTo({
        url: '../courselist/courselist',
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { index: e.mark.index })
        }
      });
    },
    bindClosedTap: function (e) {
      this.setData({
        info: "敬请期待"
      })
    },
    bindSearchConfirm: function (e) {
      wx.navigateTo({
        url: '../searchresult/searchresult',
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { keyword: e.detail.value })
        }
      });
    }
  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})
