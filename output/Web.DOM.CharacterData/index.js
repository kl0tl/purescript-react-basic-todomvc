// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("CharacterData");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("CharacterData");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("CharacterData");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("CharacterData");
export {
    data_,
    length,
    substringData,
    appendData,
    insertData,
    deleteData,
    replaceData
} from "./foreign.js";
export {
    fromNode,
    fromChildNode,
    fromNonDocumentTypeChildNode,
    fromEventTarget,
    toNode,
    toChildNode,
    toNonDocumentTypeChildNode,
    toEventTarget
};
