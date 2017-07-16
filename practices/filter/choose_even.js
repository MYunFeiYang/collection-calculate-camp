'use strict';

function choose_even(collection) {
  var result = [];
  for (let col of collection) {
    if (col % 2 == 0)
      result.push(col);
  }
  return result;
}

module.exports = choose_even;
