(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,t,n){e.exports={form:"HabitForm_form__1NEhd",header:"HabitForm_header__1cSnt",main:"HabitForm_main__3mGu1",closeBtn:"HabitForm_closeBtn__18eEp",title:"HabitForm_title__10X5Z",labelTitle:"HabitForm_labelTitle__16bNx",inputTitle:"HabitForm_inputTitle__3v8Ah",inputComment:"HabitForm_inputComment__3gJ4A",labelRepeat:"HabitForm_labelRepeat__3DrT5",inputRepeat:"HabitForm_inputRepeat__3PwIJ",labelColor:"HabitForm_labelColor__3lWYQ",inputColor:"HabitForm_inputColor__3cXgn",labelRemind:"HabitForm_labelRemind__14pH3",inputRemind:"HabitForm_inputRemind__36vhw",inputBtn:"HabitForm_inputBtn__2l4mB"}},,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){e.exports={form:"Profile_form__C5Lzc"}},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n(2),r=n.n(l),c=n(11),i=n.n(c),s=(n(18),n(3)),o=n(4),b=n(6),u=n(5),h=(n(19),n(7)),j=n(8),m=n.n(j),p=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={tel:""},e.handleChange=function(t){var n=t.target;e.setState(Object(h.a)({},n.name,n.value))},e.handleSubmit=function(e){e.preventDefault()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.tel;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:m.a.header,children:Object(a.jsx)("button",{type:"button",className:m.a.headerButton,children:"\u041d\u0430\u0437\u0430\u0434"})}),Object(a.jsxs)("form",{action:"submit",className:m.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"tel",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(a.jsx)("input",{type:"tel",name:"tel",placeholder:"+380",value:e,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"\u0414\u0430\u043b\u0456"})]})]})}}]),n}(l.Component),d=n(9),O=n.n(d),g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",surname:"",tel:""},e.handleChange=function(t){var n=t.target;e.setState(Object(h.a)({},n.name,n.value))},e.handleSubmit=function(t){t.preventDefault(),alert(JSON.stringify(e.state,null,2))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.surname,l=e.tel;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:O.a.header,children:Object(a.jsxs)("button",{type:"button",className:O.a.headerButton,children:[" ","\u041d\u0430\u0437\u0430\u0434"]})}),Object(a.jsxs)("form",{action:"submit",className:O.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"name",children:"\u0406\u043c'\u044f"}),Object(a.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"surname",children:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"}),Object(a.jsx)("input",{type:"text",name:"surname",value:n,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"tel",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(a.jsx)("input",{type:"tel",name:"tel",placeholder:"+380",value:l,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"\u0414\u0430\u043b\u0456"})]})]})}}]),n}(l.Component),v=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[{name:"Iryna",surname:"Zalata",tel:"+380668185655"}]},e.onBtnClick=function(e){return"\u0412\u0445\u0456\u0434"===e.target.textContent?(console.log("log-in"),Object(a.jsx)(p,{})):"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"===e.target.textContent?(console.log("reg"),Object(a.jsx)(g,{})):void 0},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("section",{children:[Object(a.jsx)("button",{type:"button",onClick:this.onBtnClick,children:"\u0412\u0445\u0456\u0434"}),Object(a.jsx)("button",{type:"button",onClick:this.onBtnClick,children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]}),Object(a.jsx)(p,{}),Object(a.jsx)(g,{})]})}}]),n}(l.Component),x=n(12),C=n.n(x),f=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={avatar:"",height:"",weight:"",birthdate:""},e.handleChange=function(t){var n=t.target,a=n.name,l=n.value;e.setState(Object(h.a)({},a,l))},e.handleSubmit=function(t){t.preventDefault(),alert(JSON.stringify(e.state,null,2))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.avatar,n=e.height,l=e.weight,r=e.birthdate;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",children:"\u041d\u0430\u0437\u0430\u0434"}),Object(a.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u0444\u043e\u0442\u043e",Object(a.jsx)("input",{type:"file",value:t,onChange:this.handleChange,name:"avatar"})]}),Object(a.jsxs)("label",{children:["\u0417\u0440\u0456\u0441\u0442",Object(a.jsx)("input",{type:"number",value:n,onChange:this.handleChange,name:"height",min:"0"}),"\u0441\u043c"]}),Object(a.jsxs)("label",{children:["\u0412\u0430\u0433\u0430",Object(a.jsx)("input",{type:"number",value:l,onChange:this.handleChange,name:"weight",min:"0"}),"\u043a\u0433"]}),Object(a.jsxs)("label",{children:["\u0414\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f",Object(a.jsx)("input",{type:"date",value:r,onChange:this.handleChange,name:"birthdate"})]}),Object(a.jsx)("button",{type:"submit",children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"})]})]})}}]),n}(l.Component);f.defaultProps={};var A=f,y=n(1),F=n.n(y),S=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",comment:"",repeat:"",color:"#390093",remind:!0},e.handleSubmit=function(t){t.preventDefault(),alert(JSON.stringify(e.state,null,2))},e.handleChange=function(t){var n=t.target,a=n.name,l=n.value,r=n.type,c=n.checked;e.setState(Object(h.a)({},a,"checkbox"===r?c:l))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.comment,l=e.repeat,r=e.color,c=e.remind;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:F.a.form,style:{backgroundImage:"url(".concat("data:image/png;base64,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",")"),backgroundPosition:"bottom right",backgroundRepeat:"no-repeat"},children:[Object(a.jsxs)("div",{className:F.a.header,style:{backgroundColor:this.state.color},children:[Object(a.jsx)("button",{type:"button",className:F.a.closeBtn}),Object(a.jsx)("h2",{className:F.a.title,children:"\u041d\u043e\u0432\u0430 \u0417\u0432\u0438\u0447\u043a\u0430"}),Object(a.jsx)("label",{htmlFor:"title",className:F.a.labelTitle,children:"\u041d\u0430\u0437\u0432\u0430"}),Object(a.jsx)("input",{className:F.a.inputTitle,name:"title",type:"text",value:t,onChange:this.handleChange,placeholder:"\u0417\u0430\u0440\u044f\u0434\u043a\u0430"})]}),Object(a.jsxs)("div",{className:F.a.main,children:[Object(a.jsx)("label",{htmlFor:"comment",className:F.a.label,children:"\u041c\u043e\u0442\u0438\u0432\u0443\u0439 \u0441\u0435\u0431\u0435"}),Object(a.jsx)("input",{name:"comment",type:"textarea",value:n,onChange:this.handleChange,className:F.a.inputComment,placeholder:"..."}),Object(a.jsxs)("label",{className:F.a.labelRepeat,children:["\u041f\u043e\u0432\u0442\u043e\u0440\u044e\u0432\u0430\u0442\u0438"," ",Object(a.jsxs)("select",{name:"repeat",value:l,onChange:this.handleChange,className:F.a.inputRepeat,children:[Object(a.jsx)("option",{value:"1",children:"\u041a\u043e\u0436\u043d\u0443 \u0433\u043e\u0434\u0438\u043d\u0443 "}),Object(a.jsx)("option",{value:"2",children:"\u041a\u043e\u0436\u043d\u0456 \u0434\u0432\u0456 \u0433\u043e\u0434\u0438\u043d\u0438 "})]})]}),Object(a.jsxs)("label",{className:F.a.labelColor,children:["\u041e\u0431\u0435\u0440\u0438 \u043a\u043e\u043b\u0456\u0440",Object(a.jsx)("input",{name:"color",type:"color",value:r,onChange:this.handleChange,className:F.a.inputColor})]}),Object(a.jsxs)("label",{htmlFor:"remind",className:F.a.labelRemind,children:["\u041d\u0430\u0433\u0430\u0434\u0430\u0442\u0438 \u043c\u0435\u043d\u0456",Object(a.jsx)("input",{name:"remind",type:"checkbox",checked:c,onChange:this.handleChange,className:F.a.inputRemind})]}),Object(a.jsx)("button",{type:"submit",className:F.a.inputBtn,children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})]})}}]),n}(l.Component),B=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{}),Object(a.jsx)(A,{}),Object(a.jsx)(S,{})]})}}]),n}(l.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.554f2723.chunk.js.map