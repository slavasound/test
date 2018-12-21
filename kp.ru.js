(function()  {
        selectiveCookies('bltsr|cmtchd|crookie|kpunk');
        // set no-branding body style and adjust other blocks on the page
        let style = [
            '.app__header.app__header_margin-bottom_brand, #top { margin-bottom: 20px !important }',
            '.app__branding { display: none !important}'
        ];
        if (location.hostname === 'www.kinopoisk.ru' && !location.pathname.startsWith('/games/'))
            style.push('html:not(#id), body:not(#id), .app-container { background: #d5d5d5 url(/images/noBrandBg.jpg) 50% 0 no-repeat !important }');
        createStyle(style);
        // catch branding and other things
        let _KP = void 0;
        Object.defineProperty(win, 'KP', {
            get: () => _KP,
            set: val => {
                if (_KP === val)
                    return true;
                _KP = new Proxy(val, {
                    set: (kp, name, val) => {
                        if (name === 'branding') {
                            kp[name] = new Proxy({ weborama: {} }, {
                                get: (kp, name) => name in kp ? kp[name] : '',
                                set: () => true
                            });
                            return true;
                        }
                        if (name === 'config')
                            val = new Proxy(val, {
                                set: (cfg, name, val) => {
                                    if (name === 'anContextUrl')
                                        return true;
                                    if (name === 'adfoxEnabled' || name === 'hasBranding')
                                        val = false;
                                    if (name === 'adfoxVideoAdUrls')
                                        val = {flash:{}, html:{}};
                                    cfg[name] = val;
                                    return true;
                                }
                            });
                        kp[name] = val;
                        return true;
                    }
                });
                _console.log('KP =', val);
            }
        });
        // skip branding and some other junk
        Object.defineProperty(win, 'advBlock', {
            get: () => () => null,
            set: () => true
        });
        // skip timeout check for blocked requests
        let _setTimeout = Function.prototype.apply.bind(win.setTimeout);
        let _toString = Function.prototype.apply.bind(Function.prototype.toString);
        win.setTimeout = function(...args) {
            if (args[1] === 100) {
                let str = _toString(args[0]);
                if (str.endsWith('{a()}') || str.endsWith('{n()}'))
                    return;
            }
            return _setTimeout(this, args);
        };
    };
