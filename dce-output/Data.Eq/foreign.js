"use strict";

var refEq = function (r1) {
  return function (r2) {
    return r1 === r2;
  };
};

exports.eqBooleanImpl = refEq;
exports.eqIntImpl = refEq;

                           
exports.eqStringImpl = refEq;











  
