(function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function (e, t) {
    (t.defineLocale || t.lang).call(t, "he", {months: "ינו�?ר_פברו�?ר_מרץ_�?פריל_מ�?י_יוני_יולי_�?וגוסט_ספטמבר_�?וקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_�?פר׳_מ�?י_יוני_יולי_�?וג׳_ספט׳_�?וק׳_נוב׳_דצמ׳".split("_"), weekdays: "ר�?שון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "�?׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "�?_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: {LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY LT", LLLL: "dddd, D [ב]MMMM YYYY LT", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY LT", llll: "ddd, D MMM YYYY LT"}, calendar: {sameDay: "[היו�? ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[�?תמול ב־]LT", lastWeek: "[ביו�?] dddd [ה�?חרון בשעה] LT", sameElse: "L"}, relativeTime: {future: "בעוד %s", past: "לפני %s", s: "מספר שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function (e) {
                return 2 === e ? "שעתיי�?" : e + " שעות"
            }, d: "יו�?", dd: function (e) {
                return 2 === e ? "יומיי�?" : e + " ימי�?"
            }, M: "חודש", MM: function (e) {
                return 2 === e ? "חודשיי�?" : e + " חודשי�?"
            }, y: "שנה", yy: function (e) {
                return 2 === e ? "שנתיי�?" : 0 === e % 10 && 10 !== e ? e + " שנה" : e + " שני�?"
            }}}), e.fullCalendar.datepickerLang("he", "he", {closeText: "סגור", prevText: "&#x3C;הקוד�?", nextText: "הב�?&#x3E;", currentText: "היו�?", monthNames: ["ינו�?ר", "פברו�?ר", "מרץ", "�?פריל", "מ�?י", "יוני", "יולי", "�?וגוסט", "ספטמבר", "�?וקטובר", "נובמבר", "דצמבר"], monthNamesShort: ["ינו", "פבר", "מרץ", "�?פר", "מ�?י", "יוני", "יולי", "�?וג", "ספט", "�?וק", "נוב", "דצמ"], dayNames: ["ר�?שון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"], dayNamesShort: ["�?'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"], dayNamesMin: ["�?'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"], weekHeader: "Wk", dateFormat: "dd/mm/yy", firstDay: 0, isRTL: !0, showMonthAfterYear: !1, yearSuffix: ""}), e.fullCalendar.lang("he", {defaultButtonText: {month: "חודש", week: "שבוע", day: "יו�?", list: "סדר יו�?"}, weekNumberTitle: "שבוע", allDayText: "כל היו�?", eventLimitText: "�?חר"})
});