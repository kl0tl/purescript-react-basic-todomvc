// Generated by purs version 0.13.6
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Divide from "../Data.Divide/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var Decide = function (Divide0, choose) {
    this.Divide0 = Divide0;
    this.choose = choose;
};
var choosePredicate = new Decide(function () {
    return Data_Divide.dividePredicate;
}, function (f) {
    return function (v) {
        return function (v1) {
            var $52 = Data_Either.either(v)(v1);
            return function ($53) {
                return $52(f($53));
            };
        };
    };
});
var chooseOp = function (dictSemigroup) {
    return new Decide(function () {
        return Data_Divide.divideOp(dictSemigroup);
    }, function (f) {
        return function (v) {
            return function (v1) {
                var $54 = Data_Either.either(v)(v1);
                return function ($55) {
                    return $54(f($55));
                };
            };
        };
    });
};
var chooseEquivalence = new Decide(function () {
    return Data_Divide.divideEquivalence;
}, function (f) {
    return function (v) {
        return function (v1) {
            return function (a) {
                return function (b) {
                    var v2 = f(a);
                    if (v2 instanceof Data_Either.Left) {
                        var v3 = f(b);
                        if (v3 instanceof Data_Either.Left) {
                            return v(v2.value0)(v3.value0);
                        };
                        if (v3 instanceof Data_Either.Right) {
                            return false;
                        };
                        throw new Error("Failed pattern match at Data.Decide (line 27, column 15 - line 29, column 23): " + [ v3.constructor.name ]);
                    };
                    if (v2 instanceof Data_Either.Right) {
                        var v3 = f(b);
                        if (v3 instanceof Data_Either.Left) {
                            return false;
                        };
                        if (v3 instanceof Data_Either.Right) {
                            return v1(v2.value0)(v3.value0);
                        };
                        throw new Error("Failed pattern match at Data.Decide (line 30, column 16 - line 32, column 23): " + [ v3.constructor.name ]);
                    };
                    throw new Error("Failed pattern match at Data.Decide (line 26, column 66 - line 32, column 23): " + [ v2.constructor.name ]);
                };
            };
        };
    };
});
var chooseComparison = new Decide(function () {
    return Data_Divide.divideComparison;
}, function (f) {
    return function (v) {
        return function (v1) {
            return function (a) {
                return function (b) {
                    var v2 = f(a);
                    if (v2 instanceof Data_Either.Left) {
                        var v3 = f(b);
                        if (v3 instanceof Data_Either.Left) {
                            return v(v2.value0)(v3.value0);
                        };
                        if (v3 instanceof Data_Either.Right) {
                            return Data_Ordering.LT.value;
                        };
                        throw new Error("Failed pattern match at Data.Decide (line 18, column 15 - line 20, column 20): " + [ v3.constructor.name ]);
                    };
                    if (v2 instanceof Data_Either.Right) {
                        var v3 = f(b);
                        if (v3 instanceof Data_Either.Left) {
                            return Data_Ordering.GT.value;
                        };
                        if (v3 instanceof Data_Either.Right) {
                            return v1(v2.value0)(v3.value0);
                        };
                        throw new Error("Failed pattern match at Data.Decide (line 21, column 16 - line 23, column 23): " + [ v3.constructor.name ]);
                    };
                    throw new Error("Failed pattern match at Data.Decide (line 17, column 63 - line 23, column 23): " + [ v2.constructor.name ]);
                };
            };
        };
    };
});
var choose = function (dict) {
    return dict.choose;
};
var chosen = function (dictDecide) {
    return choose(dictDecide)(Control_Category.identity(Control_Category.categoryFn));
};
export {
    choose,
    Decide,
    chosen,
    chooseComparison,
    chooseEquivalence,
    choosePredicate,
    chooseOp
};
