
const db = wx.cloud.database();

/**
 * 计算星级函数
 */
function addrare (num) {
  var level="";
  for (let j = 0; j < num; j++) {
    level += '★';
  }
  return level;
};
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
//绘制属性图函数
function drawpic(canvas_id,element,ele_fire,ele_aqua,ele_wind,ele_light,ele_dark){
  var elecol = ['rgba(255, 90, 90, 0.5)', 'rgba(0, 128, 255, 0.5)', 'rgba(0, 236, 0, 0.5)', 'rgba(255, 211, 6, 0.5)',
  'rgba(183, 102, 173, 0.5)'];
  //绘制五边形
  const ctx = wx.createCanvasContext(canvas_id);
  var wid = wx.getSystemInfoSync().windowWidth;
  // console.log(wid);
  //外部五边形
  ctx.beginPath();
  ctx.translate(40 * wid / 375, 40 * wid / 375);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -36 * wid / 375);
  ctx.lineTo(Math.cos(18 * (Math.PI / 180)) * 36 * wid / 375, -Math.sin(18 * (Math.PI / 180)) * 36 * wid / 375);
  ctx.lineTo(Math.cos(54 * (Math.PI / 180)) * 36 * wid / 375, Math.sin(54 * (Math.PI / 180)) * 36 * wid / 375);
  ctx.lineTo(-Math.cos(54 * (Math.PI / 180)) * 36 * wid / 375, Math.sin(54 * (Math.PI / 180)) * 36 * wid / 375);
  ctx.lineTo(-Math.cos(18 * (Math.PI / 180)) * 36 * wid / 375, -Math.sin(18 * (Math.PI / 180)) * 36 * wid / 375);
  ctx.lineTo(0, -36 * wid / 375);
  ctx.setFillStyle("#F0F0F0");
  ctx.fill();
  // ctx.draw();
  ctx.closePath();

  //画属性球
  //1火属性
  ctx.beginPath();
  ctx.setFillStyle("#FF0000")//球的颜色
  ctx.arc(0, -36 * wid / 375,3 * wid / 375, 0, 2 * Math.PI)
  ctx.fill()
  ctx.closePath();
  //2水属性
  ctx.beginPath();
  ctx.setFillStyle("#0080FF")//球的颜色
  ctx.arc(Math.cos(18 * (Math.PI / 180)) * 36 * wid / 375, -Math.sin(18 * (Math.PI / 180)) * 36 * wid / 375, 3 * wid / 375, 0, 2 * Math.PI)
  ctx.fill()
  ctx.closePath();
  //3风属性
  ctx.beginPath();
  ctx.setFillStyle("#00EC00")//球的颜色
  ctx.arc(Math.cos(54 * (Math.PI / 180)) * 36 * wid / 375, Math.sin(54 * (Math.PI / 180)) * 36 * wid / 375, 3 * wid / 375, 0, 2 * Math.PI)
  ctx.fill()
  ctx.closePath();
  //4光属性
  ctx.beginPath();
  ctx.setFillStyle("#FFD306")//球的颜色
  ctx.arc(-Math.cos(54 * (Math.PI / 180)) * 36 * wid / 375, Math.sin(54 * (Math.PI / 180)) * 36 * wid / 375, 3 * wid / 375, 0, 2 * Math.PI)
  ctx.fill()
  ctx.closePath();
  //5暗属性
  ctx.beginPath();
  ctx.setFillStyle("#B766AD")//球的颜色
  ctx.arc(-Math.cos(18 * (Math.PI / 180)) * 36 * wid / 375, -Math.sin(18 * (Math.PI / 180)) * 36 * wid / 375, 3 * wid / 375, 0, 2 * Math.PI)
  ctx.fill()
  ctx.closePath();

  //内部五边形
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -18 * wid / 375);
  ctx.lineTo(Math.cos(18 * (Math.PI / 180)) * 18 * wid / 375, -Math.sin(18 * (Math.PI / 180)) * 18 * wid / 375);
  ctx.lineTo(Math.cos(54 * (Math.PI / 180)) * 18 * wid / 375, Math.sin(54 * (Math.PI / 180)) * 18 * wid / 375);
  ctx.lineTo(-Math.cos(54 * (Math.PI / 180)) * 18 * wid / 375, Math.sin(54 * (Math.PI / 180)) * 18 * wid / 375);
  ctx.lineTo(-Math.cos(18 * (Math.PI / 180)) * 18 * wid / 375, -Math.sin(18 * (Math.PI / 180)) * 18 * wid / 375);
  ctx.lineTo(0, -18 * wid / 375);
  ctx.setFillStyle("#E0E0E0");
  ctx.fill();
  ctx.closePath();

  //属性五边形
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -18 * wid / 375 * ele_fire);
  ctx.lineTo(Math.cos(18 * (Math.PI / 180)) * 18 * wid / 375 * ele_aqua, -Math.sin(18 * (Math.PI / 180)) * 18 * wid / 375 * ele_aqua);
  ctx.lineTo(Math.cos(54 * (Math.PI / 180)) * 18 * wid / 375 * ele_wind, Math.sin(54 * (Math.PI / 180)) * 18 * wid / 375 * ele_wind);
  ctx.lineTo(-Math.cos(54 * (Math.PI / 180)) * 18 * wid / 375 * ele_light, Math.sin(54 * (Math.PI / 180)) * 18 * wid / 375 * ele_light);
  ctx.lineTo(-Math.cos(18 * (Math.PI / 180)) * 18 * wid / 375 * ele_dark, -Math.sin(18 * (Math.PI / 180)) * 18 * wid / 375 * ele_dark);
  ctx.lineTo(0, -18 * wid / 375 * ele_fire);
  ctx.setFillStyle(elecol[element-1]);
  ctx.fill();
  ctx.closePath();
  ctx.draw();
}
//清空画布canvas
function clearCanvas(canvas_id){
  const ctx = wx.createCanvasContext(canvas_id);
  ctx.clearRect()
}
//云函数展示第一次数据函数
function yunshowmsg(res){
  for (let i = 0; i < num; i++) {
    arraylist[i] = {
      canvas_id: canvas_id,
      id: res.result.data[i].id,
      rare: addrare(res.result.data[i].rare),
      title: res.result.data[i].title,
      name: res.result.data[i].name,
      img: 'cloud://merusuto-918274.6d65-merusuto-918274/thumbnail/' + res.result.data[i].id + '.png',
      life: '生命:' + res.result.data[i].life,
      aspd: '攻速:' + res.result.data[i].aspd,
      atk: '攻击:' + res.result.data[i].atk,
      tenacity: '韧性:' + res.result.data[i].tenacity,
      aarea: '攻距:' + res.result.data[i].aarea,
      mspd: '移速:' + res.result.data[i].mspd,
      anum: '攻数:' + res.result.data[i].anum,
      hits: res.result.data[i].hits,
      element: res.result.data[i].element,
      fire: res.result.data[i].fire,
      aqua: res.result.data[i].aqua,
      wind: res.result.data[i].wind,
      light: res.result.data[i].light,
      dark: res.result.data[i].dark,
      dps: 'DPS:' + Math.floor(res.result.data[i].atk / res.result.data[i].aspd * res.result.data[i].anum)
    }
    canvas_id++;
    //判断属性是否为空
    if (arraylist[i].fire == null) arraylist[i].fire = 1;
    if (arraylist[i].aqua == null) arraylist[i].aqua = 1;
    if (arraylist[i].wind == null) arraylist[i].wind = 1;
    if (arraylist[i].light == null) arraylist[i].light = 1;
    if (arraylist[i].dark == null) arraylist[i].dark = 1;
    drawpic(arraylist[i].canvas_id, arraylist[i].element, arraylist[i].fire, arraylist[i].aqua, arraylist[i].wind, arraylist[i].light, arraylist[i].dark);
  }
}
//正常展示0觉0级数据
function showmsg0(res,times){
  var length = res.data.length;
  // console.log("length:"+length)
  var cishu = Math.floor(length / num);
  // console.log("cishu:" + cishu)
  var yushu = length % num;
  // console.log("yushu:" + yushu)
  if (times >= cishu) {
    for (let i = cishu * num; i < cishu * num + yushu; i++) {
      arraylist[i] = {
        canvas_id: canvas_id,
        id: res.data[i].id,
        rare: addrare(res.data[i].rare),
        title: res.data[i].title,
        name: res.data[i].name,
        img: 'cloud://merusuto-918274.6d65-merusuto-918274/thumbnail/' + res.data[i].id + '.png',
        life: '生命:' + res.data[i].life,
        aspd: '攻速:' + res.data[i].aspd,
        atk: '攻击:' + res.data[i].atk,
        tenacity: '韧性:' + res.data[i].tenacity,
        aarea: '攻距:' + res.data[i].aarea,
        mspd: '移速:' + res.data[i].mspd,
        anum: '攻数:' + res.data[i].anum,
        hits: res.data[i].hits,
        element: res.data[i].element,
        fire: res.data[i].fire,
        aqua: res.data[i].aqua,
        wind: res.data[i].wind,
        light: res.data[i].light,
        dark: res.data[i].dark,
        dps: 'DPS:' + Math.floor(res.data[i].atk / res.data[i].aspd * res.data[i].anum),
      }
      canvas_id++;
      //判断属性是否为空
      if (arraylist[i].fire == null) arraylist[i].fire = 1;
      if (arraylist[i].aqua == null) arraylist[i].aqua = 1;
      if (arraylist[i].wind == null) arraylist[i].wind = 1;
      if (arraylist[i].light == null) arraylist[i].light = 1;
      if (arraylist[i].dark == null) arraylist[i].dark = 1;
      // clearCanvas(arraylist[i].id);
      drawpic(arraylist[i].canvas_id, arraylist[i].element, arraylist[i].fire, arraylist[i].aqua, arraylist[i].wind, arraylist[i].light, arraylist[i].dark);
      // console.log(arraylist[i].id);
    }
  }else{
    for (let i = times * num; i < times * num + num; i++) {
      arraylist[i] = {
        canvas_id: canvas_id,
        id: res.data[i].id,
        rare: addrare(res.data[i].rare),
        title: res.data[i].title,
        name: res.data[i].name,
        img: 'cloud://merusuto-918274.6d65-merusuto-918274/thumbnail/' + res.data[i].id + '.png',
        life: '生命:' + res.data[i].life,
        aspd: '攻速:' + res.data[i].aspd,
        atk: '攻击:' + res.data[i].atk,
        tenacity: '韧性:' + res.data[i].tenacity,
        aarea: '攻距:' + res.data[i].aarea,
        mspd: '移速:' + res.data[i].mspd,
        anum: '攻数:' + res.data[i].anum,
        hits: res.data[i].hits,
        element: res.data[i].element,
        fire: res.data[i].fire,
        aqua: res.data[i].aqua,
        wind: res.data[i].wind,
        light: res.data[i].light,
        dark: res.data[i].dark,
        dps: 'DPS:' + Math.floor(res.data[i].atk / res.data[i].aspd * res.data[i].anum)
      }
      canvas_id++;
      //判断属性是否为空
      if (arraylist[i].fire == null) arraylist[i].fire = 1;
      if (arraylist[i].aqua == null) arraylist[i].aqua = 1;
      if (arraylist[i].wind == null) arraylist[i].wind = 1;
      if (arraylist[i].light == null) arraylist[i].light = 1;
      if (arraylist[i].dark == null) arraylist[i].dark = 1;
      // clearCanvas(arraylist[i].id);
      drawpic(arraylist[i].canvas_id, arraylist[i].element, arraylist[i].fire, arraylist[i].aqua, arraylist[i].wind, arraylist[i].light, arraylist[i].dark);
      // console.log(arraylist[i].id);
    }
  }
    
 
}
//正常展示0觉满级数据
function showmsg1(res, times) {
  var length = res.data.length;
  // console.log("length:"+length)
  var cishu = Math.floor(length/num);
  // console.log("cishu:" + cishu)
  var yushu = length % num;
  // console.log("yushu:" + yushu)
  if (times >= cishu){
    for (let i = cishu * num; i < cishu * num + yushu; i++) {
      arraylist[i] = {
        canvas_id: canvas_id,
        id: res.data[i].id,
        rare: addrare(res.data[i].rare),
        title: res.data[i].title,
        name: res.data[i].name,
        img: 'cloud://merusuto-918274.6d65-merusuto-918274/thumbnail/' + res.data[i].id + '.png',
        life: '生命:' + manji(res.data[i].life, res.data[i].type),
        aspd: '攻速:' + res.data[i].aspd,
        atk: '攻击:' + manji(res.data[i].atk, res.data[i].type),
        tenacity: '韧性:' + res.data[i].tenacity,
        aarea: '攻距:' + res.data[i].aarea,
        mspd: '移速:' + res.data[i].mspd,
        anum: '攻数:' + res.data[i].anum,
        hits: res.data[i].hits,
        element: res.data[i].element,
        fire: res.data[i].fire,
        aqua: res.data[i].aqua,
        wind: res.data[i].wind,
        light: res.data[i].light,
        dark: res.data[i].dark,
        dps: 'DPS:' + Math.floor(manji(res.data[i].atk, res.data[i].type) / res.data[i].aspd * res.data[i].anum),
      }
      canvas_id++;
      //判断属性是否为空
      if (arraylist[i].fire == null) arraylist[i].fire = 1;
      if (arraylist[i].aqua == null) arraylist[i].aqua = 1;
      if (arraylist[i].wind == null) arraylist[i].wind = 1;
      if (arraylist[i].light == null) arraylist[i].light = 1;
      if (arraylist[i].dark == null) arraylist[i].dark = 1;
      // clearCanvas(arraylist[i].id);
      drawpic(arraylist[i].canvas_id, arraylist[i].element, arraylist[i].fire, arraylist[i].aqua, arraylist[i].wind, arraylist[i].light, arraylist[i].dark);
      // console.log(arraylist[i].id);
    }
  }else{
    for (let i = times * num; i < times * num + num; i++) {
      arraylist[i] = {
        canvas_id: canvas_id,
        id: res.data[i].id,
        rare: addrare(res.data[i].rare),
        title: res.data[i].title,
        name: res.data[i].name,
        img: 'cloud://merusuto-918274.6d65-merusuto-918274/thumbnail/' + res.data[i].id + '.png',
        life: '生命:' + manji(res.data[i].life, res.data[i].type),
        aspd: '攻速:' + res.data[i].aspd,
        atk: '攻击:' + manji(res.data[i].atk, res.data[i].type),
        tenacity: '韧性:' + res.data[i].tenacity,
        aarea: '攻距:' + res.data[i].aarea,
        mspd: '移速:' + res.data[i].mspd,
        anum: '攻数:' + res.data[i].anum,
        hits: res.data[i].hits,
        element: res.data[i].element,
        fire: res.data[i].fire,
        aqua: res.data[i].aqua,
        wind: res.data[i].wind,
        light: res.data[i].light,
        dark: res.data[i].dark,
        dps: 'DPS:' + Math.floor(manji(res.data[i].atk, res.data[i].type) / res.data[i].aspd * res.data[i].anum),
      }
      canvas_id++;
      //判断属性是否为空
      if (arraylist[i].fire == null) arraylist[i].fire = 1;
      if (arraylist[i].aqua == null) arraylist[i].aqua = 1;
      if (arraylist[i].wind == null) arraylist[i].wind = 1;
      if (arraylist[i].light == null) arraylist[i].light = 1;
      if (arraylist[i].dark == null) arraylist[i].dark = 1;
      // clearCanvas(arraylist[i].id);
      drawpic(arraylist[i].canvas_id, arraylist[i].element, arraylist[i].fire, arraylist[i].aqua, arraylist[i].wind, arraylist[i].light, arraylist[i].dark);
      // console.log(arraylist[i].id);
    }
  }

}
//正常展示满觉满级数据
function showmsg2(res, times) {
  var length = res.data.length;
  // console.log("length:"+length)
  var cishu = Math.floor(length / num);
  // console.log("cishu:" + cishu)
  var yushu = length % num;
  // console.log("yushu:" + yushu)
  if (times >= cishu) {
    for (let i = cishu * num; i < cishu * num + yushu; i++) {
      arraylist[i] = {
        canvas_id: canvas_id,
        id: res.data[i].id,
        rare: addrare(res.data[i].rare),
        title: res.data[i].title,
        name: res.data[i].name,
        img: 'cloud://merusuto-918274.6d65-merusuto-918274/thumbnail/' + res.data[i].id + '.png',
        life: '生命:' + manjue(res.data[i].life, res.data[i].type, res.data[i].rare),
        atk: '攻击:' + manjue(res.data[i].atk, res.data[i].type, res.data[i].rare),
        aspd: '攻速:' + res.data[i].aspd,
        tenacity: '韧性:' + res.data[i].tenacity,
        aarea: '攻距:' + res.data[i].aarea,
        mspd: '移速:' + res.data[i].mspd,
        anum: '攻数:' + res.data[i].anum,
        hits: res.data[i].hits,
        element: res.data[i].element,
        fire: res.data[i].fire,
        aqua: res.data[i].aqua,
        wind: res.data[i].wind,
        light: res.data[i].light,
        dark: res.data[i].dark,
        dps: 'DPS:' + Math.floor(manjue(res.data[i].atk, res.data[i].type, res.data[i].rare) / res.data[i].aspd * res.data[i].anum),
      }
      canvas_id++;
      //判断属性是否为空
      if (arraylist[i].fire == null) arraylist[i].fire = 1;
      if (arraylist[i].aqua == null) arraylist[i].aqua = 1;
      if (arraylist[i].wind == null) arraylist[i].wind = 1;
      if (arraylist[i].light == null) arraylist[i].light = 1;
      if (arraylist[i].dark == null) arraylist[i].dark = 1;
      clearCanvas(arraylist[i].id);
      drawpic(arraylist[i].canvas_id, arraylist[i].element, arraylist[i].fire, arraylist[i].aqua, arraylist[i].wind, arraylist[i].light, arraylist[i].dark);
      // console.log(arraylist[i].id);
    }
  }else{
    for (let i = times * num; i < times * num + num; i++) {
      arraylist[i] = {
        canvas_id: canvas_id,
        id: res.data[i].id,
        rare: addrare(res.data[i].rare),
        title: res.data[i].title,
        name: res.data[i].name,
        img: 'cloud://merusuto-918274.6d65-merusuto-918274/thumbnail/' + res.data[i].id + '.png',
        life: '生命:' + manjue(res.data[i].life, res.data[i].type, res.data[i].rare),
        atk: '攻击:' + manjue(res.data[i].atk, res.data[i].type, res.data[i].rare),
        aspd: '攻速:' + res.data[i].aspd,
        tenacity: '韧性:' + res.data[i].tenacity,
        aarea: '攻距:' + res.data[i].aarea,
        mspd: '移速:' + res.data[i].mspd,
        anum: '攻数:' + res.data[i].anum,
        hits: res.data[i].hits,
        element: res.data[i].element,
        fire: res.data[i].fire,
        aqua: res.data[i].aqua,
        wind: res.data[i].wind,
        light: res.data[i].light,
        dark: res.data[i].dark,
        dps: 'DPS:' + Math.floor(manjue(res.data[i].atk, res.data[i].type, res.data[i].rare) / res.data[i].aspd * res.data[i].anum),
      }
      canvas_id++;
      //判断属性是否为空
      if (arraylist[i].fire == null) arraylist[i].fire = 1;
      if (arraylist[i].aqua == null) arraylist[i].aqua = 1;
      if (arraylist[i].wind == null) arraylist[i].wind = 1;
      if (arraylist[i].light == null) arraylist[i].light = 1;
      if (arraylist[i].dark == null) arraylist[i].dark = 1;
      // clearCanvas(arraylist[i].id);
      drawpic(arraylist[i].canvas_id, arraylist[i].element, arraylist[i].fire, arraylist[i].aqua, arraylist[i].wind, arraylist[i].light, arraylist[i].dark);
      // console.log(arraylist[i].id);
    }
  }
  
}
// //点击改变样式
// function serviceSelection(view) {
//   view.isChecked = true;
// }

