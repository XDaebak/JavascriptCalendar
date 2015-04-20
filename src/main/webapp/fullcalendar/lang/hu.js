(function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function (e, t) {
    function n(e, t, n, i) {
        var r = e;
        switch (n) {
            case"s":
                return i || t ? "néhány másodperc" : "néhány másodperce";
            case"m":
                return"egy" + (i || t ? " perc" : " perce");
            case"mm":
                return r + (i || t ? " perc" : " perce");
            case"h":
                return"egy" + (i || t ? " óra" : " órája");
            case"hh":
                return r + (i || t ? " óra" : " órája");
            case"d":
                return"egy" + (i || t ? " nap" : " napja");
            case"dd":
                return r + (i || t ? " nap" : " napja");
            case"M":
                return"egy" + (i || t ? " hónap" : " hónapja");
            case"MM":
                return r + (i || t ? " hónap" : " hónapja");
            case"y":
                return"egy" + (i || t ? " év" : " éve");
            case"yy":
                return r + (i || t ? " év" : " éve")
        }
        return""
    }
    function i(e) {
        return(e ? "" : "[múlt] ") + "[" + r[this.day()] + "] LT[-kor]"
    }
    var r = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
    (t.defineLocale || t.lang).call(t, "hu", {months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: {LT: "H:mm", LTS: "LT:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D., LT", LLLL: "YYYY. MMMM D., dddd LT"}, meridiemParse: /de|du/i, isPM: function (e) {
            return"u" === e.charAt(1).toLowerCase()
        }, meridiem: function (e, t, n) {
            return 12 > e ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
        }, calendar: {sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                return i.call(this, !0)
            }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
                return i.call(this, !1)
            }, sameElse: "L"}, relativeTime: {future: "%s múlva", past: "%s", s: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n}, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {dow: 1, doy: 7}}), e.fullCalendar.datepickerLang("hu", "hu", {closeText: "bezár", prevText: "vissza", nextText: "előre", currentText: "ma", monthNames: ["Január", "Február", "Március", "�?prilis", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"], monthNamesShort: ["Jan", "Feb", "Már", "�?pr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"], dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"], dayNamesShort: ["Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo"], dayNamesMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], weekHeader: "Hét", dateFormat: "yy.mm.dd.", firstDay: 1, isRTL: !1, showMonthAfterYear: !0, yearSuffix: ""}), e.fullCalendar.lang("hu", {buttonText: {month: "Hónap", week: "Hét", day: "Nap", list: "Napló"}, allDayText: "Egész nap", eventLimitText: "további"})
});