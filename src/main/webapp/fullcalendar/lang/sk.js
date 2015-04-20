(function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function (e, t) {
    function n(e) {
        return e > 1 && 5 > e
    }
    function i(e, t, i, r) {
        var a = e + " ";
        switch (i) {
            case"s":
                return t || r ? "pár sekúnd" : "pár sekundami";
            case"m":
                return t ? "minúta" : r ? "minútu" : "minútou";
            case"mm":
                return t || r ? a + (n(e) ? "minúty" : "minút") : a + "minútami";
            case"h":
                return t ? "hodina" : r ? "hodinu" : "hodinou";
            case"hh":
                return t || r ? a + (n(e) ? "hodiny" : "hodín") : a + "hodinami";
            case"d":
                return t || r ? "deň" : "dňom";
            case"dd":
                return t || r ? a + (n(e) ? "dni" : "dní") : a + "dňami";
            case"M":
                return t || r ? "mesiac" : "mesiacom";
            case"MM":
                return t || r ? a + (n(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
            case"y":
                return t || r ? "rok" : "rokom";
            case"yy":
                return t || r ? a + (n(e) ? "roky" : "rokov") : a + "rokmi"
        }
    }
    var r = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
    (t.defineLocale || t.lang).call(t, "sk", {months: r, monthsShort: a, monthsParse: function (e, t) {
            var n, i = [];
            for (n = 0; 12 > n; n++)
                i[n] = RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
            return i
        }(r, a), weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), longDateFormat: {LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd D. MMMM YYYY LT"}, calendar: {sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return"[v nedeľu o] LT";
                    case 1:
                    case 2:
                        return"[v] dddd [o] LT";
                    case 3:
                        return"[v stredu o] LT";
                    case 4:
                        return"[vo štvrtok o] LT";
                    case 5:
                        return"[v piatok o] LT";
                    case 6:
                        return"[v sobotu o] LT"
                }
            }, lastDay: "[v�?era o] LT", lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return"[minulú nedeľu o] LT";
                    case 1:
                    case 2:
                        return"[minulý] dddd [o] LT";
                    case 3:
                        return"[minulú stredu o] LT";
                    case 4:
                    case 5:
                        return"[minulý] dddd [o] LT";
                    case 6:
                        return"[minulú sobotu o] LT"
                }
            }, sameElse: "L"}, relativeTime: {future: "za %s", past: "pred %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i}, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {dow: 1, doy: 4}}), e.fullCalendar.datepickerLang("sk", "sk", {closeText: "Zavrieť", prevText: "&#x3C;Predchádzajúci", nextText: "Nasledujúci&#x3E;", currentText: "Dnes", monthNames: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"], dayNames: ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"], dayNamesShort: ["Ned", "Pon", "Uto", "Str", "Štv", "Pia", "Sob"], dayNamesMin: ["Ne", "Po", "Ut", "St", "Št", "Pia", "So"], weekHeader: "Ty", dateFormat: "dd.mm.yy", firstDay: 1, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}), e.fullCalendar.lang("sk", {buttonText: {month: "Mesiac", week: "Týždeň", day: "Deň", list: "Rozvrh"}, allDayText: "Celý deň", eventLimitText: function (e) {
            return"+�?alšie: " + e
        }})
});