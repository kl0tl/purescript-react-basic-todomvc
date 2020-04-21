// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Monad_Except_Trans from "../Control.Monad.Except.Trans/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Foreign from "../Foreign/index.js";
var unsafeReadProp = function (k) {
    return function (value) {
        return $foreign.unsafeReadPropImpl(Foreign.fail(new Foreign.TypeMismatch("object", Foreign.typeOf(value))), Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(Data_Identity.monadIdentity)), k, value);
    };
};
var readProp = unsafeReadProp;
export {
    readProp
};
