// pages/subscribe/subscribe.js
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
    index: 0,
    showTopTips: true,
    error: "",
    name: "",
    mobile: "",
    course: "",
    formData: {

    },
    rules: [{
      name: 'name',
      rules: { required: true, message: '姓名和联系方式必填' },
    }, { // 多个规则
      name: 'mobile',
      rules: [{ required: true, message: '姓名和联系方式必填' }],
    }],
    courseList: [
      "","托福","雅思","生物","地理","数学","英语","语文"
    ]
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      wx.setNavigationBarTitle({
        title: "预约"
      })
    },
    moved: function () { },
    detached: function () { },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    formInputChange(e) {
      const { field } = e.currentTarget.dataset
      this.setData({
        [`formData.${field}`]: e.detail.value,
        [`${field}`]: e.detail.value
      })
      //console.log(this.data.name)
    },
    submitForm() {
      this.selectComponent('#form').validate((valid, errors) => {
        console.log('valid', valid, errors)
        if (!valid) {
          const firstError = Object.keys(errors)
          if (firstError.length) {
            this.setData({
              error: errors[firstError[0]].message
            })

          }
        } else {
          wx.redirectTo({
            url: '../subresult/subresult'
          })
        }
      })
    },
    bindPickerChange: function (e) {
      //console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },
  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  }
})
