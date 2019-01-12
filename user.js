// This file is part of the Liberty fox project,
// Copyright (c) 2019 Bogachenko Vyacheslav
// 
// Liberty fox is a free project: you can distribute it and/or modify
// it in accordance with the MIT license published by the Massachusetts Institute of Technology.
// 
// The Liberty fox project is distributed in the hope that it will be useful,
// and is provided "AS IS", WITHOUT ANY WARRANTY, EXPRESSLY EXPRESSED OR IMPLIED.
// WE ARE NOT RESPONSIBLE FOR ANY DAMAGES DUE TO THE USE OF THIS PROJECT OR ITS PARTS.
// For more information, see the MIT license.
// 
// Author: Bogachenko Vyacheslav <https://github.com/bogachenko>
// Email: bogachenkove@gmail.com
// Github: https://github.com/bogachenko/libertyfox/tree/master/thunderbird/
// Last modified: January 11, 2019
// License: MIT <https://github.com/bogachenko/libertyfox/blob/master/LICENSE.md>
// Problem reports: https://github.com/bogachenko/libertyfox/issues
// Title: user.js
// URL: https://github.com/bogachenko/libertyfox/blob/master/thunderbird/user.js
// Version: 60.4.0
// 
// Download the entire Liberty fox project at https://github.com/bogachenko/libertyfox/archive/master.zip

// Warning in "about:config"
// Предупреждение в "about:config"
user_pref("general.warnOnAboutConfig", false);
 
// Font size
// Размер шрифта
// user_pref("font.size.fixed.x-cyrillic", 13);
// user_pref("font.size.fixed.x-unicode", 13);
// user_pref("font.size.fixed.x-western", 13);
// user_pref("font.size.fixed.ar", 13);
// user_pref("font.size.fixed.el", 13);
// user_pref("font.size.fixed.he", 13);
// user_pref("font.size.fixed.ja", 16);
// user_pref("font.size.fixed.ko", 16);
// user_pref("font.size.fixed.th", 13);
// user_pref("font.size.fixed.x-armn", 13);
// user_pref("font.size.fixed.x-beng", 13);
// user_pref("font.size.fixed.x-cans", 13);
// user_pref("font.size.fixed.x-devanagari", 13);
// user_pref("font.size.fixed.x-ethi", 13);
// user_pref("font.size.fixed.x-geor", 13);
// user_pref("font.size.fixed.x-gujr", 13);
// user_pref("font.size.fixed.x-guru", 13);
// user_pref("font.size.fixed.x-khmr", 13);
// user_pref("font.size.fixed.x-knda", 13);
// user_pref("font.size.fixed.x-math", 13);
// user_pref("font.size.fixed.x-mlym", 13);
// user_pref("font.size.fixed.x-orya", 13);
// user_pref("font.size.fixed.x-sinh", 13);
// user_pref("font.size.fixed.x-tamil", 13);
// user_pref("font.size.fixed.x-telu", 13);
// user_pref("font.size.fixed.x-tibt", 13);
// user_pref("font.size.fixed.zh-CN", 16);
// user_pref("font.size.fixed.zh-HK", 16);
// user_pref("font.size.fixed.zh-TW", 16);
// user_pref("font.size.variable.ar", 16);
// user_pref("font.size.variable.el", 16);
// user_pref("font.size.variable.he", 16);
// user_pref("font.size.variable.ja", 16);
// user_pref("font.size.variable.ko", 16);
// user_pref("font.size.variable.th", 16);
// user_pref("font.size.variable.x-armn", 16);
// user_pref("font.size.variable.x-beng", 16);
// user_pref("font.size.variable.x-cans", 16);
// user_pref("font.size.variable.x-cyrillic", 16);
// user_pref("font.size.variable.x-devanagari", 16);
// user_pref("font.size.variable.x-ethi", 16);
// user_pref("font.size.variable.x-geor", 16);
// user_pref("font.size.variable.x-gujr", 16);
// user_pref("font.size.variable.x-guru", 16);
// user_pref("font.size.variable.x-khmr", 16);
// user_pref("font.size.variable.x-knda", 16);
// user_pref("font.size.variable.x-math", 16);
// user_pref("font.size.variable.x-mlym", 16);
// user_pref("font.size.variable.x-orya", 16);
// user_pref("font.size.variable.x-sinh", 16);
// user_pref("font.size.variable.x-tamil", 16);
// user_pref("font.size.variable.x-telu", 16);
// user_pref("font.size.variable.x-tibt", 16);
// user_pref("font.size.variable.x-unicode", 16);
// user_pref("font.size.variable.x-western", 16);
// user_pref("font.size.variable.zh-CN", 16);
// user_pref("font.size.variable.zh-HK", 16);
// user_pref("font.size.variable.zh-TW", 16);

// Proportions (fonts)
// Пропорции (шрифты)
// user_pref("font.default.ar", "sans-serif");
// user_pref("font.default.el", "serif");
// user_pref("font.default.he", "sans-serif");
// user_pref("font.default.ja", "sans-serif");
// user_pref("font.default.ko", "sans-serif");
// user_pref("font.default.th", "sans-serif");
// user_pref("font.default.x-armn", "serif");
// user_pref("font.default.x-beng", "serif");
// user_pref("font.default.x-cans", "serif");
// user_pref("font.default.x-cyrillic", "serif");
// user_pref("font.default.x-devanagari", "serif");
// user_pref("font.default.x-ethi", "serif");
// user_pref("font.default.x-geor", "serif");
// user_pref("font.default.x-gujr", "serif");
// user_pref("font.default.x-guru", "serif");
// user_pref("font.default.x-khmr", "serif");
// user_pref("font.default.x-knda", "serif");
// user_pref("font.default.x-math", "serif");
// user_pref("font.default.x-mlym", "serif");
// user_pref("font.default.x-orya", "serif");
// user_pref("font.default.x-sinh", "serif");
// user_pref("font.default.x-tamil", "serif");
// user_pref("font.default.x-telu", "serif");
// user_pref("font.default.x-tibt", "serif");
// user_pref("font.default.x-unicode", "serif");
// user_pref("font.default.x-western", "serif");
// user_pref("font.default.zh-CN", "sans-serif");
// user_pref("font.default.zh-HK", "sans-serif");
// user_pref("font.default.zh-TW", "sans-serif");

