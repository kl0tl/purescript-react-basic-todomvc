// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
var URL = function (x) {
    return x;
};
var DocumentTitle = function (x) {
    return x;
};
var Delta = function (x) {
    return x;
};
var newtypeURL = new Data_Newtype.Newtype(function (n) {
    return n;
}, URL);
var newtypeDocumentTitle = new Data_Newtype.Newtype(function (n) {
    return n;
}, DocumentTitle);
var newtypeDelta = new Data_Newtype.Newtype(function (n) {
    return n;
}, Delta);
var eqURL = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordURL = new Data_Ord.Ord(function () {
    return eqURL;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordString)(x)(y);
    };
});
var eqDocumentTitle = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordDocumentTitle = new Data_Ord.Ord(function () {
    return eqDocumentTitle;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordString)(x)(y);
    };
});
var eqDelta = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordDelta = new Data_Ord.Ord(function () {
    return eqDelta;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
    };
});
export {
    back,
    forward,
    go,
    pushState,
    replaceState,
    state
} from "./foreign.js";
export {
    DocumentTitle,
    Delta,
    URL,
    eqDocumentTitle,
    ordDocumentTitle,
    newtypeDocumentTitle,
    eqDelta,
    ordDelta,
    newtypeDelta,
    eqURL,
    ordURL,
    newtypeURL
};
