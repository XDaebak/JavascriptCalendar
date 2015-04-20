(function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function (e, t) {
    var n = {words: {m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један �?ат", "једног �?ата"], hh: ["�?ат", "�?ата", "�?ати"], dd: ["дан", "дана", "дана"], MM: ["ме�?ец", "ме�?еца", "ме�?еци"], yy: ["година", "године", "година"]}, correctGrammaticalCase: function (e, t) {
            return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
        }, translate: function (e, t, r) {
            var i = n.words[r];
            return 1 === r.length ? t ? i[0] : i[1] : e + " " + n.correctGrammaticalCase(e, i)
        }};
    (t.defineLocale || t.lang).call(t, "sr-cyrl", {months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "авгу�?т", "�?ептембар", "октобар", "новембар", "децембар"], monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "�?еп.", "окт.", "нов.", "дец."], weekdays: ["недеља", "понедељак", "уторак", "�?реда", "четвртак", "петак", "�?убота"], weekdaysShort: ["нед.", "пон.", "уто.", "�?ре.", "чет.", "пет.", "�?уб."], weekdaysMin: ["не", "по", "ут", "�?р", "че", "пе", "�?у"], longDateFormat: {LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[дана�? у] LT", nextDay: "[�?утра у] LT", nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return"[у] [недељу] [у] LT";
                    case 3:
                        return"[у] [�?реду] [у] LT";
                    case 6:
                        return"[у] [�?уботу] [у] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return"[у] dddd [у] LT"
                }
            }, lastDay: "[јуче у] LT", lastWeek: function () {
                var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [�?реде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [�?уботе] [у] LT"];
                return e[this.day()]
            }, sameElse: "L"}, relativeTime: {future: "за %s", past: "пре %s", s: "неколико �?екунди", m: n.translate, mm: n.translate, h: n.translate, hh: n.translate, d: "дан", dd: n.translate, M: "ме�?ец", MM: n.translate, y: "годину", yy: n.translate}, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {dow: 1, doy: 7}}), e.fullCalendar.datepickerLang("sr-cyrl", "sr", {closeText: "Затвори", prevText: "&#x3C;", nextText: "&#x3E;", currentText: "Дана�?", monthNames: ["Јануар", "Фебруар", "Март", "�?прил", "Мај", "Јун", "Јул", "�?вгу�?т", "Септембар", "Октобар", "�?овембар", "Децембар"], monthNamesShort: ["Јан", "Феб", "Мар", "�?пр", "Мај", "Јун", "Јул", "�?вг", "Сеп", "Окт", "�?ов", "Дец"], dayNames: ["�?едеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"], dayNamesShort: ["�?ед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"], dayNamesMin: ["�?е", "По", "Ут", "Ср", "Че", "Пе", "Су"], weekHeader: "Сед", dateFormat: "dd.mm.yy", firstDay: 1, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}), e.fullCalendar.lang("sr-cyrl", {buttonText: {month: "Ме�?ец", week: "�?едеља", day: "Дан", list: "Планер"}, allDayText: "Цео дан", eventLimitText: function (e) {
            return"+ још " + e
        }})
});