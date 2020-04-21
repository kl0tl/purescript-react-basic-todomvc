// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_HTML_SelectionMode from "../Web.HTML.SelectionMode/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var stepUp$prime = $foreign.stepUpBy;
var stepUp = stepUp$prime(1);
var stepDown$prime = $foreign.stepDownBy;
var stepDown = stepDown$prime(1);
var setRangeText$prime = function (rpl) {
    return function (s) {
        return function (e) {
            return function (mode) {
                return function (area) {
                    return function () {
                        return $foreign["_setRangeText"](rpl, s, e, Web_HTML_SelectionMode.print(mode), area);
                    };
                };
            };
        };
    };
};
var list = (function () {
    var $0 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($1) {
        return $0($foreign["_list"]($1));
    };
})();
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromHTMLElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var form = (function () {
    var $2 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($3) {
        return $2($foreign["_form"]($3));
    };
})();
var files = (function () {
    var $4 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($5) {
        return $4($foreign["_files"]($5));
    };
})();
export {
    accept,
    setAccept,
    alt,
    setAlt,
    autocomplete,
    setAutocomplete,
    autofocus,
    setAutofocus,
    defaultChecked,
    setDefaultChecked,
    checked,
    setChecked,
    dirName,
    setDirName,
    disabled,
    setDisabled,
    formAction,
    setFormAction,
    formEnctype,
    setFormEnctype,
    formMethod,
    setFormMethod,
    formNoValidate,
    setFormNoValidate,
    formTarget,
    setFormTarget,
    height,
    setHeight,
    indeterminate,
    setIndeterminate,
    max,
    setMax,
    maxLength,
    setMaxLength,
    min,
    setMin,
    minLength,
    setMinLength,
    multiple,
    setMultiple,
    name,
    setName,
    pattern,
    setPattern,
    placeholder,
    setPlaceholder,
    readOnly,
    setReadOnly,
    required,
    setRequired,
    size,
    setSize,
    src,
    setSrc,
    step,
    setStep,
    type_,
    setType,
    defaultValue,
    setDefaultValue,
    value,
    setValue,
    valueAsDate,
    setValueAsDate,
    valueAsNumber,
    setValueAsNumber,
    width,
    setWidth,
    willValidate,
    validity,
    validationMessage,
    checkValidity,
    reportValidity,
    setCustomValidity,
    labels,
    select,
    selectionStart,
    setSelectionStart,
    selectionEnd,
    setSelectionEnd,
    selectionDirection,
    setSelectionDirection,
    setRangeText,
    setSelectionRange
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
    form,
    files,
    list,
    stepUp$prime,
    stepDown$prime,
    setRangeText$prime
};