// Default Fonts
// Шрифты по умолчанию
// user_pref("font.name.serif.x-cyrillic", "Noto Serif");
// user_pref("font.name.sans-serif.x-cyrillic", "Noto Sans");
// user_pref("font.name.monospace.x-cyrillic", "Noto Mono");
// user_pref("font.name.serif.x-western", "Noto Serif");
// user_pref("font.name.sans-serif.x-western", "Noto Sans");
// user_pref("font.name.monospace.x-western", "Noto Mono");
// user_pref("font.name.serif.ar", "Noto Naskh Arabic");
// user_pref("font.name.sans-serif.ar", "Noto Naskh Arabic");
// user_pref("font.name.monospace.ar", "Noto Naskh Arabic");
// user_pref("font.name.serif.x-armn", "Noto Serif Armenian");
// user_pref("font.name.sans-serif.x-armn", "Noto Sans Armenian");
// user_pref("font.name.monospace.x-armn", "Noto Sans Armenian");
// user_pref("font.name.serif.x-beng", "Noto Serif Bengali");
// user_pref("font.name.sans-serif.x-beng", "Noto Sans Bengali");
// user_pref("font.name.monospace.x-beng", "Noto Sans Bengali");
// user_pref("font.name.serif.zh-CN", "Noto Serif CJK SC");
// user_pref("font.name.sans-serif.zh-CN", "Noto Sans CJK SC");
// user_pref("font.name.monospace.zh-CN", "Noto Sans CJK SC");
// user_pref("font.name.serif.zh-TW", "Noto Serif CJK TC");
// user_pref("font.name.sans-serif.zh-TW", "Noto Sans CJK TC");
// user_pref("font.name.monospace.zh-TW", "Noto Sans CJK TC");
// user_pref("font.name.serif.zh-HK", "Noto Serif CJK TC");
// user_pref("font.name.sans-serif.zh-HK", "Noto Sans CJK TC");
// user_pref("font.name.monospace.zh-HK", "Noto Sans CJK TC");
// user_pref("font.name.serif.x-devanagari", "Noto Serif Devanagari");
// user_pref("font.name.sans-serif.x-devanagari", "Noto Sans Devanagari");
// user_pref("font.name.monospace.x-devanagari", "Noto Sans Devanagari");
// user_pref("font.name.serif.x-ethi", "Noto Serif Ethiopic");
// user_pref("font.name.sans-serif.x-ethi", "Noto Sans Ethiopic");
// user_pref("font.name.monospace.x-ethi", "Noto Sans Ethiopic");
// user_pref("font.name.serif.x-geor", "Noto Serif Georgian");
// user_pref("font.name.sans-serif.x-geor", "Noto Sans Georgian");
// user_pref("font.name.monospace.x-geor", "Noto Sans Georgian");
// user_pref("font.name.serif.x-gujr", "Noto Serif Gujarati");
// user_pref("font.name.sans-serif.x-gujr", "Noto Sans Gujarati");
// user_pref("font.name.monospace.x-gujr", "Noto Sans Gujarati");
// user_pref("font.name.serif.x-guru", "Noto Serif Gurmukhi");
// user_pref("font.name.sans-serif.x-guru", "Noto Sans Gurmukhi");
// user_pref("font.name.monospace.x-guru", "Noto Sans Gurmukhi");
// user_pref("font.name.serif.he", "Noto Serif Hebrew");
// user_pref("font.name.sans-serif.he", "Noto Sans Hebrew");
// user_pref("font.name.monospace.he", "Noto Sans Hebrew");
// user_pref("font.name.serif.ja", "Noto Serif CJK JP");
// user_pref("font.name.sans-serif.ja", "Noto Sans CJK JP");
// user_pref("font.name.monospace.ja", "Noto Sans CJK JP");
// user_pref("font.name.serif.el", "Noto Serif");
// user_pref("font.name.sans-serif.el", "Noto Sans");
// user_pref("font.name.monospace.el", "Noto Sans Mono");
// user_pref("font.name.serif.x-knda", "Noto Serif Kannada");
// user_pref("font.name.sans-serif.x-knda", "Noto Sans Kannada");
// user_pref("font.name.monospace.x-knda", "Noto Sans Kannada");
// user_pref("font.name.serif.x-khmr", "Noto Serif Khmer");
// user_pref("font.name.sans-serif.x-khmr", "Noto Sans Khmer");
// user_pref("font.name.monospace.x-khmr", "Noto Sans Khmer");
// user_pref("font.name.serif.ko", "Noto Serif CJK KR");
// user_pref("font.name.sans-serif.ko", "Noto Sans CJK KR");
// user_pref("font.name.monospace.ko", "Noto Sans CJK KR");
// user_pref("font.name.serif.x-mlym", "Noto Serif Malayalam");
// user_pref("font.name.sans-serif.x-mlym", "Noto Sans Malayalam");
// user_pref("font.name.monospace.x-mlym", "Noto Sans Malayalam");
// user_pref("font.name.serif.x-orya", "Noto Sans Oriya");
// user_pref("font.name.sans-serif.x-orya", "Noto Sans Oriya");
// user_pref("font.name.monospace.x-orya", "Noto Sans Oriya");
// user_pref("font.name.serif.x-math", "Latin Modern Math");
// user_pref("font.name.sans-serif.x-math", "Latin Modern Math");
// user_pref("font.name.monospace.x-math", "Latin Modern Math");
// user_pref("font.name.serif.x-sinh", "Noto Serif Sinhala");
// user_pref("font.name.sans-serif.x-sinh", "Noto Sans Sinhala");
// user_pref("font.name.monospace.x-sinh", "Noto Sans Sinhala");
// user_pref("font.name.serif.x-tamil", "Noto Serif Tamil");
// user_pref("font.name.sans-serif.x-tamil", "Noto Sans Tamil");
// user_pref("font.name.monospace.x-tamil", "Noto Sans Tamil");
// user_pref("font.name.serif.x-telu", "Noto Serif Telugu");
// user_pref("font.name.sans-serif.x-telu", "Noto Sans Telugu");
// user_pref("font.name.monospace.x-telu", "Noto Sans Telugu");
// user_pref("font.name.serif.x-tibt", "Noto Sans Tibetan");
// user_pref("font.name.sans-serif.x-tibt", "Noto Sans Tibetan");
// user_pref("font.name.monospace.x-tibt", "Noto Sans Tibetan");
// user_pref("font.name.serif.x-unicode", "Noto Serif");
// user_pref("font.name.sans-serif.x-unicode", "Noto Sans");
// user_pref("font.name.monospace.x-unicode", "Noto Mono");
// user_pref("font.name.serif.th", "Noto Serif Thai");
// user_pref("font.name.sans-serif.th", "Noto Sans Thai");
// user_pref("font.name.monospace.th", "Noto Sans Thai");
// user_pref("font.name.serif.x-cans", "serif");
// user_pref("font.name.sans-serif.x-cans", "sans-serif");
// user_pref("font.name.monospace.x-cans", "monospace");
user_pref("font.language.group", "x-western");
// user_pref("font.name-list.emoji", "Noto Color Emoji");

// Crash reports
// [NOTE] This feature sends information about browser crashes to the Mozilla server,
// including technical information (memory status, etc.), the time of the incident and the web links visited,
// as well as some user information.
// Отчеты о сбоях
// [ЗАМЕТКА] Эта функция отсылает на сервер Mozilla сведения о сбоях браузера,
// включая техническую информацию (состояние памяти и т.п.), время происшествия и посещаемые веб-ссылки,
// а также некоторую пользовательскую информацию.
user_pref("breakpad.reportURL", "");

// Thunderbird health report
// Отчет о состоянии здоровья Thunderbird
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");

// Guessing the domain in the address bar
// Угадывание домена в адресной строке
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.alternate.prefix", "");
user_pref("browser.fixup.alternate.suffix", "");

// Remember your browsing and download history
// Помните историю посещений и загрузок
user_pref("places.history.enabled", true);

