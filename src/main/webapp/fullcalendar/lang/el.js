(function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], t) : t(jQuery, moment)
})(function (t, e) {
    (e.defineLocale || e.lang).call(e, "el", {monthsNominativeEl: "Ιανουά�?ιος_Φεβ�?ουά�?ιος_Μά�?τιος_Απ�?ίλιος_Μάιος_Ιο�?νιος_Ιο�?λιος_Α�?γουστος_Σεπτέμβ�?ιος_Οκτώβ�?ιος_�?οέμβ�?ιος_Δεκέμβ�?ιος".split("_"), monthsGenitiveEl: "Ιανουα�?ίου_Φεβ�?ουα�?ίου_Μα�?τίου_Απ�?ιλίου_Μα�?ου_Ιουνίου_Ιουλίου_Αυγο�?στου_Σεπτεμβ�?ίου_Οκτωβ�?ίου_�?οεμβ�?ίου_Δεκεμβ�?ίου".split("_"), months: function (t, e) {
            return/D/.test(e.substring(0, e.indexOf("MMMM"))) ? this._monthsGenitiveEl[t.month()] : this._monthsNominativeEl[t.month()]
        }, monthsShort: "Ιαν_Φεβ_Μα�?_Απ�?_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_�?οε_Δεκ".split("_"), weekdays: "Κυ�?ιακή_Δευτέ�?α_Τ�?ίτη_Τετά�?τη_Πέμπτη_Πα�?ασκευή_Σάββατο".split("_"), weekdaysShort: "Κυ�?_Δευ_Τ�?ι_Τετ_Πεμ_Πα�?_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τ�?_Τε_Πε_Πα_Σα".split("_"), meridiem: function (t, e, n) {
            return t > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
        }, isPM: function (t) {
            return"μ" === (t + "").toLowerCase()[0]
        }, meridiemParse: /[ΠΜ]\.?Μ?\.?/i, longDateFormat: {LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendarEl: {sameDay: "[Σήμε�?α {}] LT", nextDay: "[Α�?�?ιο {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Χθες {}] LT", lastWeek: function () {
                switch (this.day()) {
                    case 6:
                        return"[το π�?οηγο�?μενο] dddd [{}] LT";
                    default:
                        return"[την π�?οηγο�?μενη] dddd [{}] LT"
                }
            }, sameElse: "L"}, calendar: function (t, e) {
            var n = this._calendarEl[t], i = e && e.hours();
            return"function" == typeof n && (n = n.apply(e)), n.replace("{}", 1 === i % 12 ? "στη" : "στις")
        }, relativeTime: {future: "σε %s", past: "%s π�?ιν", s: "λίγα δευτε�?όλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώ�?α", hh: "%d ώ�?ες", d: "μία μέ�?α", dd: "%d μέ�?ες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χ�?όνος", yy: "%d χ�?όνια"}, ordinalParse: /\d{1,2}η/, ordinal: "%dη", week: {dow: 1, doy: 4}}), t.fullCalendar.datepickerLang("el", "el", {closeText: "Κλείσιμο", prevText: "Π�?οηγο�?μενος", nextText: "Επόμενος", currentText: "Σήμε�?α", monthNames: ["Ιανουά�?ιος", "Φεβ�?ουά�?ιος", "Μά�?τιος", "Απ�?ίλιος", "Μάιος", "Ιο�?νιος", "Ιο�?λιος", "Α�?γουστος", "Σεπτέμβ�?ιος", "Οκτώβ�?ιος", "�?οέμβ�?ιος", "Δεκέμβ�?ιος"], monthNamesShort: ["Ιαν", "Φεβ", "Μα�?", "Απ�?", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "�?οε", "Δεκ"], dayNames: ["Κυ�?ιακή", "Δευτέ�?α", "Τ�?ίτη", "Τετά�?τη", "Πέμπτη", "Πα�?ασκευή", "Σάββατο"], dayNamesShort: ["Κυ�?", "Δευ", "Τ�?ι", "Τετ", "Πεμ", "Πα�?", "Σαβ"], dayNamesMin: ["Κυ", "Δε", "Τ�?", "Τε", "Πε", "Πα", "Σα"], weekHeader: "Εβδ", dateFormat: "dd/mm/yy", firstDay: 1, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}), t.fullCalendar.lang("el", {buttonText: {month: "Μήνας", week: "Εβδομάδα", day: "Ημέ�?α", list: "Ατζέντα"}, allDayText: "Ολοήμε�?ο", eventLimitText: "πε�?ισσότε�?α"})
});