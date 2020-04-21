// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Monad_Except from "../Control.Monad.Except/index.js";
import * as Control_Monad_Except_Trans from "../Control.Monad.Except.Trans/index.js";
import * as Control_Semigroupoid from "../Control.Semigroupoid/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Data_TraversableWithIndex from "../Data.TraversableWithIndex/index.js";
import * as Effect_Exception from "../Effect.Exception/index.js";
import * as Effect_Uncurried from "../Effect.Uncurried/index.js";
import * as Effect_Unsafe from "../Effect.Unsafe/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign_Index from "../Foreign.Index/index.js";
import * as Global_Unsafe from "../Global.Unsafe/index.js";
import * as Record from "../Record/index.js";
import * as Record_Builder from "../Record.Builder/index.js";
import * as Type_Data_RowList from "../Type.Data.RowList/index.js";
var WriteForeignFields = function (writeImplFields) {
    this.writeImplFields = writeImplFields;
};
var WriteForeign = function (writeImpl) {
    this.writeImpl = writeImpl;
};
var ReadForeignFields = function (getFields) {
    this.getFields = getFields;
};
var ReadForeign = function (readImpl) {
    this.readImpl = readImpl;
};
var writeImplFields = function (dict) {
    return dict.writeImplFields;
};
var writeImpl = function (dict) {
    return dict.writeImpl;
};
var writeJSON = function (dictWriteForeign) {
    var $204 = writeImpl(dictWriteForeign);
    return function ($205) {
        return Global_Unsafe.unsafeStringify($204($205));
    };
};
var writeForeignString = new WriteForeign(Foreign.unsafeToForeign);
var writeForeignInt = new WriteForeign(Foreign.unsafeToForeign);
var writeForeignBoolean = new WriteForeign(Foreign.unsafeToForeign);
var writeForeignArray = function (dictWriteForeign) {
    return new WriteForeign(function (xs) {
        return Foreign.unsafeToForeign(Data_Functor.map(Data_Functor.functorArray)(writeImpl(dictWriteForeign))(xs));
    });
};
var recordWriteForeign = function (dictRowToList) {
    return function (dictWriteForeignFields) {
        return new WriteForeign(function (rec) {
            var steps = writeImplFields(dictWriteForeignFields)(Type_Data_RowList.RLProxy.value)(rec);
            return Foreign.unsafeToForeign(Record_Builder.build(steps)({}));
        });
    };
};
var readString = new ReadForeign(Foreign.readString);
var readInt = new ReadForeign(Foreign.readInt);
var readImpl = function (dict) {
    return dict.readImpl;
};
var readFieldsNil = new ReadForeignFields(function (v) {
    return function (v1) {
        return Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(Data_Identity.monadIdentity))(Control_Category.identity(Record_Builder.categoryBuilder));
    };
});
var readBoolean = new ReadForeign(Foreign.readBoolean);
var readArray = function (dictReadForeign) {
    return new ReadForeign((function () {
        var readAtIdx = function (i) {
            return function (f) {
                return Control_Monad_Except.withExcept(Data_Functor.map(Data_List_Types.functorNonEmptyList)(Foreign.ErrorAtIndex.create(i)))(readImpl(dictReadForeign)(f));
            };
        };
        return Control_Bind.composeKleisliFlipped(Control_Monad_Except_Trans.bindExceptT(Data_Identity.monadIdentity))(Data_TraversableWithIndex.traverseWithIndex(Data_TraversableWithIndex.traversableWithIndexArray)(Control_Monad_Except_Trans.applicativeExceptT(Data_Identity.monadIdentity))(readAtIdx))(Foreign.readArray);
    })());
};
var parseJSON = (function () {
    var $206 = Data_Bifunctor.lmap(Data_Either.bifunctorEither)((function () {
        var $209 = Control_Applicative.pure(Data_List_Types.applicativeNonEmptyList);
        return function ($210) {
            return $209(Foreign.ForeignError.create(Effect_Exception.message($210)));
        };
    })());
    var $207 = Effect_Uncurried.runEffectFn1($foreign["_parseJSON"]);
    return function ($208) {
        return Control_Monad_Except_Trans.ExceptT(Data_Identity.Identity($206(Effect_Unsafe.unsafePerformEffect(Effect_Exception["try"]($207($208))))));
    };
})();
var readJSON = function (dictReadForeign) {
    var $211 = Control_Bind.composeKleisliFlipped(Control_Monad_Except_Trans.bindExceptT(Data_Identity.monadIdentity))(readImpl(dictReadForeign))(parseJSON);
    return function ($212) {
        return Control_Monad_Except.runExcept($211($212));
    };
};
var nilWriteForeignFields = new WriteForeignFields(function (v) {
    return function (v1) {
        return Control_Category.identity(Record_Builder.categoryBuilder);
    };
});
var getFields = function (dict) {
    return dict.getFields;
};
var readRecord = function (dictRowToList) {
    return function (dictReadForeignFields) {
        return new ReadForeign(function (o) {
            return Data_Functor.map(Control_Monad_Except_Trans.functorExceptT(Data_Identity.functorIdentity))(Data_Function.flip(Record_Builder.build)({}))(getFields(dictReadForeignFields)(Type_Data_RowList.RLProxy.value)(o));
        });
    };
};
var consWriteForeignFields = function (dictIsSymbol) {
    return function (dictWriteForeign) {
        return function (dictWriteForeignFields) {
            return function (dictCons) {
                return function (dictLacks) {
                    return function (dictCons1) {
                        return new WriteForeignFields(function (v) {
                            return function (rec) {
                                var rest = writeImplFields(dictWriteForeignFields)(Type_Data_RowList.RLProxy.value)(rec);
                                var value = writeImpl(dictWriteForeign)(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(rec));
                                var result = Control_Semigroupoid.compose(Record_Builder.semigroupoidBuilder)(Record_Builder.insert()()(dictIsSymbol)(Data_Symbol.SProxy.value)(value))(rest);
                                return result;
                            };
                        });
                    };
                };
            };
        };
    };
};
var applyEither = function (dictSemigroup) {
    return function (v) {
        return function (v1) {
            if (v instanceof Data_Either.Left && v1 instanceof Data_Either.Right) {
                return new Data_Either.Left(v.value0);
            };
            if (v instanceof Data_Either.Left && v1 instanceof Data_Either.Left) {
                return new Data_Either.Left(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0));
            };
            if (v instanceof Data_Either.Right && v1 instanceof Data_Either.Left) {
                return new Data_Either.Left(v1.value0);
            };
            if (v instanceof Data_Either.Right && v1 instanceof Data_Either.Right) {
                return new Data_Either.Right(v.value0(v1.value0));
            };
            throw new Error("Failed pattern match at Simple.JSON (line 234, column 1 - line 234, column 90): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
};
var exceptTApply = function (dictSemigroup) {
    return function (dictApplicative) {
        return function (fun) {
            return function (a) {
                return Control_Monad_Except_Trans.ExceptT(Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(applyEither(dictSemigroup))(Control_Monad_Except_Trans.runExceptT(fun)))(Control_Monad_Except_Trans.runExceptT(a)));
            };
        };
    };
};
var readFieldsCons = function (dictIsSymbol) {
    return function (dictReadForeign) {
        return function (dictReadForeignFields) {
            return function (dictLacks) {
                return function (dictCons) {
                    return new ReadForeignFields(function (v) {
                        return function (obj) {
                            var rest = getFields(dictReadForeignFields)(Type_Data_RowList.RLProxy.value)(obj);
                            var name = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                            var withExcept$prime = Control_Monad_Except.withExcept(Data_Functor.map(Data_List_Types.functorNonEmptyList)(Foreign.ErrorAtProperty.create(name)));
                            var first = Control_Bind.bind(Control_Monad_Except_Trans.bindExceptT(Data_Identity.monadIdentity))(withExcept$prime(Control_Bind.bindFlipped(Control_Monad_Except_Trans.bindExceptT(Data_Identity.monadIdentity))(readImpl(dictReadForeign))(Foreign_Index.readProp(name)(obj))))(function (value) {
                                return Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(Data_Identity.monadIdentity))(Record_Builder.insert()()(dictIsSymbol)(Data_Symbol.SProxy.value)(value));
                            });
                            return exceptTApply(Data_List_Types.semigroupNonEmptyList)(Data_Identity.applicativeIdentity)(Data_Functor.map(Control_Monad_Except_Trans.functorExceptT(Data_Identity.functorIdentity))(Control_Semigroupoid.compose(Record_Builder.semigroupoidBuilder))(first))(rest);
                        };
                    });
                };
            };
        };
    };
};
export {
    readJSON,
    writeJSON,
    parseJSON,
    ReadForeign,
    readImpl,
    ReadForeignFields,
    getFields,
    WriteForeign,
    writeImpl,
    WriteForeignFields,
    writeImplFields,
    readInt,
    readString,
    readBoolean,
    readArray,
    readRecord,
    readFieldsCons,
    readFieldsNil,
    writeForeignString,
    writeForeignInt,
    writeForeignBoolean,
    writeForeignArray,
    recordWriteForeign,
    consWriteForeignFields,
    nilWriteForeignFields
};
