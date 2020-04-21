// Generated by purs version 0.13.6
import * as Data_Either from "../Data.Either/index.js";
import * as Data_String_Regex from "../Data.String.Regex/index.js";
var unsafeRegex = function (s) {
    return function (f) {
        return Data_Either.fromRight()(Data_String_Regex.regex(s)(f));
    };
};
export {
    unsafeRegex
};
