(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["message"],{"8ddc":function(t,s,a){},"8e2a":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message"},[0==t.shopCarList.length?a("div",{staticClass:"empty"},[a("div",{staticClass:"text"},[t._v("你暂时还没有添加商品")]),a("div",{staticClass:"button"},[a("van-button",{staticClass:"button",attrs:{type:"default"},on:{click:function(s){return t.$router.push({name:"home"})}}},[t._v("去添加商品")])],1)]):a("div",{staticClass:"content"},[t._l(t.shopCarList,(function(s){return a("div",{key:s._id,staticClass:"shop-item"},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:s.img,alt:""}})]),a("div",{staticClass:"desc"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"price"},[t._v("￥"+t._s(s.price))]),a("div",{staticClass:"count"},[a("div",{staticClass:"red",on:{click:t.red}},[t._v("-")]),a("span",[t._v(t._s(s.count))]),a("div",{staticClass:"add",on:{click:t.add}},[t._v("+")])])])])})),a("div",{staticClass:"btn-group"},[a("van-submit-bar",{attrs:{price:t.totalPrice,"button-text":"提交订单"},on:{submit:t.onSubmit}})],1)],2)])},n=[],c=(a("4160"),a("159b"),a("2241")),e={data:function(){return{shopCarList:[],totalPrice:0}},created:function(){this.getData()},computed:{userName:function(){return this.$store.state.userName}},methods:{getData:function(){var t=this,s=this.userName;s&&this.$api.get("/api/shop/shopcar?userId=".concat(s)).then((function(s){var a=s.data;if(0==a.code){t.shopCarList=a.data;var i=0;t.shopCarList.forEach((function(t){i+=t.price*t.count})),t.totalPrice=100*i}}))},red:function(){},add:function(){},onSubmit:function(){c["a"].confirm({title:"提示",message:"您确定购买吗"}).then((function(){})).catch((function(){}))}}},o=e,r=(a("ada6"),a("2877")),u=Object(r["a"])(o,i,n,!1,null,null,null);s["default"]=u.exports},ada6:function(t,s,a){"use strict";var i=a("8ddc"),n=a.n(i);n.a}}]);
//# sourceMappingURL=message.24e9549e.js.map