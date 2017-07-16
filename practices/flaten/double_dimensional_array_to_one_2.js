'use strict';

function double_to_one(collection) {
  var result=[];
  var Array_one=[];
  for (let i=0;i<collection.length;i++){
    for  (let j=0;j<collection[i].length;j++){
      Array_one.push(collection[i][j]);
    }
  }
  var tag=Array_one[0];
  result.push(tag)
  for (let arr of Array_one){
    if (tag!=arr){
      tag=arr;
      result.push(tag);
    }
  }
  return result;
}

module.exports = double_to_one;
