var f=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(t,o,e)=>o in t?f(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,i=(t,o)=>{for(var e in o||(o={}))B.call(o,e)&&p(t,e,o[e]);if(_)for(var e of _(o))y.call(o,e)&&p(t,e,o[e]);return t},d=(t,o)=>g(t,C(o));import{m as $,s as z,l as E,j as Q,r as s,o as N,e as S,g as a,w as n,n as r,p as V,v as x,k as D,h as c}from"./index.2de76b2f.js";const j={class:"wrapper"},A=c("\u5B9E\u4F53"),F=c("\u547D\u4EE4"),L={id:"va-app-bar-shadow"},M={computed:i({},$(["loading"])),methods:{showQuickBarClick(t){z(t)},menuClick(){E()}}},G=Q(d(i({},M),{setup(t){return(o,e)=>{const u=s("mdi-icon"),m=s("va-spacer"),l=s("va-button"),v=s("va-button-group"),h=s("va-button-dropdown"),w=s("va-app-bar"),k=s("va-progress-bar");return N(),S("div",j,[a(w,{"shadow-on-scroll":"","shadow-color":"primary",target:"#va-app-bar-shadow",style:{"z-index":"1"}},{default:n(()=>[a(u,{name:"mdi-home-assistant",onClick:o.menuClick,style:{color:"white",padding:"0 10px"}},null,8,["onClick"]),r(o.$slots,"left"),a(m),r(o.$slots,"right"),a(h,{size:"small"},{default:n(()=>[a(v,{size:"small"},{default:n(()=>[a(l,{onClick:e[0]||(e[0]=b=>o.showQuickBarClick("e"))},{default:n(()=>[A]),_:1}),a(l,{onClick:e[1]||(e[1]=b=>o.showQuickBarClick("c"))},{default:n(()=>[F]),_:1})]),_:1})]),_:1})]),_:3}),V(a(k,{indeterminate:"",style:{position:"fixed",bottom:"0",left:"0",width:"100%","z-index":"2"}},null,512),[[x,o.loading]]),D("div",L,[r(o.$slots,"default")])])}}}));export{G as _};
