"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[185],{51042:function(oe,O,n){var D=n(1413),E=n(67294),T=n(42110),o=n(84089),C=function(_,$){return E.createElement(o.Z,(0,D.Z)((0,D.Z)({},_),{},{ref:$,icon:T.Z}))};C.displayName="PlusOutlined",O.Z=E.forwardRef(C)},79657:function(oe,O,n){var D=n(15009),E=n.n(D),T=n(99289),o=n.n(T),C=n(5574),F=n.n(C),_=n(51042),$=n(66476),Y=n(12767),M=n(67294),h=n(85893),J=function(A){return new Promise(function(u,z){var f=new FileReader;f.readAsDataURL(A),f.onload=function(){return u(f.result)},f.onerror=function(I){return z(I)}})},q=function(A){var u=A.value,z=A.isSingle,f=A.onChange,I=(0,M.useState)(!1),H=F()(I,2),k=H[0],U=H[1],G=(0,M.useState)(""),N=F()(G,2),Z=N[0],re=N[1],ee=(0,M.useState)(""),R=F()(ee,2),c=R[0],y=R[1],x=(0,M.useState)(u?[u]:[]),S=F()(x,2),e=S[0],t=S[1],i=function(){return U(!1)},a=function(){var g=o()(E()().mark(function m(l){return E()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!(!l.url&&!l.preview)){v.next=4;break}return v.next=3,J(l.originFileObj);case 3:l.preview=v.sent;case 4:re(l.url||l.preview),U(!0),y(l.name||l.url.substring(l.url.lastIndexOf("/")+1));case 7:case"end":return v.stop()}},m)}));return function(l){return g.apply(this,arguments)}}(),r=function(m){f==null||f(m)},d=function(m){var l=m.fileList;t(l),r(l[0])};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)($.Z,{name:"logo",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",listType:"picture-card",fileList:e,onPreview:a,onChange:d,children:e&&(e==null?void 0:e.length)>=(z?1:(e==null?void 0:e.length)+1)?null:(0,h.jsxs)("div",{children:[(0,h.jsx)(_.Z,{}),(0,h.jsx)("div",{style:{marginTop:8},children:"Upload"})]})}),(0,h.jsx)(Y.Z,{open:k,title:c,footer:null,onCancel:i,children:(0,h.jsx)("img",{alt:"example",style:{width:"100%"},src:Z})})]})};O.Z=q},39363:function(oe,O,n){n.r(O),n.d(O,{default:function(){return ee}});var D=n(15009),E=n.n(D),T=n(97857),o=n.n(T),C=n(99289),F=n.n(C),_=n(5574),$=n.n(_),Y=n(79657),M=n(37476),h=n(5966),J=n(1413),q=n(91),p=n(67294),A=n(4743),u=n(85893),z=["fieldProps","proFieldProps"],f=function(c,y){var x=c.fieldProps,S=c.proFieldProps,e=(0,q.Z)(c,z);return(0,u.jsx)(A.Z,(0,J.Z)({ref:y,valueType:"textarea",fieldProps:x,proFieldProps:S},e))},I=p.forwardRef(f),H=n(4499),k=n(90930),U=n(80854),G=n(92195),N=n(4393),Z=function(c){var y=c.title,x=c.href,S=c.index,e=c.desc,t=c.logo,i=G.Z.useToken,a=i(),r=a.token,d=(0,p.useState)(Date.now()),g=$()(d,2),m=g[0],l=g[1],L=(0,p.useState)(!1),v=$()(L,2),w=v[0],B=v[1],K=(0,p.useState)(),X=$()(K,2),W=X[0],j=X[1];return(0,u.jsxs)("div",{style:{backgroundColor:r.colorBgContainer,boxShadow:r.boxShadow,borderRadius:"8px",fontSize:"14px",color:r.colorTextSecondary,lineHeight:"22px",padding:"16px 19px",minWidth:"220px"},children:[(0,u.jsxs)("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[(0,u.jsx)("div",{style:{width:48,height:48,lineHeight:"22px",backgroundSize:"100%",textAlign:"center",padding:"8px 16px 16px 12px",color:"#FFF",fontWeight:"bold",backgroundImage:"url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')"},children:S}),(0,u.jsx)("div",{style:{fontSize:"16px",color:r.colorText,paddingBottom:8},children:y})]}),(0,u.jsx)("div",{style:{fontSize:"14px",color:r.colorTextSecondary,textAlign:"justify",lineHeight:"22px",marginBottom:8},children:e}),(0,u.jsx)("img",{style:{height:"200px"},src:t.url}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("a",{href:x,target:"_blank",rel:"noreferrer",children:["\u4E86\u89E3\u66F4\u591A ",">"]}),(0,u.jsx)("a",{style:{marginLeft:"20px"},onClick:function(){B(!0),j({name:y,desc:e,logo:t,key:1})},children:"\u7F16\u8F91"})]}),(0,u.jsxs)(M.Y,{title:"\u66F4\u65B0\u5546\u573A\u4ECB\u7ECD",width:"400px",layout:"horizontal",labelAlign:"left",style:{display:"".concat(w?"block":"none")},open:w,onOpenChange:function(V){V||(B(!1),j(void 0),l(Date.now()))},initialValues:W,onFinish:function(){var Q=F()(E()().mark(function V(te){var ie;return E()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:console.log(te),ie=o()(o()({},te),{},{logo:te.logo.name}),console.log(ie),B(!1),j(void 0);case 5:case"end":return ae.stop()}},V)}));return function(V){return Q.apply(this,arguments)}}(),children:[(0,u.jsx)(h.Z,{name:"name",label:"\u5546\u573A\u540D\u79F0",labelAlign:"left",width:"md",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u573A\u540D\u79F0\uFF01"}]}),(0,u.jsx)(I,{width:"md",name:"desc",label:"\u5546\u573A\u63CF\u8FF0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u573A\u63CF\u8FF0\uFF01"}]}),(0,u.jsx)(H.Z,{name:"logo",label:"\u5546\u573A\u56FE\u7247",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5546\u573A\u56FE\u7247"}],children:(0,u.jsx)(Y.Z,{isSingle:!0})})]},m)]})},re=function(){var c,y=G.Z.useToken(),x=y.token,S=(0,U.useModel)("@@initialState"),e=S.initialState;return(0,u.jsx)(k._z,{children:(0,u.jsx)(N.Z,{style:{borderRadius:8},bodyStyle:{backgroundImage:(e==null||(c=e.settings)===null||c===void 0?void 0:c.navTheme)==="realDark"?"background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)":"background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)"},children:(0,u.jsxs)("div",{style:{backgroundPosition:"100% -30%",backgroundRepeat:"no-repeat",backgroundSize:"274px auto",backgroundImage:"url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')"},children:[(0,u.jsx)("div",{style:{fontSize:"20px",color:x.colorTextHeading},children:"\u6B22\u8FCE\u4F7F\u7528 \u5546\u573A\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF"}),(0,u.jsx)("p",{style:{fontSize:"14px",color:x.colorTextSecondary,lineHeight:"22px",marginTop:16,marginBottom:32},children:"\u5546\u5BB6\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u7684\u76EE\u7684\u662F\uFF0C\u901A\u8FC7\u5546\u5BB6\u624B\u4E2D\u638C\u63E1\u7684\u8D44\u6E90\uFF0C\u505A\u5230\u4E86\u8D44\u6E90\u6574\u5408\u7684\u6700\u5927\u5316\u3002\u5546\u5BB6\u7BA1\u7406\u7CFB\u7EDF\u662F\u5728\u884C\u4E1A\u7ECF\u9A8C\u57FA\u7840\u4E0A,\u5B9E\u73B0\u5BA2\u6237\u7684\u5B9E\u9645\u9700\u6C42\uFF0C\u505A\u5230\u4E86\u7EBF\u4E0B\u6D88\u8D39\u4E0E\uFF0C\u7EBF\u4E0A\u6D88\u8D39\u7684\u7ED3\u5408\u3002"}),(0,u.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:[(0,u.jsx)(Z,{index:1,href:"https://www.cnpp.cn/pinpai/106814.html",title:"\u543E\u60A6\u5E7F\u573A",desc:"\u6210\u7ACB\u4E8E2012\u5E74\uFF0C\u65B0\u57CE\u63A7\u80A1\u96C6\u56E2\u65D7\u4E0B\u7684\u57CE\u5E02\u7EFC\u5408\u4F53\u9879\u76EE\u54C1\u724C\uFF0C\u4ECE\u4E2D\u56FD\u5BB6\u5EAD\u771F\u5207\u7684\u60C5\u611F\u9700\u6C42\u51FA\u53D1\uFF0C\u81F4\u529B\u4E8E\u6253\u9020\u6709\u60C5\u6000/\u4E0D\u590D\u5236/\u5177\u89C4\u6A21\u7684\u4E2D\u56FD\u4F53\u9A8C\u5F0F\u5546\u4E1A\u54C1\u724C\u3002",logo:{uid:"1",name:"\u543E\u60A6.webp",url:"/img/\u543E\u60A6.webp"}}),(0,u.jsx)(Z,{index:2,href:"https://www.cnpp.cn/pinpai/7464.html",title:"\u4E07\u8FBE\u5E7F\u573A",desc:"\u521B\u7ACB\u4E8E1988\u5E74\uFF0C\u4EE5\u73B0\u4EE3\u670D\u52A1\u4E1A\u4E3A\u4E3B\u7684\u5927\u578B\u4F01\u4E1A\u96C6\u56E2\uFF0C\u65D7\u4E0B\u6709\u4E07\u8FBE\u5E7F\u573A\u3001\u4E07\u8FBE\u5F71\u57CE\u3001\u4E07\u8FBE\u9152\u5E97\u3001\u4E07\u8FBE\u6587\u5316\u65C5\u6E38\u57CE\u3001\u4E07\u8FBE\u5B9D\u8D1D\u738B\u7B49\u77E5\u540D\u54C1\u724C\uFF0C\u662F\u77E5\u540D\u7684\u4E0D\u52A8\u4EA7\u4F01\u4E1A\u3001\u5F71\u89C6\u4F01\u4E1A\u3001\u4F53\u80B2\u4F01\u4E1A\u3001\u513F\u7AE5\u4EA7\u4E1A\u4F01\u4E1A\uFF0C\u4E07\u8FBE\u5E7F\u573A\u96C6\u793E\u4EA4\u3001\u5A31\u4E50\u3001\u7F8E\u98DF\u3001\u96F6\u552E\u529F\u80FD\u4E8E\u4E00\u4F53\uFF0C\u5177\u5907\u5F62\u6210\u72EC\u7ACB\u5927\u578B\u5546\u5708\u7684\u5C5E\u6027\uFF0C\u4EE5\u201C\u4E07\u8FBE\u5E7F\u573A\u5C31\u662F\u57CE\u5E02\u4E2D\u5FC3\u201D\u7684\u5BA3\u4F20\u8BED\u8457\u79F0",logo:{uid:"2",name:"\u4E07\u8FBE.webp",url:"/img/\u4E07\u8FBE.webp"}})]})]})})})},ee=re},4393:function(oe,O,n){n.d(O,{Z:function(){return S}});var D=n(94184),E=n.n(D),T=n(98423),o=n(67294),C=n(53124),F=n(98675),_=n(99559),$=n(93346),Y=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(i[a[r]]=e[a[r]]);return i},h=e=>{var{prefixCls:t,className:i,hoverable:a=!0}=e,r=Y(e,["prefixCls","className","hoverable"]);const{getPrefixCls:d}=o.useContext(C.E_),g=d("card",t),m=E()(`${g}-grid`,i,{[`${g}-grid-hoverable`]:a});return o.createElement("div",Object.assign({},r,{className:m}))},J=n(67968),q=n(45503),p=n(14747);const A=e=>{const{antCls:t,componentCls:i,cardHeadHeight:a,cardPaddingBase:r,cardHeadTabsMarginBottom:d}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:`0 ${r}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,background:"transparent",borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},(0,p.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},p.vS),{[`
          > ${i}-typography,
          > ${i}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:d,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},u=e=>{const{cardPaddingBase:t,colorBorderSecondary:i,cardShadow:a,lineWidth:r}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      ${r}px 0 0 0 ${i},
      0 ${r}px 0 0 ${i},
      ${r}px ${r}px 0 0 ${i},
      ${r}px 0 0 0 ${i} inset,
      0 ${r}px 0 0 ${i} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},z=e=>{const{componentCls:t,iconCls:i,cardActionsLiMargin:a,cardActionsIconSize:r,colorBorderSecondary:d}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:e.colorBgContainer,borderTop:`${e.lineWidth}px ${e.lineType} ${d}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},(0,p.dF)()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.cardActionsIconSize*2,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${i}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:`${e.fontSize*e.lineHeight}px`,transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${i}`]:{fontSize:r,lineHeight:`${r*e.lineHeight}px`}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${d}`}}})},f=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},(0,p.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},p.vS),"&-description":{color:e.colorTextDescription}}),I=e=>{const{componentCls:t,cardPaddingBase:i,colorFillAlter:a}=e;return{[`${t}-head`]:{padding:`0 ${i}px`,background:a,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${e.padding}px ${i}px`}}},H=e=>{const{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},k=e=>{const{componentCls:t,cardShadow:i,cardHeadPadding:a,colorBorderSecondary:r,boxShadowTertiary:d,cardPaddingBase:g}=e;return{[t]:Object.assign(Object.assign({},(0,p.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:d},[`${t}-head`]:A(e),[`${t}-extra`]:{marginInlineStart:"auto",color:"",fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:g,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},(0,p.dF)()),[`${t}-grid`]:u(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%"},img:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${t}-actions`]:z(e),[`${t}-meta`]:f(e)}),[`${t}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${r}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:i}},[`${t}-contain-grid`]:{[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:a}}},[`${t}-type-inner`]:I(e),[`${t}-loading`]:H(e),[`${t}-rtl`]:{direction:"rtl"}}},U=e=>{const{componentCls:t,cardPaddingSM:i,cardHeadHeightSM:a}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:a,padding:`0 ${i}px`,fontSize:e.fontSize,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:i}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{minHeight:a,paddingTop:0,display:"flex",alignItems:"center"}}}}};var G=(0,J.Z)("Card",e=>{const t=(0,q.TS)(e,{cardShadow:e.boxShadowCard,cardHeadHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,cardHeadHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardHeadTabsMarginBottom:-e.padding-e.lineWidth,cardActionsLiMargin:`${e.paddingSM}px 0`,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[k(t),U(t)]}),N=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(i[a[r]]=e[a[r]]);return i};function Z(e){return e.map((i,a)=>o.createElement("li",{style:{width:`${100/e.length}%`},key:`action-${a}`},o.createElement("span",null,i)))}var ee=o.forwardRef((e,t)=>{const{prefixCls:i,className:a,rootClassName:r,extra:d,headStyle:g={},bodyStyle:m={},title:l,loading:L,bordered:v=!0,size:w,type:B,cover:K,actions:X,tabList:W,children:j,activeTabKey:Q,defaultActiveTabKey:V,tabBarExtraContent:te,hoverable:ie,tabProps:ue={}}=e,ae=N(e,["prefixCls","className","rootClassName","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:ce,direction:ge}=o.useContext(C.E_),pe=P=>{var b;(b=e.onTabChange)===null||b===void 0||b.call(e,P)},me=o.useMemo(()=>{let P=!1;return o.Children.forEach(j,b=>{b&&b.type&&b.type===h&&(P=!0)}),P},[j]),s=ce("card",i),[he,ve]=G(s),Ee=o.createElement(_.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},j),le=Q!==void 0,fe=Object.assign(Object.assign({},ue),{[le?"activeKey":"defaultActiveKey"]:le?Q:V,tabBarExtraContent:te});let de;const ne=(0,F.Z)(w),xe=!ne||ne==="default"?"large":ne,se=W&&W.length?o.createElement($.Z,Object.assign({size:xe},fe,{className:`${s}-head-tabs`,onChange:pe,items:W.map(P=>{var b;return{label:P.tab,key:P.key,disabled:(b=P.disabled)!==null&&b!==void 0?b:!1}})})):null;(l||d||se)&&(de=o.createElement("div",{className:`${s}-head`,style:g},o.createElement("div",{className:`${s}-head-wrapper`},l&&o.createElement("div",{className:`${s}-head-title`},l),d&&o.createElement("div",{className:`${s}-extra`},d)),se));const be=K?o.createElement("div",{className:`${s}-cover`},K):null,Ce=o.createElement("div",{className:`${s}-body`,style:m},L?Ee:j),ye=X&&X.length?o.createElement("ul",{className:`${s}-actions`},Z(X)):null,Se=(0,T.Z)(ae,["onTabChange"]),Fe=E()(s,{[`${s}-loading`]:L,[`${s}-bordered`]:v,[`${s}-hoverable`]:ie,[`${s}-contain-grid`]:me,[`${s}-contain-tabs`]:W&&W.length,[`${s}-${ne}`]:ne,[`${s}-type-${B}`]:!!B,[`${s}-rtl`]:ge==="rtl"},a,r,ve);return he(o.createElement("div",Object.assign({ref:t},Se,{className:Fe}),de,be,Ce,ye))}),R=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(i[a[r]]=e[a[r]]);return i},y=e=>{const{prefixCls:t,className:i,avatar:a,title:r,description:d}=e,g=R(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:m}=o.useContext(C.E_),l=m("card",t),L=E()(`${l}-meta`,i),v=a?o.createElement("div",{className:`${l}-meta-avatar`},a):null,w=r?o.createElement("div",{className:`${l}-meta-title`},r):null,B=d?o.createElement("div",{className:`${l}-meta-description`},d):null,K=w||B?o.createElement("div",{className:`${l}-meta-detail`},w,B):null;return o.createElement("div",Object.assign({},g,{className:L}),v,K)};const x=ee;x.Grid=h,x.Meta=y;var S=x}}]);