(function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function (e, t) {
    function n(e, t) {
        var n = e.split("_");
        return 1 === t % 10 && 11 !== t % 100 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
    }
    function a(e, t, a) {
        var r = {mm: "хвилина_хвилини_хвилин", hh: "година_години_годин", dd: "день_дні_днів", MM: "мі�?�?ць_мі�?�?ці_мі�?�?ців", yy: "рік_роки_років"};
        return"m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + n(r[a], +e)
    }
    function r(e, t) {
        var n = {nominative: "�?ічень_лютий_березень_квітень_травень_червень_липень_�?ерпень_вере�?ень_жовтень_ли�?топад_грудень".split("_"), accusative: "�?ічн�?_лютого_березн�?_квітн�?_травн�?_червн�?_липн�?_�?ерпн�?_вере�?н�?_жовтн�?_ли�?топада_грудн�?".split("_")}, a = /D[oD]? *MMMM?/.test(t) ? "accusative" : "nominative";
        return n[a][e.month()]
    }
    function i(e, t) {
        var n = {nominative: "неділ�?_понеділок_вівторок_�?ереда_четвер_п’�?тниц�?_�?убота".split("_"), accusative: "неділю_понеділок_вівторок_�?ереду_четвер_п’�?тницю_�?уботу".split("_"), genitive: "неділі_понеділка_вівторка_�?ереди_четверга_п’�?тниці_�?уботи".split("_")}, a = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|на�?тупної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
        return n[a][e.day()]
    }
    function s(e) {
        return function () {
            return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
        }
    }
    (t.defineLocale || t.lang).call(t, "uk", {months: r, monthsShort: "�?іч_лют_бер_квіт_трав_черв_лип_�?ерп_вер_жовт_ли�?т_груд".split("_"), weekdays: i, weekdaysShort: "нд_пн_вт_�?р_чт_пт_�?б".split("_"), weekdaysMin: "нд_пн_вт_�?р_чт_пт_�?б".split("_"), longDateFormat: {LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., LT", LLLL: "dddd, D MMMM YYYY р., LT"}, calendar: {sameDay: s("[Сьогодні "), nextDay: s("[Завтра "), lastDay: s("[Вчора "), nextWeek: s("[У] dddd ["), lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return s("[Минулої] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return s("[Минулого] dddd [").call(this)
                }
            }, sameElse: "L"}, relativeTime: {future: "за %s", past: "%s тому", s: "декілька �?екунд", m: a, mm: a, h: "годину", hh: a, d: "день", dd: a, M: "мі�?�?ць", MM: a, y: "рік", yy: a}, meridiemParse: /ночі|ранку|дн�?|вечора/, isPM: function (e) {
            return/^(дн�?|вечора)$/.test(e)
        }, meridiem: function (e) {
            return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дн�?" : "вечора"
        }, ordinalParse: /\d{1,2}-(й|го)/, ordinal: function (e, t) {
            switch (t) {
                case"M":
                case"d":
                case"DDD":
                case"w":
                case"W":
                    return e + "-й";
                case"D":
                    return e + "-го";
                default:
                    return e
            }
        }, week: {dow: 1, doy: 7}}), e.fullCalendar.datepickerLang("uk", "uk", {closeText: "Закрити", prevText: "&#x3C;", nextText: "&#x3E;", currentText: "Сьогодні", monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вере�?ень", "Жовтень", "Ли�?топад", "Грудень"], monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Ли�?", "Гру"], dayNames: ["неділ�?", "понеділок", "вівторок", "�?ереда", "четвер", "п’�?тниц�?", "�?убота"], dayNamesShort: ["нед", "пнд", "вів", "�?рд", "чтв", "птн", "�?бт"], dayNamesMin: ["�?д", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], weekHeader: "Тиж", dateFormat: "dd.mm.yy", firstDay: 1, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}), e.fullCalendar.lang("uk", {buttonText: {month: "Мі�?�?ць", week: "Тиждень", day: "День", list: "Пор�?док денний"}, allDayText: "Уве�?ь день", eventLimitText: function (e) {
            return"+ще " + e + "..."
        }})
});