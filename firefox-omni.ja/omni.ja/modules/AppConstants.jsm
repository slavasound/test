/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

ChromeUtils.import("resource://gre/modules/XPCOMUtils.jsm");
ChromeUtils.defineModuleGetter(this, "Services", "resource://gre/modules/Services.jsm");
ChromeUtils.defineModuleGetter(this, "AddonManager", "resource://gre/modules/AddonManager.jsm");

this.EXPORTED_SYMBOLS = ["AppConstants"];

// Immutable for export.
this.AppConstants = Object.freeze({
  // See this wiki page for more details about channel specific build
  // defines: https://wiki.mozilla.org/Platform/Channel-specific_build_defines
  NIGHTLY_BUILD:
//@line 23 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 25 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  RELEASE_OR_BETA:
//@line 28 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 32 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  EARLY_BETA_OR_EARLIER:
//@line 37 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 39 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  ACCESSIBILITY:
//@line 42 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 46 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  // Official corresponds, roughly, to whether this build is performed
  // on Mozilla's continuous integration infrastructure. You should
  // disable developer-only functionality when this flag is set.
  MOZILLA_OFFICIAL:
//@line 52 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 56 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_OFFICIAL_BRANDING:
//@line 59 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 63 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_DEV_EDITION:
//@line 68 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 70 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_SERVICES_HEALTHREPORT:
//@line 73 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 77 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_DATA_REPORTING:
//@line 80 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 84 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_SANDBOX:
//@line 87 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 91 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_CONTENT_SANDBOX:
//@line 94 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 98 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_TELEMETRY_REPORTING:
//@line 101 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 105 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_TELEMETRY_ON_BY_DEFAULT:
//@line 110 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 112 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_UPDATER:
//@line 115 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 119 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_SWITCHBOARD:
//@line 124 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 126 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_WEBRTC:
//@line 129 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 133 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_WIDGET_GTK:
//@line 136 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 140 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  XP_UNIX:
//@line 143 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 147 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

//@line 150 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  platform:
//@line 152 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  "linux",
//@line 164 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  isPlatformAndVersionAtLeast(platform, version) {
    let platformVersion = Services.sysinfo.getProperty("version");
    return platform == this.platform &&
           Services.vc.compare(platformVersion, version) >= 0;
  },

  isPlatformAndVersionAtMost(platform, version) {
    let platformVersion = Services.sysinfo.getProperty("version");
    return platform == this.platform &&
           Services.vc.compare(platformVersion, version) <= 0;
  },

  MOZ_CRASHREPORTER:
//@line 179 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 183 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_MAINTENANCE_SERVICE:
//@line 188 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 190 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  DEBUG:
//@line 195 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 197 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  ASAN:
//@line 202 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 204 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  ASAN_REPORTER:
//@line 209 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 211 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_GRAPHENE:
//@line 216 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 218 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_SYSTEM_NSS:
//@line 223 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 225 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_PLACES:
//@line 228 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 232 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_REQUIRE_SIGNING:
//@line 235 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 239 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  get MOZ_UNSIGNED_SCOPES() {
    let result = 0;
//@line 248 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
    return result;
  },

  MOZ_ALLOW_LEGACY_EXTENSIONS:
//@line 255 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 257 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MENUBAR_CAN_AUTOHIDE:
//@line 260 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 264 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_ANDROID_HISTORY:
//@line 269 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 271 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_TOOLKIT_SEARCH:
//@line 274 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 278 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_GECKO_PROFILER:
//@line 281 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  true,
//@line 285 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_ANDROID_ACTIVITY_STREAM:
//@line 290 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 292 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_ANDROID_MOZILLA_ONLINE:
//@line 297 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  false,
//@line 299 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  DLL_PREFIX: "lib",
  DLL_SUFFIX: ".so",

  MOZ_APP_NAME: "firefox",
  MOZ_APP_VERSION: "64.0.2",
  MOZ_APP_VERSION_DISPLAY: "64.0.2",
  MOZ_BUILD_APP: "browser",
  MOZ_MACBUNDLE_NAME: "Firefox.app",
  MOZ_UPDATE_CHANNEL: "release",
  INSTALL_LOCALE: "en-US",
  MOZ_WIDGET_TOOLKIT: "gtk3",
  ANDROID_PACKAGE_NAME: "org.mozilla.firefox",

  DEBUG_JS_MODULES: "",

  MOZ_BING_API_CLIENTID: "no-bing-api-clientid",
  MOZ_BING_API_KEY: "no-bing-api-key",
  MOZ_GOOGLE_API_KEY: "AIzaSyD_Drzahe4dBzGCZ9ArvowCvrPx_yFrlCM",
  MOZ_MOZILLA_API_KEY: "7e40f68c-7938-4c5d-9f95-e61647c213eb",

  BROWSER_CHROME_URL: "chrome://browser/content/browser.xul",

  // URL to the hg revision this was built from (e.g.
  // "https://hg.mozilla.org/mozilla-central/rev/6256ec9113c1")
  // On unofficial builds, this is an empty string.
//@line 328 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
  SOURCE_REVISION_URL: "https://hg.mozilla.org/releases/mozilla-release/rev/c58ea2229c337e9981ab9d3650b04fd3d249b141",

  HAVE_USR_LIB64_DIR:
//@line 334 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
    false,
//@line 336 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  HAVE_SHELL_SERVICE:
//@line 339 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
    true,
//@line 343 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"

  MOZ_CODE_COVERAGE:
//@line 348 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
    false,
//@line 350 "/builds/worker/workspace/build/src/toolkit/modules/AppConstants.jsm"
});