// Telemetry
// This feature sends data to Mozilla servers about usage, browser performance, user interface features,
// memory and hardware configuration, as well as real IP.
// In addition, information may be collected about the sites visited. This is a serious source of leakage and user tracking,
// it should be disabled.
// Телеметрия
// Эта функция шлет на серверы Mozilla данные об использовании, производительности браузера,
// особенностях пользовательского интерфейса, памяти и конфигурации оборудования, а также реальный IP.
// Кроме того, может собираться информация о посещаемых сайтах. Это серьезный источник утечек и слежения за пользователем,
// его следует отключить.
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "");
user_pref("security.ssl.errorReporting.url", "");
user_pref("toolkit.telemetry.infoURL", "");
user_pref("toolkit.telemetry.previousBuildID", "");

// Crash Reporter related information
// Crash Reporter связанная информация
user_pref("toolkit.crashreporter.infoURL", "");

// Remember the search history and form data
// Помнить историю поиска и данные формы
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.expire_days", 0);

// Autocomplete
// Автозаполнение
user_pref("browser.urlbar.autocomplete.enabled", false);

// Opening tabs and external applications in the background
// 		TRUE = Open such tabs in the background
// 		FALSE = Switch to openable tabs
// Открытие вкладок и внешних приложений в фоновом режиме
// 		TRUE = Открывать такие вкладки в фоне
// 		FALSE = Переключаться на открываемые вкладки
user_pref("browser.tabs.loadDivertedInBackground", true);

// Search suggestions
// The default search engine uses geolocation-related data (your real location, determined by IP address).
// This data is sent to the Mozilla and Google servers. In addition, Google collects and stores data
// about your search queries and preferences.
// Поисковые предложения
// Поисковый механизм по умолчанию использует данные, связанные с геолокацией (вашим реальным местонахождением,
// определяемым по IP-адресу). Эти данные отсылаются на серверы Mozilla и Google. Кроме того, Google собирает и
// хранит данные о ваших поисковых запросах и предпочтениях.
user_pref("browser.search.suggest.enabled", false);

// Automatic installation of updates for Thunderbird
// Автоматическая установка обновлений для Thunderbird
user_pref("app.update.auto", false);

// Automatic check for updates for extensions
// Автоматическая проверка обновлений для расширений
user_pref("extensions.update.enabled", false);

// Automatic installation of updates for extensions
// Автоматическая установка обновлений для расширений
user_pref("extensions.update.autoUpdateDefault", false);

// Background update service
// Служба для фонового обновления
user_pref("app.update.service.enabled", true);
user_pref("app.update.staging.enabled", false);

// Display information about the update
// Отображение информация об обновлении
user_pref("app.update.silent", false);

// Update extension metadata
// [NOTE] Disable profiled add-on information and block the sending of user metadata about the use of add-ons.
// The browser, based on the list of already installed add-ons, offers new ones on the "Get Add-ons" page
// in the add-ons manager. At the same time, Mozilla receives and analyzes information from the browser: version number,
// IP address, and so on.
// Обновление метаданных расширения
// [ЗАМЕТКА] Отключение профилируемой информации о дополнениях и блокирование отсылки пользовательских метаданных
// об использовании дополнений. Браузер, отталкиваясь от списка уже установленных дополнений, предлагает новые
// на странице "Get Add-ons" в менеджере дополнений. При этом Mozilla получает и анализирует информацию,
// поступающую от браузера: номер версии, IP-адрес и прочее.
user_pref("extensions.getAddons.cache.enabled", false);

// Automatic update of search engines
// Автоматическое обновление поисковых систем
user_pref("browser.search.update", false);
user_pref("browser.search.update.interval", 0);
user_pref("browser.search.update.log", false);

// Change the default encoding for text files
// Изменение кодировки по умолчанию для текстовых файлов
user_pref("intl.charset.fallback.utf8_for_file", true);

// Sending telemetry data and website address, about where and how the plugin failed
// Отправка телеметрических данных и адреса сайта, о том, где и как произошел сбой плагина
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("plugins.crash.supportUrl", "");

// Spell check before departure
// Проверка орфографии перед отправлением
user_pref("mail.SpellCheckBeforeSend", false);

// Check if Thunderbird is your default email client
// Проверять, является ли Thunderbird вашим почтовым клиентом по умолчанию
user_pref("mail.shell.checkDefaultClient", false);

// Master cleaner Thunderbird
// [NOTE] This dialog window is invoked by hotkeys - Ctrl + Shift + Del.
// Мастер очистки Thunderbird
// [ЗАМЕТКА] Это диалоговое окно вызывается горячими клавишами - Ctrl + Shift + Del.
user_pref("privacy.cpd.cache", true); // Cache / Кэш
user_pref("privacy.cpd.cookies", false); // Cookies / Куки
user_pref("privacy.cpd.history", true); // History / История

// Time range to clear
// 		0 = Everything
// 		1 = Last hour
// 		2 = Last two hours
// 		3 = Last four hours
// 		4 = Today
// 		5 = Last five minutes
// 		6 = Last twenty-four hours
// Диапазон времени для очистки
// 		0 = Все
// 		1 = Последний час
// 		2 = Последние два часа
// 		3 = Последние четыре часа
// 		4 = Сегодня
// 		5 = Последние пять минут
// 		6 = Последние сутки
user_pref("privacy.sanitize.timeSpan", 0);

// Whether to show the Thunderbird icon in the system tray
// Отображать ли значок Thunderbird в системном трее
user_pref("mail.biff.show_tray_icon", false);

// Show start page in the message viewing area
// Показ стартовой страницы в области просмотра сообщений
user_pref("mailnews.start_page.url", "");
user_pref("mailnews.start_page.enabled", false);

// Closing Thunderbird when closing the last tab
// Закрытие Thunderbird при закрытии последней вкладки
user_pref("mail.tabs.closeWindowWithLastTab", false);

// Push notifications
// Push-уведомления
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");

// Warning in "about:networking"
// Предупреждение в "about:networking"
user_pref("network.warnOnAboutNetworking", false);

// Control the selection of sent "Referrer" through sources
// 		0 = Send "Referrer" in all cases
// 		1 = Send only if the base domains match
// 		2 = Send "Referer" only to the same host
// Контроль выбора отправляемых "Referrer" через источники
// 		0 = Отправлять "Referrer" во всех случаях
// 		1 = Отправлять, только если базовые домены совпадают
// 		2 = Отправить "Referer" только на тот же хост
user_pref("network.http.referer.XOriginPolicy", 1);

// Activate the plugin by clicking
// Активация плагина по клику
user_pref("plugins.click_to_play", true);

// Time to run plugins
// Время для запуска плагинов
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);

// Require a valid OCSP response for OCSP enabled certificates
// [NOTE] When you turn on breaks some sites.
// Требовать действительный ответ OCSP для сертификатов с поддержкой OCSP
// [ЗАМЕТКА] При включении ломается некоторые сайты.
// user_pref("security.OCSP.require", true);

// WebRTC (Web Real-Time Communication)
// WebRTC (Веб Связь в Реальном Времени)
user_pref("media.peerconnection.dtmf.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.rtpsourcesapi.enabled", false);
user_pref("media.peerconnection.simulcast", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);

