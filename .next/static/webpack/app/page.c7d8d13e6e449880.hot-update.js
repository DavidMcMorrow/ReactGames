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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board */ \"(app-pages-browser)/./src/app/components/board.js\");\n/* harmony import */ var _components_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/status */ \"(app-pages-browser)/./src/app/components/status.js\");\n/* harmony import */ var _components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gameModeSelection */ \"(app-pages-browser)/./src/app/components/gameModeSelection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(null));\n    const [isXNext, setIsXNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [winningFormation, setWinningFormation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameMode, setGameMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [resetHovered, setResetHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isAIMoving, setIsAIMoving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleClick(index) {\n        if (board[index] || calculateWinner(board).winner || isAIMoving) return;\n        let newBoard = [\n            ...board\n        ];\n        newBoard[index] = isXNext ? 'X' : 'O';\n        setBoard(newBoard);\n        setIsXNext(false);\n        if (gameMode === \"2P\") {\n            setIsXNext(true);\n            setIsXNext(!isXNext);\n        } else {\n            setIsAIMoving(true);\n            if (gameMode === \"Easy\") {\n                setTimeout(()=>{\n                    makeAIMoveEasy(newBoard);\n                }, 500);\n            } else if (gameMode === \"Medium\") {\n                setTimeout(()=>{\n                    makeAIMoveMedium(newBoard);\n                }, 500);\n            } else if (gameMode === \"Hard\") {\n                setTimeout(()=>{\n                    makeAIMoveHard(newBoard);\n                }, 500);\n            }\n        }\n    }\n    function calculateWinner(board) {\n        const winningLines = [\n            [\n                0,\n                1,\n                2\n            ],\n            [\n                3,\n                4,\n                5\n            ],\n            [\n                6,\n                7,\n                8\n            ],\n            [\n                0,\n                3,\n                6\n            ],\n            [\n                1,\n                4,\n                7\n            ],\n            [\n                2,\n                5,\n                8\n            ],\n            [\n                0,\n                4,\n                8\n            ],\n            [\n                2,\n                4,\n                6\n            ]\n        ];\n        for (let [a, b, c] of winningLines){\n            if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n                return {\n                    winner: board[a],\n                    line: [\n                        a,\n                        b,\n                        c\n                    ]\n                };\n            }\n        }\n        return {\n            winner: null,\n            line: []\n        };\n    }\n    function makeAIMoveEasy(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        console.log(calculateWinner(board));\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n    }\n    function makeAIMoveMedium(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'O';\n            if (calculateWinner(testBoard).winner === 'O') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                return;\n            }\n        }\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'X';\n            if (calculateWinner(testBoard).winner === 'X') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                return;\n            }\n        }\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n    }\n    function makeAIMoveHard(newBoard) {\n        const bestMove = findBestMove(newBoard);\n        console.log(\"bestMove\", bestMove);\n        if (bestMove !== -1) {\n            newBoard[bestMove] = \"O\";\n            setBoard([\n                ...newBoard\n            ]);\n            setIsXNext(true);\n        }\n    }\n    function findBestMove() {\n        let bestScore = -Infinity;\n        let move = -1;\n        for(let i = 0; i < board.length; i++){\n            if (board[i] === null) {\n                board[i] = \"O\";\n                let score = minimax(board, 0, false);\n                board[i] = null;\n                if (score > bestScore) {\n                    bestScore = score;\n                    move = i;\n                }\n            }\n        }\n        return move;\n    }\n    function minimax(board, depth, isMaximizing) {\n        const result = calculateWinner(board).winner;\n        if (result === \"O\") return 10 - depth;\n        if (result === \"X\") return depth - 10;\n        if (board.every((cell)=>cell !== null)) return 0;\n        if (isMaximizing) {\n            let bestScore = -Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"O\";\n                    const score = minimax(board, depth + 1, false);\n                    board[i] = null;\n                    bestScore = Math.max(score, bestScore);\n                }\n            }\n            return bestScore;\n        } else {\n            let bestScore = Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"X\";\n                    const score = minimax(board, depth + 1, true);\n                    board[i] = null;\n                    bestScore = Math.min(score, bestScore);\n                }\n            }\n            return bestScore;\n        }\n    }\n    function resetGame() {\n        setBoard(Array(9).fill(null));\n        setIsXNext(true);\n        setWinningFormation([]);\n        setGameMode(null);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            const { winner, line } = calculateWinner(board);\n            if (winner) {\n                setStatus(\"Winner: \".concat(winner));\n                setWinningFormation(line);\n            } else {\n                setStatus(\"Next Player: \".concat(isXNext ? 'X' : 'O'));\n            }\n        }\n    }[\"Home.useEffect\"], [\n        board\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.title,\n                children: \"Tic-Tac-Toe\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 197,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: gameMode ? styles.boardContainer : styles.boardContainerBlur,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        board: board,\n                        onSquareClick: gameMode ? handleClick : ()=>{},\n                        winningFormation: winningFormation\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 199,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        status: status\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 200,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 198,\n                columnNumber: 7\n            }, this),\n            !gameMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setGameMode: setGameMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 203,\n                columnNumber: 21\n            }, this),\n            gameMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: resetGame,\n                onMouseEnter: ()=>setResetHovered(true),\n                onMouseLeave: ()=>setResetHovered(false),\n                style: {\n                    ...styles.resetButton,\n                    ...resetHovered === true ? styles.resetButtonHover : {}\n                },\n                children: \"Reset Game\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 207,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 196,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"KI18u1fp14s9j7MunSkfqF3lQd8=\");\n_c = Home;\nconst styles = {\n    container: {\n        position: \"relative\",\n        textAlign: \"center\",\n        marginTop: \"1.5rem\"\n    },\n    title: {\n        fontSize: \"2rem\",\n        marginBottom: \"1rem\",\n        fontWeight: \"bold\"\n    },\n    boardContainer: {\n        pointerEvents: \"auto\"\n    },\n    boardContainerBlur: {\n        pointerEvents: \"none\",\n        opacity: 0.3,\n        filter: \"blur(0.25rem)\",\n        transition: \"opacity 0.5s ease, filter 0.5s ease\"\n    },\n    resetButton: {\n        width: \"13.75rem\",\n        margin: \"0.625rem auto\",\n        padding: \"0.75rem\",\n        fontSize: \"1.2rem\",\n        cursor: \"pointer\",\n        borderRadius: \"0.5rem\",\n        border: \"none\",\n        background: \"linear-gradient(135deg, #6e8efb, #1c429c)\",\n        color: \"white\",\n        transition: \"0.3s\"\n    },\n    resetButtonHover: {\n        transform: \"scale(1.05)\",\n        boxShadow: \"0px 4px 15px rgba(0,0,0,0.2)\"\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3ZFLHlEQUFLQTt3QkFBQ0ksT0FBT0E7d0JBQU9vRSxlQUFlMUQsV0FBV00sY0FBYyxLQUFPO3dCQUFHVixrQkFBa0JBOzs7Ozs7a0NBQ3pGLDhEQUFDVCwwREFBTUE7d0JBQUNXLFFBQVFBOzs7Ozs7Ozs7Ozs7WUFHakIsQ0FBQ0UsMEJBQVksOERBQUNaLHFFQUFpQkE7Z0JBQUNhLGFBQWFBOzs7Ozs7WUFHNUNELDBCQUNFLDhEQUFDMkQ7Z0JBQU9DLFNBQVNaO2dCQUFXYSxjQUFjLElBQU0xRCxnQkFBZ0I7Z0JBQ2hFMkQsY0FBYyxJQUFNM0QsZ0JBQWdCO2dCQUFRK0MsT0FBTztvQkFDakQsR0FBR0MsT0FBT1ksV0FBVztvQkFDckIsR0FBSTdELGlCQUFpQixPQUFPaUQsT0FBT2EsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO2dCQUMxRDswQkFBRzs7Ozs7Ozs7Ozs7O0FBSWI7R0EvTXdCM0U7S0FBQUE7QUFrTnhCLE1BQU04RCxTQUFTO0lBQ2JDLFdBQVc7UUFDVGEsVUFBVTtRQUNWQyxXQUFXO1FBQ1hDLFdBQVc7SUFDYjtJQUNBYixPQUFPO1FBQ0xjLFVBQVU7UUFDVkMsY0FBYztRQUNkQyxZQUFZO0lBQ2Q7SUFDQWQsZ0JBQWdCO1FBQ2RlLGVBQWU7SUFDakI7SUFDQWQsb0JBQW9CO1FBQ2xCYyxlQUFlO1FBQ2ZDLFNBQVM7UUFDVDlDLFFBQVE7UUFDUitDLFlBQVk7SUFDZDtJQUNBVixhQUFhO1FBQ1hXLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RSLFVBQVU7UUFDVlMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLFFBQVE7UUFDUkMsWUFBWTtRQUNaQyxPQUFPO1FBQ1BSLFlBQVk7SUFDZDtJQUNBVCxrQkFBa0I7UUFDaEJrQixXQUFXO1FBQ1hDLFdBQVc7SUFDYjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGRhdmlkXFxPbmVEcml2ZVxcQ29kaW5nIFByb2plY3RzXFxSZWFjdFByb2plY3RzXFxteS1uZXh0LWFwcFxcc3JjXFxhcHBcXHBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL2JvYXJkXCI7XG5pbXBvcnQgU3RhdHVzIGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHVzXCI7XG5pbXBvcnQgR2FtZU1vZGVTZWxlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lTW9kZVNlbGVjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKEFycmF5KDkpLmZpbGwobnVsbCkpO1xuICBjb25zdCBbaXNYTmV4dCwgc2V0SXNYTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3dpbm5pbmdGb3JtYXRpb24sIHNldFdpbm5pbmdGb3JtYXRpb25dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtnYW1lTW9kZSwgc2V0R2FtZU1vZGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtyZXNldEhvdmVyZWQsIHNldFJlc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0FJTW92aW5nLCBzZXRJc0FJTW92aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhpbmRleCkge1xuICAgIGlmKGJvYXJkW2luZGV4XSB8fCBjYWxjdWxhdGVXaW5uZXIoYm9hcmQpLndpbm5lciB8fCBpc0FJTW92aW5nKSByZXR1cm5cblxuICAgIGxldCBuZXdCb2FyZCA9IFsuLi5ib2FyZF07XG4gICAgbmV3Qm9hcmRbaW5kZXhdID0gaXNYTmV4dCA/ICdYJyA6ICdPJztcbiAgICBcbiAgICBzZXRCb2FyZChuZXdCb2FyZCk7XG4gICAgc2V0SXNYTmV4dChmYWxzZSk7XG5cbiAgICBpZihnYW1lTW9kZSA9PT0gXCIyUFwiKXtcbiAgICAgIHNldElzWE5leHQodHJ1ZSlcbiAgICAgIHNldElzWE5leHQoIWlzWE5leHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc0FJTW92aW5nKHRydWUpO1xuICAgICAgaWYoZ2FtZU1vZGUgPT09IFwiRWFzeVwiKXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWFrZUFJTW92ZUVhc3kobmV3Qm9hcmQpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9IGVsc2UgaWYoZ2FtZU1vZGUgPT09IFwiTWVkaXVtXCIpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBtYWtlQUlNb3ZlTWVkaXVtKG5ld0JvYXJkKVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIGlmKGdhbWVNb2RlID09PSBcIkhhcmRcIil7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1ha2VBSU1vdmVIYXJkKG5ld0JvYXJkKVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVdpbm5lcihib2FyZCkge1xuICAgIGNvbnN0IHdpbm5pbmdMaW5lcyA9IFtcbiAgICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sXG4gICAgICBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLFxuICAgICAgWzAsIDQsIDhdLCBbMiwgNCwgNl1cbiAgICBdO1xuXG4gICAgZm9yIChsZXQgW2EsIGIsIGNdIG9mIHdpbm5pbmdMaW5lcykge1xuICAgICAgaWYoYm9hcmRbYV0gJiYgYm9hcmRbYV0gPT09IGJvYXJkW2JdICYmIGJvYXJkW2FdID09PSBib2FyZFtjXSl7XG4gICAgICAgIHJldHVybiB7IHdpbm5lcjogYm9hcmRbYV0sIGxpbmU6IFthLCBiLCBjXSB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aW5uZXI6IG51bGwsIGxpbmU6IFtdIH07XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQUlNb3ZlRWFzeShuZXdCb2FyZCkge1xuICAgIGlmKGNhbGN1bGF0ZVdpbm5lcihuZXdCb2FyZCkud2lubmVyKSByZXR1cm5cbiAgICBjb25zb2xlLmxvZyhjYWxjdWxhdGVXaW5uZXIoYm9hcmQpKTtcbiAgICBcbiAgICBjb25zdCBlbXB0eVNxdWFyZXMgPSBuZXdCb2FyZC5tYXAoKHZhbHVlLCBpZHgpID0+ICh2YWx1ZSA9PT0gbnVsbCA/IGlkeCA6IG51bGwpKS5maWx0ZXIoKGlkeCkgPT4gaWR4ICE9PSBudWxsKTtcblxuICAgIGlmKGVtcHR5U3F1YXJlcy5sZW5ndGggPT09IDApIHJldHVyblxuICAgIFxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gZW1wdHlTcXVhcmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5U3F1YXJlcy5sZW5ndGgpXTtcbiAgICBcbiAgICBuZXdCb2FyZFtyYW5kb21JbmRleF0gPSBcIk9cIjtcbiAgICBcbiAgICBzZXRCb2FyZChbLi4ubmV3Qm9hcmRdKTtcbiAgICBzZXRJc1hOZXh0KHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUFJTW92ZU1lZGl1bShuZXdCb2FyZCl7XG4gICAgaWYoY2FsY3VsYXRlV2lubmVyKG5ld0JvYXJkKS53aW5uZXIpIHJldHVyblxuXG4gICAgY29uc3QgZW1wdHlTcXVhcmVzID0gbmV3Qm9hcmQubWFwKCh2YWx1ZSwgaWR4KSA9PiAodmFsdWUgPT09IG51bGwgPyBpZHggOiBudWxsKSkuZmlsdGVyKChpZHgpID0+IGlkeCAhPT0gbnVsbCk7XG4gICAgXG4gICAgaWYoZW1wdHlTcXVhcmVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICBmb3IobGV0IG1vdmUgb2YgZW1wdHlTcXVhcmVzKXtcbiAgICAgIGxldCB0ZXN0Qm9hcmQgPSBbLi4ubmV3Qm9hcmRdO1xuICAgICAgdGVzdEJvYXJkW21vdmVdID0gJ08nO1xuICAgICAgaWYoY2FsY3VsYXRlV2lubmVyKHRlc3RCb2FyZCkud2lubmVyID09PSAnTycpe1xuICAgICAgICBuZXdCb2FyZFttb3ZlXSA9ICdPJztcbiAgICAgICAgc2V0Qm9hcmQoWy4uLm5ld0JvYXJkXSk7XG4gICAgICAgIHNldElzWE5leHQodHJ1ZSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGZvcihsZXQgbW92ZSBvZiBlbXB0eVNxdWFyZXMpe1xuICAgICAgbGV0IHRlc3RCb2FyZCA9IFsuLi5uZXdCb2FyZF07XG4gICAgICB0ZXN0Qm9hcmRbbW92ZV0gPSAnWCc7XG4gICAgICBpZihjYWxjdWxhdGVXaW5uZXIodGVzdEJvYXJkKS53aW5uZXIgPT09ICdYJyl7XG4gICAgICAgIG5ld0JvYXJkW21vdmVdID0gJ08nO1xuICAgICAgICBzZXRCb2FyZChbLi4ubmV3Qm9hcmRdKTtcbiAgICAgICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBlbXB0eVNxdWFyZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1wdHlTcXVhcmVzLmxlbmd0aCldO1xuICAgIG5ld0JvYXJkW3JhbmRvbUluZGV4XSA9IFwiT1wiO1xuICAgIFxuICAgIHNldEJvYXJkKFsuLi5uZXdCb2FyZF0pO1xuICAgIHNldElzWE5leHQodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQUlNb3ZlSGFyZChuZXdCb2FyZCl7XG4gICAgY29uc3QgYmVzdE1vdmUgPSBmaW5kQmVzdE1vdmUobmV3Qm9hcmQpO1xuICAgIGNvbnNvbGUubG9nKFwiYmVzdE1vdmVcIiwgYmVzdE1vdmUpO1xuICAgIFxuICAgIGlmIChiZXN0TW92ZSAhPT0gLTEpIHtcbiAgICAgIG5ld0JvYXJkW2Jlc3RNb3ZlXSA9IFwiT1wiO1xuICAgICAgc2V0Qm9hcmQoWy4uLm5ld0JvYXJkXSk7XG4gICAgICBzZXRJc1hOZXh0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRCZXN0TW92ZSgpe1xuICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgbGV0IG1vdmUgPSAtMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChib2FyZFtpXSA9PT0gbnVsbCkge1xuICAgICAgICBib2FyZFtpXSA9IFwiT1wiO1xuICAgICAgICBsZXQgc2NvcmUgPSBtaW5pbWF4KGJvYXJkLCAwLCBmYWxzZSk7XG4gICAgICAgIGJvYXJkW2ldID0gbnVsbDtcbiAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgbW92ZSA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHJldHVybiBtb3ZlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWluaW1heChib2FyZCwgZGVwdGgsIGlzTWF4aW1pemluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhbGN1bGF0ZVdpbm5lcihib2FyZCkud2lubmVyO1xuICBcbiAgICBpZiAocmVzdWx0ID09PSBcIk9cIikgcmV0dXJuIDEwIC0gZGVwdGg7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJYXCIpIHJldHVybiBkZXB0aCAtIDEwO1xuICAgIGlmIChib2FyZC5ldmVyeShjZWxsID0+IGNlbGwgIT09IG51bGwpKSByZXR1cm4gMDtcbiAgXG4gICAgaWYgKGlzTWF4aW1pemluZykge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldID09PSBudWxsKSB7XG4gICAgICAgICAgYm9hcmRbaV0gPSBcIk9cIjtcbiAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIGRlcHRoICsgMSwgZmFsc2UpO1xuICAgICAgICAgIGJvYXJkW2ldID0gbnVsbDtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBNYXRoLm1heChzY29yZSwgYmVzdFNjb3JlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJlc3RTY29yZTtcbiAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldID09PSBudWxsKSB7XG4gICAgICAgICAgYm9hcmRbaV0gPSBcIlhcIjtcbiAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIGRlcHRoICsgMSwgdHJ1ZSk7XG4gICAgICAgICAgYm9hcmRbaV0gPSBudWxsO1xuICAgICAgICAgIGJlc3RTY29yZSA9IE1hdGgubWluKHNjb3JlLCBiZXN0U2NvcmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYmVzdFNjb3JlO1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gcmVzZXRHYW1lKCl7XG4gICAgc2V0Qm9hcmQoQXJyYXkoOSkuZmlsbChudWxsKSk7XG4gICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICBzZXRXaW5uaW5nRm9ybWF0aW9uKFtdKTtcbiAgICBzZXRHYW1lTW9kZShudWxsKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyB3aW5uZXIsIGxpbmUgfSA9IGNhbGN1bGF0ZVdpbm5lcihib2FyZCk7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgc2V0U3RhdHVzKGBXaW5uZXI6ICR7d2lubmVyfWApO1xuICAgICAgc2V0V2lubmluZ0Zvcm1hdGlvbihsaW5lKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoYE5leHQgUGxheWVyOiAke2lzWE5leHQgPyAnWCcgOiAnTyd9YCk7XG4gICAgfVxuICB9LCBbYm9hcmRdKTtcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgc3R5bGU9e3N0eWxlcy50aXRsZX0+VGljLVRhYy1Ub2U8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17Z2FtZU1vZGUgPyBzdHlsZXMuYm9hcmRDb250YWluZXIgOiBzdHlsZXMuYm9hcmRDb250YWluZXJCbHVyfT5cbiAgICAgICAgPEJvYXJkIGJvYXJkPXtib2FyZH0gb25TcXVhcmVDbGljaz17Z2FtZU1vZGUgPyBoYW5kbGVDbGljayA6ICgpID0+IHt9fSB3aW5uaW5nRm9ybWF0aW9uPXt3aW5uaW5nRm9ybWF0aW9ufSAvPlxuICAgICAgICA8U3RhdHVzIHN0YXR1cz17c3RhdHVzfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHshZ2FtZU1vZGUgJiYgPEdhbWVNb2RlU2VsZWN0aW9uIHNldEdhbWVNb2RlPXtzZXRHYW1lTW9kZX0gLz59XG5cbiAgICAgIHtcbiAgICAgICAgZ2FtZU1vZGUgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXRHYW1lfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFJlc2V0SG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFJlc2V0SG92ZXJlZChmYWxzZSl9IHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMucmVzZXRCdXR0b24sXG4gICAgICAgICAgICAuLi4ocmVzZXRIb3ZlcmVkID09PSB0cnVlID8gc3R5bGVzLnJlc2V0QnV0dG9uSG92ZXIgOiB7fSlcbiAgICAgICAgICB9fT5SZXNldCBHYW1lPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luVG9wOiBcIjEuNXJlbVwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxuICBib2FyZENvbnRhaW5lcjoge1xuICAgIHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiLCAvLyBCb2FyZCBpcyBpbnRlcmFjdGl2ZSB3aGVuIGdhbWUgc3RhcnRzXG4gIH0sXG4gIGJvYXJkQ29udGFpbmVyQmx1cjoge1xuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLCAvLyBQcmV2ZW50cyBjbGlja2luZyBiZWZvcmUgc2VsZWN0aW5nIG1vZGVcbiAgICBvcGFjaXR5OiAwLjMsXG4gICAgZmlsdGVyOiBcImJsdXIoMC4yNXJlbSlcIiwgLy8gQWRkcyBhIHNsaWdodCBibHVyXG4gICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuNXMgZWFzZSwgZmlsdGVyIDAuNXMgZWFzZVwiLFxuICB9LFxuICByZXNldEJ1dHRvbjoge1xuICAgIHdpZHRoOiBcIjEzLjc1cmVtXCIsXG4gICAgbWFyZ2luOiBcIjAuNjI1cmVtIGF1dG9cIixcbiAgICBwYWRkaW5nOiBcIjAuNzVyZW1cIixcbiAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGJvcmRlclJhZGl1czogXCIwLjVyZW1cIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZlOGVmYiwgIzFjNDI5YylcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHRyYW5zaXRpb246IFwiMC4zc1wiLFxuICB9LFxuICByZXNldEJ1dHRvbkhvdmVyOiB7XG4gICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMDUpXCIsXG4gICAgYm94U2hhZG93OiBcIjBweCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMilcIixcbiAgfVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJvYXJkIiwiU3RhdHVzIiwiR2FtZU1vZGVTZWxlY3Rpb24iLCJIb21lIiwiYm9hcmQiLCJzZXRCb2FyZCIsIkFycmF5IiwiZmlsbCIsImlzWE5leHQiLCJzZXRJc1hOZXh0Iiwid2lubmluZ0Zvcm1hdGlvbiIsInNldFdpbm5pbmdGb3JtYXRpb24iLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJnYW1lTW9kZSIsInNldEdhbWVNb2RlIiwicmVzZXRIb3ZlcmVkIiwic2V0UmVzZXRIb3ZlcmVkIiwiaXNBSU1vdmluZyIsInNldElzQUlNb3ZpbmciLCJoYW5kbGVDbGljayIsImluZGV4IiwiY2FsY3VsYXRlV2lubmVyIiwid2lubmVyIiwibmV3Qm9hcmQiLCJzZXRUaW1lb3V0IiwibWFrZUFJTW92ZUVhc3kiLCJtYWtlQUlNb3ZlTWVkaXVtIiwibWFrZUFJTW92ZUhhcmQiLCJ3aW5uaW5nTGluZXMiLCJhIiwiYiIsImMiLCJsaW5lIiwiY29uc29sZSIsImxvZyIsImVtcHR5U3F1YXJlcyIsIm1hcCIsInZhbHVlIiwiaWR4IiwiZmlsdGVyIiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtb3ZlIiwidGVzdEJvYXJkIiwiYmVzdE1vdmUiLCJmaW5kQmVzdE1vdmUiLCJiZXN0U2NvcmUiLCJJbmZpbml0eSIsImkiLCJzY29yZSIsIm1pbmltYXgiLCJkZXB0aCIsImlzTWF4aW1pemluZyIsInJlc3VsdCIsImV2ZXJ5IiwiY2VsbCIsIm1heCIsIm1pbiIsInJlc2V0R2FtZSIsIm1haW4iLCJzdHlsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImgxIiwidGl0bGUiLCJkaXYiLCJib2FyZENvbnRhaW5lciIsImJvYXJkQ29udGFpbmVyQmx1ciIsIm9uU3F1YXJlQ2xpY2siLCJidXR0b24iLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwicmVzZXRCdXR0b24iLCJyZXNldEJ1dHRvbkhvdmVyIiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ0cmFuc2Zvcm0iLCJib3hTaGFkb3ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});