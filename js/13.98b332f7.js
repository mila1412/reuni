(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{f68e:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-lg",attrs:{id:"cart"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"cart-circle-1 text-grey-8 q-mb-md"},[e._v("購物車內容")]),a("q-table",{attrs:{data:e.table.data,columns:e.table.columns,"row-key":"name","rows-per-page-options":[0],pagination:e.table.pagination,"hide-bottom":"",flat:"",bordered:""},on:{"update:pagination":function(t){return e.$set(e.table,"pagination",t)}},scopedSlots:e._u([{key:"body-cell-image1",fn:function(e){return[a("q-td",{attrs:{props:e,"no-hover":""}},[a("q-avatar",{attrs:{size:"80px"}},[a("img",{attrs:{src:e.row.image1}})])],1)]}},{key:"body-cell-name",fn:function(t){return[a("q-td",{attrs:{props:t,"no-hover":""}},[a("router-link",{staticClass:"order-link",attrs:{to:"/product/"+t.row._id}},[e._v(e._s(t.row.name))])],1)]}},{key:"body-cell-price",fn:function(t){return[a("q-td",{attrs:{props:t,"no-hover":""}},[e._v("\n        "+e._s(t.row.price)+"\n        ")])]}},{key:"body-cell-amount",fn:function(t){return[a("q-td",{attrs:{props:t,"no-hover":""}},[a("q-input",{staticClass:"cart-input",attrs:{type:"number",outlined:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-btn",{staticClass:"number-btn",attrs:{dense:"",flat:"",icon:"remove"},on:{click:function(a){return e.numberSub(t.rowIndex)}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-btn",{staticClass:"number-btn",attrs:{dense:"",flat:"",icon:"add"},on:{click:function(a){return e.numberAdd(t.row)}}})]},proxy:!0}],null,!0),model:{value:t.row.number,callback:function(a){e.$set(t.row,"number",e._n(a))},expression:"props.row.number"}})],1)]}},{key:"body-cell-total",fn:function(t){return[a("q-td",{attrs:{props:t,"no-hover":""}},[e._v("\n        "+e._s(t.row.price*t.row.amount)+"\n        ")])]}},{key:"body-cell-delete",fn:function(t){return[a("q-td",{attrs:{props:t,"no-hover":""}},[a("q-btn",{attrs:{unelevated:"",ripple:!1},on:{click:function(a){return e.delProduct(t.rowIndex)}}},[a("q-icon",{staticClass:"clear-btn",attrs:{name:"clear"}})],1)],1)]}}])}),a("div",{staticClass:"cart-circle-2 text-grey-8 q-mt-xl q-mb-md"},[e._v("請選擇取貨方式")]),a("div",{staticClass:"button-group q-pa-md",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.12)","border-radius":"4px"}},[a("q-btn",{staticClass:"delivery-btn",class:[160===e.delivery?"border":""],attrs:{unelevated:"",ripple:!1},on:{click:e.deliveryHome}},[160===e.delivery?a("span",[a("q-icon",{staticClass:"icon",attrs:{name:"check_circle"}}),e._v(" 宅配到府")],1):a("span",[a("q-icon",{staticClass:"icon",attrs:{name:"radio_button_unchecked"}}),e._v(" 宅配到府")],1),a("span",[e._v("NT$160")])]),a("q-btn",{staticClass:"delivery-btn",class:[170===e.delivery?"border":""],attrs:{unelevated:"",ripple:!1},on:{click:e.delivery711}},[170===e.delivery?a("span",[a("q-icon",{staticClass:"icon",attrs:{name:"check_circle"}}),e._v(" 7-11 店到店取貨")],1):a("span",[a("q-icon",{staticClass:"icon",attrs:{name:"radio_button_unchecked"}}),e._v(" 7-11 店到店取貨")],1),a("span",[e._v("NT$170")])]),a("q-btn",{staticClass:"delivery-btn",class:[0===e.delivery?"border":""],attrs:{unelevated:"",ripple:!1},on:{click:e.deliveryPerson}},[0===e.delivery?a("span",[a("q-icon",{staticClass:"icon",attrs:{name:"check_circle"}}),e._v(" 面交取貨")],1):a("span",[a("q-icon",{staticClass:"icon",attrs:{name:"radio_button_unchecked"}}),e._v(" 面交取貨")],1),a("span",[e._v("NT$0")])])],1),a("div",{staticClass:"cart-circle-3 text-grey-8 q-mt-xl q-mb-md"},[e._v("收件人資料")]),a("div",{staticClass:"q-pa-md",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.12)","border-radius":"4px"}},[a("div",{staticClass:"info"},[a("div",{staticClass:"person-info q-mx-lg"},[a("p",{staticClass:"q-mb-sm q-mt-md"},[e._v("姓名（必填）")]),a("q-input",{attrs:{filled:"",label:"請輸入姓名",rules:[function(t){return e.$v.name.required||"請輸入姓名"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("p",{staticClass:"q-mb-sm"},[e._v("電話（必填）")]),a("q-input",{attrs:{filled:"",label:"請輸入手機號碼",rules:[function(t){return e.$v.phone.required||"請輸入手機號碼"},function(t){return e.$v.phone.minLength||"手機號碼須為十碼"},function(t){return e.$v.phone.maxLength||"手機號碼須為十碼"}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),a("p",{staticClass:"q-mb-sm"},[e._v("信箱（必填）")]),a("q-input",{attrs:{filled:"",label:"請輸入聯絡信箱",rules:[function(t){return e.$v.email.required||"請輸入聯絡信箱"},function(t){return e.$v.email.email||"信箱格式不符"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("p",{staticClass:"q-mb-sm"},[e._v("優惠券代碼")]),a("q-input",{attrs:{filled:"",label:"請輸入優惠券代碼",rules:[function(e){return e&&e.length>0}]},model:{value:e.coupon,callback:function(t){e.coupon=t},expression:"coupon"}})],1),a("div",{staticClass:"face-text q-px-md q-pb-md",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.12)","border-radius":"4px"}},[e._v("\n            面交付款取貨地點（可商議取貨時間）\n            1. 鳳山國中捷運站 1 號出口\n            2. 統一超商工協門市前（鳳山區埤頂里建國路一段 79 號）\n            3. 全家便利商店埤頂店門市前（鳳山區中山東路 545 號）\n            4. 大東文化中心捷運站 1、2 號出口\n            5. 鳳山西站 2 號出口（鳳山自由路、青年路口）\n            6. 統一超商青建門市（鳳山區建國路三段 295 號）\n            7. 和樂宴會館（鳳山區建國路二段 88 號）\n            8. 鳳山火車站\n          ")])])]),a("div",{staticClass:"cart-circle-4 text-grey-8 q-mt-xl q-mb-md"},[e._v("結帳金額")]),a("div",{staticClass:"q-pa-md",staticStyle:{border:"1px solid rgba(0, 0, 0, 0.12)","border-radius":"4px"}},[a("q-list",{staticClass:"bg-grey-2"},[a("q-item",[a("q-item-section",[a("q-item-label",[e._v("小計")])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",[e._v(e._s(e.totalprice)+"元")])],1)],1),a("q-separator"),a("q-item",[a("q-item-section",{staticClass:"text-cart"},[a("q-item-label",[e._v("優惠折抵")])],1),a("q-item-section",{staticClass:"text-cart",attrs:{side:""}},[a("q-item-label",[e._v("-0元")])],1)],1),a("q-separator"),a("q-item",[a("q-item-section",[a("q-item-label",[e._v("運費")])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",[e._v(e._s(e.delivery)+"元")])],1)],1),a("q-item",{staticClass:"bg-cart"},[a("q-item-section",[a("q-item-label",[e._v("實付總額")])],1),a("q-item-section",{staticClass:"text-white",attrs:{side:""}},[a("q-item-label",[e._v(e._s(e.totalprice+e.delivery)+"元")])],1)],1)],1),a("div",{staticClass:"q-my-md text-center"},[a("q-btn",{staticClass:"bg-cart-red full-width",on:{click:e.checkout}},[e._v("確認訂購")])],1)],1)],1)])},r=[],i=a("ded3"),o=a.n(i),s=a("c973"),l=a.n(s),c=(a("96cf"),a("13d5"),a("a434"),a("b0c0"),a("d81d"),a("99af"),a("b5ae")),u={name:"PageCart",data:function(){return{delivery:0,name:"",phone:"",email:"",coupon:"",table:{columns:[{name:"image1",field:"image1",align:"center",label:"商品明細",style:"width: 200px"},{name:"name",field:"name",align:"left",label:"",style:"width: 200px"},{name:"price",field:"price",align:"center",label:"單價",style:"width: 200px"},{name:"amount",field:"amount",align:"center",label:"數量",style:"width: 200px"},{name:"total",field:"total",align:"center",label:"小計",style:"width: 200px"},{name:"delete",field:"delete",align:"center",label:""}],pagination:{page:1,rowsPerPage:0},data:[]}}},validations:{name:{required:c["required"]},phone:{required:c["required"],minLength:Object(c["minLength"])(10),maxLength:Object(c["maxLength"])(10)},email:{required:c["required"],email:c["email"]}},computed:{totalprice:function(){return 0===this.table.data.length?0:this.table.data.reduce((function(e,t){return e+t.amount*t.price}),0)}},methods:{deliveryHome:function(){this.delivery=160,this.deliveryStatus=!0},delivery711:function(){this.delivery=170,this.deliveryStatus=!0},deliveryPerson:function(){this.delivery=0,this.deliveryStatus=!0},numberSub:function(e){var t=this;return l()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.table.data[e].number>0&&t.table.data[e].number--,a.prev=1,a.next=4,t.$axios.patch("/users/cart",{product:t.table.data[e]._id,amount:t.table.data[e].number},{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 4:t.table.data[e].amount=t.table.data[e].number,t.table.data[e].number<=0&&t.table.data.splice(e,1),a.next=12;break;case 8:a.prev=8,a.t0=a["catch"](1),console.log(a.t0),t.$q.notify({message:"修改商品失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 12:case"end":return a.stop()}}),a,null,[[1,8]])})))()},numberAdd:function(e){var t=this;return l()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.number++,a.prev=1,a.next=4,t.$axios.patch("/users/cart",{product:e._id,amount:e.number},{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 4:e.amount=e.number,a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](1),t.$q.notify({message:"修改商品失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 10:case"end":return a.stop()}}),a,null,[[1,7]])})))()},delProduct:function(e){var t=this;return l()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$axios.patch("/users/cart",{product:t.table.data[e]._id,amount:0},{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 3:t.table.data.splice(e,1),a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),t.$q.notify({message:"刪除商品失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},checkout:function(){var e=this;return l()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.table.data.length){t.next=3;break}return e.$q.notify({message:"購物車內沒有商品喔",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"}),t.abrupt("return");case 3:if(0!==e.name.length&&0!==e.phone.length&&0!==e.email.length){t.next=6;break}return e.$q.notify({message:"必填欄位不得為空",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"}),t.abrupt("return");case 6:if(e.$v.$touch(),!e.$v.$invalid){t.next=10;break}return e.$q.notify({message:"請正確填寫收件人資料",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"}),t.abrupt("return");case 10:return t.prev=10,t.next=13,e.$axios.post("/orders/checkout",{delivery:e.delivery,name:e.name,phone:e.phone,email:e.email},{headers:{authorization:"Bearer "+e.$store.state.user.jwt.token}});case 13:e.$q.notify({message:"感謝您的購買",timeout:1e3,icon:"mood",color:"faded",textColor:"white",position:"top"}),e.$store.commit("user/CartAmountPast",0),e.$router.push("/orders"),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](10),e.$q.notify({message:"結帳失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 21:case"end":return t.stop()}}),t,null,[[10,18]])})))()}},watch:{table:{handler:function(){var e=0;if(this.table.data.length>0)for(var t=0;t<this.table.data.length;t++)e+=this.table.data[t].amount;else e=0;this.$store.commit("user/CartAmountPast",e)},deep:!0}},mounted:function(){var e=this;return l()(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return 0===e.table.data.length&&e.$q.notify({message:"購物車還沒有商品喔",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"}),t.prev=1,t.next=4,e.$axios.get("/users/cart",{headers:{authorization:"Bearer "+e.$store.state.user.jwt.token}});case 4:a=t.sent,n=a.data,e.table.data=n.result.map((function(e){return e=o()(o()({},e.product),{},{amount:e.amount}),e.image1="".concat("https://reuni-dessert.herokuapp.com","/files/").concat(e.image1),e.number=e.amount,e})),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),e.$q.notify({message:"取得購物車失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},d=u,m=a("2877"),p=a("9989"),b=a("eaac"),v=a("db86"),h=a("cb32"),f=a("27f9"),q=a("9c40"),g=a("0016"),y=a("1c1c"),x=a("66e5"),w=a("4074"),_=a("0170"),k=a("eb85"),C=a("eebe"),$=a.n(C),S=Object(m["a"])(d,n,r,!1,null,null,null);t["default"]=S.exports;$()(S,"components",{QPage:p["a"],QTable:b["a"],QTd:v["a"],QAvatar:h["a"],QInput:f["a"],QBtn:q["a"],QIcon:g["a"],QList:y["a"],QItem:x["a"],QItemSection:w["a"],QItemLabel:_["a"],QSeparator:k["a"]})}}]);