// Generated by purs version 0.13.6
import * as Type_Proxy from "../Type.Proxy/index.js";
var Or = {};
var Not = {};
var IsBoolean = function (reflectBoolean) {
    this.reflectBoolean = reflectBoolean;
};
var If = {};
var BProxy = (function () {
    function BProxy() {

    };
    BProxy.value = new BProxy();
    return BProxy;
})();
var And = {};
var reflectBoolean = function (dict) {
    return dict.reflectBoolean;
};
var orTrue = Or;
var orFalse = Or;
var or = function (dictOr) {
    return function (v) {
        return function (v1) {
            return BProxy.value;
        };
    };
};
var notTrue = Not;
var notFalse = Not;
var not = function (dictNot) {
    return function (v) {
        return BProxy.value;
    };
};
var isBooleanTrue = new IsBoolean(function (v) {
    return true;
});
var isBooleanFalse = new IsBoolean(function (v) {
    return false;
});
var reifyBoolean = function (v) {
    return function (f) {
        if (v) {
            return f(isBooleanTrue)(BProxy.value);
        };
        if (!v) {
            return f(isBooleanFalse)(BProxy.value);
        };
        throw new Error("Failed pattern match at Type.Data.Boolean (line 31, column 1 - line 31, column 83): " + [ v.constructor.name, f.constructor.name ]);
    };
};
var if_ = function (dictIf) {
    return function (v) {
        return function (v1) {
            return function (v2) {
                return Type_Proxy["Proxy"].value;
            };
        };
    };
};
var ifTrue = If;
var ifFalse = If;
var andTrue = And;
var andFalse = And;
var and = function (dictAnd) {
    return function (v) {
        return function (v1) {
            return BProxy.value;
        };
    };
};
export {
    BProxy,
    IsBoolean,
    reflectBoolean,
    reifyBoolean,
    And,
    and,
    Or,
    or,
    Not,
    not,
    If,
    if_,
    isBooleanTrue,
    isBooleanFalse,
    andTrue,
    andFalse,
    orTrue,
    orFalse,
    notTrue,
    notFalse,
    ifTrue,
    ifFalse
};
