(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(3),r=a.n(i),c=a(1),l=a(4),u=a(5),d=a(6),o=a(8),m=a(7),h=(a(14),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={add:"",list:[]},n}return Object(d.a)(a,[{key:"enter",value:function(e,t){this.setState(Object(l.a)({},e,t))}},{key:"addItems",value:function(){var e={id:1+Math.random(),value:this.state.add},t=Object(c.a)(this.state.list);t.push(e),this.setState({list:t,add:""})}},{key:"deleteItem",value:function(e){var t=Object(c.a)(this.state.list).filter((function(t){return t.id!==e}));this.setState({list:t})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"box"},s.a.createElement("h1",{className:"heading"},"My TODOLIST"),s.a.createElement("p",{className:"para"}," Add Your Items."),s.a.createElement("div",{className:"all"},s.a.createElement("input",{type:"text",name:"add",className:"in",value:this.state.add,onChange:function(t){return e.enter(t.target.name,t.target.value)}}),s.a.createElement("button",{className:"btn",onClick:function(){return e.addItems()}},"Add")),this.state.list.map((function(t){return s.a.createElement("div",{className:"dot"},s.a.createElement("div",{key:t.id},t.value," ",s.a.createElement("button",{onClick:function(){return e.deleteItem(t.id)}},"Delete this item.")))})))}}]),a}(s.a.Component));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d8866c45.chunk.js.map