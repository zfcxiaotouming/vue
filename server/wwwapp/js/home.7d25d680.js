(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"01bf":function(t,s,a){"use strict";var i=a("b714"),n=a.n(i);n.a},b714:function(t,s,a){},bb51:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,height:140,"indicator-color":"white"}},t._l(t.bannerList,(function(t){return a("van-swipe-item",{key:t.id},[a("img",{attrs:{src:t.img,alt:""}})])})),1),a("div",{staticClass:"block-list"},[a("div",{staticClass:"title"},[t._v("商品列表")]),a("div",{staticClass:"list"},t._l(t.list,(function(t,s){return a("Card",{key:s,attrs:{goods:t}})})),1)])],1)},n=[],e=a("ade3"),o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card",on:{click:function(s){return t.gotoDetails(t.goods._id)}}},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.goods.img,alt:""}})]),a("div",{staticClass:"desc"},[a("div",{staticClass:"name-price"},[a("div",{staticClass:"name"},[t._v(t._s(t.goods.name))]),a("div",{staticClass:"price"},[t._v("￥ "+t._s(t.goods.price))])]),a("div",{staticClass:"addr-num"},[a("div",{staticClass:"num"},[t._v("销量:"+t._s(t.goods.buynum)+"+")])])])])},c=[],r={name:"card",props:{goods:{type:Object,default:function(){return{}}}},mounted:function(){},methods:{gotoDetails:function(t){this.$router.push("/details?id="+t)}}},d=r,l=(a("cf48"),a("2877")),u=Object(l["a"])(d,o,c,!1,null,null,null),f=u.exports,v={name:"Home",components:{Card:f},data:function(){var t;return t={list:[],loading:!1,finished:!1},Object(e["a"])(t,"list",[]),Object(e["a"])(t,"bannerList",[]),t},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$api.get("/api/goods/goodsTest").then((function(s){var a=s.data;0==a.code&&(t.list=a.list)})),this.$api.get("/api/banner").then((function(s){var a=s.data;0==a.code&&(t.bannerList=a.data)}))}}},m=v,p=(a("01bf"),Object(l["a"])(m,i,n,!1,null,null,null));s["default"]=p.exports},cf48:function(t,s,a){"use strict";var i=a("d54a"),n=a.n(i);n.a},d54a:function(t,s,a){}}]);
//# sourceMappingURL=home.7d25d680.js.map