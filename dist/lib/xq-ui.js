!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["xq-ui"]={},e.Vue)}(this,(function(e,t){"use strict";var o=Object.defineProperty,l=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,i=(e,t,l)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;const d=[(e=>(t.pushScopeId("data-v-dd33864c"),e=e(),t.popScopeId(),e))((()=>t.createElementVNode("span",null,null,-1)))];var s,u,p=t.defineComponent((s=((e,t)=>{for(var o in t||(t={}))n.call(t,o)&&i(e,o,t[o]);if(a)for(var o of a(t))c.call(t,o)&&i(e,o,t[o]);return e})({},{name:"XqSwitch"}),u={props:{modelValue:{type:Boolean,default:!1},activeColor:{type:String,default:"#18a058"},inactiveColor:{type:String,default:"#dbdbdb"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"}},emits:["update:modelValue"],setup(e,{emit:o}){const l=e,r=()=>{l.disabled||o("update:modelValue",!l.modelValue)},{modelValue:a,disabled:n,size:c}=t.toRefs(l),i=t.computed((()=>({"xq-switch-checked":a.value,"xq-switch-disabled":n.value,[`xq-switch-${c.value}`]:c.value})));return(o,l)=>(t.openBlock(),t.createElementBlock("button",{class:t.normalizeClass(["xq-switch",t.unref(i)]),onClick:r,style:t.normalizeStyle({background:t.unref(a)?e.activeColor:e.inactiveColor})},d,6))}},l(s,r(u))));p.__scopeId="data-v-dd33864c",p.__file="src/lib/switch/index.vue";var f=Object.defineProperty,m=Object.defineProperties,y=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,O=(e,t,o)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;const h={key:0,class:"xq-loadingIndicator"},k={key:1,class:"slot-icon-left"},C={key:2,class:"slot-icon-right"};var S=t.defineComponent(((e,t)=>m(e,y(t)))(((e,t)=>{for(var o in t||(t={}))v.call(t,o)&&O(e,o,t[o]);if(b)for(var o of b(t))g.call(t,o)&&O(e,o,t[o]);return e})({},{name:"XqButton"}),{props:{theme:{type:String,default:"default"},dashed:{type:Boolean,default:!1},size:{type:String,default:"default"},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},iconPlacement:{type:String,default:"left"}},setup(e){const o=e,{theme:l,dashed:r,size:a,round:n,disabled:c,circle:i}=o,d=t.useSlots(),s=t.computed((()=>({[`xq-theme-${l}`]:l,"is-dashed":r,[`xq-button-${a}`]:a,"is-round":n,"is-circle":i,"is-disabled":c})));return(o,l)=>(t.openBlock(),t.createElementBlock("button",{class:t.normalizeClass(["xq-button",t.unref(s)])},[e.loading?(t.openBlock(),t.createElementBlock("span",h)):t.createCommentVNode("v-if",!0),"left"===e.iconPlacement&&t.unref(d).icon?(t.openBlock(),t.createElementBlock("div",k,[t.renderSlot(o.$slots,"icon")])):t.createCommentVNode("v-if",!0),t.renderSlot(o.$slots,"default"),"right"===e.iconPlacement&&t.unref(d).icon?(t.openBlock(),t.createElementBlock("div",C,[t.renderSlot(o.$slots,"icon")])):t.createCommentVNode("v-if",!0)],2))}}));S.__file="src/lib/button/index.vue";var V=Object.defineProperty,x=Object.defineProperties,B=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,P=(e,t,o)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;const E={class:"xq-dialog"},N={class:"xq-dialog-wrapper"},$=t.createElementVNode("p",null,"这是一条消息",-1),_=t.createTextVNode("取消"),z=t.createTextVNode("确认");var X=t.defineComponent(((e,t)=>x(e,B(t)))(((e,t)=>{for(var o in t||(t={}))j.call(t,o)&&P(e,o,t[o]);if(w)for(var o of w(t))q.call(t,o)&&P(e,o,t[o]);return e})({},{name:"XqDialog"}),{props:{modelValue:{type:Boolean,default:!1},overlay:{type:!0,default:!0},title:{type:String,default:"标题"},overlayClosable:{type:Boolean,default:!0},confirm:{type:Function},cancel:{type:Function}},emits:["update:modelValue","onOverlayClick"],setup(e,{emit:o}){const l=e,r=()=>{o("update:modelValue",!1)},a=()=>{l.overlayClosable&&r(),o("onOverlayClick")},n=()=>{var e;!1!==(null==(e=l.confirm)?void 0:e.call(l))&&r()},c=()=>{var e;!1!==(null==(e=l.cancel)?void 0:e.call(l))&&r()};return(o,l)=>e.modelValue?(t.openBlock(),t.createBlock(t.Teleport,{key:0,to:"body"},[e.overlay?(t.openBlock(),t.createElementBlock("div",{key:0,class:"xq-dialog-overlay",onClick:a})):t.createCommentVNode("v-if",!0),t.createElementVNode("div",E,[t.createElementVNode("div",N,[t.createElementVNode("header",null,[t.renderSlot(o.$slots,"title",{},(()=>[t.createTextVNode(t.toDisplayString(e.title),1)])),t.createElementVNode("span",{class:"xq-dialog-close",onClick:r})]),t.createElementVNode("main",null,[t.renderSlot(o.$slots,"default",{},(()=>[$]))]),t.createElementVNode("footer",null,[t.renderSlot(o.$slots,"footer",{},(()=>[t.createVNode(S,{onClick:c},{default:t.withCtx((()=>[_])),_:1}),t.createVNode(S,{theme:"primary",onClick:n},{default:t.withCtx((()=>[z])),_:1})]))])])])])):t.createCommentVNode("v-if",!0)}}));X.__file="src/lib/dialog/index.vue";var D=Object.defineProperty,I=Object.defineProperties,T=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,M=(e,t,o)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;const R=["src","alt"];var G=t.defineComponent(((e,t)=>I(e,T(t)))(((e,t)=>{for(var o in t||(t={}))F.call(t,o)&&M(e,o,t[o]);if(A)for(var o of A(t))U.call(t,o)&&M(e,o,t[o]);return e})({},{name:"XqAvatar"}),{props:{size:{type:[String,Number],default:"default"},src:{type:String,default:""},shape:{type:String,default:"circle"},alt:{type:String},color:{type:String},backgroundColor:{type:String}},emits:["error"],setup(e,{emit:o}){const l=e,r=t.ref(!1),{size:a,shape:n,color:c,backgroundColor:i}=l,d=t.computed((()=>({[`xq-avatar-${a}`]:"string"==typeof a,[`xq-avatar-${n}`]:n}))),s=t.computed((()=>({width:"number"==typeof a?`${a}px`:"",height:"number"==typeof a?`${a}px`:"",color:c,backgroundColor:i})));t.watch((()=>l.src),(()=>r.value=!1));const u=e=>{r.value=!0,o("error",e)};return(o,l)=>(t.openBlock(),t.createElementBlock("span",{class:t.normalizeClass(["xq-avatar",t.unref(d)]),style:t.normalizeStyle(t.unref(s))},[e.src&&!r.value?(t.openBlock(),t.createElementBlock("img",{key:0,src:e.src,alt:e.alt,onError:u},null,40,R)):t.createCommentVNode("v-if",!0),t.renderSlot(o.$slots,"default")],6))}}));G.__file="src/lib/avatar/index.vue";const H=[S,p,X,G];function J(e){for(const t of H)e.component(t.name,t)}e.XqAvatar=G,e.XqButton=S,e.XqDialog=X,e.XqSwitch=p,e.default=J,e.openDialog=(e={title:()=>"我是标题",content:()=>"我是内容",confirm:()=>{},cancel:()=>{},overlay:!0,overlayClosable:!0})=>{const{title:o,content:l,confirm:r,cancel:a,overlay:n,overlayClosable:c}=e,i=document.createElement("div");document.body.appendChild(i);t.h("div");const d=t.createApp({render:()=>t.h(X,{modelValue:!0,"onUpdate:modelValue":e=>{!1===e&&(d.unmount(i),i.remove())},confirm:r,cancel:a,overlay:n,overlayClosable:c},{title:o,default:l})});d.mount(i)},e.registerXqUi=J,Object.defineProperty(e,"__esModule",{value:!0})}));
