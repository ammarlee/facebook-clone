(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bb8b313"],{"0798":function(t,e,r){"use strict";r("caad");var i=r("5530"),s=r("ade3"),n=(r("0c18"),r("10d2")),o=r("afdd"),a=r("9d26"),c=r("f2e7"),l=r("7560"),d=r("f40d"),u=r("58df"),h=r("d9bd");e["a"]=Object(u["a"])(n["a"],c["a"],d["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(o["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(a["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,r){},6477:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-overlay",{attrs:{value:t.overlay}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),r("v-container",[r("div",{staticClass:"text-capitalize text-center"},[r("div",{staticClass:"nav-bar"},[r("h1",{staticClass:"mb-5"},[t._v(" friends "),r("span",{staticClass:"text--h5"},[t._v("("+t._s(t.friendsList.length)+")")])])]),t.friendsList.length>0?r("div",{staticClass:"friends"},[r("v-row",t._l(t.friendsList,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",sm:"5",md:"3"}},[r("div",{staticClass:"d-flex main-div align-self-end",on:{click:function(r){return t.navegatetoprofile(e.friendId._id)}}},[r("div",{staticClass:"friend-img"},[r("v-avatar",[r("v-img",{attrs:{src:e.friendId.img}})],1)],1),r("div",{staticClass:"img-details ml-2"},[r("h4",[t._v(t._s(e.friendId.name))])]),r("div",[r("v-menu",{attrs:{transition:"slide-y-transition","open-on-hover":"","offset-y":"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"ml-auto font-weight-bold optionButton",staticStyle:{"font-size":"18px"},attrs:{fab:"",text:""}},"v-btn",s,!1),i),[t._v("...")])]}}],null,!0)},[r("v-list",[r("div",[r("v-list-item",[r("v-list-item-title",[r("v-btn",{attrs:{text:""},on:{click:function(r){return t.deleteFriend(e.friendId._id)}}},[r("v-icon",[t._v("mdi-facebook")]),t._v("delte friend ")],1)],1)],1)],1)])],1)],1)])])})),1)],1):r("div",[r("v-alert",{attrs:{color:"red",outlined:"",type:"info"}},[t._v("there is no friends avalible")])],1)])])],1)},s=[],n=(r("96cf"),r("1da1")),o=r("7695"),a={data:function(){return{friendsList:"",userId:this.$store.getters.getUser._id}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.overlay=!0,e.next=4,o["a"].getFriends(t.$store.getters.getUser._id);case 4:r=e.sent,t.friendsList=r.data.friends,t.overlay=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),t.overlay=!1,t.errors=e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},methods:{navegatetoprofile:function(t){this.$router.push("/FriendProfile/"+t)},deleteFriend:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,i={userId:e.userId,friendId:t},e.overlay=!0,r.next=5,o["a"].deleteFriend(i);case 5:s=r.sent,console.log(s.userfinsih),e.overlay=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),e.overlay=!1,e.errors=r.t0;case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},c=a,l=(r("aefb"),r("2877")),d=r("6544"),u=r.n(d),h=r("0798"),v=r("7496"),f=r("8212"),p=r("8336"),m=r("62ad"),g=r("a523"),b=r("132d"),_=r("adda"),y=r("8860"),C=r("da13"),x=r("5d23"),$=r("e449"),B=r("a797"),I=r("490a"),w=r("0fd9"),k=Object(l["a"])(c,i,s,!1,null,"564d9424",null);e["default"]=k.exports;u()(k,{VAlert:h["a"],VApp:v["a"],VAvatar:f["a"],VBtn:p["a"],VCol:m["a"],VContainer:g["a"],VIcon:b["a"],VImg:_["a"],VList:y["a"],VListItem:C["a"],VListItemTitle:x["c"],VMenu:$["a"],VOverlay:B["a"],VProgressCircular:I["a"],VRow:w["a"]})},"7d11":function(t,e,r){},aefb:function(t,e,r){"use strict";r("7d11")},afdd:function(t,e,r){"use strict";var i=r("8336");e["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-5bb8b313.ffc082ae.js.map