// Generated by purs version 0.13.6
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Plus from "../Control.Plus/index.js";
var Alternative = function (Applicative0, Plus1) {
    this.Applicative0 = Applicative0;
    this.Plus1 = Plus1;
};
var alternativeArray = new Alternative(function () {
    return Control_Applicative.applicativeArray;
}, function () {
    return Control_Plus.plusArray;
});
export {
    Alternative,
    alternativeArray
};
