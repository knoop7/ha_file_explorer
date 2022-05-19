var J=Object.defineProperty,Q=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var T=(n,o,s)=>o in n?J(n,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[o]=s,v=(n,o)=>{for(var s in o||(o={}))X.call(o,s)&&T(n,s,o[s]);if(q)for(var s of q(o))Y.call(o,s)&&T(n,s,o[s]);return n},w=(n,o)=>Q(n,W(o));import{d as D,r as z,a,o as i,c as r,w as t,b as e,e as E,f as $,g as V,F as B,h as c,u as K,t as C,i as G,j as Z,m as M,k as H,l as N,_ as O,n as U}from"./index.8c9e409f.js";import{A as tt}from"./AppLayout.2f9eb662.js";const et={class:"va-table"},at=["href"],nt={key:1},ot=c(" OK "),lt=D({props:["ok"],setup(n){const o=n;K();const s="File Explorer",f=z(!0),y=new URLSearchParams(location.search),_=z([{name:"Version",value:y.get("v")||"dev"},{name:"Author",value:"shaonianzhentan"},{name:"Link",value:"https://github.com/shaonianzhentan/ha_file_explorer",type:"link"},{name:"UI",value:"https://vuestic.dev",type:"link"},{name:"Icon",value:"https://unpkg.com/@mdi/font@latest/preview.html",type:"link"},{name:"Bilibili",value:"https://space.bilibili.com/39523884",type:"link"},{name:"HA notes",value:"https://ha.jiluxinqing.com",type:"link"}]),u=async()=>{o.ok({})};return(h,d)=>{const k=a("va-button"),p=a("va-modal");return i(),r(p,{modelValue:f.value,"onUpdate:modelValue":d[0]||(d[0]=l=>f.value=l),title:s,"hide-default-actions":!0},{footer:t(()=>[e(k,{onClick:u},{default:t(()=>[ot]),_:1})]),default:t(()=>[E("table",et,[E("tbody",null,[(i(!0),$(B,null,V(_.value,l=>(i(),$("tr",{key:l.name},[E("td",null,C(l.name),1),E("td",null,[l.type==="link"?(i(),$("a",{key:0,href:l.value,target:"_blank"},C(l.value),9,at)):(i(),$("span",nt,C(l.value),1))])]))),128))])])]),_:1},8,["modelValue"])}}}),st=c(" \u53D6\u6D88 "),it=c(" \u786E\u5B9A "),ct={},R=D(w(v({},ct),{props:["type","ok","cancel","app"],setup(n){const o=n,s=K(),f=o.type==="file",y=f?"\u6587\u4EF6":"\u6587\u4EF6\u5939",_=o.app(),u=z(""),h=z(!0),d=()=>{o.cancel()},k=async()=>{if(!u.value)return;const p=s.getters.absolutePath(u.value);let l=await Z.service.createHassFile(f?"file":"folder",p);_.$toast(l.msg),!(l.code>0)&&(s.dispatch("reloadFileList"),o.ok({}))};return(p,l)=>{const b=a("va-input"),F=a("va-button"),x=a("va-modal");return i(),r(x,{modelValue:h.value,"onUpdate:modelValue":l[1]||(l[1]=L=>h.value=L),title:G(y),"hide-default-actions":!0},{footer:t(()=>[e(F,{outline:"",onClick:d,style:{"margin-right":"20px"}},{default:t(()=>[st]),_:1}),e(F,{onClick:k,style:{"margin-left":"20px"}},{default:t(()=>[it]),_:1})]),default:t(()=>[e(b,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=L=>u.value=L),modelModifiers:{trim:!0},placeholder:`${G(y)}\u540D\u79F0`},null,8,["modelValue","placeholder"])]),_:1},8,["modelValue","title"])}}})),_t={computed:v(v({},M(["fileList"])),H(["absolutePath"])),methods:w(v({},N(["reloadFileList"])),{deleteClick(n){parent.confirm(`\u786E\u5B9A\u5220\u9664\u6587\u4EF6\u3010${n}\u3011\uFF1F`)&&this.api.service.deleteHassFile(this.absolutePath(n)).then(o=>{this.reloadFileList(),this.$toast(o.msg)})},editClick(n){this.$router.push({name:"editor",params:{name:n}})},addClick(){this.$dialog(R,{type:"file"})}})},ut=c(" \u6587\u4EF6\u5217\u8868 "),rt=c("\u65B0\u589E"),dt=c("\u5220\u9664"),pt=c("\u7F16\u8F91");function mt(n,o,s,f,y,_){const u=a("va-button"),h=a("va-button-group"),d=a("va-button-dropdown"),k=a("va-card-title"),p=a("mdi-icon"),l=a("va-avatar"),b=a("va-list-item-section"),F=a("va-list-item-label"),x=a("va-chip"),L=a("va-list-item"),A=a("va-list"),P=a("va-card-content"),S=a("va-card");return i(),r(S,null,{default:t(()=>[e(k,null,{default:t(()=>[ut,e(d,{outline:"",size:"small"},{default:t(()=>[e(h,{size:"small"},{default:t(()=>[e(u,{onClick:_.addClick},{default:t(()=>[rt]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(A,{style:{"padding-top":"0"}},{default:t(()=>[(i(!0),$(B,null,V(n.fileList,(g,m)=>(i(),r(L,{key:m},{default:t(()=>[e(b,{avatar:""},{default:t(()=>[e(l,{color:"var(--va-primary)"},{default:t(()=>[e(p,{name:g.icon},null,8,["name"])]),_:2},1024)]),_:2},1024),e(b,null,{default:t(()=>[e(F,null,{default:t(()=>[c(C(g.name),1)]),_:2},1024),e(F,{caption:""},{default:t(()=>[c(C(g.time)+" ",1),g.size?(i(),r(x,{key:0,flat:"",size:"small"},{default:t(()=>[c(C(g.size),1)]),_:2},1024)):U("",!0)]),_:2},1024)]),_:2},1024),e(b,{icon:""},{default:t(()=>[e(d,{size:"small"},{default:t(()=>[e(h,{outline:"",size:"small"},{default:t(()=>[e(u,{onClick:I=>_.deleteClick(g.name)},{default:t(()=>[dt]),_:2},1032,["onClick"]),e(u,{onClick:I=>_.editClick(g.name)},{default:t(()=>[pt]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}var vt=O(_t,[["render",mt]]);const ht={data(){return{brands:new Array}},computed:v(v({},M(["folderList","path"])),H(["pathList"])),methods:w(v({},N(["getFileList"])),{showClick(n){this.getFileList(n.name)},addClick(){this.$dialog(R,{type:"dir"})},deleteClick(){const{pathList:n}=this,{name:o}=n[n.length-1];parent.confirm(`\u786E\u5B9A\u5220\u9664\u6587\u4EF6\u5939\u3010${o}\u3011\uFF1F`)&&this.api.service.deleteHassFile(this.path).then(s=>{this.getFileList(n.length-2),this.$toast(s.msg)})},loadSrc(n){return this.brands.includes(n)?"https://brands.home-assistant.io/_/homeassistant/icon.png":n},loadIcon(n,o){this.brands.push(o),n.target.src="https://brands.home-assistant.io/_/homeassistant/icon.png"}})},ft=c(" \u6587\u4EF6\u5939 "),kt=c("\u5220\u9664"),bt=c("\u65B0\u589E"),gt=["src","onError"];function Ct(n,o,s,f,y,_){const u=a("va-button"),h=a("va-button-group"),d=a("va-button-dropdown"),k=a("va-card-title"),p=a("mdi-icon"),l=a("va-avatar"),b=a("va-list-item-section"),F=a("va-list-item-label"),x=a("va-chip"),L=a("va-icon"),A=a("va-list-item"),P=a("va-list"),S=a("va-card-content"),g=a("va-card");return i(),r(g,null,{default:t(()=>[e(k,null,{default:t(()=>[ft,e(d,{outline:"",size:"small"},{default:t(()=>[e(h,{size:"small"},{default:t(()=>[n.pathList.length>1?(i(),r(u,{key:0,onClick:_.deleteClick},{default:t(()=>[kt]),_:1},8,["onClick"])):U("",!0),e(u,{onClick:_.addClick},{default:t(()=>[bt]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(P,{style:{"padding-top":"0"}},{default:t(()=>[(i(!0),$(B,null,V(n.folderList,(m,I)=>(i(),r(A,{key:I},{default:t(()=>[e(b,{avatar:""},{default:t(()=>[m.iconType=="img"?(i(),$("img",{key:0,class:"brands",src:_.loadSrc(m.icon),onError:j=>_.loadIcon(j,m.icon)},null,40,gt)):(i(),r(l,{key:1,color:"var(--va-primary)"},{default:t(()=>[e(p,{name:m.icon},null,8,["name"])]),_:2},1024))]),_:2},1024),e(b,null,{default:t(()=>[e(F,null,{default:t(()=>[c(C(m.name),1)]),_:2},1024),e(F,{caption:""},{default:t(()=>[c(C(m.time)+" ",1),m.size?(i(),r(x,{key:0,flat:"",size:"small"},{default:t(()=>[c(C(m.size),1)]),_:2},1024)):U("",!0)]),_:2},1024)]),_:2},1024),e(b,{icon:""},{default:t(()=>[e(L,{name:"remove_red_eye",color:"gray",onClick:j=>_.showClick(m)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}var yt=O(ht,[["render",Ct],["__scopeId","data-v-56b82f3d"]]);const Ft=c("\u6587\u4EF6\u7BA1\u7406"),$t={class:"row"},Lt={class:"flex md6"},Et={class:"flex md6"},wt={computed:v({},H(["pathList"])),created(){this.changePathClick(0)},methods:w(v({},N(["getFileList"])),{changePathClick(n){this.getFileList(n)},versionClick(){this.$dialog(lt)}})},Bt=D(w(v({},wt),{setup(n){return(o,s)=>{const f=a("va-button"),y=a("va-breadcrumbs-item"),_=a("va-breadcrumbs"),u=a("va-card-title"),h=a("va-card"),d=a("va-backtop");return i(),r(tt,{class:"views-index"},{left:t(()=>[e(f,{color:"#fff",flat:"",rounded:!1,onClick:o.versionClick},{default:t(()=>[Ft]),_:1},8,["onClick"])]),right:t(()=>[]),default:t(()=>[e(h,null,{default:t(()=>[e(u,null,{default:t(()=>[e(_,null,{default:t(()=>[(i(!0),$(B,null,V(o.pathList,(k,p)=>(i(),r(y,{label:k.name,key:p,href:"#",onClick:l=>o.changePathClick(p)},null,8,["label","onClick"]))),128))]),_:1})]),_:1})]),_:1}),E("div",$t,[E("div",Lt,[e(yt)]),E("div",Et,[e(vt)])]),e(d,{target:"#va-app-bar-shadow","vertical-offset":"20px","horizontal-offset":"20px","visibility-height":1,speed:50})]),_:1})}}}));export{Bt as default};
