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

/***/ "(app-pages-browser)/./src/app/components/gameModeSelection.js":
/*!*************************************************!*\
  !*** ./src/app/components/gameModeSelection.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameModeSelection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst styles = {\n    modeSelection: {\n        position: \"absolute\",\n        top: \"50%\",\n        left: \"50%\",\n        transform: \"translate(-50%, -50%)\",\n        background: \"rgba(255, 255, 255, 0.95)\",\n        padding: \"30px\",\n        borderRadius: \"12px\",\n        boxShadow: \"0px 10px 30px rgba(0,0,0,0.2)\",\n        textAlign: \"center\",\n        zIndex: 10,\n        backdropFilter: \"blur(10px)\",\n        animation: \"fadeIn 0.5s ease-in-out\"\n    },\n    modeTitle: {\n        fontSize: \"1.5rem\",\n        marginBottom: \"1rem\",\n        fontWeight: \"bold\"\n    },\n    modeButton: {\n        display: \"block\",\n        width: \"13.75rem\",\n        margin: \"0.625rem auto\",\n        padding: \"0.75rem\",\n        fontSize: \"1.2rem\",\n        cursor: \"pointer\",\n        borderRadius: \"0.5rem\",\n        border: \"none\",\n        background: \"linear-gradient(135deg, #6e8efb, #1c429c)\",\n        color: \"white\",\n        transition: \"0.3s\"\n    },\n    modeButtonHover: {\n        transform: \"scale(1.05)\",\n        boxShadow: \"0px 4px 15px rgba(0,0,0,0.2)\",\n        cursor: \"pointer\"\n    }\n};\nfunction GameModeSelection(param) {\n    let { setGameMode } = param;\n    _s();\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.modeSelection,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: styles.modeTitle,\n                children: \"Choose Your Game Mode\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\components\\\\gameModeSelection.js\",\n                lineNumber: 51,\n                columnNumber: 11\n            }, this),\n            [\n                \"2P\",\n                \"Easy\",\n                \"Medium\"\n            ].map((mode)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setGameMode(mode),\n                    onMouseEnter: ()=>setHovered(mode),\n                    onMouseLeave: ()=>setHovered(null),\n                    style: {\n                        ...styles.modeButton,\n                        ...hovered === mode ? styles.modeButtonHover : {}\n                    },\n                    children: mode === \"2P\" ? \"👫 2 Player\" : mode === \"Easy\" ? \"🤖 Easy Mode\" : \"🎯 Medium Mode\"\n                }, mode, false, {\n                    fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\components\\\\gameModeSelection.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\components\\\\gameModeSelection.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(GameModeSelection, \"mEhKvegbaT+HE5gyL2KiZdVDWeQ=\");\n_c = GameModeSelection;\nvar _c;\n$RefreshReg$(_c, \"GameModeSelection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9nYW1lTW9kZVNlbGVjdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDTztBQUVqQyxNQUFNRSxTQUFTO0lBQ1hDLGVBQWU7UUFDYkMsVUFBVTtRQUNWQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsV0FBVztRQUNYQyxZQUFZO1FBQ1pDLFNBQVM7UUFDVEMsY0FBYztRQUNkQyxXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsUUFBUTtRQUNSQyxnQkFBZ0I7UUFDaEJDLFdBQVc7SUFDYjtJQUNBQyxXQUFXO1FBQ1RDLFVBQVU7UUFDVkMsY0FBYztRQUNkQyxZQUFZO0lBQ2Q7SUFDQUMsWUFBWTtRQUNWQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsUUFBUTtRQUNSZCxTQUFTO1FBQ1RRLFVBQVU7UUFDVk8sUUFBUTtRQUNSZCxjQUFjO1FBQ2RlLFFBQVE7UUFDUmpCLFlBQVk7UUFDWmtCLE9BQU87UUFDUEMsWUFBWTtJQUNkO0lBQ0FDLGlCQUFpQjtRQUNmckIsV0FBVztRQUNYSSxXQUFXO1FBQ1hhLFFBQVE7SUFDVjtBQUNGO0FBRWUsU0FBU0ssa0JBQWtCLEtBQWU7UUFBZixFQUFFQyxXQUFXLEVBQUUsR0FBZjs7SUFDeEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUcvQiwrQ0FBUUEsQ0FBQztJQUl2QyxxQkFDSSw4REFBQ2dDO1FBQUlDLE9BQU9oQyxPQUFPQyxhQUFhOzswQkFDOUIsOERBQUNnQztnQkFBR0QsT0FBT2hDLE9BQU9jLFNBQVM7MEJBQUU7Ozs7OztZQUM1QjtnQkFBQztnQkFBTTtnQkFBUTthQUFTLENBQUNvQixHQUFHLENBQUMsQ0FBQ0MscUJBQzdCLDhEQUFDQztvQkFFQ0MsU0FBUyxJQUFNVCxZQUFZTztvQkFDM0JHLGNBQWMsSUFBTVIsV0FBV0s7b0JBQy9CSSxjQUFjLElBQU1ULFdBQVc7b0JBQy9CRSxPQUFPO3dCQUNMLEdBQUdoQyxPQUFPa0IsVUFBVTt3QkFDcEIsR0FBSVcsWUFBWU0sT0FBT25DLE9BQU8wQixlQUFlLEdBQUcsQ0FBQyxDQUFDO29CQUN4RDs4QkFFS1MsU0FBUyxPQUFPLGdCQUFnQkEsU0FBUyxTQUFTLGlCQUFpQjttQkFUL0RBOzs7Ozs7Ozs7OztBQWNuQjtHQXhCMEJSO0tBQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGRhdmlkXFxPbmVEcml2ZVxcQ29kaW5nIFByb2plY3RzXFxSZWFjdFByb2plY3RzXFxteS1uZXh0LWFwcFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdhbWVNb2RlU2VsZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIG1vZGVTZWxlY3Rpb246IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjMwcHhcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEycHhcIixcclxuICAgICAgYm94U2hhZG93OiBcIjBweCAxMHB4IDMwcHggcmdiYSgwLDAsMCwwLjIpXCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgekluZGV4OiAxMCxcclxuICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigxMHB4KVwiLFxyXG4gICAgICBhbmltYXRpb246IFwiZmFkZUluIDAuNXMgZWFzZS1pbi1vdXRcIixcclxuICAgIH0sXHJcbiAgICBtb2RlVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgfSxcclxuICAgIG1vZGVCdXR0b246IHtcclxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICB3aWR0aDogXCIxMy43NXJlbVwiLFxyXG4gICAgICBtYXJnaW46IFwiMC42MjVyZW0gYXV0b1wiLFxyXG4gICAgICBwYWRkaW5nOiBcIjAuNzVyZW1cIixcclxuICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIwLjVyZW1cIixcclxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmU4ZWZiLCAjMWM0MjljKVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcIjAuM3NcIixcclxuICAgIH0sXHJcbiAgICBtb2RlQnV0dG9uSG92ZXI6IHtcclxuICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMDUpXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDE1cHggcmdiYSgwLDAsMCwwLjIpXCIsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVNb2RlU2VsZWN0aW9uKHsgc2V0R2FtZU1vZGUgfSkge1xyXG4gICAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubW9kZVNlbGVjdGlvbn0+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlcy5tb2RlVGl0bGV9PkNob29zZSBZb3VyIEdhbWUgTW9kZTwvaDI+XHJcbiAgICAgICAgICB7W1wiMlBcIiwgXCJFYXN5XCIsIFwiTWVkaXVtXCJdLm1hcCgobW9kZSkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXttb2RlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEdhbWVNb2RlKG1vZGUpfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZChtb2RlKX1cclxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyZWQobnVsbCl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIC4uLnN0eWxlcy5tb2RlQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgLi4uKGhvdmVyZWQgPT09IG1vZGUgPyBzdHlsZXMubW9kZUJ1dHRvbkhvdmVyIDoge30pLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttb2RlID09PSBcIjJQXCIgPyBcIvCfkasgMiBQbGF5ZXJcIiA6IG1vZGUgPT09IFwiRWFzeVwiID8gXCLwn6SWIEVhc3kgTW9kZVwiIDogXCLwn46vIE1lZGl1bSBNb2RlXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIm1vZGVTZWxlY3Rpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInRleHRBbGlnbiIsInpJbmRleCIsImJhY2tkcm9wRmlsdGVyIiwiYW5pbWF0aW9uIiwibW9kZVRpdGxlIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0IiwibW9kZUJ1dHRvbiIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcmdpbiIsImN1cnNvciIsImJvcmRlciIsImNvbG9yIiwidHJhbnNpdGlvbiIsIm1vZGVCdXR0b25Ib3ZlciIsIkdhbWVNb2RlU2VsZWN0aW9uIiwic2V0R2FtZU1vZGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsImRpdiIsInN0eWxlIiwiaDIiLCJtYXAiLCJtb2RlIiwiYnV0dG9uIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/gameModeSelection.js\n"));

/***/ })

});