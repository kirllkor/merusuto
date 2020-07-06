// miniprogram/pages/search/search.js

/*
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
}

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


var index = 0;
//显示等级
var level = 0;
//选择排序
var sort = 0;
//选中大选项
var type = 0;
//选中子选项
var sub = 0;
//稀有度选择
var rareindex = 0;
//元素选择
var eleindex = 0;
//武器选择
var weaponindex = 0;
//攻击距离选择
var areaindex = 0;
//攻击数量选择
var numindex = 0;
//性别选择
var genderindex = 0;
//成长选择
var typeindex = 0;
//年龄选择
var ageindex = 0;
//国家选择
var countryindex = 0;

//需要筛选的数组
var arraylist1 = new Array();
var arraylist2 = new Array();

//筛选函数 list1为原始数组 list2为筛选过后的数组
function screen(list1, list2, rareindex,eleindex,weaponindex,areaindex,numindex,genderindex,typeindex,ageindex){
  var index = 0;
  //对list2进行赋值  稀有度筛选
  switch(rareindex){
    case 0:
      list2 = list1;
      break;
    case 1:
      index = 0;
      for(var i=0;i<list1.length;i++){
        if(list1[i].rare == 1){
          list2[index] = list1[i];
          index ++ ;
        }
      }    
      break;
    case 2:
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].rare == 2) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;    
    case 3:
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].rare == 3) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;  
    case 4:
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].rare == 4) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;  
    case 5:
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].rare == 5) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;  
    case 6:
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].rare >= 3) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;  
    case 7:
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].rare >= 4) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;  
  }
  //对list1进行赋值  元素筛选
  switch(eleindex){
    case 0:
      list1 = [];
      list1 = list2;
      // console.log('长度:'+list1.length);
      break;
    case 1:  
      index = 0;
      list1 = [];
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].element == 1) {
          list1[index] = list2[i];
          index++;
        }
      }  
      break;
    case 2:
      index = 0;
      list1 = [];
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].element == 2) {
          list1[index] = list2[i];
          index++;
        }
      }
      break;
    case 3:
      index = 0;
      list1 = [];
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].element == 3) {
          list1[index] = list2[i];
          index++;
        }
      }
      break;
    case 4:
      index = 0;
      list1 = [];
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].element == 4) {
          list1[index] = list2[i];
          index++;
        }
      }
      break;
    case 5:
      index = 0;
      list1 = [];
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].element == 5) {
          list1[index] = list2[i];
          index++;
        }
      }
      break;
  }
  //对list2进行赋值  武器筛选
  switch(weaponindex){
    case 0:
      list2 = [];
      list2 = list1;
      break;
    case 1:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].weapon == 1) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 2:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].weapon == 2) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 3:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].weapon == 3) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 4:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].weapon == 4) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 5:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].weapon == 5) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 6:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].weapon == 6) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 7:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].weapon == 7) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
  }
  //对list1进行赋值  攻击距离筛选
  switch(areaindex){
    case 0:
      list1 = [];
      list1 = list2;
      break;
    case 1:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].aarea<=50) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
    case 2:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].aarea >= 51 && list2[i].aarea <= 150) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
    case 3:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].aarea > 150) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
  }
  //对list2进行赋值  攻击数量筛选
  switch(numindex){
    case 0:
      list2 = [];
      list2 = list1;
      break;
    case 1:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].anum == 1) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 2:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].anum == 2) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 3:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].anum == 3) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 4:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].anum == 4) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 5:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].anum == 5) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;

  }
  //对list1进行赋值  性别筛选
  switch(genderindex){
    case 0:
      list1 = [];
      list1 = list2;
      break;
    case 1:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].gender == 2) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
    case 2:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].gender == 3) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
    case 3:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].gender == 1) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
  }
  //对list2进行赋值  成长筛选
  switch(typeindex){
    case 0:
      list2 = [];
      list2 = list1;
      break;
    case 1:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].type == 1) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 2:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].type == 2) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 3:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].type == 3) {
          list2[index] = list1[i];
          index++;
        }
      }
      break;

  }
  //对list1进行赋值  年龄筛选
  switch(ageindex){
    case 0:
      list1 = [];
      list1 = list2;
      break;
    case 1:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].age <= 10) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
    case 2:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].age > 10 && list2[i].age <= 15) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
    case 3:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].age > 15 && list2[i].age <= 20) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
    case 4:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].age > 20 && list2[i].age <= 25) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
    case 5:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].age > 25 && list2[i].age <= 30) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
    case 6:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].age > 30 && list2[i].age <= 35) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
    case 7:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].age > 35 && list2[i].age <= 40) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
    case 8:
      list1 = [];
      index = 0;
      for (var i = 0; i < list2.length; i++) {
        if (list2[i].age > 40) {
          list1[index] = list2[i];
          index++;
        }
      }
      break; 
  }
  //对list2进行赋值  国家筛选
  switch (countryindex) {
    case 0:
      list2 = [];
      list2 = list1;
      break;
    case 1:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "王国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 2:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "妖精之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 3:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "机械之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 4:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "和之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 5:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "空之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;  
    case 6:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "西部之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 7:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "魔法之国") {
          list2[index] = list1[i];
          index++;
        }
      } 
      break;
    case 8:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "恐龙之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 9:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "沙漠之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;  
    case 10:  
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "死者之国") {
          list2[index] = list1[i];
          index++;
        }
      }  
      break;
    case 11:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "异邦") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 12:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "动物之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break; 
    case 13:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "常夏之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break; 
    case 14:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "植物之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;  
    case 15:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "科学之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;
    case 16:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "点心之国") {
          list2[index] = list1[i];
          index++;
        }
      }  
      break;
    case 17:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "电之国") {
          list2[index] = list1[i];
          index++;
        }
      }  
      break;
    case 18:
      list2 = [];
      index = 0;
      for (var i = 0; i < list1.length; i++) {
        if (list1[i].country == "雪之国") {
          list2[index] = list1[i];
          index++;
        }
      }
      break;  
    


  }
  //返回数组
  return list2;
}
//归并排序函数
function mergeSort(arr){
  var len = arr.length;
  var left = [];
  var right = [];
  if(len < 2){
    return arr;
  }
  var middle = Math.floor(len / 2);
  left = arr.slice(0,middle);
  right = arr.slice(middle);
  switch(sort){
    case 0:
      return raremerge(mergeSort(left), mergeSort(right));
      break;
    case 1:
      return dpsmerge(mergeSort(left), mergeSort(right));
      break;
    case 2:
      return alldpsmerge(mergeSort(left), mergeSort(right));
      break;
    case 3:
      return lifemerge(mergeSort(left), mergeSort(right));
      break;
    case 4:
      return atkmerge(mergeSort(left), mergeSort(right));
      break;
    case 5:
      return areamerge(mergeSort(left), mergeSort(right));
      break;
    case 6:
      return anummerge(mergeSort(left), mergeSort(right));
      break;
    case 7:
      return aspdmerge(mergeSort(left), mergeSort(right));
      break;
    case 8:
      return tenacitymerge(mergeSort(left), mergeSort(right));
      break;
    case 9:
      return mspdmerge(mergeSort(left), mergeSort(right));
      break;
    case 10:
      return hitsmerge(mergeSort(left), mergeSort(right));
      break;
    case 11:
      return agemerge(mergeSort(left), mergeSort(right));
      break;

  }
  
}

//稀有度排序函数------------
function raremerge(left, right){
  var result = [];
  console.time('归并耗时');
  while(left.length && right.length){
    if (left[0].rare >= right[0].rare){
      result.push(left.shift());
    }else{
      result.push(right.shift());
    }
  }
  //右边为空时
  while (left.length){
    result.push(left.shift());
  }
  //左边为空时
  while(right.length){
    result.push(right.shift());
  }
  return result;
  console.timeEnd("归并耗时");
}
//单体dps排序函数---------------
function dpsmerge(left, right) {
  switch (level) {
    case 0:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (Math.floor(left[0].atk / left[0].aspd) >= Math.floor(right[0].atk / right[0].aspd)) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
    case 1:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (Math.floor(manji(left[0].atk, left[0].type) / left[0].aspd) >= Math.floor(manji(right[0].atk, right[0].type) /right[0].aspd)) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
    case 2:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (Math.floor(manjue(left[0].atk, left[0].type, left[0].rare) / left[0].aspd) >= Math.floor(manjue(right[0].atk, right[0].type, right[0].rare) / right[0].aspd)) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
  }
}
//多体dps排序函数--------------------
function alldpsmerge(left, right) {
  switch (level) {
    case 0:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (Math.floor(left[0].atk / left[0].aspd * left[0].anum) >= Math.floor(right[0].atk / right[0].aspd * right[0].anum)) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
    case 1:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (Math.floor(manji(left[0].atk, left[0].type) / left[0].aspd * left[0].anum) >= Math.floor(manji(right[0].atk, right[0].type) / right[0].aspd * right[0].anum)) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
    case 2:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (Math.floor(manjue(left[0].atk, left[0].type, left[0].rare) / left[0].aspd * left[0].anum) >= Math.floor(manjue(right[0].atk, right[0].type, right[0].rare) / right[0].aspd * right[0].anum)) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
  }
}
//生命力排序函数-----------------------
function lifemerge(left, right) {
  switch(level){
    case 0:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (left[0].life >= right[0].life) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
    case 1:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (manji(left[0].life, left[0].type) >= manji(right[0].life, right[0].type)) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
    case 2:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (manjue(left[0].life, left[0].type,left[0].rare) >= manjue(right[0].life, right[0].type,right[0].rare)) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
  }
  }
  
//攻击排序函数
function atkmerge(left, right) {
  switch (level) {
    case 0:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (left[0].atk >= right[0].atk) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
    case 1:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (manji(left[0].atk, left[0].type) >= manji(right[0].atk, right[0].type)) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
    case 2:
      var result = [];
      console.time('归并耗时');
      while (left.length && right.length) {
        if (manjue(left[0].atk, left[0].type, left[0].rare) >= manjue(right[0].atk, right[0].type, right[0].rare)) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      //右边为空时
      while (left.length) {
        result.push(left.shift());
      }
      //左边为空时
      while (right.length) {
        result.push(right.shift());
      }
      return result;
      console.timeEnd("归并耗时");
      break;
  }
}
//攻击距离排序函数
function areamerge(left, right) {
  var result = [];
  console.time('归并耗时');
  while (left.length && right.length) {
    if (left[0].aarea >= right[0].aarea) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //右边为空时
  while (left.length) {
    result.push(left.shift());
  }
  //左边为空时
  while (right.length) {
    result.push(right.shift());
  }
  return result;
  console.timeEnd("归并耗时");
}
//攻击数量排序函数
function anummerge(left, right) {
  var result = [];
  console.time('归并耗时');
  while (left.length && right.length) {
    if (left[0].anum >= right[0].anum) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //右边为空时
  while (left.length) {
    result.push(left.shift());
  }
  //左边为空时
  while (right.length) {
    result.push(right.shift());
  }
  return result;
  console.timeEnd("归并耗时");
}
//攻击速度排序函数
function aspdmerge(left, right) {
  var result = [];
  console.time('归并耗时');
  while (left.length && right.length) {
    if (left[0].aspd <= right[0].aspd) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //右边为空时
  while (left.length) {
    result.push(left.shift());
  }
  //左边为空时
  while (right.length) {
    result.push(right.shift());
  }
  return result;
  console.timeEnd("归并耗时");
}
//韧性排序函数
function tenacitymerge(left, right) {
  var result = [];
  console.time('归并耗时');
  while (left.length && right.length) {
    if (left[0].tenacity >= right[0].tenacity) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //右边为空时
  while (left.length) {
    result.push(left.shift());
  }
  //左边为空时
  while (right.length) {
    result.push(right.shift());
  }
  return result;
  console.timeEnd("归并耗时");
}
//移动速度排序函数
function mspdmerge(left, right) {
  var result = [];
  console.time('归并耗时');
  while (left.length && right.length) {
    if (left[0].mspd >= right[0].mspd) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //右边为空时
  while (left.length) {
    result.push(left.shift());
  }
  //左边为空时
  while (right.length) {
    result.push(right.shift());
  }
  return result;
  console.timeEnd("归并耗时");
}
//多段攻击排序函数
function hitsmerge(left, right) {
  var result = [];
  console.time('归并耗时');
  while (left.length && right.length) {
    //判断是否为空值
    if(left[0].hits == null){ left[0].hits = 0;}
    else if (right[0].hits == null){right[0].hits = 0;}
    if (left[0].hits >= right[0].hits) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //右边为空时
  while (left.length) {
    result.push(left.shift());
  }
  //左边为空时
  while (right.length) {
    result.push(right.shift());
  }
  return result;
  console.timeEnd("归并耗时");
}
//年龄排序函数
function agemerge(left, right) {
  var result = [];
  console.time('归并耗时');
  while (left.length && right.length) {
    //判断是否为空值
    if (left[0].age == null) { left[0].age = 0; }
    else if (right[0].age == null) { right[0].age = 0; }
    if (left[0].age >= right[0].age) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //右边为空时
  while (left.length) {
    result.push(left.shift());
  }
  //左边为空时
  while (right.length) {
    result.push(right.shift());
  }
  return result;
  console.timeEnd("归并耗时");
}


//---------------------------
Page({
  /**
   * 页面的初始数据
   */
  data: {
    level:[
      {
        text:"零觉零级",
        select:true
      },
      {
        text: "零觉满级",
        select: false
      },
      {
        text: "满觉满级",
        select: false
      },
    ],
    order:[
      {
        text:"稀有度",
        select: true
      }, 
      {
        text: "单体DPS",
        select: false
      },
      {
        text: "多体DPS",
        select: false
      },
      {
        text: "生命力",
        select: false
      },
      {
        text: "攻击",
        select: false
      },
      {
        text: "攻击距离",
        select: false
      },
      {
        text: "攻击数量",
        select: false
      },
      {
        text: "攻击速度",
        select: false
      },
      {
        text: "韧性",
        select: false
      },
      {
        text: "移动速度",
        select: false
      },
      {
        text: "多段攻击",
        select: false
      },
      {
        text: "年龄",
        select: false
      },
    ],
    search:[
      {
        text:"稀有度",
        height:"260rpx",
        sub:[
          {
            text:"全部",
            select:true
          },
          {
            text: "★",
            select: false
          },
          {
            text: "★★",
            select: false
          },
          {
            text: "★★★",
            select: false
          },
          {
            text: "★★★★",
            select: false
          },
          {
            text: "★★★★★",
            select: false
          },
          {
            text: "★★★以上",
            select: false
          },
          {
            text: "★★★★以上",
            select: false
          },
        ]
      },
      {
        text:"元素",
        height: "190rpx",
        sub:[
          {
            text: "全部",
            select: true
          },
          {
            text:"火",
            select:false
          },
          {
            text: "水",
            select: false
          },
          {
            text: "风",
            select: false
          },
          {
            text: "光",
            select: false
          },
          {
            text: "暗",
            select: false
          },
        ]
      },
      {
        text:"武器",
        height:"260rpx",
        sub:[
          {
            text:"全部",
            select:true
          },
          {
            text: "斩击",
            select: false
          },
          {
            text: "突击",
            select: false
          },
          {
            text: "打击",
            select: false
          },
          {
            text: "弓箭",
            select: false
          },
          {
            text: "魔法",
            select: false
          },
          {
            text: "铳弹",
            select: false
          },
          {
            text: "回复",
            select: false
          },
        ]
      },
      {
        text:"攻击距离",
        height:"190rpx",
        sub:[
          {
            text:"全部",
            select:true
          },
          {
            text: "前排",
            select: false
          },
          {
            text: "中排",
            select: false
          },
          {
            text: "后排",
            select: false
          },
        ]
      },
      {
        text:"攻击数量",
        height: "190rpx",
        sub:[
          {
            text:"全部",
            select:true
          },
          {
            text:"1体",
            select:false
          },
          {
            text:"2体",
            select:false
          },
          {
            text: "3体",
            select: false
          },
          {
            text: "4体",
            select: false
          },
          {
            text: "5体",
            select: false
          },
        ]
      },
      {
        text:"性别",
        height:"190rpx",
        sub:[
          {
            text:"全部",
            select:true
          },
          {
            text: "男",
            select: false
          },
          {
            text: "女",
            select: false
          },
          {
            text: "不明",
            select: false
          }
        ]
      },
      {
        text: "成长",
        height: "190rpx",
        sub: [
          {
            text: "全部",
            select: true
          },
          {
            text: "早熟",
            select: false
          },
          {
            text: "平均",
            select: false
          },
          {
            text: "晚成",
            select: false
          },
        ]
      },
      {
        text:"年龄",
        height:"260rpx",
        sub:[
          {
            text:"全部",
            select:true
          },
          {
            text: "10岁以下",
            select: false
          },
          {
            text: "11岁至15岁",
            select: false
          },
          {
            text: "16岁至20岁",
            select: false
          },
          {
            text: "21岁至25岁",
            select: false
          },
          {
            text: "26岁至30岁",
            select: false
          },
          {
            text: "30岁至35岁",
            select: false
          },
          {
            text: "36岁至40岁",
            select: false
          },
          {
            text: "41岁以上",
            select: false
          },
        ]
      },
      {
        text:"国别",
        height:"600rpx",
        sub:[
          {
            text:"全部",
            select:true
          },
          {
            text:"王国",
            select:false
          },
          {
            text: "妖精之国",
            select: false
          },
          {
            text: "机械之国",
            select: false
          },
          {
            text: "和之国",
            select: false
          },
          {
            text: "空之国",
            select: false
          },
          {
            text: "西部之国",
            select: false
          },
          {
            text: "魔法之国",
            select: false
          },
          {
            text: "恐龙之国",
            select: false
          },
          {
            text: "沙漠之国",
            select: false
          },
          {
            text: "死者之国",
            select: false
          },
          {
            text: "少数民族",
            select: false
          },
          {
            text: "动物之国",
            select: false
          },
          {
            text: "常夏之国",
            select: false
          },
          {
            text: "植物之国",
            select: false
          },
          {
            text: "科学之国",
            select: false
          },
          {
            text: "点心之国",
            select: false
          },
          {
            text: "电之国",
            select: false
          },
          {
            text: "雪之国",
            select: false
          },
        ]
      }
    ]
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

  },
  //确认按钮筛选函数
  search: function(){
    // console.log(1);
    wx.setStorageSync("level", level);
    wx.setStorageSync("search", 0);
    wx.setStorageSync("times", 1);
    //进行稀有度筛选
    wx.getStorage({
      key: 'listall',
      success: function(res) {
        // console.log(res.data);
        arraylist1 = res.data;
        arraylist2 = [];
        wx.setStorageSync("end", mergeSort(screen(arraylist1, arraylist2, rareindex, eleindex, weaponindex, areaindex, numindex, genderindex, typeindex, ageindex)))
      },
    })          

    //最后对缓存进行赋值
    // setTimeout(function () {
    //   wx.getStorage({
    //     key: 'end',
    //     success: function (res) {
    //       wx.setStorageSync("end", res.data)
    //     },
    //   })
    // },2000)

    // wx.showToast({
    //   title: '正在加载',
    //   icon:'loading',
    //   duration: 2000
    // })
    // setTimeout(function (){
      wx.switchTab({
        url: '/pages/list/list'
      })   
    // })
  },
  //等级单选函数
  levelselect : function(event){
    var select;
    console.log(event);
    // console.log(event.currentTarget.dataset.index);
    //等级初始化已选项
    for (var i = 0; i < event.currentTarget.dataset.length; i++){
      select = "level["+ i +"].select";
      this.setData({
        [select]: false
      })
    }
    //等级选中
    select = "level[" + event.currentTarget.dataset.index + "].select";
    this.setData({
      [select]: true
    })
    level = event.currentTarget.dataset.index;
  },
  //排序单选函数
  orderselect: function (event) {
    var select;
    // console.log(event);
    console.log(event.currentTarget.dataset.index);
    //排序初始化已选项
    for (var i = 0; i < event.currentTarget.dataset.length; i++) {
      select = "order[" + i + "].select";
      this.setData({
        [select]: false
      })
    }
    //排序选中
    select = "order[" + event.currentTarget.dataset.index + "].select";
    this.setData({
      [select]: true
    })
    sort = event.currentTarget.dataset.index;
  },
  //筛选单选函数
  //选择查询的项目
  searchselect:function(event){
    console.log(event);
    var select;
    // console.log("外层" + event.currentTarget.dataset.index);
    // console.log("内层" + event.currentTarget.dataset.length+"个数");
    //筛选初始化已选项
    for (var i = 0; i < event.currentTarget.dataset.length; i++) {
      select = "search[" + event.currentTarget.dataset.index + "].sub[" + i +"].select";
      this.setData({
        [select]: false
      })
    }
    //筛选选中
        select = "search[" + event.currentTarget.dataset.index + "].sub[" + index + "].select";
        this.setData({
          [select]: true
        })
    // console.log(index);
    //选中大选项进行判断并赋值子选项下标
    switch (event.currentTarget.dataset.index){
      //选择稀有度
      case 0:
        rareindex = sub;
        // console.log('rarevalue:' + rarevalue);
        break;
      //选择元素
      case 1:
        eleindex = sub
        // console.log('elevalue:'+elevalue);
        break;  
      //选择武器 
      case 2:
        weaponindex = sub;
        // console.log('weaponvalue:' + weaponvalue);
        break;
      //选择攻击距离
      case 3:
        areaindex = sub;
        break;
      //选择攻击数量  
      case 4:
        numindex = sub;
        break;
      //选择性别
      case 5:
        genderindex = sub;
        break;
      //选择成长
      case 6:
        typeindex = sub;
        break;
      //选择年龄
      case 7:
        ageindex = sub;
        break;    
      //选择国家
      case 8:
        countryindex = sub;
        break;

    }
  },
  selectone: function (event) {
    index = event.currentTarget.dataset.index;
    sub = index;
  }
  
})