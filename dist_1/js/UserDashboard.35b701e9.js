(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UserDashboard"],{"0122":function(t,e,s){},"01e6":function(t,e,s){},1276:function(t,e,s){"use strict";var a=s("d784"),i=s("44e7"),r=s("825a"),n=s("1d80"),l=s("4840"),c=s("8aa5"),o=s("50c4"),d=s("14c3"),u=s("9263"),v=s("d039"),p=[].push,h=Math.min,f=4294967295,b=!v((function(){return!RegExp(f,"y")}));a("split",2,(function(t,e,s){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var a=String(n(this)),r=void 0===s?f:s>>>0;if(0===r)return[];if(void 0===t)return[a];if(!i(t))return e.call(a,t,r);var l,c,o,d=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,b=new RegExp(t.source,v+"g");while(l=u.call(b,a)){if(c=b.lastIndex,c>h&&(d.push(a.slice(h,l.index)),l.length>1&&l.index<a.length&&p.apply(d,l.slice(1)),o=l[0].length,h=c,d.length>=r))break;b.lastIndex===l.index&&b.lastIndex++}return h===a.length?!o&&b.test("")||d.push(""):d.push(a.slice(h)),d.length>r?d.slice(0,r):d}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var i=n(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,i,s):a.call(String(i),e,s)},function(t,i){var n=s(a,t,this,i,a!==e);if(n.done)return n.value;var u=r(t),v=String(this),p=l(u,RegExp),m=u.unicode,g=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),_=new p(b?u:"^(?:"+u.source+")",g),y=void 0===i?f:i>>>0;if(0===y)return[];if(0===v.length)return null===d(_,v)?[v]:[];var C=0,x=0,E=[];while(x<v.length){_.lastIndex=b?x:0;var k,S=d(_,b?v:v.slice(x));if(null===S||(k=h(o(_.lastIndex+(b?0:x)),v.length))===C)x=c(v,x,m);else{if(E.push(v.slice(C,x)),E.length===y)return E;for(var w=1;w<=S.length-1;w++)if(E.push(S[w]),E.length===y)return E;x=C=k}}return E.push(v.slice(C)),E}]}),!b)},"14c3":function(t,e,s){var a=s("c6b6"),i=s("9263");t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var r=s.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},1724:function(t,e,s){t.exports=s.p+"img/files.5501c0f1.svg"},"2b50":function(t,e,s){},"2c88":function(t,e,s){"use strict";var a=s("a5d8"),i=s.n(a);i.a},"44e7":function(t,e,s){var a=s("861d"),i=s("c6b6"),r=s("b622"),n=r("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==i(t))}},5319:function(t,e,s){"use strict";var a=s("d784"),i=s("825a"),r=s("7b0b"),n=s("50c4"),l=s("a691"),c=s("1d80"),o=s("8aa5"),d=s("14c3"),u=Math.max,v=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,f=/\$([$&'`]|\d\d?)/g,b=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,s,a){var m=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=a.REPLACE_KEEPS_$0,_=m?"$":"$0";return[function(s,a){var i=c(this),r=void 0==s?void 0:s[t];return void 0!==r?r.call(s,i,a):e.call(String(i),s,a)},function(t,a){if(!m&&g||"string"===typeof a&&-1===a.indexOf(_)){var r=s(e,t,this,a);if(r.done)return r.value}var c=i(t),p=String(this),h="function"===typeof a;h||(a=String(a));var f=c.global;if(f){var C=c.unicode;c.lastIndex=0}var x=[];while(1){var E=d(c,p);if(null===E)break;if(x.push(E),!f)break;var k=String(E[0]);""===k&&(c.lastIndex=o(p,n(c.lastIndex),C))}for(var S="",w=0,M=0;M<x.length;M++){E=x[M];for(var $=String(E[0]),A=u(v(l(E.index),p.length),0),P=[],R=1;R<E.length;R++)P.push(b(E[R]));var I=E.groups;if(h){var D=[$].concat(P,A,p);void 0!==I&&D.push(I);var T=String(a.apply(void 0,D))}else T=y($,p,A,P,I,a);A>=w&&(S+=p.slice(w,A)+T,w=A+$.length)}return S+p.slice(w)}];function y(t,s,a,i,n,l){var c=a+t.length,o=i.length,d=f;return void 0!==n&&(n=r(n),d=h),e.call(l,d,(function(e,r){var l;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return s.slice(0,a);case"'":return s.slice(c);case"<":l=n[r.slice(1,-1)];break;default:var d=+r;if(0===d)return e;if(d>o){var u=p(d/10);return 0===u?e:u<=o?void 0===i[u-1]?r.charAt(1):i[u-1]+r.charAt(1):e}l=i[d-1]}return void 0===l?"":l}))}}))},6547:function(t,e,s){var a=s("a691"),i=s("1d80"),r=function(t){return function(e,s){var r,n,l=String(i(e)),c=a(s),o=l.length;return c<0||c>=o?t?"":void 0:(r=l.charCodeAt(c),r<55296||r>56319||c+1===o||(n=l.charCodeAt(c+1))<56320||n>57343?t?l.charAt(c):r:t?l.slice(c,c+2):n-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},6582:function(t,e,s){t.exports=s.p+"img/edit.ff0d6d08.svg"},"8aa5":function(t,e,s){"use strict";var a=s("6547").charAt;t.exports=function(t,e,s){return e+(s?a(t,e).length:1)}},9263:function(t,e,s){"use strict";var a=s("ad6d"),i=s("9f7f"),r=RegExp.prototype.exec,n=String.prototype.replace,l=r,c=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),o=i.UNSUPPORTED_Y||i.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],u=c||d||o;u&&(l=function(t){var e,s,i,l,u=this,v=o&&u.sticky,p=a.call(u),h=u.source,f=0,b=t;return v&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),b=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(h="(?: "+h+")",b=" "+b,f++),s=new RegExp("^(?:"+h+")",p)),d&&(s=new RegExp("^"+h+"$(?!\\s)",p)),c&&(e=u.lastIndex),i=r.call(v?s:u,b),v?i?(i.input=i.input.slice(f),i[0]=i[0].slice(f),i.index=u.lastIndex,u.lastIndex+=i[0].length):u.lastIndex=0:c&&i&&(u.lastIndex=u.global?i.index+i[0].length:e),d&&i&&i.length>1&&n.call(i[0],s,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),t.exports=l},"9f7f":function(t,e,s){"use strict";var a=s("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a5d8:function(t,e,s){},a66e:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back-cont"},[a("img",{staticClass:"img-cloud",staticStyle:{top:"250px",right:"15%",transform:"scaleX(-1)",height:"77px"},attrs:{src:s("c540"),alt:""}}),a("img",{staticClass:"img-cloud",staticStyle:{top:"750px",left:"17%",height:"77px"},attrs:{src:s("c540"),alt:""}}),a("b-container",{staticClass:"cont py-3"},[a("b-row",[a("b-col",{staticClass:"s-collumn",attrs:{lg:"3"}},[a("div",{staticClass:"main-cards"},[a("div",{staticClass:"tabs-title"},[a("span",{staticClass:"text-gradient"},[t._v("My Profile")])]),a("div",{staticStyle:{padding:"2.5rem"}},[a("div",{staticClass:"profile-img",on:{click:t.openModal}},[a("div",{staticClass:"profile-file"},[a("img",{attrs:{src:this.picturl,alt:""}})]),a("a",{staticClass:"edit-img",attrs:{href:"#"}},[a("img",{attrs:{src:s("6582"),alt:""}})])]),a("div",{staticClass:"mb-3",staticStyle:{"font-weight":"600",color:"#58595B"}},[t._v("#Sirkel"+t._s(this.datas.id))]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"profile-title"},[t._v("Name")]),a("div",[t._v(t._s(this.datas.name))])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"profile-title"},[t._v("Email")]),a("div",[t._v(t._s(this.datas.email))])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"profile-title"},[t._v("Phone Number")]),a("div",[t._v(t._s(this.datas.phone_number))])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"profile-title"},[t._v("My Role")]),a("div",[t._v(t._s(this.datas.roles))])])])])]),a("b-col",{staticClass:"s-collumn",attrs:{lg:"9"}},[a("div",[a("b-tabs",{staticClass:"s-tabs",attrs:{"active-tab-class":"SSSSS","active-nav-item-class":"AAAAAAAAAAAAAAA"}},[a("b-tab",{staticClass:"s-tabs-content",attrs:{"title-link-class":"s-tabs-link"},scopedSlots:t._u([{key:"title",fn:function(){return[a("span",[t._v("My Data")])]},proxy:!0}])},[this.edit?t._e():a("MyData",{attrs:{pdatas:t.datas},on:{toggleEdit:t.toggleEdit}}),this.edit?a("EditData",{attrs:{users:t.datas},on:{toggleEdit:t.toggleEdit}}):t._e()],1),a("b-tab",{staticClass:"s-tabs-content",attrs:{title:"My Project"},scopedSlots:t._u([{key:"title",fn:function(){return[a("span",[t._v("My Project")])]},proxy:!0}])},[t._v(" My Project "),a("br"),t._v("My Project "),a("br"),t._v("My Project "),a("br"),t._v("My Project "),a("br"),this.profpicModal?a("input",t._b({ref:"fileInput",attrs:{type:"file",name:"image",accept:"image/*",required:""},on:{change:t.changeImage}},"input",t.inputFile,!1)):t._e()]),a("b-tab",{staticClass:"s-tabs-content",attrs:{title:"My Statistics"},scopedSlots:t._u([{key:"title",fn:function(){return[a("span",[t._v("My Statistics")])]},proxy:!0}])},[t._v(" My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br"),t._v("My Statistic "),a("br")])],1)],1)])],1)],1),a("b-modal",{attrs:{id:"change-profpic-modal",centered:"","modal-header-close":"","hide-header-close":"","hide-footer":""},on:{"close-dialog":t.alert}},[a("div",{staticClass:"modal-tabs-title"},[a("span",{staticClass:"text-gradient",staticStyle:{align:"center"}},[t._v(" Edit Photo ")])]),a("br"),a("div",{staticClass:"d-flex justify-content-center"},[a("div",{key:t.rerender2,staticClass:"profile-img",on:{click:function(e){return t.changeProfPic()}}},[a("div",{staticClass:"profile-file"},[a("img",{attrs:{src:this.profpicPreview,alt:""}})])])]),a("div",{staticClass:"d-block text-center"},[a("b",{on:{click:t.changeProfPic}},[t._v("Upload Picture")]),a("br"),a("u",[a("b",{staticStyle:{color:"#FF6584"},on:{click:t.removeProfPic}},[t._v("Delete Picture")])]),a("br"),a("br")]),a("div",{staticClass:"d-block text-center"},[a("b-button",{staticClass:"btn-gradient",attrs:{variant:"primary",id:"submit-button",type:"submit"},on:{click:t.saveAction}},[t._v("SAVE")])],1)])],1)},i=[],r=(s("ac1f"),s("5319"),s("1276"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fol"},[a("b-row",{staticClass:"mydata"},[a("b-col",{attrs:{md:"6"}},[a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("Name")]),a("div",{staticClass:"value"},[t._v(t._s(this.pdatas.name)+" ")])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("Call Name")]),a("div",{staticClass:"value"},[t._v(t._s(this.pdatas.nickname)+" ")])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("Email")]),a("div",{staticClass:"value"},[t._v(t._s(this.pdatas.email)+" ")])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("Phone Number")]),a("div",{staticClass:"value"},[t._v(t._s(this.pdatas.phone_number)+" ")])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("My Role")]),a("div",{staticClass:"value"},[t._v(t._s(this.pdatas.roles)+" ")])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("My CV")]),a("a",{staticClass:"file-image",attrs:{href:this.cvhref,target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:s("1724"),alt:""}})]),a("div",{staticClass:"value value-file"},[t._v(t._s(this.pdatas.cv))])])]),a("b-col",{attrs:{md:"6"}},[a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("Account Number")]),a("div",{staticClass:"value"},[t._v(t._s(this.pdatas.account_number)+" ")])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("Address")]),a("div",{staticClass:"value"},[t._v(t._s(this.pdatas.address)+" ")])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("City")]),a("div",{staticClass:"value"},[t._v(t._s(this.pdatas.city)+" ")])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("Country")]),a("div",{staticClass:"value"},[t._v(t._s(this.pdatas.country)+" ")])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("Education")]),a("div",{staticClass:"value"},[t._v(t._s(this.pdatas.education)+" ")])])])],1),a("b-button",{ref:"submitbutton",staticClass:"sirkel-blue",attrs:{type:"submit",variant:"primary",id:"edit-button"},on:{click:t.toggleEdit}},[a("img",{attrs:{src:s("6582"),alt:""}}),t._v(" EDIT ")])],1)}),n=[],l={name:"UserMyData",computed:{cvhref:function(){return"https://admin-web-sirkel-dev.sirkel.id"+this.pdatas.cv}},props:["pdatas"],methods:{toggleEdit:function(){this.$emit("toggleEdit")}}},c=l,o=(s("b7a3"),s("2877")),d=Object(o["a"])(c,r,n,!1,null,"556da972",null),u=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fol"},[a("b-row",{staticClass:"mydata"},[a("b-col",{attrs:{md:"6"}},[a("div",{staticClass:"label"},[t._v("Name ")]),a("b-form-input",{attrs:{name:"name",id:"name",type:"text",required:"",placeholder:"Enter your name"},model:{value:t.users.name,callback:function(e){t.$set(t.users,"name",e)},expression:"users.name"}}),a("br"),a("div",{staticClass:"label"},[t._v("Call Name ")]),a("b-form-input",{attrs:{name:"callname",id:"callname",type:"text",required:"",placeholder:"Enter your call name"},model:{value:t.users.nickname,callback:function(e){t.$set(t.users,"nickname",e)},expression:"users.nickname"}}),a("br"),a("div",{staticClass:"label"},[t._v("Email ")]),a("b-form-input",{attrs:{name:"email",id:"email",type:"email",required:"",placeholder:"Enter your Email"},model:{value:t.users.email,callback:function(e){t.$set(t.users,"email",e)},expression:"users.email"}}),a("br"),a("div",{staticClass:"label"},[t._v("Phone Number (Whatsapp) ")]),a("b-form-input",{key:"phone",attrs:{name:"phone",id:"phone",type:"number",required:"",placeholder:"Enter your phone number (Whatsapp)"},model:{value:t.users.phone_number,callback:function(e){t.$set(t.users,"phone_number",e)},expression:"users.phone_number"}}),a("br"),a("div",{staticClass:"label"},[t._v("My Role ")]),a("br"),a("b-form-group",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.ariaDescribedby;return[a("b-form-checkbox-group",{staticClass:"selected_role",attrs:{id:"selected_role","aria-describedby":s,name:"role_speciality",size:"lg",stacked:""},model:{value:t.selected_role,callback:function(e){t.selected_role=e},expression:"selected_role"}},[a("b-container",{staticClass:"bv-example-row"},t._l(t.role_list,(function(e){return a("b-col",{key:e.id},[a("b-form-checkbox",{attrs:{value:e.id}},[t._v(t._s(e.description))])],1)})),1)],1)]}}])}),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"label"},[t._v("My CV")]),a("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),a("div",{staticClass:"value value-file"},[t._v(t._s(this.users.cv))])],1)],1),a("b-col",{attrs:{md:"6"}},[a("div",{staticClass:"label"},[t._v("Account Number ")]),a("b-form-input",{attrs:{name:"account_number",id:"account_number",type:"number",required:"",placeholder:"Enter your account number"},model:{value:t.users.account_number,callback:function(e){t.$set(t.users,"account_number",e)},expression:"users.account_number"}}),a("br"),a("div",{staticClass:"label"},[t._v("Address ")]),a("b-form-input",{attrs:{name:"address",id:"address",type:"text",required:"",placeholder:"Enter your address"},model:{value:t.users.address,callback:function(e){t.$set(t.users,"address",e)},expression:"users.address"}}),a("br"),a("div",{staticClass:"label"},[t._v("City ")]),a("b-form-input",{attrs:{name:"city",id:"city",type:"text",required:"",placeholder:"Enter your city"},model:{value:t.users.city,callback:function(e){t.$set(t.users,"city",e)},expression:"users.city"}}),a("br"),a("div",{staticClass:"label"},[t._v("Country ")]),a("b-form-input",{attrs:{name:"country",id:"country",type:"text",required:"",placeholder:"Enter your country"},model:{value:t.users.country,callback:function(e){t.$set(t.users,"country",e)},expression:"users.country"}}),a("br"),a("div",{staticClass:"label"},[t._v("Education ")]),a("b-form-input",{attrs:{name:"education",id:"education",type:"text",required:"",placeholder:"Enter your education"},model:{value:t.users.education,callback:function(e){t.$set(t.users,"education",e)},expression:"users.education"}}),a("br")],1)],1),a("b-button",{ref:"submitbutton",staticClass:"sirkel-blue",attrs:{type:"submit",variant:"primary",id:"edit-button"},on:{click:t.edit}},[a("img",{attrs:{src:s("6582"),alt:""}}),t._v(" SAVE EDIT ")]),a("b-modal",{attrs:{id:"modal-failed","hide-header":"","hide-footer":""}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"m-4",attrs:{id:"failed-message"}},[a("span",{domProps:{innerHTML:t._s(t.error)}})]),a("b-button",{staticStyle:{background:"red"},on:{click:t.closeError}},[t._v("OK")])],1)]),a("b-modal",{attrs:{id:"modal-success","hide-header":"","hide-footer":""}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"m-4",attrs:{id:"success-message"}},[a("h1",[t._v("You have successfully edited your personal data.")]),a("span",{domProps:{innerHTML:t._s(t.error)}})]),a("b-button",{staticStyle:{background:"linear-gradient(310.6deg, #00a3fc 1.23%, #2d1de5 98.57%)"},on:{click:t.closeSuccess}},[t._v("COOL!")])],1)])],1)},p=[],h=(s("b0c0"),{data:function(){return{selected_role:[],role_list:[],error:""}},mounted:function(){var t=this;this.axios.get("https://admin-web-sirkel-dev.sirkel.id/api/rolee_published").then((function(e){t.role_list=e.data,console.log(t.role_list)})).catch((function(t){return console.log(t)}))},methods:{edit:function(){var t=this,e=new FormData;e.append("nickname",this.users.nickname),e.append("name",this.users.name),e.append("email",this.users.email),e.append("phone_number",this.users.phone_number),e.append("address",this.users.address),e.append("education",this.users.education),e.append("city",this.users.city),e.append("country",this.users.country),e.append("account_number",this.users.account_number),this.axios.post("https://admin-web-sirkel-dev.sirkel.id/api/v1/account/freelancer/"+this.users.id,e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status?t.showSuccess():t.showError(e.data)})).catch((function(e){var s="";for(var a in e.response.data.errors)s+=e.response.data.errors[a][0]+"<br>";t.showError(s)})),console.log(this.selected_role)},toggleEdit:function(){this.$parent.edit=this.$emit("toggleEdit")},showError:function(t){this.error=t,this.$bvModal.show("modal-failed")},showSuccess:function(){this.error="Edit Success!",this.$bvModal.show("modal-success")},closeSuccess:function(){this.$bvModal.hide("modal-success"),this.$parent.edit=this.$emit("toggleEdit")},closeError:function(){this.$bvModal.hide("modal-failed")}},props:["users"]}),f=h,b=(s("dc15"),Object(o["a"])(f,v,p,!1,null,null,null)),m=b.exports,g={name:"UserDashboard",components:{MyData:u,EditData:m},data:function(){return{datas:{id:null,email:null,name:null,nickname:null,phone_number:null,about_sirkel:null,major:null,answer:null,date_birth:null,address:null,education:null,cv:null,roles:null,created_at:null,updated_at:null,photo:null},rerender:0,rerender2:0,inputFile:null,profpicPreview:this.picturl,profpicModal:!1,edit:!1}},beforeCreate:function(){var t=this;this.profpicModal=!1;var e={scroll:0};this.$emit("nav-scroll",e);var s=this.$session.has("token")?this.$session.get("token"):window.$cookies.get("token");console.log("Search For Data... "+s),this.axios.get("https://admin-web-sirkel-dev.sirkel.id/api/freelancer-data",{headers:{Authorization:"Bearer ".concat(s)}}).then((function(e){t.datas=e.data.freelances[0],t.datas.roles=t.datas.roles.replace(/,/g,", "),console.log(e.data)})).catch((function(t){return console.log(t)}))},methods:{openModal:function(){this.profpicPreview=this.picturl,this.profpicModal=!0,this.$bvModal.show("change-profpic-modal")},removeProfPic:function(){var t=this,e=new FormData;e.append("photo","Post request body");var s=this.$session.has("token")?this.$session.get("token"):window.$cookies.get("token");this.axios.post("https://admin-web-sirkel-dev.sirkel.id/api/avatar-delete",e,{headers:{Authorization:"Bearer ".concat(s)}}).then((function(e){console.log(e.data),t.$bvModal.hide("change-profpic-modal"),t.profpicModal=!1,window.location.href="/dashboard"})).catch((function(t){return console.log(t)}))},changeProfPic:function(){this.$refs.fileInput.click(),console.log("Ceritanya, mau ganti foto")},toggleEdit:function(){this.edit=!this.edit,window.scrollTo(0,0)},saveAction:function(){var t=this,e=new FormData,s=this.$session.has("token")?this.$session.get("token"):window.$cookies.get("token");e.append("photo",this.inputFile),this.axios.post("https://admin-web-sirkel-dev.sirkel.id/api/pict-freelancer",e,{headers:{Authorization:"Bearer ".concat(s)}}).then((function(e){console.log(e.data),t.$bvModal.hide("change-profpic-modal"),t.profpicModal=!1,window.location.href="/dashboard"})).catch((function(t){return console.log(t)}))},changeImage:function(t){var e=this;this.inputFile=t.target.files[0];var s=new FileReader;s.onload=function(t){var s=t.target.result;e.profpicPreview=s},s.readAsDataURL(t.target.files[0])}},computed:{picturl:function(){if(null==this.datas.photo)return"https://admin-web-sirkel-dev.sirkel.id/images/freelancepage/default.jpg";var t=this.datas.photo.split("public").pop();return"https://admin-web-sirkel-dev.sirkel.id"+t}}},_=g,y=(s("2c88"),s("a991"),Object(o["a"])(_,a,i,!1,null,"c80acc10",null));e["default"]=y.exports},a991:function(t,e,s){"use strict";var a=s("01e6"),i=s.n(a);i.a},ac1f:function(t,e,s){"use strict";var a=s("23e7"),i=s("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,s){"use strict";var a=s("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b7a3:function(t,e,s){"use strict";var a=s("2b50"),i=s.n(a);i.a},d784:function(t,e,s){"use strict";s("ac1f");var a=s("6eeb"),i=s("d039"),r=s("b622"),n=s("9263"),l=s("9112"),c=r("species"),o=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),u=r("replace"),v=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2!==s.length||"a"!==s[0]||"b"!==s[1]}));t.exports=function(t,e,s,u){var h=r(t),f=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),b=f&&!i((function(){var e=!1,s=/a/;return"split"===t&&(s={},s.constructor={},s.constructor[c]=function(){return s},s.flags="",s[h]=/./[h]),s.exec=function(){return e=!0,null},s[h](""),!e}));if(!f||!b||"replace"===t&&(!o||!d||v)||"split"===t&&!p){var m=/./[h],g=s(h,""[t],(function(t,e,s,a,i){return e.exec===n?f&&!i?{done:!0,value:m.call(e,s,a)}:{done:!0,value:t.call(s,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),_=g[0],y=g[1];a(String.prototype,t,_),a(RegExp.prototype,h,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}u&&l(RegExp.prototype[h],"sham",!0)}},dc15:function(t,e,s){"use strict";var a=s("0122"),i=s.n(a);i.a}}]);
//# sourceMappingURL=UserDashboard.35b701e9.js.map