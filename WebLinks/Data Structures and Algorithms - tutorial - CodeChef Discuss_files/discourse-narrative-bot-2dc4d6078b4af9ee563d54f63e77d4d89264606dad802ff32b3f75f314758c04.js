define("discourse/plugins/discourse-narrative-bot/initializers/new-user-narrative",["exports","discourse/lib/plugin-api"],function(e,t){"use strict";function i(e){var t=e.container.lookup("message-bus:main"),i=e.getCurrentUser(),r=e.container.lookup("app-events:main");e.modifyClass("component:site-header",{didInsertElement:function(){this._super.apply(this,arguments),this.dispatch("header:search-context-trigger","header")}}),e.attachWidgetAction("header","headerSearchContextTrigger",function(){this.site.mobileView?this.state.skipSearchContext=!1:(this.state.contextEnabled=!0,this.state.searchContextType="topic")}),t&&i&&t.subscribe("/new_user_narrative/tutorial_search",function(){r.trigger("header:search-context-trigger")})}Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"new-user-narratve",initialize:function(e){e.lookup("site-settings:main").discourse_narrative_bot_enabled&&(0,t.withPluginApi)("0.8.7",i)}}});
//# sourceMappingURL=/assets/plugins/discourse-narrative-bot-2dc4d6078b4af9ee563d54f63e77d4d89264606dad802ff32b3f75f314758c04.js.map