(function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], t) : t(jQuery, moment)
})(function (t, e) {
    (e.defineLocale || e.lang).call(e, "bg", {months: "�?нуари_февруари_март_април_май_юни_юли_авгу�?т_�?ептември_октомври_ноември_декември".split("_"), monthsShort: "�?нр_фев_мар_апр_май_юни_юли_авг_�?еп_окт_ное_дек".split("_"), weekdays: "недел�?_понеделник_вторник_�?р�?да_четвъртък_петък_�?ъбота".split("_"), weekdaysShort: "нед_пон_вто_�?р�?_чет_пет_�?ъб".split("_"), weekdaysMin: "нд_пн_вт_�?р_чт_пт_�?б".split("_"), longDateFormat: {LT: "H:mm", LTS: "LT:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Дне�? в] LT", nextDay: "[Утре в] LT", nextWeek: "dddd [в] LT", lastDay: "[Вчера в] LT", lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return"[В изминалата] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return"[В изминали�?] dddd [в] LT"
                }
            }, sameElse: "L"}, relativeTime: {future: "�?лед %s", past: "преди %s", s: "н�?колко �?екунди", m: "минута", mm: "%d минути", h: "ча�?", hh: "%d ча�?а", d: "ден", dd: "%d дни", M: "ме�?ец", MM: "%d ме�?еца", y: "година", yy: "%d години"}, ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function (t) {
            var e = t % 10, n = t % 100;
            return 0 === t ? t + "-ев" : 0 === n ? t + "-ен" : n > 10 && 20 > n ? t + "-ти" : 1 === e ? t + "-ви" : 2 === e ? t + "-ри" : 7 === e || 8 === e ? t + "-ми" : t + "-ти"
        }, week: {dow: 1, doy: 7}}), t.fullCalendar.datepickerLang("bg", "bg", {closeText: "затвори", prevText: "&#x3C;назад", nextText: "напред&#x3E;", nextBigText: "&#x3E;&#x3E;", currentText: "дне�?", monthNames: ["Януари", "Февруари", "Март", "�?прил", "Май", "Юни", "Юли", "�?вгу�?т", "Септември", "Октомври", "�?оември", "Декември"], monthNamesShort: ["Яну", "Фев", "Мар", "�?пр", "Май", "Юни", "Юли", "�?вг", "Сеп", "Окт", "�?ов", "Дек"], dayNames: ["�?едел�?", "Понеделник", "Вторник", "Ср�?да", "Четвъртък", "Петък", "Събота"], dayNamesShort: ["�?ед", "Пон", "Вто", "Ср�?", "Чет", "Пет", "Съб"], dayNamesMin: ["�?е", "По", "Вт", "Ср", "Че", "Пе", "Съ"], weekHeader: "Wk", dateFormat: "dd.mm.yy", firstDay: 1, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}), t.fullCalendar.lang("bg", {buttonText: {month: "Ме�?ец", week: "Седмица", day: "Ден", list: "График"}, allDayText: "Ц�?л ден", eventLimitText: function (t) {
            return"+още " + t
        }})
});