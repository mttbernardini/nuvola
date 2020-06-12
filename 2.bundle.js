(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],[,,function(t,e,s){"use strict";s.r(e),e.default=class{constructor(t,e,i){this.navigator=t,this.data=e,this.view=s(5)(`./${i}.html`).default.cloneNode(!0)}setup(){}}},,function(t,e,s){"use strict";s.r(e);var i=s(8),n=s.n(i);let r;class a{constructor(){this.w=0,this.h=0,this.x=0,this.y=0}setSize(t,e){return this.w=t,this.h=e,this}setPosition(t,e){return this.x=t,this.y=e,this}isOver(){return r.mouseX>this.x&&r.mouseX<this.x+this.w&&r.mouseY>this.y&&r.mouseY<this.y+this.h}}var h;!function(t){t[t.HORIZONTAL=0]="HORIZONTAL",t[t.VERTICAL=1]="VERTICAL"}(h||(h={}));class o extends a{constructor(t,e,s,i){super(),this.thumb_d=30,this.thumb_x=new u(t,e,s),this.thumb_y=new u(t,e,s),this.thumb_d=i}setValue(t,e){let s=this.thumb_x.setValue(t),i=this.thumb_y.setValue(e);this.onChange&&(s||i)&&this.onChange(this)}getValue(){return[this.thumb_x.v,this.thumb_y.v]}update(){this.isOver()&&r.mouseIsPressed&&this.setValue(this.thumb_x.position2value(r.mouseX,this.startX,this.endX),this.thumb_y.position2value(r.mouseY,this.startY,this.endY)),this.thumb_x.update(),this.thumb_y.update()}draw(){this.update(),r.noStroke(),r.fill(10,30,80),r.rect(this.x,this.y,this.w,this.h),r.fill(this.isOver?150:200);let t=this.thumb_x.value2position(this.thumb_x.drawn_v,this.startX,this.endX),e=this.thumb_y.value2position(this.thumb_y.drawn_v,this.startY,this.endY);r.ellipseMode(r.CENTER),r.ellipse(t,e,this.thumb_d,this.thumb_d)}get startX(){return this.x+this.thumb_d/2}get endX(){return this.x+this.w-this.thumb_d/2}get startY(){return this.y+this.h-this.thumb_d/2}get endY(){return this.y+this.thumb_d/2}}class u{constructor(t,e,s){this.value=0,this.drawn_value=0,this.min_v=t,this.max_v=e,this.inertia=s}get v(){return this.value}set v(t){this.setValue(t)}get drawn_v(){return this.drawn_value}setValue(t){t=this.constrain(t);let e=this.value;return this.value=t,t!=e}update(){this.drawn_value+=(this.value-this.drawn_value)/this.inertia}position2value(t,e,s){let i=this.constrain((t-e)/(s-e),0,1);return(this.max_v-this.min_v)*i+this.min_v}value2position(t,e,s){return(t-this.min_v)/(this.max_v-this.min_v)*(s-e)+e}constrain(t,e=this.min_v,s=this.max_v){return Math.min(Math.max(t,e),s)}}var l=function(t){let e;r=t,t.setup=()=>{t.createCanvas(300,300),e=new o(0,1,2,20),e.setPosition(0,0).setSize(300,300).setValue(.5,.5)},t.draw=()=>{e.draw()},t.readValue=()=>e.getValue()},d=s(2);e.default=class extends d.default{setup(){this.mood_picker=new n.a(l,this.view.querySelector("#mood-picker")),this.view.querySelector("#create").addEventListener("click",()=>this.create_melody())}create_melody(){this.view.classList.remove("error"),this.view.classList.add("loading"),this.view.querySelector("#create").disabled=!0;let[t,e]=this.mood_picker.readValue();this.fetch_melody(t,e).then(t=>{this.mood_picker.remove(),this.navigator.goto("result",t)}).catch(t=>{this.view.classList.remove("loading"),this.view.classList.add("error"),this.view.querySelector("#create").disabled=!1,setTimeout(()=>this.view.classList.remove("error"),2e3)})}async fetch_melody(t,e){try{let s=await fetch(`https://nuvola-ym.herokuapp.com/?valence=${t}&arousal=${e}`);if(s.ok)return s}catch(t){throw new Error(`Cannot reach back-end API (https://nuvola-ym.herokuapp.com/ → http status: ${response.status})`)}}}},function(t,e,s){var i={"./request.html":6,"./result.html":7};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id=5},function(t,e,s){"use strict";s.r(e),e.default=function(){const t=document.createElement("div");return t.innerHTML='<div class="view request-view">\n\n\t<div class="row intro">\n\t\t<span class="description">Inspire me...</span>\n\t</div>\n\n\t<div class="row mood-picker" id="mood-picker">\n\t\t\x3c!-- canvas will be attached here --\x3e\n\t</div>\n\n\t<div class="row actions">\n\t\t<button class="btn btn-go" id="create">Impress me</button>\n\t\t<span class="error-msg">Network problem, retry in some minutes</span>\n\t</div>\n\n</div>\n',t.firstChild}()},function(t,e,s){"use strict";s.r(e),e.default=function(){const t=document.createElement("div");return t.innerHTML='<div class="view result-view">\n\n\t<div class="row intro">\n\t\t<span class="description">Your generated music piece</span>\n\t</div>\n\n\t<div class="row sheet" id="sheet">\n\n\t</div>\n\n\t<div class="row actions">\n\t\t<button class="btn btn-play" id="play-btn">Play</button>\n\t\t<button class="btn btn-dw" id="dw-btn">Download</button>\n\t\t<button class="btn btn-reset" id="reset-btn">Restart</button>\n\t</div>\n\n</div>\n',t.firstChild}()}]]);