// OpenH264 codec (Gecko Media Plugins)
// Кодек OpenH264 (Gecko Медиа Плагины)
user_pref("media.gmp-manager.cert.checkAttributes", false);
user_pref("media.gmp-manager.cert.requireBuiltIn", false);
user_pref("media.gmp-manager.certs.1.commonName", "");
user_pref("media.gmp-manager.certs.1.issuerName", "");
user_pref("media.gmp-manager.certs.2.commonName", "");
user_pref("media.gmp-manager.certs.2.issuerName", "");
user_pref("media.gmp-manager.url", "data:text/plain,");

// Indexed database API
// API Индексированных баз данных
// user_pref("dom.indexedDB.enabled", false);
user_pref("dom.indexedDB.experimental", false);
user_pref("dom.indexedDB.logging.details", false);
user_pref("dom.indexedDB.logging.enabled", false);

// API for microphone and webcam interaction
// API для взаимодействия с микрофоном и веб-камерой
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);

// Web Audio API
// [WARNING] Dangerously due to browser fingerprints.
// API Веб-аудио
// [ВНИМАНИЕ] Опасно из-за отпечатков пальцев браузера.
user_pref("dom.webaudio.enabled", false);

// Collecting HTML video statistics
// Сбор HTML-видеостатистики
user_pref("media.video_stats.enabled", false);

// Gamepad API
// API Геймпада
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);
user_pref("dom.gamepad.haptic_feedback.enabled", false);

// Location accounting
// Firefox has built-in tools for transferring GEODATA (your location). This uses information obtained from the operating systems
// geolocation facilities, Wi-Fi networks, telephone and Internet operators, as well as a real IP address.
// In addition, the above data is sent to Google servers.
// Учет местоположения
// Firefox располагает встроенными средствами передачи геоданных (вашего местонахождения). При этом используются сведения,
// получаемые от геолокационных средств операционной системы, сетей Wi-Fi, телефонных и интернет-операторов, а также реальный IP-адрес.
// Кроме того, вышеперечисленные данные отсылаются на серверы Google.
user_pref("geo.enabled", false);
user_pref("geo.wifi.xhr.timeout", 0);

// GeoIP-based search results
// Результаты поиска на основе GeoIP
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoip.timeout", 0);

// Browser geolocation (GeoIP) when working with search servers
// Геопозиционирования браузера (GeoIP) при работе с поисковыми серверами
user_pref("browser.search.geoSpecificDefaults", false);

// Browser sends information about the start and end time of page loading
// Передача браузером информации о времени начала и окончания загрузки страницы
user_pref("dom.enable_performance", false);
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.enable_performance_observer", false);

// Resource timing API
// API Ресурсов времени
user_pref("dom.enable_resource_timing", false);

// View clipboard content
// Просмотр содержимого буфера обмена
// user_pref("dom.event.clipboardevents.enabled", false);

// Speculative pre-connections
// Спекулятивные предварительные соединения
user_pref("network.http.speculative-parallel-limit", 0);

// Additional analytics sent to the web server
// [NOTE] HTTP-data leaking from UserAgent to the server, especially when leaving the page.
// Дополнительная аналитика, отправленная на веб-сервер
// [ЗАМЕТКА] HTTP-данные утекающих от UserAgent на сервер, особенно при покидании страницы.
user_pref("beacon.enabled", false);

// Block dangerous and deceptive content (malware, phishing, dangerous downloads)
// Блокировать опасное и обманывающее содержимое (вредоносные программы, фишинг, опасные загрузки)
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

// Warning about unwanted and rarely downloaded programs
// Предупреждение о нежелательных и редко загружаемых программах
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// Querying Google Application Reputation database for downloaded binary files
// Запрос базы данных репутации приложения Google для загруженных двоичных файлов
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

// URLs Reports
// Отчеты URLs
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

// Data sharing
// Обмен данными
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");

// Button "Ignore this warning" on the pages of safe browsing
// [NOTE] Useless for regular users, its meant for admins on bigger network as a way to secure their users.
// Кнопка "Игнорировать это предупреждение" на страницах безопасного просмотра
// [ЗАМЕТКА] Бесполезный для обычных пользователей, он предназначен для администраторов в большей сети,
// как способ защитить своих пользователей.
user_pref("browser.safebrowsing.allowOverride", false);

// Block known Flash trackers and fingerprints
// Блокировать известные Flash трекеры и отпечатки пальцев
user_pref("browser.safebrowsing.blockedURIs.enabled", false);

// Windows 8.1 Family Security
// 		0 = Disable
// 		1 = Only attempt to detect Family Safety mode (don't import the root)
// 		2 = Detect Family Safety mode and import the root
// Семейная безопасность Windows 8.1
// 		0 = Отключить
// 		1 = Только попытка обнаружить режим безопасности семьи (не импортировать корень)
// 		2 = Определить режим безопасности семьи и импортировать корень
user_pref("security.family_safety.mode", 0);

// Force Punycode for Internationalized Domain Names
// Принудительное использование Юникода для интернационализированных доменных имен
user_pref("network.IDN_show_punycode", true);

// Automatic update check for Thunderbird
// Автоматическая проверка обновлений для Thunderbird
user_pref("app.update.enabled", false);

// Battery API
// Monitoring computer battery
// API аккумулятора
// Мониторинга аккумулятора компьютера
user_pref("dom.battery.enabled", false);

// DNS browser preloading
// Предварительная загрузка браузером DNS
user_pref("network.dns.disablePrefetch", true);

// Preload browser links
// Предварительная загрузка браузером ссылок
user_pref("network.prefetch-next", false);

// UserAgent
// The User-Agent string (part of the HTTP header) is used to communicate and transfer content (content)
// between the client program and the server. With the help of its analysis, the server determines the optimal parameters
// for interaction on the basis of existing specifications of a software, data on its purpose
// (browser, email client, etc.) and the current version.
// [NOTE] The above is the user Agent from Firefox ESR, but you can change it and find the fake UserAgent values on the Internet.
// Please choose the most common options (as shown in the example above), trying not to "stand out" from the total mass of browsers.
// [WARNING] To prevent leaks of information about your operating system and browser through UA analysis,
// additionally disable JavaScript globally!
// UserAgent
// Строка User-Agent (часть HTTP-заголовка) используется для связи и передачи содержимого (контента)
// между клиентской программой и сервером. С помощью ее анализа сервер определяет оптимальные параметры
// для взаимодействия на основании уже имеющихся спецификаций того или иного программного обеспечения,
// данных о его назначении (браузер, почтовый клиент и т.п.) и текущей версии.
// [ЗАМЕТКА] Выше представлен UserAgent от Firefox ESR, однако вы можете его изменить и найти поддельные значения UserAgent в интернете.
// Пожалуйста, выбирайте наиболее общеупотребимые варианты (как это показано в примере выше), стараясь "не выделяться" из общей массы браузеров.
// [ВНИМАНИЕ] Для предотвращения утечек информации об используемой ОС и браузере посредством анализа UA, дополнительно запретите JavaScript глобально!
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0");
user_pref("general.buildID.override", "20100101");
user_pref("general.appname.override", "Netscape");
user_pref("general.appversion.override", "5.0 (Windows)");
user_pref("general.platform.override", "Win32");
user_pref("general.oscpu.override", "Windows NT 6.1");
user_pref("general.useragent.locale", "en-US");

