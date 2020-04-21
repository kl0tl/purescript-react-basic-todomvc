// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_DOM_NodeType from "../Web.DOM.NodeType/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var previousSibling = (function () {
    var $1 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($2) {
        return $1($foreign["_previousSibling"]($2));
    };
})();
var parentNode = (function () {
    var $3 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($4) {
        return $3($foreign["_parentNode"]($4));
    };
})();
var parentElement = (function () {
    var $5 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($6) {
        return $5($foreign["_parentElement"]($6));
    };
})();
var ownerDocument = (function () {
    var $7 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($8) {
        return $7($foreign["_ownerDocument"]($8));
    };
})();
var nodeValue = (function () {
    var $9 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($10) {
        return $9($foreign["_nodeValue"]($10));
    };
})();
var nodeType = function (dictPartial) {
    var $11 = Data_Maybe.fromJust();
    var $12 = Data_Enum.toEnum(Web_DOM_NodeType.boundedEnumNodeType);
    return function ($13) {
        return $11($12($foreign.nodeTypeIndex($13)));
    };
};
var nextSibling = (function () {
    var $14 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($15) {
        return $14($foreign["_nextSibling"]($15));
    };
})();
var lookupPrefix = function (p) {
    var $16 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    var $17 = $foreign["_lookupPrefix"](p);
    return function ($18) {
        return $16($17($18));
    };
};
var lookupNamespaceURI = function (ns) {
    var $19 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    var $20 = $foreign["_lookupNamespaceURI"](ns);
    return function ($21) {
        return $19($20($21));
    };
};
var lastChild = (function () {
    var $22 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($23) {
        return $22($foreign["_lastChild"]($23));
    };
})();
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("Node");
var firstChild = (function () {
    var $24 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($25) {
        return $24($foreign["_firstChild"]($25));
    };
})();
export {
    nodeTypeIndex,
    nodeName,
    baseURI,
    hasChildNodes,
    childNodes,
    setNodeValue,
    textContent,
    setTextContent,
    normalize,
    clone,
    deepClone,
    isEqualNode,
    compareDocumentPositionBits,
    contains,
    isDefaultNamespace,
    insertBefore,
    appendChild,
    replaceChild,
    removeChild
} from "./foreign.js";
export {
    fromEventTarget,
    toEventTarget,
    nodeType,
    ownerDocument,
    parentNode,
    parentElement,
    firstChild,
    lastChild,
    previousSibling,
    nextSibling,
    nodeValue,
    lookupPrefix,
    lookupNamespaceURI
};
