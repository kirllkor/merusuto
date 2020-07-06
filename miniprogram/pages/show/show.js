// miniprogram/pages/show/show.js
/**
 * 计算星级函数
 */
function addrare(num) {
  var level = "";
  for (let j = 0; j < num; j++) {
    level += '★';
  }
  return level;
};
/*
  计算满级数据
*/
function manji(sum,type){
  var value = 0;
  if(type == 1){
    value = Math.floor(sum * 1.9);
  } else if(type == 2){
    value = sum * 2;
  } else if (type == 3) {
    value = Math.floor(sum * 2.1);
  }
  return value;
}

/*
计算满觉数据
*/ 
function manjue(sum,type,rare){
  var value = 0;
  if(rare == 1 ){
    value = sum * 2 + Math.floor(sum / (rare * 10 + 19)) * 5 * 5;
  }else{
    if (type == 1) {
      value = Math.floor(sum * 1.9) + Math.floor(sum/(rare*10+19)*0.9)*15*5;
    } else if (type == 2) {
      value = sum * 2 + Math.floor(sum / (rare * 10 + 19)) * 15 * 5;
    } else if (type == 3) {
      value = Math.floor(sum * 2.1) + Math.floor(sum / (rare * 10 + 19) * 1.1) * 15 * 5;
    }
  }
  return value;
}
/**
 * 成长类型
 */
function type(type){
  var value = "";
  if(type == 1){
    value = "早熟";
  }else if(type == 2){
    value = "平均";
  }else if(type == 3){
    value = "晚成";
  }else{
    value = "平均";
  }
  return value;
}
/** 
 * 属性补正处理
 */