// Smooth scrolling
// Плавная прокрутка
user_pref("general.smoothScroll", false);

// Auto Scroll
// Автоматическая прокрутка
user_pref("general.autoScroll", false);

// Hardware acceleration
// Аппаратное ускорение
user_pref("layers.acceleration.force-enabled", false);
user_pref("layers.acceleration.disabled", true);
user_pref("gfx.direct2d.disabled", true);

// Maximum number of backup bookmarks
// Максимальное количество резервных закладок
user_pref("browser.bookmarks.max_backups", 3);

// Limit WebRTC IP address leaks when using WebRTC
// Ограничение утечек IP-адресов WebRTC при использовании WebRTC
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);

// Screensharing
// Blocking additional functionality of WebRTC WG (capture and video broadcasting of desktops) and Media Capture Task Force.
// Общий доступ к экрану
// Блокирование дополнительного функционала WebRTC WG (захват и видеотрансляция рабочих столов) и Media Capture Task Force.
user_pref("media.getusermedia.aec_enable", false);
user_pref("media.getusermedia.agc_enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.noise_enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);

// Auto-play of HTML5 media
// 		TRUE = Allow
// 		FALSE = Block
// [WARNING] This may break video playback on various sites.
// Автоматическое воспроизведение мультимедиа в формате HTML5
// 		TRUE = Разрешить
// 		FALSE = Заблокировать
// [ВНИМАНИЕ] Это может нарушить воспроизведение видео на разных сайтах.
user_pref("media.autoplay.enabled", false);

// Automatically play sound in inactive tabs
// 		TRUE = Do not play
// 		FALSE = Play
// Автоматическое воспроизведение звука в неактивных вкладках
// 		TRUE = Не воспроизводить
// 		FALSE = Воспроизводить
user_pref("media.block-autoplay-until-in-foreground", true);

// Volume status
// Состояние громкости       
user_pref("media.default_volume", "0.5");

// WEBM
user_pref("media.mediasource.webm.enabled", true);

// How often Thunderbird should ask for a master password
// 		0 = The first time
// 		1 = Every time its needed
// 		2 = Every "N" minutes
// Как часто Thunderbird должен запрашивать мастер-пароль
// 		0 = Первый раз
// 		1 = Каждый раз, когда это необходимо
// 		2 = Каждые "N" минут
user_pref("security.ask_for_password", 2);

// How often (within how many minutes) Thunderbird should ask for a master password
// Как часто (в течение скольки минут) Thunderbird должен запрашивать мастер-пароль
user_pref("security.password_lifetime", 5);

// Autocomplete user name and password
// Aвтоматическое заполнение имени пользователя и пароля
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true); // Message at login: "This connection is not secure" / Сообщение при вводе логина: "Это соединение не защищено"

// Automatic update themes
// Автоматическое обновление тем
user_pref("lightweightThemes.update.enabled", false);

// Experiments
// [NOTE] Allows you to automatically download and run tested add-ons.
// Эксперименты
// [ЗАМЕТКА] Позволяет автоматически загружать и запускать тестируемые дополнения.
user_pref("network.allow-experiments", false);

// Web Compatibility Reporter
// Отправка отчетов о совместимости с Интернетом
user_pref("extensions.webcompat-reporter.enabled", false);

// Favicons in web notifications
// Значки в веб-уведомлениях
user_pref("alerts.showFavicons", false);

// Path to save files
// 		0 = Desktop
// 		1 = Downloads
// 		2 = Last used folder
// Путь для сохранения файлов
// 		0 = Рабочий стол
// 		1 = Загрузки
// 		2 = Последняя используемая папка
user_pref("browser.download.folderList", 2);

// Request to save files
// Запрос на сохранение файлов
user_pref("browser.download.useDownloadDir", false);

// Adding downloads to the list of recent system documents
// Добавление загрузок в список последних документов системы
user_pref("browser.download.manager.addToRecentDocs", false);

// Hiding MIME types
// Скрытие типов MIME
user_pref("browser.download.hide_plugins_without_extensions", false);

// Show the "Open with" dialog box in the download window
// Показ диалогового окна "Открыть при помощи" в окне загрузки
user_pref("browser.download.forbid_open_with", true);

// Predictor (formerly Seer)
// This function creates the simplest connections to the server. When the cursor is over a certain link,
// Firefox tries to predict further user actions on the page in order to increase the performance
// and speed of processing the content on the page.
// Предсказатель (бывший Seer)
// Это функция создает простейшие соединения с сервером. Когда курсор находится над определенной ссылкой,
// Firefox пытается предугадать дальнейшие действия пользователя на странице с целью увеличения производительность
// и скорости обработки контента на странице.
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

// Search from address panel
// Поиск из панели адреса
user_pref("keyword.enabled", true);

// Adding sites from Alexa Top 500 to the address bar Autocomplete list
// Добавление сайтов из Alexa Top 500 в список автозаполнения адресной строки
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);

// Windows jumplist
user_pref("mail.taskbar.lists.enabled", false);
user_pref("mail.taskbar.lists.tasks.enabled", false);

// IPv6
user_pref("network.dns.disableIPv6", true);

// Block allowed extension directories
// [WARNING] This will break extensions that do not use the default XPI directories.
// Заблокировать разрешенные каталоги расширений
// [ВНИМАНИЕ] Это приведет к разрыву расширений, которые не используют каталоги XPI по умолчанию.
user_pref("extensions.autoDisableScopes", 15);

// WebExtension Restrictions for Specific Mozilla Domains
// Ограничения WebExtension для определенных доменов Mozilla
user_pref("extensions.webextensions.restrictedDomains", "");

// Warning when websites try to install add-ons
// Предупреждение при попытке веб-сайтов установить дополнения
user_pref("xpinstall.whitelist.required", true);

// Fullscreen API
// [WARNING] Dangerously due to browser fingerprints.
//
// API Полного экрана
// [ВНИМАНИЕ] Опасно из-за отпечатков пальцев браузера.
user_pref("full-screen-api.enabled", false);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// Animated gradient that runs through the tab after the page is fully loaded
// Анимированный градиент, который пробегает по вкладке после полной загрузки страницы
user_pref("toolkit.cosmeticAnimations.enabled", false);

// Search for text on the page as it is typed
// Искать текст на странице по мере его набора
user_pref("accessibility.typeaheadfind", false);

// Automatic copying
// Автоматическое копирование
user_pref("clipboard.autocopy", false);

// Reader View
user_pref("reader.parse-on-load.enabled", false);

// WebGL debug info being available to websites
//
// Информация об отладке WebGL доступна для веб-сайтов
user_pref("webgl.enable-debug-renderer-info", false);

// Mixed content
// Смешанное содержание
user_pref("security.mixed_content.block_active_content", true); 
user_pref("security.mixed_content.block_display_content", true);

