(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,function(_,a,t){_.exports={wrapper:"Calculator_wrapper__3IpKC",input:"Calculator_input__31Mul",btn:"Calculator_btn__3zVrq",num:"Calculator_num__2Eqrb",clearAC:"Calculator_clearAC__a05O7",btnClearAC:"Calculator_btnClearAC__GWD3G",math:"Calculator_math__3j-k1"}},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Project_Calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3__),Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(D_Project_Calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),calculator=_useState2[0],setCalculator=_useState2[1],calcBtn=[];return[7,4,1,".",8,5,2,0,9,6,3].forEach((function(_){calcBtn.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.num,onClick:function(_){setCalculator(calculator+_.target.value)},value:_,children:_},_))})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,children:calculator}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.clearAC,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btnClearAC,onClick:function(){return setCalculator(calculator.substring(0,calculator.length-1))},children:"Clear"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btnClearAC,onClick:function(){return setCalculator("")},children:"AC"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,children:[calcBtn,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.math,onClick:function onClick(e){try{setCalculator(String(eval(calculator)).length>3&&String(eval(calculator)).includes(".")?String(eval(calculator).toFixed(4)):String(eval(calculator)))}catch(error){console.log(error)}},value:"=",children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.math,onClick:function(_){return setCalculator(calculator+_.target.value)},value:"+",children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.math,onClick:function(_){return setCalculator(calculator+_.target.value)},value:"-",children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.math,onClick:function(_){return setCalculator(calculator+_.target.value)},value:"/",children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.math,onClick:function(_){return setCalculator(calculator+_.target.value)},value:"*",children:"*"})]})]})};__webpack_exports__.a=Calculator},,,,,,,function(_,a,t){},function(_,a,t){},function(_,a,t){"use strict";t.r(a);var e=t(0),l=t(2),c=t.n(l),r=t(4),u=t.n(r),n=(t(12),t(13),t(5));var s=function(){return Object(e.jsx)("div",{className:"app",children:Object(e.jsx)(n.a,{})})},o=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(a){var t=a.getCLS,e=a.getFID,l=a.getFCP,c=a.getLCP,r=a.getTTFB;t(_),e(_),l(_),c(_),r(_)}))};u.a.render(Object(e.jsx)(c.a.StrictMode,{children:Object(e.jsx)(s,{})}),document.getElementById("root")),o()}],[[14,1,2]]]);
//# sourceMappingURL=main.1cc432a1.chunk.js.map