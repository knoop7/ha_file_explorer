(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b8e1363"],{"0cb2":function(t,e,i){var n=i("7b0b"),r=Math.floor,l="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,i,o,s,u){var v=i+t.length,d=o.length,f=c;return void 0!==s&&(s=n(s),f=a),l.call(u,f,(function(n,l){var a;switch(l.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(v);case"<":a=s[l.slice(1,-1)];break;default:var c=+l;if(0===c)return n;if(c>d){var u=r(c/10);return 0===u?n:u<=d?void 0===o[u-1]?l.charAt(1):o[u-1]+l.charAt(1):n}a=o[c-1]}return void 0===a?"":a}))}},5319:function(t,e,i){"use strict";var n=i("d784"),r=i("d039"),l=i("825a"),a=i("1626"),c=i("a691"),o=i("50c4"),s=i("577e"),u=i("1d80"),v=i("8aa5"),d=i("dc4a"),f=i("0cb2"),p=i("14c3"),h=i("b622"),m=h("replace"),b=Math.max,g=Math.min,_=function(t){return void 0===t?t:String(t)},k=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),y=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));n("replace",(function(t,e,i){var n=x?"$":"$0";return[function(t,i){var n=u(this),r=void 0==t?void 0:d(t,m);return r?r.call(t,n,i):e.call(s(n),t,i)},function(t,r){var u=l(this),d=s(t);if("string"===typeof r&&-1===r.indexOf(n)&&-1===r.indexOf("$<")){var h=i(e,u,d,r);if(h.done)return h.value}var m=a(r);m||(r=s(r));var k=u.global;if(k){var x=u.unicode;u.lastIndex=0}var y=[];while(1){var C=p(u,d);if(null===C)break;if(y.push(C),!k)break;var $=s(C[0]);""===$&&(u.lastIndex=v(d,o(u.lastIndex),x))}for(var w="",S=0,A=0;A<y.length;A++){C=y[A];for(var j=s(C[0]),O=b(g(c(C.index),d.length),0),H=[],G=1;G<C.length;G++)H.push(_(C[G]));var I=C.groups;if(m){var M=[j].concat(H,O,d);void 0!==I&&M.push(I);var q=s(r.apply(void 0,M))}else q=f(j,d,O,H,I,r);O>=S&&(w+=d.slice(S,O)+q,S=O+j.length)}return w+d.slice(S)}]}),!y||!k||x)},"57c1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("AppBar",{attrs:{color:"light-blue",title:"插件列表"}}),i("v-container",[i("v-list",{attrs:{subheader:"","two-line":""}},[i("v-subheader",{attrs:{inset:""}},[t._v("我的插件")]),t._l(t.mylist,(function(e){return i("v-list-item",{key:e.title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"green lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}}),i("v-list-item-subtitle",[i("a",{staticClass:"text-decoration-none",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])])],1),i("v-list-item-action",[i("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),n),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}],null,!0)},[i("v-list",t._l(t.items,(function(n,r){return i("v-list-item",{key:r},[i("v-list-item-title",{on:{click:function(i){return t.pullClick(e,n.title)}}},[t._v(t._s(n.title))])],1)})),1)],1)],1)],1)})),i("v-divider",{attrs:{inset:""}}),i("v-subheader",{attrs:{inset:""}},[t._v("收藏插件")]),t._l(t.list,(function(e){return i("v-list-item",{key:e.title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"blue lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}}),i("v-list-item-subtitle",[i("a",{staticClass:"text-decoration-none",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])])],1),i("v-list-item-action",[i("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),n),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}],null,!0)},[i("v-list",t._l(t.items,(function(n,r){return i("v-list-item",{key:r},[i("v-list-item-title",{on:{click:function(i){return t.pullClick(e,n.title)}}},[t._v(t._s(n.title))])],1)})),1)],1)],1)],1)})),i("v-divider",{attrs:{inset:""}}),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"red lighten-1",attrs:{dark:""}},[t._v(" mdi-github ")])],1),i("v-list-item-content",[i("v-form",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{label:"自定义组件名称",required:""},model:{value:t.pull.domain,callback:function(e){t.$set(t.pull,"domain","string"===typeof e?e.trim():e)},expression:"pull.domain"}})],1),i("v-col",{attrs:{cols:"12",md:"8"}},[i("v-text-field",{attrs:{type:"url",label:"GitHub项目地址",required:""},model:{value:t.pull.url,callback:function(e){t.$set(t.pull,"url","string"===typeof e?e.trim():e)},expression:"pull.url"}})],1)],1)],1)],1),i("v-list-item-action",[i("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),n),[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-download")])],1)]}}])},[i("v-list",t._l(t.items,(function(e,n){return i("v-list-item",{key:n},[i("v-list-item-title",{on:{click:function(i){return t.gitClick(e.title)}}},[t._v(t._s(e.title))])],1)})),1)],1)],1)],1)],2),i("v-card",{staticStyle:{padding:"20px"},attrs:{elevation:"2"}},[i("v-card-text",{staticClass:"text--primary"},[i("p",{staticClass:"text-h6"},[t._v(" 注意：不会用千万别点下面的按钮，否则可能造成数据异常 ")]),t._v(" 修改pip的镜像源、github的域名解析、修改hacs的资源下载链接 ")]),i("v-card-actions",[i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.updateSourceClick("pip")}}},[t._v(" pip ")]),i("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.updateSourceClick("github")}}},[t._v(" GitHub ")]),i("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){return t.updateSourceClick("github-clear")}}},[t._v(" 清除GitHub ")]),i("v-btn",{attrs:{color:"orange",text:""},on:{click:function(e){return t.updateSourceClick("hacs")}}},[t._v(" HACS ")])],1)],1)],1)],1)},r=[],l=i("5530"),a=(i("d3b7"),i("ac1f"),i("5319"),i("5880")),c={data:function(){return{mylist:[],list:[],pull:{domain:"",url:""},items:[{title:"github.com.cnpmjs.org"},{title:"hub.fastgit.org"},{title:"github.com"}]}},created:function(){var t=this;fetch("https://cdn.jsdelivr.net/gh/shaonianzhentan/ha_file_explorer@master/config/git.json?ver=".concat(window.ha.ver)).then((function(t){return t.json()})).then((function(e){var i=e.my,n=e.all;t.mylist=i,t.list=n}))},methods:Object(l["a"])(Object(l["a"])({},Object(a["mapActions"])(["fetchApi"])),{},{gitClick:function(t){this.pullClick(this.pull,t)},pullClick:function(t,e){var i=this,n=t.domain,r=t.url;if(!n||!r)return this.$toast("请输入组件名称和项目地址");this.fetchApi({type:"update",domain:n,url:r.replace("https://github.com/","https://".concat(e,"/"))}).then((function(t){0===t.code&&i.$toast(t.msg)}))},updateSourceClick:function(t){var e=this;top.confirm("会修改系统里相关文件配置，不懂千万别确定")&&this.fetchApi({type:"update-source",url:t}).then((function(t){e.$toast(t.msg)}))}})},o=c,s=i("2877"),u=Object(s["a"])(o,n,r,!1,null,"0059c656",null);e["default"]=u.exports}}]);