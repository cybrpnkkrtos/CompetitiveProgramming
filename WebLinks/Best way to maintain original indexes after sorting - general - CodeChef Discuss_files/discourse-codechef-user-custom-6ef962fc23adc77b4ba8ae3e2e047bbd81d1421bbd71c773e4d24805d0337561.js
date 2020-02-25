define("discourse/plugins/discourse-codechef-user-custom/discourse/initializers/site-link",["exports","discourse/lib/plugin-api"],function(e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"site-link",initialize:function(e){(0,s.withPluginApi)("0.8.31",function(e){e.modifyClass("model:user",{siteLink:function(){var e=this.get("username");if(e){var s="https://www.codechef.com/users/"+e,t="<a href="+s+" target='_blank'>Link</a>";return Ember.Object.create({link:t,name:"CodeChef Profile"})}return null}.property("username")})}),(0,s.withPluginApi)("0.8.31",function(e){e.registerConnectorClass("user-card-metadata","site-link",{setupComponent:function(e,s){s.set("siteLink",e.user.get("siteLink"))}})}),(0,s.withPluginApi)("0.8.31",function(e){e.registerConnectorClass("user-profile-primary","site-link",{setupComponent:function(e,s){s.set("siteLink",e.model.get("siteLink"))}})})}}}),Ember.TEMPLATES["javascripts/connectors/user-card-metadata/site-link"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[4,"if",[[25,["siteLink"]]],null,{"statements":[[7,"h3"],[11,"class","user-card-public-field"],[9],[0,"\\n  "],[7,"span"],[11,"class","user-field-name"],[9],[1,[25,["siteLink","name"]],false],[10],[0,":\\n  "],[7,"span"],[11,"class","user-field-value"],[9],[1,[25,["siteLink","link"]],true],[10],[0,"\\n"],[10],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/connectors/user-card-metadata/site-link"}}),Ember.TEMPLATES["javascripts/connectors/user-post-names/test"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[],"hasEval":false}',meta:{moduleName:"javascripts/connectors/user-post-names/test"}}),Ember.TEMPLATES["javascripts/connectors/user-profile-primary/site-link"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[4,"if",[[25,["siteLink"]]],null,{"statements":[[7,"div"],[11,"class","public-user-fields"],[9],[0,"\\n  "],[7,"div"],[11,"class","public-user-field"],[9],[0,"\\n    "],[7,"span"],[11,"class","user-field-name"],[9],[1,[25,["siteLink","name"]],false],[10],[0,":\\n    "],[7,"span"],[11,"class","user-field-value"],[9],[1,[25,["siteLink","link"]],true],[10],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/connectors/user-profile-primary/site-link"}});
//# sourceMappingURL=/assets/plugins/discourse-codechef-user-custom-6ef962fc23adc77b4ba8ae3e2e047bbd81d1421bbd71c773e4d24805d0337561.js.map