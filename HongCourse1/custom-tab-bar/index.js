Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/home/home",
      iconPath: "/images/home.png",
      selectedIconPath: "/images/home-o.png",
      text: "主页"
    },{
        pagePath: "/pages/subscribe/subscribe",
      iconPath: "/images/yuyue.png",
      selectedIconPath: "/images/yuyue-o.png",
      text: "预约"
    },{
      
      iconPath: "/images/zixun.png",
      selectedIconPath: "/images/zixun-o.png",
      text: "咨询"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      if (data.index == 2){
        wx.makePhoneCall({
          phoneNumber: '17717074318',
        })
      }else{
        wx.switchTab({ url })
        this.setData({
          selected: data.index
        })
      }
      
      
    }
  }
})