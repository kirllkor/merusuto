// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'merusuto-918274',
  traceUser: true,

})
const db = cloud.database()
const MAX_LIMIT = 100

// 云函数入口函数
exports.main = async (event, context) => {
  const countResult = await db.collection('units').count()
  const total = countResult.total

  const batchTimes = Math.ceil(total / 100)

  const tasks = []
  for(let i = 0; i< batchTimes; i++){
    const promise = db.collection('units').orderBy('rare','desc').skip(i*MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }
  return (await Promise.all(tasks)).reduce((acc,cur) => ({
    data : acc.data.concat(cur.data),
    errMsg : acc.errMsg,
  }))
//  try{
//    return await db.collection('units').get({
//      success: function(res){
//        return res;
//        console.log(res);
//      }
//    });
//  }catch(e){
//    console.error(e);
//  }
}