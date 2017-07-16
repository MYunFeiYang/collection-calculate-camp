'use strict';

function grouping_count(collection) {
  /*提取标签tag*/
  function calculate_tag(collection) {
    var tag=[];
    var tagA=collection[0];
    for (let col of collection){
      if (tagA!=col){
        tagA=col;
        tag.push(tagA);
      }
    }
    return tag;
  }
  /*计算标签数目*/
  function calculate_count(collection) {
    var tag=calculate_tag(collection);
    var result={};
    for (let tagA of tag){
      for (let col of collection){
        var count=0;
        if (tagA==col)
          count++;
      }
      result.tagA=count;
    }
    return result;
  }
}

module.exports = grouping_count;
