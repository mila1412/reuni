(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"033b":function(t,e,i){},3554:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"q-pt-lg",attrs:{id:"productlist"}},[i("div",{staticClass:"container"},[i("q-breadcrumbs",{staticClass:"text-bread q-pb-md q-pl-md",attrs:{"active-color":"text-bread"},scopedSlots:t._u([{key:"separator",fn:function(){return[i("q-icon",{attrs:{size:"1.5em",name:"chevron_right",color:"text-bread"}})]},proxy:!0}])},[i("q-breadcrumbs-el",{attrs:{label:"首頁",icon:"home",to:"/"}}),i("q-breadcrumbs-el",{attrs:{label:"商品列表"}})],1),i("q-tabs",{staticClass:"tab",attrs:{"mobile-arrows":"","inline-label":"","outside-arrows":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("q-tab",{attrs:{name:"全部",label:"全部"},on:{click:function(e){return t.show(0)}}}),i("q-tab",{attrs:{name:"千層",label:"千層"},on:{click:function(e){return t.show(1)}}}),i("q-tab",{attrs:{name:"軟餅乾",label:"軟餅乾"},on:{click:function(e){return t.show(2)}}}),i("q-tab",{attrs:{name:"雪Q餅",label:"雪Q餅"},on:{click:function(e){return t.show(3)}}}),i("q-tab",{attrs:{name:"瑪德蓮",label:"瑪德蓮"},on:{click:function(e){return t.show(4)}}}),i("q-tab",{attrs:{name:"檸檬塔",label:"檸檬塔"},on:{click:function(e){return t.show(5)}}}),i("q-tab",{attrs:{name:"香橙醬",label:"香橙醬"},on:{click:function(e){return t.show(6)}}})],1),i("div",{staticClass:"row justify-center q-mb-lg"},[i("div",{staticClass:"sidebar col-2"},[i("div",{staticClass:"q-pa-md"},[i("q-list",{staticClass:"rounded-borders text-grey-8",attrs:{bordered:""}},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"全部商品"===t.link,"active-class":"menu-link"},on:{click:function(e){return t.show(0)}}},[i("q-item-section",[t._v("全部商品")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"千層蛋糕"===t.link,"active-class":"menu-link"},on:{click:function(e){return t.show(1)}}},[i("q-item-section",[t._v("千層蛋糕")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"軟餅乾"===t.link,"active-class":"menu-link"},on:{click:function(e){return t.show(2)}}},[i("q-item-section",[t._v("軟餅乾")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"雪Q餅"===t.link,"active-class":"menu-link"},on:{click:function(e){return t.show(3)}}},[i("q-item-section",[t._v("雪Q餅")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"瑪德蓮"===t.link,"active-class":"menu-link"},on:{click:function(e){return t.show(4)}}},[i("q-item-section",[t._v("瑪德蓮")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"檸檬塔"===t.link,"active-class":"menu-link"},on:{click:function(e){return t.show(5)}}},[i("q-item-section",[t._v("檸檬塔")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"香橙醬"===t.link,"active-class":"menu-link"},on:{click:function(e){return t.show(6)}}},[i("q-item-section",[t._v("香橙醬")])],1)],1)],1)]),i("div",{staticClass:"col-10"},[i("div",{staticClass:"row"},t._l(t.filterProducts,(function(t){return i("div",{key:t._id,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3"},[i("ProductCard",{attrs:{product:t}})],1)})),0)])])],1)])},s=[],r=i("c973"),c=i.n(r),n=(i("96cf"),i("9911"),i("4de4"),i("d81d"),i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-pa-md"},[i("router-link",{staticClass:"image",attrs:{to:"/product/"+t.product._id}},[i("q-img",{attrs:{src:t.product.image1}})],1),i("div",{staticClass:"text-center q-py-xs"},[i("div",{staticClass:"text-h6"},[t._v("\n      "+t._s(t.product.name)+"\n    ")])]),i("div",{staticClass:"text-subtitle2 text-center"},[t._v("\n    NT$"+t._s(t.product.price)+"\n  ")]),i("div",{staticClass:"text-center"},[i("q-btn",{staticClass:"text-product",attrs:{flat:""},on:{click:t.addCart}},[t._v("加入購物車")])],1)],1)}),o=[],l={name:"ProductCard",props:{product:{type:Object,required:!0}},methods:{addCart:function(){var t=this;0===this.$store.state.user.jwt.token.length?(this.$store.commit("user/beforeLogin",this.product._id),this.$q.notify({message:"已加入購物車",timeout:1e3,type:"positive",color:"faded",textColor:"white",position:"top"})):this.$store.dispatch("user/addCart",{product:this.product._id}).then((function(e){t.$q.notify({message:"已加入購物車",timeout:1e3,type:"positive",color:"faded",textColor:"white",position:"top"})})).catch((function(e){console.log(e),t.$q.notify({message:"加入購物車失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"})}))}}},u=l,d=(i("b22e"),i("2877")),p=i("068f"),m=i("9c40"),b=i("eebe"),v=i.n(b),k=Object(d["a"])(u,n,o,!1,null,null,null),f=k.exports;v()(k,"components",{QImg:p["a"],QBtn:m["a"]});var h={name:"PageProductList",data:function(){return{tab:"全部商品",link:"全部商品",products:[],display:0}},components:{ProductCard:f},methods:{show:function(t){switch(this.display=t,t){case 0:this.link="全部商品";break;case 1:this.link="千層蛋糕";break;case 2:this.link="軟餅乾";break;case 3:this.link="雪Q餅";break;case 4:this.link="瑪德蓮";break;case 5:this.link="檸檬塔";break;case 6:this.link="香橙醬";break;default:break}}},computed:{filterProducts:function(){var t=this;return this.products.filter((function(e){return 0===t.display||(1===t.display&&"千層蛋糕"===e.category||(2===t.display&&"軟餅乾"===e.category||(3===t.display&&"雪Q餅"===e.category||(4===t.display&&"瑪德蓮"===e.category||(5===t.display&&"檸檬塔"===e.category||6===t.display&&"香橙醬"===e.category)))))}))}},mounted:function(){var t=this;return c()(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/products");case 3:i=e.sent,a=i.data,t.products=a.result.map((function(t){return t.image1&&(t.image1="".concat("https://reuni-dessert.herokuapp.com","/files/").concat(t.image1)),t})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$q.notify({message:"取得商品失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},q=h,w=i("9989"),g=i("ead5"),y=i("0016"),C=i("079e"),x=i("429b"),_=i("7460"),Q=i("1c1c"),$=i("66e5"),N=i("4074"),P=i("714f"),j=Object(d["a"])(q,a,s,!1,null,null,null);e["default"]=j.exports;v()(j,"components",{QPage:w["a"],QBreadcrumbs:g["a"],QIcon:y["a"],QBreadcrumbsEl:C["a"],QTabs:x["a"],QTab:_["a"],QList:Q["a"],QItem:$["a"],QItemSection:N["a"]}),v()(j,"directives",{Ripple:P["a"]})},b22e:function(t,e,i){"use strict";i("033b")}}]);