if (self.CavalryLogger) { CavalryLogger.start_js(["\/DYi+"]); }

__d("MessagingTag",[],(function a(b,c,d,e,f,g){f.exports={GROUPS:"groups",UNREAD:"unread",FLAGGED:"flagged",ACTION_ARCHIVED:"action:archived",INBOX:"inbox",OTHER:"other",PENDING:"pending",MONTAGE:"montage",EVENT:"event",SENT:"sent",SPAM:"spam",UPDATES:"broadcasts_inbox",BCC:"header:bcc",FILTERED_CONTENT:"filtered_content",FILTERED_CONTENT_BH:"filtered_content_bh",FILTERED_CONTENT_ACCOUNT:"filtered_content_account",FILTERED_CONTENT_QUASAR:"filtered_content_quasar",FILTERED_CONTENT_INVALID_APP:"filtered_content_invalid_app",UNAVAILABLE_ATTACHMENT:"unavailable_attachment",ARCHIVED:"archived",EMAIL:"email",VOICEMAIL:"voicemail",SPAM_SPOOFING:"spam:spoofing",SPOOF_WARNING:"MTA:spoof_warning",SMS_TAG_ROOT:"SMSShortcode:",APP_ID_ROOT:"app_id:",DOMAIN_AUTH_PASS:"MTA:dmarc:pass",DOMAIN_AUTH_FAIL:"MTA:dmarc:fail",MTA_SYSTEM_MESSAGE:"MTA:system_message",EMAIL_MESSAGE:"source:email",MARKETPLACE:"marketplace",ROOM:"room",IRIS_MAPPING:{FOLDER_INVALID:null,FOLDER_INBOX:"inbox",FOLDER_OTHER:"other",FOLDER_SPAM:"spam",FOLDER_PENDING:"pending",FOLDER_MONTAGE:"montage",FOLDER_HIDDEN:"hidden",FOLDER_DISABLED:"disabled"}};}),null);
__d("PagesLoggerEventEnum",[],(function a(b,c,d,e,f,g){f.exports={CLICK:"click",CREATE:"create",DELETE:"delete",DRAG:"drag",HOVER:"hover",IMPRESSION:"impression",RECEIVE_REQUEST:"receive_request",RECEIVE_RESPONSE:"receive_response",SCROLL:"scroll",SEND_REQUEST:"send_request",SEND_RESPONSE:"send_response",UPDATE:"update"};}),null);
__d("PagesLoggerEventTargetEnum",[],(function a(b,c,d,e,f,g){f.exports={ABOUT_TAB:"about_tab",CONFIRM_APPLY_PAGE_TEMPLATE_BUTTON:"confirm_apply_page_template_button",EDIT_PAGE_TEMPLATE_ROW:"edit_page_template_row",FOLLOW_UP_MESSAGE:"follow_up_message",MESSENGER_ATTACHMENT:"messenger_attachment",MSITE_MESSAGE_BUBBLE:"msite_message_bubble",PAGE_GET_DIRECTIONS:"page_get_directions",PAGE_HOME_CARD:"page_home_card",PAGE_MESSAGE:"page_message",PAGE_PHONE:"page_phone",PAGE_PROFILE:"page_profile",PAGE_SAVE:"page_save",PAGE_TAB_BAR:"page_tab_bar",PAGE_TEMPLATE:"page_template",PAGE_TEMPLATE_ALARM_CLOCK:"page_template_alarm_clock",PAGE_TEMPLATE_NUX_TOUR:"page_template_nux_tour",PAGE_WEBSITE:"page_website",PAGES_COVER_VIDEO:"pages_cover_video",PAGES_PRIMARY_CTA_BUTTON:"pages_primary_cta_button"};}),null);
__d('ChatTypeaheadConstants',[],(function a(b,c,d,e,f,g){var h={USER_TYPE:'user',THREAD_TYPE:'thread',FRIEND_TYPE:'friend',NON_FRIEND_TYPE:'non_friend',FB4C_TYPE:'fb4c',PAGE_TYPE:'page',MEETING_ROOM_PAGE_TYPE:'meeting_room_page',COMMERCE_PAGE_TYPE:'commerce_page',HEADER_TYPE:'header',INTERNAL_BOT_PAGE_TYPE:'internal_bot_page',GAME_TYPE:'game'};f.exports=h;}),null);
__d('PagesTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:PagesLoggerConfig',this.$PagesTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:PagesLoggerConfig',this.$PagesTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$PagesTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$PagesTypedLogger1=babelHelpers['extends']({},this.$PagesTypedLogger1,j);return this;};h.prototype.setConnectionClass=function(j){this.$PagesTypedLogger1.connection_class=j;return this;};h.prototype.setEvent=function(j){this.$PagesTypedLogger1.event=j;return this;};h.prototype.setEventLocation=function(j){this.$PagesTypedLogger1.event_location=j;return this;};h.prototype.setEventTarget=function(j){this.$PagesTypedLogger1.event_target=j;return this;};h.prototype.setLogSource=function(j){this.$PagesTypedLogger1.log_source=j;return this;};h.prototype.setPageID=function(j){this.$PagesTypedLogger1.page_id=j;return this;};h.prototype.setSessionid=function(j){this.$PagesTypedLogger1.sessionid=j;return this;};h.prototype.setTags=function(j){this.$PagesTypedLogger1.tags=c('GeneratedLoggerUtils').serializeVector(j);return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$PagesTypedLogger1=babelHelpers['extends']({},this.$PagesTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={connection_class:true,event:true,event_location:true,event_target:true,log_source:true,page_id:true,sessionid:true,tags:true};f.exports=h;}),null);
__d('PagesLogger',['PagesLoggerEventEnum','PagesTypedLogger'],(function a(b,c,d,e,f,g){var h='extra_data_',i={log:function j(k,event,l){var m=arguments.length<=3||arguments[3]===undefined?null:arguments[3],n=arguments.length<=4||arguments[4]===undefined?[]:arguments[4],o=arguments.length<=5||arguments[5]===undefined?{}:arguments[5];Object.keys(o).forEach(function(p){var q=o[p];if(q instanceof Array||q instanceof Object)q=JSON.stringify(q);o[h+p]=q;delete o[p];});new (c('PagesTypedLogger'))().setPageID(k).setEvent(event).setEventTarget(l).setEventLocation(m).setLogSource('pages_logger').setTags(n).updateExtraData(o).log();},registerLogOnClick:function j(k,l,m){var n=arguments.length<=3||arguments[3]===undefined?null:arguments[3],o=arguments.length<=4||arguments[4]===undefined?[]:arguments[4],p=arguments.length<=5||arguments[5]===undefined?{}:arguments[5];k.addEventListener('click',function(){this.log(l,c('PagesLoggerEventEnum').CLICK,m,n,o,p);}.bind(this));}};f.exports=i;}),null);
__d('ChatOpenTabEventLogger',['Banzai','ChatImpressionLogger','ChatTypeaheadConstants','MercuryIDs','MercuryParticipantTypes','PagesLogger','PagesLoggerEventEnum','PagesLoggerEventTargetEnum'],(function a(b,c,d,e,f,g){'use strict';var h='messaging_tracking',i={log:function j(k,l,m,n){var o={referrer:k||'',message_thread_id:l,message_view:'chat',timestamp_send:Date.now(),message_target_ids:[]};if(m!==undefined)o.message_target_ids=[m];c('ChatImpressionLogger').logImpression(k,m,n);c('Banzai').post(h,o,{delay:0,retry:true});var p=c('MercuryIDs').getUserIDFromThreadID(String(l));c('Banzai').post('page_message_button_click',{page_id:p,ref:k});},logUser:function j(k,l,m){var n=c('MercuryIDs').getThreadIDFromUserID(l);this.log(k,n,l,m);},logPage:function j(k,l){this.logUser(k,l);this._pagesLogger(k,l);},logByType:function j(k,l,m){if(k===c('ChatTypeaheadConstants').THREAD_TYPE){this.log(l,m);}else if(k===c('ChatTypeaheadConstants').MEETING_ROOM_PAGE_TYPE){var n=c('MercuryIDs').getUserIDFromThreadID(m);this.log(l,m,n);}else if(!k||k===c('MercuryParticipantTypes').FRIEND||k===c('ChatTypeaheadConstants').FRIEND_TYPE||k===c('ChatTypeaheadConstants').PAGE_TYPE||k===c('ChatTypeaheadConstants').USER_TYPE){var o=void 0;if(c('MercuryIDs').isValidThreadID(m))o=c('MercuryIDs').getUserIDFromThreadID(m);this.log(l,m,o);if(k===c('ChatTypeaheadConstants').PAGE_TYPE)this._pagesLogger(l,m);}else this.log(l,m);},_pagesLogger:function j(k,l){c('PagesLogger').log(l,c('PagesLoggerEventEnum').CLICK,c('PagesLoggerEventTargetEnum').PAGE_MESSAGE,k);}};f.exports=i;}),null);
__d('MenuSeparator.react',['MenuSeparator'],(function a(b,c,d,e,f,g){function h(j){j.isReactLegacyFactory={};j.type=j;}var i=c('MenuSeparator');h(i);f.exports=i;}),null);
__d('XUIMenuSeparator.react',['MenuSeparator.react'],(function a(b,c,d,e,f,g){var h=c('MenuSeparator.react');f.exports=h;}),null);
__d('FantaDispatcher',['ExplicitRegistrationDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('ExplicitRegistrationDispatcher'));i=h&&h.prototype;function j(){h.apply(this,arguments);}f.exports=new j({strict:false});}),null);
__d('WebMessengerThreadPermalinks',['MercuryIDs','MessagingTag','MessengerURIConstants','URI','WWWBase','requireWeak'],(function a(b,c,d,e,f,g){'use strict';var h={getThreadURI:function j(k,l,m){var n='';if(c('MercuryIDs').isCanonical(k)){n=c('MercuryIDs').tokenize(k).value;}else c('requireWeak')('MercuryThreadIDMap',function(p){n=p.get().getServerIDFromClientIDNow(k);});var o=h.getThreadURIFromServerID(n,m);l&&l(o);},getThreadURIFromServerID:function j(k,l){var m=new (c('URI'))(c('WWWBase').uri),n=c('MessengerURIConstants').FACEBOOK_PREFIX;if(l)switch(l){case c('MessagingTag').OTHER:n+='/filtered';break;case c('MessagingTag').PENDING:n+='/requests';break;case c('MessagingTag').INBOX:break;default:n+='/'+l;break;}m.setPath(n+c('MessengerURIConstants').THREAD_PREFIX+k);return m.toString();},getThreadURIFromUserID:function j(k,l){var m=new (c('URI'))(c('WWWBase').uri),n=c('MessengerURIConstants').FACEBOOK_PREFIX;m.setPath(i(n,l)+'/t/'+k);return m.toString();}};function i(j,k){if(k&&k!=c('MessagingTag').INBOX)j+='/'+k;return j;}f.exports=h;}),null);
__d('FantaTabActions',['Bootloader','FantaDispatcher','MercuryConfig','MessengerURIConstants','URI','WebMessengerThreadPermalinks','goURI','ifRequired','keyMirror'],(function a(b,c,d,e,f,g){'use strict';var h=c('keyMirror')({BLUR_TAB:null,CLOSE_ALL_TABS:null,CLOSE_AND_TAB_NEXT:null,CLOSE_TAB:null,FOCUS_NEXT_TAB:null,FOCUS_PREVIOUS_TAB:null,FOCUS_TAB:null,LOAD_FROM_DATA:null,MERCURY_REGISTER_TAB_FOCUS_DEPRECATED:null,MINIMIZE_ALL_TABS:null,MINIMIZE_TAB:null,OPEN_TAB:null,OPEN_TAB_WITH_INTERSTITIAL_DATA:null,REPLACE_TAB:null,SCROLL_BOTTOM_CHANGED:null,SET_ALLOWED_RAISED_TABS:null,SET_MESSAGE_COUNT:null,SHOW_UNSEEN_MESSAGES:null,UNMINIMIZE_TAB:null});function i(k){var l=k?new (c('URI'))(c('WebMessengerThreadPermalinks').getThreadURIFromServerID(k)):new (c('URI'))(c('MessengerURIConstants').COMPOSE_SUBPATH);c('ifRequired')('BusinessURI.brands',function(m){return c('goURI')(m(l));},function(){return c('goURI')(l);});}var j={Types:h,openTab:function k(l,m){this.dispatchOrBootloadGetMessages(function(){c('FantaDispatcher').dispatch({type:h.OPEN_TAB,tabID:l});if(c('MercuryConfig').FantaTabView){c('ifRequired')('FantaTabsReactApp',function(n){this._tryLoadSlimApp(l);}.bind(this),function(){this._tryLoadSlimApp(l,function(){return i(l);});}.bind(this));}else c('ifRequired')('FantaTabsApp',function(n){this._tryLoadSlimApp(l);}.bind(this),function(){this._tryLoadSlimApp(l,function(){return i(l);});}.bind(this));}.bind(this));},openInterstitialTab:function k(l,m){this.dispatchOrBootloadGetMessages(function(){c('FantaDispatcher').dispatch({type:h.OPEN_TAB_WITH_INTERSTITIAL_DATA,tabID:l,interstitialData:m});if(c('MercuryConfig').FantaTabView){c('ifRequired')('FantaTabsReactApp',function(n){this._tryLoadSlimAppWithInterstitialData(l,m);}.bind(this),function(){this._tryLoadSlimAppWithInterstitialData(l,m);}.bind(this));}else c('ifRequired')('FantaTabsApp',function(n){this._tryLoadSlimAppWithInterstitialData(l,m);}.bind(this),function(){this._tryLoadSlimAppWithInterstitialData(l,m);}.bind(this));}.bind(this));},_tryLoadSlimApp:function k(l,m){c('ifRequired')('FantaTabsSlimApp',function(n){c('ifRequired')('FantaAppStore',function(){},function(){n.getPumpedUp(function(){c('FantaDispatcher').dispatch({type:h.OPEN_TAB,tabID:l});});});},function(){return m&&m(l);});},_tryLoadSlimAppWithInterstitialData:function k(l,m,n){c('ifRequired')('FantaTabsSlimApp',function(o){c('ifRequired')('FantaAppStore',function(){},function(){o.getPumpedUp(function(){c('FantaDispatcher').dispatch({type:h.OPEN_TAB_WITH_INTERSTITIAL_DATA,tabID:l,interstitialData:m});});});});},registerTabFocusDeprecated:function k(l,m,n,o){c('FantaDispatcher').dispatch({type:h.MERCURY_REGISTER_TAB_FOCUS_DEPRECATED,tabID:l,focusCallback:m,blurCallback:n,focusOnMountDEPRECATED:o});},replaceTab:function k(l,m){c('FantaDispatcher').dispatch({type:h.REPLACE_TAB,tabID:l,newTabID:m});},minimizeTab:function k(l){c('FantaDispatcher').dispatch({type:h.MINIMIZE_TAB,tabID:l});},minimizeAllTabs:function k(){c('FantaDispatcher').dispatch({type:h.MINIMIZE_ALL_TABS});},unminimizeTab:function k(l){c('FantaDispatcher').dispatch({type:h.UNMINIMIZE_TAB,tabID:l});},closeTab:function k(l){c('FantaDispatcher').dispatch({type:h.CLOSE_TAB,tabID:l});},closeAllTabs:function k(){c('FantaDispatcher').dispatch({type:h.CLOSE_ALL_TABS});},closeAndTabNext:function k(l){c('FantaDispatcher').dispatch({type:h.CLOSE_AND_TAB_NEXT,tabID:l});},focusTab:function k(l){c('FantaDispatcher').dispatch({type:h.FOCUS_TAB,tabID:l});},blurTab:function k(l){c('FantaDispatcher').dispatch({type:h.BLUR_TAB,tabID:l});},setAllowedRaisedTabs:function k(l){c('FantaDispatcher').dispatch({type:h.SET_ALLOWED_RAISED_TABS,allowedRaisedTabs:l});},setMessageCount:function k(l,m){c('FantaDispatcher').dispatch({type:h.SET_MESSAGE_COUNT,threadID:l,messageCount:m});},loadFromData:function k(l){this.dispatchOrBootloadGetMessages(function(){c('FantaDispatcher').dispatch({type:h.LOAD_FROM_DATA,tabData:l});});},focusNextTab:function k(event){c('FantaDispatcher').dispatch({type:h.FOCUS_NEXT_TAB,event:event});},focusPreviousTab:function k(event){c('FantaDispatcher').dispatch({type:h.FOCUS_PREVIOUS_TAB,event:event});},scrollBottomChanged:function k(l,m,n){c('FantaDispatcher').dispatch({type:h.SCROLL_BOTTOM_CHANGED,isScrolledToBottom:m,tabID:l,showUnseenMessages:n});},showUnseenMessages:function k(l){c('FantaDispatcher').dispatch({type:h.SHOW_UNSEEN_MESSAGES,tabID:l});},dispatchOrBootloadGetMessages:function k(l){if(c('MercuryConfig').FantaTabView){c('ifRequired')('FantaReducersGetMessages',function(){l();},function(){c('ifRequired')('FantaAppStore',function(m){c('Bootloader').loadModules(["FantaReducersGetMessages"],function(n){m.addReducers(n);l();},'FantaTabActions');},function(){l();});});}else l();}};f.exports=j;}),null);
__d('PageLiveInsightsDispatcher',['ExplicitRegistrationReactDispatcher'],(function a(b,c,d,e,f,g){'use strict';f.exports=new (c('ExplicitRegistrationReactDispatcher'))({strict:true});}),null);
__d("XPagesManagerInsightsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/{page_token}\/insights\/",{page_token:{type:"String",required:true},business_id:{type:"Int"},event_id:{type:"FBID"},section:{type:"String"},referrer:{type:"String"},campaign_group_id:{type:"Int"},acontext:{type:"String"},coupon_offer:{type:"Int"},coupon_product:{type:"String"},initial_tab:{type:"String"}});}),null);
__d("XPagesManagerSettingsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/{page_token}\/settings\/",{page_token:{type:"String",required:true},business_id:{type:"Int"},edited:{type:"String"},section:{type:"String"},tab:{type:"String"},change_admin_action:{type:"String"},change_admin_uid:{type:"Int"},tbid:{type:"Int"},fid:{type:"Int"},item_id:{type:"Int"},ref:{type:"String"},q:{type:"String"},promote_plugin_tab:{type:"Enum",enumType:1},active_section:{type:"String"},on_load_actions:{type:"StringVector"},partner_id:{type:"Int"},enable:{type:"Enum",enumType:1}});}),null);