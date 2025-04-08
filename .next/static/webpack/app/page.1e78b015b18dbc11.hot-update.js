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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameModeSelection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst styles = {\n    modeSelection: {\n        position: \"absolute\",\n        top: \"50%\",\n        left: \"50%\",\n        transform: \"translate(-50%, -50%)\",\n        background: \"rgba(255, 255, 255, 0.95)\",\n        padding: \"30px\",\n        borderRadius: \"12px\",\n        boxShadow: \"0px 10px 30px rgba(0,0,0,0.2)\",\n        textAlign: \"center\",\n        zIndex: 10,\n        backdropFilter: \"blur(10px)\",\n        animation: \"fadeIn 0.5s ease-in-out\"\n    },\n    modeTitle: {\n        fontSize: \"1.5rem\",\n        marginBottom: \"1rem\",\n        fontWeight: \"bold\"\n    },\n    modeButton: {\n        display: \"block\",\n        width: \"13.75rem\",\n        margin: \"0.625rem auto\",\n        padding: \"0.75rem\",\n        fontSize: \"1.2rem\",\n        cursor: \"pointer\",\n        borderRadius: \"0.5rem\",\n        border: \"none\",\n        background: \"linear-gradient(135deg, #6e8efb, #1c429c)\",\n        color: \"white\",\n        transition: \"0.3s\"\n    },\n    modeButtonHover: {\n        transform: \"scale(1.05)\",\n        boxShadow: \"0px 4px 15px rgba(0,0,0,0.2)\",\n        cursor: \"pointer\"\n    }\n};\nfunction GameModeSelection(param) {\n    let { setGameMode } = param;\n    _s();\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function displayText(mode) {\n        if (mode === \"2P\") {\n            return \"👫 2 Player\";\n        }\n        if (true) {\n            return \"🤖 Easy Mode\";\n        } else {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.modeSelection,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: styles.modeTitle,\n                children: \"Choose Your Game Mode\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\components\\\\gameModeSelection.js\",\n                lineNumber: 63,\n                columnNumber: 11\n            }, this),\n            [\n                \"2P\",\n                \"Easy\",\n                \"Medium\",\n                \"Hard\"\n            ].map((mode)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setGameMode(mode),\n                    onMouseEnter: ()=>setHovered(mode),\n                    onMouseLeave: ()=>setHovered(null),\n                    style: {\n                        ...styles.modeButton,\n                        ...hovered === mode ? styles.modeButtonHover : {}\n                    },\n                    children: displayText(mode)\n                }, mode, false, {\n                    fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\components\\\\gameModeSelection.js\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\components\\\\gameModeSelection.js\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n}\n_s(GameModeSelection, \"mEhKvegbaT+HE5gyL2KiZdVDWeQ=\");\n_c = GameModeSelection;\nvar _c;\n$RefreshReg$(_c, \"GameModeSelection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9nYW1lTW9kZVNlbGVjdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDTztBQUVqQyxNQUFNRSxTQUFTO0lBQ1hDLGVBQWU7UUFDYkMsVUFBVTtRQUNWQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsV0FBVztRQUNYQyxZQUFZO1FBQ1pDLFNBQVM7UUFDVEMsY0FBYztRQUNkQyxXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsUUFBUTtRQUNSQyxnQkFBZ0I7UUFDaEJDLFdBQVc7SUFDYjtJQUNBQyxXQUFXO1FBQ1RDLFVBQVU7UUFDVkMsY0FBYztRQUNkQyxZQUFZO0lBQ2Q7SUFDQUMsWUFBWTtRQUNWQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsUUFBUTtRQUNSZCxTQUFTO1FBQ1RRLFVBQVU7UUFDVk8sUUFBUTtRQUNSZCxjQUFjO1FBQ2RlLFFBQVE7UUFDUmpCLFlBQVk7UUFDWmtCLE9BQU87UUFDUEMsWUFBWTtJQUNkO0lBQ0FDLGlCQUFpQjtRQUNmckIsV0FBVztRQUNYSSxXQUFXO1FBQ1hhLFFBQVE7SUFDVjtBQUNGO0FBRWUsU0FBU0ssa0JBQWtCLEtBQWU7UUFBZixFQUFFQyxXQUFXLEVBQUUsR0FBZjs7SUFDeEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUcvQiwrQ0FBUUEsQ0FBQztJQUV2QyxTQUFTZ0MsWUFBWUMsSUFBSTtRQUN2QixJQUFHQSxTQUFTLE1BQUs7WUFDZixPQUFPO1FBQ1Q7UUFDQSxJQUFHLElBQU0sRUFBQztZQUNSLE9BQU87UUFDVCxPQUNLLEVBSUo7SUFDSDtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxPQUFPbEMsT0FBT0MsYUFBYTs7MEJBQzlCLDhEQUFDa0M7Z0JBQUdELE9BQU9sQyxPQUFPYyxTQUFTOzBCQUFFOzs7Ozs7WUFDNUI7Z0JBQUM7Z0JBQU07Z0JBQVE7Z0JBQVU7YUFBTyxDQUFDc0IsR0FBRyxDQUFDLENBQUNKLHFCQUNyQyw4REFBQ0s7b0JBRUNDLFNBQVMsSUFBTVYsWUFBWUk7b0JBQzNCTyxjQUFjLElBQU1ULFdBQVdFO29CQUMvQlEsY0FBYyxJQUFNVixXQUFXO29CQUMvQkksT0FBTzt3QkFDTCxHQUFHbEMsT0FBT2tCLFVBQVU7d0JBQ3BCLEdBQUlXLFlBQVlHLE9BQU9oQyxPQUFPMEIsZUFBZSxHQUFHLENBQUMsQ0FBQztvQkFDeEQ7OEJBRUtLLFlBQVlDO21CQVRSQTs7Ozs7Ozs7Ozs7QUFlbkI7R0FyQzBCTDtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxkYXZpZFxcT25lRHJpdmVcXENvZGluZyBQcm9qZWN0c1xcUmVhY3RQcm9qZWN0c1xcbXktbmV4dC1hcHBcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxnYW1lTW9kZVNlbGVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBtb2RlU2VsZWN0aW9uOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSlcIixcclxuICAgICAgcGFkZGluZzogXCIzMHB4XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMnB4XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCIwcHggMTBweCAzMHB4IHJnYmEoMCwwLDAsMC4yKVwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHpJbmRleDogMTAsXHJcbiAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTBweClcIixcclxuICAgICAgYW5pbWF0aW9uOiBcImZhZGVJbiAwLjVzIGVhc2UtaW4tb3V0XCIsXHJcbiAgICB9LFxyXG4gICAgbW9kZVRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgIH0sXHJcbiAgICBtb2RlQnV0dG9uOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgd2lkdGg6IFwiMTMuNzVyZW1cIixcclxuICAgICAgbWFyZ2luOiBcIjAuNjI1cmVtIGF1dG9cIixcclxuICAgICAgcGFkZGluZzogXCIwLjc1cmVtXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMC41cmVtXCIsXHJcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZlOGVmYiwgIzFjNDI5YylcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCIwLjNzXCIsXHJcbiAgICB9LFxyXG4gICAgbW9kZUJ1dHRvbkhvdmVyOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwiMHB4IDRweCAxNXB4IHJnYmEoMCwwLDAsMC4yKVwiLFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lTW9kZVNlbGVjdGlvbih7IHNldEdhbWVNb2RlIH0pIHtcclxuICAgIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUZXh0KG1vZGUpe1xyXG4gICAgICBpZihtb2RlID09PSBcIjJQXCIpe1xyXG4gICAgICAgIHJldHVybiBcIvCfkasgMiBQbGF5ZXJcIjtcclxuICAgICAgfVxyXG4gICAgICBpZihcIkVhc3lcIil7XHJcbiAgICAgICAgcmV0dXJuIFwi8J+kliBFYXN5IE1vZGVcIlxyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIGlmKFwiTWVkaXVtXCIpe1xyXG4gICAgICAgIHJldHVybiBcIvCfjq8gTWVkaXVtIE1vZGVcIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIkhhcmRcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubW9kZVNlbGVjdGlvbn0+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlcy5tb2RlVGl0bGV9PkNob29zZSBZb3VyIEdhbWUgTW9kZTwvaDI+XHJcbiAgICAgICAgICB7W1wiMlBcIiwgXCJFYXN5XCIsIFwiTWVkaXVtXCIsIFwiSGFyZFwiXS5tYXAoKG1vZGUpID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17bW9kZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRHYW1lTW9kZShtb2RlKX1cclxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWQobW9kZSl9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkKG51bGwpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAuLi5zdHlsZXMubW9kZUJ1dHRvbixcclxuICAgICAgICAgICAgICAgIC4uLihob3ZlcmVkID09PSBtb2RlID8gc3R5bGVzLm1vZGVCdXR0b25Ib3ZlciA6IHt9KSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGlzcGxheVRleHQobW9kZSl9XHJcbiAgICAgICAgICAgICAgey8qIHttb2RlID09PSBcIjJQXCIgPyBcIvCfkasgMiBQbGF5ZXJcIiA6IG1vZGUgPT09IFwiRWFzeVwiID8gXCLwn6SWIEVhc3kgTW9kZVwiIDogXCLwn46vIE1lZGl1bSBNb2RlXCJ9ICovfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJtb2RlU2VsZWN0aW9uIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJ0ZXh0QWxpZ24iLCJ6SW5kZXgiLCJiYWNrZHJvcEZpbHRlciIsImFuaW1hdGlvbiIsIm1vZGVUaXRsZSIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsIm1vZGVCdXR0b24iLCJkaXNwbGF5Iiwid2lkdGgiLCJtYXJnaW4iLCJjdXJzb3IiLCJib3JkZXIiLCJjb2xvciIsInRyYW5zaXRpb24iLCJtb2RlQnV0dG9uSG92ZXIiLCJHYW1lTW9kZVNlbGVjdGlvbiIsInNldEdhbWVNb2RlIiwiaG92ZXJlZCIsInNldEhvdmVyZWQiLCJkaXNwbGF5VGV4dCIsIm1vZGUiLCJkaXYiLCJzdHlsZSIsImgyIiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/gameModeSelection.js\n"));

/***/ })

});