//存放canvas-id
var canvas_id = 1;
//存放等级信息
var level = 0;

//数据存放数组
var arraylist = new Array();
//上拉加载次数
var times;
//一次性显示条数
var num = 10;
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    array:[{
    }],
    backshow : false,
    spaceshow: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.backshow);
    wx.showLoading({
      title: '正在加载',
    });
    var that = this;
    //查看是否已经有缓存
    wx.getStorage({
      key: 'listall',
      success: function(res) {
        wx.setStorage({
          key: 'level',
          data: 0
        })
        console.log(res);
        showmsg0(res,0);
        wx.setStorage({
          key: 'times',
          data: 1,
        })
        wx.canvasToTempFilePath({
          canvasId: '',
        }, this)
        that.setData({
          array: arraylist,
          spaceshow: true
        });
        wx.hideLoading();
        wx.getStorage({
          key: 'listall',
          success: function (res) {
            wx.setStorageSync("end", res.data);
          },
        })
      },
      fail: function(){
        //进行第一步等级缓存
        wx.setStorageSync("times", 1);
        wx.cloud.callFunction({
          name: 'getunitslist',
        }).then(res => {
          //进行数据缓存
          wx.setStorage({
            key: 'listall',
            data: res.result.data
          })
          wx.setStorage({
            key: 'level',
            data: 0
          })
          console.log(res);
          yunshowmsg(res);
          wx.canvasToTempFilePath({
            canvasId: '',
          }, this)
          that.setData({
            array: arraylist,
            spaceshow: true
          });
          wx.hideLoading();
          wx.getStorage({
            key: 'listall',
            success: function (res) {
              wx.setStorageSync("end", res.data);
            },
          })
        })
      }
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
    //进行筛选判断
    //获得下拉次数
    // wx.getStorage({
    //   key: '',
    //   success: function(res) {},
    // })
    var that = this;
    wx.getStorage({
      key: 'search',
      success: function(res) {
        arraylist = new Array();
        wx.getStorage({
          key: 'level',
          success: function (res) {
            that.setData({
              array: null,
              backshow: false
            })
            level = res.data;
            // console.log("初始化次数" + times);
            wx.getStorage({
              key: 'end',
              success: function (res) {
                switch (level) {
                  case 0:
                    var times = 0;
                    // console.log("总共的次数" + times)
                    showmsg0(res,times);
                    // times++;
                    that.setData({
                      array: arraylist,
                      backshow: false
                    });
                    break;
                  case 1:
                    var times = 0;
                    // console.log("总共的次数" + times)
                    showmsg1(res,times);
                    // times++;
                    that.setData({
                      array: arraylist,
                      backshow: false
                    });
                    break;
                  case 2:
                    var times = 0;
                    // console.log("总共的次数" + times)
                    showmsg2(res, times);
                    // times++;
                    that.setData({
                      array: arraylist,
                      backshow: false
                    });
                    break;
                }
                // console.log(arraylist)
                // console.log("第一次数" + times)
                //         // console.log("等级"+level);
              },
              fail:function(){
                wx.showToast({
                  title:"获取数据失败,请检查更新",
                  icon:'none',
                  duration:2000
                })
              }
            })
            // },
            // })

          },
        })
        // for(var i=0;i<num;i++){
        //   drawpic(arraylist[i].id, arraylist[i].element, arraylist[i].fire, arraylist[i].aqua, arraylist[i].wind, arraylist[i].light, arraylist[i].dark);
        // }
      },
    })

    //重新绘制canvas
    // wx.getStorage({
    //   key: 'times',
    //   success: function(res) {
    //     times = res.data
    //   },
    // })
    // wx.getStorage({
    //   key: 'end',
    //   success: function (res) {
    //     console.log(res);
    //     console.log((times - 1) * num +1);
    //     console.log(num * times);
    //     for (let i = (times-1) * num+1; i < num * times; i++) {
    //       drawpic(i+1, res.data[i].element, res.data[i].fire, res.data[i].aqua, res.data[i].wind, res.data[i].light, res.data[i].dark);
    //     }
    //   },
    // })


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.removeStorageSync("search");
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
    wx.showLoading({
      title: '正在加载',
    });
    //取出筛选
    wx.removeStorageSync("search");
    //取出缓存数据
    wx.getStorage({
      key: 'times',
      success: function(res) {
        times = res.data;
      },
    })
    var that = this;
    wx.getStorage({
      key: 'level',
      success: function(res) {
        level = res.data;
        wx.getStorage({
          key: 'end',
          success(res) {
            switch (level) {
              case 0:
                showmsg0(res,times);
                times++;
                that.setData({
                  array: arraylist,
                  backshow: true
                });
                break;
              case 1:
                showmsg1(res, times);
                times++;
                that.setData({
                  array: arraylist,
                  backshow: true
                });
                break;
              case 2:
                showmsg2(res, times);
                times++;
                that.setData({
                  array: arraylist,
                  backshow: true
                });
                break;
            }
            // console.log("次数"+times)
            // console.log(that.data.backshow);
            wx.setStorageSync("times", times++)
          }
        })
      },
      fail : function(){
        wx.getStorage({
          key: 'end',
          success(res) {
            showmsg0(res, times);
            times++;
            that.setData({
              array: arraylist,
              backshow: true
            }); 
            // console.log(that.data.backshow);
            wx.setStorageSync("times", times++)
          }
        })
      }
    })


    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    // console.log(data);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //返回顶部
  goTop: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  },
})