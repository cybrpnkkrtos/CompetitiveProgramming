(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["AwardTooltip"],{"./src/reddit/components/AwardTooltip/index.m.less":function(e,t,o){e.exports={headerBar:"_1upk7O0Nror_rUzpKtAT82",headerBarPremium:"_3iVwVnDtNqAO4iQPvemgLZ",awardReport:"_3NL-lAvdtp1f08B73D3P-U",isReported:"_2Pk3ujKwQr9ilRsjN0MDqJ",awardReportIcon:"_1l-7KCSHWOZOMW8AwEn6sF",awardDetails:"_3EitQZYmhmkb40LVIqZjbf",awardIconContainer:"_3d4PewaRsE8Kt1dA9yVlK6",awardIcon:"_3Hlfqt1qFE_Tu7QOlUiazx",awardName:"_35wr2WzwkRAIoUu5CXPuNQ",awardDescription:"_2-4PwlBy4HgE_34Dneye8m",subreddit:"_1X9qQp-APi9LYm-TWfMGNK",subredditIcon:"_1d6eT4Yh-x1pgKfz_TFiB",modShield:"_3GaARjoK2CWYLfWjrPUTkN",howToLink:"_1liKJZCBt1h8KFR0F0Gqsi",premiumCta:"_2waCkZfG0i3CbaZeqk9dw3"}},"./src/reddit/components/AwardTooltip/index.tsx":function(e,t,o){"use strict";o.r(t);var r=o("./node_modules/fbt/lib/FbtPublic.js"),n=o("./node_modules/react/index.js"),a=o.n(n),s=o("./node_modules/react-redux/es/index.js"),i=o("./node_modules/react-router-redux/es/index.js"),c=o("./node_modules/reselect/es/index.js"),d=o("./src/lib/classNames/index.ts"),l=o("./src/reddit/helpers/isPost.ts"),m=o("./src/reddit/i18n/components.tsx"),p=o("./src/reddit/constants/colors.ts"),u=o("./src/lib/makeActionCreator/index.ts"),h=o("./src/reddit/i18n/utils.ts"),w=o("./src/reddit/actions/toaster.ts"),b=o("./src/reddit/models/Toast/index.ts"),C=o("./src/reddit/endpoints/gold/communityAwards.ts"),f=o("./src/reddit/actions/gold/constants.ts");const x=Object(u.a)(f.I);var g=o("./src/reddit/models/Gold/Award.ts"),E=o("./src/reddit/selectors/subreddit.ts"),O=o("./src/reddit/selectors/user.ts"),P=o("./src/reddit/components/ContentTooltip/index.tsx"),_=o("./src/reddit/components/SubredditIcon/index.tsx"),v=o("./src/reddit/controls/Button/index.tsx"),j=o("./src/reddit/icons/svgs/CircleCheck/index.tsx"),y=o("./src/reddit/icons/svgs/Moderate/index.tsx"),T=o("./src/reddit/icons/svgs/Report/index.tsx"),N=(o("./node_modules/core-js/modules/es6.regexp.split.js"),o("./src/reddit/icons/fonts/Coin/index.tsx"));const A=e=>{const{award:t,postOrComment:o}=e;if(t.description){const e=t.description.split("%{coin_symbol}");return a.a.createElement(a.a.Fragment,null,e.map((e,t)=>0===t?e:a.a.createElement(a.a.Fragment,{key:e},a.a.createElement(N.a,null),e)))}if(t.awardType===g.c.Community)return"post"===o?a.a.createElement(m.c,null,"Shows the ",a.a.createElement(m.b,{name:"award-name"},t.name)," Award on the post."):a.a.createElement(m.c,null,"Shows the ",a.a.createElement(m.b,{name:"award-name"},t.name)," Award on the comment.");if(t.awardType===g.c.Moderator){const e=t.daysOfPremium?Math.floor(t.daysOfPremium/30):0;return 1===e?a.a.createElement(m.c,null,"Shows the ",a.a.createElement(m.b,{name:"award-name"},t.name)," Award and gives the recipient 1 month of Premium."):a.a.createElement(m.c,null,"Shows the ",a.a.createElement(m.b,{name:"award-name"},t.name)," Award and gives the recipient ",a.a.createElement(m.b,{name:"months-of-premium"},e)," months of Premium.")}return"gid_1"===t.id?"post"===o?a.a.createElement(m.c,null,"Shows the Silver Award on the post... and that's it."):a.a.createElement(m.c,null,"Shows the Silver Award on the comment... and that's it."):"gid_2"===t.id?"post"===o?a.a.createElement(m.c,null,"Shows the Gold Award on the post and gives the recipient a week of Reddit Premium (including 100 Coins)."):a.a.createElement(m.c,null,"Shows the Gold Award on the comment and gives the recipient a week of Reddit Premium (including 100 Coins)."):"gid_3"===t.id?"post"===o?a.a.createElement(m.c,null,"Shows the Platinum Award on the post and grants the recipient one month of Reddit Premium."):a.a.createElement(m.c,null,"Shows the Platinum Award on the comment and grants the recipient one month of Reddit Premium."):null};var S=o("./src/reddit/components/AwardTooltip/index.m.less"),k=o.n(S);const L=Object(c.c)({currentUser:O.i,subreddit:(e,t)=>{let{postOrComment:o}=t;return Object(E.H)(e,{thingId:o.id})}}),I=Object(s.b)(L,(e,t)=>({onClickPremium:()=>e(Object(i.b)("/premium")),reportAward:()=>e((e=>async(t,o,r)=>{let{apiContext:n}=r;t(x());const a=Object(h.c)("Something went wrong. The report could not be created at this time.");try{(await Object(C.e)(n(),e)).error&&t(Object(w.e)({kind:b.b.Error,duration:w.a,text:a}))}catch(s){t(Object(w.e)({kind:b.b.Error,duration:w.a,text:a}))}})(t.award.id))}));class R extends a.a.Component{constructor(e){super(e),this.state={isReported:!1}}renderReporterButton(){const{reportAward:e}=this.props,{isReported:t}=this.state;return a.a.createElement("button",{className:Object(d.a)(k.a.awardReport,{[k.a.isReported]:t}),onClick:()=>{t||(this.setState({isReported:!0}),e())}},t?a.a.createElement(a.a.Fragment,null,a.a.createElement(m.c,null,"Reported"),a.a.createElement(j.a,{className:k.a.awardReportIcon})):a.a.createElement(T.a,{className:k.a.awardReportIcon}))}renderCta(){const{award:e,currentUser:t,onClickPremium:o}=this.props,n=e.awardSubType===g.b.Premium,s=!!t&&t.isGold;return n?s?null:a.a.createElement(v.e,{className:k.a.premiumCta,onClick:o},r.fbt._("Get Premium",null,{hk:"1M0agx"})):a.a.createElement("a",{className:k.a.howToLink,href:"https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",target:"_blank"},r.fbt._("How do I award?",null,{hk:"202GHV"}))}render(){const{award:e,postOrComment:t,subreddit:o,tooltipId:r}=this.props,n=e.awardSubType===g.b.Premium;return a.a.createElement(P.a,{caretColor:{top:n?p.a.orangered:p.a.alienblue},tooltipSizeEstimate:{height:290,width:254},tooltipId:r,defaultTooltipPosition:"top"},a.a.createElement("div",{className:Object(d.a)(k.a.headerBar,{[k.a.headerBarPremium]:n})},e.awardType!==g.c.Global&&this.renderReporterButton()),a.a.createElement("div",{className:k.a.awardDetails},a.a.createElement("div",{className:k.a.awardIconContainer},a.a.createElement("div",{className:k.a.awardIcon,style:{backgroundImage:'url("'.concat(e.icon.url,'")')}})),a.a.createElement("div",{className:k.a.awardName},a.a.createElement(m.c,null,a.a.createElement(m.b,{name:"award-name"},e.name)," Award")),a.a.createElement("p",{className:k.a.awardDescription},a.a.createElement(A,{award:e,postOrComment:Object(l.a)(t.id)?"post":"comment"})),e.awardType===g.c.Community&&o&&a.a.createElement("div",{className:k.a.subreddit},a.a.createElement(_.b,{className:k.a.subredditIcon,subredditOrProfile:o}),"r/".concat(o.name)),e.awardType===g.c.Moderator&&a.a.createElement("div",{className:k.a.subreddit},a.a.createElement(y.a,{className:Object(d.a)(k.a.subredditIcon,k.a.modShield)}),a.a.createElement(m.c,null,"Exclusive mod-given Award")),this.renderCta()))}}t.default=I(R)},"./src/reddit/components/ContentTooltip/index.m.less":function(e,t,o){e.exports={StyledTooltipContainer:"_2uSuNRa3OeptFDJCKQ3vU6",styledTooltipContainer:"_2uSuNRa3OeptFDJCKQ3vU6",fadeIn:"_2bkYZH_kJx5pIHW0Ts5P6e",caretOnBottom:"_1rF-A55THyDL-rQ9ZUDQ4_",caretOnTop:"_1MHCyMQAMeqRqf5DPWWeq3",caretOnLeft:"nVD-oexLbZI_4QjhrkLFz",caretOnRight:"KRVDnoE1RIC5qyqQLXxGG"}},"./src/reddit/components/ContentTooltip/index.tsx":function(e,t,o){"use strict";o("./node_modules/core-js/modules/es6.symbol.js");var r=o("./src/higherOrderComponents/addOverlayEvents.tsx"),n=o("./node_modules/react/index.js"),a=o.n(n),s=o("./node_modules/react-redux/es/index.js"),i=o("./node_modules/reselect/es/index.js"),c=o("./src/higherOrderComponents/asTooltip.tsx"),d=o("./src/lib/classNames/index.ts"),l=o("./src/lib/CSSVariableProvider/withTheme.tsx"),m=o("./src/lib/fastdom/index.ts"),p=o("./src/reddit/models/Theme/NewColorSystem/index.ts"),u=o("./src/reddit/selectors/tooltip.ts"),h=o("./src/reddit/components/ContentTooltip/index.m.less"),w=o.n(h);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var C=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o};const f={height:200,width:200},x=e=>{switch(e){case"top":return"bottom";case"right":return"left";case"left":return"right";case"bottom":default:return"top"}},g=Object(l.a)(e=>{const{children:t,className:o,style:r,caretPosition:n,caretColor:s}=e,i=C(e,["children","className","style","caretPosition","caretColor"]);return a.a.createElement("div",b({className:Object(d.a)(o,w.a.StyledTooltipContainer,{[w.a.caretOnTop]:"top"===n,[w.a.caretOnLeft]:"left"===n,[w.a.caretOnRight]:"right"===n,[w.a.caretOnBottom]:"bottom"===n}),style:Object.assign({},r,{"--contentTooltip-caretColor":s&&s[n]?s[n]:Object(p.a)(e).body})},i),t)}),E=Object(i.c)({isOpen:(e,t)=>{let{tooltipId:o}=t;return Object(u.b)(o)(e)}}),O=Object(c.a)(g,[r.a.Click,r.a.Keydown]),P=Object(s.b)(E);class _ extends a.a.Component{constructor(e){super(e),this.checkAndSetPosition=()=>{const{tooltipId:e,tooltipSizeEstimate:t=f}=this.props;m.a.read(()=>{const o=document.getElementById(e);if(!o)return;const r=o.getBoundingClientRect();if(!("undefined"!=typeof window))return void this.setState({position:this.props.defaultTooltipPosition});let n=!0;switch(this.props.defaultTooltipPosition){case"bottom":n=window.innerHeight-r.bottom>t.height;break;case"left":n=r.left>t.width;break;case"right":n=r.right<=window.innerWidth-t.width;break;case"top":default:n=r.top>t.height}this.setState({position:n?this.props.defaultTooltipPosition:x(this.props.defaultTooltipPosition)})})},this.state={position:null}}componentDidUpdate(e){!e.isOpen&&this.props.isOpen&&this.checkAndSetPosition(),e.isOpen&&!this.props.isOpen&&this.setState({position:null})}getPositions(e){switch(e||this.props.defaultTooltipPosition){case"bottom":return{tooltipPosition:["center","top"],targetPosition:["center","bottom"],caretPosition:"top"};case"left":return{tooltipPosition:["right","center"],targetPosition:["left","center"],caretPosition:"right"};case"right":return{tooltipPosition:["left","center"],targetPosition:["right","center"],caretPosition:"left"};case"top":default:return{tooltipPosition:["center","bottom"],targetPosition:["center","top"],caretPosition:"bottom"}}}render(){const{position:e}=this.state,{targetPosition:t,tooltipPosition:o,caretPosition:r}=this.getPositions(e);return a.a.createElement(O,b({},this.props,{caretPosition:r,targetPosition:t,tooltipPosition:o}))}}t.a=P(_)},"./src/reddit/icons/fonts/Coin/index.m.less":function(e,t,o){e.exports={CoinIcon:"_12xlue8dQ1odPw1J81FIGQ",coinIcon:"_12xlue8dQ1odPw1J81FIGQ"}},"./src/reddit/icons/fonts/Coin/index.tsx":function(e,t,o){"use strict";var r=o("./node_modules/react/index.js"),n=o.n(r),a=o("./src/reddit/constants/colors.ts"),s=o("./src/reddit/icons/fonts/helpers.tsx"),i=o("./src/reddit/icons/fonts/Coin/index.m.less"),c=o.n(i);const d=o("./src/lib/lessComponent.tsx").a.wrapped(e=>n.a.createElement("i",{className:"".concat(Object(s.b)("coin")," ").concat(e.className),style:{color:e.fillColor||a.a.gold}}),"CoinIcon",c.a);t.a=d},"./src/reddit/icons/svgs/CircleCheck/index.tsx":function(e,t,o){"use strict";var r=o("./node_modules/react/index.js"),n=o.n(r);t.a=e=>n.a.createElement("svg",{className:e.className,viewBox:"0 0 21 21",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",fill:"inherit"}))},"./src/reddit/icons/svgs/Report/index.tsx":function(e,t,o){"use strict";var r=o("./node_modules/react/index.js"),n=o.n(r);t.a=e=>n.a.createElement("svg",{className:e.className,id:e.id,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",null,n.a.createElement("path",{d:"M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"})))}}]);
//# sourceMappingURL=AwardTooltip.7702852ec3a92da94ee3.js.map