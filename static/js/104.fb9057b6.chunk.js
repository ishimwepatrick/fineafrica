(this.webpackJsonpiCountApp=this.webpackJsonpiCountApp||[]).push([[104],{3284:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t(46),i=t(543),n=t(947),o=t(486),r=t(487),l=t(503),m=t(420),d=t(120),j=t(456),h=t(51),g=t(47),u=t(1136),b=t(2);const p={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},x={resetPassword:g.d,showAuthMessage:g.e,showLoading:g.f,hideAuthMessage:g.b,showSuccessMessage:g.g,hideSuccessMessage:g.c};s.default=Object(c.b)((({auth:e})=>{const{loading:s,message:t,showMessage:a,showSuccess:c}=e;return{loading:s,message:t,showMessage:a,showSuccess:c}}),x)((e=>{const[s]=i.a.useForm(),{hideAuthMessage:t,hideSuccessMessage:g,showLoading:x,resetPassword:O,loading:w,showMessage:y,showSuccess:f,message:v}=e;let M=Object(h.g)();Object(a.useEffect)((()=>{y&&setTimeout((()=>{t()}),3e3),f&&setTimeout((()=>{g()}),4e3)}));const N=Object(c.c)((e=>e.theme.currentTheme));return Object(b.jsxs)("div",{className:"h-100",style:p,children:[Object(b.jsx)(u.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:y?1:0,marginBottom:y?20:0},children:Object(b.jsx)(n.a,{type:"error",showIcon:!0,message:v})}),Object(b.jsx)(u.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:f?1:0,marginBottom:f?20:0},children:Object(b.jsx)(n.a,{type:"success",showIcon:!0,message:v})}),Object(b.jsx)("div",{className:"container d-flex flex-column justify-content-center",children:Object(b.jsx)(o.a,{justify:"center",children:Object(b.jsx)(r.a,{xs:20,sm:18,md:16,lg:10,children:Object(b.jsx)(l.a,{children:Object(b.jsxs)("div",{className:"my-2",children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("img",{className:"img-fluid",src:"/img/"+("light"===N?"logo.png":"logo-white.png"),alt:""}),Object(b.jsx)("h3",{className:"mt-3 font-weight-bold",children:"Forgot Password?"}),Object(b.jsx)("p",{className:"mb-4",children:"Enter your Email to reset password"})]}),Object(b.jsxs)(o.a,{justify:"center",children:[Object(b.jsx)(r.a,{xs:24,sm:24,md:20,lg:20,children:Object(b.jsxs)(i.a,{form:s,layout:"vertical",name:"forget-password",onFinish:e=>{x(),O(e)},children:[Object(b.jsx)(i.a.Item,{name:"email",rules:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],children:Object(b.jsx)(m.a,{placeholder:"Email Address",prefix:Object(b.jsx)(j.a,{className:"text-primary"})})}),Object(b.jsx)(i.a.Item,{children:Object(b.jsx)(d.a,{loading:w,type:"primary",htmlType:"submit",block:!0,children:w?"Sending":"Send"})})]})}),Object(b.jsx)(r.a,{xs:20,sm:20,md:20,lg:20,className:"text-center",children:Object(b.jsxs)("p",{children:["Back to ",Object(b.jsx)("a",{href:"/#",onClick:e=>{e.preventDefault(),M.push("/auth/login")},children:"Login"})]})})]})]})})})})})]})}))}}]);
//# sourceMappingURL=104.fb9057b6.chunk.js.map