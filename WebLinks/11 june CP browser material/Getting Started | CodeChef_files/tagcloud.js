(function(){var t,i,e=Math.abs,s=Math.sin,h=Math.cos,n=Math.max,o=Math.min,a=Math.ceil,r={},l={},f={0:"0,",1:"17,",2:"34,",3:"51,",4:"68,",5:"85,",6:"102,",7:"119,",8:"136,",9:"153,",a:"170,",A:"170,",b:"187,",B:"187,",c:"204,",C:"204,",d:"221,",D:"221,",e:"238,",E:"238,",f:"255,",F:"255,"},u,c,d,g=document,w,m={};for(t=0;t<256;++t){i=t.toString(16);if(t<16){i="0"+i}l[i]=l[i.toUpperCase()]=t.toString()+","}function p(t){return typeof t!="undefined"}function x(t,i,e){return isNaN(t)?e:o(e,n(i,t))}function v(){return false}function y(t,i){var e=[],s=t.length,h;for(h=0;h<s;++h){e.push(t[h])}e.sort(i);return e}function T(t){var i=t.length-1,e,s;while(i){s=~~(Math.random()*i);e=t[i];t[i]=t[s];t[s]=e;--i}}function S(t){this[1]={1:t[0],2:t[1],3:t[2],4:t[3]};this[2]={1:t[4],2:t[5],3:t[6],4:t[7]};this[3]={1:t[8],2:t[9],3:t[10],4:t[11]};this[4]={1:t[12],2:t[13],3:t[14],4:t[15]}}S.Identity=function(){return new S([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])};S.prototype.mul=function(t){var i=[],e,s;for(e=1;e<=4;++e){for(s=1;s<=4;++s){i.push(this[e][1]*t[1][s]+this[e][2]*t[2][s]+this[e][3]*t[3][s]+this[e][4]*t[4][s])}}return new S(i)};S.prototype.xform=function(t){var i={},e=t.x,s=t.y,h=t.z,n=p(t.w)?t.w:1;i.x=e*this[1][1]+s*this[2][1]+h*this[3][1]+n*this[4][1];i.y=e*this[1][2]+s*this[2][2]+h*this[3][2]+n*this[4][2];i.z=e*this[1][3]+s*this[2][3]+h*this[3][3]+n*this[4][3];i.w=e*this[1][4]+s*this[2][4]+h*this[3][4]+n*this[4][4];return i};function z(t,i,e,n){var o,a,r,l,f=[],u=Math.PI*(3-Math.sqrt(5)),c=2/t;for(o=0;o<t;++o){a=o*c-1+c/2;r=Math.sqrt(1-a*a);l=o*u;f.push([h(l)*r*i,a*e,s(l)*r*n])}return f}function C(t,i,e,n,o){var a,r=[],l=Math.PI*(3-Math.sqrt(5)),f=2/t,u,c,d,g;for(u=0;u<t;++u){c=u*f-1+f/2;a=u*l;d=h(a);g=s(a);r.push(i?[c*e,d*n,g*o]:[d*e,c*n,g*o])}return r}function D(t,i,e,n,o,a){var r,l=[],f=Math.PI*2/i,u,c,d;for(u=0;u<i;++u){r=u*f;c=h(r);d=s(r);l.push(t?[a*e,c*n,d*o]:[c*e,a*n,d*o])}return l}function F(t,i,e,s){return C(t,0,i,e,s)}function M(t,i,e,s){return C(t,1,i,e,s)}function b(t,i,e,s,h){h=isNaN(h)?0:h*1;return D(0,t,i,e,s,h)}function A(t,i,e,s,h){h=isNaN(h)?0:h*1;return D(1,t,i,e,s,h)}function O(t,i){var e=t,s,h,n=(i*1).toPrecision(3)+")";if(t[0]==="#"){if(!r[t]){if(t.length===4){r[t]="rgba("+f[t[1]]+f[t[2]]+f[t[3]]}else{r[t]="rgba("+l[t.substr(1,2)]+l[t.substr(3,2)]+l[t.substr(5,2)]}}e=r[t]+n}else{if(t.substr(0,4)==="rgb("||t.substr(0,4)==="hsl("){e=t.replace("(","a(").replace(")",","+n)}else{if(t.substr(0,5)==="rgba("||t.substr(0,5)==="hsla("){s=t.lastIndexOf(",")+1,h=t.indexOf(")");i*=parseFloat(t.substring(s,h));e=t.substr(0,s)+i.toPrecision(3)+")"}}}return e}function B(t,i){if(window.G_vmlCanvasManager){return null}var e=g.createElement("canvas");e.width=t;e.height=i;return e}function E(){var t=B(3,3),i,e;if(!t){return false}i=t.getContext("2d");i.strokeStyle="#000";i.shadowColor="#fff";i.shadowBlur=3;i.globalAlpha=0;i.strokeRect(2,2,2,2);i.globalAlpha=1;e=i.getImageData(2,2,1,1);t=null;return e.data[0]>0}function I(t,i){var e=1024,s=t.weightGradient,h,n,o,a,r;if(t.gCanvas){n=t.gCanvas.getContext("2d")}else{t.gCanvas=h=B(e,1);if(!h){return null}n=h.getContext("2d");a=n.createLinearGradient(0,0,e,0);for(o in s){a.addColorStop(1-o,s[o])}n.fillStyle=a;n.fillRect(0,0,e,1)}r=n.getImageData(~~((e-1)*i),0,1,1).data;return"rgba("+r[0]+","+r[1]+","+r[2]+","+r[3]/255+")"}function N(t,i,s,h,n,o,a,r,l){var f=(o||0)+(a&&a[0]<0?e(a[0]):0),u=(o||0)+(a&&a[1]<0?e(a[1]):0),c,d;t.font=i;t.textBaseline="top";t.fillStyle=s;n&&(t.shadowColor=n);o&&(t.shadowBlur=o);a&&(t.shadowOffsetX=a[0],t.shadowOffsetY=a[1]);for(c=0;c<h.length;++c){d=l?(r-l[c])/2:0;t.fillText(h[c],f+d,u);u+=parseInt(i)}}function k(t,i,s,h,n,o,a,r,l,f,u,c,d){var g=h+e(l[0])+r+r,w=n+e(l[1])+r+r,m,p;m=B(g+f,w+u);if(!m){return null}p=m.getContext("2d");N(p,i,o,t,a,r,l,c,d);return m}function _(t,i,s,h){var n=e(h[0]),o=e(h[1]),a=t.width+(n>s?n+s:s*2),r=t.height+(o>s?o+s:s*2),l=(s||0)+(h[0]<0?n:0),f=(s||0)+(h[1]<0?o:0),u,c;u=B(a,r);if(!u){return null}c=u.getContext("2d");i&&(c.shadowColor=i);s&&(c.shadowBlur=s);h&&(c.shadowOffsetX=h[0],c.shadowOffsetY=h[1]);c.drawImage(t,l,f,t.width,t.height);return u}function L(t,i,e){var s=parseInt(t.toString().length*e),h=parseInt(e*2*t.length),n=B(s,h),o,a,r,l,f,u,c,d;if(!n){return null}o=n.getContext("2d");o.fillStyle="#000";o.fillRect(0,0,s,h);N(o,e+"px "+i,"#fff",t,0,0,[]);a=o.getImageData(0,0,s,h);r=a.width;l=a.height;d={min:{x:r,y:l},max:{x:-1,y:-1}};for(u=0;u<l;++u){for(f=0;f<r;++f){c=(u*r+f)*4;if(a.data[c+1]>0){if(f<d.min.x){d.min.x=f}if(f>d.max.x){d.max.x=f}if(u<d.min.y){d.min.y=u}if(u>d.max.y){d.max.y=u}}}}if(r!=s){d.min.x*=s/r;d.max.x*=s/r}if(l!=h){d.min.y*=s/l;d.max.y*=s/l}n=null;return d}function H(t){return"'"+t.replace(/(\'|\")/g,"").replace(/\s*,\s*/g,"', '")+"'"}function P(t,i,e){e=e||g;if(e.addEventListener){e.addEventListener(t,i,false)}else{e.attachEvent("on"+t,i)}}function R(t,i,e,s){var h=s.imageScale,n;if(!i.complete){return P("load",function(){R(t,i,e,s)},i)}if(!t.complete){return P("load",function(){R(t,i,e,s)},t)}i.width=i.width;i.height=i.height;if(h){t.width=i.width*h;t.height=i.height*h}e.w=t.width;e.h=t.height;if(s.txtOpt&&s.shadow){n=_(t,s.shadow,s.shadowBlur,s.shadowOffset);if(n){e.image=n;e.w=n.width;e.h=n.height}}}function X(t,i){var e=g.defaultView,s=i.replace(/\-([a-z])/g,function(t){return t.charAt(1).toUpperCase()});return e&&e.getComputedStyle&&e.getComputedStyle(t,null).getPropertyValue(i)||t.currentStyle&&t.currentStyle[s]}function W(t,i){var e=1,s;if(t.weightFrom){e=1*(i.getAttribute(t.weightFrom)||t.textHeight)}else{if(s=X(i,"font-size")){e=s.indexOf("px")>-1&&s.replace("px","")*1||s.indexOf("pt")>-1&&s.replace("pt","")*1.25||s*3.3}else{t.weight=false}}return e}function Y(t){return t.target&&p(t.target.id)?t.target.id:t.srcElement.parentNode.id}function q(t,i){var e,s,h=parseInt(X(i,"width"))/i.width,n=parseInt(X(i,"height"))/i.height;if(p(t.offsetX)){e={x:t.offsetX,y:t.offsetY}}else{s=tt(i.id);if(p(t.changedTouches)){t=t.changedTouches[0]}if(t.pageX){e={x:t.pageX-s.x,y:t.pageY-s.y}}}if(e&&h&&n){e.x/=h;e.y/=n}return e}function U(t){var i=t.target||t.fromElement.parentNode,e=nt.tc[i.id];if(e){e.mx=e.my=-1;e.UnFreeze();e.EndDrag()}}function G(t){var i,e=nt,s,h,n=Y(t);for(i in e.tc){s=e.tc[i];if(s.tttimer){clearTimeout(s.tttimer);s.tttimer=null}}if(n&&e.tc[n]){s=e.tc[n];if(h=q(t,s.canvas)){s.mx=h.x;s.my=h.y;s.Drag(t,h)}s.drawn=0}}function V(t){var i=nt,e=g.addEventListener?0:1,s=Y(t);if(s&&t.button==e&&i.tc[s]){i.tc[s].BeginDrag(t)}}function Z(t){var i=nt,e=g.addEventListener?0:1,s=Y(t),h;if(s&&t.button==e&&i.tc[s]){h=i.tc[s];G(t);if(!h.EndDrag()&&!h.touched){h.Clicked(t)}}}function j(t){var i=nt,e=Y(t);if(e&&t.changedTouches&&i.tc[e]){i.tc[e].touched=1;i.tc[e].BeginDrag(t)}}function J(t){var i=nt,e=Y(t);if(e&&t.changedTouches&&i.tc[e]){K(t);if(!i.tc[e].EndDrag()){i.tc[e].Draw();i.tc[e].Clicked(t)}}}function K(t){var i,e=nt,s,h,n=Y(t);for(i in e.tc){s=e.tc[i];if(s.tttimer){clearTimeout(s.tttimer);s.tttimer=null}}if(n&&e.tc[n]&&t.changedTouches){s=e.tc[n];if(h=q(t,s.canvas)){s.mx=h.x;s.my=h.y;s.Drag(t,h)}s.drawn=0}}function Q(t){var i=nt,e=Y(t);if(e&&i.tc[e]){t.cancelBubble=true;t.returnValue=false;t.preventDefault&&t.preventDefault();i.tc[e].Wheel((t.wheelDelta||t.detail)>0)}}function $(t){var i=nt.tc,e,s;t=t||(new Date).valueOf();for(e in i){s=i[e].interval;i[e].Draw(t)}nt.NextFrame(s)}function tt(t){var i=g.getElementById(t),e=i.getBoundingClientRect(),s=g.documentElement,h=g.body,n=window,o=n.pageXOffset||s.scrollLeft,a=n.pageYOffset||s.scrollTop,r=s.clientLeft||h.clientLeft,l=s.clientTop||h.clientTop;return{x:e.left+o-r,y:e.top+a-l}}function it(t,i,e,s){var h=t.radius*t.z1/(t.z1+t.z2+i.z);return{x:i.x*h*e,y:i.y*h*s,z:i.z,w:(t.z1-i.z)/t.z2}}function et(t){this.e=t;this.br=0;this.line=[];this.text=[];this.original=t.innerText||t.textContent}et.prototype.Lines=function(t){var i=t?1:0,e,s,h;t=t||this.e;e=t.childNodes;s=e.length;for(h=0;h<s;++h){if(e[h].nodeName=="BR"){this.text.push(this.line.join(" "));this.br=1}else{if(e[h].nodeType==3){if(this.br){this.line=[e[h].nodeValue];this.br=0}else{this.line.push(e[h].nodeValue)}}else{this.Lines(e[h])}}}i||this.br||this.text.push(this.line.join(" "));return this.text};et.prototype.SplitWidth=function(t,i,e,s){var h,n,o,a=[];i.font=s+"px "+e;for(h=0;h<this.text.length;++h){o=this.text[h].split(/\s+/);this.line=[o[0]];for(n=1;n<o.length;++n){if(i.measureText(this.line.join(" ")+" "+o[n]).width>t){a.push(this.line.join(" "));this.line=[o[n]]}else{this.line.push(o[n])}}a.push(this.line.join(" "))}return this.text=a};function st(t){this.ts=(new Date).valueOf();this.tc=t;this.x=this.y=this.w=this.h=this.sc=1;this.z=0;this.Draw=t.pulsateTo<1&&t.outlineMethod!="colour"?this.DrawPulsate:this.DrawSimple;this.SetMethod(t.outlineMethod)}u=st.prototype;u.SetMethod=function(t){var i={block:["PreDraw","DrawBlock"],colour:["PreDraw","DrawColour"],outline:["PostDraw","DrawOutline"],classic:["LastDraw","DrawOutline"],none:["LastDraw"]},e=i[t]||i.outline;if(t=="none"){this.Draw=function(){return 1}}else{this.drawFunc=this[e[1]]}this[e[0]]=this.Draw};u.Update=function(t,i,e,s,h,n,o,a){var r=this.tc.outlineOffset,l=2*r;this.x=h*t+o-r;this.y=h*i+a-r;this.w=h*e+l;this.h=h*s+l;this.sc=h;this.z=n};u.DrawOutline=function(t,i,e,s,h,n){t.strokeStyle=n;t.strokeRect(i,e,s,h)};u.DrawColour=function(t,i,e,s,h,n,o,a,r){return this[o.image?"DrawColourImage":"DrawColourText"](t,i,e,s,h,n,o,a,r)};u.DrawColourText=function(t,i,e,s,h,n,o,a,r){var l=o.colour;o.colour=n;o.alpha=1;o.Draw(t,a,r);o.colour=l;return 1};u.DrawColourImage=function(t,i,e,s,h,a,r,l,f){var u=t.canvas,c=~~n(i,0),d=~~n(e,0),g=o(u.width-c,s)+.5|0,m=o(u.height-d,h)+.5|0,p;if(w){w.width=g,w.height=m}else{w=B(g,m)}if(!w){return this.SetMethod("outline")}p=w.getContext("2d");p.drawImage(u,c,d,g,m,0,0,g,m);t.clearRect(c,d,g,m);r.alpha=1;r.Draw(t,l,f);t.setTransform(1,0,0,1,0,0);t.save();t.beginPath();t.rect(c,d,g,m);t.clip();t.globalCompositeOperation="source-in";t.fillStyle=a;t.fillRect(c,d,g,m);t.restore();t.globalCompositeOperation="destination-over";t.drawImage(w,0,0,g,m,c,d,g,m);t.globalCompositeOperation="source-over";return 1};u.DrawBlock=function(t,i,e,s,h,n){t.fillStyle=n;t.fillRect(i,e,s,h)};u.DrawSimple=function(t,i,e,s){var h=this.tc;t.setTransform(1,0,0,1,0,0);t.strokeStyle=h.outlineColour;t.lineWidth=h.outlineThickness;t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0;t.globalAlpha=1;return this.drawFunc(t,this.x,this.y,this.w,this.h,h.outlineColour,i,e,s)};u.DrawPulsate=function(t,i,e,s){var n=(new Date).valueOf()-this.ts,o=this.tc;t.setTransform(1,0,0,1,0,0);t.strokeStyle=o.outlineColour;t.lineWidth=o.outlineThickness;t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0;t.globalAlpha=o.pulsateTo+(1-o.pulsateTo)*(.5+h(2*Math.PI*n/(1e3*o.pulsateTime))/2);return this.drawFunc(t,this.x,this.y,this.w,this.h,o.outlineColour,i,e,s)};u.Active=function(t,i,e){return i>=this.x&&e>=this.y&&i<=this.x+this.w&&e<=this.y+this.h};u.PreDraw=u.PostDraw=u.LastDraw=v;function ht(t,i,e,s,h,n,o,a,r){var l=t.ctxt;this.tc=t;this.image=i.src?i:null;this.text=i.src?[]:i;this.text_original=r;this.line_widths=[];this.title=e.title||null;this.a=e;this.position={x:s[0],y:s[1],z:s[2]};this.x=this.y=this.z=0;this.w=h;this.h=n;this.colour=o||t.textColour;this.textFont=a||t.textFont;this.weight=this.sc=this.alpha=1;this.weighted=!t.weight;this.outline=new st(t);if(!this.image){this.textHeight=t.textHeight;this.extents=L(this.text,this.textFont,this.textHeight);this.Measure(l,t)}this.SetShadowColour=t.shadowAlpha?this.SetShadowColourAlpha:this.SetShadowColourFixed;this.SetDraw(t)}c=ht.prototype;c.EqualTo=function(t){var i=t.getElementsByTagName("img");if(this.a.href!=t.href){return 0}if(i.length){return this.image.src==i[0].src}return(t.innerText||t.textContent)==this.text_original};c.SetDraw=function(t){this.Draw=this.image?t.ie>7?this.DrawImageIE:this.DrawImage:this.DrawText;t.noSelect&&(this.CheckActive=v)};c.MeasureText=function(t){var i,e=this.text.length,s=0,h;for(i=0;i<e;++i){this.line_widths[i]=h=t.measureText(this.text[i]).width;s=n(s,h)}return s};c.Measure=function(t,i){this.h=this.extents?this.extents.max.y+this.extents.min.y:this.textHeight;t.font=this.font=this.textHeight+"px "+this.textFont;this.w=this.MeasureText(t);if(i.txtOpt){var e=i.txtScale,s=e*this.textHeight,h=s+"px "+this.textFont,n=[e*i.shadowOffset[0],e*i.shadowOffset[1]],o;t.font=h;o=this.MeasureText(t);this.image=k(this.text,h,s,o,e*this.h,this.colour,i.shadow,e*i.shadowBlur,n,e,e,o,this.line_widths);if(this.image){this.w=this.image.width/e;this.h=this.image.height/e}this.SetDraw(i);i.txtOpt=!!this.image}};c.SetFont=function(t,i){this.textFont=t;this.colour=i;this.extents=L(this.text,this.textFont,this.textHeight);this.Measure(this.tc.ctxt,this.tc)};c.SetWeight=function(t){if(!this.text.length){return}this.weight=t;this.Weight(this.tc.ctxt,this.tc);this.Measure(this.tc.ctxt,this.tc)};c.Weight=function(t,i){var e=this.weight,s=i.weightMode;this.weighted=true;if(s=="colour"||s=="both"){this.colour=I(i,(e-i.min_weight)/(i.max_weight-i.min_weight))}if(s=="size"||s=="both"){if(i.weightSizeMin>0&&i.weightSizeMax>i.weightSizeMin){this.textHeight=i.weightSize*(i.weightSizeMin+(i.weightSizeMax-i.weightSizeMin)*(e-i.min_weight)/(i.max_weight-i.min_weight))}else{this.textHeight=e*i.weightSize}}this.extents=L(this.text,this.textFont,this.textHeight)};c.SetShadowColourFixed=function(t,i,e){t.shadowColor=i};c.SetShadowColourAlpha=function(t,i,e){t.shadowColor=O(i,e)};c.DrawText=function(t,i,e){var s=this.tc,h=this.x,n=this.y,o=this.sc,a,r;t.globalAlpha=this.alpha;t.fillStyle=this.colour;s.shadow&&this.SetShadowColour(t,s.shadow,this.alpha);t.font=this.font;h+=i/o;n+=e/o-this.h/2;for(a=0;a<this.text.length;++a){r=h-this.line_widths[a]/2;t.setTransform(o,0,0,o,o*r,o*n);t.fillText(this.text[a],0,0);n+=this.textHeight}};c.DrawImage=function(t,i,e){var s=this.x,h=this.y,n=this.sc,o=this.image,a=this.w,r=this.h,l=this.alpha,f=this.shadow;t.globalAlpha=l;f&&this.SetShadowColour(t,f,l);s+=i/n-a/2;h+=e/n-r/2;t.setTransform(n,0,0,n,n*s,n*h);t.drawImage(o,0,0,a,r)};c.DrawImageIE=function(t,i,e){var s=this.image,h=this.sc,n=s.width=this.w*h,o=s.height=this.h*h,a=this.x*h+i-n/2,r=this.y*h+e-o/2;t.setTransform(1,0,0,1,0,0);t.globalAlpha=this.alpha;t.drawImage(s,a,r)};c.Calc=function(t){var i,e=this.tc,s=e.minBrightness,h=e.maxBrightness,n=e.max_radius;i=t.xform(this.position);i=it(e,i,e.stretchX,e.stretchY);this.x=i.x;this.y=i.y;this.z=i.z;this.sc=i.w;this.alpha=x(s+(h-s)*(n-this.z)/(2*n),0,1)};c.CheckActive=function(t,i,e){var s=this.tc,h=this.outline,n=this.w,o=this.h,a=this.x-n/2,r=this.y-o/2;h.Update(a,r,n,o,this.sc,this.z,i,e);return h.Active(t,s.mx,s.my)?h:null};c.Clicked=function(t){var i=this.a,e=i.target,s=i.href,h;if(e!=""&&e!="_self"){if(self.frames[e]){self.frames[e].document.location=s}else{try{if(top.frames[e]){top.frames[e].document.location=s;return}}catch(t){}window.open(s,e)}return}if(g.createEvent){h=g.createEvent("MouseEvents");h.initMouseEvent("click",1,1,window,0,0,0,0,0,0,0,0,0,0,null);if(!i.dispatchEvent(h)){return}}else{if(i.fireEvent){if(!i.fireEvent("onclick")){return}}}g.location=s};function nt(t,i,e){var s,h,n=g.getElementById(t),a=["id","class","innerHTML"];if(!n){throw 0}if(p(window.G_vmlCanvasManager)){n=window.G_vmlCanvasManager.initElement(n);this.ie=parseFloat(navigator.appVersion.split("MSIE")[1])}if(n&&(!n.getContext||!n.getContext("2d").fillText)){h=g.createElement("DIV");for(s=0;s<a.length;++s){h[a[s]]=n[a[s]]}n.parentNode.insertBefore(h,n);n.parentNode.removeChild(n);throw 0}for(s in nt.options){this[s]=e&&p(e[s])?e[s]:p(nt[s])?nt[s]:nt.options[s]}this.canvas=n;this.ctxt=n.getContext("2d");this.z1=250/this.depth;this.z2=this.z1/this.zoom;this.radius=o(n.height,n.width)*.0075;this.max_weight=0;this.min_weight=200;this.textFont=this.textFont&&H(this.textFont);this.textHeight*=1;this.pulsateTo=x(this.pulsateTo,0,1);this.minBrightness=x(this.minBrightness,0,1);this.maxBrightness=x(this.maxBrightness,this.minBrightness,1);this.ctxt.textBaseline="top";this.lx=(this.lock+"").indexOf("x")+1;this.ly=(this.lock+"").indexOf("y")+1;this.frozen=0;this.dx=this.dy=0;this.touched=0;this.source=i||t;this.transform=S.Identity();this.time=(new Date).valueOf();this.Animate=this.dragControl?this.AnimateDrag:this.AnimatePosition;if(this.shadowBlur||this.shadowOffset[0]||this.shadowOffset[1]){this.ctxt.shadowColor=this.shadow;this.shadow=this.ctxt.shadowColor;this.shadowAlpha=E()}else{delete this.shadow}this.Load();if(i&&this.hideTags){(function(t){if(nt.loaded){t.HideTags()}else{P("load",function(){t.HideTags()},window)}})(this)}this.yaw=this.initial?this.initial[0]*this.maxSpeed:0;this.pitch=this.initial?this.initial[1]*this.maxSpeed:0;if(this.tooltip){if(this.tooltip=="native"){this.Tooltip=this.TooltipNative}else{this.Tooltip=this.TooltipDiv;if(!this.ttdiv){this.ttdiv=g.createElement("div");this.ttdiv.className=this.tooltipClass;this.ttdiv.style.position="absolute";this.ttdiv.style.zIndex=n.style.zIndex+1;P("mouseover",function(t){t.target.style.display="none"},this.ttdiv);g.body.appendChild(this.ttdiv)}}}else{this.Tooltip=this.TooltipNone}if(!this.noMouse&&!m[t]){P("mousemove",G,n);P("mouseout",U,n);P("mouseup",Z,n);P("touchstart",j,n);P("touchend",J,n);P("touchcancel",J,n);P("touchmove",K,n);if(this.dragControl){P("mousedown",V,n);P("selectstart",v,n)}if(this.wheelZoom){P("mousewheel",Q,n);P("DOMMouseScroll",Q,n)}m[t]=1}nt.started||(nt.started=setTimeout($,this.interval))}d=nt.prototype;d.SourceElements=function(){if(g.querySelectorAll){return g.querySelectorAll("#"+this.source)}return[g.getElementById(this.source)]};d.HideTags=function(){var t=this.SourceElements(),i;for(i=0;i<t.length;++i){t[i].style.display="none"}};d.GetTags=function(){var t=this.SourceElements(),i,e=[],s,h;for(s=0;s<t.length;++s){i=t[s].getElementsByTagName("a");for(h=0;h<i.length;++h){e.push(i[h])}}return e};d.CreateTag=function(t,i){var e=t.getElementsByTagName("img"),s,h,n,o;i=i||[0,0,0];if(e.length){s=new Image;s.src=e[0].src;h=new ht(this,s,t,i,0,0);R(s,e[0],h,this);return h}n=new et(t);h=n.Lines();o=this.textFont||H(X(t,"font-family"));if(this.splitWidth){h=n.SplitWidth(this.splitWidth,this.ctxt,o,this.textHeight)}return new ht(this,h,t,i,2,this.textHeight+2,this.textColour||X(t,"color"),o,n.original)};d.UpdateTag=function(t,i){var e=this.textColour||X(i,"color"),s=this.textFont||H(X(i,"font-family"));t.title=i.title;if(t.colour!=e||t.textFont!=s){t.SetFont(s,e)}};d.Weight=function(t){var i=t.length,e,s,h=[];for(s=0;s<i;++s){e=W(this,t[s].a);if(e>this.max_weight){this.max_weight=e}if(e<this.min_weight){this.min_weight=e}h.push(e)}if(this.max_weight>this.min_weight){for(s=0;s<i;++s){t[s].SetWeight(h[s])}}};d.Load=function(){var t=this.GetTags(),i=[],e,s,h,o,a,r,l,f=[],u={sphere:z,vcylinder:F,hcylinder:M,vring:b,hring:A};if(t.length){f.length=t.length;for(l=0;l<t.length;++l){f[l]=l}this.shuffleTags&&T(f);h=100*this.radiusX;o=100*this.radiusY;a=100*this.radiusZ;this.max_radius=n(h,n(o,a));if(this.shapeArgs){this.shapeArgs[0]=t.length}else{s=this.shape.toString().split(/[(),]/);e=s.shift();this.shape=u[e]||u.sphere;this.shapeArgs=[t.length,h,o,a].concat(s)}r=this.shape.apply(this,this.shapeArgs);this.listLength=t.length;for(l=0;l<t.length;++l){i.push(this.CreateTag(t[f[l]],r[l]))}this.weight&&this.Weight(i,true)}this.taglist=i};d.Update=function(){var t=this.GetTags(),i=[],e=this.taglist,s,h=[],n=[],o,r,l,f,u;if(!this.shapeArgs){return this.Load()}if(t.length){l=this.listLength=t.length;r=e.length;for(f=0;f<r;++f){i.push(e[f]);n.push(f)}for(f=0;f<l;++f){for(u=0,s=0;u<r;++u){if(e[u].EqualTo(t[f])){this.UpdateTag(i[u],t[f]);s=n[u]=-1}}if(!s){h.push(f)}}for(f=0,u=0;f<r;++f){if(n[u]==-1){n.splice(u,1)}else{++u}}if(n.length){T(n);while(n.length&&h.length){f=n.shift();u=h.shift();i[f]=this.CreateTag(t[u])}n.sort(function(t,i){return t-i});while(n.length){i.splice(n.pop(),1)}}u=i.length/(h.length+1);f=0;while(h.length){i.splice(a(++f*u),0,this.CreateTag(t[h.shift()]))}this.shapeArgs[0]=l=i.length;o=this.shape.apply(this,this.shapeArgs);for(f=0;f<l;++f){i[f].position={x:o[f][0],y:o[f][1],z:o[f][2]}}this.weight&&this.Weight(i)}this.taglist=i};d.SetShadow=function(t){t.shadowBlur=this.shadowBlur;t.shadowOffsetX=this.shadowOffset[0];t.shadowOffsetY=this.shadowOffset[1]};d.Draw=function(t){if(this.paused){return}var i=this.canvas,e=i.width,s=i.height,h=0,n=(t-this.time)*this.interval/1e3,o=e/2+this.offsetX,a=s/2+this.offsetY,r=this.ctxt,l,f,u,c=-1,d=this.taglist,g=d.length,w=this.frontSelect,m=this.centreFunc==v;this.time=t;if(this.frozen&&this.drawn){return this.Animate(e,s,n)}r.setTransform(1,0,0,1,0,0);this.active=null;for(u=0;u<g;++u){d[u].Calc(this.transform)}d=y(d,function(t,i){return i.z-t.z});for(u=0;u<g;++u){f=this.mx>=0&&this.my>=0&&this.taglist[u].CheckActive(r,o,a);if(f&&f.sc>h&&(!w||f.z<=0)){l=f;c=u;l.tag=this.taglist[u];h=f.sc}}this.active=l;this.txtOpt||this.shadow&&this.SetShadow(r);r.clearRect(0,0,e,s);for(u=0;u<g;++u){if(!m&&d[u].z<=0){try{this.centreFunc(r,e,s,o,a)}catch(t){alert(t);this.centreFunc=v}m=true}if(!(l&&l.tag==d[u]&&l.PreDraw(r,d[u],o,a))){d[u].Draw(r,o,a)}l&&l.tag==d[u]&&l.PostDraw(r)}if(this.freezeActive&&l){this.Freeze()}else{this.UnFreeze();this.drawn=g==this.listLength}this.Animate(e,s,n);l&&l.LastDraw(r);i.style.cursor=l?this.activeCursor:"";this.Tooltip(l,this.taglist[c])};d.TooltipNone=function(){};d.TooltipNative=function(t,i){this.canvas.title=t&&i.title?i.title:""};d.TooltipDiv=function(t,i){var e=this,s=e.ttdiv.style,h=e.canvas.id,n="none";if(t&&i.title){if(i.title!=e.ttdiv.innerHTML){s.display=n}e.ttdiv.innerHTML=i.title;i.title=e.ttdiv.innerHTML;if(s.display==n&&!e.tttimer){e.tttimer=setTimeout(function(){var t=tt(h);s.display="block";s.left=t.x+e.mx+"px";s.top=t.y+e.my+24+"px";e.tttimer=null},e.tooltipDelay)}}else{s.display=n}};d.Transform=function(t,i,e){if(i||e){var n=s(i),o=h(i),a=s(e),r=h(e),l=new S([r,0,a,0,0,1,0,0,-a,0,r,0,0,0,0,1]),f=new S([1,0,0,0,0,o,-n,0,0,n,o,0,0,0,0,1]);t.transform=t.transform.mul(l.mul(f))}};d.AnimatePosition=function(t,i,e){var s=this,h=s.mx,n=s.my,o,a;if(!s.frozen&&h>=0&&n>=0&&h<t&&n<i){o=s.maxSpeed,a=s.reverse?-1:1;s.lx||(s.yaw=a*e*(o*2*h/t-o));s.ly||(s.pitch=a*e*-(o*2*n/i-o));s.initial=null}else{if(!s.initial){if(s.frozen&&!s.freezeDecel){s.yaw=s.pitch=0}else{s.Decel(s)}}}this.Transform(s,s.pitch,s.yaw)};d.AnimateDrag=function(t,i,e){var s=this,h=100*e*s.maxSpeed/s.max_radius/s.zoom;if(s.dx||s.dy){s.lx||(s.yaw=s.dx*h/s.stretchX);s.ly||(s.pitch=s.dy*-h/s.stretchY);s.dx=s.dy=0;s.initial=null}else{if(!s.initial){s.Decel(s)}}this.Transform(s,s.pitch,s.yaw)};d.Freeze=function(){if(!this.frozen){this.preFreeze=[this.yaw,this.pitch];this.frozen=1;this.drawn=0}};d.UnFreeze=function(){if(this.frozen){this.yaw=this.preFreeze[0];this.pitch=this.preFreeze[1];this.frozen=0}};d.Decel=function(t){var i=t.minSpeed,s=e(t.yaw),h=e(t.pitch);if(!t.lx&&s>i){t.yaw=s>t.z0?t.yaw*t.decel:0}if(!t.ly&&h>i){t.pitch=h>t.z0?t.pitch*t.decel:0}};d.Zoom=function(t){this.z2=this.z1*(1/t);this.drawn=0};d.Clicked=function(t){var i=this.active;try{i&&i.tag&&i.tag.Clicked(t)}catch(t){}};d.Wheel=function(t){var i=this.zoom+this.zoomStep*(t?1:-1);this.zoom=o(this.zoomMax,n(this.zoomMin,i));this.Zoom(this.zoom)};d.BeginDrag=function(t){this.down=q(t,this.canvas);t.cancelBubble=true;t.returnValue=false;t.preventDefault&&t.preventDefault()};d.Drag=function(t,i){if(this.dragControl&&this.down){var e=this.dragThreshold*this.dragThreshold,s=i.x-this.down.x,h=i.y-this.down.y;if(this.dragging||s*s+h*h>e){this.dx=s;this.dy=h;this.dragging=1;this.down=i}}};d.EndDrag=function(){var t=this.dragging;this.dragging=this.down=null;return t};d.Pause=function(){this.paused=true};d.Resume=function(){this.paused=false};nt.Start=function(t,i,e){nt.tc[t]=new nt(t,i,e)};function ot(t,i){nt.tc[i]&&nt.tc[i][t]()}nt.Pause=function(t){ot("Pause",t)};nt.Resume=function(t){ot("Resume",t)};nt.Reload=function(t){ot("Load",t)};nt.Update=function(t){ot("Update",t)};nt.NextFrame=function(t){var i=window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;nt.NextFrame=i?nt.NextFrameRAF:nt.NextFrameTimeout;nt.NextFrame(t)};nt.NextFrameRAF=function(){requestAnimationFrame($)};nt.NextFrameTimeout=function(t){setTimeout($,t)};nt.tc={};nt.options={z1:2e4,z2:2e4,z0:2e-4,freezeActive:false,freezeDecel:false,activeCursor:"pointer",pulsateTo:1,pulsateTime:3,reverse:false,depth:.5,maxSpeed:.05,minSpeed:0,decel:.95,interval:20,minBrightness:.1,maxBrightness:1,outlineColour:"#ffff99",outlineThickness:2,outlineOffset:5,outlineMethod:"outline",textColour:"#ff99ff",textHeight:15,textFont:"Helvetica, Arial, sans-serif",shadow:"#000",shadowBlur:0,shadowOffset:[0,0],initial:null,hideTags:true,zoom:1,weight:false,weightMode:"size",weightFrom:null,weightSize:1,weightSizeMin:null,weightSizeMax:null,weightGradient:{0:"#f00",.33:"#ff0",.66:"#0f0",1:"#00f"},txtOpt:true,txtScale:2,frontSelect:false,wheelZoom:true,zoomMin:.3,zoomMax:3,zoomStep:.05,shape:"sphere",lock:null,tooltip:null,tooltipDelay:300,tooltipClass:"tctooltip",radiusX:1,radiusY:1,radiusZ:1,stretchX:1,stretchY:1,offsetX:0,offsetY:0,shuffleTags:false,noSelect:false,noMouse:false,imageScale:1,paused:false,dragControl:false,dragThreshold:4,centreFunc:v,splitWidth:0};for(t in nt.options){nt[t]=nt.options[t]}window.TagCanvas=nt;P("load",function(){nt.loaded=1},window)})();