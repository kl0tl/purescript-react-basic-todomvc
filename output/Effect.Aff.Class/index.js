// Generated by purs version 0.13.6
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Monad_Cont_Trans from "../Control.Monad.Cont.Trans/index.js";
import * as Control_Monad_Except_Trans from "../Control.Monad.Except.Trans/index.js";
import * as Control_Monad_List_Trans from "../Control.Monad.List.Trans/index.js";
import * as Control_Monad_Maybe_Trans from "../Control.Monad.Maybe.Trans/index.js";
import * as Control_Monad_RWS_Trans from "../Control.Monad.RWS.Trans/index.js";
import * as Control_Monad_Reader_Trans from "../Control.Monad.Reader.Trans/index.js";
import * as Control_Monad_State_Trans from "../Control.Monad.State.Trans/index.js";
import * as Control_Monad_Trans_Class from "../Control.Monad.Trans.Class/index.js";
import * as Control_Monad_Writer_Trans from "../Control.Monad.Writer.Trans/index.js";
import * as Effect_Aff from "../Effect.Aff/index.js";
var MonadAff = function (MonadEffect0, liftAff) {
    this.MonadEffect0 = MonadEffect0;
    this.liftAff = liftAff;
};
var monadAffAff = new MonadAff(function () {
    return Effect_Aff.monadEffectAff;
}, Control_Category.identity(Control_Category.categoryFn));
var liftAff = function (dict) {
    return dict.liftAff;
};
var monadAffContT = function (dictMonadAff) {
    return new MonadAff(function () {
        return Control_Monad_Cont_Trans.monadEffectContT(dictMonadAff.MonadEffect0());
    }, (function () {
        var $10 = Control_Monad_Trans_Class.lift(Control_Monad_Cont_Trans.monadTransContT)((dictMonadAff.MonadEffect0()).Monad0());
        var $11 = liftAff(dictMonadAff);
        return function ($12) {
            return $10($11($12));
        };
    })());
};
var monadAffExceptT = function (dictMonadAff) {
    return new MonadAff(function () {
        return Control_Monad_Except_Trans.monadEffectExceptT(dictMonadAff.MonadEffect0());
    }, (function () {
        var $13 = Control_Monad_Trans_Class.lift(Control_Monad_Except_Trans.monadTransExceptT)((dictMonadAff.MonadEffect0()).Monad0());
        var $14 = liftAff(dictMonadAff);
        return function ($15) {
            return $13($14($15));
        };
    })());
};
var monadAffListT = function (dictMonadAff) {
    return new MonadAff(function () {
        return Control_Monad_List_Trans.monadEffectListT(dictMonadAff.MonadEffect0());
    }, (function () {
        var $16 = Control_Monad_Trans_Class.lift(Control_Monad_List_Trans.monadTransListT)((dictMonadAff.MonadEffect0()).Monad0());
        var $17 = liftAff(dictMonadAff);
        return function ($18) {
            return $16($17($18));
        };
    })());
};
var monadAffMaybe = function (dictMonadAff) {
    return new MonadAff(function () {
        return Control_Monad_Maybe_Trans.monadEffectMaybe(dictMonadAff.MonadEffect0());
    }, (function () {
        var $19 = Control_Monad_Trans_Class.lift(Control_Monad_Maybe_Trans.monadTransMaybeT)((dictMonadAff.MonadEffect0()).Monad0());
        var $20 = liftAff(dictMonadAff);
        return function ($21) {
            return $19($20($21));
        };
    })());
};
var monadAffRWS = function (dictMonadAff) {
    return function (dictMonoid) {
        return new MonadAff(function () {
            return Control_Monad_RWS_Trans.monadEffectRWS(dictMonoid)(dictMonadAff.MonadEffect0());
        }, (function () {
            var $22 = Control_Monad_Trans_Class.lift(Control_Monad_RWS_Trans.monadTransRWST(dictMonoid))((dictMonadAff.MonadEffect0()).Monad0());
            var $23 = liftAff(dictMonadAff);
            return function ($24) {
                return $22($23($24));
            };
        })());
    };
};
var monadAffReader = function (dictMonadAff) {
    return new MonadAff(function () {
        return Control_Monad_Reader_Trans.monadEffectReader(dictMonadAff.MonadEffect0());
    }, (function () {
        var $25 = Control_Monad_Trans_Class.lift(Control_Monad_Reader_Trans.monadTransReaderT)((dictMonadAff.MonadEffect0()).Monad0());
        var $26 = liftAff(dictMonadAff);
        return function ($27) {
            return $25($26($27));
        };
    })());
};
var monadAffState = function (dictMonadAff) {
    return new MonadAff(function () {
        return Control_Monad_State_Trans.monadEffectState(dictMonadAff.MonadEffect0());
    }, (function () {
        var $28 = Control_Monad_Trans_Class.lift(Control_Monad_State_Trans.monadTransStateT)((dictMonadAff.MonadEffect0()).Monad0());
        var $29 = liftAff(dictMonadAff);
        return function ($30) {
            return $28($29($30));
        };
    })());
};
var monadAffWriter = function (dictMonadAff) {
    return function (dictMonoid) {
        return new MonadAff(function () {
            return Control_Monad_Writer_Trans.monadEffectWriter(dictMonoid)(dictMonadAff.MonadEffect0());
        }, (function () {
            var $31 = Control_Monad_Trans_Class.lift(Control_Monad_Writer_Trans.monadTransWriterT(dictMonoid))((dictMonadAff.MonadEffect0()).Monad0());
            var $32 = liftAff(dictMonadAff);
            return function ($33) {
                return $31($32($33));
            };
        })());
    };
};
export {
    liftAff,
    MonadAff,
    monadAffAff,
    monadAffContT,
    monadAffExceptT,
    monadAffListT,
    monadAffMaybe,
    monadAffReader,
    monadAffRWS,
    monadAffState,
    monadAffWriter
};
