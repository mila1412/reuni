(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{ed2a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-lg",attrs:{id:"singleorders"}},[a("div",{staticClass:"container"},[a("h5",{staticClass:"text-bold text-grey-9 q-mb-md"},[e._v("訂單管理")]),a("q-table",{attrs:{data:e.table.data,columns:e.table.columns,"row-key":"name","rows-per-page-options":[0],pagination:e.table.pagination,"hide-bottom":"",flat:"",bordered:""},on:{"update:pagination":function(t){return e.$set(e.table,"pagination",t)}},scopedSlots:e._u([{key:"body-cell-image1",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("q-avatar",{attrs:{size:"80px"}},[a("img",{attrs:{src:e.row.image1}})])],1)]}},{key:"body-cell-name",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("router-link",{staticClass:"order-link",attrs:{to:"/product/"+t.row.product}},[e._v(e._s(t.row.name))])],1)]}},{key:"body-cell-totalprice",fn:function(t){return[a("q-td",{attrs:{props:t}},[e._v("\n          "+e._s(t.row.price*t.row.amount)+"\n        ")])]}}])}),a("div",{staticClass:"sum flex justify-end q-pa-md"},[a("div",[a("span",[e._v("運費："+e._s(e.delivery)+" 元 ")]),a("span",[e._v("總額："+e._s(e.sum+e.delivery)+" 元")])])])],1)])},r=[],o=a("ded3"),i=a.n(o),s=a("c973"),l=a.n(s),d=(a("96cf"),a("13d5"),a("d81d"),a("99af"),{name:"PageSingleOrders",data:function(){return{delivery:0,table:{columns:[{name:"image1",field:"image1",align:"center",label:"商品明細",style:"width: 100px"},{name:"name",field:"name",align:"left",style:"width: 100px"},{name:"amount",field:"amount",align:"center",label:"數量",style:"width: 200px"},{name:"price",field:"price",align:"center",label:"單價",style:"width: 200px"},{name:"totalprice",field:"totalprice",align:"center",label:"小計",style:"width: 200px"}],pagination:{sortBy:"date",descending:!0,page:1,rowsPerPage:0},data:[]}}},computed:{sum:function(){return 0===this.table.data.length?0:this.table.data.reduce((function(e,t){return e+t.amount*t.price}),0)}},mounted:function(){var e=this;return l()(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/orders/"+e.$route.params.id,{headers:{authorization:"Bearer "+e.$store.state.user.jwt.token}});case 3:a=t.sent,n=a.data,e.delivery=n.result.delivery,e.table.data=n.result.products.map((function(e){return e=i()(i()({},e.product),{},{product:e.product._id,amount:e.amount,_id:e._id}),e.image1="".concat("https://reuni-dessert.herokuapp.com","/files/").concat(e.image1),e})),console.log(e.table.data),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0),e.$q.notify({message:"取得訂單失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}),c=d,u=a("2877"),p=a("9989"),m=a("eaac"),g=a("db86"),f=a("cb32"),b=a("eebe"),w=a.n(b),v=Object(u["a"])(c,n,r,!1,null,null,null);t["default"]=v.exports;w()(v,"components",{QPage:p["a"],QTable:m["a"],QTd:g["a"],QAvatar:f["a"]})}}]);