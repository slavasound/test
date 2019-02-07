pref("services.sync.addons.ignoreUserEnabledChanges", false);
pref("services.sync.addons.trustedSourceHostnames", "addons.mozilla.org");
pref("services.sync.engine.addons", true);
pref("services.sync.engine.addresses", false);
pref("services.sync.engine.addresses.available", false);
pref("services.sync.engine.bookmarks", true);
pref("services.sync.engine.bookmarks.buffer", false);
pref("services.sync.engine.bookmarks.repair.enabled", true);
pref("services.sync.engine.bookmarks.validation.enabled", true);
pref("services.sync.engine.bookmarks.validation.interval", 86400); // 24 hours in seconds
pref("services.sync.engine.bookmarks.validation.maxRecords", 1000);
pref("services.sync.engine.bookmarks.validation.percentageChance", 10);
pref("services.sync.engine.creditcards", false);
pref("services.sync.engine.creditcards.available", false);
pref("services.sync.engine.history", true);
pref("services.sync.engine.passwords", true);
pref("services.sync.engine.passwords.validation.enabled", true);
pref("services.sync.engine.passwords.validation.interval", 86400); // 24 hours in seconds
pref("services.sync.engine.passwords.validation.maxRecords", 1000);
pref("services.sync.engine.passwords.validation.percentageChance", 10);
pref("services.sync.engine.prefs", true);
pref("services.sync.engine.tabs", true);
pref("services.sync.engine.tabs.filteredUrls", "^(about:.*|resource:.*|chrome:.*|wyciwyg:.*|file:.*|blob:.*|moz-extension:.*)$");
pref("services.sync.fxa.privacyURL", "https://accounts.firefox.com/legal/privacy");
pref("services.sync.fxa.termsURL", "https://accounts.firefox.com/legal/terms");
pref("services.sync.lastversion", "firstrun");
pref("services.sync.log.appender.console", "Fatal");
pref("services.sync.log.appender.dump", "Error");
pref("services.sync.log.appender.file.level", "Trace");
pref("services.sync.log.appender.file.logOnError", true);
pref("services.sync.log.appender.file.logOnSuccess", true);
pref("services.sync.log.appender.file.maxErrorAge", 864000); // 10 days
pref("services.sync.log.cryptoDebug", false);
pref("services.sync.log.logger", "Debug");
pref("services.sync.log.logger.engine", "Debug");
pref("services.sync.maxResyncs", 5);
pref("services.sync.scheduler.activeInterval", 600);   // 10 minutes
pref("services.sync.scheduler.fxa.singleDeviceInterval", 3600); // 1 hour
pref("services.sync.scheduler.idleInterval", 3600);  // 1 hour
pref("services.sync.scheduler.idleTime", 300);   // 5 minutes
pref("services.sync.scheduler.immediateInterval", 90);    // 1.5 minutes
pref("services.sync.sendVersionInfo", true);
pref("services.sync.telemetry.maxPayloadCount", 500);
pref("services.sync.telemetry.submissionInterval", 43200); // 12 hours in seconds