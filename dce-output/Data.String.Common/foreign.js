"use strict";


































  

exports.toLower = function (s) {
  return s.toLowerCase();
};



  

exports.trim = function (s) {
  return s.trim();
};

exports.joinWith = function (s) {
  return function (xs) {
    return xs.join(s);
  };
};
