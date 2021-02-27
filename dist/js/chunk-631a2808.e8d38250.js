(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-631a2808"],{"169a":function(t,e,i){"use strict";i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a");var a=i("5530"),n=i("2909"),s=i("ade3"),o=(i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),d=i("e707"),u=i("e4d3"),v=i("21be"),h=i("f2e7"),f=i("a293"),m=i("58df"),p=i("d9bd"),g=i("80d2"),b=Object(m["a"])(r["a"],l["a"],c["a"],d["a"],u["a"],v["a"],h["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=Object(n["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));a&&a.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(a["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(a["a"])(Object(a["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"2fa4":function(t,e,i){"use strict";i("20f6");var a=i("80d2");e["a"]=Object(a["g"])("spacer","div","v-spacer")},"368e":function(t,e,i){},6353:function(t,e,i){},7840:function(t,e,i){"use strict";i("6353")},d52b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-overlay",{attrs:{value:t.overlay}},[i("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t.overlay?t._e():i("div",{staticClass:"content"},[i("div",{staticClass:"cover",attrs:{id:"cover-img"}},[i("v-btn",{attrs:{id:"edit-btn",text:""},on:{click:t.editCover}},[i("v-icon",{staticClass:"white--text",attrs:{large:""}},[t._v("mdi-pencil")]),i("input",{ref:"coverInput",staticClass:"d-none",attrs:{type:"file"},on:{change:t.uploadCover}})],1),t.showcoverbtn?i("v-btn",{staticClass:"red edit-btn",attrs:{text:""},on:{click:function(e){return e.preventDefault(),t.doit(e)}}},[t._v("update cover")]):t._e(),i("div",{staticClass:"cover-img",style:{"background-image":"url("+t.user.coverImg+")"},attrs:{id:"theCoverImg",alt:"cover"}}),i("div",{staticClass:"user"},[i("div",{attrs:{id:"profile-img"}},[i("v-avatar",{staticClass:"the-avatar",attrs:{size:"128"}},[i("img",{attrs:{src:t.user.img,alt:"profilepic"}})])],1),i("div",{staticClass:"text-center text-capitalize"},[i("h1",[t._v(t._s(t.user.name))]),i("p",[t._v(" "+t._s(t.user.bio)+" "),i("v-btn",t._g(t._b({staticClass:"info",attrs:{small:"",fab:""},on:{click:t.editProfile}},"v-btn",t.attrs,!1),t.on),[i("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1)],1)])])],1),i("v-container",{staticClass:"pt-0"},[i("div",{staticClass:"head"},[i("app-profile-tabs",{attrs:{header:"/profile/",tabs:t.tabs}})],1),i("router-view"),i("div",{staticClass:"dialog-edit"},[i("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"d-none"},"v-btn",n,!1),a))]}}],null,!1,3407746930),model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline text-center text-capitalize grey lighten-2"},[t._v("edit profile")]),i("v-divider"),i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"First name",required:""},model:{value:t.oldUserData.name,callback:function(e){t.$set(t.oldUserData,"name",e)},expression:"oldUserData.name"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"bio",required:""},model:{value:t.oldUserData.bio,callback:function(e){t.$set(t.oldUserData,"bio",e)},expression:"oldUserData.bio"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"E-mail",required:""},model:{value:t.oldUserData.email,callback:function(e){t.$set(t.oldUserData,"email",e)},expression:"oldUserData.email"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{type:"number",label:"age",required:"",value:t.oldUserData.age},model:{value:t.oldUserData.age,callback:function(e){t.$set(t.oldUserData,"age",e)},expression:"oldUserData.age"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{type:"number",label:"phone",required:""},model:{value:t.oldUserData.phone,callback:function(e){t.$set(t.oldUserData,"phone",e)},expression:"oldUserData.phone"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{label:"city",required:""},model:{value:t.oldUserData.city,callback:function(e){t.$set(t.oldUserData,"city",e)},expression:"oldUserData.city"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-btn",{staticClass:"text-capitalize mb-3",on:{click:function(e){return t.$refs.profileImg.click()}}},[t._v("upload profile photo")]),i("v-avatar",{attrs:{tile:""}},[t.oldUserData.img?i("v-img",{attrs:{src:t.oldUserData.img}}):t._e()],1),i("input",{ref:"profileImg",staticClass:"d-none",attrs:{type:"file"},on:{change:t.uploadProfileImg}})],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"success",block:""},on:{click:t.submitProfile}},[t._v("edit")])],1)],1)],1)],1)],1)],1)],1)},n=[],s=(i("b0c0"),i("b64b"),i("96cf"),i("1da1")),o=i("7695"),r=i("a160"),l={name:"mainProfile",components:{"app-profile-tabs":r["a"]},data:function(){return{dialog:!1,editDialog:!1,showcoverbtn:!1,rout:this.$route.name,items:null,on:"",attrs:"",oldUserData:{name:"",id:"",email:"",age:"",city:"",phone:"",bio:""},userCover:[],tabs:[{id:this.$route.params.id,pageName:"",name:"posts"},{id:this.$route.params.id,pageName:"/profileFriends",name:"friends"},{id:this.$route.params.id,pageName:"/profilePics",name:"pictures"}]}},mounted:function(){},computed:{user:function(){return this.$store.getters.getUser},user_id:function(){return this.$route.params.id}},methods:{editProfile:function(){this.editDialog=!0;var t=this.user;this.oldUserData={name:t.name,userId:t._id,email:t.email,age:t.age,city:t.city,phone:t.phone,bio:t.bio,img:t.img}},submitProfile:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.oldUserData.img==t.user.img&&(t.oldUserData.img=null),t.overlay=!0,e.next=5,o["a"].editProfile(t.oldUserData);case 5:i=e.sent,t.editDialog=!1,t.$store.commit("updateUser",i.data),t.overlay=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),t.overlay=!1,t.errors=e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()},editCover:function(){this.$refs.coverInput.click()},doit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i,a,n,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(e.prev=0,i=new FormData,a=0,n=Object.keys(t.userCover);a<n.length;a++)s=n[a],i.append("files",t.userCover[s]);return t.overlay=!0,e.next=6,o["a"].editCover({userId:t.user._id,formData:i});case 6:r=e.sent,t.showcoverbtn=!1,console.log(r),t.$store.commit("updateUser",r.data),t.overlay=!1,e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),t.overlay=!1,t.errors=e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()},uploadProfileImg:function(t){var e=this,i=t.target.files,a=new FileReader;a.readAsDataURL(i[0]),a.onload=function(){e.oldUserData.img=a.result},alert(this.oldUserData.img)},uploadCover:function(t){this.userCover=t.target.files,this.showcoverbtn=!0},uploadFile:function(t){var e=this,i=t.target.files,a=new FileReader;a.readAsDataURL(i[0]),a.onload=function(){e.dialogData.img.push(a.result)}}}},c=l,d=(i("7840"),i("2877")),u=i("6544"),v=i.n(u),h=i("7496"),f=i("8212"),m=i("8336"),p=i("b0af"),g=i("99d9"),b=i("62ad"),C=i("a523"),y=i("169a"),w=i("ce7e"),x=i("132d"),k=i("adda"),D=i("a797"),$=i("490a"),O=i("0fd9"),U=i("2fa4"),_=i("8654"),A=Object(d["a"])(c,a,n,!1,null,"6e6a90da",null);e["default"]=A.exports;v()(A,{VApp:h["a"],VAvatar:f["a"],VBtn:m["a"],VCard:p["a"],VCardActions:g["a"],VCardTitle:g["c"],VCol:b["a"],VContainer:C["a"],VDialog:y["a"],VDivider:w["a"],VIcon:x["a"],VImg:k["a"],VOverlay:D["a"],VProgressCircular:$["a"],VRow:O["a"],VSpacer:U["a"],VTextField:_["a"]})}}]);
//# sourceMappingURL=chunk-631a2808.e8d38250.js.map