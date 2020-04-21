// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Effect from "../Effect/index.js";
var $$try = function (action) {
    return $foreign.catchException((function () {
        var $156 = Control_Applicative.pure(Effect.applicativeEffect);
        return function ($157) {
            return $156(Data_Either.Left.create($157));
        };
    })())(Data_Functor.map(Effect.functorEffect)(Data_Either.Right.create)(action));
};
export {
    message,
    catchException
} from "./foreign.js";
export {
    $$try as try
};
