// Generated by purs version 0.13.6
import * as Control_Monad_Gen from "../Control.Monad.Gen/index.js";
import * as Control_Monad_Gen_Class from "../Control.Monad.Gen.Class/index.js";
import * as Data_Bounded from "../Data.Bounded/index.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_NonEmpty from "../Data.NonEmpty/index.js";
var genUnicodeChar = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Enum.toEnumWithDefaults(Data_Enum.boundedEnumChar)(Data_Bounded.bottom(Data_Bounded.boundedChar))(Data_Bounded.top(Data_Bounded.boundedChar)))(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(0)(65536));
};
var genDigitChar = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Enum.toEnumWithDefaults(Data_Enum.boundedEnumChar)(Data_Bounded.bottom(Data_Bounded.boundedChar))(Data_Bounded.top(Data_Bounded.boundedChar)))(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(48)(57));
};
var genAsciiChar$prime = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Enum.toEnumWithDefaults(Data_Enum.boundedEnumChar)(Data_Bounded.bottom(Data_Bounded.boundedChar))(Data_Bounded.top(Data_Bounded.boundedChar)))(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(0)(127));
};
var genAsciiChar = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Enum.toEnumWithDefaults(Data_Enum.boundedEnumChar)(Data_Bounded.bottom(Data_Bounded.boundedChar))(Data_Bounded.top(Data_Bounded.boundedChar)))(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(32)(127));
};
var genAlphaUppercase = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Enum.toEnumWithDefaults(Data_Enum.boundedEnumChar)(Data_Bounded.bottom(Data_Bounded.boundedChar))(Data_Bounded.top(Data_Bounded.boundedChar)))(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(65)(90));
};
var genAlphaLowercase = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Enum.toEnumWithDefaults(Data_Enum.boundedEnumChar)(Data_Bounded.bottom(Data_Bounded.boundedChar))(Data_Bounded.top(Data_Bounded.boundedChar)))(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(97)(122));
};
var genAlpha = function (dictMonadGen) {
    return Control_Monad_Gen.oneOf(dictMonadGen)(Data_NonEmpty.foldable1NonEmpty(Data_Foldable.foldableArray))(new Data_NonEmpty.NonEmpty(genAlphaLowercase(dictMonadGen), [ genAlphaUppercase(dictMonadGen) ]));
};
export {
    genUnicodeChar,
    genAsciiChar,
    genAsciiChar$prime,
    genDigitChar,
    genAlpha,
    genAlphaLowercase,
    genAlphaUppercase
};
