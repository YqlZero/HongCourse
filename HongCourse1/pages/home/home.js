Page({
  data: {
    list: [{
      text: "主页",
      iconPath: "/images/home.png",
      selectedIconPath: "/images/home-o.png",
    },
    {
      text: "预约",
      iconPath: "/images/yuyue.png",
      selectedIconPath: "/images/yuyue-o.png",
    }, 
    {
      text: "咨询",
      iconPath: "/images/zixun.png",
      selectedIconPath: "/images/zixun-o.png",
    }]
  },
  tabChange(e) {
    console.log('tab change', e)
    if (e.detail.index == 2) {
      wx.makePhoneCall({
        phoneNumber: '18817580215' 
      })
    }
  }
});