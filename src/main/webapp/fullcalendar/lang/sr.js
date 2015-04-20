(function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function (e, t) {
    var n = {words: {m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"]}, correctGrammaticalCase: function (e, t) {
            return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
        }, translate: function (e, t, r) {
            var a = n.words[r];
            return 1 === r.length ? t ? a[0] : a[1] : e + " " + n.correctGrammaticalCase(e, a)
        }};
    (t.defineLocale || t.lang).call(t, "sr", {months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"], monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."], weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "�?etvrtak", "petak", "subota"], weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "�?et.", "pet.", "sub."], weekdaysMin: ["ne", "po", "ut", "sr", "�?e", "pe", "su"], longDateFormat: {LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return"[u] [nedelju] [u] LT";
                    case 3:
                        return"[u] [sredu] [u] LT";
                    case 6:
                        return"[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return"[u] dddd [u] LT"
                }
            }, lastDay: "[ju�?e u] LT", lastWeek: function () {
                var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [�?etvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                return e[this.day()]
            }, sameElse: "L"}, relativeTime: {future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: n.translate, mm: n.translate, h: n.translate, hh: n.translate, d: "dan", dd: n.translate, M: "mesec", MM: n.translate, y: "godinu", yy: n.translate}, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: {dow: 1, doy: 7}}), e.fullCalendar.datepickerLang("sr", "sr", {closeText: "Затвори", prevText: "&#x3C;", nextText: "&#x3E;", currentText: "Дана�?", monthNames: ["Јануар", "Фебруар", "Март", "�?прил", "Мај", "Јун", "Јул", "�?вгу�?т", "Септембар", "Октобар", "�?овембар", "Децембар"], monthNamesShort: ["Јан", "Феб", "Мар", "�?пр", "Мај", "Јун", "Јул", "�?вг", "Сеп", "Окт", "�?ов", "Дец"], dayNames: ["�?едеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"], dayNamesShort: ["�?ед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"], dayNamesMin: ["�?е", "По", "Ут", "Ср", "Че", "Пе", "Су"], weekHeader: "Сед", dateFormat: "dd.mm.yy", firstDay: 1, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}), e.fullCalendar.lang("sr", {buttonText: {month: "Ме�?ец", week: "�?едеља", day: "Дан", list: "Планер"}, allDayText: "Цео дан", eventLimitText: function (e) {
            return"+ још " + e
        }})
});