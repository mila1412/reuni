(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{cf6b:function(e,t,a){"use strict";(function(e){var o=a("ded3"),n=a.n(o),i=a("c973"),r=a.n(i);a("96cf"),a("caad"),a("2532"),a("99af"),a("d81d");t["a"]={name:"PageAdminProducts",data:function(){return{editForm:{data:null,model:{name:"",price:0,description:"",category:"",date:"",sell:!1,image1:null,image2:null,image3:null,image4:null,_id:""},isEdit:!1},table:{pagination:{sortBy:"date",descending:!0,page:1,rowsPerPage:10},columns:[{name:"image11",field:"image11",align:"center",label:"圖片"},{name:"image22",field:"image22",align:"center"},{name:"image33",field:"image33",align:"center"},{name:"image44",field:"image44",align:"center"},{name:"name",field:"name",align:"center",label:"名稱"},{name:"price",field:"price",align:"center",label:"價格",format:function(e){return"$".concat(e)}},{name:"description",field:"description",align:"center",label:"說明"},{name:"sell",field:"sell",align:"center",label:"狀態"},{name:"category",field:"category",align:"center",label:"分類"},{name:"date",field:"date",align:"center",label:"上架時間",sortable:!0},{name:"operation",field:"operation",align:"center",label:"操作"}],data:[]},options:{sell:[{label:"下架",value:!1,color:"grey-7"},{label:"上架",value:!0,color:"cyan-8"}],category:[{label:"千層蛋糕",value:"千層蛋糕"},{label:"軟餅乾",value:"軟餅乾"},{label:"雪Q餅",value:"雪Q餅"},{label:"瑪德蓮",value:"瑪德蓮"},{label:"檸檬塔",value:"檸檬塔"},{label:"香橙醬",value:"香橙醬"}]}}},methods:{editDialog:function(e){for(var t in this.editForm.isEdit=!0,e)t.includes("image")||(this.editForm.model[t]=e[t]);this.editForm.data=e},submitEdit:function(){var t=this;return r()(regeneratorRuntime.mark((function a(){var o,i,r,l,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(i in a.prev=0,o=new FormData,t.editForm.model)o.append(i,t.editForm.model[i]);if(0!==t.editForm.model._id.length){a.next=8;break}return a.next=6,t.$axios.post("/products",o,{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}}).then((function(a){t.editForm.model._id=a.data.result._id,t.table.data.push(n()(n()({},t.editForm.model),{},{image11:"".concat(e.env.API_URL,"/files/").concat(a.data.result.image1),image22:"".concat(e.env.API_URL,"/files/").concat(a.data.result.image2),image33:"".concat(e.env.API_URL,"/files/").concat(a.data.result.image3),image44:"".concat(e.env.API_URL,"/files/").concat(a.data.result.image4)}))}));case 6:a.next=17;break;case 8:return a.next=10,t.$axios.patch("/products/"+t.editForm.model._id,o,{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 10:for(s in r=a.sent,l=r.data,t.editForm.model)t.editForm.data[s]=t.editForm.model[s];t.editForm.data.image11="".concat(e.env.API_URL,"/files/").concat(l.result.image1),t.editForm.data.image22="".concat(e.env.API_URL,"/files/").concat(l.result.image2),t.editForm.data.image33="".concat(e.env.API_URL,"/files/").concat(l.result.image3),t.editForm.data.image44="".concat(e.env.API_URL,"/files/").concat(l.result.image4);case 17:t.editForm.model={name:"",price:0,description:"",category:"",date:"",sell:!1,image1:null,image2:null,image3:null,image4:null,_id:""},a.next=24;break;case 20:a.prev=20,a.t0=a["catch"](0),console.log(a.t0),t.$q.notify({message:a.t0.response.data.message,timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 24:case"end":return a.stop()}}),a,null,[[0,20]])})))()},cancelEdit:function(){this.editForm.model={name:"",price:0,description:"",category:"",date:"",sell:!1,image1:null,image2:null,image3:null,image4:null,_id:""}},delFile1:function(e){var t=this;return r()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$axios.patch("/products/"+e._id+"/image1",{image1:""},{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 3:e.image11="",a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),t.$q.notify({message:"刪除圖片失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},delFile2:function(e){var t=this;return r()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$axios.patch("/products/"+e._id+"/image2",{image2:""},{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 3:e.image22="",a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),t.$q.notify({message:"刪除圖片失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},delFile3:function(e){var t=this;return r()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$axios.patch("/products/"+e._id+"/image3",{image3:""},{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 3:e.image33="",a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),t.$q.notify({message:"刪除圖片失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},delFile4:function(e){var t=this;return r()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$axios.patch("/products/"+e._id+"/image4",{image4:""},{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 3:e.image44="",a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),t.$q.notify({message:"刪除圖片失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()}},mounted:function(){var t=this;return r()(regeneratorRuntime.mark((function a(){var o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$axios.get("/products/all",{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 3:o=a.sent,n=o.data,t.table.data=n.result.map((function(t){return t.image11="".concat(e.env.API_URL,"/files/").concat(t.image1),t.image22="".concat(e.env.API_URL,"/files/").concat(t.image2),t.image33="".concat(e.env.API_URL,"/files/").concat(t.image3),t.image44="".concat(e.env.API_URL,"/files/").concat(t.image4),t})),a.next=12;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0),t.$q.notify({message:"取得商品失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 12:case"end":return a.stop()}}),a,null,[[0,8]])})))()}}}).call(this,a("4362"))},da5e:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-lg",attrs:{id:"adminproducts"}},[a("div",{staticClass:"container"},[a("h5",{staticClass:"text-bold text-grey-9 q-mb-md"},[e._v("商品管理")]),a("q-btn",{staticClass:"bg-add q-mb-md",attrs:{unelevated:"","text-color":"white"},on:{click:function(t){e.editForm.isEdit=!0}}},[a("span",[a("q-icon",{attrs:{name:"add"}}),e._v(" 新增商品")],1)]),a("q-table",{attrs:{data:e.table.data,columns:e.table.columns,"row-key":"id",pagination:e.table.pagination,flat:"",bordered:""},on:{"update:pagination":function(t){return e.$set(e.table,"pagination",t)}},scopedSlots:e._u([{key:"body-cell-description",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("p",{staticClass:"text-truncate"},[e._v(e._s(t.row.description))])])]}},{key:"body-cell-date",fn:function(t){return[a("q-td",{attrs:{props:t}},[e._v("\n          "+e._s(new Date(t.row.date).toLocaleDateString())+"\n        ")])]}},{key:"body-cell-sell",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("div",[a("q-chip",{attrs:{"text-color":"white",square:"",color:e.options.sell.find((function(e){return e.value===t.row.sell})).color,label:e.options.sell.find((function(e){return e.value===t.row.sell})).label}})],1)])]}},{key:"body-cell-image11",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-avatar",{attrs:{size:"45px"}},[a("img",{attrs:{src:t.row.image11}})]),a("q-icon",{staticClass:"delfile cursor-pointer",attrs:{name:"close"},on:{click:function(a){return e.delFile1(t.row)}}})],1)]}},{key:"body-cell-image22",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-avatar",{attrs:{size:"45px"}},[a("img",{attrs:{src:t.row.image22}})]),a("q-icon",{staticClass:"delfile cursor-pointer",attrs:{name:"close"},on:{click:function(a){return e.delFile2(t.row)}}})],1)]}},{key:"body-cell-image33",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-avatar",{attrs:{size:"45px"}},[a("img",{attrs:{src:t.row.image33}})]),a("q-icon",{staticClass:"delfile cursor-pointer",attrs:{name:"close"},on:{click:function(a){return e.delFile3(t.row)}}})],1)]}},{key:"body-cell-image44",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-avatar",{attrs:{size:"45px"}},[a("img",{attrs:{src:t.row.image44}})]),a("q-icon",{staticClass:"delfile cursor-pointer",attrs:{name:"close"},on:{click:function(a){return e.delFile4(t.row)}}})],1)]}},{key:"body-cell-operation",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-btn",{staticClass:"bg-edit",attrs:{unelevated:""},on:{click:function(a){return e.editDialog(t.row)}}},[a("span",[e._v(" 編輯")])])],1)]}}])}),a("q-dialog",{attrs:{persistent:""},model:{value:e.editForm.isEdit,callback:function(t){e.$set(e.editForm,"isEdit",t)},expression:"editForm.isEdit"}},[a("q-card",{staticClass:"q-pa-lg",staticStyle:{"max-width":"500px",width:"100%"}},[e.editForm.model._id.length>0?a("h5",{staticClass:"text-center text-bold q-mb-lg"},[e._v("編輯商品")]):a("h5",{staticClass:"text-center text-bold q-mb-lg"},[e._v("新增商品")]),a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-12"},[a("q-input",{attrs:{label:"名稱","stack-label":"",outlined:"",rules:[function(e){return!!e||"請輸入名稱"}]},model:{value:e.editForm.model.name,callback:function(t){e.$set(e.editForm.model,"name",t)},expression:"editForm.model.name"}})],1),a("div",{staticClass:"col-12"},[a("q-input",{attrs:{label:"價格","stack-label":"",outlined:"",rules:[function(e){return!!e||"請輸入價格"},function(e){return e>0||"請輸入正確價格"}]},model:{value:e.editForm.model.price,callback:function(t){e.$set(e.editForm.model,"price",t)},expression:"editForm.model.price"}})],1),a("div",{staticClass:"col-12"},[a("q-input",{attrs:{type:"textarea",label:"說明","stack-label":"",outlined:""},model:{value:e.editForm.model.description,callback:function(t){e.$set(e.editForm.model,"description",t)},expression:"editForm.model.description"}})],1),a("div",{staticClass:"col-12"},[a("q-select",{attrs:{outlined:"","stack-label":"",options:e.options.category,label:"分類","emit-value":"","map-options":""},model:{value:e.editForm.model.category,callback:function(t){e.$set(e.editForm.model,"category",t)},expression:"editForm.model.category"}})],1),a("div",{staticClass:"col-12"},[a("q-select",{attrs:{outlined:"",options:e.options.sell,label:"狀態","emit-value":"","map-options":""},model:{value:e.editForm.model.sell,callback:function(t){e.$set(e.editForm.model,"sell",t)},expression:"editForm.model.sell"}})],1),a("div",{staticClass:"col-12"},[a("q-input",{attrs:{filled:"",type:"date",hint:"上架時間"},model:{value:e.editForm.model.date,callback:function(t){e.$set(e.editForm.model,"date",t)},expression:"editForm.model.date"}})],1),a("div",{staticClass:"col-12"},[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"上傳圖片",counter:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(e){e.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.editForm.model.image1=null}}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n                檔案大小\n              ")]},proxy:!0}]),model:{value:e.editForm.model.image1,callback:function(t){e.$set(e.editForm.model,"image1",t)},expression:"editForm.model.image1"}})],1),a("div",{staticClass:"col-12"},[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"上傳圖片",counter:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(e){e.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.editForm.model.image2=null}}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n                檔案大小\n              ")]},proxy:!0}]),model:{value:e.editForm.model.image2,callback:function(t){e.$set(e.editForm.model,"image2",t)},expression:"editForm.model.image2"}})],1),a("div",{staticClass:"col-12"},[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"上傳圖片",counter:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(e){e.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.editForm.model.image3=null}}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n                檔案大小\n              ")]},proxy:!0}]),model:{value:e.editForm.model.image3,callback:function(t){e.$set(e.editForm.model,"image3",t)},expression:"editForm.model.image3"}})],1),a("div",{staticClass:"col-12"},[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"上傳圖片",counter:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(e){e.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.editForm.model.image4=null}}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n                檔案大小\n              ")]},proxy:!0}]),model:{value:e.editForm.model.image4,callback:function(t){e.$set(e.editForm.model,"image4",t)},expression:"editForm.model.image4"}})],1),a("div",{staticClass:"col-6"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width",attrs:{unelevated:"",color:"primary",label:"送出"},on:{click:e.submitEdit}})],1),a("div",{staticClass:"col-6"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width",attrs:{unelevated:"",color:"grey-7",label:"取消"},on:{click:e.cancelEdit}})],1)])])],1)],1)])},n=[],i=a("cf6b"),r=i["a"],l=a("2877"),s=a("9989"),c=a("9c40"),d=a("0016"),u=a("eaac"),m=a("db86"),p=a("b047"),f=a("cb32"),g=a("24e8"),v=a("f09f"),b=a("27f9"),h=a("ddd8"),k=a("7d53"),x=a("7f67"),y=a("eebe"),F=a.n(y),w=Object(l["a"])(r,o,n,!1,null,null,null);t["default"]=w.exports;F()(w,"components",{QPage:s["a"],QBtn:c["a"],QIcon:d["a"],QTable:u["a"],QTd:m["a"],QChip:p["a"],QAvatar:f["a"],QDialog:g["a"],QCard:v["a"],QInput:b["a"],QSelect:h["a"],QFile:k["a"]}),F()(w,"directives",{ClosePopup:x["a"]})}}]);