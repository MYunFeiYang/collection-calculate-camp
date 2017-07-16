'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var result=[];
  if (collection_a.length>=collection_b){
    for (let col_a of collection_a){
      for (let col_b of collection_b){
        if (col_a!=col_b)
          result.push(col_a);
      }
    }
  }
  else{
    for (let col_b of collection_a){
      for (let col_a of collection_b){
        if (col_a!=col_b)
          result.push(col_b);
      }
    }
  }
  return result;
}

module.exports = choose_no_common_elements;
