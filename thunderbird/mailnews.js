pref("Feeds.logging.console", "Info");
pref("browser.cache.memory.capacity",      200000); // 200 MB = 8*25 MB
pref("browser.cache.memory.max_entry_size", 25000); //  25 MB
pref("dom.xhr.standard_content_type_normalization", false);
pref("ldap_2.autoComplete.directoryServer", "");
pref("ldap_2.autoComplete.useDirectory", false);
pref("ldap_2.servers.default.attrmap.BirthDay", "birthday");
pref("ldap_2.servers.default.attrmap.BirthMonth", "birthmonth");
pref("ldap_2.servers.default.attrmap.BirthYear", "birthyear");
pref("ldap_2.servers.default.attrmap.CellularNumber", "mobile,cellphone,carphone");
pref("ldap_2.servers.default.attrmap.Company", "o,company");
pref("ldap_2.servers.default.attrmap.Custom1", "mozillaCustom1,custom1");
pref("ldap_2.servers.default.attrmap.Custom2", "mozillaCustom2,custom2");
pref("ldap_2.servers.default.attrmap.Custom3", "mozillaCustom3,custom3");
pref("ldap_2.servers.default.attrmap.Custom4", "mozillaCustom4,custom4");
pref("ldap_2.servers.default.attrmap.Department", "ou,department,departmentnumber,orgunit");
pref("ldap_2.servers.default.attrmap.DisplayName", "cn,commonname");
pref("ldap_2.servers.default.attrmap.FaxNumber", "facsimiletelephonenumber,fax");
pref("ldap_2.servers.default.attrmap.FirstName", "givenName");
pref("ldap_2.servers.default.attrmap.HomeAddress2", "mozillaHomeStreet2");
pref("ldap_2.servers.default.attrmap.HomeAddress", "mozillaHomeStreet");
pref("ldap_2.servers.default.attrmap.HomeCity", "mozillaHomeLocalityName");
pref("ldap_2.servers.default.attrmap.HomeCountry", "mozillaHomeCountryName");
pref("ldap_2.servers.default.attrmap.HomePhone", "homePhone");
pref("ldap_2.servers.default.attrmap.HomeState", "mozillaHomeState");
pref("ldap_2.servers.default.attrmap.HomeZipCode", "mozillaHomePostalCode");
pref("ldap_2.servers.default.attrmap.JobTitle", "title");
pref("ldap_2.servers.default.attrmap.LastModifiedDate", "modifytimestamp");
pref("ldap_2.servers.default.attrmap.LastName", "sn,surname");
pref("ldap_2.servers.default.attrmap.NickName", "mozillaNickname,xmozillanickname");
pref("ldap_2.servers.default.attrmap.Notes", "description,notes");
pref("ldap_2.servers.default.attrmap.PagerNumber", "pager,pagerphone");
pref("ldap_2.servers.default.attrmap.PreferMailFormat", "mozillaUseHtmlMail,xmozillausehtmlmail");
pref("ldap_2.servers.default.attrmap.PrimaryEmail", "mail");
pref("ldap_2.servers.default.attrmap.SecondEmail", "mozillaSecondEmail,xmozillasecondemail");
pref("ldap_2.servers.default.attrmap.WebPage1", "mozillaWorkUrl,workurl,labeledURI");
pref("ldap_2.servers.default.attrmap.WebPage2", "mozillaHomeUrl,homeurl");
pref("ldap_2.servers.default.attrmap.WorkAddress2", "mozillaWorkStreet2");
pref("ldap_2.servers.default.attrmap.WorkAddress", "street,streetaddress,postOfficeBox");
pref("ldap_2.servers.default.attrmap.WorkCity", "l,locality");
pref("ldap_2.servers.default.attrmap.WorkCountry", "c,countryname");
pref("ldap_2.servers.default.attrmap.WorkPhone", "telephoneNumber");
pref("ldap_2.servers.default.attrmap.WorkState", "st,region");
pref("ldap_2.servers.default.attrmap.WorkZipCode", "postalCode,zip");
pref("ldap_2.servers.default.attrmap._AimScreenName", "nsAIMid,nscpaimscreenname");
pref("ldap_2.servers.history.description", "chrome://messenger/locale/addressbook/addressBook.properties");
pref("ldap_2.servers.history.dirType", 2);
pref("ldap_2.servers.history.filename", "history.mab");
pref("ldap_2.servers.history.isOffline", false);
pref("ldap_2.servers.history.position", 2);
pref("ldap_2.servers.pab.description", "chrome://messenger/locale/addressbook/addressBook.properties");
pref("ldap_2.servers.pab.dirType", 2);
pref("ldap_2.servers.pab.filename", "abook.mab");
pref("ldap_2.servers.pab.isOffline", false);
pref("ldap_2.servers.pab.position", 1);
pref("ldap_2.user_id", 0);
pref("ldap_2.version", 3); /* Update kCurrentListVersion in include/dirprefs.h if you change this */
pref("mail.SpellCheckBeforeSend", false);
pref("mail.account.lastKey", 0);
pref("mail.accountmanager.accounts", "");
pref("mail.adaptivefilters.junk_threshold", 90);
pref("mail.addr_book.autocompletequery.format", "(or(DisplayName,c,@V)(FirstName,c,@V)(LastName,c,@V)(NickName,c,@V)(PrimaryEmail,c,@V)(SecondEmail,c,@V)(and(IsMailList,=,TRUE)(Notes,c,@V)))");
pref("mail.addr_book.autocompletequery.format.phonetic", "(or(DisplayName,c,@V)(FirstName,c,@V)(LastName,c,@V)(NickName,c,@V)(PrimaryEmail,c,@V)(SecondEmail,c,@V)(and(IsMailList,=,TRUE)(Notes,c,@V))(PhoneticFirstName,c,@V)(PhoneticLastName,c,@V))");
pref("mail.addr_book.displayName.autoGeneration", true);
pref("mail.addr_book.displayName.lastnamefirst", "chrome://messenger/locale/messenger.properties");
pref("mail.addr_book.lastnamefirst", 0);
pref("mail.addr_book.mapit_url.1.format", "chrome://messenger-region/locale/region.properties");
pref("mail.addr_book.mapit_url.1.name", "chrome://messenger-region/locale/region.properties");
pref("mail.addr_book.mapit_url.2.format", "chrome://messenger-region/locale/region.properties");
pref("mail.addr_book.mapit_url.2.name", "chrome://messenger-region/locale/region.properties");
pref("mail.addr_book.mapit_url.3.format", "chrome://messenger-region/locale/region.properties");
pref("mail.addr_book.mapit_url.3.name", "chrome://messenger-region/locale/region.properties");
pref("mail.addr_book.mapit_url.4.format", "chrome://messenger-region/locale/region.properties");
pref("mail.addr_book.mapit_url.4.name", "chrome://messenger-region/locale/region.properties");
pref("mail.addr_book.mapit_url.5.format", "chrome://messenger-region/locale/region.properties");
pref("mail.addr_book.mapit_url.5.name", "chrome://messenger-region/locale/region.properties");
pref("mail.addr_book.mapit_url.format", "chrome://messenger-region/locale/region.properties");
pref("mail.addr_book.quicksearchquery.format", "(or(DisplayName,c,@V)(FirstName,c,@V)(LastName,c,@V)(NickName,c,@V)(PrimaryEmail,c,@V)(SecondEmail,c,@V)(and(IsMailList,=,TRUE)(Notes,c,@V))(Company,c,@V)(Department,c,@V)(JobTitle,c,@V)(WebPage1,c,@V)(WebPage2,c,@V))");
pref("mail.addr_book.quicksearchquery.format.phonetic", "(or(DisplayName,c,@V)(FirstName,c,@V)(LastName,c,@V)(NickName,c,@V)(PrimaryEmail,c,@V)(SecondEmail,c,@V)(and(IsMailList,=,TRUE)(Notes,c,@V))(Company,c,@V)(Department,c,@V)(JobTitle,c,@V)(WebPage1,c,@V)(WebPage2,c,@V)(PhoneticFirstName,c,@V)(PhoneticLastName,c,@V))");
pref("mail.addr_book.show_phonetic_fields", "chrome://messenger/locale/messenger.properties");
pref("mail.addr_book.view.startupURI", "moz-abdirectory://?");
pref("mail.addr_book.view.startupURIisDefault", true);
pref("mail.advance_on_spacebar", true);
pref("mail.append_preconfig_smtpservers.version", 1);
pref("mail.autoComplete.commentColumn", 0);
pref("mail.autoComplete.highlightNonMatches", true);
pref("mail.biff.add_interval_jitter", true);
pref("mail.biff.alert.preview_length", 40);
pref("mail.biff.alert.show_preview", true);
pref("mail.biff.alert.show_sender",  true);
pref("mail.biff.alert.show_subject", true);
pref("mail.biff.play_sound", true);
pref("mail.biff.play_sound.type", 0);
pref("mail.biff.play_sound.url", "");
pref("mail.biff.show_alert", true);
pref("mail.biff.use_system_alert", true);
pref("mail.citation_color",                 "#000000"); // quoted color
pref("mail.close_message_window.on_delete", false);
pref("mail.collect_addressbook", "moz-abmdbdirectory://history.mab");
pref("mail.collect_email_address_outgoing", true);
pref("mail.compose.add_undisclosed_recipients", true);
pref("mail.compose.attach_http_images", false);
pref("mail.compose.autosave", true);
pref("mail.compose.autosaveinterval", 5); // in minutes
pref("mail.compose.default_to_paragraph", false);
pref("mail.compose.dontWarnMail2Newsgroup", false);
pref("mail.compose.other.header", "");
pref("mail.content_disposition_type", 1);
pref("mail.correct_threading",              true);  // if true, makes sure threading works correctly always (see bug 181446)
pref("mail.db.idle_limit", 300000);
pref("mail.db.max_open", 30);
pref("mail.db_timestamp_leeway", 4000);
pref("mail.default_html_action", 0);          // 0=ask, 1=plain, 2=html, 3=both
pref("mail.default_sendlater_uri", "mailbox://nobody@Local%20Folders/Unsent%20Messages");
pref("mail.delete_matches_sort_order", false);
pref("mail.display_glyph", true);   // TXT->HTML :-) etc. in viewer
pref("mail.display_struct", true);  // TXT->HTML *bold* etc. in viewer; ditto
pref("mail.dsn.always_request_on", false);
pref("mail.dsn.request_never_on", false);              // DSN request is not sent with NEVER option
pref("mail.dsn.request_on_delay_on", true);            // DSN request is sent with DELAY option
pref("mail.dsn.request_on_failure_on", true);          // DSN request is sent with FAILURE option
pref("mail.dsn.request_on_success_on", true);          // DSN request is sent with SUCCESS option
pref("mail.dsn.ret_full_on", true);                    // DSN request is sent with RET FULL option
pref("mail.enable_autocomplete", true);
pref("mail.feed.play_sound", false);
pref("mail.file_attach_binary",             false);
pref("mail.fixed_width_messages",           true);
pref("mail.forward_add_extension", true); // add .eml extension when forwarding as attachment
pref("mail.forward_message_mode", 0); // 0=default as attachment 2=forward as inline with attachments, (obsolete 4.x value)1=forward as quoted (mapped to 2 in mozilla)
pref("mail.forward_subject_prefix", "Fwd");
pref("mail.html_compose",                   true);
pref("mail.identity.default.archive_enabled", true);
pref("mail.identity.default.archive_granularity", 1);
pref("mail.identity.default.archive_keep_folder_structure", false);
pref("mail.identity.default.archives_folder_picker_mode", "0");
pref("mail.identity.default.auto_quote", true);
pref("mail.identity.default.autocompleteToMyDomain", false);
pref("mail.identity.default.bcc_list", "");
pref("mail.identity.default.bcc_others", false);
pref("mail.identity.default.bcc_self", false);
pref("mail.identity.default.compose_html", true);
pref("mail.identity.default.directoryServer", "");
pref("mail.identity.default.draft_folder", "mailbox://nobody@Local%20Folders/Drafts");
pref("mail.identity.default.fcc", true);
pref("mail.identity.default.fcc_folder", "mailbox://nobody@Local%20Folders/Sent");
pref("mail.identity.default.fcc_reply_follows_parent", false);
pref("mail.identity.default.headers", "");
pref("mail.identity.default.overrideGlobal_Pref", false);
pref("mail.identity.default.reply_on_top", 0); // 0=bottom 1=top 2=select
pref("mail.identity.default.sig_bottom", true); // true=below quoted false=above quoted
pref("mail.identity.default.sig_on_fwd", false); // Include signature on fwd?
pref("mail.identity.default.sig_on_reply", true); // Include signature on re?
pref("mail.identity.default.stationery_folder", "mailbox://nobody@Local%20Folders/Templates");
pref("mail.identity.default.suppress_signature_separator", false);
pref("mail.identity.default.valid", true);
pref("mail.imap.auto_unsubscribe_from_noselect_folders",    true);
pref("mail.imap.check_deleted_before_expunge", false);
pref("mail.imap.chunk_add",                 8192);
pref("mail.imap.chunk_fast",                2);
pref("mail.imap.chunk_ideal",               4);
pref("mail.imap.chunk_size",                65536);
pref("mail.imap.delegateOtherUsersFolders", false);
pref("mail.imap.expunge_after_delete",      false);
pref("mail.imap.expunge_option",            0);
pref("mail.imap.expunge_threshold_number",  20);
pref("mail.imap.filter_on_new", true);
pref("mail.imap.force_select_detect", "\"name\" \"Email Mx\",\"vendor\" \"Openwave Messaging\"");
pref("mail.imap.hdr_chunk_size", 200);
pref("mail.imap.hide_other_users",          false);
pref("mail.imap.hide_unused_namespaces",    true);
pref("mail.imap.mime_parts_on_demand",      true);
pref("mail.imap.mime_parts_on_demand_threshold", 30000);
pref("mail.imap.min_chunk_size_threshold",  98304);
pref("mail.imap.qos", 0);
pref("mail.imap.use_literal_plus",          true);
pref("mail.imap.use_status_for_biff", true);
pref("mail.incorporate.return_receipt", 0);            // 0: Inbox/filter 1: Sent folder
pref("mail.inline_attachments",             true);
pref("mail.label_ascii_only_mail_as_us_ascii", false);
pref("mail.mdn.report.enabled", true);                 // false: Never send true: Send sometimes
pref("mail.mdn.report.not_in_to_cc", 2);               // 0: Never 1: Always 2: Ask me
pref("mail.mdn.report.other", 2);                      // 0: Never 1: Always 2: Ask me 3: Denial
pref("mail.mdn.report.outside_domain", 2);             // 0: Never 1: Always 2: Ask me
pref("mail.nntp.qos", 0);
pref("mail.operate_on_msgs_in_collapsed_threads", false);
pref("mail.override_list_reply_to", true);
pref("mail.pane_config.dynamic",            0);
pref("mail.password_protect_local_cache", false);
pref("mail.pgpmime.addon_url", "https://addons.mozilla.org/addon/enigmail/");
pref("mail.phishing.detection.enabled", true); // enable / disable phishing detection for link clicks
pref("mail.pop3.deleteFromServerOnMove",    false);
pref("mail.pop3.qos", 0);
pref("mail.prompt_purge_threshhold",       true);
pref("mail.purge.ask",                     true);
pref("mail.purge.min_delay", 480);
pref("mail.purge.timer_interval", 5);
pref("mail.purge_threshhold_mb", 20);
pref("mail.quota.mainwindow_threshold.critical", 95); // when it gets red
pref("mail.quota.mainwindow_threshold.show", 75); // in percent. when the quota meter starts showing up at all. decrease this for it to be more than a warning.
pref("mail.quota.mainwindow_threshold.warning", 80); // when it gets yellow
pref("mail.quoteasblock",                   true); // use HTML-style quoting for quoting plain text
pref("mail.quoted_graphical",               true); // use HTML-style quoting for displaying plain text
pref("mail.quoted_size",                    0); // 0=normal, 1=big, 2=small
pref("mail.quoted_style",                   0); // 0=plain, 1=bold, 2=italic, 3=bolditalic
pref("mail.receipt.request_header_type", 0);           // 0: MDN-DNT header  1: RRT header 2: Both (MC)
pref("mail.receipt.request_return_receipt_on", false);
pref("mail.reply_quote_inline",             false);
pref("mail.request.return_receipt", 2);                // 1: DSN 2: MDN 3: Both
pref("mail.send_struct", false);   // HTML->HTML *bold* etc. during Send; ditto
pref("mail.server.default.abbreviate", true);
pref("mail.server.default.allows_specialfolders_usage", true);
pref("mail.server.default.always_authenticate", false);
pref("mail.server.default.authMethod", 3); // cleartext password. @see nsIMsgIncomingServer.authMethod.
pref("mail.server.default.autosync_max_age_days", -1);
pref("mail.server.default.autosync_offline_stores",true);
pref("mail.server.default.canChangeStoreType", false);
pref("mail.server.default.canCreateFolders", true);
pref("mail.server.default.canDelete", false);
pref("mail.server.default.canFileMessages", true);
pref("mail.server.default.check_all_folders_for_new", false);
pref("mail.server.default.check_time", 10);
pref("mail.server.default.deferred_to_account", "");
pref("mail.server.default.delete_by_age_from_server", false);
pref("mail.server.default.delete_mail_left_on_server", false);
pref("mail.server.default.delete_model", 1);
pref("mail.server.default.dot_fix", true);
pref("mail.server.default.download_on_biff", false);
pref("mail.server.default.dual_use_folders", true);
pref("mail.server.default.dup_action", 0);
pref("mail.server.default.empty_trash_on_exit", false);
pref("mail.server.default.fetch_by_chunks", true);
pref("mail.server.default.force_select", "auto");
pref("mail.server.default.hidden", false);
pref("mail.server.default.inhibitWhiteListingIdentityDomain", false);
pref("mail.server.default.inhibitWhiteListingIdentityUser", true);
pref("mail.server.default.isSecure", false);
pref("mail.server.default.is_gmail", false);
pref("mail.server.default.leave_on_server", false);
pref("mail.server.default.limit_offline_message_size", false);
pref("mail.server.default.login_at_startup", false);
pref("mail.server.default.mark_old_read", false);
pref("mail.server.default.max_articles", 500);
pref("mail.server.default.max_size", 50);
pref("mail.server.default.mime_parts_on_demand", true);
pref("mail.server.default.moveOnSpam", false);
pref("mail.server.default.moveTargetMode", 0); // 0 == "Junk" on server, 1 == specific folder
pref("mail.server.default.notify.on", true);
pref("mail.server.default.num_days_to_leave_on_server", 7);
pref("mail.server.default.offline_download",true);
pref("mail.server.default.offline_support_level", -1);
pref("mail.server.default.override_namespaces", true);
pref("mail.server.default.port", -1);
pref("mail.server.default.purgeSpam", false);
pref("mail.server.default.purgeSpamInterval", 14); // 14 days
pref("mail.server.default.retainBy", 1);
pref("mail.server.default.send_client_info", true);
pref("mail.server.default.serverFilterName", "SpamAssassin");
pref("mail.server.default.serverFilterTrustFlags", 1); // 1 == trust positives, 2 == trust negatives, 3 == trust both
pref("mail.server.default.singleSignon", true);
pref("mail.server.default.socketType", 0); // @see nsIMsgIncomingServer.socketType
pref("mail.server.default.spamActionTargetAccount", "");
pref("mail.server.default.spamActionTargetFolder", "");
pref("mail.server.default.spamLevel", 100); // 0 off, 100 on.  not doing bool since we might have real levels one day.
pref("mail.server.default.useServerFilter", false);
pref("mail.server.default.useWhiteList", true);
pref("mail.server.default.use_compress_deflate", true);
pref("mail.server.default.use_condstore", false);
pref("mail.server.default.use_idle", true);
pref("mail.server.default.using_subscription", true);
pref("mail.server.default.valid", true);
pref("mail.server.default.whiteListAbURI", "moz-abmdbdirectory://abook.mab"); // the Personal addressbook.
pref("mail.serverDefaultStoreContractID", "@mozilla.org/msgstore/berkeleystore;1");
pref("mail.show_headers",                   1); // some
pref("mail.smtp.qos", 0);
pref("mail.smtp.useMatchingDomainServer", false);
pref("mail.smtp.useMatchingHostNameServer", false);
pref("mail.smtp.useSenderForSmtpMailFrom", true);
pref("mail.smtp_login_pop3_user_pass_auth_is_latin1", true);
pref("mail.smtpserver.default.authMethod", 3); // cleartext password. @see nsIMsgIncomingServer.authMethod.
pref("mail.smtpserver.default.try_ssl", 0); // @see nsISmtpServer.socketType
pref("mail.smtpservers", "");
pref("mail.spam.display.sanitize", true); // display simple html for html junk messages
pref("mail.spam.logging.enabled", false);
pref("mail.spam.manualMark", false);
pref("mail.spam.manualMarkMode", 0); // 0 == "move to junk folder", 1 == "delete"
pref("mail.spam.markAsNotJunkMarksUnRead", true);
pref("mail.spam.markAsReadOnSpam", false);
pref("mail.spam.version", 0); // used to determine when to migrate global spam settings
pref("mail.spellcheck.inline", true);
pref("mail.startup.enabledMailCheckOnce", false);
pref("mail.store_conversion_enabled", false);
pref("mail.strict_threading",               true);  // if true, don't thread by subject at all
pref("mail.strictly_mime",                  false);
pref("mail.strictly_mime.parm_folding",     1);
pref("mail.strictly_mime_headers",          true);
pref("mail.strip_sig_on_reply", true); // If true, remove the everything after the "-- \n" signature delimiter when replying.
pref("mail.thread_without_re",              false); // if false, only thread by subject if Re:
pref("mail.trusteddomains", "");
pref("mail.ui.folderpane.version", 1);
pref("mail.warn_on_collapsed_thread_operation", true);
pref("mail.warn_on_delete_from_trash", true);
pref("mail.warn_on_send_accel_key", true);
pref("mail.warn_on_shift_delete", true);
pref("mail.wrap_long_lines",                true);
pref("mailnews.account_central_page.url", "chrome://messenger/locale/messenger.properties");
pref("mailnews.allowMboxOver4GB", true);
pref("mailnews.append_preconfig_accounts.version", 1);
pref("mailnews.auto_config.addons_url", "https://live.thunderbird.net/autoconfig/addons.json");
pref("mailnews.auto_config.fetchFromExchange.enabled", true);
pref("mailnews.auto_config.fetchFromISP.enabled", true);
pref("mailnews.auto_config.fetchFromISP.sendEmailAddress", true);
pref("mailnews.auto_config.guess.enabled", true);
pref("mailnews.auto_config_url", "https://live.thunderbird.net/autoconfig/v1.1/");
pref("mailnews.bayesian_spam_filter.junk_maxtokens", 100000);
pref("mailnews.confirm.moveFoldersToTrash", true);
pref("mailnews.customDBHeaders", "");
pref("mailnews.customHeaders", "");
pref("mailnews.database.dbcache.logging.console", "None");
pref("mailnews.database.dbcache.logging.dump", "None");
pref("mailnews.database.global.datastore.cache_to_memory_permillage", 10);
pref("mailnews.database.global.indexer.enabled", false);
pref("mailnews.database.global.logging.console", false);
pref("mailnews.database.global.logging.dump", false);
pref("mailnews.database.global.logging.net", false);
pref("mailnews.database.summary.dontPreserveOnCopy",
pref("mailnews.database.summary.dontPreserveOnMove",
pref("mailnews.default_news_sort_order", 1); // for News (nsNewsDatabase)
pref("mailnews.default_news_sort_type", 21); //
pref("mailnews.default_news_view_flags", 1); // for News (nsNewsDatabase)
pref("mailnews.default_sort_order", 1); // for Mail/RSS/... (nsMsgDatabase)
pref("mailnews.default_sort_type", 18); //
pref("mailnews.default_view_flags", 0); // for Mail/RSS/... (nsMsgDatabase)
pref("mailnews.disable_fallback_to_utf8.ISO-2022-JP", false);
pref("mailnews.display.date_senders_timezone", false);
pref("mailnews.display.disable_format_flowed_support", false);
pref("mailnews.display.disallow_mime_handlers", 0);
pref("mailnews.display.html_sanitizer.drop_media", false); // whether to drop <img>, <video> and <audio>
pref("mailnews.display.html_sanitizer.drop_non_css_presentation", true); // whether to drop <font>, <center>, align='...', etc.
pref("mailnews.display.prefer_plaintext", false);  // Ignore HTML parts in multipart/alternative
pref("mailnews.display.show_all_body_parts_menu", false); // Whether the View > Message body as > All body parts menu item is available
pref("mailnews.display_reply_tag_colors_for_collapsed_threads", true);
pref("mailnews.emptyJunk.dontAskAgain", false);
pref("mailnews.emptyTrash.dontAskAgain", false);
pref("mailnews.extensions_using_appledouble", "");
pref("mailnews.filters.confirm_delete", true);
pref("mailnews.force_ascii_search",        false);
pref("mailnews.force_charset_override",     false); // ignore specified MIME encoding and use the default encoding for display
pref("mailnews.forward_header_originalmessage", "chrome://messenger/locale/messengercompose/composeMsgs.properties");
pref("mailnews.global_html_domains.version", 1);
pref("mailnews.headers.extraAddonHeaders", "");
pref("mailnews.headers.extraExpandedHeaders", "");
pref("mailnews.headers.showMessageId",       false);
pref("mailnews.headers.showOrganization",    false);
pref("mailnews.headers.showReferences",      false);
pref("mailnews.headers.showSender", false);
pref("mailnews.headers.showUserAgent",       false);
pref("mailnews.html_domains", "");
pref("mailnews.import.text.fieldmap", "+0,+1,+2,+3,+4,+5,+36,+6,+7,+8,+9,+10,+11,+12,+13,+14,+15,+16,+17,+18,+19,+20,+21,+22,+23,+24,+25,+26,+27,+28,+29,+30,+31,+32,+33,+34,+35");
pref("mailnews.import.text.skipfirstrecord", true);
pref("mailnews.labels.color.1", "#FF0000"); // default: red
pref("mailnews.labels.color.2", "#FF9900"); // default: orange
pref("mailnews.labels.color.3", "#009900"); // default: green
pref("mailnews.labels.color.4", "#3333FF"); // default: blue
pref("mailnews.labels.color.5", "#993399"); // default: purple
pref("mailnews.labels.description.1", "chrome://messenger/locale/messenger.properties");
pref("mailnews.labels.description.2", "chrome://messenger/locale/messenger.properties");
pref("mailnews.labels.description.3", "chrome://messenger/locale/messenger.properties");
pref("mailnews.labels.description.4", "chrome://messenger/locale/messenger.properties");
pref("mailnews.labels.description.5", "chrome://messenger/locale/messenger.properties");
pref("mailnews.localizedRe",                "chrome://messenger-region/locale/region.properties");
pref("mailnews.logComposePerformance", false);
pref("mailnews.mark_message_read.auto", true);
pref("mailnews.mark_message_read.delay", false);
pref("mailnews.mark_message_read.delay.interval", 5); // measured in seconds
pref("mailnews.message_display.disable_remote_image", true);
pref("mailnews.message_warning_size", 20971520);
pref("mailnews.messageid.openInNewWindow",   false);
pref("mailnews.messageid_browser.url", "chrome://messenger-region/locale/region.properties");
pref("mailnews.mx_service_url", "https://live.thunderbird.net/dns/mx/");
pref("mailnews.nav_crosses_folders", 1); // prompt user when crossing folders
pref("mailnews.offline_sync_mail",         false);
pref("mailnews.offline_sync_news",         false);
pref("mailnews.offline_sync_send_unsent",  true);
pref("mailnews.offline_sync_work_offline", false);
pref("mailnews.open_tab_warning", 20); // warn user if they attempt to open more than this many messages at once
pref("mailnews.open_window_warning", 10); // warn user if they attempt to open more than this many messages at once
pref("mailnews.p7m_external", false);          // S/MIME parts are not external (but inline decrypted).
pref("mailnews.p7m_subparts_external", true);  // S/MIME child parts are external. Protect against efail.
pref("mailnews.plaintext_domains", "");
pref("mailnews.quotingPrefs.version",       0);  // used to decide whether to migrate global quoting prefs
pref("mailnews.remember_selected_message", true);
pref("mailnews.reply_header_authorwroteondate", "chrome://messenger/locale/messengercompose/composeMsgs.properties");
pref("mailnews.reply_header_authorwrotesingle", "chrome://messenger/locale/messengercompose/composeMsgs.properties");
pref("mailnews.reply_header_ondateauthorwrote", "chrome://messenger/locale/messengercompose/composeMsgs.properties");
pref("mailnews.reply_header_originalmessage",   "chrome://messenger/locale/messengercompose/composeMsgs.properties");
pref("mailnews.reply_header_type",          1);
pref("mailnews.reply_in_default_charset",   false);
pref("mailnews.reply_quoting_selection",               true);
pref("mailnews.reply_quoting_selection.multi_word",    true);
pref("mailnews.reply_quoting_selection.only_if_chars", "");
pref("mailnews.reply_to_self_check_all_ident", false);
pref("mailnews.scroll_to_new_message", true);
pref("mailnews.search_date_format",        "chrome://messenger/locale/messenger.properties");
pref("mailnews.search_date_leading_zeros", "chrome://messenger/locale/messenger.properties");
pref("mailnews.search_date_separator",     "chrome://messenger/locale/messenger.properties");
pref("mailnews.sendInBackground", false);
pref("mailnews.send_default_charset",       "chrome://messenger/locale/messenger.properties");
pref("mailnews.send_plaintext_flowed", true); // RFC 2646=======
pref("mailnews.sendformat.auto_downgrade", true);
pref("mailnews.show_send_progress", true);
pref("mailnews.sort_threads_by_root", false);
pref("mailnews.start_page.enabled", true);
pref("mailnews.tcptimeout", 100);
pref("mailnews.thread_pane_column_unthreads", false);
pref("mailnews.threadpane_select_delay", 250); // measured in milliseconds
pref("mailnews.timeline_is_enabled", false);
pref("mailnews.traits.antiId.2", "mailnews@mozilla.org#good");
pref("mailnews.traits.enabled.1", false);
pref("mailnews.traits.enabled.2", true);
pref("mailnews.traits.id.1", "mailnews@mozilla.org#good");
pref("mailnews.traits.id.2", "mailnews@mozilla.org#junk");
pref("mailnews.traits.lastIndex", 1000);
pref("mailnews.traits.name.1", "Good");
pref("mailnews.traits.name.2", "Junk");
pref("mailnews.ui.addressbook_panel_results.version", 1);
pref("mailnews.ui.addressbook_results.version", 1);
pref("mailnews.ui.advanced_directory_search_results.version", 1);
pref("mailnews.ui.junk.firstuse", true);
pref("mailnews.ui.junk.manualMarkAsJunkMarksRead", true);
pref("mailnews.ui.select_addresses_results.version", 1);
pref("mailnews.view_default_charset",       "chrome://messenger/locale/messenger.properties");
pref("mailnews.wraplength",                 72);
pref("mapi.blind-send.enabled",             true);
pref("msgcompose.background_color",         "#FFFFFF");
pref("msgcompose.font_face",                "");
pref("msgcompose.font_size",                "medium");
pref("msgcompose.text_color",               "#000000");
pref("news.cancel.alert_on_success", true);
pref("news.cancel.confirm", true);
pref("news.get_messages_on_select",         true);
pref("news.show_size_in_lines",             true);
pref("news.update_unread_on_expand",        true);
pref("news.warn_on_delete", true);
pref("offline.autoDetect",                  false); // automatically move the user offline or online based on the network connection
pref("rss.display.disallow_mime_handlers", 0);
pref("rss.display.html_as", 0);
pref("rss.display.prefer_plaintext", false);
pref("rss.message.loadWebPageOnSelect", 0);
pref("rss.show.content-base", 0);
pref("rss.show.summary", 1);