(function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function (e, t) {
    function n(e) {
        return 11 === e % 100 ? !0 : 1 === e % 10 ? !1 : !0
    }
    function r(e, t, r, i) {
        var s = e + " ";
        switch (r) {
            case"s":
                return t || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case"m":
                return t ? "mínúta" : "mínútu";
            case"mm":
                return n(e) ? s + (t || i ? "mínútur" : "mínútum") : t ? s + "mínúta" : s + "mínútu";
            case"hh":
                return n(e) ? s + (t || i ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
            case"d":
                return t ? "dagur" : i ? "dag" : "degi";
            case"dd":
                return n(e) ? t ? s + "dagar" : s + (i ? "daga" : "dögum") : t ? s + "dagur" : s + (i ? "dag" : "degi");
            case"M":
                return t ? "mánuður" : i ? "mánuð" : "mánuði";
            case"MM":
                return n(e) ? t ? s + "mánuðir" : s + (i ? "mánuði" : "mánuðum") : t ? s + "mánuður" : s + (i ? "mánuð" : "mánuði");
            case"y":
                return t || i ? "ár" : "ári";
            case"yy":
                return n(e) ? s + (t || i ? "ár" : "árum") : s + (t || i ? "ár" : "ári")
        }
    }
    (t.defineLocale || t.lang).call(t, "is", {months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: {LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] LT", LLLL: "dddd, D. MMMM YYYY [kl.] LT"}, calendar: {sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L"}, relativeTime: {future: "eftir %s", past: "fyrir %s síðan", s: r, m: r, mm: r, h: "klukkustund", hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r}, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {dow: 1, doy: 4}}), e.fullCalendar.datepickerLang("is", "is", {closeText: "Loka", prevText: "&#x3C; Fyrri", nextText: "Næsti &#x3E;", currentText: "�? dag", monthNames: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "�?gúst", "September", "Október", "Nóvember", "Desember"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "�?gú", "Sep", "Okt", "Nóv", "Des"], dayNames: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"], dayNamesShort: ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau"], dayNamesMin: ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"], weekHeader: "Vika", dateFormat: "dd.mm.yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}), e.fullCalendar.lang("is", {buttonText: {month: "Mánuður", week: "Vika", day: "Dagur", list: "Dagskrá"}, allDayHtml: "Allan<br/>daginn", eventLimitText: "meira"})
});