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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameOver)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction GameOver(param) {\n    let { winner, resetGame, setGameMode } = param;\n    _s();\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const REMATCH = \"Rematch\";\n    const REMATCH_DIFF_MODE = \"Rematch Different Mode\";\n    function displayTitle() {\n        console.log(\"winner\", winner);\n        if (winner === \"X\") {\n            return \"X Won!\";\n        } else if (winner === \"O\") {\n            return \"O Won!\";\n        } else {\n            return \"Its a Draw!\";\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"option-selection\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"option-section-title\",\n                children: displayTitle()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\components\\\\gameOver.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>resetGame(),\n                onMouseEnter: ()=>setHovered(REMATCH),\n                onMouseLeave: ()=>setHovered(null),\n                className: \"option-button \".concat(hovered === REMATCH ? \"option-button-hover\" : \"\"),\n                children: REMATCH\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\components\\\\gameOver.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    setGameMode(null);\n                    resetGame();\n                },\n                onMouseEnter: ()=>setHovered(REMATCH_DIFF_MODE),\n                onMouseLeave: ()=>setHovered(null),\n                className: \"option-button \".concat(hovered === REMATCH_DIFF_MODE ? \"option-button-hover\" : \"\"),\n                children: \"Rematch Different Mode\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\components\\\\gameOver.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\components\\\\gameOver.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(GameOver, \"mEhKvegbaT+HE5gyL2KiZdVDWeQ=\");\n_c = GameOver;\nvar _c;\n$RefreshReg$(_c, \"GameOver\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9nYW1lT3Zlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFFaEIsU0FBU0MsU0FBUyxLQUFrQztRQUFsQyxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFLEdBQWxDOztJQUMvQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTU8sVUFBVTtJQUNoQixNQUFNQyxvQkFBb0I7SUFFMUIsU0FBU0M7UUFDTEMsUUFBUUMsR0FBRyxDQUFDLFVBQVVUO1FBRXRCLElBQUdBLFdBQVcsS0FBSTtZQUNkLE9BQU87UUFDWCxPQUFPLElBQUdBLFdBQVcsS0FBSTtZQUNyQixPQUFPO1FBQ1gsT0FBTTtZQUNGLE9BQU87UUFDWDtJQUNKO0lBRUEscUJBQ0ksOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBd0JKOzs7Ozs7MEJBQ3RDLDhEQUFDTTtnQkFDR0MsU0FBUyxJQUFNYjtnQkFDZmMsY0FBYyxJQUFNWCxXQUFXQztnQkFDL0JXLGNBQWMsSUFBTVosV0FBVztnQkFDL0JPLFdBQVcsaUJBQWtFLE9BQWpEUixZQUFZRSxVQUFVLHdCQUF3QjswQkFFN0VBOzs7Ozs7MEJBRUQsOERBQUNRO2dCQUNHQyxTQUFTO29CQUFPWixZQUFZO29CQUFPRDtnQkFBVztnQkFDOUNjLGNBQWMsSUFBTVgsV0FBV0U7Z0JBQy9CVSxjQUFjLElBQU1aLFdBQVc7Z0JBQy9CTyxXQUFXLGlCQUE0RSxPQUEzRFIsWUFBWUcsb0JBQW9CLHdCQUF3QjswQkFDdkY7Ozs7Ozs7Ozs7OztBQUtYO0dBdEN3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGF2aWRcXE9uZURyaXZlXFxDb2RpbmcgUHJvamVjdHNcXFJlYWN0UHJvamVjdHNcXFJlYWN0IEdhbWVzXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZ2FtZU92ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZU92ZXIoeyB3aW5uZXIsIHJlc2V0R2FtZSwgc2V0R2FtZU1vZGUgfSkge1xyXG4gICAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBSRU1BVENIID0gXCJSZW1hdGNoXCJcclxuICAgIGNvbnN0IFJFTUFUQ0hfRElGRl9NT0RFID0gXCJSZW1hdGNoIERpZmZlcmVudCBNb2RlXCJcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5VGl0bGUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndpbm5lclwiLCB3aW5uZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHdpbm5lciA9PT0gXCJYXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJYIFdvbiFcIlxyXG4gICAgICAgIH0gZWxzZSBpZih3aW5uZXIgPT09IFwiT1wiKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiTyBXb24hXCJcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkl0cyBhIERyYXchXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbi1zZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm9wdGlvbi1zZWN0aW9uLXRpdGxlXCI+e2Rpc3BsYXlUaXRsZSgpfTwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc2V0R2FtZSgpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkKFJFTUFUQ0gpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgb3B0aW9uLWJ1dHRvbiAke2hvdmVyZWQgPT09IFJFTUFUQ0ggPyBcIm9wdGlvbi1idXR0b24taG92ZXJcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICB7UkVNQVRDSH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRHYW1lTW9kZShudWxsKTsgcmVzZXRHYW1lKCl9fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkKFJFTUFUQ0hfRElGRl9NT0RFKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZChudWxsKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG9wdGlvbi1idXR0b24gJHtob3ZlcmVkID09PSBSRU1BVENIX0RJRkZfTU9ERSA/IFwib3B0aW9uLWJ1dHRvbi1ob3ZlclwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlbWF0Y2ggRGlmZmVyZW50IE1vZGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgfSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdhbWVPdmVyIiwid2lubmVyIiwicmVzZXRHYW1lIiwic2V0R2FtZU1vZGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsIlJFTUFUQ0giLCJSRU1BVENIX0RJRkZfTU9ERSIsImRpc3BsYXlUaXRsZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/gameOver.js\n"));

/***/ })

});