(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cb13924"],{"40dc":function(t,e,o){"use strict";o("a9e3"),o("b680"),o("c7cd");var i=o("5530"),r=(o("8b0d"),o("0481"),o("4160"),o("4069"),o("3835")),s=(o("5e23"),o("8dd9")),n=o("adda"),l=o("80d2"),c=o("d9bd"),a=s["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(i["a"])(Object(i["a"])({},this.measurableStyles),{},{height:Object(l["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var o=Object(r["a"])(e,2),i=o[0],s=o[1];t.$attrs.hasOwnProperty(i)&&Object(c["a"])(i,s,t)}))},methods:{genBackground:function(){var t={height:Object(l["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(l["f"])(this.computedContentHeight)}},Object(l["l"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(l["f"])(this.extensionHeight)}},Object(l["l"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],o=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,o,e)}}),h=o("53ca");function d(t,e){var o=e.modifiers||{},i=o.self,r=void 0!==i&&i,s=e.value,n="object"===Object(h["a"])(s)&&s.options||{passive:!0},l="function"===typeof s||"handleEvent"in s?s:s.handler,c=r?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",l,n),t._onScroll={handler:l,options:n,target:r?void 0:c})}function p(t){if(t._onScroll){var e=t._onScroll,o=e.handler,i=e.options,r=e.target,s=void 0===r?t:r;s.removeEventListener("scroll",o,i),delete t._onScroll}}var u={inserted:d,unbind:p},f=u,v=o("3a66"),m=o("2b0e"),b=m["a"].extend({name:"scrollable",directives:{Scroll:u},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(c["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),S=o("d10f"),g=o("f2e7"),O=o("58df"),T=Object(O["a"])(a,b,S["a"],g["a"],Object(v["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=T.extend({name:"v-app-bar",directives:{Scroll:f},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return b.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(i["a"])(Object(i["a"])({},a.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return a.options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,o=t,i=o-e,r=i/this.computedScrollThreshold,s=this.currentScroll*r;return Math.max(e,o-s)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,o=.00347;return Number((1.5-e*o).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:a.options.computed.isCollapsed.call(this)},isProminent:function(){return a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(i["a"])(Object(i["a"])({},a.options.computed.styles.call(this)),{},{fontSize:Object(l["f"])(this.computedFontSize,"rem"),marginTop:Object(l["f"])(this.computedMarginTop),transform:"translateY(".concat(Object(l["f"])(this.computedTransform),")"),left:Object(l["f"])(this.computedLeft),right:Object(l["f"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"5bc1":function(t,e,o){"use strict";o("498a");var i=o("5530"),r=o("9d26"),s=o("8336"),n=o("2b0e");e["a"]=n["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var o=e.slots,n=e.listeners,l=e.props,c=e.data,a=Object.assign(c,{staticClass:"v-app-bar__nav-icon ".concat(c.staticClass||"").trim(),props:Object(i["a"])(Object(i["a"])({},l),{},{icon:!0}),on:n}),h=o().default;return t(s["a"],a,h||[t(r["a"],"$menu")])}})},"5e23":function(t,e,o){},"8b0d":function(t,e,o){},f122:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-app-bar",{attrs:{app:"",color:"deep-purple",dark:""}},[o("v-app-bar-nav-icon",{on:{click:t.backClick}},[o("v-icon",[t._v("mdi-keyboard-backspace")])],1),o("v-app-bar-title",[t._v("云备份")])],1)],1)},r=[],s=o("5530"),n=o("2f62"),l={data:function(){return{}},methods:Object(s["a"])(Object(s["a"])({},Object(n["b"])(["fetchApi"])),{},{backClick:function(){this.$router.back()}})},c=l,a=o("2877"),h=o("6544"),d=o.n(h),p=o("40dc"),u=o("5bc1"),f=o("132d"),v=Object(a["a"])(c,i,r,!1,null,"7d4585fc",null);e["default"]=v.exports;d()(v,{VAppBar:p["a"],VAppBarNavIcon:u["a"],VIcon:f["a"]})}}]);
//# sourceMappingURL=chunk-5cb13924.33da4385.js.map