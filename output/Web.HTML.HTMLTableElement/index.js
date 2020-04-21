// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var tHead = (function () {
    var $0 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($1) {
        return $0($foreign["_tHead"]($1));
    };
})();
var tFoot = (function () {
    var $2 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($3) {
        return $2($foreign["_tFoot"]($3));
    };
})();
var setTHead = function ($4) {
    return $foreign["_setTHead"](Data_Nullable.toNullable($4));
};
var setTFoot = function ($5) {
    return $foreign["_setTFoot"](Data_Nullable.toNullable($5));
};
var setCaption = function ($6) {
    return $foreign["_setCaption"](Data_Nullable.toNullable($6));
};
var insertRow$prime = $foreign.insertRowAt;
var insertRow = insertRow$prime(-1 | 0);
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromHTMLElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var caption = (function () {
    var $7 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($8) {
        return $7($foreign["_caption"]($8));
    };
})();
export {
    createCaption,
    deleteCaption,
    createTHead,
    deleteTHead,
    createTFoot,
    deleteTFoot,
    tBodies,
    createTBody,
    rows,
    deleteRow,
    border,
    setBorder
} from "./foreign.js";
export {
    fromHTMLElement,
    fromElement,
    fromNode,
    fromChildNode,
    fromNonDocumentTypeChildNode,
    fromParentNode,
    fromEventTarget,
    toHTMLElement,
    toElement,
    toNode,
    toChildNode,
    toNonDocumentTypeChildNode,
    toParentNode,
    toEventTarget,
    caption,
    setCaption,
    tHead,
    setTHead,
    tFoot,
    setTFoot,
    insertRow,
    insertRow$prime
};
