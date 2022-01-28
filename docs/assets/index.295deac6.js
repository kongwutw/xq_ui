var xe=Object.defineProperty,be=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var G=(e,o,t)=>o in e?xe(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,A=(e,o)=>{for(var t in o||(o={}))qe.call(o,t)&&G(e,t,o[t]);if(W)for(var t of W(o))$e.call(o,t)&&G(e,t,o[t]);return e},V=(e,o)=>be(e,ye(o));import{d as m,t as Fe,c as F,o as l,a as r,n as O,u as v,b as z,p as T,e as I,f as c,g as Ce,h as b,r as w,i as D,T as Ee,j as i,k as y,l as n,w as d,m as C,q as ke,s as h,v as P,F as f,x as S,y as Be,z as we,A as De,B as Ae,C as Ve}from"./vendor.8bec2572.js";const ze=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const a of u)if(a.type==="childList")for(const _ of a.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function t(u){const a={};return u.integrity&&(a.integrity=u.integrity),u.referrerpolicy&&(a.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?a.credentials="include":u.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(u){if(u.ep)return;u.ep=!0;const a=t(u);fetch(u.href,a)}};ze();var q=(e,o)=>{const t=e.__vccOpts||e;for(const[s,u]of o)t[s]=u;return t};const Se=e=>(T("data-v-19370d80"),e=e(),I(),e),Le=Se(()=>c("span",null,null,-1)),je=[Le],Oe={name:"XqSwitch"},Te=m(V(A({},Oe),{props:{modelValue:{type:Boolean,default:!1},activeColor:{type:String,default:"#18a058"},inactiveColor:{type:String,default:"#dbdbdb"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"}},emits:["update:modelValue"],setup(e,{emit:o}){const t=e,s=()=>{t.disabled||o("update:modelValue",!t.modelValue)},{modelValue:u,disabled:a,size:_}=Fe(t),p=F(()=>({["xq-switch-checked"]:u.value,["xq-switch-disabled"]:a.value,[`xq-switch-${_.value}`]:_.value}));return(g,x)=>(l(),r("button",{class:O(["xq-switch",v(p)]),onClick:s,style:z({background:v(u)?e.activeColor:e.inactiveColor})},je,6))}}));var Ie=q(Te,[["__scopeId","data-v-19370d80"]]);const Pe={key:0,class:"xq-loadingIndicator"},Ue={key:1,class:"slot-icon-left"},Xe={key:2,class:"slot-icon-right"},Ne={name:"XqButton"},U=m(V(A({},Ne),{props:{theme:{type:String,default:"default"},dashed:{type:Boolean,default:!1},size:{type:String,default:"default"},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},iconPlacement:{type:String,default:"left"}},setup(e){const o=e,{theme:t,dashed:s,size:u,round:a,disabled:_,circle:p}=o,g=Ce(),x=F(()=>({[`xq-theme-${t}`]:t,["is-dashed"]:s,[`xq-button-${u}`]:u,["is-round"]:a,["is-circle"]:p,["is-disabled"]:_}));return(k,B)=>(l(),r("button",{class:O(["xq-button",v(x)])},[e.loading?(l(),r("span",Pe)):b("",!0),e.iconPlacement==="left"&&v(g).icon?(l(),r("div",Ue,[w(k.$slots,"icon")])):b("",!0),w(k.$slots,"default"),e.iconPlacement==="right"&&v(g).icon?(l(),r("div",Xe,[w(k.$slots,"icon")])):b("",!0)],2))}}));const Me={class:"xq-dialog"},He={class:"xq-dialog-wrapper"},Re=c("p",null,"\u8FD9\u662F\u4E00\u6761\u6D88\u606F",-1),We=i("\u53D6\u6D88"),Ge=i("\u786E\u8BA4"),Qe={name:"XqDialog"},Ke=m(V(A({},Qe),{props:{modelValue:{type:Boolean,default:!1},overlay:{type:!0,default:!0},title:{type:String,default:"\u6807\u9898"},overlayClosable:{type:Boolean,default:!0},confirm:{type:Function},cancel:{type:Function}},emits:["update:modelValue","onOverlayClick"],setup(e,{emit:o}){const t=e,s=()=>{o("update:modelValue",!1)},u=()=>{t.overlayClosable&&s(),o("onOverlayClick")},a=()=>{var p;((p=t.confirm)==null?void 0:p.call(t))!==!1&&s()},_=()=>{var p;((p=t.cancel)==null?void 0:p.call(t))!==!1&&s()};return(p,g)=>e.modelValue?(l(),D(Ee,{key:0,to:"body"},[e.overlay?(l(),r("div",{key:0,class:"xq-dialog-overlay",onClick:u})):b("",!0),c("div",Me,[c("div",He,[c("header",null,[w(p.$slots,"title",{},()=>[i(y(e.title),1)]),c("span",{class:"xq-dialog-close",onClick:s})]),c("main",null,[w(p.$slots,"default",{},()=>[Re])]),c("footer",null,[w(p.$slots,"footer",{},()=>[n(U,{onClick:_},{default:d(()=>[We]),_:1}),n(U,{theme:"primary",onClick:a},{default:d(()=>[Ge]),_:1})])])])])])):b("",!0)}}));const Ye=["src","alt"],Je={name:"XqAvatar"},Ze=m(V(A({},Je),{props:{size:{type:[String,Number],default:"default"},src:{type:String,default:""},shape:{type:String,default:"circle"},alt:{type:String},color:{type:String},backgroundColor:{type:String}},emits:["error"],setup(e,{emit:o}){const t=e,s=C(!1),{size:u,shape:a,color:_,backgroundColor:p}=t,g=F(()=>({[`xq-avatar-${u}`]:typeof u=="string",[`xq-avatar-${a}`]:a})),x=F(()=>({width:typeof u=="number"?`${u}px`:"",height:typeof u=="number"?`${u}px`:"",color:_,backgroundColor:p}));ke(()=>t.src,()=>s.value=!1);const k=B=>{s.value=!0,o("error",B)};return(B,L)=>(l(),r("span",{class:O(["xq-avatar",v(g)]),style:z(v(x))},[e.src&&!s.value?(l(),r("img",{key:0,src:e.src,alt:e.alt,onError:k},null,40,Ye)):b("",!0),w(B.$slots,"default")],6))}})),et=[U,Ie,Ke,Ze];function tt(e){for(const o of et)e.component(o.name,o)}const ot={};function nt(e,o){const t=h("router-view");return l(),D(t)}var ut=q(ot,[["render",nt]]);const st={class:"header-ctn"},at=c("img",{src:"https://img.yibiankeji.com/logo/p/pLogo.png",style:{width:"30px",height:"30px"},alt:""},null,-1),lt=c("span",null,"XQ UI",-1),ct=[at,lt],rt={class:"menu-wrap"},it=i("\u9996\u9875"),dt=i("\u6587\u6863"),_t=c("a",{href:"https://github.com/kongwutw/xq_ui",target:"_blank"},"GitHub",-1),pt=c("span",null,"0.0.1",-1),Q=m({setup(e){const o=P(),t=()=>{o.push({path:"/"})};return(s,u)=>{const a=h("router-link");return l(),r("div",st,[c("div",{class:"logo-wrap",onClick:t},ct),c("div",rt,[n(a,{exact:"",to:"/"},{default:d(()=>[it]),_:1}),n(a,{to:"/doc"},{default:d(()=>[dt]),_:1}),_t,pt])])}}});const K=e=>(T("data-v-2ad1647e"),e=e(),I(),e),mt={class:"content-wrap"},ht=K(()=>c("h1",null,"XQ UI",-1)),ft=K(()=>c("p",{style:{margin:"50px 0"}},"\u4E00\u4E2A\u57FA\u4E8E vite \u6784\u5EFA\u7684 Vue3 \u7EC4\u4EF6\u5E93~",-1)),vt=i("\u5F00\u59CB\u4E0A\u624B"),gt=m({name:"home"}),xt=m(V(A({},gt),{setup(e){const o=P(),t=()=>{o.push({name:"doc"})};return(s,u)=>{const a=h("xq-button");return l(),r("div",null,[n(Q,{toggleMenuButton:!1}),c("div",mt,[ht,ft,n(a,{onClick:t,theme:"primary"},{default:d(()=>[vt]),_:1})])])}}}));var bt=q(xt,[["__scopeId","data-v-2ad1647e"]]);const yt=["innerHTML"],qt=m({props:{content:{type:String,required:!0}},setup(e){return(o,t)=>(l(),r("article",{class:"markdown-body",innerHTML:e.content},null,8,yt))}}),$t=`<h1>\u5FEB\u901F\u4F7F\u7528</h1>
<p>\u8BF7\u5148<a href="#/doc/install">\u5B89\u88C5</a>\u672C\u7EC4\u4EF6\u5E93\u3002</p>
<h3>\u5B8C\u6574\u5F15\u5165</h3>
<pre><code class="language-javascript">// main.ts
import { createApp } from &quot;vue&quot;;
import App from &quot;./App.vue&quot;;

import XqUI from &quot;xq-ui&quot;;
import &quot;xq-ui/dist/lib/xq-ui.css&quot;;

const app = createApp(App);

app.use(XqUI);
app.mount(&quot;#app&quot;);
</code></pre>
<h3>\u5F15\u5165\u67D0\u4E2A\u7EC4\u4EF6</h3>
<pre><code class="language-javascript">import { XqButton } from &quot;xq-ui&quot;;
import &quot;xq-ui/dist/lib/xq-ui.css&quot;;
</code></pre>
<p>\u5B8C\u6210\u5F15\u5165\u5C31\u53EF\u4EE5\u4F7F\u7528\u6211\u63D0\u4F9B\u7684\u7EC4\u4EF6\u5566\u3002</p>
<h4>Vue \u5355\u6587\u4EF6\u7EC4\u4EF6</h4>
<p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p>
<pre><code class="language-html">&lt;template&gt;
  &lt;xq-button&gt;\u6309\u94AE&lt;/xq-button&gt;
&lt;/template&gt;
</code></pre>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/avatar">Avatar \u5934\u50CF</a></p>
`,Ft=`<h1>\u5B89\u88C5</h1>
<p>\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668\uFF1A</p>
<pre><code class="language-shell"># NPM
$ npm install xq-ui
</code></pre>
<p>\u6216</p>
<pre><code class="language-shell"># Yarn
$ yarn add xq-ui
</code></pre>
<p>\u6216</p>
<pre><code class="language-shell"># pnpm
$ pnpm install xq-ui
</code></pre>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/start">\u5FEB\u901F\u4F7F\u7528</a></p>
`,Ct=`<h1>xq-ui</h1>
<p>xq-ui \u662F\u4E00\u4E2A Vue3 \u7684\u7EC4\u4EF6\u5E93\u3002</p>
<h1>\u4ECB\u7ECD</h1>
<p>\u6E90\u4EE3\u7801\u653E\u5728\u4E86<a href="https://github.com/kongwutw/xq-ui">\u6211\u7684 github</a>\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u548C\u793A\u4F8B\uFF0C\u8FD0\u884C\u65B9\u6CD5\u89C1 README.md\u3002</p>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/install">\u5B89\u88C5</a></p>
`;const Y=e=>(T("data-v-add5273a"),e=e(),I(),e),Et={class:"next-and-prev-link"},kt={key:0,class:"icon","aria-hidden":"true",style:{transform:"rotate(180deg)"}},Bt=Y(()=>c("use",{"xlink:href":"#icon-arrow-right"},null,-1)),wt=[Bt],Dt={key:0},At={key:1,class:"icon","aria-hidden":"true"},Vt=Y(()=>c("use",{"xlink:href":"#icon-arrow-right"},null,-1)),zt=[Vt],St=m({props:{prev:{type:Object,default:Object},next:{type:Object,default:Object}},setup(e){const o=e,t=P(),s=()=>{t.push({path:o.prev.path})},u=()=>{t.push({path:o.next.path})};return(a,_)=>(l(),r("div",Et,[e.prev.name?(l(),r("div",{key:0,class:"pre",onClick:s},[e.prev.name?(l(),r("svg",kt,wt)):b("",!0),c("span",null,y(e.prev.name),1)])):b("",!0),c("div",{class:"next",onClick:u},[e.next.name?(l(),r("span",Dt,y(e.next.name),1)):b("",!0),e.next.name?(l(),r("svg",At,zt)):b("",!0)])]))}});var j=q(St,[["__scopeId","data-v-add5273a"]]);const E=m({props:{title:{type:String},type:{type:String,default:"prop"},body:{type:Array,default:()=>[]},header:{type:Array,default:()=>[]}},setup(e){const o=e,{type:t}=o,s=F(()=>{if(o.header.length===0)switch(t){case"prop":return["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u53EF\u9009\u503C","\u9ED8\u8BA4\u503C"];case"slot":return["\u63D2\u69FD\u540D","\u8BF4\u660E"];case"event":return["\u4E8B\u4EF6\u540D","\u8BF4\u660E","\u56DE\u8C03\u51FD\u6570"]}return o.header});return(u,a)=>(l(),r(f,null,[c("h2",null,y(e.title),1),c("table",null,[c("thead",null,[c("tr",null,[(l(!0),r(f,null,S(v(s),(_,p)=>(l(),r("th",{key:p},y(_),1))),128))])]),c("tbody",null,[(l(!0),r(f,null,S(e.body,(_,p)=>(l(),r("tr",{key:p},[(l(!0),r(f,null,S(_,(g,x)=>(l(),r("td",{key:x},y(g),1))),128))]))),128))])])],64))}});const Lt={class:"preview-container"},jt=i("\u9690\u85CF\u4EE3\u7801"),Ot=i("\u67E5\u770B\u4EE3\u7801"),Tt={class:"preview-container-component"},It={key:0,class:"preview-container-code"},Pt=["innerHTML"],Ut=m({props:{component:Object},setup(e){const o=e;let t=C(!1);const s=window.Prism,u=F(()=>s.highlight(o.component.__sourceCode,s.languages.html,"html")),a=()=>t.value=!0,_=()=>t.value=!1;return(p,g)=>{const x=h("xq-button");return l(),r("div",Lt,[c("h2",null,[i(y(e.component.__sourceCodeTitle)+" ",1),t.value?(l(),D(x,{key:0,onClick:_},{default:d(()=>[jt]),_:1})):(l(),D(x,{key:1,onClick:a},{default:d(()=>[Ot]),_:1}))]),c("div",Tt,[(l(),D(Be(e.component)))]),t.value?(l(),r("div",It,[c("pre",{class:"language-html",innerHTML:v(u)},null,8,Pt)])):b("",!0)])}}});var $=q(Ut,[["__scopeId","data-v-8bf7972a"]]);function J(e){e.__sourceCode=`<template>
  <xq-switch v-model="checked" />
  <xq-switch v-model="checked" disabled />
</template>

<script setup lang="ts">
const checked = $ref(false);
<\/script>`,e.__sourceCodeTitle=" \u57FA\u7840\u7528\u6CD5 "}const Z=m({setup(e){const o=C(!1);return(t,s)=>{const u=h("xq-switch");return l(),r(f,null,[n(u,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a)},null,8,["modelValue"]),n(u,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=a=>o.value=a),disabled:""},null,8,["modelValue"])],64)}}});typeof J=="function"&&J(Z);function ee(e){e.__sourceCode=`<template>
  <xq-switch v-model="checked" active-color="red" inactive-color="pink" />
</template>

<script setup lang="ts">
const checked = $ref(false);
<\/script>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u989C\u8272 "}const te=m({setup(e){const o=C(!1);return(t,s)=>{const u=h("xq-switch");return l(),D(u,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a),"active-color":"red","inactive-color":"pink"},null,8,["modelValue"])}}});typeof ee=="function"&&ee(te);function oe(e){e.__sourceCode=`<template>
  <xq-switch v-model="checked" size="small" />
  <xq-switch v-model="checked" size="default" />
  <xq-switch v-model="checked" size="large" />
</template>

<script setup lang="ts">
const checked = $ref(false);
<\/script>`,e.__sourceCodeTitle=" \u5C3A\u5BF8 "}const ne=m({setup(e){const o=C(!1);return(t,s)=>{const u=h("xq-switch");return l(),r(f,null,[n(u,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a),size:"small"},null,8,["modelValue"]),n(u,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=a=>o.value=a),size:"default"},null,8,["modelValue"]),n(u,{modelValue:o.value,"onUpdate:modelValue":s[2]||(s[2]=a=>o.value=a),size:"large"},null,8,["modelValue"])],64)}}});typeof oe=="function"&&oe(ne);const Xt=c("h1",null,"Switch \u5F00\u5173",-1),Nt={class:"preview-wrapper"},Mt=m({setup(e){const o=[["v-model","\u7ED1\u5B9A\u503C","boolean","-","false"],["active-color","\u5728\u5F00\u542F\u72B6\u6001\u65F6\u7684\u80CC\u666F\u989C\u8272","string","-","#18a058"],["inactive-color","\u5728\u5173\u95ED\u72B6\u6001\u65F6\u7684\u80CC\u666F\u989C\u8272","string","-","#dbdbdb"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","false"],["size","\u5927\u5C0F","string","small / default / large","default"]];return(t,s)=>(l(),r(f,null,[Xt,c("div",Nt,[n($,{component:Z}),n($,{component:te}),n($,{component:ne}),n(E,{title:"\u5C5E\u6027",type:"prop",body:o}),n(j,{prev:{path:"/doc/radio",name:"Radio \u5355\u9009\u6846"},next:{path:"/doc/dialog",name:"\u5BF9\u8BDD\u6846 Dialog"}})])],64))}});function ue(e){e.__sourceCode=`<template>
  <div style="margin: 10px 0px; width: 100%">
    <xq-button theme="default">\u9ED8\u8BA4\u6309\u94AE</xq-button>
    <xq-button theme="primary">\u4E3B\u8981\u6309\u94AE</xq-button>
    <xq-button theme="info">\u4FE1\u606F\u6309\u94AE</xq-button>
    <xq-button theme="success">\u6210\u529F\u6309\u94AE</xq-button>
    <xq-button theme="warning">\u8B66\u544A\u6309\u94AE</xq-button>
    <xq-button theme="error">\u5371\u9669\u6309\u94AE</xq-button>
  </div>

  <div style="margin: 10px 0px; width: 100%">
    <xq-button theme="default" dashed>\u9ED8\u8BA4\u6309\u94AE</xq-button>
    <xq-button theme="primary" dashed>\u4E3B\u8981\u6309\u94AE</xq-button>
    <xq-button theme="info" dashed>\u4FE1\u606F\u6309\u94AE</xq-button>
    <xq-button theme="success" dashed>\u6210\u529F\u6309\u94AE</xq-button>
    <xq-button theme="warning" dashed>\u8B66\u544A\u6309\u94AE</xq-button>
    <xq-button theme="error" dashed>\u5371\u9669\u6309\u94AE</xq-button>
  </div>

  <div style="margin: 10px 0px; width: 100%">
    <xq-button theme="default" round>\u9ED8\u8BA4\u6309\u94AE</xq-button>
    <xq-button theme="primary" round>\u4E3B\u8981\u6309\u94AE</xq-button>
    <xq-button theme="info" round>\u4FE1\u606F\u6309\u94AE</xq-button>
    <xq-button theme="success" round>\u6210\u529F\u6309\u94AE</xq-button>
    <xq-button theme="warning" round>\u8B66\u544A\u6309\u94AE</xq-button>
    <xq-button theme="error" round>\u5371\u9669\u6309\u94AE</xq-button>
  </div>
</template>`,e.__sourceCodeTitle="\u57FA\u7840"}const se={},Ht={style:{margin:"10px 0px",width:"100%"}},Rt=i("\u9ED8\u8BA4\u6309\u94AE"),Wt=i("\u4E3B\u8981\u6309\u94AE"),Gt=i("\u4FE1\u606F\u6309\u94AE"),Qt=i("\u6210\u529F\u6309\u94AE"),Kt=i("\u8B66\u544A\u6309\u94AE"),Yt=i("\u5371\u9669\u6309\u94AE"),Jt={style:{margin:"10px 0px",width:"100%"}},Zt=i("\u9ED8\u8BA4\u6309\u94AE"),eo=i("\u4E3B\u8981\u6309\u94AE"),to=i("\u4FE1\u606F\u6309\u94AE"),oo=i("\u6210\u529F\u6309\u94AE"),no=i("\u8B66\u544A\u6309\u94AE"),uo=i("\u5371\u9669\u6309\u94AE"),so={style:{margin:"10px 0px",width:"100%"}},ao=i("\u9ED8\u8BA4\u6309\u94AE"),lo=i("\u4E3B\u8981\u6309\u94AE"),co=i("\u4FE1\u606F\u6309\u94AE"),ro=i("\u6210\u529F\u6309\u94AE"),io=i("\u8B66\u544A\u6309\u94AE"),_o=i("\u5371\u9669\u6309\u94AE");function po(e,o){const t=h("xq-button");return l(),r(f,null,[c("div",Ht,[n(t,{theme:"default"},{default:d(()=>[Rt]),_:1}),n(t,{theme:"primary"},{default:d(()=>[Wt]),_:1}),n(t,{theme:"info"},{default:d(()=>[Gt]),_:1}),n(t,{theme:"success"},{default:d(()=>[Qt]),_:1}),n(t,{theme:"warning"},{default:d(()=>[Kt]),_:1}),n(t,{theme:"error"},{default:d(()=>[Yt]),_:1})]),c("div",Jt,[n(t,{theme:"default",dashed:""},{default:d(()=>[Zt]),_:1}),n(t,{theme:"primary",dashed:""},{default:d(()=>[eo]),_:1}),n(t,{theme:"info",dashed:""},{default:d(()=>[to]),_:1}),n(t,{theme:"success",dashed:""},{default:d(()=>[oo]),_:1}),n(t,{theme:"warning",dashed:""},{default:d(()=>[no]),_:1}),n(t,{theme:"error",dashed:""},{default:d(()=>[uo]),_:1})]),c("div",so,[n(t,{theme:"default",round:""},{default:d(()=>[ao]),_:1}),n(t,{theme:"primary",round:""},{default:d(()=>[lo]),_:1}),n(t,{theme:"info",round:""},{default:d(()=>[co]),_:1}),n(t,{theme:"success",round:""},{default:d(()=>[ro]),_:1}),n(t,{theme:"warning",round:""},{default:d(()=>[io]),_:1}),n(t,{theme:"error",round:""},{default:d(()=>[_o]),_:1})])],64)}typeof ue=="function"&&ue(se);var mo=q(se,[["render",po]]);function ae(e){e.__sourceCode=`<template>
  <xq-button theme="default" disabled>\u9ED8\u8BA4\u6309\u94AE</xq-button>
  <xq-button theme="primary" disabled>\u4E3B\u8981\u6309\u94AE</xq-button>
  <xq-button theme="info" disabled>\u4FE1\u606F\u6309\u94AE</xq-button>
  <xq-button theme="success" disabled>\u6210\u529F\u6309\u94AE</xq-button>
  <xq-button theme="warning" disabled>\u8B66\u544A\u6309\u94AE</xq-button>
  <xq-button theme="error" disabled>\u5371\u9669\u6309\u94AE</xq-button>
</template>`,e.__sourceCodeTitle="\u7981\u7528"}const le={},ho=i("\u9ED8\u8BA4\u6309\u94AE"),fo=i("\u4E3B\u8981\u6309\u94AE"),vo=i("\u4FE1\u606F\u6309\u94AE"),go=i("\u6210\u529F\u6309\u94AE"),xo=i("\u8B66\u544A\u6309\u94AE"),bo=i("\u5371\u9669\u6309\u94AE");function yo(e,o){const t=h("xq-button");return l(),r(f,null,[n(t,{theme:"default",disabled:""},{default:d(()=>[ho]),_:1}),n(t,{theme:"primary",disabled:""},{default:d(()=>[fo]),_:1}),n(t,{theme:"info",disabled:""},{default:d(()=>[vo]),_:1}),n(t,{theme:"success",disabled:""},{default:d(()=>[go]),_:1}),n(t,{theme:"warning",disabled:""},{default:d(()=>[xo]),_:1}),n(t,{theme:"error",disabled:""},{default:d(()=>[bo]),_:1})],64)}typeof ae=="function"&&ae(le);var qo=q(le,[["render",yo]]);function ce(e){e.__sourceCode=`<template>
  <xq-button theme="primary" size="small">\u5C0F\u6309\u94AE</xq-button>
  <xq-button theme="primary" size="default">\u9ED8\u8BA4\u6309\u94AE</xq-button>
  <xq-button theme="primary" size="large">\u5927\u6309\u94AE</xq-button>
</template>`,e.__sourceCodeTitle="\u5C3A\u5BF8"}const re={},$o=i("\u5C0F\u6309\u94AE"),Fo=i("\u9ED8\u8BA4\u6309\u94AE"),Co=i("\u5927\u6309\u94AE");function Eo(e,o){const t=h("xq-button");return l(),r(f,null,[n(t,{theme:"primary",size:"small"},{default:d(()=>[$o]),_:1}),n(t,{theme:"primary",size:"default"},{default:d(()=>[Fo]),_:1}),n(t,{theme:"primary",size:"large"},{default:d(()=>[Co]),_:1})],64)}typeof ce=="function"&&ce(re);var ko=q(re,[["render",Eo]]);const Bo={class:"button-doc-wrapper"},wo=c("h1",null,"Button \u6309\u94AE",-1),Do={class:"preview-wrapper"},Ao=m({setup(e){const o=[["theme","\u7C7B\u578B","string","default / primary / info / success / warning / error","default"],["dashed","\u662F\u5426\u865A\u7EBF\u4E3A\u6309\u94AE","boolean","-","false"],["size","\u5927\u5C0F","string","small / default / large","default"],["round","\u662F\u5426\u4E3A\u5706\u89D2\u6309\u94AE","boolean","-","false"],["circle","\u662F\u5426\u4E3A\u5706\u5F62\u6309\u94AE","boolean","-","false"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","fasle"],["loading","\u662F\u5426\u663E\u793A\u52A0\u8F7D\u4E2D","boolean","-","fasle"],["icon-placement","\u6309\u94AE\u4E2D\u56FE\u6807\u7684\u4F4D\u7F6E","string","left / right","left"]],t=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"],["icon","\u6309\u94AE\u7684\u56FE\u6807"]];return(s,u)=>(l(),r("div",Bo,[wo,c("div",Do,[n($,{component:mo}),n($,{component:qo}),n($,{component:ko}),n(E,{title:"\u5C5E\u6027",type:"prop",body:o}),n(E,{title:"\u63D2\u69FD",type:"slot",body:t}),n(j,{prev:{path:"/doc/avatar",name:"Avatar \u5934\u50CF"}})])]))}});function ie(e){e.__sourceCode=`<template>
  <xq-button theme="primary" @click="toggle">\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846</xq-button>
  <xq-dialog v-model="visible" />
</template>

<script setup lang="ts">
let visible = $ref(false);

const toggle = () => {
  visible = !visible;
};
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Vo=i("\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846"),de=m({setup(e){let o=C(!1);const t=()=>{o.value=!o.value};return(s,u)=>{const a=h("xq-button"),_=h("xq-dialog");return l(),r(f,null,[n(a,{theme:"primary",onClick:t},{default:d(()=>[Vo]),_:1}),n(_,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=p=>o.value=p)},null,8,["modelValue"])],64)}}});typeof ie=="function"&&ie(de);function _e(e){e.__sourceCode=`<template>
  <xq-button theme="primary" @click="toggle">\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846</xq-button>
  <xq-dialog
    v-model="visible"
    :overlay-closable="false"
    @onOverlayClick="onOverlayClick"
  >
    \u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002
  </xq-dialog>
</template>

<script setup lang="ts">
let visible = $ref(false);

const toggle = () => {
  visible = !visible;
};

const onOverlayClick = () => {
  console.log("\u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002");
};
<\/script>`,e.__sourceCodeTitle="\u70B9\u51FB\u906E\u7F69"}const zo=i("\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846"),So=i(" \u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002 "),pe=m({setup(e){let o=C(!1);const t=()=>{o.value=!o.value},s=()=>{console.log("\u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002")};return(u,a)=>{const _=h("xq-button"),p=h("xq-dialog");return l(),r(f,null,[n(_,{theme:"primary",onClick:t},{default:d(()=>[zo]),_:1}),n(p,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=g=>o.value=g),"overlay-closable":!1,onOnOverlayClick:s},{default:d(()=>[So]),_:1},8,["modelValue"])],64)}}});typeof _e=="function"&&_e(pe);const Lo=c("h1",null,"Dialog \u5BF9\u8BDD\u6846",-1),jo={class:"preview-wrapper"},Oo=m({setup(e){const o=[["v-model","\u7ED1\u5B9A\u503C","boolean","-","flase"],["overlay","\u662F\u5426\u9700\u8981\u80CC\u666F\u906E\u7F69","boolean","-","true"],["title","\u6807\u9898","string","-","\u6807\u9898"],["overlay-closebale","\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FBoverlay\u5173\u95ED\u5BF9\u8BDD\u6846","boolean","-","true"]],t=[["-","Dialog \u7684\u5185\u5BB9"],["title","Dialog \u6807\u9898\u533A\u7684\u5185\u5BB9"],["footer","Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9"]],s=[["confirm","\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u7684\u56DE\u8C03","-"],["cancel","\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03","-"],["onOverlayClick","\u70B9\u51FB\u906E\u7F69\u7684\u56DE\u8C03","-"]];return(u,a)=>(l(),r(f,null,[Lo,c("div",jo,[n($,{component:de}),n($,{component:pe}),n(E,{title:"\u5C5E\u6027",type:"prop",body:o}),n(E,{title:"\u63D2\u69FD",type:"slot",body:t}),n(E,{title:"\u4E8B\u4EF6",type:"event",body:s}),n(j,{prev:{path:"/doc/switch",name:"Switch \u5F00\u5173 "}})])],64))}});function me(e){e.__sourceCode=`<template>
  <xq-avatar src="https://img.yibiankeji.com/logo/p/pLogo.png" size="small" />
  <xq-avatar src="https://img.yibiankeji.com/logo/p/pLogo.png" size="default" />
  <xq-avatar src="https://img.yibiankeji.com/logo/p/pLogo.png" size="large" />
  <xq-avatar src="https://img.yibiankeji.com/logo/p/pLogo.png" :size="100" />
</template>`,e.__sourceCodeTitle="\u5C3A\u5BF8"}const he={};function To(e,o){const t=h("xq-avatar");return l(),r(f,null,[n(t,{src:"https://img.yibiankeji.com/logo/p/pLogo.png",size:"small"}),n(t,{src:"https://img.yibiankeji.com/logo/p/pLogo.png",size:"default"}),n(t,{src:"https://img.yibiankeji.com/logo/p/pLogo.png",size:"large"}),n(t,{src:"https://img.yibiankeji.com/logo/p/pLogo.png",size:100})],64)}typeof me=="function"&&me(he);var Io=q(he,[["render",To]]);function fe(e){e.__sourceCode=`<template>
  <xq-avatar src="https://img.yibiankeji.com/logo/p/pLogo.png" shape="square" size="small" />
  <xq-avatar src="https://img.yibiankeji.com/logo/p/pLogo.png" shape="square" size="default" />
  <xq-avatar src="https://img.yibiankeji.com/logo/p/pLogo.png" shape="square" size="large" />
  <xq-avatar src="https://img.yibiankeji.com/logo/p/pLogo.png" shape="square" :size="100" />
</template>`,e.__sourceCodeTitle="\u5F62\u72B6"}const ve={};function Po(e,o){const t=h("xq-avatar");return l(),r(f,null,[n(t,{src:"https://img.yibiankeji.com/logo/p/pLogo.png",shape:"square",size:"small"}),n(t,{src:"https://img.yibiankeji.com/logo/p/pLogo.png",shape:"square",size:"default"}),n(t,{src:"https://img.yibiankeji.com/logo/p/pLogo.png",shape:"square",size:"large"}),n(t,{src:"https://img.yibiankeji.com/logo/p/pLogo.png",shape:"square",size:100})],64)}typeof fe=="function"&&fe(ve);var Uo=q(ve,[["render",Po]]);const Xo={class:"avatar-doc-wrapper"},No=c("h1",null,"Avatar \u5934\u50CF",-1),Mo={class:"preview-wrapper"},Ho=m({setup(e){const o=[["icon","\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F","number / string","number / large / default /small","default"],["shape","\u8BBE\u7F6E\u5934\u50CF\u7684\u5F62\u72B6","string","circle / square","circle"],["src","\u56FE\u7247\u5934\u50CF\u7684\u8D44\u6E90\u5730\u5740","string","-","-"],["alt","\u63CF\u8FF0\u56FE\u50CF\u7684\u66FF\u6362\u6587\u672C","string","-","-"]],t=[["error","\u56FE\u7247\u7C7B\u5934\u50CF\u52A0\u8F7D\u5931\u8D25\u7684\u56DE\u8C03\uFF0C \u8FD4\u56DE false \u4F1A\u5173\u95ED\u7EC4\u4EF6\u9ED8\u8BA4\u7684 fallback \u884C\u4E3A","(e: Event)"]],s=[["default","\u81EA\u5B9A\u4E49\u5934\u50CF\u5C55\u793A\u5185\u5BB9"]];return(u,a)=>(l(),r("div",Xo,[No,c("div",Mo,[n($,{component:Io}),n($,{component:Uo}),n(E,{title:"\u5C5E\u6027",type:"prop",body:o}),n(E,{title:"\u4E8B\u4EF6",type:"event",body:t}),n(E,{title:"\u63D2\u69FD",type:"slot",body:s}),n(j,{prev:{path:"/doc/get-started",name:"\u5FEB\u901F\u4F7F\u7528"},next:{path:"/doc/button",name:"\u6309\u94AE Button"}})])]))}}),X=e=>we(qt,{content:e,key:e}),Ro=X(Ct),Wo=X($t),Go=X(Ft),N={\u6587\u6863:[{path:"intro",component:Ro,name:"\u4ECB\u7ECD"},{path:"install",component:Go,name:"\u5B89\u88C5"},{path:"start",component:Wo,name:"\u5FEB\u901F\u4F7F\u7528"}],\u901A\u7528\u7EC4\u4EF6:[{path:"avatar",component:Ho,name:"\u5934\u50CF Avatar"},{path:"button",component:Ao,name:"\u6309\u94AE Button"}],\u53CD\u9988\u7EC4\u4EF6:[{path:"dialog",component:Oo,name:"\u5BF9\u8BDD\u6846 Dialog"}],\u5F55\u5165\u7EC4\u4EF6:[{path:"switch",component:Mt,name:"\u5F00\u5173 Switch"}]};let M=[];for(let e in N)M=[...M,...N[e]];const Qo={class:"layout"},Ko={class:"content"},Yo={class:"menu"},Jo={class:"menu-group-title text-overflow"},Zo=c("svg",{class:"icon","aria-hidden":"true"},[c("use",{"xlink:href":"#icon-arrow-right"})],-1),en=[Zo],tn=m({setup(e){let o=C(null);o.value=document.documentElement.clientWidth;let t=C(!(o.value<=500));const s=()=>{t.value=!t.value},u=F(()=>({left:t.value?"0px":"-272px"})),a=F(()=>({left:t.value?"272px":"0px",transform:t.value?"rotate(180deg) translateX(50%)":"rotate(0deg) translateX(50%)"})),_=F(()=>o.value<500?{"padding-left":"24px"}:{"padding-left":t.value?"302px":"60px"});return(p,g)=>{const x=h("router-link"),k=h("router-view");return l(),r("div",Qo,[n(Q,{class:"nav"}),c("div",Ko,[c("aside",{style:z(v(u))},[c("div",Yo,[(l(!0),r(f,null,S(v(N),(B,L)=>(l(),r("div",{class:"menu-group",key:L},[c("span",Jo,y(L)+y(L!=="\u6587\u6863"?`\uFF08${B.length}\uFF09`:""),1),(l(!0),r(f,null,S(B,(R,ge)=>(l(),D(x,{key:ge,class:"menu-item text-overflow",to:`/doc/${R.path}`},{default:d(()=>[i(y(R.name),1)]),_:2},1032,["to"]))),128))]))),128))])],4),c("div",{class:"toggle-button",onClick:s,style:z(v(a))},en,4),c("main",{style:z(v(_))},[n(k)],4)])])}}}),on=De(),nn=Ae({history:on,routes:[{path:"/",name:"home",component:bt},{path:"/doc",name:"doc",redirect:"/doc/intro",component:tn,children:M},{path:"/:catchAll(.*)/",redirect:"/"}]}),H=Ve(ut);H.use(nn);H.use(tt);H.mount("#app");
