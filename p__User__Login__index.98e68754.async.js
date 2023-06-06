"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[366],{11053:function(ee,B,r){r.r(B),r.d(B,{default:function(){return o}});var O=r(15009),l=r.n(O),D=r(97857),f=r.n(D),$=r(99289),j=r.n($),I=r(5574),Z=r.n(I),T=r(63294),W=r(2618),u=r(80854);function K(e,s){return y.apply(this,arguments)}function y(){return y=j()(l()().mark(function e(s,v){return l()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",(0,u.request)("/api/login/captcha",f()({method:"GET",params:f()({},s)},v||{})));case 1:case"end":return x.stop()}},e)})),y.apply(this,arguments)}var z=r(87547),R=r(94149),H=r(24454),F=r(26),w=r(5966),E=r(16434),k=r(63434),b=r(19097),J=r(99138),M=r(2453),Q=r(93346),L=r(67610),N=r(67294),P=r(73935),t=r(85893),A=function(){var s=(0,b.l)(function(v){var S=v.token;return{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:S.borderRadius,":hover":{backgroundColor:S.colorBgTextHover}}});return(0,t.jsx)("div",{className:s,"data-lang":!0,children:u.SelectLang&&(0,t.jsx)(u.SelectLang,{})})},a=function(s){var v=s.content;return(0,t.jsx)(J.Z,{style:{marginBottom:24},message:v,type:"error",showIcon:!0})},n=function(){var s=(0,N.useState)({}),v=Z()(s,2),S=v[0],x=v[1],re=(0,N.useState)("account"),V=Z()(re,2),C=V[0],ae=V[1],X=(0,u.useModel)("@@initialState"),U=X.initialState,te=X.setInitialState,ne=(0,b.l)(function(){return{display:"flex",flexDirection:"column",height:"100vh",overflow:"auto",backgroundImage:"url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",backgroundSize:"100% 100%"}}),p=(0,u.useIntl)(),se=function(){var _=j()(l()().mark(function c(){var d,g;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,U==null||(d=U.fetchUserInfo)===null||d===void 0?void 0:d.call(U);case 2:g=i.sent,g&&(0,P.flushSync)(function(){te(function(G){return f()(f()({},G),{},{currentUser:g})})});case 4:case"end":return i.stop()}},c)}));return function(){return _.apply(this,arguments)}}(),ue=function(){var _=j()(l()().mark(function c(d){var g,h,i,G;return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,m.next=3,(0,W.x4)(f()(f()({},d),{},{type:C}));case 3:return g=m.sent,h=p.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),M.ZP.success(h),m.next=8,se();case 8:return i=new URL(window.location.href).searchParams,u.history.push(i.get("redirect")||"/"),m.abrupt("return");case 13:m.prev=13,m.t0=m.catch(0),G=p.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),console.log(m.t0),M.ZP.error(G);case 18:case"end":return m.stop()}},c,null,[[0,13]])}));return function(d){return _.apply(this,arguments)}}(),Y=S.status,q=S.type;return(0,t.jsxs)("div",{className:ne,children:[(0,t.jsx)(u.Helmet,{children:(0,t.jsxs)("title",{children:[p.formatMessage({id:"menu.login",defaultMessage:"\u767B\u5F55\u9875"}),"- ",L.Z.title]})}),(0,t.jsx)(A,{}),(0,t.jsxs)(F.B,{backgroundImageUrl:"https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png",logo:"/logo.svg",title:"\u5546\u573A\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",onFinish:function(){var _=j()(l()().mark(function c(d){return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,ue(d);case 2:case"end":return h.stop()}},c)}));return function(c){return _.apply(this,arguments)}}(),children:[(0,t.jsx)(Q.Z,{activeKey:C,onChange:ae,centered:!0,items:[{key:"account",label:p.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})},{key:"mobile",label:p.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"\u624B\u673A\u53F7\u767B\u5F55"})}]}),Y==="error"&&q==="account"&&(0,t.jsx)(a,{content:p.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF(admin/ant.design)"})}),C==="account"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w.Z,{name:"username",fieldProps:{size:"large",prefix:(0,t.jsx)(z.Z,{})},placeholder:p.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:(0,t.jsx)(u.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,t.jsx)(w.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,t.jsx)(R.Z,{})},placeholder:p.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: ant.design"}),rules:[{required:!0,message:(0,t.jsx)(u.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]}),Y==="error"&&q==="mobile"&&(0,t.jsx)(a,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF"}),C==="mobile"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w.Z,{fieldProps:{size:"large",prefix:(0,t.jsx)(H.Z,{})},name:"mobile",placeholder:p.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"\u624B\u673A\u53F7"}),rules:[{required:!0,message:(0,t.jsx)(u.FormattedMessage,{id:"pages.login.phoneNumber.required",defaultMessage:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"})},{pattern:/^1\d{10}$/,message:(0,t.jsx)(u.FormattedMessage,{id:"pages.login.phoneNumber.invalid",defaultMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"})}]}),(0,t.jsx)(E.Z,{fieldProps:{size:"large",prefix:(0,t.jsx)(R.Z,{})},captchaProps:{size:"large"},placeholder:p.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(c,d){return c?"".concat(d," ").concat(p.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):p.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},name:"captcha",rules:[{required:!0,message:(0,t.jsx)(u.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"})}],onGetCaptcha:function(){var _=j()(l()().mark(function c(d){var g;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,K({phone:d});case 2:if(g=i.sent,g){i.next=5;break}return i.abrupt("return");case 5:M.ZP.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return i.stop()}},c)}));return function(c){return _.apply(this,arguments)}}()})]}),(0,t.jsxs)("div",{style:{marginBlockEnd:24},children:[(0,t.jsx)(k.Z,{noStyle:!0,name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"}),(0,t.jsx)("a",{style:{float:"right"},children:"\u5FD8\u8BB0\u5BC6\u7801"})]})]}),(0,t.jsx)(T.$_,{})]})},o=n},2618:function(ee,B,r){r.d(B,{x4:function(){return K}});var O=r(15009),l=r.n(O),D=r(97857),f=r.n(D),$=r(99289),j=r.n($),I=r(80854);function Z(a){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime().mark(function a(n){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/currentUser",_objectSpread({method:"GET"},n||{})));case 1:case"end":return e.stop()}},a)})),T.apply(this,arguments)}function W(a){return u.apply(this,arguments)}function u(){return u=_asyncToGenerator(_regeneratorRuntime().mark(function a(n){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/login/outLogin",_objectSpread({method:"POST"},n||{})));case 1:case"end":return e.stop()}},a)})),u.apply(this,arguments)}function K(a,n){return y.apply(this,arguments)}function y(){return y=j()(l()().mark(function a(n,o){return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,I.request)("/api/login/account",f()({method:"POST",headers:{"Content-Type":"application/json"},data:n},o||{})));case 1:case"end":return s.stop()}},a)})),y.apply(this,arguments)}function z(a){return R.apply(this,arguments)}function R(){return R=_asyncToGenerator(_regeneratorRuntime().mark(function a(n){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/notices",_objectSpread({method:"GET"},n||{})));case 1:case"end":return e.stop()}},a)})),R.apply(this,arguments)}function H(a,n){return F.apply(this,arguments)}function F(){return F=_asyncToGenerator(_regeneratorRuntime().mark(function a(n,o){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("/api/rule",_objectSpread({method:"GET",params:_objectSpread({},n)},o||{})));case 1:case"end":return s.stop()}},a)})),F.apply(this,arguments)}function w(a){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function a(n){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/rule",_objectSpread({method:"PUT"},n||{})));case 1:case"end":return e.stop()}},a)})),E.apply(this,arguments)}function k(a){return b.apply(this,arguments)}function b(){return b=_asyncToGenerator(_regeneratorRuntime().mark(function a(n){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/rule",_objectSpread({method:"POST"},n||{})));case 1:case"end":return e.stop()}},a)})),b.apply(this,arguments)}function J(a){return M.apply(this,arguments)}function M(){return M=_asyncToGenerator(_regeneratorRuntime().mark(function a(n){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/rule",_objectSpread({method:"DELETE"},n||{})));case 1:case"end":return e.stop()}},a)})),M.apply(this,arguments)}function Q(a,n){return L.apply(this,arguments)}function L(){return L=_asyncToGenerator(_regeneratorRuntime().mark(function a(n,o){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("/api/role",_objectSpread({method:"GET",params:_objectSpread({},n)},o||{})));case 1:case"end":return s.stop()}},a)})),L.apply(this,arguments)}function N(a){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function a(n){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/role",_objectSpread({method:"POST"},n||{})));case 1:case"end":return e.stop()}},a)})),P.apply(this,arguments)}function t(a){return A.apply(this,arguments)}function A(){return A=_asyncToGenerator(_regeneratorRuntime().mark(function a(n){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/role",_objectSpread({method:"PUT"},n||{})));case 1:case"end":return e.stop()}},a)})),A.apply(this,arguments)}}}]);