// SPDY protocol
// SPDY protocol developed with the participation of Google for the transport of web content.
// SPDY modifies web traffic in order to reduce its download time by compression, multiplex and prioritization mechanism.
// [WARNING] SPDY can store an identifier and holds an extremely long open connection.
// Протокол SPDY
// SPDY протокол, разработанный с участием Google для транспортировки веб-контента.
// SPDY видоизменяет веб-трафик с целью сокращения времени его загрузки путем компрессии,
// мультиплекса и механизма расстановки приоритетов.
// [ВНИМАНИЕ] SPDY может хранить идентификатор и держит экстремально долгое открытое соединение.
user_pref("network.http.spdy.enabled", true);
user_pref("network.http.spdy.enabled.deps", true);
user_pref("network.http.spdy.enabled.http2", true);

// WebGL (Web Graphics Library)
// [NOTE] Turning off WebGL to block the definition of the CPU and the speed of the video card on the "digital fingerprints".
// Also recommended for braking, crashes and problems with the video card.
// WebGL (Библиотека веб-графики)
// [ЗАМЕТКА] Выключение WebGL с целью блокирования определения CPU и скорости видеокарты по "цифровым отпечаткам".
// Также рекомендовано при торможениях, сбоях и проблемах с видеокартой.
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.disabled", true);
user_pref("webgl.dxgl.enabled", false);
user_pref("webgl.enable-webgl2", false);
user_pref("webgl.force-enabled", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.msaa-force", false);

// Service Workers
// "Service workers" essentially act as proxy servers that sit between web apps, and the browser and network,
// are event driven, and can control the web page/site it is associated with, intercepting and modifying navigation
// and resource requests, and caching resources.
// [NOTE] This heavily loads the system resources and takes up most of the RAM.
// Service Workers
// "Service workers" по существу действуют как прокси-серверы, которые находятся между веб-приложениями,
// браузером и сетью, управляются событиями и могут управлять веб-страницей или сайтом, с которыми они связаны,
// перехватывать и изменять запросы навигации и ресурсов, а также кэшировать ресурсы.
// [ЗАМЕТКА] Это сильно нагружает ресурсы системы и занимает большую часть оперативной памяти.
user_pref("dom.serviceWorkers.enabled", false);

// Cookies for HTTP sites are set with the "secure" directive
// Файлы куки для сайтов HTTP устанавливаются с "защищенной" директивой
user_pref("network.cookie.leave-secure-alone", true);

// SameSite сookies
// Куки SameSite
user_pref("network.cookie.same-site.enabled", true);

// DOM (Document Object Model) Storage
// The DOM specifications of web applications define a mechanism that allows web pages to store their data
// on the client side in a special storage.
// [WARNING] This will break a lot of sites' functionality and extensions.
// You are better off using an extension for more granular control.
// Хранилище DOM (Объектная Модель Документа)
// DOM-спецификации веб-приложений определяют механизм, разрешающий веб-страницам сохранять свои данные
// на клиентской стороне в специальном хранилище.
// [ВНИМАНИЕ] Отключение этого предпочтения сломает много функций и расширений сайтов.
// Вам лучше использовать расширение для более гранулированного контроля.
// user_pref("dom.storage.enabled", false);

// Warn showing red lock for "broken security"
// Предупреждать, показывая красный замок для "сломанной безопасности"
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Additional information about the pages warning about unsafe connections
// Дополнительная информация о страницах, предупреждающая о небезопасном подключении
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// MediaDevices
user_pref("media.ondevicechange.enabled", false);

// OCSP Stapling
// Сшивание OCSP
user_pref("security.ssl.enable_ocsp_stapling", true);

// Sensor API
// Collecting information from sensors
// API Сенсора
// Сбора информации с сенсоров
user_pref("device.sensors.enabled", false);

// Content Security Policy (CSP)
// Политика безопасности контента
user_pref("security.csp.enable", true);
user_pref("security.csp.enableStrictDynamic", false);
user_pref("security.csp.enable_violation_events", false);

// Online Certificate Status Protocol
// 		0 = Disabled
// 		1 = Enabled
// 		2 = Enabled for EV certificates only
// Протокол статуса сертификата онлайн
// 		0 = Отключено
// 		1 = Включен
// 		2 = Включено только для сертификатов EV
user_pref("security.OCSP.enabled", 1);

// Virtual Reality API
// API Виртуальной реальности
user_pref("dom.vr.enabled", false);

// Pointer Events
// События указателя
user_pref("dom.w3c_pointer_events.enabled", false);

// CSS :visited selectors
// [ЗАМЕТКА] Disables the use of styles with the: visited selector to visited links,
// which prevents the user from finding out what URLs the user has in the browser history.
// CSS :visited селекторы
// [ЗАМЕТКА] Отключает применение к посещенным ссылкам стилей с селектором :visited,
// что предотвращает возможность выяснить, какие URL есть у пользователя в истории браузера.
user_pref("layout.css.visited_links_enabled", false);

// Cookie
// A Cookie is a piece of data (a small text file) that is sent by the server and stored in a browser.
// When the user re-loads the same page, the browser sends the cookie back to the server
// and notifies it of the previous activity of the application.
// Cookies store information such as passwords, logins, session data, credit card data, email addresses,
// and record various user activity and other statistics.
// [WARNING] Cookies are actively used by many web resources in the process of monitoring and tracking user activity.
// Theft and analysis of cookies is a potentially dangerous and serious attack, leading to global leaks of user data and unauthorized use.
// 		0 = Always accept cookies from third-party sites
// 		1 = Never accept cookies from third-party sites
// 		2 = Do not accept cookies at all
// 		3 = Accept cookies from third-party sites, only from previously visited sites
// Куки
// Cookie - фрагмент данных (небольшой текстовый файл), отправляемый сервером и сохраняющийся в браузере.
// Когда пользователь вновь загружает ту же самую страницу, браузер отсылает cookie назад на сервер
// и уведомляет его тем самым о предыдущей активности приложения.
// Cookie хранят такую информацию, как пароли, логины, сеансовые данные, данные кредитных карт,
// электронные почтовые адреса и записывают различную пользовательскую активность и прочую статистику.
// [ВНИМАНИЕ] Cookie активно используются многими веб-ресурсами в процессе контроля и слежки за пользовательской активностью.
// Похищение и анализ cookie является потенциально опасной и серьезной атакой, приводящей к глобальным утечкам пользовательских данных
// и их несанкционированному использованию.
// 		0 = Всегда принимать файлы куки с сторонних сайтов
// 		1 = Никогда не принимать файлы куки с сторонних сайтов
// 		2 = Не принимать куки вообще
// 		3 = Принимать файлы куки с сторонних сайтов, только у ранее посещенных сайтов
user_pref("network.cookie.cookieBehavior", 1);

// Сookie lifetime policy
// 		0 = Save them before expiration
// 		2 = Save them until close Thunderbird
// Политика жизни куки
// 		0 = Сохранять их до истечения срока действия
// 		2 = Сохранять их до закрытия Thunderbird
user_pref("network.cookie.lifetimePolicy", 2);

// Closing Thunderbird when closing the last tab
// Закрытие Thunderbird при закрытии последней вкладки
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Preferred language for displaying web pages
// Предпочитаемый язык для отображения веб-страниц
user_pref("intl.accept_languages", "en-US, en");

// In "about:addons" remove the item "Get add-ons"
// [WARNING] Uses Google Analytics.
// В "about:addons" убрать пункт "Получить дополнения"
// [ВНИМАНИЕ] Использует Google Analytics.
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.webservice.discoverURL", "");

// Allow websites to use their own fonts
// 		0 = Block
// 		1 = Allow
// Разрешить веб-сайтам использовать свои шрифты
// 		0 = Заблокировать
// 		1 = Разрешить
user_pref("browser.display.use_document_fonts", 0);

// DOMHighResTimeStamp API
// [WARNING] Required for normalization of timestamps and any timer resolution mitigations.
// DOMHighResTimeStamp API
// [ВНИМАНИЕ] Требуется для нормализации временных меток и любых смягчений разрешения таймера.
user_pref("dom.event.highrestimestamp.enabled", true);

// Special services (accessibility support services)
// Специальные услуги (службы поддержки доступности)
user_pref("accessibility.force_disabled", 1);

// Disk cache
// Кэш-диска
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);

