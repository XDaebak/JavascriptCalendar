(function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function (e, t) {
    function n(e, t) {
        var n = e.split("_");
        return 1 === t % 10 && 11 !== t % 100 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
    }
    function i(e, t, i) {
        var r = {mm: t ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "ча�?_ча�?а_ча�?ов", dd: "день_дн�?_дней", MM: "ме�?�?ц_ме�?�?ца_ме�?�?цев", yy: "год_года_лет"};
        return"m" === i ? t ? "минута" : "минуту" : e + " " + n(r[i], +e)
    }
    function r(e, t) {
        var n = {nominative: "�?нварь_февраль_март_апрель_май_июнь_июль_авгу�?т_�?ент�?брь_окт�?брь_но�?брь_декабрь".split("_"), accusative: "�?нвар�?_феврал�?_марта_апрел�?_ма�?_июн�?_июл�?_авгу�?та_�?ент�?бр�?_окт�?бр�?_но�?бр�?_декабр�?".split("_")}, i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
        return n[i][e.month()]
    }
    function a(e, t) {
        var n = {nominative: "�?нв_фев_март_апр_май_июнь_июль_авг_�?ен_окт_но�?_дек".split("_"), accusative: "�?нв_фев_мар_апр_ма�?_июн�?_июл�?_авг_�?ен_окт_но�?_дек".split("_")}, i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
        return n[i][e.month()]
    }
    function s(e, t) {
        var n = {nominative: "во�?кре�?енье_понедельник_вторник_�?реда_четверг_п�?тница_�?уббота".split("_"), accusative: "во�?кре�?енье_понедельник_вторник_�?реду_четверг_п�?тницу_�?убботу".split("_")}, i = /\[ ?[Вв] ?(?:прошлую|�?ледующую|�?ту)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
        return n[i][e.day()]
    }
    (t.defineLocale || t.lang).call(t, "ru", {months: r, monthsShort: a, weekdays: s, weekdaysShort: "в�?_пн_вт_�?р_чт_пт_�?б".split("_"), weekdaysMin: "в�?_пн_вт_�?р_чт_пт_�?б".split("_"), monthsParse: [/^�?нв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|�?]/i, /^июн/i, /^июл/i, /^авг/i, /^�?ен/i, /^окт/i, /^но�?/i, /^дек/i], longDateFormat: {LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., LT", LLLL: "dddd, D MMMM YYYY г., LT"}, calendar: {sameDay: "[Сегодн�? в] LT", nextDay: "[Завтра в] LT", lastDay: "[Вчера в] LT", nextWeek: function () {
                return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
            }, lastWeek: function (e) {
                if (e.week() === this.week())
                    return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                    case 0:
                        return"[В прошлое] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return"[В прошлый] dddd [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return"[В прошлую] dddd [в] LT"
                }
            }, sameElse: "L"}, relativeTime: {future: "через %s", past: "%s назад", s: "не�?колько �?екунд", m: i, mm: i, h: "ча�?", hh: i, d: "день", dd: i, M: "ме�?�?ц", MM: i, y: "год", yy: i}, meridiemParse: /ночи|утра|дн�?|вечера/i, isPM: function (e) {
            return/^(дн�?|вечера)$/.test(e)
        }, meridiem: function (e) {
            return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дн�?" : "вечера"
        }, ordinalParse: /\d{1,2}-(й|го|�?)/, ordinal: function (e, t) {
            switch (t) {
                case"M":
                case"d":
                case"DDD":
                    return e + "-й";
                case"D":
                    return e + "-го";
                case"w":
                case"W":
                    return e + "-�?";
                default:
                    return e
            }
        }, week: {dow: 1, doy: 7}}), e.fullCalendar.datepickerLang("ru", "ru", {closeText: "Закрыть", prevText: "&#x3C;Пред", nextText: "След&#x3E;", currentText: "Сегодн�?", monthNames: ["Январь", "Февраль", "Март", "�?прель", "Май", "Июнь", "Июль", "�?вгу�?т", "Сент�?брь", "Окт�?брь", "�?о�?брь", "Декабрь"], monthNamesShort: ["Янв", "Фев", "Мар", "�?пр", "Май", "Июн", "Июл", "�?вг", "Сен", "Окт", "�?о�?", "Дек"], dayNames: ["во�?кре�?енье", "понедельник", "вторник", "�?реда", "четверг", "п�?тница", "�?уббота"], dayNamesShort: ["в�?к", "пнд", "втр", "�?рд", "чтв", "птн", "�?бт"], dayNamesMin: ["В�?", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], weekHeader: "�?ед", dateFormat: "dd.mm.yy", firstDay: 1, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}), e.fullCalendar.lang("ru", {buttonText: {month: "Ме�?�?ц", week: "�?едел�?", day: "День", list: "Пове�?тка дн�?"}, allDayText: "Ве�?ь день", eventLimitText: function (e) {
            return"+ ещё " + e
        }})
});