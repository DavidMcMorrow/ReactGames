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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board */ \"(app-pages-browser)/./src/app/components/board.js\");\n/* harmony import */ var _components_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/status */ \"(app-pages-browser)/./src/app/components/status.js\");\n/* harmony import */ var _components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gameModeSelection */ \"(app-pages-browser)/./src/app/components/gameModeSelection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(null));\n    const [isXNext, setIsXNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [winningFormation, setWinningFormation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameMode, setGameMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isAIMoving, setIsAIMoving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isGameOver, setIsGameOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleClick(index) {\n        if (board[index] || calculateWinner(board).winner || isAIMoving) return;\n        let newBoard = [\n            ...board\n        ];\n        newBoard[index] = isXNext ? 'X' : 'O';\n        setBoard(newBoard);\n        setIsXNext(false);\n        determineGameMode(newBoard);\n    }\n    function calculateWinner(board) {\n        const winningLines = [\n            [\n                0,\n                1,\n                2\n            ],\n            [\n                3,\n                4,\n                5\n            ],\n            [\n                6,\n                7,\n                8\n            ],\n            [\n                0,\n                3,\n                6\n            ],\n            [\n                1,\n                4,\n                7\n            ],\n            [\n                2,\n                5,\n                8\n            ],\n            [\n                0,\n                4,\n                8\n            ],\n            [\n                2,\n                4,\n                6\n            ]\n        ];\n        for (let [a, b, c] of winningLines){\n            if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n                return {\n                    winner: board[a],\n                    line: [\n                        a,\n                        b,\n                        c\n                    ]\n                };\n            }\n        }\n        return {\n            winner: null,\n            line: []\n        };\n    }\n    function determineGameMode(newBoard) {\n        if (gameMode === \"2P\") {\n            setIsXNext(true);\n            setIsXNext(!isXNext);\n        } else {\n            setIsAIMoving(true);\n            if (gameMode === \"Easy\") {\n                setTimeout(()=>{\n                    makeAIMoveEasy(newBoard);\n                }, 500);\n            } else if (gameMode === \"Medium\") {\n                setTimeout(()=>{\n                    makeAIMoveMedium(newBoard);\n                }, 500);\n            } else if (gameMode === \"Hard\") {\n                setTimeout(()=>{\n                    makeAIMoveHard(newBoard);\n                }, 500);\n            }\n        }\n    }\n    function makeAIMoveEasy(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        console.log(calculateWinner(board));\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n        setIsAIMoving(false);\n    }\n    function makeAIMoveMedium(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'O';\n            if (calculateWinner(testBoard).winner === 'O') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                setIsAIMoving(false);\n                return;\n            }\n        }\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'X';\n            if (calculateWinner(testBoard).winner === 'X') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                setIsAIMoving(false);\n                return;\n            }\n        }\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n        setIsAIMoving(false);\n    }\n    function makeAIMoveHard(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        const bestMove = findBestMove(newBoard);\n        console.log(\"bestMove\", bestMove);\n        if (bestMove !== -1) {\n            newBoard[bestMove] = \"O\";\n            setBoard([\n                ...newBoard\n            ]);\n            setIsXNext(true);\n            setIsAIMoving(false);\n        }\n    }\n    function findBestMove(board) {\n        let bestScore = -Infinity;\n        let move = -1;\n        for(let i = 0; i < board.length; i++){\n            if (board[i] === null) {\n                board[i] = \"O\";\n                let score = minimax(board, 0, false);\n                board[i] = null;\n                if (score > bestScore) {\n                    bestScore = score;\n                    move = i;\n                }\n            }\n        }\n        return move;\n    }\n    function minimax(board, depth, isMaximizing) {\n        const result = calculateWinner(board).winner;\n        if (result === \"O\") return 10 - depth;\n        if (result === \"X\") return depth - 10;\n        if (board.every((cell)=>cell !== null)) return 0;\n        if (isMaximizing) {\n            let bestScore = -Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"O\";\n                    const score = minimax(board, depth + 1, false);\n                    board[i] = null;\n                    bestScore = Math.max(score, bestScore);\n                }\n            }\n            return bestScore;\n        } else {\n            let bestScore = Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"X\";\n                    const score = minimax(board, depth + 1, true);\n                    board[i] = null;\n                    bestScore = Math.min(score, bestScore);\n                }\n            }\n            return bestScore;\n        }\n    }\n    function resetGame() {\n        setBoard(Array(9).fill(null));\n        setIsXNext(true);\n        setWinningFormation([]);\n        setGameMode(null);\n        setIsAIMoving(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            const { winner, line } = calculateWinner(board);\n            if (winner) {\n                setStatus(\"Winner: \".concat(winner));\n                setWinningFormation(line);\n                setTimeout({\n                    \"Home.useEffect\": ()=>{\n                        setIsGameOver(true);\n                    }\n                }[\"Home.useEffect\"], 2000);\n            } else {\n                setStatus(\"Next Player: \".concat(isXNext ? 'X' : 'O'));\n            }\n        }\n    }[\"Home.useEffect\"], [\n        board\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.title,\n                children: \"Tic-Tac-Toe\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 211,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: gameMode ? styles.boardContainer : styles.boardContainerBlur,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        board: board,\n                        onSquareClick: gameMode ? handleClick : ()=>{},\n                        winningFormation: winningFormation\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 213,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        status: status\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 214,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 212,\n                columnNumber: 7\n            }, this),\n            !gameMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setGameMode: setGameMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 217,\n                columnNumber: 21\n            }, this),\n            isGameOver && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameOver, {\n                winner: calculateWinner.winner\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 219,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n        lineNumber: 210,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EdvHRsRXFia6bmDSKxY+ImBaOLU=\");\n_c = Home;\nconst styles = {\n    container: {\n        position: \"relative\",\n        textAlign: \"center\",\n        marginTop: \"1.5rem\"\n    },\n    title: {\n        fontSize: \"2rem\",\n        marginBottom: \"1rem\",\n        fontWeight: \"bold\"\n    },\n    boardContainer: {\n        pointerEvents: \"auto\"\n    },\n    boardContainerBlur: {\n        pointerEvents: \"none\",\n        opacity: 0.3,\n        filter: \"blur(0.25rem)\",\n        transition: \"opacity 0.5s ease, filter 0.5s ease\"\n    },\n    resetButton: {\n        width: \"13.75rem\",\n        margin: \"0.625rem auto\",\n        padding: \"0.75rem\",\n        fontSize: \"1.2rem\",\n        cursor: \"pointer\",\n        borderRadius: \"0.5rem\",\n        border: \"none\",\n        background: \"linear-gradient(135deg, #6e8efb, #1c429c)\",\n        color: \"white\",\n        transition: \"0.3s\"\n    },\n    resetButtonHover: {\n        transform: \"scale(1.05)\",\n        boxShadow: \"0px 4px 15px rgba(0,0,0,0.2)\"\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWFjdFByb2plY3RzXFxSZWFjdCBHYW1lc1xcc3JjXFxhcHBcXHBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL2JvYXJkXCI7XG5pbXBvcnQgU3RhdHVzIGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHVzXCI7XG5pbXBvcnQgR2FtZU1vZGVTZWxlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lTW9kZVNlbGVjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKEFycmF5KDkpLmZpbGwobnVsbCkpO1xuICBjb25zdCBbaXNYTmV4dCwgc2V0SXNYTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3dpbm5pbmdGb3JtYXRpb24sIHNldFdpbm5pbmdGb3JtYXRpb25dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtnYW1lTW9kZSwgc2V0R2FtZU1vZGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0FJTW92aW5nLCBzZXRJc0FJTW92aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzR2FtZU92ZXIsIHNldElzR2FtZU92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGluZGV4KSB7XG4gICAgaWYoYm9hcmRbaW5kZXhdIHx8IGNhbGN1bGF0ZVdpbm5lcihib2FyZCkud2lubmVyIHx8IGlzQUlNb3ZpbmcpIHJldHVyblxuXG4gICAgbGV0IG5ld0JvYXJkID0gWy4uLmJvYXJkXTtcbiAgICBuZXdCb2FyZFtpbmRleF0gPSBpc1hOZXh0ID8gJ1gnIDogJ08nO1xuICAgIFxuICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcbiAgICBzZXRJc1hOZXh0KGZhbHNlKTtcblxuICAgIGRldGVybWluZUdhbWVNb2RlKG5ld0JvYXJkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVdpbm5lcihib2FyZCkge1xuICAgIGNvbnN0IHdpbm5pbmdMaW5lcyA9IFtcbiAgICAgIFswLCAxLCAyXSwgWzMsIDQsIDVdLCBbNiwgNywgOF0sXG4gICAgICBbMCwgMywgNl0sIFsxLCA0LCA3XSwgWzIsIDUsIDhdLFxuICAgICAgWzAsIDQsIDhdLCBbMiwgNCwgNl1cbiAgICBdO1xuXG4gICAgZm9yIChsZXQgW2EsIGIsIGNdIG9mIHdpbm5pbmdMaW5lcykge1xuICAgICAgaWYoYm9hcmRbYV0gJiYgYm9hcmRbYV0gPT09IGJvYXJkW2JdICYmIGJvYXJkW2FdID09PSBib2FyZFtjXSl7XG4gICAgICAgIHJldHVybiB7IHdpbm5lcjogYm9hcmRbYV0sIGxpbmU6IFthLCBiLCBjXSB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aW5uZXI6IG51bGwsIGxpbmU6IFtdIH07XG4gIH1cblxuICBmdW5jdGlvbiBkZXRlcm1pbmVHYW1lTW9kZShuZXdCb2FyZCl7XG4gICAgaWYoZ2FtZU1vZGUgPT09IFwiMlBcIil7XG4gICAgICBzZXRJc1hOZXh0KHRydWUpXG4gICAgICBzZXRJc1hOZXh0KCFpc1hOZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNBSU1vdmluZyh0cnVlKTtcbiAgICAgIGlmKGdhbWVNb2RlID09PSBcIkVhc3lcIil7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1ha2VBSU1vdmVFYXN5KG5ld0JvYXJkKVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIGlmKGdhbWVNb2RlID09PSBcIk1lZGl1bVwiKXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWFrZUFJTW92ZU1lZGl1bShuZXdCb2FyZClcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSBpZihnYW1lTW9kZSA9PT0gXCJIYXJkXCIpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBtYWtlQUlNb3ZlSGFyZChuZXdCb2FyZClcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQUlNb3ZlRWFzeShuZXdCb2FyZCkge1xuICAgIGlmKGNhbGN1bGF0ZVdpbm5lcihuZXdCb2FyZCkud2lubmVyKSByZXR1cm5cbiAgICBjb25zb2xlLmxvZyhjYWxjdWxhdGVXaW5uZXIoYm9hcmQpKTtcbiAgICBcbiAgICBjb25zdCBlbXB0eVNxdWFyZXMgPSBuZXdCb2FyZC5tYXAoKHZhbHVlLCBpZHgpID0+ICh2YWx1ZSA9PT0gbnVsbCA/IGlkeCA6IG51bGwpKS5maWx0ZXIoKGlkeCkgPT4gaWR4ICE9PSBudWxsKTtcblxuICAgIGlmKGVtcHR5U3F1YXJlcy5sZW5ndGggPT09IDApIHJldHVyblxuICAgIFxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gZW1wdHlTcXVhcmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5U3F1YXJlcy5sZW5ndGgpXTtcbiAgICBcbiAgICBuZXdCb2FyZFtyYW5kb21JbmRleF0gPSBcIk9cIjtcbiAgICBcbiAgICBzZXRCb2FyZChbLi4ubmV3Qm9hcmRdKTtcbiAgICBzZXRJc1hOZXh0KHRydWUpO1xuICAgIHNldElzQUlNb3ZpbmcoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUFJTW92ZU1lZGl1bShuZXdCb2FyZCl7XG4gICAgaWYoY2FsY3VsYXRlV2lubmVyKG5ld0JvYXJkKS53aW5uZXIpIHJldHVyblxuXG4gICAgY29uc3QgZW1wdHlTcXVhcmVzID0gbmV3Qm9hcmQubWFwKCh2YWx1ZSwgaWR4KSA9PiAodmFsdWUgPT09IG51bGwgPyBpZHggOiBudWxsKSkuZmlsdGVyKChpZHgpID0+IGlkeCAhPT0gbnVsbCk7XG4gICAgXG4gICAgaWYoZW1wdHlTcXVhcmVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICBmb3IobGV0IG1vdmUgb2YgZW1wdHlTcXVhcmVzKXtcbiAgICAgIGxldCB0ZXN0Qm9hcmQgPSBbLi4ubmV3Qm9hcmRdO1xuICAgICAgdGVzdEJvYXJkW21vdmVdID0gJ08nO1xuICAgICAgaWYoY2FsY3VsYXRlV2lubmVyKHRlc3RCb2FyZCkud2lubmVyID09PSAnTycpe1xuICAgICAgICBuZXdCb2FyZFttb3ZlXSA9ICdPJztcbiAgICAgICAgc2V0Qm9hcmQoWy4uLm5ld0JvYXJkXSk7XG4gICAgICAgIHNldElzWE5leHQodHJ1ZSk7XG4gICAgICAgIHNldElzQUlNb3ZpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IobGV0IG1vdmUgb2YgZW1wdHlTcXVhcmVzKXtcbiAgICAgIGxldCB0ZXN0Qm9hcmQgPSBbLi4ubmV3Qm9hcmRdO1xuICAgICAgdGVzdEJvYXJkW21vdmVdID0gJ1gnO1xuICAgICAgaWYoY2FsY3VsYXRlV2lubmVyKHRlc3RCb2FyZCkud2lubmVyID09PSAnWCcpe1xuICAgICAgICBuZXdCb2FyZFttb3ZlXSA9ICdPJztcbiAgICAgICAgc2V0Qm9hcmQoWy4uLm5ld0JvYXJkXSk7XG4gICAgICAgIHNldElzWE5leHQodHJ1ZSk7XG4gICAgICAgIHNldElzQUlNb3ZpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21JbmRleCA9IGVtcHR5U3F1YXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbXB0eVNxdWFyZXMubGVuZ3RoKV07XG4gICAgbmV3Qm9hcmRbcmFuZG9tSW5kZXhdID0gXCJPXCI7XG4gICAgXG4gICAgc2V0Qm9hcmQoWy4uLm5ld0JvYXJkXSk7XG4gICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICBzZXRJc0FJTW92aW5nKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VBSU1vdmVIYXJkKG5ld0JvYXJkKXtcbiAgICBpZihjYWxjdWxhdGVXaW5uZXIobmV3Qm9hcmQpLndpbm5lcikgcmV0dXJuXG5cbiAgICBjb25zdCBiZXN0TW92ZSA9IGZpbmRCZXN0TW92ZShuZXdCb2FyZCk7XG4gICAgY29uc29sZS5sb2coXCJiZXN0TW92ZVwiLCBiZXN0TW92ZSk7XG4gICAgXG4gICAgaWYgKGJlc3RNb3ZlICE9PSAtMSkge1xuICAgICAgbmV3Qm9hcmRbYmVzdE1vdmVdID0gXCJPXCI7XG4gICAgICBzZXRCb2FyZChbLi4ubmV3Qm9hcmRdKTtcbiAgICAgIHNldElzWE5leHQodHJ1ZSk7XG4gICAgICBzZXRJc0FJTW92aW5nKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kQmVzdE1vdmUoYm9hcmQpe1xuICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgbGV0IG1vdmUgPSAtMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChib2FyZFtpXSA9PT0gbnVsbCkge1xuICAgICAgICBib2FyZFtpXSA9IFwiT1wiO1xuICAgICAgICBsZXQgc2NvcmUgPSBtaW5pbWF4KGJvYXJkLCAwLCBmYWxzZSk7XG4gICAgICAgIGJvYXJkW2ldID0gbnVsbDtcbiAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgbW92ZSA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHJldHVybiBtb3ZlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWluaW1heChib2FyZCwgZGVwdGgsIGlzTWF4aW1pemluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhbGN1bGF0ZVdpbm5lcihib2FyZCkud2lubmVyO1xuICBcbiAgICBpZiAocmVzdWx0ID09PSBcIk9cIikgcmV0dXJuIDEwIC0gZGVwdGg7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJYXCIpIHJldHVybiBkZXB0aCAtIDEwO1xuICAgIGlmIChib2FyZC5ldmVyeShjZWxsID0+IGNlbGwgIT09IG51bGwpKSByZXR1cm4gMDtcbiAgXG4gICAgaWYgKGlzTWF4aW1pemluZykge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldID09PSBudWxsKSB7XG4gICAgICAgICAgYm9hcmRbaV0gPSBcIk9cIjtcbiAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIGRlcHRoICsgMSwgZmFsc2UpO1xuICAgICAgICAgIGJvYXJkW2ldID0gbnVsbDtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBNYXRoLm1heChzY29yZSwgYmVzdFNjb3JlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJlc3RTY29yZTtcbiAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldID09PSBudWxsKSB7XG4gICAgICAgICAgYm9hcmRbaV0gPSBcIlhcIjtcbiAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIGRlcHRoICsgMSwgdHJ1ZSk7XG4gICAgICAgICAgYm9hcmRbaV0gPSBudWxsO1xuICAgICAgICAgIGJlc3RTY29yZSA9IE1hdGgubWluKHNjb3JlLCBiZXN0U2NvcmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYmVzdFNjb3JlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0R2FtZSgpe1xuICAgIHNldEJvYXJkKEFycmF5KDkpLmZpbGwobnVsbCkpO1xuICAgIHNldElzWE5leHQodHJ1ZSk7XG4gICAgc2V0V2lubmluZ0Zvcm1hdGlvbihbXSk7XG4gICAgc2V0R2FtZU1vZGUobnVsbCk7XG4gICAgc2V0SXNBSU1vdmluZyhmYWxzZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgd2lubmVyLCBsaW5lIH0gPSBjYWxjdWxhdGVXaW5uZXIoYm9hcmQpO1xuICAgIGlmICh3aW5uZXIpIHtcbiAgICAgIHNldFN0YXR1cyhgV2lubmVyOiAke3dpbm5lcn1gKTtcbiAgICAgIHNldFdpbm5pbmdGb3JtYXRpb24obGluZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNHYW1lT3Zlcih0cnVlKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoYE5leHQgUGxheWVyOiAke2lzWE5leHQgPyAnWCcgOiAnTyd9YCk7XG4gICAgfVxuICB9LCBbYm9hcmRdKTtcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgc3R5bGU9e3N0eWxlcy50aXRsZX0+VGljLVRhYy1Ub2U8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17Z2FtZU1vZGUgPyBzdHlsZXMuYm9hcmRDb250YWluZXIgOiBzdHlsZXMuYm9hcmRDb250YWluZXJCbHVyfT5cbiAgICAgICAgPEJvYXJkIGJvYXJkPXtib2FyZH0gb25TcXVhcmVDbGljaz17Z2FtZU1vZGUgPyBoYW5kbGVDbGljayA6ICgpID0+IHt9fSB3aW5uaW5nRm9ybWF0aW9uPXt3aW5uaW5nRm9ybWF0aW9ufSAvPlxuICAgICAgICA8U3RhdHVzIHN0YXR1cz17c3RhdHVzfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHshZ2FtZU1vZGUgJiYgPEdhbWVNb2RlU2VsZWN0aW9uIHNldEdhbWVNb2RlPXtzZXRHYW1lTW9kZX0gLz59XG5cbiAgICAgIHtpc0dhbWVPdmVyICYmIDxHYW1lT3ZlciB3aW5uZXI9e2NhbGN1bGF0ZVdpbm5lci53aW5uZXJ9PjwvR2FtZU92ZXI+fVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luVG9wOiBcIjEuNXJlbVwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxuICBib2FyZENvbnRhaW5lcjoge1xuICAgIHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiLCBcbiAgfSxcbiAgYm9hcmRDb250YWluZXJCbHVyOiB7XG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsIFxuICAgIG9wYWNpdHk6IDAuMyxcbiAgICBmaWx0ZXI6IFwiYmx1cigwLjI1cmVtKVwiLFxuICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAwLjVzIGVhc2UsIGZpbHRlciAwLjVzIGVhc2VcIixcbiAgfSxcbiAgcmVzZXRCdXR0b246IHtcbiAgICB3aWR0aDogXCIxMy43NXJlbVwiLFxuICAgIG1hcmdpbjogXCIwLjYyNXJlbSBhdXRvXCIsXG4gICAgcGFkZGluZzogXCIwLjc1cmVtXCIsXG4gICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMC41cmVtXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZThlZmIsICMxYzQyOWMpXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICB0cmFuc2l0aW9uOiBcIjAuM3NcIixcbiAgfSxcbiAgcmVzZXRCdXR0b25Ib3Zlcjoge1xuICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDE1cHggcmdiYSgwLDAsMCwwLjIpXCIsXG4gIH1cbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb2FyZCIsIlN0YXR1cyIsIkdhbWVNb2RlU2VsZWN0aW9uIiwiSG9tZSIsImJvYXJkIiwic2V0Qm9hcmQiLCJBcnJheSIsImZpbGwiLCJpc1hOZXh0Iiwic2V0SXNYTmV4dCIsIndpbm5pbmdGb3JtYXRpb24iLCJzZXRXaW5uaW5nRm9ybWF0aW9uIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiZ2FtZU1vZGUiLCJzZXRHYW1lTW9kZSIsImlzQUlNb3ZpbmciLCJzZXRJc0FJTW92aW5nIiwiaXNHYW1lT3ZlciIsInNldElzR2FtZU92ZXIiLCJoYW5kbGVDbGljayIsImluZGV4IiwiY2FsY3VsYXRlV2lubmVyIiwid2lubmVyIiwibmV3Qm9hcmQiLCJkZXRlcm1pbmVHYW1lTW9kZSIsIndpbm5pbmdMaW5lcyIsImEiLCJiIiwiYyIsImxpbmUiLCJzZXRUaW1lb3V0IiwibWFrZUFJTW92ZUVhc3kiLCJtYWtlQUlNb3ZlTWVkaXVtIiwibWFrZUFJTW92ZUhhcmQiLCJjb25zb2xlIiwibG9nIiwiZW1wdHlTcXVhcmVzIiwibWFwIiwidmFsdWUiLCJpZHgiLCJmaWx0ZXIiLCJsZW5ndGgiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1vdmUiLCJ0ZXN0Qm9hcmQiLCJiZXN0TW92ZSIsImZpbmRCZXN0TW92ZSIsImJlc3RTY29yZSIsIkluZmluaXR5IiwiaSIsInNjb3JlIiwibWluaW1heCIsImRlcHRoIiwiaXNNYXhpbWl6aW5nIiwicmVzdWx0IiwiZXZlcnkiLCJjZWxsIiwibWF4IiwibWluIiwicmVzZXRHYW1lIiwibWFpbiIsInN0eWxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaDEiLCJ0aXRsZSIsImRpdiIsImJvYXJkQ29udGFpbmVyIiwiYm9hcmRDb250YWluZXJCbHVyIiwib25TcXVhcmVDbGljayIsIkdhbWVPdmVyIiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJyZXNldEJ1dHRvbiIsIndpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImN1cnNvciIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmQiLCJjb2xvciIsInJlc2V0QnV0dG9uSG92ZXIiLCJ0cmFuc2Zvcm0iLCJib3hTaGFkb3ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});