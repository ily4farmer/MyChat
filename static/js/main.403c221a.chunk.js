(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(25),s=a.n(n),r=(a(43),a(16)),i=a(22),o=(a(44),a(12)),l=(a(48),a(3));function j(e){var t=e.user,a=Object(o.b)();return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"header-block",children:[Object(l.jsx)("div",{className:"header__logo",children:"MyChat"}),t?Object(l.jsx)("nav",{onClick:function(){a({type:"state",payload:!0})},className:"header__button",children:Object(l.jsx)("div",{className:"header__btn",children:Object(l.jsx)("span",{})})}):Object(l.jsx)("button",{className:"header__button btn",children:"\u041b\u043e\u0433\u0438\u043d"})]})})})}var u=a(10),d=(a(50),a(19));a(51);function b(e){var t=e.title,a=e.error,c=e.setError,n=e.methodForm,s=Object(o.b)(),r=Object(o.c)((function(e){return e.form}));return Object(l.jsxs)("form",{action:"#",className:"form",onSubmit:n,children:[Object(l.jsx)("h2",{className:"form__template",children:t}),Object.keys(r).map((function(e){return Object(l.jsxs)("label",{children:[Object(l.jsx)("label",{className:"form__label",children:r[e].label}),Object(l.jsx)("input",{onChange:function(e){return function(e){var t=Object(d.a)({},r);switch(c(""),!0){case"email"===e.target.type:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value)?(t.email.emailValue=e.target.value,s({type:"state",payload:t})):(t.email.emailValue="",s({type:"state",payload:t}));break;case"password"===e.target.type:e.target.value.length>6?(t.password.passwordValue=e.target.value,s({type:"state",payload:t})):(t.password.passwordValue="",s({type:"state",payload:t}))}}(e)},type:r[e].type,className:"form__input",required:!0})]},e)})),Object(l.jsx)("div",{style:{color:"red",fontWeight:600},className:"form__error",children:a}),Object(l.jsx)("input",{type:"submit",placeholder:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",className:"form__input-btn btn"})]})}var m=a(18);function h(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.form})),a=t.email.emailValue,n=t.password.passwordValue,s=Object(c.useState)(""),i=Object(r.a)(s,2),j=i[0],u=i[1];return Object(l.jsx)(b,{title:"\u0412\u043e\u0439\u0442\u0438",setError:u,error:j,methodForm:function(c){c.preventDefault(),m.a.auth().signInWithEmailAndPassword(a,n).then((function(e){return u(""),e})).catch((function(e){console.log("Error: "+e.toString()),u("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")})),t.email.emailValue="",t.password.passwordValue="",e({type:"state",payload:t})}})}function p(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.form})),a=t.email.emailValue,n=t.password.passwordValue,s=Object(c.useState)(""),i=Object(r.a)(s,2),j=i[0],u=i[1];return Object(l.jsx)(b,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",setError:u,error:j,methodForm:function(c){c.preventDefault(),m.a.auth().createUserWithEmailAndPassword(a,n).then((function(e){return u(""),e})).catch((function(e){console.log("Error: "+e.toString()),u("\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0435\u043d\u044c\u0448\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0438\u043b\u0438 \u043d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430")})),t.email.emailValue="",t.password.passwordValue="",e({type:"state",payload:t})}})}var O=a(32),f=a.n(O),x=a(36),v=(a(58),a(27)),_=a(37);m.a.initializeApp({apiKey:"AIzaSyA0vETM0mdZmyc4Ca6u2eG-z_gudsRUTZ0",authDomain:"chatnew11.firebaseapp.com",projectId:"chatnew11",storageBucket:"chatnew11.appspot.com",messagingSenderId:"8985392131",appId:"1:8985392131:web:9253a4cfc51204fb90ca36",measurementId:"G-H3VB8P2KWW"});var g=m.a.auth(),N=m.a.firestore();a(59);function y(){return Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("div",{className:"lds-hourglass"})})}var w="/home",k="/chat",V="/info";a(60);var A=[{path:w,component:function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(l.jsx)("section",{className:"home",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"home-block",children:[Object(l.jsx)("h1",{className:"home__title",children:"MYCHAT"}),a?Object(l.jsx)(h,{}):Object(l.jsx)(p,{}),Object(l.jsxs)("div",{className:"home__footer",children:[Object(l.jsx)("div",{className:"home__link",style:a?{fontWeight:"bold"}:{fontWeight:"normal"},onClick:function(){return n(!0)},children:"\u0412\u043e\u0439\u0442\u0438"}),Object(l.jsx)("div",{className:"home__link",style:a?{fontWeight:"normal"}:{fontWeight:"bold"},onClick:function(){return n(!1)},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})})})}}],C=[{path:k,component:function(){var e=Object(v.a)(g),t=Object(r.a)(e,1)[0],a=Object(c.useState)(""),n=Object(r.a)(a,2),s=n[0],i=n[1],o=Object(_.a)(N.collection("messages").orderBy("createdAt")),j=Object(r.a)(o,2),u=j[0],d=j[1],b=function(){var e=Object(x.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.collection("messages").add({uid:t.uid,displayName:t.email,text:s,createdAt:m.a.firestore.FieldValue.serverTimestamp()}),i("");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d?Object(l.jsx)(y,{}):Object(l.jsx)("section",{className:"chat",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"chat-block",children:[Object(l.jsx)("div",{className:"chat__window",children:u.map((function(e){return Object(l.jsxs)("div",{className:"message",style:{marginLeft:t.uid===e.uid?"auto":"10px"},children:[Object(l.jsx)("div",{className:"message__name",children:e.displayName}),Object(l.jsx)("div",{className:"message__text",children:e.text})]},e.createdAt)}))}),Object(l.jsxs)("div",{className:"chat__footer",children:[Object(l.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},type:"text",className:"chat__input"}),Object(l.jsx)("button",{onClick:b,className:"chat__btn btn",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})})})}},{path:V,component:function(){return Object(l.jsx)("section",{className:"info",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"info-block",children:Object(l.jsx)("p",{className:"info__text",children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0431\u044b\u043b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d \u0432 \u0443\u0447\u0435\u0431\u043d\u044b\u0445 \u0446\u0435\u043b\u044f\u0445"})})})})}}];a(61);function S(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.burger})).visible;console.log(t);var a="burger";return t||(a="none"),Object(l.jsxs)("div",{className:a,children:[Object(l.jsx)("div",{onClick:function(){e({type:"state",payload:!1})},className:"burger__btn",children:"X"}),Object(l.jsxs)("ul",{className:"burger__list",children:[Object(l.jsx)("li",{className:"burger__link",children:Object(l.jsx)(i.b,{to:k,children:"\u0427\u0430\u0442"})}),Object(l.jsx)("li",{className:"burger__link",children:Object(l.jsx)(i.b,{to:V,children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})})]}),Object(l.jsx)("button",{onClick:function(){return g.signOut()},className:"header__button btn",children:"\u0412\u044b\u0439\u0442\u0438"})]})}function W(e){var t=e.user;return e.loading?Object(l.jsx)(y,{}):t?Object(l.jsxs)(c.Fragment,{children:[Object(l.jsxs)(u.d,{children:[C.map((function(e){var t=e.path,a=e.component;return Object(l.jsx)(u.b,{path:t,component:a,exact:!0},t)})),Object(l.jsx)(u.a,{to:k})]}),Object(l.jsx)(S,{})]}):Object(l.jsxs)(u.d,{children:[A.map((function(e){var t=e.path,a=e.component;return Object(l.jsx)(u.b,{path:t,component:a,exact:!0},t)})),Object(l.jsx)(u.a,{to:w})]})}var E=function(){var e=Object(v.a)(g),t=Object(r.a)(e,3),a=t[0],c=t[1];return t[2],Object(l.jsxs)(i.a,{children:[Object(l.jsx)(j,{user:a}),Object(l.jsx)(W,{user:a,loading:c})]})},I=a(28),z=a(38),F={visible:!1},T={email:{emailValue:"",type:"email",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"},password:{passwordValue:"",type:"password",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 password"}},B=Object(I.combineReducers)({form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"state":return Object(d.a)(Object(d.a)({},e),t.payload);default:return e}},burger:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"state":return Object(d.a)(Object(d.a)({},e),{},{visible:t.payload});default:return e}}}),D=Object(I.createStore)(B,Object(z.composeWithDevTools)());s.a.render(Object(l.jsx)(o.a,{store:D,children:Object(l.jsx)(E,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.403c221a.chunk.js.map