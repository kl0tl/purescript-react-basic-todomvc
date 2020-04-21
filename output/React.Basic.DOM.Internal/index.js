// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var unsafeCreateDOMComponent = Unsafe_Coerce.unsafeCoerce;
var semigroupCSS = new Data_Semigroup.Semigroup(function (a) {
    return function (b) {
        return $foreign.mergeStyles([ b, a ]);
    };
});
var css = Unsafe_Coerce.unsafeCoerce;
var monoidCSS = new Data_Monoid.Monoid(function () {
    return semigroupCSS;
}, css({}));
export {
    mergeStyles
} from "./foreign.js";
export {
    css,
    unsafeCreateDOMComponent,
    semigroupCSS,
    monoidCSS
};
