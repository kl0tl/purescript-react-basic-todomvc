// Generated by purs version 0.13.6
import * as $foreign from "./foreign.js";
import * as Data_DateTime from "../Data.DateTime/index.js";
import * as Data_DateTime_Instant from "../Data.DateTime.Instant/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Effect from "../Effect/index.js";
var nowTime = Data_Functor.map(Effect.functorEffect)(function ($0) {
    return Data_DateTime.time(Data_DateTime_Instant.toDateTime($0));
})($foreign.now);
var nowDateTime = Data_Functor.map(Effect.functorEffect)(Data_DateTime_Instant.toDateTime)($foreign.now);
var nowDate = Data_Functor.map(Effect.functorEffect)(function ($1) {
    return Data_DateTime.date(Data_DateTime_Instant.toDateTime($1));
})($foreign.now);
export {
    now
} from "./foreign.js";
export {
    nowDateTime,
    nowDate,
    nowTime
};
