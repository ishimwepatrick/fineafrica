(this.webpackJsonpiCountApp=this.webpackJsonpiCountApp||[]).push([[25,39],{1255:function(e,t,a){"use strict";a.r(t);a(0);var n=a(100),c=a(528),r=a(3291),o=a(542),l=a(503),i=a(2);const s=()=>Object(i.jsx)(n.a,{});t.default=()=>Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Loading"}),Object(i.jsxs)("div",{className:"mt-4",children:[Object(i.jsx)(c.default,{name:"Location",desc:"src/components/shared-components/Loading.js"}),Object(i.jsx)(c.default,{name:"Description",desc:"Loading component"}),Object(i.jsx)("div",{className:"mt-4",children:Object(i.jsxs)(l.a,{title:"Example",children:[Object(i.jsx)(s,{}),Object(i.jsx)("div",{className:"mt-4",children:Object(i.jsx)(r.a,{className:"hl-code",language:"jsx",style:o.a,children:"import React, { useState } from 'react'\nimport Loading from 'components/shared-components/Loading'\n\nexport default const Demo = () =>  {\n\treturn (\n\t\t<Loading />\n\t)\n}\n"})})]})}),Object(i.jsx)("h4",{className:"mt-4",children:"Props"}),Object(i.jsx)("div",{className:"api-container border-0 p-0",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Property"}),Object(i.jsx)("th",{children:"Description"}),Object(i.jsx)("th",{children:"Type"}),Object(i.jsx)("th",{children:"Default"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"align"}),Object(i.jsx)("td",{children:"position indicator"}),Object(i.jsx)("td",{children:"center | left | right"}),Object(i.jsx)("td",{children:"center"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"cover"}),Object(i.jsx)("td",{children:"Loading display coverage"}),Object(i.jsx)("td",{children:"inline | content | page"}),Object(i.jsx)("td",{children:"inline"})]})]})]})})]})]})},503:function(e,t,a){"use strict";var n=a(6),c=a.n(n),r=a(5),o=a.n(r),l=a(0),i=a(7),s=a.n(i),d=a(43),m=a(62),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},b=function(e){var t=e.prefixCls,a=e.className,n=e.hoverable,r=void 0===n||n,i=p(e,["prefixCls","className","hoverable"]);return l.createElement(m.a,null,(function(e){var n=(0,e.getPrefixCls)("card",t),d=s()("".concat(n,"-grid"),a,c()({},"".concat(n,"-grid-hoverable"),r));return l.createElement("div",o()({},i,{className:d}))}))},u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},h=function(e){return l.createElement(m.a,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,c=e.className,r=e.avatar,i=e.title,d=e.description,m=u(e,["prefixCls","className","avatar","title","description"]),p=a("card",n),b=s()("".concat(p,"-meta"),c),h=r?l.createElement("div",{className:"".concat(p,"-meta-avatar")},r):null,j=i?l.createElement("div",{className:"".concat(p,"-meta-title")},i):null,g=d?l.createElement("div",{className:"".concat(p,"-meta-description")},d):null,f=j||g?l.createElement("div",{className:"".concat(p,"-meta-detail")},j,g):null;return l.createElement("div",o()({},m,{className:b}),h,f)}))},j=a(502),g=a(486),f=a(487),y=a(84),x=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};var v=function(e){var t,a,n,r=l.useContext(m.b),i=r.getPrefixCls,p=r.direction,u=l.useContext(y.b),h=e.prefixCls,v=e.className,O=e.extra,E=e.headStyle,C=void 0===E?{}:E,N=e.bodyStyle,F=void 0===N?{}:N,w=e.title,S=e.loading,P=e.bordered,k=void 0===P||P,A=e.size,z=e.type,T=e.cover,B=e.actions,D=e.tabList,L=e.children,H=e.activeTabKey,M=e.defaultActiveTabKey,K=e.tabBarExtraContent,I=e.hoverable,W=e.tabProps,R=void 0===W?{}:W,J=x(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),G=i("card",h),q=0===F.padding||"0px"===F.padding?{padding:24}:void 0,Q=l.createElement("div",{className:"".concat(G,"-loading-block")}),U=l.createElement("div",{className:"".concat(G,"-loading-content"),style:q},l.createElement(g.a,{gutter:8},l.createElement(f.a,{span:22},Q)),l.createElement(g.a,{gutter:8},l.createElement(f.a,{span:8},Q),l.createElement(f.a,{span:15},Q)),l.createElement(g.a,{gutter:8},l.createElement(f.a,{span:6},Q),l.createElement(f.a,{span:18},Q)),l.createElement(g.a,{gutter:8},l.createElement(f.a,{span:13},Q),l.createElement(f.a,{span:9},Q)),l.createElement(g.a,{gutter:8},l.createElement(f.a,{span:4},Q),l.createElement(f.a,{span:3},Q),l.createElement(f.a,{span:16},Q))),V=void 0!==H,X=o()(o()({},R),(t={},c()(t,V?"activeKey":"defaultActiveKey",V?H:M),c()(t,"tabBarExtraContent",K),t)),Y=D&&D.length?l.createElement(j.a,o()({size:"large"},X,{className:"".concat(G,"-head-tabs"),onChange:function(t){e.onTabChange&&e.onTabChange(t)}}),D.map((function(e){return l.createElement(j.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(w||O||Y)&&(n=l.createElement("div",{className:"".concat(G,"-head"),style:C},l.createElement("div",{className:"".concat(G,"-head-wrapper")},w&&l.createElement("div",{className:"".concat(G,"-head-title")},w),O&&l.createElement("div",{className:"".concat(G,"-extra")},O)),Y));var Z=T?l.createElement("div",{className:"".concat(G,"-cover")},T):null,$=l.createElement("div",{className:"".concat(G,"-body"),style:F},S?U:L),_=B&&B.length?l.createElement("ul",{className:"".concat(G,"-actions")},function(e){return e.map((function(t,a){return l.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},l.createElement("span",null,t))}))}(B)):null,ee=Object(d.a)(J,["onTabChange"]),te=A||u,ae=s()(G,(a={},c()(a,"".concat(G,"-loading"),S),c()(a,"".concat(G,"-bordered"),k),c()(a,"".concat(G,"-hoverable"),I),c()(a,"".concat(G,"-contain-grid"),function(){var t;return l.Children.forEach(e.children,(function(e){e&&e.type&&e.type===b&&(t=!0)})),t}()),c()(a,"".concat(G,"-contain-tabs"),D&&D.length),c()(a,"".concat(G,"-").concat(te),te),c()(a,"".concat(G,"-type-").concat(z),!!z),c()(a,"".concat(G,"-rtl"),"rtl"===p),a),v);return l.createElement("div",o()({},ee,{className:ae}),n,Z,$,_)};v.Grid=b,v.Meta=h;t.a=v},528:function(e,t,a){"use strict";a.r(t);a(0);var n=a(2);t.default=({name:e,desc:t})=>Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsxs)("span",{className:"font-weight-bold text-dark",children:[e,":"]}),Object(n.jsxs)("span",{className:"text-gray-light",children:[" ",t]})]})},542:function(e,t,a){"use strict";t.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=25.02e4c0a6.chunk.js.map