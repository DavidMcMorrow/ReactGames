"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/gameOver.js":
/*!****************************************!*\
  !*** ./src/app/components/gameOver.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameOver)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction GameOver(param) {\n    let { winner } = param;\n    function displayTitle() {\n        if (winner === \"X\") {\n            return \"You Win!\";\n        } else if (winner === \"O\") {\n            return \"You Lose!\";\n        } else {\n            return \"Draw\";\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        cl: option - selection,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: option - section - title,\n                children: displayTitle()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\components\\\\gameOver.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>resetGame(),\n                onMouseEnter: ()=>setHovered(mode),\n                onMouseLeave: ()=>setHovered(null),\n                style: {\n                    ...option - button,\n                    ...hovered === mode ? option - button - hover : {}\n                },\n                children: \"Rematch\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\components\\\\gameOver.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setGameMode(null),\n                onMouseEnter: ()=>setHovered(mode),\n                onMouseLeave: ()=>setHovered(null),\n                style: {\n                    ...option - button,\n                    ...hovered === mode ? option - button - hover : {}\n                },\n                children: \"Rematch Same Mode\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\components\\\\gameOver.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\components\\\\gameOver.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = GameOver;\nvar _c;\n$RefreshReg$(_c, \"GameOver\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9nYW1lT3Zlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUVoQixTQUFTQyxTQUFTLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjtJQUUvQixTQUFTQztRQUNMLElBQUdELFdBQVcsS0FBSTtZQUNkLE9BQU87UUFDWCxPQUFPLElBQUdBLFdBQVcsS0FBSTtZQUNyQixPQUFPO1FBQ1gsT0FBTTtZQUNGLE9BQU87UUFDWDtJQUNKO0lBRUEscUJBQ0ksOERBQUNFO1FBQUlDLElBQUlDLFNBQU9DOzswQkFDWiw4REFBQ0M7Z0JBQUdDLE9BQU9ILFNBQU9JLFVBQVFDOzBCQUFRUjs7Ozs7OzBCQUNsQyw4REFBQ1M7Z0JBQ0dDLFNBQVMsSUFBTUM7Z0JBQ2ZDLGNBQWMsSUFBTUMsV0FBV0M7Z0JBQy9CQyxjQUFjLElBQU1GLFdBQVc7Z0JBQy9CUCxPQUFPO29CQUNILEdBQUdILFNBQU9NLE1BQU07b0JBQ2hCLEdBQUlPLFlBQVlGLE9BQU9YLFNBQU9NLFNBQU9RLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RDswQkFDQzs7Ozs7OzBCQUdELDhEQUFDUjtnQkFDR0MsU0FBUyxJQUFNUSxZQUFZO2dCQUMzQk4sY0FBYyxJQUFNQyxXQUFXQztnQkFDL0JDLGNBQWMsSUFBTUYsV0FBVztnQkFDL0JQLE9BQU87b0JBQ0gsR0FBR0gsU0FBT00sTUFBTTtvQkFDaEIsR0FBSU8sWUFBWUYsT0FBT1gsU0FBT00sU0FBT1EsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZEOzBCQUNDOzs7Ozs7Ozs7Ozs7QUFLWDtLQXZDd0JuQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxkYXZpZFxcT25lRHJpdmVcXENvZGluZyBQcm9qZWN0c1xcUmVhY3RQcm9qZWN0c1xcUmVhY3QgR2FtZXNcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxnYW1lT3Zlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lT3Zlcih7IHdpbm5lciB9KSB7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVRpdGxlKCl7XHJcbiAgICAgICAgaWYod2lubmVyID09PSBcIlhcIil7XHJcbiAgICAgICAgICAgIHJldHVybiBcIllvdSBXaW4hXCJcclxuICAgICAgICB9IGVsc2UgaWYod2lubmVyID09PSBcIk9cIil7XHJcbiAgICAgICAgICAgIHJldHVybiBcIllvdSBMb3NlIVwiXHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gXCJEcmF3XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsPXtvcHRpb24tc2VsZWN0aW9ufT5cclxuICAgICAgICAgICAgPGgyIHN0eWxlPXtvcHRpb24tc2VjdGlvbi10aXRsZX0+e2Rpc3BsYXlUaXRsZSgpfTwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc2V0R2FtZSgpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkKG1vZGUpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb24tYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLihob3ZlcmVkID09PSBtb2RlID8gb3B0aW9uLWJ1dHRvbi1ob3ZlciA6IHt9KSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZW1hdGNoXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRHYW1lTW9kZShudWxsKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZChtb2RlKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZChudWxsKX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9uLWJ1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICAuLi4oaG92ZXJlZCA9PT0gbW9kZSA/IG9wdGlvbi1idXR0b24taG92ZXIgOiB7fSksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVtYXRjaCBTYW1lIE1vZGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgfSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdhbWVPdmVyIiwid2lubmVyIiwiZGlzcGxheVRpdGxlIiwiZGl2IiwiY2wiLCJvcHRpb24iLCJzZWxlY3Rpb24iLCJoMiIsInN0eWxlIiwic2VjdGlvbiIsInRpdGxlIiwiYnV0dG9uIiwib25DbGljayIsInJlc2V0R2FtZSIsIm9uTW91c2VFbnRlciIsInNldEhvdmVyZWQiLCJtb2RlIiwib25Nb3VzZUxlYXZlIiwiaG92ZXJlZCIsImhvdmVyIiwic2V0R2FtZU1vZGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/gameOver.js\n"));

/***/ })

});