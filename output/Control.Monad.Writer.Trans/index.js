// Generated by purs version 0.13.6
import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Alternative from "../Control.Alternative/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad from "../Control.Monad/index.js";
import * as Control_Monad_Cont_Class from "../Control.Monad.Cont.Class/index.js";
import * as Control_Monad_Error_Class from "../Control.Monad.Error.Class/index.js";
import * as Control_Monad_Reader_Class from "../Control.Monad.Reader.Class/index.js";
import * as Control_Monad_Rec_Class from "../Control.Monad.Rec.Class/index.js";
import * as Control_Monad_State_Class from "../Control.Monad.State.Class/index.js";
import * as Control_Monad_Trans_Class from "../Control.Monad.Trans.Class/index.js";
import * as Control_Monad_Writer_Class from "../Control.Monad.Writer.Class/index.js";
import * as Control_MonadPlus from "../Control.MonadPlus/index.js";
import * as Control_MonadZero from "../Control.MonadZero/index.js";
import * as Control_Plus from "../Control.Plus/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect_Class from "../Effect.Class/index.js";
var WriterT = function (x) {
    return x;
};
var runWriterT = function (v) {
    return v;
};
var newtypeWriterT = new Data_Newtype.Newtype(function (n) {
    return n;
}, WriterT);
var monadTransWriterT = function (dictMonoid) {
    return new Control_Monad_Trans_Class.MonadTrans(function (dictMonad) {
        return function (m) {
            return Control_Bind.bind(dictMonad.Bind1())(m)(function (a) {
                return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Tuple.Tuple(a, Data_Monoid.mempty(dictMonoid)));
            });
        };
    });
};
var mapWriterT = function (f) {
    return function (v) {
        return f(v);
    };
};
var functorWriterT = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        return mapWriterT(Data_Functor.map(dictFunctor)(function (v) {
            return new Data_Tuple.Tuple(f(v.value0), v.value1);
        }));
    });
};
var execWriterT = function (dictFunctor) {
    return function (v) {
        return Data_Functor.map(dictFunctor)(Data_Tuple.snd)(v);
    };
};
var applyWriterT = function (dictSemigroup) {
    return function (dictApply) {
        return new Control_Apply.Apply(function () {
            return functorWriterT(dictApply.Functor0());
        }, function (v) {
            return function (v1) {
                var k = function (v3) {
                    return function (v4) {
                        return new Data_Tuple.Tuple(v3.value0(v4.value0), Data_Semigroup.append(dictSemigroup)(v3.value1)(v4.value1));
                    };
                };
                return Control_Apply.apply(dictApply)(Data_Functor.map(dictApply.Functor0())(k)(v))(v1);
            };
        });
    };
};
var bindWriterT = function (dictSemigroup) {
    return function (dictBind) {
        return new Control_Bind.Bind(function () {
            return applyWriterT(dictSemigroup)(dictBind.Apply0());
        }, function (v) {
            return function (k) {
                return WriterT(Control_Bind.bind(dictBind)(v)(function (v1) {
                    var v2 = k(v1.value0);
                    return Data_Functor.map((dictBind.Apply0()).Functor0())(function (v3) {
                        return new Data_Tuple.Tuple(v3.value0, Data_Semigroup.append(dictSemigroup)(v1.value1)(v3.value1));
                    })(v2);
                }));
            };
        });
    };
};
var applicativeWriterT = function (dictMonoid) {
    return function (dictApplicative) {
        return new Control_Applicative.Applicative(function () {
            return applyWriterT(dictMonoid.Semigroup0())(dictApplicative.Apply0());
        }, function (a) {
            return WriterT(Control_Applicative.pure(dictApplicative)(new Data_Tuple.Tuple(a, Data_Monoid.mempty(dictMonoid))));
        });
    };
};
var monadWriterT = function (dictMonoid) {
    return function (dictMonad) {
        return new Control_Monad.Monad(function () {
            return applicativeWriterT(dictMonoid)(dictMonad.Applicative0());
        }, function () {
            return bindWriterT(dictMonoid.Semigroup0())(dictMonad.Bind1());
        });
    };
};
var monadAskWriterT = function (dictMonoid) {
    return function (dictMonadAsk) {
        return new Control_Monad_Reader_Class.MonadAsk(function () {
            return monadWriterT(dictMonoid)(dictMonadAsk.Monad0());
        }, Control_Monad_Trans_Class.lift(monadTransWriterT(dictMonoid))(dictMonadAsk.Monad0())(Control_Monad_Reader_Class.ask(dictMonadAsk)));
    };
};
var monadReaderWriterT = function (dictMonoid) {
    return function (dictMonadReader) {
        return new Control_Monad_Reader_Class.MonadReader(function () {
            return monadAskWriterT(dictMonoid)(dictMonadReader.MonadAsk0());
        }, function (f) {
            return mapWriterT(Control_Monad_Reader_Class.local(dictMonadReader)(f));
        });
    };
};
var monadContWriterT = function (dictMonoid) {
    return function (dictMonadCont) {
        return new Control_Monad_Cont_Class.MonadCont(function () {
            return monadWriterT(dictMonoid)(dictMonadCont.Monad0());
        }, function (f) {
            return WriterT(Control_Monad_Cont_Class.callCC(dictMonadCont)(function (c) {
                var v = f(function (a) {
                    return WriterT(c(new Data_Tuple.Tuple(a, Data_Monoid.mempty(dictMonoid))));
                });
                return v;
            }));
        });
    };
};
var monadEffectWriter = function (dictMonoid) {
    return function (dictMonadEffect) {
        return new Effect_Class.MonadEffect(function () {
            return monadWriterT(dictMonoid)(dictMonadEffect.Monad0());
        }, (function () {
            var $121 = Control_Monad_Trans_Class.lift(monadTransWriterT(dictMonoid))(dictMonadEffect.Monad0());
            var $122 = Effect_Class.liftEffect(dictMonadEffect);
            return function ($123) {
                return $121($122($123));
            };
        })());
    };
};
var monadRecWriterT = function (dictMonoid) {
    return function (dictMonadRec) {
        return new Control_Monad_Rec_Class.MonadRec(function () {
            return monadWriterT(dictMonoid)(dictMonadRec.Monad0());
        }, function (f) {
            return function (a) {
                var f$prime = function (v) {
                    var v1 = f(v.value0);
                    return Control_Bind.bind((dictMonadRec.Monad0()).Bind1())(v1)(function (v2) {
                        return Control_Applicative.pure((dictMonadRec.Monad0()).Applicative0())((function () {
                            if (v2.value0 instanceof Control_Monad_Rec_Class.Loop) {
                                return new Control_Monad_Rec_Class.Loop(new Data_Tuple.Tuple(v2.value0.value0, Data_Semigroup.append(dictMonoid.Semigroup0())(v.value1)(v2.value1)));
                            };
                            if (v2.value0 instanceof Control_Monad_Rec_Class.Done) {
                                return new Control_Monad_Rec_Class.Done(new Data_Tuple.Tuple(v2.value0.value0, Data_Semigroup.append(dictMonoid.Semigroup0())(v.value1)(v2.value1)));
                            };
                            throw new Error("Failed pattern match at Control.Monad.Writer.Trans (line 83, column 16 - line 85, column 47): " + [ v2.value0.constructor.name ]);
                        })());
                    });
                };
                return WriterT(Control_Monad_Rec_Class.tailRecM(dictMonadRec)(f$prime)(new Data_Tuple.Tuple(a, Data_Monoid.mempty(dictMonoid))));
            };
        });
    };
};
var monadStateWriterT = function (dictMonoid) {
    return function (dictMonadState) {
        return new Control_Monad_State_Class.MonadState(function () {
            return monadWriterT(dictMonoid)(dictMonadState.Monad0());
        }, function (f) {
            return Control_Monad_Trans_Class.lift(monadTransWriterT(dictMonoid))(dictMonadState.Monad0())(Control_Monad_State_Class.state(dictMonadState)(f));
        });
    };
};
var monadTellWriterT = function (dictMonoid) {
    return function (dictMonad) {
        return new Control_Monad_Writer_Class.MonadTell(function () {
            return monadWriterT(dictMonoid)(dictMonad);
        }, (function () {
            var $124 = Control_Applicative.pure(dictMonad.Applicative0());
            var $125 = Data_Tuple.Tuple.create(Data_Unit.unit);
            return function ($126) {
                return WriterT($124($125($126)));
            };
        })());
    };
};
var monadWriterWriterT = function (dictMonoid) {
    return function (dictMonad) {
        return new Control_Monad_Writer_Class.MonadWriter(function () {
            return monadTellWriterT(dictMonoid)(dictMonad);
        }, function (v) {
            return Control_Bind.bind(dictMonad.Bind1())(v)(function (v1) {
                return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Tuple.Tuple(new Data_Tuple.Tuple(v1.value0, v1.value1), v1.value1));
            });
        }, function (v) {
            return Control_Bind.bind(dictMonad.Bind1())(v)(function (v1) {
                return Control_Applicative.pure(dictMonad.Applicative0())(new Data_Tuple.Tuple(v1.value0.value0, v1.value0.value1(v1.value1)));
            });
        });
    };
};
var monadThrowWriterT = function (dictMonoid) {
    return function (dictMonadThrow) {
        return new Control_Monad_Error_Class.MonadThrow(function () {
            return monadWriterT(dictMonoid)(dictMonadThrow.Monad0());
        }, function (e) {
            return Control_Monad_Trans_Class.lift(monadTransWriterT(dictMonoid))(dictMonadThrow.Monad0())(Control_Monad_Error_Class.throwError(dictMonadThrow)(e));
        });
    };
};
var monadErrorWriterT = function (dictMonoid) {
    return function (dictMonadError) {
        return new Control_Monad_Error_Class.MonadError(function () {
            return monadThrowWriterT(dictMonoid)(dictMonadError.MonadThrow0());
        }, function (v) {
            return function (h) {
                return WriterT(Control_Monad_Error_Class.catchError(dictMonadError)(v)(function (e) {
                    var v1 = h(e);
                    return v1;
                }));
            };
        });
    };
};
var altWriterT = function (dictAlt) {
    return new Control_Alt.Alt(function () {
        return functorWriterT(dictAlt.Functor0());
    }, function (v) {
        return function (v1) {
            return Control_Alt.alt(dictAlt)(v)(v1);
        };
    });
};
var plusWriterT = function (dictPlus) {
    return new Control_Plus.Plus(function () {
        return altWriterT(dictPlus.Alt0());
    }, Control_Plus.empty(dictPlus));
};
var alternativeWriterT = function (dictMonoid) {
    return function (dictAlternative) {
        return new Control_Alternative.Alternative(function () {
            return applicativeWriterT(dictMonoid)(dictAlternative.Applicative0());
        }, function () {
            return plusWriterT(dictAlternative.Plus1());
        });
    };
};
var monadZeroWriterT = function (dictMonoid) {
    return function (dictMonadZero) {
        return new Control_MonadZero.MonadZero(function () {
            return alternativeWriterT(dictMonoid)(dictMonadZero.Alternative1());
        }, function () {
            return monadWriterT(dictMonoid)(dictMonadZero.Monad0());
        });
    };
};
var monadPlusWriterT = function (dictMonoid) {
    return function (dictMonadPlus) {
        return new Control_MonadPlus.MonadPlus(function () {
            return monadZeroWriterT(dictMonoid)(dictMonadPlus.MonadZero0());
        });
    };
};
export {
    WriterT,
    runWriterT,
    execWriterT,
    mapWriterT,
    newtypeWriterT,
    functorWriterT,
    applyWriterT,
    applicativeWriterT,
    altWriterT,
    plusWriterT,
    alternativeWriterT,
    bindWriterT,
    monadWriterT,
    monadRecWriterT,
    monadZeroWriterT,
    monadPlusWriterT,
    monadTransWriterT,
    monadEffectWriter,
    monadContWriterT,
    monadThrowWriterT,
    monadErrorWriterT,
    monadAskWriterT,
    monadReaderWriterT,
    monadStateWriterT,
    monadTellWriterT,
    monadWriterWriterT
};
