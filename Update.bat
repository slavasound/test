:: Script to update
@ECHO OFF & SETLOCAL DisableDelayedExpansion
TITLE Update.bat

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: FOR FIREFOX
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/app/profile/channel-prefs.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/app/profile/firefox.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/client/webide/preferences/webide.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/locales/en-US/firefox-l10n.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/branding/unofficial/pref/firefox-branding.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/branding/official/pref/firefox-branding.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/branding/nightly/pref/firefox-branding.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/branding/aurora/pref/firefox-branding.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/startup/preferences/devtools-startup.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/client/preferences/devtools-client.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/client/preferences/debugger.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/testing/marionette/prefs/marionette.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/services/sync/services-sync.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/security/manager/ssl/security-prefs.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/modules/libpref/init/all.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/shared/preferences/devtools-shared.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/toolkit/components/telemetry/datareporting-prefs.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/toolkit/components/telemetry/healthreport-prefs.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/modules/libpref/init/StaticPrefList.h
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: FOR FENNEC
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/mobile/android/app/mobile.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/mobile/android/app/geckoview-prefs.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/mobile/android/locales/en-US/mobile-l10n.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/mobile/android/installer/mobile-l10n.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/modules/libpref/init/StaticPrefList.h
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/security/manager/ssl/security-prefs.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/modules/libpref/init/all.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/shared/preferences/devtools-shared.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/toolkit/components/telemetry/datareporting-prefs.js
:: https://raw.githubusercontent.com/mozilla/gecko-dev/master/toolkit/components/telemetry/healthreport-prefs.js
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: FOR THUNDERBIRD
:: https://raw.githubusercontent.com/mozilla/releases-comm-central/master/mail/components/im/all-im.js
:: https://raw.githubusercontent.com/mozilla/releases-comm-central/master/mail/locales/en-US/all-l10n.js
:: https://raw.githubusercontent.com/mozilla/releases-comm-central/master/mail/app/profile/all-thunderbird.js
:: https://raw.githubusercontent.com/mozilla/releases-comm-central/master/chat/chat-prefs.js
:: https://raw.githubusercontent.com/mozilla/releases-comm-central/master/editor/ui/composer.js
:: debugger.js
:: devtools.js
:: devtools-startup-prefs.js
:: greprefs.js
:: https://raw.githubusercontent.com/mozilla/releases-comm-central/master/mailnews/mailnews.js
:: https://raw.githubusercontent.com/mozilla/releases-comm-central/master/mailnews/extensions/mdn/content/mdn.js
:: https://raw.githubusercontent.com/mozilla/releases-comm-central/master/mailnews/extensions/smime/content/smime.js
:: https://raw.githubusercontent.com/mozilla/releases-comm-central/master/mail/branding/thunderbird/thunderbird-branding.js
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



ECHO Updating Firefox Preferences...

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/app/profile/channel-prefs.js', 'prefs/firefox/channel-prefs.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/app/profile/firefox.js', 'prefs/firefox/firefox.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/client/webide/preferences/webide.js', 'prefs/firefox/webide.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/locales/en-US/firefox-l10n.js', 'prefs/firefox/firefox-l10n.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/branding/official/pref/firefox-branding.js', 'prefs/firefox/firefox-branding.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/startup/preferences/devtools-startup.js', 'prefs/firefox/devtools-startup.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/client/preferences/devtools-client.js', 'prefs/firefox/devtools-client.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/client/preferences/debugger.js', 'prefs/firefox/debugger.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/testing/marionette/prefs/marionette.js', 'prefs/firefox/marionette.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/services/sync/services-sync.js', 'prefs/firefox/services-sync.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/security/manager/ssl/security-prefs.js', 'prefs/firefox/security-prefs.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/modules/libpref/init/all.js', 'prefs/firefox/all.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/shared/preferences/devtools-shared.js', 'prefs/firefox/devtools-shared.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/toolkit/components/telemetry/datareporting-prefs.js', 'prefs/firefox/datareporting-prefs.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/toolkit/components/telemetry/healthreport-prefs.js', 'prefs/firefox/healthreport-prefs.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/modules/libpref/init/StaticPrefList.h', 'prefs/firefox/StaticPrefList.h')"

ECHO Updating Fennec Preferences...

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/mobile/android/app/mobile.js', 'prefs/firefox/mobile.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/mobile/android/app/geckoview-prefs.js', 'prefs/firefox/geckoview-prefs.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/mobile/android/locales/en-US/mobile-l10n.js', 'prefs/firefox/mobile-l10n.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/mobile/android/installer/mobile-l10n.js', 'prefs/firefox/mobile-l10n.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/modules/libpref/init/StaticPrefList.h', 'prefs/firefox/StaticPrefList.h')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/security/manager/ssl/security-prefs.js', 'prefs/firefox/security-prefs.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/modules/libpref/init/all.js', 'prefs/firefox/all.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/devtools/shared/preferences/devtools-shared.js', 'prefs/firefox/devtools-shared.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/toolkit/components/telemetry/datareporting-prefs.js', 'prefs/firefox/datareporting-prefs.js')"

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/toolkit/components/telemetry/healthreport-prefs.js', 'prefs/firefox/healthreport-prefs.js')"

ECHO Updating Policies.jsm
powershell -Command "(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/mozilla/gecko-dev/master/browser/components/enterprisepolicies/Policies.jsm', 'prefs/Policies.jsm')"

ECHO Updating Thunderbird Preferences...
:: enter text
ECHO:
PAUSE