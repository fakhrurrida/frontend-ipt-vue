(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"941c":function(t,s,e){t.exports=e.p+"img/back_top.3e702450.svg"},a55b:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"back-cont"},[i("img",{staticClass:"top-bg-cont",attrs:{src:e("941c")}}),i("b-container",{staticClass:"cont",attrs:{fluid:""}},[i("div",{staticClass:"login-form",staticStyle:{"background-color":"turqoise"}},[i("div",{staticClass:"heading"},[i("h2",{staticClass:"login-text"},[t._v("Login")]),t._v(" "),i("span",{staticClass:"desc"},[t._v("(Internship Account)")])]),""!=t.errors?i("div",{ref:"warning",staticClass:"form-login-warnings"},[t._v(t._s(t.errors))]):t._e(),i("b-form",{on:{submit:t.onSubmit}},[i("b-form-group",{staticClass:"text-input",attrs:{id:"form-login-email",label:"Email","label-for":"login-email"}},[i("b-form-input",{attrs:{id:"login-email",placeholder:"Enter your email",required:""},model:{value:t.login.email,callback:function(s){t.$set(t.login,"email",s)},expression:"login.email"}})],1),i("b-form-group",{staticClass:"text-input",attrs:{id:"form-login-password",label:"Password","label-for":"login-pass"}},[i("b-form-input",{staticClass:"mb-4",attrs:{id:"login-pass",type:"password",placeholder:"Enter your password",required:""},model:{value:t.login.pass,callback:function(s){t.$set(t.login,"pass",s)},expression:"login.pass"}})],1),i("b-form-checkbox",{staticClass:"mb-4 input-check",attrs:{id:"login-remember"},model:{value:t.login.remember,callback:function(s){t.$set(t.login,"remember",s)},expression:"login.remember"}},[t._v("Remember my account")]),i("b-button",{ref:"submitbutton",staticClass:"sirkel-blue",attrs:{type:"submit",variant:"primary",id:"login-button"}},[t._v(" Login ")])],1)],1)]),t._v(" "),i("img",{staticStyle:{width:"100%","margin-top":"87px","margin-bottom":"-1px"},attrs:{src:e("a8a7")}})],1)},a=[],o=e("bc3a"),n=e.n(o),r={data:function(){return{login:{name:"",pass:"",remember:!1},errors:""}},beforeCreate:function(){window.$cookies.isKey("token")|this.$session.has("token")&&(window.location.href="/dashboard")},methods:{onSubmit:function(t){var s=this;t.preventDefault(),this.$refs.submitbutton.disabled=!0,this.errors="",n.a.post("https://admin-web-sirkel-dev.sirkel.id/api/login-freelancer",{email:this.login.email,password:this.login.pass}).then((function(t){s.$refs.submitbutton.disabled=!1,s.login.remember?window.$cookies.set("token",t.data.token,"1d"):s.$session.set("token",t.data.token),window.location.href="/dashboard"})).catch((function(t){s.$refs.submitbutton.disabled=!1,console.log(t),s.errors="The name and password you entered did not match our records. Please check and try again..."}))}}},l=r,c=(e("fd09"),e("2877")),d=Object(c["a"])(l,i,a,!1,null,"554aa7dc",null);s["default"]=d.exports},a8a7:function(t,s,e){t.exports=e.p+"img/back_img-1.11d1bba2.svg"},ae21:function(t,s,e){},fd09:function(t,s,e){"use strict";var i=e("ae21"),a=e.n(i);a.a}}]);
//# sourceMappingURL=login.50910199.js.map