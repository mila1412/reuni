(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"41ad":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-lg",attrs:{id:"adminnews"}},[a("div",{staticClass:"container"},[a("h5",{staticClass:"text-bold text-grey-9 q-mb-md"},[e._v("最新消息管理")]),a("q-btn",{staticClass:"bg-add q-mb-md",attrs:{unelevated:"","text-color":"white"},on:{click:function(t){e.editForm.isEdit=!0}}},[a("span",[a("q-icon",{attrs:{name:"add"}}),e._v(" 新增貼文")],1)]),a("q-table",{attrs:{data:e.table.data,columns:e.table.columns,"row-key":"name",pagination:e.table.pagination,flat:"",bordered:""},on:{"update:pagination":function(t){return e.$set(e.table,"pagination",t)}},scopedSlots:e._u([{key:"body-cell-description",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("p",{staticClass:"text-truncate"},[e._v(e._s(t.row.description))])])]}},{key:"body-cell-date",fn:function(t){return[a("q-td",{attrs:{props:t}},[e._v("\n          "+e._s(new Date(t.row.date).toLocaleDateString())+"\n        ")])]}},{key:"body-cell-post",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("div",[a("q-chip",{attrs:{"text-color":"white",square:"",color:e.options.post.find((function(e){return e.value===t.row.post})).color,label:e.options.post.find((function(e){return e.value===t.row.post})).label}})],1)])]}},{key:"body-cell-image1",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-avatar",{attrs:{size:"50px"}},[a("img",{attrs:{src:t.row.image1}})]),a("q-icon",{staticClass:"delfile cursor-pointer",attrs:{name:"close"},on:{click:function(a){return e.delFile(t.row)}}})],1)]}},{key:"body-cell-operation",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-btn",{staticClass:"bg-edit",attrs:{unelevated:""},on:{click:function(a){return e.editDialog(t.row)}}},[a("span",[e._v(" 編輯")])])],1)]}}])}),a("q-dialog",{attrs:{persistent:""},model:{value:e.editForm.isEdit,callback:function(t){e.$set(e.editForm,"isEdit",t)},expression:"editForm.isEdit"}},[a("q-card",{staticClass:"q-pa-lg",staticStyle:{"max-width":"500px",width:"100%"}},[e.editForm.model._id.length>0?a("h5",{staticClass:"text-center text-bold q-mb-lg"},[e._v("編輯貼文")]):a("h5",{staticClass:"text-center text-bold q-mb-lg"},[e._v("新增貼文")]),a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-12"},[a("q-input",{attrs:{label:"標題","stack-label":"",outlined:"",rules:[function(e){return!!e||"請輸入標題"}]},model:{value:e.editForm.model.title,callback:function(t){e.$set(e.editForm.model,"title",t)},expression:"editForm.model.title"}})],1),a("div",{staticClass:"col-12"},[a("q-input",{attrs:{type:"textarea",label:"說明","stack-label":"",outlined:""},model:{value:e.editForm.model.description,callback:function(t){e.$set(e.editForm.model,"description",t)},expression:"editForm.model.description"}})],1),a("div",{staticClass:"col-12"},[a("q-select",{attrs:{outlined:"",options:e.options.post,label:"狀態","emit-value":"","map-options":""},model:{value:e.editForm.model.post,callback:function(t){e.$set(e.editForm.model,"post",t)},expression:"editForm.model.post"}})],1),a("div",{staticClass:"col-12"},[a("q-input",{attrs:{filled:"",type:"date",hint:"發布時間"},model:{value:e.editForm.model.date,callback:function(t){e.$set(e.editForm.model,"date",t)},expression:"editForm.model.date"}})],1),a("div",{staticClass:"col-12"},[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"上傳圖片",counter:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(e){e.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.editForm.model.image1=null}}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n                檔案大小\n              ")]},proxy:!0}]),model:{value:e.editForm.model.image1,callback:function(t){e.$set(e.editForm.model,"image1",t)},expression:"editForm.model.image1"}})],1),a("div",{staticClass:"col-6"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width",attrs:{unelevated:"",color:"primary",label:"送出"},on:{click:e.submitEdit}})],1),a("div",{staticClass:"col-6"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width",attrs:{unelevated:"",color:"grey-7",label:"取消"},on:{click:e.cancelEdit}})],1)])])],1)],1)])},i=[],n=a("77e4"),r=n["a"],s=a("2877"),l=a("9989"),d=a("9c40"),c=a("0016"),u=a("eaac"),m=a("db86"),p=a("b047"),f=a("cb32"),g=a("24e8"),b=a("f09f"),v=a("27f9"),h=a("ddd8"),w=a("7d53"),x=a("7f67"),F=a("eebe"),k=a.n(F),q=Object(s["a"])(r,o,i,!1,null,null,null);t["default"]=q.exports;k()(q,"components",{QPage:l["a"],QBtn:d["a"],QIcon:c["a"],QTable:u["a"],QTd:m["a"],QChip:p["a"],QAvatar:f["a"],QDialog:g["a"],QCard:b["a"],QInput:v["a"],QSelect:h["a"],QFile:w["a"]}),k()(q,"directives",{ClosePopup:x["a"]})},"77e4":function(e,t,a){"use strict";(function(e){var o=a("c973"),i=a.n(o);a("96cf"),a("99af"),a("d81d");t["a"]={name:"PageAdminNews",data:function(){return{editForm:{data:null,model:{title:"",description:"",date:"",post:!1,image1:null,_id:""},isEdit:!1},table:{pagination:{sortBy:"date",descending:!0,page:1,rowsPerPage:10},columns:[{name:"image1",field:"image1",align:"center",label:"圖片"},{name:"title",field:"title",align:"center",label:"標題",style:"width: 200px"},{name:"description",field:"description",align:"center",label:"說明",style:"width: 200px"},{name:"date",field:"date",align:"center",label:"上架時間",sortable:!0},{name:"post",field:"post",align:"center",label:"狀態"},{name:"operation",field:"operation",align:"center",label:"操作"}],data:[]},options:{post:[{label:"隱藏",value:!1,color:"grey-7"},{label:"發布",value:!0,color:"cyan-8"}]}}},methods:{editDialog:function(e){for(var t in this.editForm.isEdit=!0,e)this.editForm.model[t]=e[t];this.editForm.data=e},submitEdit:function(){var t=this;return i()(regeneratorRuntime.mark((function a(){var o,i,n,r,s,l,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(i in a.prev=0,o=new FormData,t.editForm.model)o.append(i,t.editForm.model[i]);if(0!==t.editForm.model._id.length){a.next=12;break}return a.next=6,t.$axios.post("/news",o,{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 6:n=a.sent,r=n.data,t.table.data.push(t.editForm.model),t.editForm.model.image1="".concat(e.env.API_URL,"/files/").concat(r.result.image1),a.next=18;break;case 12:return a.next=14,t.$axios.patch("/news/"+t.editForm.model._id,o,{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 14:for(d in s=a.sent,l=s.data,t.editForm.model)t.editForm.data[d]=t.editForm.model[d];t.editForm.data.image1="".concat(e.env.API_URL,"/files/").concat(l.result.image1);case 18:t.editForm.model={title:"",description:"",date:"",post:!1,image1:null,_id:""},a.next=24;break;case 21:a.prev=21,a.t0=a["catch"](0),t.$q.notify({message:a.t0.response.data.message,timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 24:case"end":return a.stop()}}),a,null,[[0,21]])})))()},cancelEdit:function(){this.editForm.model={title:"",description:"",date:"",post:!1,image1:null,_id:""}},delFile:function(e){var t=this;return i()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$axios.patch("/news/"+e._id+"/image1",{image1:""},{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 3:e.image1="",a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),t.$q.notify({message:"刪除圖片失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()}},mounted:function(){var t=this;return i()(regeneratorRuntime.mark((function a(){var o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$axios.get("/news/all",{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 3:o=a.sent,i=o.data,t.table.data=i.result.map((function(t){return t.image1&&(t.image1="".concat(e.env.API_URL,"/files/").concat(t.image1)),t})),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),t.$q.notify({message:"取得資訊失敗",timeout:1e3,type:"negative",color:"faded",textColor:"white",position:"top"});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()}}}).call(this,a("4362"))}}]);