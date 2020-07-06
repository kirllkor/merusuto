// miniprogram/pages/contrast/contrast.js
//武器检查函数
function weapon(weapon){
  switch (weapon) {
    case 1:
      weapon = '斩击'
      break;
    case 2:
      weapon = '突击'
      break;
    case 3:
      weapon = '打击'
      break;
    case 4:
      weapon = '弓箭'
      break;
    case 5:
      weapon = '魔法'
      break;
    case 6:
      weapon = '铳弹'
      break;
    case 7:
      weapon = '治疗'
      break;
  }
  return weapon;
}
//成长检查函数
function type(type){
  switch(type){
    case 1: 
      type = '早熟'
      break;
    case 2:
      type = '平均'
      break;
    case 3:
      type = '晚成'
      break;  
  }
  return type;
}
/*
  计算满级数据
*/
function manji(sum, type) {
  var value = 0;
  if (type == 1) {
    value = Math.floor(sum * 1.9);
  } else if (type == 2) {
    value = sum * 2;
  } else if (type == 3) {
    value = Math.floor(sum * 2.1);
  }
  return value;
};
/*
计算满觉数据
*/
function manjue(sum, type, rare) {
  var value = 0;
  if (rare == 1) {
    value = sum * 2 + Math.floor(sum / (rare * 10 + 19)) * 5 * 5;
  } else {
    if (type == 1) {
      value = Math.floor(sum * 1.9) + Math.floor(sum / (rare * 10 + 19) * 0.9) * 15 * 5;
    } else if (type == 2) {
      value = sum * 2 + Math.floor(sum / (rare * 10 + 19)) * 15 * 5;
    } else if (type == 3) {
      value = Math.floor(sum * 2.1) + Math.floor(sum / (rare * 10 + 19) * 1.1) * 15 * 5;
    }
  }
  return value;
}
//绘制canvas属性条函数
function draw(canvas_id, value, except , color){
  const context = wx.createCanvasContext(canvas_id);
  context.setFillStyle(color);
  context.fillRect(0, 0, value / except, 20);
  context.draw();
  context.closePath();
}
//初始生命值
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 1000,
    })
    var con1 = wx.getStorageSync('con1');
    var con2 = wx.getStorageSync('con2');
    //画图
    //初始生命值
    draw('life1', con1.life, 60, '#c3ffa0');
    draw('life2', con2.life, 60, '#c3ffa0');
    //满级生命值
    draw('blife1', manji(con1.life, con1.type), 60, '#97fd5c');
    draw('blife2', manji(con2.life, con2.type), 60, '#97fd5c');
    //满觉生命值
    draw('mlife1', manjue(con1.life, con1.type, con1.rare), 60, '#7bf833');
    draw('mlife2', manjue(con2.life, con2.type, con2.rare), 60, '#7bf833');
    //初始攻击力
    draw('atk1', con1.atk, 75, '#ff9c8f');
    draw('atk2', con2.atk, 75, '#ff9c8f');
    //满级攻击力
    draw('batk1', manji(con1.atk, con1.type), 75, '#ff7070');
    draw('batk2', manji(con2.atk, con2.type), 75, '#ff7070');
    //满觉生命值
    draw('matk1', manjue(con1.atk, con1.type, con1.rare), 75, '#f7432c');
    draw('matk2', manjue(con2.atk, con2.type, con2.rare), 75, '#f7432c');
    //初始单体DPS
    draw('dps1', Math.floor(con1.atk / con1.aspd), 30, '#fff176');
    draw('dps2', Math.floor(con2.atk / con2.aspd), 30, '#fff176');
    //满级单体DPS
    draw('bdps1', manji(Math.floor(con1.atk / con1.aspd), con1.type), 30, '#ffee52');
    draw('bdps2', manji(Math.floor(con2.atk / con2.aspd), con2.type), 30, '#ffee52');
    //满觉单体DPS
    draw('mdps1', Math.floor(manjue(con1.atk, con1.type, con1.rare) / con1.aspd), 30, '#ffe91f');
    draw('mdps2', Math.floor(manjue(con2.atk, con2.type, con2.rare) / con2.aspd), 30, '#ffe91f');
    //初始总体DPS
    draw('alldps1', Math.floor(con1.atk / con1.aspd * con1.anum), 70, '#ffc894');
    draw('alldps2', Math.floor(con2.atk / con2.aspd * con2.anum), 70, '#ffc894');
    //满级总体DPS
    draw('balldps1', Math.floor(manji(con1.atk, con1.type) / con1.aspd * con1.anum), 70, '#ffb36c');
    draw('balldps2', Math.floor(manji(con2.atk, con2.type) / con2.aspd * con2.anum), 70, '#ffb36c');
    //满觉总体DPS
    draw('malldps1', Math.floor(manjue(con1.atk, con1.type, con1.rare) / con1.aspd * con1.anum), 70, '#ff9634');
    draw('malldps2', Math.floor(manjue(con2.atk, con2.type, con2.rare) / con2.aspd * con2.anum), 70, '#ff9634');
    //攻速
    draw('aspd1', con1.aspd, 0.02, '#42fd3c');
    draw('aspd2', con2.aspd, 0.02, '#42fd3c');
    //攻距
    draw('aarea1', con1.aarea, 0.9, '#42fd3c');
    draw('aarea2', con2.aarea, 0.9, '#42fd3c');
    //攻数
    draw('anum1', con1.anum, 0.02, '#58ffff');
    draw('anum2', con2.anum, 0.02, '#58ffff');
    //移速
    draw('mspd1', con1.mspd, 0.4, '#ff5151');
    draw('mspd2', con2.mspd, 0.4, '#ff5151');
    //韧性
    draw('tenacity1', con1.tenacity, 0.4, '#567dff');
    draw('tenacity2', con2.tenacity, 0.4, '#567dff');
    //段数
    if(con1.hits == null){
      con1.hits = 1;
    }
    if (con2.hits == null) {
      con2.hits = 1;
    }
    draw('hits1', con1.hits, 0.034, '#567dff');
    draw('hits2', con2.hits, 0.034, '#567dff');
  
  this.setData({
    con1_name: con1.name,
    con2_name: con2.name,
    con1_icon: 'cloud://merusuto-918274.6d65-merusuto-918274/icon/' + con1.id + '.png',
    con2_icon: 'cloud://merusuto-918274.6d65-merusuto-918274/icon/' + con2.id + '.png',
    con1_weapon: weapon(con1.weapon),
    con2_weapon: weapon(con2.weapon),
    con1_type: type(con1.type),
    con2_type: type(con2.type),
    con1_life: con1.life,
    con2_life: con2.life,
    con1_blife: manji(con1.life, con1.type),
    con2_blife: manji(con2.life, con2.type),
    con1_mlife: manjue(con1.life, con1.type, con1.rare),
    con2_mlife: manjue(con2.life, con2.type, con2.rare),
    con1_atk: con1.atk,
    con2_atk: con2.atk,
    con1_batk: manji(con1.atk, con1.type),
    con2_batk: manji(con2.atk, con2.type),
    con1_matk: manjue(con1.atk, con1.type, con1.rare),
    con2_matk: manjue(con2.atk, con2.type, con2.rare),
    con1_dps: Math.floor(con1.atk / con1.aspd),
    con2_dps: Math.floor(con2.atk / con2.aspd),
    con1_bdps: manji(Math.floor(con1.atk / con1.aspd), con1.type),
    con2_bdps: manji(Math.floor(con2.atk / con2.aspd), con2.type),
    con1_mdps: Math.floor(manjue(con1.atk, con1.type, con1.rare) / con1.aspd),
    con2_mdps: Math.floor(manjue(con2.atk, con2.type, con2.rare) / con2.aspd),
    con1_alldps: Math.floor(con1.atk / con1.aspd * con1.anum),
    con2_alldps: Math.floor(con2.atk / con2.aspd * con2.anum),
    con1_balldps: Math.floor(manji(con1.atk, con1.type) / con1.aspd * con1.anum),
    con2_balldps: Math.floor(manji(con2.atk, con2.type) / con2.aspd * con2.anum),
    con1_malldps: Math.floor(manjue(con1.atk, con1.type, con1.rare) / con1.aspd * con1.anum),
    con2_malldps: Math.floor(manjue(con2.atk, con2.type, con2.rare) / con2.aspd * con2.anum),
    con1_aspd: con1.aspd,
    con2_aspd: con2.aspd,
    con1_aarea: con1.aarea,
    con2_aarea: con2.aarea,
    con1_anum: con1.anum,
    con2_anum: con2.anum,
    con1_mspd: con1.mspd,
    con2_mspd: con2.mspd,
    con1_tenacity: con1.tenacity,
    con2_tenacity: con2.tenacity,
    con1_hits: con1.hits,
    con2_hits: con2.hits,
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
    wx.removeStorageSync('con1');
    wx.removeStorageSync('con2');
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