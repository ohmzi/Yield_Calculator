var __awaiter=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function a(e){try{p(i.next(e))}catch(t){n(t)}}function s(e){try{p(i.throw(e))}catch(t){n(t)}}function p(e){e.done?r(e.value):new o((function(t){t(e.value)})).then(a,s)}p((i=i.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var o,i,r,n,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(r=2&n[0]?i.return:n[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,n[1])).done)return r;switch(i=0,r&&(n=[2&n[0],r.value]),n[0]){case 0:case 1:r=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){a.label=n[1];break}if(6===n[0]&&a.label<r[1]){a.label=r[1],r=n;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(n);break}r[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(s){n=[6,s],i=0}finally{o=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{VgKV:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return f}));var i=o("c1op"),r=(o("AfW+"),o("aiEM"),o("+4pY")),n=(o("kBU6"),o("pori")),a=o("Dl6n"),s=o("m9yc"),p=o("K6rM"),l=function(e,t){var o="top",i="left",n=e.querySelector(".popover-content"),a=n.getBoundingClientRect(),s=a.width,p=a.height,l=e.ownerDocument.defaultView.innerWidth,d=e.ownerDocument.defaultView.innerHeight,u=t&&t.target&&t.target.getBoundingClientRect(),h=null!=u&&"top"in u?u.top:d/2-p/2,f=null!=u&&"left"in u?u.left:l/2,m=u&&u.width||0,v=u&&u.height||0,b=e.querySelector(".popover-arrow"),g=b.getBoundingClientRect(),w=g.width,y=g.height;null==u&&(b.style.display="none");var x={top:h+v,left:f+m/2-w/2},j={top:h+v+(y-1),left:f+m/2-s/2},O=!1,D=!1;j.left<c+25?(O=!0,j.left=c):s+c+j.left+25>l&&(D=!0,j.left=l-s-c,i="right"),h+v+p>d&&h-p>0?(x.top=h-(y+1),j.top=h-p-(y-1),e.className=e.className+" popover-bottom",o="bottom"):h+v+p>d&&(n.style.bottom=c+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",n.style.top=j.top+"px",n.style.left=j.left+"px",O&&(n.style.left="calc("+j.left+"px + var(--ion-safe-area-left, 0px))"),D&&(n.style.left="calc("+j.left+"px - var(--ion-safe-area-right, 0px))"),n.style.transformOrigin=o+" "+i;var k=Object(r.a)(),P=Object(r.a)(),E=Object(r.a)();return P.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),k.addElement(e).easing("ease").duration(100).addAnimation([P,E])},c=5,d=function(e){var t=Object(r.a)(),o=Object(r.a)(),i=Object(r.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,i])},u=function(e,t){var o=e.ownerDocument,i="rtl"===o.dir,n="top",a=i?"right":"left",s=e.querySelector(".popover-content"),p=s.getBoundingClientRect(),l=p.width,c=p.height,d=o.defaultView.innerWidth,u=o.defaultView.innerHeight,h=t&&t.target&&t.target.getBoundingClientRect(),f=null!=h&&"bottom"in h?h.bottom:u/2-c/2,m=h&&h.height||0,v={top:f,left:null!=h&&"left"in h?i?h.left-l+h.width:h.left:d/2-l/2};v.left<12?(v.left=12,a="left"):l+12+v.left>d&&(v.left=d-l-12,a="right"),f+m+c>u&&f-c>0?(v.top=f-c-m,e.className=e.className+" popover-bottom",n="bottom"):f+m+c>u&&(s.style.bottom="12px");var b=Object(r.a)(),g=Object(r.a)(),w=Object(r.a)(),y=Object(r.a)(),x=Object(r.a)();return g.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),w.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),y.addElement(s).beforeStyles({top:v.top+"px",left:v.left+"px","transform-origin":n+" "+a}).fromTo("transform","scale(0.001)","scale(1)"),x.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),b.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([g,w,y,x])},h=function(e){var t=Object(r.a)(),o=Object(r.a)(),i=Object(r.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,i])},f=function(){function e(e){var t=this;Object(i.l)(this,e),this.presented=!1,this.mode=Object(i.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,n.a)},this.onLifecycle=function(e){var o=t.usersElement,i=m[e.type];if(o&&i){var r=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(r)}},Object(n.e)(this.el),this.didPresent=Object(i.e)(this,"ionPopoverDidPresent",7),this.willPresent=Object(i.e)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i.e)(this,"ionPopoverDidDismiss",7)}return e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,o;return __generator(this,(function(i){switch(i.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),o=this,[4,Object(s.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return o.usersElement=i.sent(),[4,Object(p.a)(this.usersElement)];case 2:return[2,(i.sent(),Object(n.f)(this,"popoverEnter",l,u,this.event))]}}))}))},e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var o;return __generator(this,(function(i){switch(i.label){case 0:return[4,Object(n.g)(this,e,t,"popoverLeave",d,h,this.event)];case 1:return o=i.sent(),o?[4,Object(s.b)(this.delegate,this.usersElement)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,o]}}))}))},e.prototype.onDidDismiss=function(){return Object(n.h)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(n.h)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=Object(i.d)(this),o=this.onLifecycle;return Object(i.i)(i.a,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(a.b)(this.cssClass)),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(i.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.i)("div",{class:"popover-wrapper"},Object(i.i)("div",{class:"popover-arrow"}),Object(i.i)("div",{class:"popover-content"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:!0,configurable:!0}),e}(),m={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);