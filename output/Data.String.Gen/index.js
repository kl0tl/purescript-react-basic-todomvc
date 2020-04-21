// Generated by purs version 0.13.6
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Gen from "../Control.Monad.Gen/index.js";
import * as Control_Monad_Gen_Class from "../Control.Monad.Gen.Class/index.js";
import * as Data_Char_Gen from "../Data.Char.Gen/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_String_CodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data_Unfoldable from "../Data.Unfoldable/index.js";
var genString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return function (genChar) {
            return Control_Monad_Gen_Class.sized(dictMonadGen)(function (size) {
                return Control_Bind.bind((dictMonadGen.Monad0()).Bind1())(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(1)(Data_Ord.max(Data_Ord.ordInt)(1)(size)))(function (newSize) {
                    return Control_Monad_Gen_Class.resize(dictMonadGen)(Data_Function["const"](newSize))(Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_String_CodeUnits.fromCharArray)(Control_Monad_Gen.unfoldable(dictMonadRec)(dictMonadGen)(Data_Unfoldable.unfoldableArray)(genChar)));
                });
            });
        };
    };
};
var genUnicodeString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genUnicodeChar(dictMonadGen));
    };
};
var genDigitString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genDigitChar(dictMonadGen));
    };
};
var genAsciiString$prime = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen["genAsciiChar$prime"](dictMonadGen));
    };
};
var genAsciiString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genAsciiChar(dictMonadGen));
    };
};
var genAlphaUppercaseString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genAlphaUppercase(dictMonadGen));
    };
};
var genAlphaString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genAlpha(dictMonadGen));
    };
};
var genAlphaLowercaseString = function (dictMonadRec) {
    return function (dictMonadGen) {
        return genString(dictMonadRec)(dictMonadGen)(Data_Char_Gen.genAlphaLowercase(dictMonadGen));
    };
};
export {
    genString,
    genUnicodeString,
    genAsciiString,
    genAsciiString$prime,
    genDigitString,
    genAlphaString,
    genAlphaLowercaseString,
    genAlphaUppercaseString
};
