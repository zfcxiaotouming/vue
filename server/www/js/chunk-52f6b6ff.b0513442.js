(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52f6b6ff"],{"302e":function(e,t,n){"use strict";var a=n("ff88"),i=n.n(a);i.a},e79a:function(e,t,n){"use strict";n.r(t);var a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.visible?n("div",{staticClass:"from"},[n("p",[e._v("商品编号："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.num,expression:"num"}],attrs:{type:"text"},domProps:{value:e.num},on:{input:function(t){t.target.composing||(e.num=t.target.value)}}})]),n("p",[e._v("商品图："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.img,expression:"img"}],attrs:{type:"text"},domProps:{value:e.img},on:{input:function(t){t.target.composing||(e.img=t.target.value)}}})]),n("p",[e._v("商品名称："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("p",[e._v("价格："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],attrs:{type:"text"},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}})]),n("p",[e._v("库存："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.store,expression:"store"}],attrs:{type:"text"},domProps:{value:e.store},on:{input:function(t){t.target.composing||(e.store=t.target.value)}}})]),n("p",[e._v("销量："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.buynum,expression:"buynum"}],attrs:{type:"text"},domProps:{value:e.buynum},on:{input:function(t){t.target.composing||(e.buynum=t.target.value)}}})]),n("p",{staticClass:"detail"},[e._v("商品详情："),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.detail,expression:"detail"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:e.detail},on:{input:function(t){t.target.composing||(e.detail=t.target.value)}}})]),n("p",[n("button",{on:{click:e.submitAction}},[e._v("提交")]),e._v(" "),n("button",{on:{click:e.cancel}},[e._v("取消")])])]):n("div",[n("button",{staticClass:"add-btn",on:{click:e.addAction}},[e._v("添加")]),n("a-table",{attrs:{columns:e.columns,"data-source":e.data,bordered:""},scopedSlots:e._u([{key:"name",fn:function(t){return[n("a",[e._v(e._s(t))])]}},{key:"operation",fn:function(t,a){return[e.data.length?n("a-popconfirm",{attrs:{title:"Sure to delete?"},on:{confirm:function(){return e.onDelete(a)}}},[n("a",{attrs:{href:"javascript:;"}},[e._v("删除")])]):e._e()]}}],null,!1,968450077)})],1)])},o=[],s=(n("d81d"),n("b0c0"),n("ac1f"),n("5319"),n("ade3")),r=(n("564f"),n("768f")),u=(n("9967"),n("de1b")),m=(n("0723"),n("0020")),c=function(e,t,n){var a={children:e,attrs:{}};return a},d={components:(a={},Object(s["a"])(a,m["a"].name,m["a"]),Object(s["a"])(a,u["a"].name,u["a"]),Object(s["a"])(a,r["a"].name,r["a"]),a),data:function(){var e=this.$createElement,t=[{title:"商品编号",dataIndex:"num",customRender:function(t,n,a){return e("a",{attrs:{href:"javascript:;"}},[t])}},{title:"商品图",dataIndex:"img",customRender:function(t){return e("img",{attrs:{src:t,width:"40px"}})}},{title:"商品名称",dataIndex:"name",customRender:c},{title:"价格",dataIndex:"price",customRender:c},{title:"库存",dataIndex:"store",customRender:c},{title:"销量",dataIndex:"buynum",customRender:c},{title:"操作",key:"operation",scopedSlots:{customRender:"operation"}}];return{data:[],columns:t,visible:!1,num:"",img:"//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/9953/3/13380/93013/5c443b5eE311a22f6/227e53f664231e09.jpg!q70.dpg.webp",name:"",price:"300",store:"10",buynum:"200",detail:"米兰艺 北欧后现代轻奢客厅吊灯个性创意led卧室灯具简约现代圆形环形工程定制餐厅吊灯",editingKey:""}},created:function(){this.getData()},methods:{getData:function(){var e=this;this.$axios.get("/api/goods/goodsTest").then((function(t){var n=t.data.list.map((function(e,t){return{key:"".concat(t),num:e.num,img:e.img,name:e.name,price:e.price,store:e.store,buynum:e.buynum,id:e._id}}));e.data=n}))},addAction:function(){this.visible=!0,console.log(111)},cancel:function(){this.visible=!1},submitAction:function(){var e=this;this.$axios.post("/api/goods/goodsTest",{num:this.num,img:this.img,name:this.name,price:this.price,store:this.store,buynum:this.buynum,detail:this.detail}).then((function(t){0===t.data.code&&(alert("添加成功"),e.$router.replace({name:"home"}))}))},onDelete:function(e){var t=this,n=e.id;this.$axios.post("/api/goods/delGoodsTest",{id:n}).then((function(e){t.getData()}))}}},l=d,p=(n("302e"),n("2877")),v=Object(p["a"])(l,i,o,!1,null,"5aecea02",null);t["default"]=v.exports},ff88:function(e,t,n){}}]);
//# sourceMappingURL=chunk-52f6b6ff.b0513442.js.map