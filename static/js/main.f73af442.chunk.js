(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(9),c=n(10),d=n(14),u=n(11),s=n(15),p=[{title:"Lets",index:"FIRST",content:r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://source.unsplash.com/random/250x150",alt:"",style:{width:"250px",height:"150px"}})),r.a.createElement("h2",null,"Hello"),r.a.createElement("div",null,"We will"))},{title:"Rock",index:"SECOND",content:r.a.createElement("div",null,r.a.createElement("h2",null,"SecondTab"),r.a.createElement("div",null,"We will"))},{title:"It",index:"THIRD",content:r.a.createElement("table",{style:{border:"2px solid #aaa"}},r.a.createElement("thead",null,r.a.createElement("tr",{style:{textAlign:"center"}},r.a.createElement("th",null,"Hi, it is a table header"))),r.a.createElement("tbody",null,r.a.createElement("tr",{rowSpan:"2",style:{border:"2px solid #aaa"}},r.a.createElement("td",{style:{border:"2px solid #aaa"}},"First cell"),r.a.createElement("td",{style:{border:"2px solid #aaa"}},"Second cell")),r.a.createElement("tr",{rowSpan:"2",style:{border:"2px solid #aaa"}},r.a.createElement("td",{style:{border:"2px solid #aaa"}},"First cell"),r.a.createElement("td",{style:{border:"2px solid #aaa"}},"Second cell"))))}],m=n(2),x=n(3);function b(){var e=Object(m.a)(["\n  position: relative;\n  width: 350px;\n  margin: 5% auto;\n"]);return b=function(){return e},e}function v(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-bottom: -5px;\n  z-index: 1;\n"]);return v=function(){return e},e}function h(){var e=Object(m.a)(["\n  position: absolute;\n  left: 0;\n  padding: 15px 15px;\n  border-radius: 5px;\n  border-right: #ddd 2px solid;\n  border-bottom: #ddd 2px solid;\n  background-color: #eee;\n  width: inherit;\n  z-index: -1;\n  text-align: center;\n"]);return h=function(){return e},e}function f(){var e=Object(m.a)(["\n  padding: 10px 7px;\n  width: 75px;\n  font-size: 16px;\n  border-radius: 5px;\n  border-right: #ccc 2px solid;\n  border-bottom: "," 2px solid;\n  background-color: #eee;\n  cursor: pointer;\n  text-align: center;\n"]);return f=function(){return e},e}var E=x.a.div(f(),function(e){return e.primary?"#eee":"#ccc"}),w=x.a.div(h()),y=x.a.div(v()),g=x.a.div(b()),k=function(e){var t=e.data,n=e.active;e.tabindex,e.tabcontent;return t.map(function(e){var t=e.index,a=e.content;return n===t&&r.a.createElement(w,{key:t,tabindex:t},a)})},O=n(1),j=n.n(O);E.propTypes={onClick:j.a.func.isRequired,tabindex:j.a.string.isRequired,primary:j.a.bool};var S=function(e){var t=e.data,n=e.handleActive,a=e.active;return t.map(function(e){var t=e.title,i=e.index;return r.a.createElement(E,{key:i,onClick:function(){return n(i)},tabindex:i,primary:a===i},t)})},C=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={index:"FIRST"},n.handleClick=function(e){var t=e;n.setState({index:t})},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.index;return r.a.createElement(g,null,r.a.createElement(y,null,r.a.createElement(S,{data:p,handleActive:this.handleClick,active:e})),r.a.createElement(k,{data:p,active:e}))}}]),t}(a.Component);n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.f73af442.chunk.js.map