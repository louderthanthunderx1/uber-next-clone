"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"provider\": () => (/* binding */ provider),\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDYVhsMmsrI8UVc5xKX4e2OI-y-23K6r0w\",\n    authDomain: \"uber-next-clone-7f404.firebaseapp.com\",\n    projectId: \"uber-next-clone-7f404\",\n    storageBucket: \"uber-next-clone-7f404.appspot.com\",\n    messagingSenderId: \"418000185236\",\n    appId: \"1:418000185236:web:ff491b25f127a391f69181\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUNlO0FBRTNELEVBQXdDO0FBQ3hDLEtBQUssQ0FBQ0csY0FBYyxHQUFHLENBQUM7SUFDdEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQXVDO0lBQ25EQyxTQUFTLEVBQUUsQ0FBdUI7SUFDbENDLGFBQWEsRUFBRSxDQUFtQztJQUNsREMsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0FBQ3BELENBQUM7QUFFRCxFQUFzQjtBQUN0QixLQUFLLENBQUNDLEdBQUcsR0FBR1YsMkRBQWEsQ0FBQ0csY0FBYztBQUN4QyxLQUFLLENBQUNRLFFBQVEsR0FBRyxHQUFHLENBQUNWLDZEQUFrQjtBQUN2QyxLQUFLLENBQUNXLElBQUksR0FBR1Ysc0RBQU87QUFFUSIsInNvdXJjZXMiOlsid2VicGFjazovL3ViZXItbmV4dC1jbG9uZS8uL2ZpcmViYXNlLmpzPzRkOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgR29vZ2xlQXV0aFByb3ZpZGVyLCBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCcgXHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lEWVZoc01tc3JJOFVWYzV4S1g0ZTJPSS15LTIzSzZyMHdcIixcclxuICBhdXRoRG9tYWluOiBcInViZXItbmV4dC1jbG9uZS03ZjQwNC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwidWJlci1uZXh0LWNsb25lLTdmNDA0XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ1YmVyLW5leHQtY2xvbmUtN2Y0MDQuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0MTgwMDAxODUyMzZcIixcclxuICBhcHBJZDogXCIxOjQxODAwMDE4NTIzNjp3ZWI6ZmY0OTFiMjVmMTI3YTM5MWY2OTE4MVwiXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKVxyXG5jb25zdCBhdXRoID0gZ2V0QXV0aCgpXHJcblxyXG5leHBvcnQgeyBhcHAsIHByb3ZpZGVyLCBhdXRoIH0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImdldEF1dGgiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsInByb3ZpZGVyIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"tailwind-styled-components\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst Login = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, (user)=>{\n            if (user) {\n                router.push('/');\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UberLogo, {\n                src: \"http://i.ibb.co/ZMhy8ws/uber-logo.png\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Dev\\\\tutorials\\\\uber-next-clone\\\\pages\\\\login.js\",\n                lineNumber: 20,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                children: \"Login in to accesss your account\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Dev\\\\tutorials\\\\uber-next-clone\\\\pages\\\\login.js\",\n                lineNumber: 21,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeadImage, {\n                src: \"http://i.ibb.co/CsV9RYZ/login-image.png\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Dev\\\\tutorials\\\\uber-next-clone\\\\pages\\\\login.js\",\n                lineNumber: 22,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SignInButton, {\n                onClick: ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, _firebase__WEBPACK_IMPORTED_MODULE_5__.provider)\n                ,\n                children: \"Sign in with Google\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Dev\\\\tutorials\\\\uber-next-clone\\\\pages\\\\login.js\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Dev\\\\tutorials\\\\uber-next-clone\\\\pages\\\\login.js\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nconst Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\nflex flex-col h-scren w-screen p-4  \n`;\nconst UberLogo = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`\nh-20 w-auto  object-contain self-start\n`;\nconst Title = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\ntext-5xl pt-4 text-gray-500\n`;\nconst HeadImage = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`\n\n`;\nconst SignInButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`\nbg-black text-white text-center py-4 mt-8 self-center w-full\n`;\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSTtBQUNKO0FBQzZCO0FBQ3hCO0FBRTVDLEtBQUssQ0FBQ1EsS0FBSyxPQUFTLENBQUM7SUFFakIsS0FBSyxDQUFDQyxNQUFNLEdBQUdOLHNEQUFTO0lBRXhCRixnREFBUyxLQUFLLENBQUM7UUFDWEksaUVBQWtCLENBQUNDLDJDQUFJLEdBQUVJLElBQUksR0FBSSxDQUFDO1lBQzlCLEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7Z0JBQ1BELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQUc7WUFDbkIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sTUFBTSw2RUFDREMsT0FBTzs7d0ZBQ0hDLFFBQVE7Z0JBQUNDLEdBQUcsRUFBQyxDQUF1Qzs7Ozs7O3dGQUNwREMsS0FBSzswQkFBQyxDQUFnQzs7Ozs7O3dGQUN0Q0MsU0FBUztnQkFBQ0YsR0FBRyxFQUFDLENBQXlDOzs7Ozs7d0ZBQ3ZERyxZQUFZO2dCQUFDQyxPQUFPLE1BQU9kLDhEQUFlLENBQUNFLDJDQUFJLEVBQUVDLCtDQUFROzswQkFBRyxDQUU3RDs7Ozs7Ozs7Ozs7O0FBR1YsQ0FBQztBQUVELGlFQUFlQyxLQUFLLEVBQUM7QUFFckIsS0FBSyxDQUFDSSxPQUFPLEdBQUdWLHVFQUFNLENBQUM7O0FBRXZCO0FBQ0EsS0FBSyxDQUFDVyxRQUFRLEdBQUdYLHVFQUFNLENBQUM7O0FBRXhCO0FBQ0EsS0FBSyxDQUFDYSxLQUFLLEdBQUdiLHVFQUFNLENBQUM7O0FBRXJCO0FBQ0EsS0FBSyxDQUFDYyxTQUFTLEdBQUdkLHVFQUFNLENBQUM7O0FBRXpCO0FBQ0EsS0FBSyxDQUFDZSxZQUFZLEdBQUdmLDBFQUFTLENBQUM7O0FBRS9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWJlci1uZXh0LWNsb25lLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH1mcm9tICdyZWFjdCc7XHJcbmltcG9ydCB0dyBmcm9tICd0YWlsd2luZC1zdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyAgc2lnbkluV2l0aFBvcHVwLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG5pbXBvcnQgeyBhdXRoLCBwcm92aWRlciB9IGZyb20gJy4uL2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICA8VWJlckxvZ28gc3JjPVwiaHR0cDovL2kuaWJiLmNvL1pNaHk4d3MvdWJlci1sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8VGl0bGU+TG9naW4gaW4gdG8gYWNjZXNzcyB5b3VyIGFjY291bnQ8L1RpdGxlPlxyXG4gICAgICAgICAgPEhlYWRJbWFnZSBzcmM9XCJodHRwOi8vaS5pYmIuY28vQ3NWOVJZWi9sb2dpbi1pbWFnZS5wbmdcIi8+XHJcbiAgICAgICAgICA8U2lnbkluQnV0dG9uIG9uQ2xpY2s9eygpPT4gc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKX0+XHJcbiAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxyXG4gICAgICAgICAgPC9TaWduSW5CdXR0b24+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSB0dy5kaXZgXHJcbmZsZXggZmxleC1jb2wgaC1zY3JlbiB3LXNjcmVlbiBwLTQgIFxyXG5gXHJcbmNvbnN0IFViZXJMb2dvID0gdHcuaW1nYFxyXG5oLTIwIHctYXV0byAgb2JqZWN0LWNvbnRhaW4gc2VsZi1zdGFydFxyXG5gXHJcbmNvbnN0IFRpdGxlID0gdHcuZGl2YFxyXG50ZXh0LTV4bCBwdC00IHRleHQtZ3JheS01MDBcclxuYFxyXG5jb25zdCBIZWFkSW1hZ2UgPSB0dy5pbWdgXHJcblxyXG5gXHJcbmNvbnN0IFNpZ25JbkJ1dHRvbiA9IHR3LmJ1dHRvbmBcclxuYmctYmxhY2sgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBweS00IG10LTggc2VsZi1jZW50ZXIgdy1mdWxsXHJcbmAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ0dyIsInVzZVJvdXRlciIsInNpZ25JbldpdGhQb3B1cCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImF1dGgiLCJwcm92aWRlciIsIkxvZ2luIiwicm91dGVyIiwidXNlciIsInB1c2giLCJXcmFwcGVyIiwiVWJlckxvZ28iLCJzcmMiLCJUaXRsZSIsIkhlYWRJbWFnZSIsIlNpZ25JbkJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJpbWciLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "tailwind-styled-components":
/*!*********************************************!*\
  !*** external "tailwind-styled-components" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("tailwind-styled-components");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();