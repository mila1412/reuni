(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{b640:function(t,e,a){t.exports=a.p+"img/logo.f7064c52.jpg"},f6b42:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"hHh lpR fff",id:"adminlayout"}},[o("q-header",{staticClass:"bg-admin"},[o("div",{staticClass:"container"},[o("q-toolbar",[o("q-toolbar-title",{staticClass:"flex"},[o("q-avatar",[o("img",{attrs:{src:a("b640")}})]),o("div",[o("q-btn",{attrs:{flat:"",to:"/admin/products"}},[t._v("商品管理")]),o("q-btn",{attrs:{flat:"",to:"/admin/orders"}},[t._v("訂單管理")]),o("q-btn",{attrs:{flat:"",to:"/admin/members"}},[t._v("會員管理")]),o("q-btn",{attrs:{flat:"",to:"/admin/news"}},[t._v("最新消息")])],1),o("q-space"),o("span",[o("q-btn",{attrs:{flat:""},on:{click:t.logout}},[t._v("登出")])],1)],1)],1)],1)]),o("q-page-container",{staticStyle:{padding:"50px 0px 50px 0"}},[o("router-view")],1)],1)},r=[],n=a("c973"),s=a.n(n),i=(a("96cf"),{name:"AdminLayout",methods:{logout:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.delete("/users/logout",{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 3:t.$store.commit("user/logout"),"/"!==t.$route.path&&t.$router.push("/"),e.next=12;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(t.$store.state),console.log(e.t0),t.$q.notify({message:"發生錯誤",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),c=i,l=a("2877"),u=a("4d5a"),p=a("e359"),d=a("65c6"),f=a("6ac5"),m=a("cb32"),b=a("9c40"),g=a("2c91"),v=a("09e3"),h=a("eebe"),w=a.n(h),q=Object(l["a"])(c,o,r,!1,null,null,null);e["default"]=q.exports;w()(q,"components",{QLayout:u["a"],QHeader:p["a"],QToolbar:d["a"],QToolbarTitle:f["a"],QAvatar:m["a"],QBtn:b["a"],QSpace:g["a"],QPageContainer:v["a"]})}}]);