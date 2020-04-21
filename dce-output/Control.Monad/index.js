// Generated by purs version 0.13.6
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
var Monad = function (Applicative0, Bind1) {
    this.Applicative0 = Applicative0;
    this.Bind1 = Bind1;
};
var ap = function (dictMonad) {
    return function (f) {
        return function (a) {
            return Control_Bind.bind(dictMonad.Bind1())(f)(function (f$prime) {
                return Control_Bind.bind(dictMonad.Bind1())(a)(function (a$prime) {
                    return Control_Applicative.pure(dictMonad.Applicative0())(f$prime(a$prime));
                });
            });
        };
    };
};
export {
    Monad,
    ap
};
