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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameModeSelection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst styles = {\n    modeSelection: {\n        position: \"absolute\",\n        top: \"50%\",\n        left: \"50%\",\n        transform: \"translate(-50%, -50%)\",\n        background: \"rgba(255, 255, 255, 0.95)\",\n        padding: \"30px\",\n        borderRadius: \"12px\",\n        boxShadow: \"0px 10px 30px rgba(0,0,0,0.2)\",\n        textAlign: \"center\",\n        zIndex: 10,\n        backdropFilter: \"blur(10px)\",\n        animation: \"fadeIn 0.5s ease-in-out\"\n    },\n    modeTitle: {\n        fontSize: \"1.5rem\",\n        marginBottom: \"1rem\",\n        fontWeight: \"bold\"\n    },\n    modeButton: {\n        display: \"block\",\n        width: \"13.75rem\",\n        margin: \"0.625rem auto\",\n        padding: \"0.75rem\",\n        fontSize: \"1.2rem\",\n        cursor: \"pointer\",\n        borderRadius: \"0.5rem\",\n        border: \"none\",\n        background: \"linear-gradient(135deg, #6e8efb, #1c429c)\",\n        color: \"white\",\n        transition: \"0.3s\"\n    },\n    modeButtonHover: {\n        transform: \"scale(1.05)\",\n        boxShadow: \"0px 4px 15px rgba(0,0,0,0.2)\",\n        cursor: \"pointer\"\n    }\n};\nfunction GameModeSelection(param) {\n    let { setGameMode } = param;\n    _s();\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function displayText(mode) {\n        if (mode === \"2P\") {\n            return \"👫 2 Player\";\n        }\n        if (mode === \"Easy\") {\n            return \"🤖 Easy Mode\";\n        } else if (mode === \"Medium\") {\n            return \"🎯 Medium Mode\";\n        } else {\n            return \" 🧠Hard\";\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.modeSelection,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: styles.modeTitle,\n                children: \"Choose Your Game Mode\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\components\\\\gameModeSelection.js\",\n                lineNumber: 61,\n                columnNumber: 11\n            }, this),\n            [\n                \"2P\",\n                \"Easy\",\n                \"Medium\",\n                \"Hard\"\n            ].map((mode)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setGameMode(mode),\n                    onMouseEnter: ()=>setHovered(mode),\n                    onMouseLeave: ()=>setHovered(null),\n                    style: {\n                        ...styles.modeButton,\n                        ...hovered === mode ? styles.modeButtonHover : {}\n                    },\n                    children: displayText(mode)\n                }, mode, false, {\n                    fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\components\\\\gameModeSelection.js\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\components\\\\gameModeSelection.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(GameModeSelection, \"mEhKvegbaT+HE5gyL2KiZdVDWeQ=\");\n_c = GameModeSelection;\nvar _c;\n$RefreshReg$(_c, \"GameModeSelection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9nYW1lTW9kZVNlbGVjdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDTztBQUVqQyxNQUFNRSxTQUFTO0lBQ1hDLGVBQWU7UUFDYkMsVUFBVTtRQUNWQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsV0FBVztRQUNYQyxZQUFZO1FBQ1pDLFNBQVM7UUFDVEMsY0FBYztRQUNkQyxXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsUUFBUTtRQUNSQyxnQkFBZ0I7UUFDaEJDLFdBQVc7SUFDYjtJQUNBQyxXQUFXO1FBQ1RDLFVBQVU7UUFDVkMsY0FBYztRQUNkQyxZQUFZO0lBQ2Q7SUFDQUMsWUFBWTtRQUNWQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsUUFBUTtRQUNSZCxTQUFTO1FBQ1RRLFVBQVU7UUFDVk8sUUFBUTtRQUNSZCxjQUFjO1FBQ2RlLFFBQVE7UUFDUmpCLFlBQVk7UUFDWmtCLE9BQU87UUFDUEMsWUFBWTtJQUNkO0lBQ0FDLGlCQUFpQjtRQUNmckIsV0FBVztRQUNYSSxXQUFXO1FBQ1hhLFFBQVE7SUFDVjtBQUNGO0FBRWUsU0FBU0ssa0JBQWtCLEtBQWU7UUFBZixFQUFFQyxXQUFXLEVBQUUsR0FBZjs7SUFDeEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUcvQiwrQ0FBUUEsQ0FBQztJQUV2QyxTQUFTZ0MsWUFBWUMsSUFBSTtRQUN2QixJQUFHQSxTQUFTLE1BQUs7WUFDZixPQUFPO1FBQ1Q7UUFBRSxJQUFHQSxTQUFTLFFBQU87WUFDbkIsT0FBTztRQUNULE9BQU8sSUFBR0EsU0FBUyxVQUFTO1lBQzFCLE9BQU87UUFDVCxPQUFPO1lBQ0wsT0FBTztRQUNUO0lBQ0Y7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsT0FBT2xDLE9BQU9DLGFBQWE7OzBCQUM5Qiw4REFBQ2tDO2dCQUFHRCxPQUFPbEMsT0FBT2MsU0FBUzswQkFBRTs7Ozs7O1lBQzVCO2dCQUFDO2dCQUFNO2dCQUFRO2dCQUFVO2FBQU8sQ0FBQ3NCLEdBQUcsQ0FBQyxDQUFDSixxQkFDckMsOERBQUNLO29CQUVDQyxTQUFTLElBQU1WLFlBQVlJO29CQUMzQk8sY0FBYyxJQUFNVCxXQUFXRTtvQkFDL0JRLGNBQWMsSUFBTVYsV0FBVztvQkFDL0JJLE9BQU87d0JBQ0wsR0FBR2xDLE9BQU9rQixVQUFVO3dCQUNwQixHQUFJVyxZQUFZRyxPQUFPaEMsT0FBTzBCLGVBQWUsR0FBRyxDQUFDLENBQUM7b0JBQ3hEOzhCQUVLSyxZQUFZQzttQkFUUkE7Ozs7Ozs7Ozs7O0FBZW5CO0dBbkMwQkw7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGF2aWRcXE9uZURyaXZlXFxDb2RpbmcgUHJvamVjdHNcXFJlYWN0UHJvamVjdHNcXG15LW5leHQtYXBwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZ2FtZU1vZGVTZWxlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgbW9kZVNlbGVjdGlvbjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMzBweFwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMTJweFwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwiMHB4IDEwcHggMzBweCByZ2JhKDAsMCwwLDAuMilcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICB6SW5kZXg6IDEwLFxyXG4gICAgICBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDEwcHgpXCIsXHJcbiAgICAgIGFuaW1hdGlvbjogXCJmYWRlSW4gMC41cyBlYXNlLWluLW91dFwiLFxyXG4gICAgfSxcclxuICAgIG1vZGVUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcclxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICB9LFxyXG4gICAgbW9kZUJ1dHRvbjoge1xyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEzLjc1cmVtXCIsXHJcbiAgICAgIG1hcmdpbjogXCIwLjYyNXJlbSBhdXRvXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMC43NXJlbVwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcclxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjAuNXJlbVwiLFxyXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZThlZmIsICMxYzQyOWMpXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiMC4zc1wiLFxyXG4gICAgfSxcclxuICAgIG1vZGVCdXR0b25Ib3Zlcjoge1xyXG4gICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4wNSlcIixcclxuICAgICAgYm94U2hhZG93OiBcIjBweCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMilcIixcclxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZU1vZGVTZWxlY3Rpb24oeyBzZXRHYW1lTW9kZSB9KSB7XHJcbiAgICBjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5VGV4dChtb2RlKXtcclxuICAgICAgaWYobW9kZSA9PT0gXCIyUFwiKXtcclxuICAgICAgICByZXR1cm4gXCLwn5GrIDIgUGxheWVyXCI7XHJcbiAgICAgIH0gaWYobW9kZSA9PT0gXCJFYXN5XCIpe1xyXG4gICAgICAgIHJldHVybiBcIvCfpJYgRWFzeSBNb2RlXCJcclxuICAgICAgfSBlbHNlIGlmKG1vZGUgPT09IFwiTWVkaXVtXCIpe1xyXG4gICAgICAgIHJldHVybiBcIvCfjq8gTWVkaXVtIE1vZGVcIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIiDwn6egSGFyZFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tb2RlU2VsZWN0aW9ufT5cclxuICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVzLm1vZGVUaXRsZX0+Q2hvb3NlIFlvdXIgR2FtZSBNb2RlPC9oMj5cclxuICAgICAgICAgIHtbXCIyUFwiLCBcIkVhc3lcIiwgXCJNZWRpdW1cIiwgXCJIYXJkXCJdLm1hcCgobW9kZSkgPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXttb2RlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEdhbWVNb2RlKG1vZGUpfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZChtb2RlKX1cclxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyZWQobnVsbCl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIC4uLnN0eWxlcy5tb2RlQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgLi4uKGhvdmVyZWQgPT09IG1vZGUgPyBzdHlsZXMubW9kZUJ1dHRvbkhvdmVyIDoge30pLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkaXNwbGF5VGV4dChtb2RlKX1cclxuICAgICAgICAgICAgICB7Lyoge21vZGUgPT09IFwiMlBcIiA/IFwi8J+RqyAyIFBsYXllclwiIDogbW9kZSA9PT0gXCJFYXN5XCIgPyBcIvCfpJYgRWFzeSBNb2RlXCIgOiBcIvCfjq8gTWVkaXVtIE1vZGVcIn0gKi99XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIm1vZGVTZWxlY3Rpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInRleHRBbGlnbiIsInpJbmRleCIsImJhY2tkcm9wRmlsdGVyIiwiYW5pbWF0aW9uIiwibW9kZVRpdGxlIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0IiwibW9kZUJ1dHRvbiIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcmdpbiIsImN1cnNvciIsImJvcmRlciIsImNvbG9yIiwidHJhbnNpdGlvbiIsIm1vZGVCdXR0b25Ib3ZlciIsIkdhbWVNb2RlU2VsZWN0aW9uIiwic2V0R2FtZU1vZGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsImRpc3BsYXlUZXh0IiwibW9kZSIsImRpdiIsInN0eWxlIiwiaDIiLCJtYXAiLCJidXR0b24iLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/gameModeSelection.js\n"));

/***/ })

});