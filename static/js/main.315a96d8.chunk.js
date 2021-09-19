(this["webpackJsonphealthcare-dashboard-poc"]=this["webpackJsonphealthcare-dashboard-poc"]||[]).push([[0],{1583:function(e,t,r){"use strict";r.r(t);r(63),r(64);var a=r(54),n=r.n(a),c=r(4),s=r(33),i=r.n(s),o=r(55),l=r(17),j=r(0),d=r(7),b=r.n(d);function h(e){return new Promise((function(t){return setTimeout(t,e)}))}var u=r(1),x=j.createContext(void 0);function m(e){var t=e.children,r=Object(c.g)(),a=j.useState(null),n=Object(l.a)(a,2),s=n[0],d=n[1],m=j.useState(!1),O=Object(l.a)(m,2),p=O[0],f=O[1],v=j.useState(null),g=Object(l.a)(v,2),y=g[0],k=g[1];j.useEffect((function(){var e=localStorage.getItem("user");e&&d(JSON.parse(e))}),[]);var w={user:s,isLoading:p,error:y,login:function(e,t){return Object(o.a)(i.a.mark((function a(){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return f(!0),a.next=3,h(2e3);case 3:if(e){a.next=7;break}return k(new Error("Name is required!")),f(!1),a.abrupt("return");case 7:n={role:t,id:b.a.datatype.uuid(),firstName:e,lastName:b.a.name.lastName()},d(n),f(!1),localStorage.setItem("user",JSON.stringify(n)),r.push("/dashboard");case 12:case"end":return a.stop()}}),a)})))()},logout:function(){d(null),localStorage.removeItem("user"),r.push("/")},clearError:function(){k(null)}};return Object(u.jsx)(x.Provider,{value:w,children:t})}function O(){var e=j.useContext(x);if(void 0===e)throw new Error('"useUser" must be used inside a "UserProvider"');return e}var p,f=r(16);!function(e){e.Doctor="Doctor",e.SingleUser="Single User"}(p||(p={}));var v=j.createContext(void 0);function g(e){var t=e.user,r=e.children;return Object(u.jsx)(v.Provider,{value:{user:t},children:r})}function y(){var e=j.useContext(v);if(void 0===e)throw new Error('"useUser" must be used inside a "UserProvider"');var t=e.user;return Object(f.a)(Object(f.a)({},t),{},{isDoctor:function(){return t.role===p.Doctor},isSingleUser:function(){return t.role===p.SingleUser}})}var k=r(30);function w(e){var t=e.children;return Object(u.jsx)(k.a,{color:"text.white",bg:"bg.primary",display:"flex",flexDirection:"column",minHeight:"100vh",children:t})}function N(e){var t=e.children;return Object(u.jsx)("div",{style:{flex:1,padding:20},children:t})}function S(){return Object(u.jsx)("footer",{style:{textAlign:"center",borderTop:"2px solid white"},children:Object(u.jsxs)("p",{children:[(new Date).getFullYear()," \xa9 ",b.a.company.companyName()]})})}var D=r(15),C=r(1584),P=r(1585);function U(e){var t=e.children,r=O().logout;return Object(u.jsx)(C.a,{sx:{px:4},"aria-label":"Main navigation",actions:Object(u.jsx)(P.a,{onClick:r,children:"Logout"}),children:t})}function I(e){var t=e.to,r=e.children;return Object(u.jsx)(C.a.Link,{as:D.c,to:t,sx:{width:110,"&:focus, &:hover":{outline:"none"}},children:r})}var A,L=r(14),E=r(29),F=r(3),M=r(1586),J=r(1587),T=r(1588),z=r(1589),H=r(1597),R=r(1590),W=r(1591),B=r(1592),Y=r(1593),q=r(62),_=r(21),G={repo:{name:_.name,url:"https://github.com/sitek94/"+_.name},project:{name:"Healthcare Dashboard PoC",url:_.homepage}},K=["label"];function Q(){var e=O(),t=e.login,r=e.isLoading,a=e.error,n=e.clearError;return Object(u.jsx)(w,{children:Object(u.jsxs)(k.a,{mx:"auto",width:340,children:[Object(u.jsx)(k.a,{as:"header",display:"flex",justifyContent:"center",pt:5,pb:3,children:Object(u.jsx)(M.a,{icon:q.a,size:60,sx:{bg:"text.primary",color:"text.inverse","> svg":{width:"85%"}}})}),Object(u.jsx)("main",{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=e.target,a=r.name.value,n=r.role.value;t(a,n)},children:[Object(u.jsx)(J.a,{as:"h1",color:"text.primary",textAlign:"center",fontSize:4,fontWeight:300,mb:3,children:"Sign in to Dashboard"}),a&&Object(u.jsx)(T.a,{variant:"danger",my:3,children:Object(u.jsxs)(k.a,{mx:2,children:[Object(u.jsx)(z.a,{color:"text.primary",children:a.message}),Object(u.jsx)(H.a,{onClick:n,sx:{float:"right"}})]})}),Object(u.jsxs)(T.a,{sx:{color:"text.primary",bg:"bg.tertiary",borderColor:"border.secondary",p:20},children:[Object(u.jsxs)(R.a,{mt:0,children:[Object(u.jsx)(R.a.Label,{htmlFor:"firstName",children:"Name"}),Object(u.jsx)(W.a,{id:"name",name:"name",type:"text",block:!0,contrast:!0})]}),Object(u.jsxs)(R.a,{children:[Object(u.jsx)(R.a.Label,{children:"Role"}),Object(u.jsxs)(V,{children:[Object(u.jsx)(X,{name:"role",label:"Single User",id:p.SingleUser,value:p.SingleUser,defaultChecked:!0}),Object(u.jsx)(X,{name:"role",label:"Doctor",id:p.Doctor,value:p.Doctor})]})]}),Object(u.jsx)(B.a,{type:"submit",disabled:r,width:"100%",display:"block",mt:20,children:r?"Signing in...":"Sign in"})]})]})}),Object(u.jsxs)(T.a,{as:"footer",sx:{mt:3,textAlign:"center",borderColor:"border.primary",color:"text.primary",bg:"bg.primary"},children:["Want to learn more?\xa0",Object(u.jsx)(Y.a,{href:G.repo.url,children:"Check the code"}),"."]})]})})}var V=F.d.div.attrs({className:"radio-group color-bg-primary"})(A||(A=Object(E.a)(["\n  > label {\n    width: 50%;\n  }\n"])));function X(e){var t=e.label,r=Object(L.a)(e,K);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(f.a)({className:"radio-input",type:"radio"},r)),Object(u.jsx)("label",{className:"radio-label ",htmlFor:r.id,children:t})]})}function Z(){return Object(u.jsxs)("div",{className:"markdown-body",children:[Object(u.jsx)("h1",{children:"My Account"}),Object(u.jsxs)(k.a,{sx:{maxWidth:"360px"},children:[Object(u.jsxs)(R.a,{children:[Object(u.jsx)(R.a.Label,{htmlFor:"firstName",children:"First Name"}),Object(u.jsx)(W.a,{id:"firstName",type:"text",block:!0,contrast:!0})]}),Object(u.jsxs)(R.a,{children:[Object(u.jsx)(R.a.Label,{htmlFor:"lastName",children:"Last Name"}),Object(u.jsx)(W.a,{id:"lastName",type:"text",block:!0,contrast:!0})]})]}),Object(u.jsx)(B.a,{children:"Save"})]})}function $(){var e=y();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:["Hello, ",e.firstName]}),Object(u.jsx)("img",{src:b.a.image.avatar(),alt:e.firstName+" avatar"}),Object(u.jsx)("p",{children:b.a.lorem.paragraph(5)}),Object(u.jsx)("p",{children:b.a.lorem.paragraph(5)})]})}var ee=r(18),te=r.n(ee);function re(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Your Integrations"}),Object(u.jsx)("ul",{children:te()(10).map((function(){return b.a.helpers.contextualCard()})).map((function(e){var t=e.company,r=e.website;return Object(u.jsxs)("li",{children:[t.name," \u2014 ",r]},t.name)}))})]})}function ae(){return{text:b.a.lorem.word(),color:b.a.internet.color()}}function ne(){return{id:b.a.datatype.uuid(),name:b.a.fake("{{name.firstName}} {{name.lastName}}"),email:b.a.internet.email(),phone:b.a.phone.phoneNumber(),age:b.a.datatype.number({min:18,max:70}),tags:te()(b.a.datatype.number({min:1,max:3})).map(ae)}}function ce(e){var t=e.columns,r=e.rows,a=e.renderCell;return Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:t.map((function(e,t){return Object(u.jsx)("th",{style:{textTransform:"capitalize",textAlign:"left"},children:e},t)}))})}),Object(u.jsx)("tbody",{children:r.map((function(e,r){return Object(u.jsx)("tr",{children:t.map((function(t){return a(t,e)}))},r)}))})]})}var se=r(1594);function ie(){return Object(u.jsxs)("div",{className:"markdown-body",children:[Object(u.jsxs)("h1",{children:["Overview of ",b.a.address.cityName()," Practice"]}),Object(u.jsx)("h2",{children:"Patients list:"}),Object(u.jsx)(ce,{columns:["name","age","email","phone","tags"],rows:(e=10,te()(e).map(ne)),renderCell:function(e,t){var r=t[e];if("name"===e)return Object(u.jsx)("td",{children:Object(u.jsx)(D.b,{to:"/dashboard/"+t.id,children:r})});if(Array.isArray(r)){var a=r.map((function(e){return e.text})).join(", ");return Object(u.jsx)("td",{children:Object(u.jsx)(se.a,{title:a,children:a})})}return Object(u.jsx)("td",{children:r})}})]});var e}var oe=te()(10).map((function(){return Object(f.a)({id:b.a.datatype.uuid()},b.a.helpers.userCard())}));function le(){return Object(u.jsxs)("div",{className:"markdown-body",children:[Object(u.jsx)("h1",{children:"Reports"}),Object(u.jsx)("h2",{children:"Patients reports:"}),Object(u.jsx)("ul",{children:oe.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(D.b,{to:"/dashboard/"+e.id,children:e.name})},e.id)}))})]})}function je(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Settings"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Practice Details"}),Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Practice Name"}),Object(u.jsx)("input",{type:"text"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Practice Details"}),Object(u.jsx)("textarea",{})]})]}),Object(u.jsx)("button",{children:"Save"})]})]})}var de=b.a.helpers.userCard();function be(){var e=Object(c.h)().patientId;return Object(u.jsxs)("div",{className:"markdown-body",children:[Object(u.jsx)(D.b,{to:"/dashboard",children:"\u2190 Back to Dashboard"}),Object(u.jsxs)("h1",{children:["Patient: ",de.name]}),Object(u.jsxs)("p",{children:["Patient ID: ",e]}),Object(u.jsx)("img",{src:b.a.image.avatar(),alt:"user avatar"}),Object(u.jsx)("p",{children:b.a.lorem.paragraph(5)}),Object(u.jsx)("p",{children:b.a.lorem.paragraph(5)})]})}function he(){var e=O().user;return e?Object(u.jsx)(g,{user:e,children:Object(u.jsx)(xe,{})}):Object(u.jsx)(ue,{})}function ue(){return Object(u.jsxs)(c.d,{children:[Object(u.jsx)(c.b,{exact:!0,path:"/",component:Q}),Object(u.jsx)(c.a,{to:"/"})]})}function xe(){var e=y();return e.isDoctor()?Object(u.jsx)(Oe,{}):e.isSingleUser()?Object(u.jsx)(me,{}):null}function me(){return Object(u.jsxs)(w,{children:[Object(u.jsxs)(U,{children:[Object(u.jsx)(I,{to:"/dashboard",children:"Dashboard"}),Object(u.jsx)(I,{to:"/integrations",children:"Integrations"}),Object(u.jsx)(I,{to:"/my-account",children:"My Account"})]}),Object(u.jsx)(N,{children:Object(u.jsxs)(c.d,{children:[Object(u.jsx)(c.b,{path:"/dashboard",component:$}),Object(u.jsx)(c.b,{path:"/integrations",component:re}),Object(u.jsx)(c.b,{path:"/my-account",component:Z}),Object(u.jsx)(c.a,{to:"/dashboard"})]})}),Object(u.jsx)(S,{})]})}function Oe(){return Object(u.jsxs)(w,{children:[Object(u.jsxs)(U,{children:[Object(u.jsx)(I,{to:"/dashboard",children:"Dashboard"}),Object(u.jsx)(I,{to:"/reports",children:"Reports"}),Object(u.jsx)(I,{to:"/my-account",children:"My Account"}),Object(u.jsx)(I,{to:"/settings",children:"Settings"})]}),Object(u.jsx)(N,{children:Object(u.jsxs)(c.d,{children:[Object(u.jsx)(c.b,{exact:!0,path:"/dashboard",component:ie}),Object(u.jsx)(c.b,{path:"/dashboard/:patientId",component:be}),Object(u.jsx)(c.b,{path:"/reports",component:le}),Object(u.jsx)(c.b,{path:"/settings",component:je}),Object(u.jsx)(c.b,{path:"/my-account",component:Z})]})}),Object(u.jsx)(S,{})]})}var pe=r(1595),fe=r(1596);function ve(e){var t=e.children;return Object(u.jsx)(pe.a,{colorMode:"night",children:Object(u.jsx)("div",{"data-color-mode":"dark","data-dark-theme":"dark",children:Object(u.jsx)(fe.a,{children:Object(u.jsx)(D.a,{basename:_.name,children:Object(u.jsx)(m,{children:t})})})})})}n.a.render(Object(u.jsx)(ve,{children:Object(u.jsx)(he,{})}),document.getElementById("root"))},21:function(e){e.exports=JSON.parse('{"name":"healthcare-dashboard-poc","author":"Maciek Sitkowski <msitkowski94@gmail.com>","homepage":"https://sitek94.github.io/healthcare-dashboard-poc/","license":"MIT","scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","format":"prettier --write \\"**/*.{js,jsx,ts,tsx,json,md}\\""},"dependencies":{"@primer/components":"^29.0.0","@primer/css":"^17.11.0","@primer/octicons-react":"^15.1.0","faker":"^5.5.3","lodash":"^4.17.21","node-sass":"^6.0.1","react":"^17.0.2","react-dom":"^17.0.2","react-router-dom":"^5.3.0","react-scripts":"4.0.3","styled-components":"^5.3.1"},"devDependencies":{"@types/faker":"^5.5.8","@types/lodash":"^4.14.173","@types/node":"^16.9.1","@types/react":"^17.0.21","@types/react-dom":"^17.0.9","@types/react-router-dom":"^5.1.9","prettier":"^2.4.1","typescript":"^4.4.3"},"eslintConfig":{"extends":["react-app"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')}},[[1583,1,2]]]);
//# sourceMappingURL=main.315a96d8.chunk.js.map