function ele(ele){
  var value = null;
  value = Math.floor(ele*100)+'%';
  console.log(value);
  return value;
}
//点击列表人物的下标
var index;
Page({
      /**
     * 改变背景样式
     */
  change: function (e) {
    // console.log(e.detail.current);
    this.setData({
      currentdark: 'dark' + e.detail.current
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    url : null,
    currentdark : 'dark0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options'+options.index);
    wx.showToast({
      title: '加载立绘',
      duration:1000,
      icon:'loading'
    });
    // console.log(windowHeight);
    // var id = options.id;
    var that = this;
    //记录对比按钮的事件
    var btn;
    index = options.index;
    wx.getStorage({
      key: 'end',
      success: function(res) {
        // console.log(res.data[index]);
        //判断是否参加对比
        var id = res.data[index].id;
        var con_id = wx.getStorageSync('con1').id;
        // console.log("con_id:"+con_id)
        if(id == con_id){
          btn = true;
        }
        else{
          btn = false;
        }
        // console.log(btn);
        //武器数据检查
        if (res.data[index].weapon == null){
          res.data[index].weapon = '无'
        }
        switch (res.data[index].weapon){
          case 1: 
            res.data[index].weapon = '斩击'
            break;
          case 2:
            res.data[index].weapon = '突击'
            break;
          case 3:
            res.data[index].weapon = '打击'
            break;
          case 4:
            res.data[index].weapon = '弓箭'
            break;
          case 5:
            res.data[index].weapon = '魔法'
            break;
          case 6:
            res.data[index].weapon = '铳弹'
            break;
          case 7:
            res.data[index].weapon = '治疗'
            break;
        }
        //段数数据检查
        if (res.data[index].hits == null) {
          res.data[index].hits = 1;
        }
        //补正数据检查
        if (res.data[index].fire == null){
          res.data[index].fire = 1;
        }
        if (res.data[index].aqua == null) {
          res.data[index].fire = 1;
        }
        if (res.data[index].wind == null) {
          res.data[index].fire = 1;
        }
        if (res.data[index].light == null) {
          res.data[index].fire = 1;
        }
        if (res.data[index].dark == null) {
          res.data[index].fire = 1;
        }
        //攻速数据检查
        if (res.data[index].aspd == null) {
          res.data[index].aspd = 1;
        }
        //攻距数据检查
        if (res.data[index].aarea == null) {
          res.data[index].aarea = 1;
        }
        //攻数数据检查
        if (res.data[index].anum == null) {
          res.data[index].anum = 1;
        }
        //移速数据检查
        if (res.data[index].mspd == null) {
          res.data[index].mspd = 1;
        }
        //韧性数据检查
        if (res.data[index].tenacity == null) {
          res.data[index].tenacity = 1;
        }
        //成长数据检查
        if (res.data[index].type == null) {
          res.data[index].type = 1;
        }
        //国家数据检查
        if (res.data[index].country == null) {
          res.data[index].country = '无';
        }
        //职业数据检查
        if (res.data[index].career == null) {
          res.data[index].career = '无';
        }
        //性别数据检查
        if (res.data[index].gender == null || res.data[index].gender == 1) {
          res.data[index].gender = '不明';
        } else if (res.data[index].gender == 2){
          res.data[index].gender = '男';
        } else if (res.data[index].gender == 3) {
          res.data[index].gender = '女';
        }
        //性格数据检查
        if (res.data[index].nature == null) {
          res.data[index].nature = '无';
        }
        //年龄数据检查
        if (res.data[index].age == null) {
          res.data[index].age = 999;
        }
        //兴趣数据检查
        if (res.data[index].interest == null) {
          res.data[index].interest = '无';
        }
        that.setData({
          url: 'cloud://merusuto-918274.6d65-merusuto-918274/original/' + res.data[index].id + '.png',
          icon: 'cloud://merusuto-918274.6d65-merusuto-918274/icon/' + res.data[index].id + '.png',
          id: res.data[index].id,
          rare: addrare(res.data[index].rare),
          title: res.data[index].title,
          name: res.data[index].name,
          weapon: res.data[index].weapon,
          life: res.data[index].life,
          aarea: res.data[index].aarea,
          blife: manji(res.data[index].life,res.data[index].type),
          anum: res.data[index].anum,
          mlife: manjue(res.data[index].life, res.data[index].type, res.data[index].rare),
          aspd: res.data[index].aspd,
          atk: res.data[index].atk,
          tenacity: res.data[index].tenacity,
          batk: manji(res.data[index].atk, res.data[index].type),
          mspd: res.data[index].mspd,
          matk: manjue(res.data[index].atk, res.data[index].type, res.data[index].rare),
          hits: res.data[index].hits,
          dps: Math.floor(res.data[index].atk / res.data[index].aspd),
          type: type(res.data[index].type),
          bdps: manji(Math.floor(res.data[index].atk / res.data[index].aspd), res.data[index].type),
          fire: ele(res.data[index].fire),
          mdps: Math.floor(manjue(res.data[index].atk, res.data[index].type, res.data[index].rare) / res.data[index].aspd),
          aqua: ele(res.data[index].aqua),
          alldps: Math.floor(res.data[index].atk / res.data[index].aspd * res.data[index].anum),
          wind: ele(res.data[index].wind),
          balldps: Math.floor(manji(res.data[index].atk, res.data[index].type)/res.data[index].aspd * res.data[index].anum),
          light: ele(res.data[index].light),
          malldps: Math.floor(manjue(res.data[index].atk, res.data[index].type, res.data[index].rare) / res.data[index].aspd * res.data[index].anum),
          dark: ele(res.data[index].dark),
          country: res.data[index].country,
          career: res.data[index].career,
          gender: res.data[index].gender,
          interest: res.data[index].interest,
          age: res.data[index].age,
          nature: res.data[index].nature,
          //按钮绑定
          btn: btn
        })
        
      },
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
    // wx.hideLoading();
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

  },
  //对比按钮处理事件
  contrast: function(){
    var that = this;
    var con1;
    // console.log(index);
    wx.getStorage({
      key: 'con1',
      success: function(res) {
        con1 = res.data;
        var id = res.data.id;
        wx.getStorage({
          key: 'end',
          success: function(res) {
            //再次点击时取消对比
            if(id == res.data[index].id){
              wx.removeStorageSync('con1');
              that.setData({
                btn:false
              })
              wx.showToast({
                title: '已取消对比',
                duration: 1000,
              })
            }
            //如果不同，则放入第二个对比,并跳转页面
            else{
              wx.setStorage({
                key: 'con2',
                data: res.data[index],
              })
              // console.log("con1" + con1.name);
              wx.navigateTo({
                url: '/pages/contrast/contrast'
              })
            }
          },
        })
        // console.log("con1:"+res.data.id);
      },
      //加入第一个对比
      fail: function(){
        wx.getStorage({
          key: 'end',
          success: function(res) {
            wx.setStorage({
              key: 'con1',
              data: res.data[index],
            })
            that.setData({
              btn: true
            })
            wx.showToast({
              title: '已加入对比',
              duration: 1000,
            })
          },
        })
      },
    })
  }
})