(function(e){function n(n){for(var c,a,u=n[0],i=n[1],d=n[2],h=0,f=[];h<u.length;h++)a=u[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aaeea":"fd4bd7a0","chunk-2d0ba529":"cedfc09d","chunk-2d0bd588":"15d42e01","chunk-2d0c55e7":"cda5b987","chunk-2d0c779c":"135b416b","chunk-2d0dd10e":"7eba2d15","chunk-2d0e5060":"83b8aa5b","chunk-2d20f91a":"d64d3216","chunk-2d216dc5":"6712d4d1","chunk-2d216fb5":"65173683","chunk-2d217632":"60b326fc","chunk-2d21a418":"484a05e4","chunk-2d22ce6f":"eee6752a","chunk-366bcf73":"d2732daa","chunk-00969f8d":"702afbb5","chunk-1e4dbe96":"6e1f68e1","chunk-b46bff38":"085da372","chunk-6e678c50":"a2e2ebce","chunk-0d7ab7a9":"dace890e","chunk-52f6b6ff":"b0513442","chunk-c745e0d2":"6db91586","chunk-3e978fe5":"411a7d92","chunk-4724895c":"55cf98ae"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-366bcf73":1,"chunk-00969f8d":1,"chunk-1e4dbe96":1,"chunk-b46bff38":1,"chunk-6e678c50":1,"chunk-0d7ab7a9":1,"chunk-52f6b6ff":1,"chunk-c745e0d2":1,"chunk-3e978fe5":1,"chunk-4724895c":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0aaeea":"31d6cfe0","chunk-2d0ba529":"31d6cfe0","chunk-2d0bd588":"31d6cfe0","chunk-2d0c55e7":"31d6cfe0","chunk-2d0c779c":"31d6cfe0","chunk-2d0dd10e":"31d6cfe0","chunk-2d0e5060":"31d6cfe0","chunk-2d20f91a":"31d6cfe0","chunk-2d216dc5":"31d6cfe0","chunk-2d216fb5":"31d6cfe0","chunk-2d217632":"31d6cfe0","chunk-2d21a418":"31d6cfe0","chunk-2d22ce6f":"31d6cfe0","chunk-366bcf73":"19d5b8cd","chunk-00969f8d":"cc7e4839","chunk-1e4dbe96":"a8a2d2af","chunk-b46bff38":"e2f77e65","chunk-6e678c50":"4d066770","chunk-0d7ab7a9":"567d0d4a","chunk-52f6b6ff":"007adc63","chunk-c745e0d2":"263aaa84","chunk-3e978fe5":"33fab6ab","chunk-4724895c":"65826e39"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var d=o[u],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===c||h===r))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){d=f[u],h=d.getAttribute("data-href");if(h===c||h===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],l.parentNode.removeChild(l),t(o)},l.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=o);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=u(e);var f=new Error;d=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",f.name="ChunkLoadError",f.type=c,f.request=a,t[1](f)}r[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/pc/static/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var l=h;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"02e6":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app"},[t("router-view")],1)},r=[],o=(t("ac1f"),t("5319"),t("5530")),u=t("2f62"),i={computed:Object(o["a"])({},Object(u["c"])({isLogin:function(e){return e.user.isLogin}})),watch:{isLogin:{handler:function(e){e||this.$router.replace("/auth")},immediate:!0}},created:function(){this.isLogin&&this.$store.dispatch("user/checkLogin")}},d=i,h=(t("dfab"),t("2877")),f=Object(h["a"])(d,a,r,!1,null,"611cd6c4",null),l=f.exports,s=(t("b0c0"),t("d3b7"),t("8c4f")),m=(t("a9e3"),t("bc3a")),b=t.n(m),p={namespaced:!0,state:{isLogin:Boolean(Number(localStorage.getItem("isLogin"))),info:{}},getters:{userAuth:function(e){return e.info.auth||[]}},mutations:{setIsLogin:function(e,n){e.isLogin=n},setInfo:function(e,n){e.info=n},removeUserInfo:function(e){e.info={},e.isLogin=!1}},actions:{changeLoginAction:function(e,n){n?localStorage.setItem("isLogin",1):localStorage.setItem("isLogin",0),e.commit("setIsLogin",n)},checkLogin:function(e,n){b.a.get("/api/user/check_login").then((function(n){0===n.data.code?(localStorage.setItem("isLogin",1),e.commit("setIsLogin",!0),e.dispatch("requestUserInfo")):(localStorage.setItem("isLogin",0),e.commit("setIsLogin",!1))}))},requestUserInfo:function(e,n){b.a.get("/api/user/user_info").then((function(n){e.commit("setInfo",n.data.data)}))}}};c["a"].use(u["a"]);var k=new u["a"].Store({modules:{user:p}}),g={path:"/auth",name:"auth",redirect:"/auth/login",component:function(){return t.e("chunk-3e978fe5").then(t.bind(null,"119d"))},children:[{path:"login",name:"login",component:function(){return t.e("chunk-4724895c").then(t.bind(null,"5326"))}},{path:"register",name:"register",component:function(){return t.e("chunk-2d0e5060").then(t.bind(null,"935e"))}}]};t("b1cb");c["a"].use(s["a"]);var v=new s["a"]({mode:"history",routes:[g,{path:"/",component:function(){return Promise.all([t.e("chunk-366bcf73"),t.e("chunk-b46bff38"),t.e("chunk-c745e0d2")]).then(t.bind(null,"eaf6"))},name:"app",children:[{path:"",name:"home",component:function(){return t.e("chunk-2d20f91a").then(t.bind(null,"b3d7"))},meta:{icon:"home",title:"系统首页"}}]},{path:"/",component:function(){return Promise.all([t.e("chunk-366bcf73"),t.e("chunk-b46bff38"),t.e("chunk-c745e0d2")]).then(t.bind(null,"eaf6"))},children:[{path:"404",name:"404",component:function(){return t.e("chunk-2d217632").then(t.bind(null,"c708"))}}]},{path:"*",redirect:"/404"}]});v.beforeEach((function(e,n,t){"login"===e.name||"register"===e.name||k.state.user.isLogin?t():t("/auth")}));var y=v;t("02e6");c["a"].prototype.$axios=b.a,new c["a"]({router:y,store:k,render:function(e){return e(l)}}).$mount("#app")},ab0c:function(e,n,t){},b1cb:function(e,n,t){"use strict";t("d3b7");n["a"]={path:"/",component:function(){return Promise.all([t.e("chunk-366bcf73"),t.e("chunk-b46bff38"),t.e("chunk-c745e0d2")]).then(t.bind(null,"eaf6"))},children:[{path:"",name:"home",component:function(){return t.e("chunk-2d20f91a").then(t.bind(null,"b3d7"))},meta:{title:"系统首页"}},{path:"goods-manage",name:"goods-manage",component:function(){return Promise.all([t.e("chunk-366bcf73"),t.e("chunk-b46bff38"),t.e("chunk-00969f8d"),t.e("chunk-6e678c50"),t.e("chunk-52f6b6ff")]).then(t.bind(null,"e79a"))},meta:{title:"商品管理"}},{path:"cart-manage",name:"cart-manage",component:function(){return Promise.all([t.e("chunk-366bcf73"),t.e("chunk-b46bff38"),t.e("chunk-00969f8d"),t.e("chunk-6e678c50"),t.e("chunk-0d7ab7a9")]).then(t.bind(null,"030b"))},meta:{title:"购物车管理"}},{path:"order-manage",name:"order-manage",component:{render:function(e){return e("router-view")}},redirect:"/order-manage/goods-order",meta:{title:"订单管理"},children:[{path:"goods-order",name:"goods-order",component:function(){return t.e("chunk-2d0bd588").then(t.bind(null,"2c34"))},meta:{title:"商品订单"}},{path:"after-sale",name:"after-sale",component:function(){return t.e("chunk-2d216dc5").then(t.bind(null,"c3ed"))},meta:{title:"售后管理"}}]},{path:"comment-manage",name:"comment-manage",component:function(){return t.e("chunk-2d21a418").then(t.bind(null,"bb79"))},meta:{title:"评价管理"}},{path:"activity-manage",name:"activity-manage",component:function(){return t.e("chunk-2d0ba529").then(t.bind(null,"375d"))},meta:{title:"活动管理"}},{path:"platform-manage",name:"platform-manage",component:{render:function(e){return e("router-view")}},redirect:"platform-manage/category-setting",meta:{title:"平台管理"},children:[{path:"category-setting",name:"category-setting",component:function(){return t.e("chunk-2d216fb5").then(t.bind(null,"c57d"))},meta:{title:"分类设置"}},{path:"focus-map",name:"focus-map",component:function(){return t.e("chunk-2d0dd10e").then(t.bind(null,"8099"))},meta:{title:"焦点图"}},{path:"freight-template",name:"freight-template",component:function(){return t.e("chunk-2d22ce6f").then(t.bind(null,"f4e0"))},meta:{title:"运费模板"}}]},{path:"vip-manage",name:"vip-manage",component:function(){return t.e("chunk-2d0aaeea").then(t.bind(null,"12b5"))},meta:{title:"会员管理"}},{path:"data-statistics",name:"data-statistics",component:function(){return t.e("chunk-2d0c779c").then(t.bind(null,"517a"))},meta:{title:"数据统计"}},{path:"rights-manage",name:"rights-manage",component:function(){return t.e("chunk-2d0c55e7").then(t.bind(null,"3f97"))},meta:{title:"权限管理"}},{path:"add-acount",name:"add-acount",component:function(){return Promise.all([t.e("chunk-366bcf73"),t.e("chunk-00969f8d"),t.e("chunk-1e4dbe96")]).then(t.bind(null,"72b9"))},meta:{title:"添加账号"}}]}},dfab:function(e,n,t){"use strict";var c=t("ab0c"),a=t.n(c);a.a}});
//# sourceMappingURL=app.6eec47d2.js.map