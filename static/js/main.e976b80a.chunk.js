(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(32)},30:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=t(9),l=t(1),u=t(2);function d(){var e=Object(l.a)(["\n  position: relative;\n  width: 60%\n  margin: 0 auto\n  padding: 25px 0px\n"]);return d=function(){return e},e}function s(){var e=Object(l.a)(["\n  display: flex\n  flex-direction: row\n  justify-content: flex-start;\n  box-shadow: 0px 1px 3px 0px #999\n  background-color: ",";\n  z-index: 1;\n"]);return s=function(){return e},e}function m(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 15px 15px;\n  box-shadow: 0px 1px 3px 0px #999\n  z-index: -1;\n  text-align: center;\n  margin-top: 10px;\n  background-color: ","\n  color: ","\n"]);return m=function(){return e},e}function h(){var e=Object(l.a)(["\n  padding: 13px 20px\n  min-width: 40px\n  cursor: pointer\n  text-align: center\n  margin-right: 0px\n  transition: all 0.5s\n  padding-top: 20px\n  padding-bottom: 20px\n  background-color: ","\n  color: ","\n  &:hover {\n    background-color: ","\n    color: ","\n  }\n"]);return h=function(){return e},e}var g=u.a.div(h(),function(e){return e.background},function(e){return e.color},function(e){e.primary;return"#aaa"},function(e){return e.color}),p=u.a.div(m(),function(e){return e.background},function(e){return e.color}),b=u.a.div(s(),function(e){return e.background}),f=u.a.div(d()),x=t(3),v=t(4),k=t(6),y=t(5),w=t(7),E=t(17),O={light:{background:"#eee",color:"#333"},dark:{background:"#333",color:"#fff"}};function j(){var e=Object(l.a)(["\n  margin: 3% 0;\n  background-color: #ddd;\n  color: #000;\n  padding: 10px;\n  border-width: 0;\n  outline: none;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px #999;\n\n  &:active {\n    background: #eee;\n  }\n"]);return j=function(){return e},e}var _=u.a.button(j()),T=function(e){return a.a.createElement(_,e,"ChangeTheme")},C=a.a.createContext({theme:O.light,toggleTheme:function(){}}),B=function(e){function n(e){var t;return Object(x.a)(this,n),(t=Object(k.a)(this,Object(y.a)(n).call(this,e))).state={theme:O.light,toggleTheme:t.toggleTheme},t.toggleTheme=function(){t.setState(function(e){return{theme:e.theme===O.dark?O.light:O.dark}})},t}return Object(w.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){return a.a.createElement(C.Provider,{value:Object(E.a)({},this.state)},a.a.createElement(T,{onClick:this.toggleTheme}),this.props.children)}}]),n}(a.a.Component),A=function(e){return function(n){function t(){return Object(x.a)(this,t),Object(k.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,n),Object(v.a)(t,[{key:"render",value:function(){var n=this;return a.a.createElement(C.Consumer,null,function(t){return a.a.createElement(e,Object.assign({},n.props,{context:t}))})}}]),t}(a.a.Component)},D=A(function(e){var n=e.tabData,t=e.handleActive,r=e.active,o=e.context;return a.a.createElement(b,{background:o.theme.background,color:o.theme.color},n.map(function(e){var n=e.title,i=e.index;return a.a.createElement(g,{key:i,onClick:function(){return t(i)},tabindex:i,primary:r===i,background:o.theme.background,color:o.theme.color},n)}))}),S=A(function(e){var n=e.context;return a.a.createElement(p,{background:n.theme.background,color:n.theme.color},a.a.createElement("div",null,a.a.createElement("img",{src:"https://source.unsplash.com/random/250x150",alt:"img",style:{width:"250px",height:"150px"}})),a.a.createElement("h2",null,"Hello"),a.a.createElement("div",null,"We will"))});function R(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 25px;\n  background-color: ",";\n  color: ",";\n  box-shadow: 0px 3px 3px 0px #999;\n  border-top: 1px solid ",";\n  margin-bottom: 10px;\n  transition: all 0.3s;\n"]);return R=function(){return e},e}function Y(){var e=Object(l.a)(["\n  width: 8px;\n  height: 8px;\n  border-right: 2px solid #999;\n  border-bottom: 2px solid #999;\n  align-self: center;\n  transition: all 0.3s;\n  transform-origin: center center;\n  transform: rotate(",");\n"]);return Y=function(){return e},e}function I(){var e=Object(l.a)(["\n  color: ",";\n"]);return I=function(){return e},e}function F(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n  padding: 17px 25px;\n  background-color: ",";\n  color: ",";\n  box-shadow: 0px 1px 3px 0px #999;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-top: ",";\n"]);return F=function(){return e},e}function H(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px auto;\n  transition: all 0.3s;\n"]);return H=function(){return e},e}var W=u.a.div(H()),L=u.a.div(F(),function(e){return e.background},function(e){return e.color},function(e){return e.isClicked?"10px":"0"}),N=u.a.div(I(),function(e){e.isPrimary;return"#999"}),P=u.a.div(Y(),function(e){return e.isClicked?"-135deg":"45deg"}),z=u.a.div(R(),function(e){return e.background},function(e){return e.color},function(e){return e.background}),J=A(function(e){var n=e.text,t=e.isActive,o=e.context;return a.a.createElement(r.Fragment,null,t&&a.a.createElement(z,{background:o.theme.background,color:o.theme.color},a.a.createElement(N,null,n),a.a.createElement(N,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos maiores, fugiat suscipit ab id quia unde maxime ad.")))}),q=A(function(e){var n=e.accordionData,t=e.handleActive,o=e.active,i=e.context;return n.map(function(e){var n=e.primaryText,c=e.secondaryText,l=e.index;return a.a.createElement(r.Fragment,{key:l},a.a.createElement(L,{onClick:function(){return t(l)},isClicked:o===l,background:i.theme.background,color:i.theme.color},a.a.createElement(N,{isPrimary:!0},n),a.a.createElement(N,null,c),a.a.createElement(P,{isClicked:o===l})),o===l&&a.a.createElement(J,{text:c,isActive:o===l}))})});function G(){var e=Object(l.a)(["\n  width: ",";\n  text-align: ",";\n"]);return G=function(){return e},e}function K(){var e=Object(l.a)(["\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  border-bottom: 1px solid #eaeaea;\n  padding: 7px 20px;\n"]);return K=function(){return e},e}function M(){var e=Object(l.a)(["\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  border-bottom: 1px solid #eaeaea;\n  padding: 7px 20px;\n  color: #ccc;\n  font-weight: 400;\n"]);return M=function(){return e},e}function V(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-template-rows: repeat(",", minmax(50px, 1fr));\n  width: 100%;\n  margin: 0 auto;\n  box-shadow: 0px 1px 3px 0px #999;\n  background-color: ",";\n  color: ","\n  border-radius: 3px;\n  font-size: 13px;\n  margin-top: 10px;\n"]);return V=function(){return e},e}var $=u.a.div(V(),function(e){return e.tableTitle.length},function(e){return e.tableContent.length+1},function(e){return e.background},function(e){return e.color}),Q=u.a.div(M()),U=u.a.div(K()),X=u.a.div(G(),function(e){return e.main?"150px":"100px"},function(e){return e.right?"right":"left"}),Z=function(e){return e.tableContent.map(function(e){return a.a.createElement(U,{key:e.name},Object.values(e).map(function(e,n){return n<1?a.a.createElement(X,{key:e+n,main:!0},e):a.a.createElement(X,{key:n,right:!0},e)}))})},ee=function(e){var n=e.tableTitle;return a.a.createElement(Q,null,n.map(function(e,n){var t=n<1;return a.a.createElement(X,{key:e,main:t,right:!t},e)}))},ne=A(function(e){var n=e.titles,t=e.content,o=e.context;return a.a.createElement(r.Fragment,null,a.a.createElement($,{tableTitle:n,tableContent:t,background:o.theme.background,color:o.theme.color},a.a.createElement(ee,{tableTitle:n}),a.a.createElement(Z,{tableContent:t})))}),te="FIRST",re="SECOND",ae="THIRD",oe=[{title:"Accordions",index:"FIRST"},{title:"Table",index:"SECOND"},{title:"Snackbars",index:"THIRD"}],ie=[{primaryText:"Just primary text",secondaryText:"Here is some optional Text",index:"AFIRST"},{primaryText:"I am Batman",secondaryText:"",index:"ASECOND"},{primaryText:"He is not a hero",secondaryText:"",index:"ATHIRD"}],ce=["Name","Height","Mass","Hair Color","Skin Color","Eye Color","Birth Year","Gender"],le=[{name:"Luke Skywalker",height:"172",mass:"77",hair_color:"blond",skin_color:"fair",eye_color:"blue",birth_year:"19BBY",gender:"male"},{name:"C-3PO",height:"167",mass:"75",hair_color:"n/a",skin_color:"gold",eye_color:"yellow",birth_year:"112BBY",gender:"n/a"},{name:"R2-D2",height:"96",mass:"32",hair_color:"n/a",skin_color:"white, blue",eye_color:"red",birth_year:"33BBY",gender:"n/a"},{name:"Darth Vader",height:"202",mass:"136",hair_color:"none",skin_color:"white",eye_color:"yellow",birth_year:"41.9BBY",gender:"male"},{name:"Leia Organa",height:"150",mass:"49",hair_color:"brown",skin_color:"light",eye_color:"brown",birth_year:"19BBY",gender:"female"},{name:"Owen Lars",height:"178",mass:"120",hair_color:"brown, grey",skin_color:"light",eye_color:"blue",birth_year:"52BBY",gender:"male"},{name:"Beru Whitesun lars",height:"165",mass:"75",hair_color:"brown",skin_color:"light",eye_color:"blue",birth_year:"47BBY",gender:"female"},{name:"R5-D4",height:"97",mass:"32",hair_color:"n/a",skin_color:"white, red",eye_color:"red",birth_year:"unknown",gender:"n/a"},{name:"Biggs Darklighter",height:"183",mass:"84",hair_color:"black",skin_color:"light",eye_color:"brown",birth_year:"24BBY",gender:"male"},{name:"Obi-Wan Kenobi",height:"182",mass:"77",hair_color:"auburn, white",skin_color:"fair",eye_color:"blue-gray",birth_year:"57BBY",gender:"male"}],ue=function(e){return function(n){function t(){var e,n;Object(x.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(k.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(a)))).state={activeAccordion:""},n.handleAccordionClick=function(e){n.setState(function(n){return{activeAccordion:n.activeAccordion!==e?e:""}})},n}return Object(w.a)(t,n),Object(v.a)(t,[{key:"render",value:function(){var n=this.state.activeAccordion;return a.a.createElement(e,Object.assign({},this.props,{handleActiveAcc:this.handleAccordionClick,activeAcc:n}))}}]),t}(a.a.Component)},de=t(11),se=function(e){var n=Object(r.useState)(e),t=Object(c.a)(n,2),a=t[0],o=t[1];return[a,function(e){o(e)}]};se.propTypes={defaultTab:t.n(de).a.string.isRequired};var me=se,he=ue(function(e){var n=e.handleActiveAcc,t=e.activeAcc,o=oe,i=me("FIRST"),l=Object(c.a)(i,2),u=l[0],d=l[1];return a.a.createElement(f,null,a.a.createElement(B,null,a.a.createElement(r.Fragment,null,a.a.createElement(D,{handleActive:d,active:u,tabData:o}),te===u&&a.a.createElement(W,null,a.a.createElement(q,{accordionData:ie,handleActive:n,active:t})),re===u&&a.a.createElement(ne,{titles:ce,content:le}),ae===u&&a.a.createElement(S,null))))});t(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.e976b80a.chunk.js.map