// Generated by purs version 0.13.6
var MonadTrans = function (lift) {
    this.lift = lift;
};
var lift = function (dict) {
    return dict.lift;
};
export {
    lift,
    MonadTrans
};
