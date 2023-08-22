"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[101],{1101:function(n,e,a){a.r(e),a.d(e,{default:function(){return R}});var r,t,i,o,s,p,d=a(5705),c=a(8007),l=(a(7427),a(168)),x=a(6487),u=x.ZP.div(r||(r=(0,l.Z)(["\n  max-width: 500px;\n  margin: 15px auto;\n  padding: 15px;\n  background-color: rgba(255, 255, 255, 0.9);\n  border-radius: 5px;\n  box-shadow: 0 15px 30px 1px grey;\n  text-align: center;\n"]))),b=((0,x.ZP)(d.l0)(t||(t=(0,l.Z)(["\n  padding: 8px;\n  border: 1px solid #2a2a2a;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 10px;\n"]))),x.ZP.span(i||(i=(0,l.Z)(["\n  font-size: 14px;\n  color: #38d2d2;\n"])))),g=x.ZP.button(o||(o=(0,l.Z)(["\n  width: 200px;\n  margin: 0 auto;\n  color: #fff;\n  padding: 15px 25px;\n  background-color: #38d2d2;\n  background-image: radial-gradient(\n      93% 87% at 87% 89%,\n      rgba(0, 0, 0, 0.23) 0%,\n      transparent 86.18%\n    ),\n    radial-gradient(\n      66% 66% at 26% 20%,\n      rgba(255, 255, 255, 0.55) 0%,\n      rgba(255, 255, 255, 0) 69.79%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25),\n    inset 0px 3px 9px rgba(255, 255, 255, 0.3),\n    inset 0px 1px 1px rgba(255, 255, 255, 0.6),\n    inset 0px -8px 36px rgba(0, 0, 0, 0.3),\n    inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  font-weight: bold;\n  font-size: 16px;\n  display: block;\n  border: 0;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n  &:hover {\n    box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset,\n      rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;\n    transform: scale(1.05);\n  }\n"]))),m=a(9434),h=a(5162),f=a(6382),j=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},w=function(n){return n.contacts.error},y=function(n){return n.filter},Z=function(n){var e=n.contacts.items,a=n.filter.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(a)}))},k=a(5008),C=a(184),z=c.Ry().shape({name:c.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Required!"),number:c.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required!")}),_=function(){var n=(0,m.I0)(),e=(0,m.v9)(j);return(0,C.jsx)(d.J9,{initialValues:{name:"",number:""},validationSchema:z,onSubmit:function(a,r){if(e.find((function(n){return n.name===a.name})))alert("".concat(a.name," is already in contacts"));else{var t={name:a.name,number:a.number,id:(0,f.x0)()};n((0,h.uK)(t)),r.resetForm()}},children:(0,C.jsxs)(d.l0,{children:[(0,C.jsx)(d.gN,{as:k.Z,name:"name",label:"Name",placeholder:"Annie Copeland",required:!0,fullWidth:!0,size:"small",margin:"normal",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",helperText:(0,C.jsx)(d.Bc,{name:"name",component:b})}),(0,C.jsx)(d.gN,{as:k.Z,type:"tel",name:"number",label:"Number",placeholder:"227-91-26",required:!0,fullWidth:!0,size:"small",margin:"normal",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",helperText:(0,C.jsx)(d.Bc,{name:"number",component:b})}),(0,C.jsx)(g,{type:"submit",children:"Add contact"})]})})},A=a(1993),P=function(){var n=(0,m.v9)(y),e=(0,m.I0)();return(0,C.jsx)(k.Z,{label:"Find contacts by name",type:"text",value:n,onChange:function(n){e((0,A.M)(n.currentTarget.value))},fullWidth:!0,size:"small",margin:"normal"})},F=x.ZP.div(s||(s=(0,l.Z)(["\n  width: 300px;\n  margin: 15px auto;\n  display: flex;\n  gap: 15px;\n  align-items: center;\n  justify-content: space-between;\n  text-align: center;\n"]))),q=x.ZP.button(p||(p=(0,l.Z)(["\n  color: #fff;\n  padding: 7px 10px;\n  background-color: #2196F3;\n  background-image: radial-gradient(\n      93% 87% at 87% 89%,\n      rgba(0, 0, 0, 0.23) 0%,\n      transparent 86.18%\n    ),\n    radial-gradient(\n      66% 66% at 26% 20%,\n      rgba(255, 255, 255, 0.55) 0%,\n      rgba(255, 255, 255, 0) 69.79%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25),\n    inset 0px 3px 9px rgba(255, 255, 255, 0.3),\n    inset 0px 1px 1px rgba(255, 255, 255, 0.6),\n    inset 0px -8px 36px rgba(0, 0, 0, 0.3),\n    inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  font-weight: bold;\n  font-size: 16px;\n  display: block;\n\n  border: 0;\n\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset,\n      rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;\n    transform: scale(1.05);\n  }\n"]))),N=function(n){var e=n.item,a=e.name,r=e.number,t=e.id,i=(0,m.I0)();return(0,C.jsxs)(F,{children:[(0,C.jsxs)("p",{children:[a," : ",r]}),(0,C.jsx)(q,{type:"button",onClick:function(){return n=t,void i((0,h.GK)(n));var n},children:"Delete"})]})},I=a(2791),B=a(1040),J=function(){return(0,C.jsx)("div",{children:(0,C.jsx)(B.CJ,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"triangle-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})},L=function(){var n=(0,m.v9)(Z),e=(0,m.v9)(v),a=(0,m.v9)(w),r=(0,m.I0)();return(0,I.useEffect)((function(){r((0,h.yF)())}),[r]),(0,C.jsxs)(C.Fragment,{children:[e?(0,C.jsx)(J,{}):(0,C.jsx)("ul",{children:n.map((function(n){return(0,C.jsx)("li",{children:(0,C.jsx)(N,{item:n})},n.id)}))}),!n.length&&!a&&!e&&(0,C.jsx)("p",{children:"There are no contacts in your phonebook"}),a&&(0,C.jsx)("p",{children:a})]})},R=function(){var n=(0,m.I0)(),e=(0,m.v9)(v),a=(0,m.v9)(j);return(0,I.useEffect)((function(){n((0,h.yF)())}),[n]),(0,C.jsx)(u,{children:(0,C.jsxs)("div",{children:[(0,C.jsx)("h1",{children:"Phonebook"}),(0,C.jsx)(_,{}),(0,C.jsx)("h2",{children:"Contacts"}),a.length>0&&(0,C.jsx)(P,{}),(0,C.jsx)("div",{children:e&&"Request in progress..."}),(0,C.jsx)(L,{})]})})}}}]);
//# sourceMappingURL=101.f21e8446.chunk.js.map