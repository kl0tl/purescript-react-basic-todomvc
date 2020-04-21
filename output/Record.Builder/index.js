// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Semigroupoid from "../Control.Semigroupoid/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Record_Unsafe_Union from "../Record.Unsafe.Union/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var Builder = function (x) {
    return x;
};
var union = function (dictUnion) {
    return function (r2) {
        return function (r1) {
            return Record_Unsafe_Union.unsafeUnionFn(r1, r2);
        };
    };
};
var semigroupoidBuilder = Control_Semigroupoid.semigroupoidFn;
var rename = function (dictIsSymbol) {
    return function (dictIsSymbol1) {
        return function (dictCons) {
            return function (dictLacks) {
                return function (dictCons1) {
                    return function (dictLacks1) {
                        return function (l1) {
                            return function (l2) {
                                return function (r1) {
                                    return $foreign.unsafeRename(Data_Symbol.reflectSymbol(dictIsSymbol)(l1))(Data_Symbol.reflectSymbol(dictIsSymbol1)(l2))(r1);
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var nub = function (dictNub) {
    return Unsafe_Coerce.unsafeCoerce;
};
var modify = function (dictCons) {
    return function (dictCons1) {
        return function (dictIsSymbol) {
            return function (l) {
                return function (f) {
                    return function (r1) {
                        return $foreign.unsafeModify(Data_Symbol.reflectSymbol(dictIsSymbol)(l))(f)(r1);
                    };
                };
            };
        };
    };
};
var merge = function (dictUnion) {
    return function (dictNub) {
        return function (r2) {
            return function (r1) {
                return Record_Unsafe_Union.unsafeUnionFn(r1, r2);
            };
        };
    };
};
var insert = function (dictCons) {
    return function (dictLacks) {
        return function (dictIsSymbol) {
            return function (l) {
                return function (a) {
                    return function (r1) {
                        return $foreign.unsafeInsert(Data_Symbol.reflectSymbol(dictIsSymbol)(l))(a)(r1);
                    };
                };
            };
        };
    };
};
var disjointUnion = function (dictUnion) {
    return function (dictNub) {
        return function (r1) {
            return function (r2) {
                return Record_Unsafe_Union.unsafeUnionFn(r1, r2);
            };
        };
    };
};
var $$delete = function (dictIsSymbol) {
    return function (dictLacks) {
        return function (dictCons) {
            return function (l) {
                return function (r2) {
                    return $foreign.unsafeDelete(Data_Symbol.reflectSymbol(dictIsSymbol)(l))(r2);
                };
            };
        };
    };
};
var categoryBuilder = Control_Category.categoryFn;
var build = function (v) {
    return function (r1) {
        return v($foreign.copyRecord(r1));
    };
};
export {
    build,
    insert,
    modify,
    $$delete as delete,
    rename,
    merge,
    union,
    disjointUnion,
    nub,
    semigroupoidBuilder,
    categoryBuilder
};
