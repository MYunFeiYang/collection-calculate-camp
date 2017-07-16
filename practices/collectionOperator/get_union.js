'use strict';

function get_union(collection_a, collection_b) {
  var result=[];
  for (let col_a of collection_a){
    result.push(col_a);
  }
  for (let col_b of collection_b){
    for (let col_a of collection_a){
      if (col_b==col_a)
        result.push(col_b);
    }
  }
  return result;
}

module.exports = get_union;