// Disk cache for SSL pages
// Кэш-диск для SSL-страниц
user_pref("browser.cache.disk_cache_ssl", false);

// Fastback cache
// 		0 = Disable
// 		-1 = Auto
// Кэш Fastback
// 		0 = Отключить
// 		-1 = Автоматически
user_pref("browser.sessionhistory.max_total_viewers", 0);

// Offline cache
// Автономный кэш
user_pref("browser.cache.offline.enable", false);

// Offline cache on insecure sites
// Автономный кэш на небезопасных сайтах
user_pref("browser.cache.offline.insecure.enable", false);

// Request to use the offline cache
// Запрос на использование автономного кеша
user_pref("offline-apps.allow_by_default", false);

// First party isolation
// Изоляция первой стороны
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);

// Use the application language over the language of your operating system in the regional settings
// Использовать язык приложения поверх языка вашей операционной системы в региональных настройках
user_pref("intl.regional_prefs.use_os_locales", false);

// Thunderbird Fingerprints
// [NOTE] Blocking the recognition of the browser’s “digital fingerprints” - external dimensions (height and width) of the active browser window.
// As a rule, most users maximize the active browser window to full screen.
// Using a specially prepared web page, a hypothetical attacker (using the window.screen object and CSS media queries)
// can identify the physical dimensions of the monitor (in pixels) in this case, even if scripts are globally forbidden in the browser.
// Activating this setting will lead to the fact that a minor information about the size of the visible area of the web page being
// viewed will be available to the third party - i.e. without considering the size of the chrome elements of the browser window.
// Отпечатки пальцев Thunderbird
// [ЗАМЕТКА] Блокирование опознания "цифровых отпечатков" браузера - внешних размеров (высоты и ширины) активного окна браузера.
// Как правило, большинство пользователей разворачивает активное окно браузера на весь экран.
// При помощи специально подготовленной веб-страницы гипотетическая атакующая сторона
// (посредством использования объекта window.screen и CSS медиа-запросов) может опознать в этом случае физические размеры монитора (в пикселях),
// даже если в браузере глобально запрещены скрипты.
// Активация этой настройки приведет к тому, что третьей стороне будет доступна малозначительная информация о размере видимой области
// просматриваемой веб-страницы - т.е. без учета размеров chrome-элементов окна браузера.
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", false);

// Install only signed extensions
// Установка только подписанных расширений
user_pref("extensions.langpacks.signatures.required", true); // Require signing language pack / Требование подписи языкового пакета
user_pref("xpinstall.signatures.required", true); // Require signing extensions / Требовать подписание расширений

// Add-on installation delay
// Задержка при установке дополнений
user_pref("security.dialog_enable_delay", 0);

// Default plugins state
// A plug - in is third-party software that allows a browser to process web content
// that it cannot play on its own. Usually these are proprietary (non-free)
// proprietary formats for processing audio and video content (Adobe Flash, Apple QuickTime,
// Microsoft Silverlight), as well as online games, presentations, tools for intercepting downloads and
// transferring them to special software-downloaders, etc.
// 		0 = Disabled
// 		1 = Request activation
// 		2 = Active, individual plugins can be overridden
// Состояние плагинов по умолчанию
// Плагин - стороннее программное обеспечение, которое позволяет браузеру обрабатывать веб-контент,
// который он не может воспроизвести самостоятельно. Обычно это проприетарные (несвободные)
// патентованные форматы для обработки аудио- и видео-содержимого (Adobe Flash, Apple QuickTime,
// Microsoft Silverlight), а также онлайн-игры, презентации, средства для перехвата закачек и
// передачи их в специальные программы-даунлоадеры и т.п.
// 		0 = Отключено
// 		1 = Запрашивать активацию
// 		2 = Активно, можно переопределить отдельные плагины
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);

// Flash plugin
// 		0 = Off
// 		1 = Ask
// 		2 = On
// Flash плагин
// 		0 = Выключить
// 		1 = Спросить
// 		2 = Включить
user_pref("plugin.state.flash", 0);

// Java plugin
//		0 = Off
//		1 = Ask
//		2 = On
// Java плагин
//		0 = Выключить
//		1 = Спросить
//		2 = Включить
user_pref("plugin.state.java", 0);

// Scanning Plugin ID (PLID) in directories defined in the Windows registry
// Сканирование Plugin ID (PLID) в каталогах, определенных в реестре Windows
user_pref("plugin.scan.plid.all", false);

// Sending ping
// Отправка пинга
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.max_per_link", 0);
user_pref("browser.send_pings.require_same_host", true);

// Send DNS requests through a proxy using SOCKS 5
// Отправлять DNS-запросы через прокси при использовании SOCKS 5
user_pref("network.proxy.socks_remote_dns", true);

// Redirecting to the provider's page
// Перенаправление на страницу провайдера
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.captive-portal-service.minInterval", 0);

// HTTP Header "Do Not Track"
// Заголовок HTTP "Не Отслеживать"
user_pref("privacy.donottrackheader.enabled", true);

// TOR: hide referrer when leaving a ".onion" domain
// TOR: скрыть referrer при выходе с домена ".onion"
user_pref("network.http.referer.hideOnionSource", true);

// Cache API (Cache storage)
// [NOTE] It is a repository on the user's computer where scripts can store information.
// It is part of the "Service Workers" specification, but can be used without them.
// API Кэша (Хранилище кэша)
// [ЗАМЕТКА] Это хранилище на компьютере пользователя, куда скрипты могут складывать информацию.
// Оно является частью спецификации "Service Workers", но может быть использовано и без них.
user_pref("dom.caches.enabled", false);

// Setting default permissions (resource://app/defaults/permissions) in the Permission Manager
// Установка по умолчанию разрешений (resource://app/defaults/permissions) в Менеджере Разрешений
user_pref("permissions.manager.defaultsUrl", "");

