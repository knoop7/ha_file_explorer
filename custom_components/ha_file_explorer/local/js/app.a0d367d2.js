(function(e){function t(t){for(var o,a,r=t[0],u=t[1],s=t[2],l=0,d=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var r=n[a];0!==i[r]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={app:0},i={app:0},c=[];function r(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-28ba75c4":"0f751f91","chunk-26476c40":"cca8ef32","chunk-45b5cca3":"bc91c1be","chunk-7af2ecc6":"b7b409b6","chunk-7b0fc2e4":"0a4d472d","chunk-7db7f339":"c1d1dd27","chunk-b6ff84b4":"152b6510","chunk-2d976c01":"0ecb6b8e","chunk-469048e6":"fc0661ab","chunk-c8816ec8":"6d72f0b4","chunk-2d0b2007":"762d4811","chunk-2d0e88ff":"98a4359f","chunk-70b9cf5d":"d8972832","chunk-2d2248b2":"1809dc16","chunk-2d229989":"da6404d9"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-28ba75c4":1,"chunk-26476c40":1,"chunk-45b5cca3":1,"chunk-7af2ecc6":1,"chunk-7b0fc2e4":1,"chunk-7db7f339":1,"chunk-b6ff84b4":1,"chunk-2d976c01":1,"chunk-469048e6":1,"chunk-c8816ec8":1,"chunk-70b9cf5d":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-28ba75c4":"37ddab0d","chunk-26476c40":"8c5154c9","chunk-45b5cca3":"fbb18eeb","chunk-7af2ecc6":"af984da9","chunk-7b0fc2e4":"af984da9","chunk-7db7f339":"af984da9","chunk-b6ff84b4":"f0ff3047","chunk-2d976c01":"7d887a01","chunk-469048e6":"a1fdf230","chunk-c8816ec8":"2373802b","chunk-2d0b2007":"31d6cfe0","chunk-2d0e88ff":"31d6cfe0","chunk-70b9cf5d":"6d0d1e99","chunk-2d2248b2":"31d6cfe0","chunk-2d229989":"31d6cfe0"}[e]+".css",i=u.p+o,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var s=c[r],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===i))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){s=d[r],l=s.getAttribute("data-href");if(l===o||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=r(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-overlay",{attrs:{value:e.loading}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),n("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var o=t.attrs;return[n("v-btn",e._b({attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar.show=!1}}},"v-btn",o,!1),[e._v(" 关闭 ")])]}}]),model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v(" "+e._s(e.snackbar.text)+" ")]),n("v-main",[n("keep-alive",[n("router-view")],1)],1)],1)},i=[],c=n("2f62"),r={name:"App",data:function(){return{snackbar:{text:"",show:!1}}},computed:Object(c["e"])(["loading"]),beforeCreate:function(){var e=this;o["a"].$toast=o["a"].prototype.$toast=function(t){e.snackbar.text=t,e.snackbar.show=!0}}},u=r,s=n("2877"),l=n("6544"),d=n.n(l),f=n("7496"),h=n("8336"),p=n("f6c4"),b=n("a797"),m=n("490a"),g=n("2db4"),v=Object(s["a"])(u,a,i,!1,null,null,null),k=v.exports;d()(v,{VApp:f["a"],VBtn:h["a"],VMain:p["a"],VOverlay:b["a"],VProgressCircular:m["a"],VSnackbar:g["a"]});var w=n("9483");Object(w["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var y=n("8c4f"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("FileListPanel",{ref:"FileListPanel"}),n("v-navigation-drawer",{attrs:{app:"",right:""},model:{value:e.showSidebar,callback:function(t){e.showSidebar=t},expression:"showSidebar"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[e._v(" 文件管理 ")]),n("v-list-item-subtitle",[e._v(" File Explorer ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{link:""},on:{click:function(n){return e.linkClick(t)}}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1)],1)},S=[],P=n("5530"),L={name:"Home",components:{FileListPanel:function(){return Promise.all([n.e("chunk-28ba75c4"),n.e("chunk-26476c40")]).then(n.bind(null,"e283"))}},data:function(){return{items:[{title:"云备份",icon:"mdi-backup-restore",href:"/Backup"},{title:"我的插件",icon:"mdi-apps-box",href:"/PlugIn"},{title:"HA升级",icon:"mdi-home-assistant",href:"/Update"},{title:"设置",icon:"mdi-cog",href:"/Setting"}]}},computed:{showSidebar:{get:function(){return this.$store.state.showSidebar},set:function(e){e!=this.$store.state.showSidebar&&this.toggleSidebar&&this.toggleSidebar()}}},methods:Object(P["a"])(Object(P["a"])({},Object(c["d"])(["toggleSidebar"])),{},{linkClick:function(e){var t=e.href;this.$router.push(t)}})},_=L,O=n("ce7e"),x=n("132d"),C=n("8860"),F=n("da13"),V=n("5d23"),A=n("34c3"),E=n("f774"),I=Object(s["a"])(_,j,S,!1,null,null,null),$=I.exports;d()(I,{VDivider:O["a"],VIcon:x["a"],VList:C["a"],VListItem:F["a"],VListItemContent:V["a"],VListItemIcon:A["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VNavigationDrawer:E["a"]}),o["a"].use(y["a"]);var T=[{path:"/",name:"Home",component:$},{path:"/editFile",name:"editFile",component:function(){return n.e("chunk-b6ff84b4").then(n.bind(null,"b29d"))}},{path:"/PlugIn",name:"PlugIn",component:function(){return Promise.all([n.e("chunk-28ba75c4"),n.e("chunk-45b5cca3")]).then(n.bind(null,"57c1"))}},{path:"/Backup",name:"Backup",component:function(){return Promise.all([n.e("chunk-28ba75c4"),n.e("chunk-7db7f339")]).then(n.bind(null,"f122"))}},{path:"/Update",name:"Update",component:function(){return Promise.all([n.e("chunk-28ba75c4"),n.e("chunk-7af2ecc6")]).then(n.bind(null,"2e8c"))}},{path:"/Setting",name:"Setting",component:function(){return Promise.all([n.e("chunk-28ba75c4"),n.e("chunk-7b0fc2e4")]).then(n.bind(null,"4ef5"))}}],N=new y["a"]({routes:T}),B=N;n("99af"),n("4de4"),n("caad"),n("a15b"),n("d81d"),n("a434"),n("b0c0"),n("ac1f"),n("1276");o["a"].use(c["a"]);var M=new c["a"].Store({state:{showSidebar:!1,loading:!1,filePathList:[],fileList:[],folderList:[]},getters:{getFilePath:function(e){return function(t){return"".concat(e.filePathList.join("/"),"/").concat(t)}}},mutations:{toggleSidebar:function(e){e.showSidebar=!e.showSidebar},setFileInfo:function(e,t){var n=t.path,a=t.list;0===a.length&&o["a"].$toast("这是一个空目录"),e.filePathList=n,e.fileList=a.filter((function(e){return"file"===e.type})).map((function(e){var t=e.name.split("."),n=t[t.length-1].toLocaleLowerCase();["jpg","jpeg","png","gif","bmp"].includes(n)?n="img":["json","js","css","html","yaml"].includes(n)&&(n="code");var o={code:{color:"pink",icon:"mdi-code-json"},img:{color:"red",icon:"mdi-file-image"},py:{color:"purple",icon:"mdi-language-python"},db:{color:"indigo",icon:"mdi-database"},log:{color:"deep-purple",icon:"mdi-math-log"},js:{color:"blue",icon:"mdi-nodejs"},ha_version:{color:"light-blue",icon:"mdi-home-assistant"}};return Object(P["a"])(Object(P["a"])({},e),o[n]||{color:"blue",icon:"mdi-file"})})),e.folderList=a.filter((function(e){return"dir"===e.type}))}},actions:{operationFile:function(e,t){var n=t.name,a=t.type;e.state.loading=!0;var i=e.state.filePathList,c=n?"".concat(i.join("/"),"/").concat(n):i.join("/");return n||i.splice(i.length-1,1),window.ha.post({path:c,type:a}).then((function(t){return 0===t.code?e.dispatch("getFileList",i):e.state.loading=!1,o["a"].$toast(t.msg),t}))},getFileList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.state.loading=!0,window.ha.post({path:t.join("/"),type:"get"}).then((function(n){e.commit("setFileInfo",{path:t,list:n.sort((function(e,t){return e.type>t.type?1:-1}))})})).finally((function(){0===t.length?e.state.loading=!1:setTimeout((function(){e.state.loading=!1}),500)}))},fetchApi:function(e,t){e.state.loading=!0,window.ha.post(t).then((function(e){return e.code>0&&o["a"].$toast(e.msg),e})).finally((function(){e.state.loading=!1}))}},modules:{}}),D=n("f309");o["a"].use(D["a"]);var H=new D["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:B,store:M,vuetify:H,render:function(e){return e(k)}}).$mount("#app")}});
//# sourceMappingURL=app.a0d367d2.js.map