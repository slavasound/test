// ===| General |==============================================================
pref("startup.homepage_welcome_url","http://www.palemoon.org/firstrun.shtml");
pref("app.vendorURL", "http://www.palemoon.org/");
// User Interface
pref("browser.identity.ssl_domain_display", 1); //show domain verified SSL (blue)
// ============================================================================
// ===| Application Update Service |===========================================
pref("app.update.url", "https://aus.palemoon.org/?application=%PRODUCT%&version=%VERSION%&arch=%BUILD_TARGET%&buildid=%BUILD_ID%&channel=%CHANNEL%");
// The time interval between the downloading of mar file chunks in the
// background (in seconds)
pref("app.update.download.backgroundInterval", 600);
// Give the user x seconds to react before showing the big UI. default=48 hours
pref("app.update.promptWaitTime", 172800);
// ============================================================================
// ===| Add-ons Manager |======================================================
// Add-on window fixes
pref("extensions.getMoreThemesURL", "https://addons.palemoon.org/integration/addon-manager/external/themes");
// Extensions Blocklist
pref("extensions.blocklist.url","http://blocklist.palemoon.org/%VERSION%/blocklist.xml");
pref("extensions.blocklist.itemURL", "http://blocklist.palemoon.org/info/?id=%blockID%");
// Dictionary URL
pref("browser.dictionaries.download.url", "https://addons.mozilla.org/%LOCALE%/firefox/dictionaries/");
pref("extensions.update.autoUpdateDefault", true); // Automatically update extensions by default
pref("extensions.getAddons.maxResults", 10);
pref("extensions.getAddons.cache.enabled", false);
// ============================================================================
// ===| DOM |==================================================================
// Set max script runtimes to sane values
pref("dom.max_chrome_script_run_time", 90); //Some addons need ample time!
pref("dom.max_script_run_time", 20); //Should be plenty for a page script to do what it needs
// ============================================================================
// ===| Plugins |==============================================================
pref("plugin.default.state", 2); //Allow plugins to run by default
pref("plugin.expose_full_path", true); //Security: expose the full path to the plugin
pref("dom.ipc.plugins.timeoutSecs", 20);
// ============================================================================
// ===| Graphics |=============================================================
pref("nglayout.initialpaint.delay", 300);
// ============================================================================
// ===| Image |================================================================
pref("image.mem.max_ms_before_yield", 50);
pref("image.mem.decode_bytes_at_a_time", 65536); //larger chunks
// ============================================================================
// ===| Sync |=================================================================
// Pale Moon Sync server URLs
pref("services.sync.serverURL","https://pmsync.palemoon.org/sync/index.php/");
pref("services.sync.jpake.serverURL","https://keyserver.palemoon.org/");
pref("services.sync.termsURL", "http://www.palemoon.org/sync/terms.shtml");
pref("services.sync.privacyURL", "http://www.palemoon.org/sync/privacy.shtml");
pref("services.sync.statusURL", "https://pmsync.palemoon.org/status/");
pref("services.sync.syncKeyHelpURL", "http://www.palemoon.org/sync/help/recoverykey.shtml");
pref("services.sync.APILevel", 1); // FSyncMS doesn't support 'info/configuration' requests
// ============================================================================
// ===| Misc. |================================================================
// Make sure we shortcut out of a11y to save walking unnecessary code
pref("accessibility.force_disabled", 1);
// ============================================================================
// ===| DevTools |=============================================================
// Number of usages of the web console or scratchpad.
// If this is less than 5, then pasting code into the web console or scratchpad is disabled
pref("devtools.selfxss.count", 100);
// ============================================================================
// ===| Site Specific User Agent Overrides |===================================
// Special-case AMO
// We send the native UA slice now, since they no longer offer any compatible extensions for us.
// This will result in an "only with Firefox" message which suits us fine, because it's the truth.
pref("general.useragent.override.addons.mozilla.org","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:4.1) Goanna/20170101 PaleMoon/28.3.0");
// Required for domains that have proven unresponsive to requests from users
pref("general.useragent.override.live.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Firefox/52.9 (Pale Moon)");
pref("general.useragent.override.msn.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Firefox/52.9 (Pale Moon)");
pref("general.useragent.override.bing.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Firefox/52.9 (Pale Moon)");
pref("general.useragent.override.outlook.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Firefox/52.9 (Pale Moon)");
pref("general.useragent.override.web.de","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Firefox/52.9 (Pale Moon)");
pref("general.useragent.override.aol.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Firefox/52.9 (Pale Moon)");
pref("general.useragent.override.calendar.yahoo.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Firefox/52.9 (Pale Moon)");
pref("general.useragent.override.google.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Goanna/4.1 Firefox/52.9 PaleMoon/28.3.0");
pref("general.useragent.override.googlevideos.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.9) Gecko/20100101 Goanna/4.1 Firefox/38.9 PaleMoon/28.3.0");
pref("general.useragent.override.gstatic.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:31.9) Gecko/20100101 Goanna/4.1 Firefox/31.9 PaleMoon/28.3.0");
pref("general.useragent.override.yahoo.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:99.9) Gecko/20100101 Firefox/99.9 (Pale Moon)");
pref("general.useragent.override.youtube.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0 PaleMoon/28.3.0");
pref("general.useragent.override.gaming.youtube.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0");
pref("general.useragent.override.dropbox.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:99.9) Gecko/20100101 Firefox/99.9 (Pale Moon)");
pref("general.useragent.override.players.brightcove.net","Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko");
// The never-ending Facebook debacle...
pref("general.useragent.override.facebook.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:99.9) Gecko/20100101 Firefox/99.9 (Pale Moon)");
pref("general.useragent.override.fbcdn.net","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:99.9) Gecko/20100101 Firefox/99.9 (Pale Moon)");
// UA-Sniffing domains below are pending responses from their operators - temp workaround
pref("general.useragent.override.chase.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Firefox/52.9");
// For Amazon Prime videos
pref("general.useragent.override.www.amazon.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:45.9) Gecko/20100101 Firefox/45.9 (Pale Moon)");
// Soundcloud uses Firefox-exclusive combinations of code. Never pass Firefox slice.
pref("general.useragent.override.soundcloud.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:4.1) Goanna/20170101 PaleMoon/28.3.0");
// Daily motion only likes strict Firefox UAs
pref("general.useragent.override.dailymotion.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0");
// The following requires native mode. Or it blocks.. "too old firefox", breakage, etc.
pref("general.useragent.override.deviantart.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:4.1) Goanna/20170101 PaleMoon/28.3.0");
pref("general.useragent.override.deviantart.net","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:4.1) Goanna/20170101 PaleMoon/28.3.0");
pref("general.useragent.override.altibox.dk","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:4.1) Goanna/20170101 PaleMoon/28.3.0");
pref("general.useragent.override.altibox.no","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:4.1) Goanna/20170101 PaleMoon/28.3.0");
// UA-Sniffing domains below have indicated no interest in supporting Pale Moon (BOO!)
pref("general.useragent.override.humblebundle.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Firefox/52.9 (Pale Moon)");
pref("general.useragent.override.privat24.ua","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0");
pref("general.useragent.override.citi.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:57.0) Gecko/20100101 Firefox/57.0 (Pale Moon)");
pref("general.useragent.override.netflix.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:45.9) Gecko/20100101 Firefox/45.9");
pref("general.useragent.override.netflximg.net","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:45.9) Gecko/20100101 Firefox/45.9");
// UA-sniffing domains that are "app/vendor-specific" and do not like Pale Moon
pref("general.useragent.override.web.whatsapp.com","Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36");
// The following domains do not like the Goanna slice
pref("general.useragent.override.hitbox.tv","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Firefox/52.9");
pref("general.useragent.override.yuku.com","Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.9) Gecko/20100101 Firefox/52.9 PaleMoon/28.3.0");
// ============================================================================
//@line 5 "d:\mozdev\UXP\application\palemoon\branding\official\pref\palemoon-branding.js"
pref("startup.homepage_override_url","http://www.palemoon.org/releasenotes.shtml");
pref("app.releaseNotesURL", "http://www.palemoon.org/releasenotes.shtml");
// Enable Firefox compatmode by default.
pref("general.useragent.compatMode", 2);
pref("general.useragent.compatMode.gecko", true);
pref("general.useragent.compatMode.firefox", true);
// ========================= updates ========================
//@line 16 "d:\mozdev\UXP\application\palemoon\branding\official\pref\palemoon-branding.js"
// Updates enabled
pref("app.update.enabled", true);
pref("app.update.cert.checkAttributes", true);
// Interval: Time between checks for a new version (in seconds) -- 2 days for Pale Moon
pref("app.update.interval", 172800);
pref("app.update.promptWaitTime", 86400);
// URL user can browse to manually if for some reason all update
// installation attempts fail.
pref("app.update.url.manual", "http://www.palemoon.org/");
// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard. 
pref("app.update.url.details", "http://www.palemoon.org/releasenotes.shtml");
