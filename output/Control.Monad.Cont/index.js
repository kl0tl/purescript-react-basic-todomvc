// Generated by purs version 0.13.6
import * as Control_Monad_Cont_Trans from "../Control.Monad.Cont.Trans/index.js";
import * as Control_Semigroupoid from "../Control.Semigroupoid/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
var withCont = function (f) {
    return Control_Monad_Cont_Trans.withContT((function () {
        var $0 = Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)(Data_Identity.Identity);
        var $1 = Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)(Data_Newtype.unwrap(Data_Identity.newtypeIdentity));
        return function ($2) {
            return $0(f($1($2)));
        };
    })());
};
var runCont = function (cc) {
    return function (k) {
        return Data_Newtype.unwrap(Data_Identity.newtypeIdentity)(Control_Monad_Cont_Trans.runContT(cc)(function ($3) {
            return Data_Identity.Identity(k($3));
        }));
    };
};
var mapCont = function (f) {
    return Control_Monad_Cont_Trans.mapContT((function () {
        var $4 = Data_Newtype.unwrap(Data_Identity.newtypeIdentity);
        return function ($5) {
            return Data_Identity.Identity(f($4($5)));
        };
    })());
};
var cont = function (f) {
    return function (c) {
        return f((function () {
            var $6 = Data_Newtype.unwrap(Data_Identity.newtypeIdentity);
            return function ($7) {
                return $6(c($7));
            };
        })());
    };
};
export {
    cont,
    runCont
};
