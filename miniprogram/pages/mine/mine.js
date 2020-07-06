// miniprogram/pages/mine/mine.js
var size = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //查看收藏处理函数
  // showcoll: function(){
  //   wx.navigateTo({
  //     url: '/pages/collection/collection',
  //     success: function(res) {},
  //     fail: function(res) {},
  //     complete: function(res) {},
  //   })
  // },
  //检查更新处理函数
  update: function(){
    //给出提示
    wx.showModal({
      title: '提示',
      content: '是否要更新数据',
      success: function(res){
        //点击确定更新数据
        if(res.confirm){
          wx.showLoading({
            title: '更新数据中',
          })
          //调用云函数
          wx.cloud.callFunction({
            name:'getunitslist',
          }).then(res =>{
            //进行数据缓存
            wx.setStorage({
              key: 'listall',
              data: res.result.data,
              success: function () {
                wx.hideLoading();
                wx.showToast({
                  title: '数据更新完成',
                  icon: 'success',
                  duration: 1000,
                })
              },
              fail: function () {
                wx.showToast({
                  title: '更新数据失败',
                  icon: 'warn',
                  duration: 1000,
                })
              }
            })
          })
        }else{

        }
      }
    })
  },
  //清空缓存处理函数
  clean: function(){
    //获取缓存大小
    wx.getStorageInfo({
      success: function(res) {
        size = res.currentSize;
        //弹出提示框
        wx.showModal({
          title: '提示',
          content: '已占用' + size + 'KB缓存，是否清除',
          success: function (res) {
            if (res.confirm) {
              //进行清空缓存操作
              wx.clearStorage({
                success() {
                  wx.showToast({
                    title: '清空缓存成功',
                    icon: 'success',
                    duration: 1000,
                  })
                },
                fail() {
                  wx.showToast({
                    title: '清空缓存失败',
                    icon: 'warn',
                    duration: 1000,
                  })
                }
              });
            }
            else {

            }
          }
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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