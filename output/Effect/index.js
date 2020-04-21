// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad from "../Control.Monad/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
var monadEffect = new Control_Monad.Monad(function () {
    return applicativeEffect;
}, function () {
    return bindEffect;
});
var bindEffect = new Control_Bind.Bind(function () {
    return applyEffect;
}, $foreign.bindE);
var applyEffect = new Control_Apply.Apply(function () {
    return functorEffect;
}, Control_Monad.ap(monadEffect));
var applicativeEffect = new Control_Applicative.Applicative(function () {
    return applyEffect;
}, $foreign.pureE);
var functorEffect = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEffect));
var semigroupEffect = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(Control_Apply.lift2(applyEffect)(Data_Semigroup.append(dictSemigroup)));
};
var monoidEffect = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffect(dictMonoid.Semigroup0());
    }, $foreign.pureE(Data_Monoid.mempty(dictMonoid)));
};
export {
    untilE,
    whileE,
    forE,
    foreachE
} from "./foreign.js";
export {
    functorEffect,
    applyEffect,
    applicativeEffect,
    bindEffect,
    monadEffect,
    semigroupEffect,
    monoidEffect
};
