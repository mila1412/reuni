(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"0b35":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-lg",attrs:{id:"orders"}},[a("div",{staticClass:"container"},[a("q-table",{attrs:{data:e.table.data,columns:e.table.columns,"row-key":"name","rows-per-page-options":[0],pagination:e.table.pagination,"hide-bottom":"",flat:"",bordered:""},on:{"update:pagination":function(t){return e.$set(e.table,"pagination",t)}},scopedSlots:e._u([{key:"body-cell-_id",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("router-link",{staticClass:"order-link",attrs:{to:"/orders/"+t.row._id}},[e._v(e._s(t.row._id))])],1)]}},{key:"body-cell-products",fn:function(t){return[a("q-td",{attrs:{props:t}},[e._v("\n          "+e._s(t.row.products.reduce((function(e,t){return e+t.amount*t.product.price}),0)+t.row.delivery)+"\n        ")])]}}])})],1)])},n=[],o=a("c973"),i=a.n(o),l=(a("96cf"),a("d81d"),{name:"PageOrders",data:function(){return{table:{columns:[{name:"_id",field:"_id",align:"center",label:"訂單編號",style:"width: 200px"},{name:"date",field:"date",align:"center",label:"訂購日期",style:"width: 200px",sortable:!0},{name:"products",field:"products",align:"center",label:"訂單金額",style:"width: 200px"},{name:"deliveryText",field:"deliveryText",align:"center",label:"取貨方式",style:"width: 200px"}],pagination:{page:1,rowsPerPage:0},data:[]}}},mounted:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return 0===e.table.data.length&&e.$q.notify({message:"目前還沒有訂單喔",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"}),t.prev=1,t.next=4,e.$axios.get("/orders",{headers:{authorization:"Bearer "+e.$store.state.user.jwt.token}});case 4:a=t.sent,r=a.data,e.table.data=r.result.map((function(e){switch(e.date=new Date(e.date).toLocaleDateString(),e.delivery){case 0:e.deliveryText="面交取貨";break;case 160:e.deliveryText="宅配到府";break;case 170:e.deliveryText="7-11 店到店取貨";break;default:break}return e})),console.log(e.table.data),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.$q.notify({message:"取得訂單失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()}}),s=l,d=a("2877"),c=a("9989"),u=a("eaac"),p=a("db86"),b=a("eebe"),f=a.n(b),g=Object(d["a"])(s,r,n,!1,null,null,null);t["default"]=g.exports;f()(g,"components",{QPage:c["a"],QTable:u["a"],QTd:p["a"]})}}]);