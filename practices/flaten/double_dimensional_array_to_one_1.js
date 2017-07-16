'use strict';

function double_to_one(collection) {
  var result=[];
  for (let i=0;i<collection.length;i++){
    for (let j=0;j<collection[i].length;j++){
      result.push(collection[i][j]);
    }
  }
  return result;
}

module.exports = double_to_one;
