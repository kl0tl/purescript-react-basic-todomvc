// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad from "../Control.Monad/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_FoldableWithIndex from "../Data.FoldableWithIndex/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_FunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Semigroup_Foldable from "../Data.Semigroup.Foldable/index.js";
import * as Data_Semigroup_Traversable from "../Data.Semigroup.Traversable/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_TraversableWithIndex from "../Data.TraversableWithIndex/index.js";
import * as Data_Unfoldable1 from "../Data.Unfoldable1/index.js";
var NonEmptyArray = function (x) {
    return x;
};
var unfoldable1NonEmptyArray = Data_Unfoldable1.unfoldable1Array;
var traversableWithIndexNonEmptyArray = Data_TraversableWithIndex.traversableWithIndexArray;
var traversableNonEmptyArray = Data_Traversable.traversableArray;
var showNonEmptyArray = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(NonEmptyArray " + (Data_Show.show(Data_Show.showArray(dictShow))(v) + ")");
    });
};
var semigroupNonEmptyArray = Data_Semigroup.semigroupArray;
var ordNonEmptyArray = function (dictOrd) {
    return Data_Ord.ordArray(dictOrd);
};
var ord1NonEmptyArray = Data_Ord.ord1Array;
var monadNonEmptyArray = Control_Monad.monadArray;
var functorWithIndexNonEmptyArray = Data_FunctorWithIndex.functorWithIndexArray;
var functorNonEmptyArray = Data_Functor.functorArray;
var foldableWithIndexNonEmptyArray = Data_FoldableWithIndex.foldableWithIndexArray;
var foldableNonEmptyArray = Data_Foldable.foldableArray;
var foldable1NonEmptyArray = new Data_Semigroup_Foldable.Foldable1(function () {
    return foldableNonEmptyArray;
}, function (dictSemigroup) {
    return $foreign.fold1Impl(Data_Semigroup.append(dictSemigroup));
}, function (dictSemigroup) {
    return Data_Semigroup_Foldable.foldMap1Default(foldable1NonEmptyArray)(functorNonEmptyArray)(dictSemigroup);
});
var traversable1NonEmptyArray = new Data_Semigroup_Traversable.Traversable1(function () {
    return foldable1NonEmptyArray;
}, function () {
    return traversableNonEmptyArray;
}, function (dictApply) {
    return Data_Semigroup_Traversable.sequence1Default(traversable1NonEmptyArray)(dictApply);
}, function (dictApply) {
    return $foreign.traverse1Impl(Control_Apply.apply(dictApply))(Data_Functor.map(dictApply.Functor0()));
});
var eqNonEmptyArray = function (dictEq) {
    return Data_Eq.eqArray(dictEq);
};
var eq1NonEmptyArray = Data_Eq.eq1Array;
var bindNonEmptyArray = Control_Bind.bindArray;
var applyNonEmptyArray = Control_Apply.applyArray;
var applicativeNonEmptyArray = Control_Applicative.applicativeArray;
var altNonEmptyArray = Control_Alt.altArray;
export {
    showNonEmptyArray,
    eqNonEmptyArray,
    eq1NonEmptyArray,
    ordNonEmptyArray,
    ord1NonEmptyArray,
    semigroupNonEmptyArray,
    functorNonEmptyArray,
    functorWithIndexNonEmptyArray,
    foldableNonEmptyArray,
    foldableWithIndexNonEmptyArray,
    foldable1NonEmptyArray,
    unfoldable1NonEmptyArray,
    traversableNonEmptyArray,
    traversableWithIndexNonEmptyArray,
    traversable1NonEmptyArray,
    applyNonEmptyArray,
    applicativeNonEmptyArray,
    bindNonEmptyArray,
    monadNonEmptyArray,
    altNonEmptyArray
};