// HTTP authentication credentials dialogs triggered by sub-resources hardens against potential credentials phishing
// 		0 = Don't allow sub-resources to open HTTP authentication credentials dialogs
// 		1 = Don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
// 		2 = Allow sub-resources to open HTTP authentication credentials dialogs
// Диалоги аутентификации HTTP, запускаемые подресурсами, защищают от фишинга потенциальных учетных данных
// 		0 = Не разрешать субресурсам открывать диалоги аутентификации HTTP
// 		1 = Не позволяйте подресурсам из разных источников открывать диалоги аутентификации HTTP
// 		2 = Разрешить субресурсам открывать диалоги аутентификации HTTP
user_pref("network.auth.subresource-http-auth-allow", 1);

// JavaScript
// JavaScript is a programming language; one of the main web technologies.
// At the same time, JavaScript allows you to run malicious code on any computer using two main types of vulnerabilities.
// XSS vulnerabilities are used if the attacker has the ability to embed the executable code on the page and demonstrate it to the user.
// In this case, an attacker could gain user rights and use them for their own purposes.
// Another type of vulnerability is CSRF, when an attacker attempts to force a browser to perform an undesirable action on another site,
// such as transferring funds from an account to an account.
// JavaScript technologies can leak a variety of information about the operating system, browser, monitor size and resolution,
// installed fonts, and other data.
// [NOTE] It is recommended not to enable this setting, and to use addition-type NoScript or uMatrix
// JavaScript
// JavaScript - язык программирования; одна из главных веб-технологий.
// В то же время JavaScript позволяет запускать вредоносный код на любом компьютере при помощи двух основных типов уязвимостей.
// XSS-уязвимости используются, если у атакующей стороны есть возможность внедрить исполняемый код на страницу
// и продемонстрировать ее пользователю.
// В этом случае злоумышленник может получить права данного пользователя и использовать их в своих целях.
// Иной тип уязвимости - CSRF, когда атакующая сторона пытается заставить браузер осуществить нежелательное действие на другом сайте,
// например - перевести средства со счета на счет.
// JavaScript-технологии могут способствовать утечкам разнообразной информации об операционной системе,
// браузере, размере и разрешении монитора, установленных шрифтах и других данных.
// [ЗАМЕТКА] Рекомендуется не включать этот параметр, а использовать дополнение типа NoScript или uMatrix.
// user_pref("javascript.enabled", false);

// DOM (Document Object Model) JavaScript
// Disable JavaScript, executable by the DOM.
// When a web page is loaded, the browser creates its "behavior model"
// and may allow the hypothetical execution of unwanted and potentially dangerous functionality.
// To prevent the following actions:
// 		1. JavaScript can add, change, or delete any HTML element or page attribute.
// 		2. JavaScript can change all CSS styles on a page.
// 		3. JavaScript can respond to any event on the page.
// 		4. JavaScript can create new events on the page.
// JavaScript DOM (Объектная Модель Документа)
// Отключение JavaScript, исполняемого с помощью DOM. Когда веб-страница загружена, браузер создает ее "модель поведения"
// и может позволить гипотетическое исполнение нежелательного и потенциально опасного функционала.
// Для предотвращения следующих действий:
// 		1. JavaScript может добавлять, менять и удалять любые HTML-элементы и атрибуты страницы.
// 		2. JavaScript может менять все стили CSS на странице.
// 		3. JavaScript может реагировать на любые события на странице.
// 		4. JavaScript может создавать новые события на странице.
user_pref("dom.allow_scripts_to_close_windows", true); // Prevent scripts from closing windows / Запрет скриптам закрывать окна
user_pref("dom.disable_window_flip", true); // Prevent scripts from changing the focus of windows (move one to another) / Запрет скриптам менять фокус окон (перемещать одно под другое)
user_pref("dom.disable_window_move_resize", true); // Prevent scripts from resizing and/or moving Windows / Запрет скриптам менять размер и/или перемещать окна
user_pref("dom.disable_window_open_feature.close", true); // Prevent scripts from disabling the window close button / Запрет скриптам отключать кнопку закрытия окна
user_pref("dom.disable_window_open_feature.location", true); // Prevent scripts from hiding the address bar / Запрет скриптам скрывать адресную строку
user_pref("dom.disable_window_open_feature.menubar", true); // Prevent scripts from hiding the menu bar / Запрет скриптам скрывать панель меню
user_pref("dom.disable_window_open_feature.minimizable", true); // Prevent scripts from hiding the minimize window button / Запрет скриптам скрывать кнопку минимизации окна
user_pref("dom.disable_window_open_feature.resizable", true); // Prevent scripts from resizing the window / Запрет скриптам изменять размер окна
user_pref("dom.disable_window_open_feature.status", true); // Prevent scripts from hiding the status bar / Запрет скриптам скрывать панель состояния
user_pref("dom.disable_window_open_feature.personalbar", true); // Prevent scripts from hiding user bookmarks bar / Запрет скриптам скрывать пользовательскую панель закладок
user_pref("dom.disable_window_open_feature.toolbar", true); // Prevent scripts from hiding the navigation bar / Запрет скриптам скрывать панель навигации

// Black ports list
// Prevent connections on certain ports. Many ports are reserved for different services, serving, for example, FTP, POP, etc.
// To prevent the potential risk it is necessary to prohibit access.
// Список черных портов
// Запрет на установку соединений по определенным портам. Многие порты зарезервированы за разными службами, обслуживающими,
// к примеру, FTP, POP и т.п. Для предотвращения потенциального риска необходимо запретить обращения к ним.
user_pref("network.security.ports.banned", "9050,9051,9150,9151,8118,4444");

// OffscreenCanvas
// This mechanism provides the ability to perform rendering through WebGL in a separate thread.
// Running WebGL in a separate thread is done using The offscreen Canvas API added to the Workers system,
// which provides tools for background execution of long JavaScript operations (even when the application is already closed!).
// OffscreenCanvas
// Этот механизм обеспечивает возможность выполнения отрисовки через WebGL в отдельном потоке.
// Запуск WebGL в отдельном потоке производится с помощью API OffscreenCanvas, добавленного в систему Workers,
// предоставляющую средства для фонового выполнения длительных JavaScript-операций (даже при уже закрытом приложении!).
user_pref("gfx.offscreencanvas.enabled", false);

// Synchronization integration
// Thunderbird Sync - remote synchronization of user data. Sync is a set of components that, using a single user account,
// remotely synchronizes data on different devices with Thunderbird installed (bookmarks, history, passwords, form data, open tabs, etc.).
// [WARNING] Unexpected leakage of such data (logins, passwords, cookies) in the process of synchronization,
// transfer them outside the individual device or during storage is incredibly critical and dangerous!
// Интеграция синхронизации
// Thunderbird Sync - удаленной синхронизации пользовательских данных. Sync - набор компонентов,
// который при помощи единого пользовательского аккаунта удаленно синхронизирует данные на разных устройствах
// с установленным Thunderbird (закладки, историю, пароли, данные форм, открытые вкладки и т.п.).
// [ВНИМАНИЕ] Непредвиденная утечка подобных данных (логинов, паролей, cookie) в процессе синхронизации,
// передачи их за пределы отдельного устройства или во время хранения - невероятно критична и опасна!
// user_pref("identity.fxaccounts.auth.uri", "");

// Отключение библиотеки шрифтов Graphite
// Disable Graphite font library
user_pref("gfx.font_rendering.graphite.enabled", false)