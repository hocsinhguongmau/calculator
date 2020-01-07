(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var E_project_react_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),E_project_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),E_project_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),E_project_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),E_project_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),E_project_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_components_Display_Display__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),_components_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8),Layout=function(_Component){function Layout(){var _getPrototypeOf2,_this;Object(E_project_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Layout);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(E_project_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,(_getPrototypeOf2=Object(E_project_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(Layout)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={initialValue:0,hasOperator:!1},_this.numberHandler=function(e){e.persist(),_this.setState((function(t,a){return{initialValue:0===t.initialValue?e.target.value:t.initialValue+e.target.value,hasOperator:!1}}))},_this.operatorHandler=function(e){e.persist(),_this.setState((function(t,a){if(!1===t.hasOperator)return{initialValue:t.initialValue+e.target.value,hasOperator:!0};var r=Object(E_project_react_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(_this.state.initialValue);return r.splice(r.length-1,1),{initialValue:r.join("")+e.target.value}}))},_this.clearScreenHandler=function(){_this.setState({initialValue:0})},_this.calculateHandler=function(){_this.setState((function(prevState,props){return{initialValue:eval(prevState.initialValue)}}))},_this}return Object(E_project_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Layout,_Component),Object(E_project_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Layout,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"columns is-centered is-gapless"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"column is-half"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1",{className:"title"},"Calculator"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Display_Display__WEBPACK_IMPORTED_MODULE_7__.a,{currentDisplay:this.state.initialValue}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_8__.a,{numberClicked:this.numberHandler,operatorClicked:this.operatorHandler,clearScreen:this.clearScreenHandler,calculateFunction:this.calculateHandler}))))}}]),Layout}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=Layout},,,,function(e,t,a){"use strict";var r=a(0),_=a.n(r);t.a=function(e){return _.a.createElement("div",{className:"Display"},e.currentDisplay)}},function(e,t,a){"use strict";var r=a(0),_=a.n(r),c=function(e){return e.children},l=function(e){return _.a.createElement("button",{className:e.classes,value:e.val,"data-text":e.dataText,onClick:e.clicked},e.children)},n=function(e){return _.a.createElement(c,null,_.a.createElement("div",{className:"column is-one-quarter Operators"},_.a.createElement(l,{clicked:e.clickOperator,dataText:"+",val:"+"},"+")),_.a.createElement("div",{className:"column is-one-quarter  Operators"},_.a.createElement(l,{clicked:e.clickOperator,dataText:"-",val:"-"},"-")),_.a.createElement("div",{className:"column is-one-quarter Operators"},_.a.createElement(l,{clicked:e.clickOperator,dataText:"x",val:"*"},"x")),_.a.createElement("div",{className:"column is-one-quarter Operators"},_.a.createElement(l,{clicked:e.clickOperator,dataText:"\xf7",val:"/"},"\xf7")))},i=function(e){return _.a.createElement(c,null,_.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{clicked:e.clickNumber,val:"7"},"7")),_.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{clicked:e.clickNumber,val:"8"},"8")),_.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{clicked:e.clickNumber,val:"9"},"9")),_.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{clicked:e.clickNumber,val:"4"},"4")),_.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{clicked:e.clickNumber,val:"5"},"5")),_.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{clicked:e.clickNumber,val:"6"},"6")),_.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{clicked:e.clickNumber,val:"1"},"1")),_.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{clicked:e.clickNumber,val:"2"},"2")),_.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{clicked:e.clickNumber,val:"3"},"3")),_.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{clicked:e.clickNumber,val:"0"},"0")),_.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{clicked:e.clickNumber,val:"."},".")))},o=function(e){return _.a.createElement(l,{clicked:e.calculate,val:"="},"=")},s=function(e){return _.a.createElement("div",{className:"column is-one-third"},_.a.createElement(l,{val:"clear",clicked:e.clear},"C"))};t.a=function(e){return _.a.createElement(c,null,_.a.createElement("div",{className:"columns is-gapless is-multiline"},_.a.createElement(n,{clickOperator:e.operatorClicked}),_.a.createElement("div",{className:"column is-three-quarter"},_.a.createElement("div",{className:"columns is-gapless is-multiline Numbers"},_.a.createElement(i,{clickNumber:e.numberClicked}),_.a.createElement(s,{clear:e.clearScreen}))),_.a.createElement("div",{className:"column is-one-quarter Equal"},_.a.createElement(o,{calculate:e.calculateFunction}))))}},,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),_=a.n(r),c=a(2),l=a.n(c),n=a(3);a(17);var i=function(){return _.a.createElement("div",{className:"App"},_.a.createElement(n.a,null))},o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(_.a.createElement(i,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/calculator","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(t,e)}))}}()}],[[12,1,2]]]);
//# sourceMappingURL=main.9b92145f.chunk.js.map