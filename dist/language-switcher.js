System.register(['aurelia-framework', 'aurelia-i18n'], function (_export, _context) {
    "use strict";

    var inject, I18N, _dec, _class, LanguageSwitcher;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaI18n) {
            I18N = _aureliaI18n.I18N;
        }],
        execute: function () {
            _export('LanguageSwitcher', LanguageSwitcher = (_dec = inject(I18N), _dec(_class = function () {
                function LanguageSwitcher(i18n) {
                    _classCallCheck(this, LanguageSwitcher);

                    this.languages = [{ value: 'en', text: 'English (Saesneg)' }, { value: 'es', text: 'Spanish' }, { value: 'cy', text: 'Cymru (Welsh)' }, { value: 'ru', text: 'Pусский (Russian)' }, { value: 'de', text: 'Deutsche (German)' }];
                    this.selectedLanguage = 'en';

                    this.i18n = i18n;
                }

                LanguageSwitcher.prototype.switchLanguage = function switchLanguage() {
                    this.i18n.setLocale(this.selectedLanguage);
                };

                return LanguageSwitcher;
            }()) || _class));

            _export('LanguageSwitcher', LanguageSwitcher);
        }
    };
});
//# sourceMappingURL=language-switcher.js.map
