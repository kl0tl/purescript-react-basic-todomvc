// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Data_Function_Uncurried from "../Data.Function.Uncurried/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect_Uncurried from "../Effect.Uncurried/index.js";
var NoUpdate = (function () {
    function NoUpdate() {

    };
    NoUpdate.value = new NoUpdate();
    return NoUpdate;
})();
var Update = (function () {
    function Update(value0) {
        this.value0 = value0;
    };
    Update.create = function (value0) {
        return new Update(value0);
    };
    return Update;
})();
var SideEffects = (function () {
    function SideEffects(value0) {
        this.value0 = value0;
    };
    SideEffects.create = function (value0) {
        return new SideEffects(value0);
    };
    return SideEffects;
})();
var UpdateAndSideEffects = (function () {
    function UpdateAndSideEffects(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    UpdateAndSideEffects.create = function (value0) {
        return function (value1) {
            return new UpdateAndSideEffects(value0, value1);
        };
    };
    return UpdateAndSideEffects;
})();
var semigroupJSX = new Data_Semigroup.Semigroup(function (a) {
    return function (b) {
        return $foreign.fragment([ a, b ]);
    };
});
var monoidJSX = new Data_Monoid.Monoid(function () {
    return semigroupJSX;
}, $foreign.empty);
var makeStateless = function (component) {
    return function (render) {
        return $foreign.make()(component)({
            initialState: Data_Unit.unit,
            render: function (self) {
                return render(self.props);
            }
        });
    };
};
var keyed = Data_Function_Uncurried.runFn2($foreign.keyed_);
var elementKeyed = Data_Function_Uncurried.runFn2($foreign.elementKeyed_);
var element = Data_Function_Uncurried.runFn2($foreign.element_);
var provider = function (context) {
    return function (value) {
        return function (children) {
            return element($foreign.contextProvider(context))({
                value: value,
                children: children
            });
        };
    };
};
var consumer = function (context) {
    return function (children) {
        return element($foreign.contextConsumer(context))({
            children: children
        });
    };
};
var buildStateUpdate = function (v) {
    if (v instanceof NoUpdate) {
        return {
            state: Data_Nullable["null"],
            effects: Data_Nullable["null"]
        };
    };
    if (v instanceof Update) {
        return {
            state: Data_Nullable.notNull(v.value0),
            effects: Data_Nullable["null"]
        };
    };
    if (v instanceof SideEffects) {
        return {
            state: Data_Nullable["null"],
            effects: Data_Nullable.notNull(v.value0)
        };
    };
    if (v instanceof UpdateAndSideEffects) {
        return {
            state: Data_Nullable.notNull(v.value0),
            effects: Data_Nullable.notNull(v.value1)
        };
    };
    throw new Error("Failed pattern match at React.Basic (line 433, column 20 - line 449, column 6): " + [ v.constructor.name ]);
};
var runUpdate = function (update) {
    return Effect_Uncurried.runEffectFn3($foreign.runUpdate_)(function (self, action) {
        return buildStateUpdate(update(self)(action));
    });
};
export {
    createComponent,
    readProps,
    readState,
    make,
    empty,
    fragment,
    displayNameFromComponent,
    displayNameFromSelf,
    toReactComponent,
    createContext,
    contextConsumer,
    contextProvider
} from "./foreign.js";
export {
    NoUpdate,
    Update,
    SideEffects,
    UpdateAndSideEffects,
    runUpdate,
    makeStateless,
    keyed,
    element,
    elementKeyed,
    provider,
    consumer,
    semigroupJSX,
    monoidJSX
};
