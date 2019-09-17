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
    showTopTips: true,

    formData: {

    },
    rules: [{
      name: 'name',
      rules: { required: true, message: '姓名和联系方式必填' },
    }, { // 多个规则
      name: 'mobile',
      rules: [{ required: true, message: '姓名和联系方式必填' }, { mobile: true, message: 'mobile格式不对' }],
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    formInputChange(e) {
      const { field } = e.currentTarget.dataset
      this.setData({
        [`formData.${field}`]: e.detail.value
      })
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
    }
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
