(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27e1b0a4","chunk-3be9ff71"],{"0a09":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[t.onlineUsers.length>0?s("v-list",t._l(t.onlineUsers,(function(e){return s("v-list-item",{key:e.title},[s("v-list-item-avatar",[s("v-img",{attrs:{alt:e.friendImg+" avatar",src:e.friendImg}})],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.friendName)}})],1),s("v-btn",{attrs:{icon:""},on:{click:function(s){return t.getSpecificChat(e.chatId)}}},[s("v-icon",{attrs:{color:"deep-purple accent-4'"}},[t._v("mdi-message-outline")])],1)],1)})),1):s("div",{staticClass:"text-capitalize font-weight-bold text-center"},[s("h4",[t._v("there is no online users")])]),s("v-divider",{staticClass:"pink my-4"}),t.chatId?s("div",[s("h2",[t._v("chat")]),s("app-message",{attrs:{chatIdfromanother:t.chatId}})],1):t._e()],1)],1)],1)],1)},a=[],i=(s("d81d"),s("b0c0"),s("8e27")),r=s.n(i),o=s("41a8"),c={name:"message",components:{"app-message":o["default"]},mounted:function(){var t=this;this.socket=r()("https://facebook-clones.herokuapp.com/"),this.$store.getters.getUser&&this.socket.emit("goOnlineTwo",this.$store.getters.getUser),this.socket.on("currentOnlineFriendsTwo",(function(e){var s=e.map((function(t){return{chatId:t.chatId,friendName:t.friendId.name,friendImg:t.friendId.img,friendId:t.friendId._id}}));t.$store.commit("onlineUsers",s),t.recent=s}))},data:function(){return{socket:"",recent:[],allRecentUser:"",chatId:""}},methods:{getSpecificChat:function(t){console.log("work"),this.chatId=t}},computed:{onlineUsers:function(){return this.$store.getters.onlineUsers}},watch:{recent:function(t){console.log("changed"),console.log(t)}}},d=c,h=s("2877"),l=s("6544"),u=s.n(l),m=s("7496"),g=s("8336"),p=s("62ad"),v=s("a523"),f=s("ce7e"),I=s("132d"),w=s("adda"),b=s("8860"),x=s("da13"),k=s("8270"),y=s("5d23"),_=s("0fd9"),C=Object(h["a"])(d,n,a,!1,null,"37e4d624",null);e["default"]=C.exports;u()(C,{VApp:m["a"],VBtn:g["a"],VCol:p["a"],VContainer:v["a"],VDivider:f["a"],VIcon:I["a"],VImg:w["a"],VList:b["a"],VListItem:x["a"],VListItemAvatar:k["a"],VListItemContent:y["a"],VListItemTitle:y["c"],VRow:_["a"]})},1681:function(t,e,s){},3267:function(t,e,s){"use strict";s("ccee")},"41a8":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("v-overlay",{attrs:{value:t.overlay}},[s("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t.overlay?t._e():s("v-card",[s("div",[s("v-list",{staticClass:"theListDiv grey lighten-5 pt-0 pb-0",attrs:{"one-line":""}},[s("v-list-item",[s("v-list-item-avatar",[s("v-img",{attrs:{src:t.theAnotherUser2.img}})],1),s("v-list-item-content",{staticClass:"pt-0"},[s("v-list-item-subtitle",{staticClass:"text-h6 black--text font-weight-bold text-capitalize"},[t._v(" "+t._s(t.theAnotherUser2.name)+" "),s("v-btn",{staticStyle:{position:"absolute",right:"4px",top:"8px"},attrs:{small:"",icon:""},on:{click:t.hideMsg}},[s("v-icon",[t._v("mdi-close")])],1)],1)],1)],1)],1)],1),s("div",{staticClass:"mx-auto",staticStyle:{"overflow-y":"scroll","max-height":"220px","min-height":"219px"},attrs:{id:"theCard"}},[s("div",{staticClass:"demo-content"},t._l(t.items,(function(e){return s("div",{key:e._id,staticClass:"theMainOne",staticStyle:{"max-height":"520px","min-height":"40px"}},[s("v-list",{staticClass:"theListDiv pt-0 pb-0",staticStyle:{"max-height":"520px","min-height":"40px"},attrs:{"three-line":""}},[s("v-list-item",{key:e.sender.name},[s("v-list-item-avatar",{staticClass:"mr-2 mt-5",attrs:{size:"35"}},[s("v-img",{attrs:{src:e.sender.img}})],1),s("v-list-item-content",{staticClass:"px-1 py-0 mb-1",attrs:{title:new Date(+e.timeStamp).getHours()+":"+new Date(+e.timeStamp).getMinutes()}},[s("v-textarea",{staticClass:"pink",attrs:{"auto-grow":"","background-color":e.sender._id!==t.user._id?"light-blue ":"white",color:e.sender._id!==t.user._id?"white ":"black","hide-details":"",rows:"1",solo:"","row-height":"15",value:e.content}})],1)],1)],1)],1)})),0)]),s("div",{staticClass:"theInput mt-3 pa-3  mb-0"},[s("app-emoji",{attrs:{sendMessage:t.sendMessage},model:{value:t.messsage,callback:function(e){t.messsage=e},expression:"messsage"}})],1)])],1)},a=[],i=(s("7db0"),s("b0c0"),s("07ac"),s("96cf"),s("1da1")),r=s("7695"),o=s("8e27"),c=s.n(o),d=s("be62"),h={name:"messageroom",props:["chatIdfromanother"],components:{"app-emoji":d["a"]},data:function(){return{items:[],messsage:"",allmsgs:[],theAnotherUser:"",theAnotherUser2:""}},computed:{user:function(){return this.$store.getters.getUser},anotherFriendId:function(){return this.$store.getters.getFriendId},users:function(){return this.$store.getters.users},chatId:function(){return this.chatIdfromanother?this.chatIdfromanother:this.$route.params.id}},methods:{hideMsg:function(){this.$store.commit("hideMsg",!1)},sendMessage:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{s={content:t.messsage,chatId:t.chatId,sender:{_id:t.user._id,name:t.user.name,img:t.user.img,email:t.user.email},friendId:t.theAnotherUser||t.anotherFriendId,timeStamp:Date.now()},t.socket.emit("joinnotificationsRoom",t.$store.getters.getUser),t.socket.emit("sendMessage",s),n={content:t.messsage,chatId:t.chatId,senderId:t.user._id,senderImg:t.theAnotherUser2.img,senderName:t.theAnotherUser2.name,date:Date.now()},t.$store.commit("pushNewMessage",n),t.items.push(s),t.messsage="",t.showLastMsg()}catch(a){t.errors=a}case 1:case"end":return e.stop()}}),e)})))()},playSound:function(t){if(t){var e=new Audio(t);e.play()}},showLastMsg:function(){var t=document.getElementById("theCard");console.log(t);var e=t.scrollHeight+30;t.scrollTop=e}},watch:{chatIdfromanother:function(){var t=this;r["a"].getMessage(this.chatId).then((function(e){t.items=e.data.chat}))}},updated:function(){this.showLastMsg()},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r["a"].getMessage(t.chatId);case 3:s=e.sent,console.log(s),n=Object.values(s.data.ChatDetails.users),t.items=s.data.chat,t.theAnotherUser=n.find((function(e){return e!==t.user._id})),console.log(t.theAnotherUser),t.theAnotherUser2=t.users.find((function(e){return e._id==t.theAnotherUser})),console.log(t.theAnotherUser2),t.overlay=!1,t.socket=c()("https://facebook-clones.herokuapp.com/"),t.socket.emit("JoinChat",t.chatId),t.socket.on("newMessage",(function(e){console.log("new msg"),t.playSound("http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3");var s={chatId:e.chatId,timeStamp:Date.now(),sender:e.sender,content:e.content},n={chatId:e.chatId,content:e.content,senderImg:e.sender.img,senderName:e.sender.name,senderId:e.sender._id,date:Date.now()};t.$store.commit("pushNewMessage",n),t.items.push(s),t.showLastMsg()})),t.socket.on("newMsgFromUrFriend",(function(e){t.playSound("http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3");var s={chatId:e.chatId,content:e.content,senderImg:e.sender.img,senderName:e.sender.name,senderId:e.sender._id,date:Date.now()};t.items.push(e),t.$store.commit("pushNewMessage",s)})),e.next=23;break;case 18:e.prev=18,e.t0=e["catch"](0),console.log(e.t0),t.errors=e.t0,t.overlay=!1;case 23:case"end":return e.stop()}}),e,null,[[0,18]])})))()}},l=h,u=(s("3267"),s("2877")),m=s("6544"),g=s.n(m),p=s("8336"),v=s("b0af"),f=s("132d"),I=s("adda"),w=s("8860"),b=s("da13"),x=s("8270"),k=s("5d23"),y=s("a797"),_=s("490a"),C=s("a844"),V=Object(u["a"])(l,n,a,!1,null,"e520ed54",null);e["default"]=V.exports;g()(V,{VBtn:p["a"],VCard:v["a"],VIcon:f["a"],VImg:I["a"],VList:w["a"],VListItem:b["a"],VListItemAvatar:x["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VOverlay:y["a"],VProgressCircular:_["a"],VTextarea:C["a"]})},a844:function(t,e,s){"use strict";s("a9e3");var n=s("5530"),a=(s("1681"),s("8654")),i=s("58df"),r=Object(i["a"])(a["a"]);e["a"]=r.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"}},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},ccee:function(t,e,s){}}]);
//# sourceMappingURL=chunk-27e1b0a4.2e329b30.js.map