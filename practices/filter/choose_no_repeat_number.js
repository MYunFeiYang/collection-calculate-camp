'use strict';

function choose_no_repeat_number(collection) {
  var result=[];
  var tag=collection[0];
  result.push(tag);
  for (let col of collection){
    if (tag !=col){
      tag=col;
      result.push(tag);
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
