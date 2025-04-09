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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board */ \"(app-pages-browser)/./src/app/components/board.js\");\n/* harmony import */ var _components_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/status */ \"(app-pages-browser)/./src/app/components/status.js\");\n/* harmony import */ var _components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gameModeSelection */ \"(app-pages-browser)/./src/app/components/gameModeSelection.js\");\n/* harmony import */ var _components_gameOver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/gameOver */ \"(app-pages-browser)/./src/app/components/gameOver.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(null));\n    const [isXNext, setIsXNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [winningFormation, setWinningFormation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameMode, setGameMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isAIMoving, setIsAIMoving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isGameOver, setIsGameOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const END_GAME_DELAY = 1500;\n    function handleClick(index) {\n        if (board[index] || calculateWinner(board).winner || isAIMoving) return;\n        let newBoard = [\n            ...board\n        ];\n        newBoard[index] = isXNext ? 'X' : 'O';\n        setBoard(newBoard);\n        setIsXNext(false);\n        determineGameMode(newBoard);\n    }\n    function calculateWinner(board) {\n        const winningLines = [\n            [\n                0,\n                1,\n                2\n            ],\n            [\n                3,\n                4,\n                5\n            ],\n            [\n                6,\n                7,\n                8\n            ],\n            [\n                0,\n                3,\n                6\n            ],\n            [\n                1,\n                4,\n                7\n            ],\n            [\n                2,\n                5,\n                8\n            ],\n            [\n                0,\n                4,\n                8\n            ],\n            [\n                2,\n                4,\n                6\n            ]\n        ];\n        for (let [a, b, c] of winningLines){\n            if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n                return {\n                    winner: board[a],\n                    line: [\n                        a,\n                        b,\n                        c\n                    ]\n                };\n            }\n        }\n        return {\n            winner: null,\n            line: []\n        };\n    }\n    function determineGameMode(newBoard) {\n        if (gameMode === \"2P\") {\n            setIsXNext(true);\n            setIsXNext(!isXNext);\n        } else {\n            setIsAIMoving(true);\n            if (gameMode === \"Easy\") {\n                setTimeout(()=>{\n                    makeAIMoveEasy(newBoard);\n                }, 500);\n            } else if (gameMode === \"Medium\") {\n                setTimeout(()=>{\n                    makeAIMoveMedium(newBoard);\n                }, 500);\n            } else if (gameMode === \"Hard\") {\n                setTimeout(()=>{\n                    makeAIMoveHard(newBoard);\n                }, 500);\n            }\n        }\n    }\n    function makeAIMoveEasy(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        console.log(calculateWinner(board));\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n        setIsAIMoving(false);\n    }\n    function makeAIMoveMedium(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'O';\n            if (calculateWinner(testBoard).winner === 'O') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                setIsAIMoving(false);\n                return;\n            }\n        }\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'X';\n            if (calculateWinner(testBoard).winner === 'X') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                setIsAIMoving(false);\n                return;\n            }\n        }\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n        setIsAIMoving(false);\n    }\n    function makeAIMoveHard(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        const bestMove = findBestMove(newBoard);\n        console.log(\"bestMove\", bestMove);\n        if (bestMove !== -1) {\n            newBoard[bestMove] = \"O\";\n            setBoard([\n                ...newBoard\n            ]);\n            setIsXNext(true);\n            setIsAIMoving(false);\n        }\n    }\n    function findBestMove(board) {\n        let bestScore = -Infinity;\n        let move = -1;\n        for(let i = 0; i < board.length; i++){\n            if (board[i] === null) {\n                board[i] = \"O\";\n                let score = minimax(board, 0, false);\n                board[i] = null;\n                if (score > bestScore) {\n                    bestScore = score;\n                    move = i;\n                }\n            }\n        }\n        return move;\n    }\n    function minimax(board, depth, isMaximizing) {\n        const result = calculateWinner(board).winner;\n        if (result === \"O\") return 10 - depth;\n        if (result === \"X\") return depth - 10;\n        if (board.every((cell)=>cell !== null)) return 0;\n        if (isMaximizing) {\n            let bestScore = -Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"O\";\n                    const score = minimax(board, depth + 1, false);\n                    board[i] = null;\n                    bestScore = Math.max(score, bestScore);\n                }\n            }\n            return bestScore;\n        } else {\n            let bestScore = Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"X\";\n                    const score = minimax(board, depth + 1, true);\n                    board[i] = null;\n                    bestScore = Math.min(score, bestScore);\n                }\n            }\n            return bestScore;\n        }\n    }\n    function resetGame() {\n        setBoard(Array(9).fill(null));\n        setIsXNext(true);\n        setWinningFormation([]);\n        setIsAIMoving(false);\n        setIsGameOver(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            const { winner, line } = calculateWinner(board);\n            if (winner) {\n                setStatus(\"Winner: \".concat(winner));\n                setWinningFormation(line);\n                setTimeout({\n                    \"Home.useEffect\": ()=>{\n                        setIsGameOver(true);\n                    }\n                }[\"Home.useEffect\"], END_GAME_DELAY);\n            } else if (board.every({\n                \"Home.useEffect\": (square)=>square !== null\n            }[\"Home.useEffect\"])) {\n                setStatus(\"It's a tie!\");\n                setTimeout({\n                    \"Home.useEffect\": ()=>{\n                        setIsGameOver(true);\n                    }\n                }[\"Home.useEffect\"], END_GAME_DELAY);\n            } else {\n                setStatus(\"Next Player: \".concat(isXNext ? 'X' : 'O'));\n            }\n        }\n    }[\"Home.useEffect\"], [\n        board\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.title,\n                children: \"Tic-Tac-Toe\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 219,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: gameMode && !isGameOver ? styles.boardContainer : styles.boardContainerBlur,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        board: board,\n                        onSquareClick: gameMode ? handleClick : ()=>{},\n                        winningFormation: winningFormation\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 221,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        status: status\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 222,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 220,\n                columnNumber: 7\n            }, this),\n            !gameMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setGameMode: setGameMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 225,\n                columnNumber: 21\n            }, this),\n            isGameOver && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameOver__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                winner: calculateWinner().winner,\n                resetGame: resetGame,\n                setGameMode: setGameMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 227,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n        lineNumber: 218,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EdvHRsRXFia6bmDSKxY+ImBaOLU=\");\n_c = Home;\nconst styles = {\n    container: {\n        position: \"relative\",\n        textAlign: \"center\",\n        marginTop: \"1.5rem\"\n    },\n    title: {\n        fontSize: \"2rem\",\n        marginBottom: \"1rem\",\n        fontWeight: \"bold\"\n    },\n    boardContainer: {\n        pointerEvents: \"auto\"\n    },\n    boardContainerBlur: {\n        pointerEvents: \"none\",\n        opacity: 0.3,\n        filter: \"blur(0.25rem)\",\n        transition: \"opacity 0.5s ease, filter 0.5s ease\"\n    },\n    resetButton: {\n        width: \"13.75rem\",\n        margin: \"0.625rem auto\",\n        padding: \"0.75rem\",\n        fontSize: \"1.2rem\",\n        cursor: \"pointer\",\n        borderRadius: \"0.5rem\",\n        border: \"none\",\n        background: \"linear-gradient(135deg, #6e8efb, #1c429c)\",\n        color: \"white\",\n        transition: \"0.3s\"\n    },\n    resetButtonHover: {\n        transform: \"scale(1.05)\",\n        boxShadow: \"0px 4px 15px rgba(0,0,0,0.2)\"\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUztRQUNUVCxVQUFVO1FBQ1ZVLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxRQUFRO1FBQ1JDLFlBQVk7UUFDWkMsT0FBTztRQUNQVCxZQUFZO0lBQ2Q7SUFDQVUsa0JBQWtCO1FBQ2hCQyxXQUFXO1FBQ1hDLFdBQVc7SUFDYjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGRhdmlkXFxPbmVEcml2ZVxcQ29kaW5nIFByb2plY3RzXFxSZWFjdFByb2plY3RzXFxSZWFjdCBHYW1lc1xcc3JjXFxhcHBcXHBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL2JvYXJkXCI7XG5pbXBvcnQgU3RhdHVzIGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHVzXCI7XG5pbXBvcnQgR2FtZU1vZGVTZWxlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lTW9kZVNlbGVjdGlvblwiO1xuaW1wb3J0IEdhbWVPdmVyIGZyb20gXCIuL2NvbXBvbmVudHMvZ2FtZU92ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShBcnJheSg5KS5maWxsKG51bGwpKTtcbiAgY29uc3QgW2lzWE5leHQsIHNldElzWE5leHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt3aW5uaW5nRm9ybWF0aW9uLCBzZXRXaW5uaW5nRm9ybWF0aW9uXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZ2FtZU1vZGUsIHNldEdhbWVNb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNBSU1vdmluZywgc2V0SXNBSU1vdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0dhbWVPdmVyLCBzZXRJc0dhbWVPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBFTkRfR0FNRV9ERUxBWSA9IDE1MDA7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICBpZihib2FyZFtpbmRleF0gfHwgY2FsY3VsYXRlV2lubmVyKGJvYXJkKS53aW5uZXIgfHwgaXNBSU1vdmluZykgcmV0dXJuXG5cbiAgICBsZXQgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgIG5ld0JvYXJkW2luZGV4XSA9IGlzWE5leHQgPyAnWCcgOiAnTyc7XG4gICAgXG4gICAgc2V0Qm9hcmQobmV3Qm9hcmQpO1xuICAgIHNldElzWE5leHQoZmFsc2UpO1xuXG4gICAgZGV0ZXJtaW5lR2FtZU1vZGUobmV3Qm9hcmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlV2lubmVyKGJvYXJkKSB7XG4gICAgY29uc3Qgd2lubmluZ0xpbmVzID0gW1xuICAgICAgWzAsIDEsIDJdLCBbMywgNCwgNV0sIFs2LCA3LCA4XSxcbiAgICAgIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sXG4gICAgICBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICAgIF07XG5cbiAgICBmb3IgKGxldCBbYSwgYiwgY10gb2Ygd2lubmluZ0xpbmVzKSB7XG4gICAgICBpZihib2FyZFthXSAmJiBib2FyZFthXSA9PT0gYm9hcmRbYl0gJiYgYm9hcmRbYV0gPT09IGJvYXJkW2NdKXtcbiAgICAgICAgcmV0dXJuIHsgd2lubmVyOiBib2FyZFthXSwgbGluZTogW2EsIGIsIGNdIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpbm5lcjogbnVsbCwgbGluZTogW10gfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRldGVybWluZUdhbWVNb2RlKG5ld0JvYXJkKXtcbiAgICBpZihnYW1lTW9kZSA9PT0gXCIyUFwiKXtcbiAgICAgIHNldElzWE5leHQodHJ1ZSlcbiAgICAgIHNldElzWE5leHQoIWlzWE5leHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc0FJTW92aW5nKHRydWUpO1xuICAgICAgaWYoZ2FtZU1vZGUgPT09IFwiRWFzeVwiKXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWFrZUFJTW92ZUVhc3kobmV3Qm9hcmQpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9IGVsc2UgaWYoZ2FtZU1vZGUgPT09IFwiTWVkaXVtXCIpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBtYWtlQUlNb3ZlTWVkaXVtKG5ld0JvYXJkKVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIGlmKGdhbWVNb2RlID09PSBcIkhhcmRcIil7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1ha2VBSU1vdmVIYXJkKG5ld0JvYXJkKVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VBSU1vdmVFYXN5KG5ld0JvYXJkKSB7XG4gICAgaWYoY2FsY3VsYXRlV2lubmVyKG5ld0JvYXJkKS53aW5uZXIpIHJldHVyblxuICAgIGNvbnNvbGUubG9nKGNhbGN1bGF0ZVdpbm5lcihib2FyZCkpO1xuICAgIFxuICAgIGNvbnN0IGVtcHR5U3F1YXJlcyA9IG5ld0JvYXJkLm1hcCgodmFsdWUsIGlkeCkgPT4gKHZhbHVlID09PSBudWxsID8gaWR4IDogbnVsbCkpLmZpbHRlcigoaWR4KSA9PiBpZHggIT09IG51bGwpO1xuXG4gICAgaWYoZW1wdHlTcXVhcmVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBlbXB0eVNxdWFyZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1wdHlTcXVhcmVzLmxlbmd0aCldO1xuICAgIFxuICAgIG5ld0JvYXJkW3JhbmRvbUluZGV4XSA9IFwiT1wiO1xuICAgIFxuICAgIHNldEJvYXJkKFsuLi5uZXdCb2FyZF0pO1xuICAgIHNldElzWE5leHQodHJ1ZSk7XG4gICAgc2V0SXNBSU1vdmluZyhmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQUlNb3ZlTWVkaXVtKG5ld0JvYXJkKXtcbiAgICBpZihjYWxjdWxhdGVXaW5uZXIobmV3Qm9hcmQpLndpbm5lcikgcmV0dXJuXG5cbiAgICBjb25zdCBlbXB0eVNxdWFyZXMgPSBuZXdCb2FyZC5tYXAoKHZhbHVlLCBpZHgpID0+ICh2YWx1ZSA9PT0gbnVsbCA/IGlkeCA6IG51bGwpKS5maWx0ZXIoKGlkeCkgPT4gaWR4ICE9PSBudWxsKTtcbiAgICBcbiAgICBpZihlbXB0eVNxdWFyZXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgIGZvcihsZXQgbW92ZSBvZiBlbXB0eVNxdWFyZXMpe1xuICAgICAgbGV0IHRlc3RCb2FyZCA9IFsuLi5uZXdCb2FyZF07XG4gICAgICB0ZXN0Qm9hcmRbbW92ZV0gPSAnTyc7XG4gICAgICBpZihjYWxjdWxhdGVXaW5uZXIodGVzdEJvYXJkKS53aW5uZXIgPT09ICdPJyl7XG4gICAgICAgIG5ld0JvYXJkW21vdmVdID0gJ08nO1xuICAgICAgICBzZXRCb2FyZChbLi4ubmV3Qm9hcmRdKTtcbiAgICAgICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICAgICAgc2V0SXNBSU1vdmluZyhmYWxzZSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGZvcihsZXQgbW92ZSBvZiBlbXB0eVNxdWFyZXMpe1xuICAgICAgbGV0IHRlc3RCb2FyZCA9IFsuLi5uZXdCb2FyZF07XG4gICAgICB0ZXN0Qm9hcmRbbW92ZV0gPSAnWCc7XG4gICAgICBpZihjYWxjdWxhdGVXaW5uZXIodGVzdEJvYXJkKS53aW5uZXIgPT09ICdYJyl7XG4gICAgICAgIG5ld0JvYXJkW21vdmVdID0gJ08nO1xuICAgICAgICBzZXRCb2FyZChbLi4ubmV3Qm9hcmRdKTtcbiAgICAgICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICAgICAgc2V0SXNBSU1vdmluZyhmYWxzZSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gZW1wdHlTcXVhcmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5U3F1YXJlcy5sZW5ndGgpXTtcbiAgICBuZXdCb2FyZFtyYW5kb21JbmRleF0gPSBcIk9cIjtcbiAgICBcbiAgICBzZXRCb2FyZChbLi4ubmV3Qm9hcmRdKTtcbiAgICBzZXRJc1hOZXh0KHRydWUpO1xuICAgIHNldElzQUlNb3ZpbmcoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUFJTW92ZUhhcmQobmV3Qm9hcmQpe1xuICAgIGlmKGNhbGN1bGF0ZVdpbm5lcihuZXdCb2FyZCkud2lubmVyKSByZXR1cm5cblxuICAgIGNvbnN0IGJlc3RNb3ZlID0gZmluZEJlc3RNb3ZlKG5ld0JvYXJkKTtcbiAgICBjb25zb2xlLmxvZyhcImJlc3RNb3ZlXCIsIGJlc3RNb3ZlKTtcbiAgICBcbiAgICBpZiAoYmVzdE1vdmUgIT09IC0xKSB7XG4gICAgICBuZXdCb2FyZFtiZXN0TW92ZV0gPSBcIk9cIjtcbiAgICAgIHNldEJvYXJkKFsuLi5uZXdCb2FyZF0pO1xuICAgICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICAgIHNldElzQUlNb3ZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRCZXN0TW92ZShib2FyZCl7XG4gICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICBsZXQgbW92ZSA9IC0xO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGJvYXJkW2ldID09PSBudWxsKSB7XG4gICAgICAgIGJvYXJkW2ldID0gXCJPXCI7XG4gICAgICAgIGxldCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIDAsIGZhbHNlKTtcbiAgICAgICAgYm9hcmRbaV0gPSBudWxsO1xuICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgICAgICBtb3ZlID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIG1vdmU7XG4gIH1cblxuICBmdW5jdGlvbiBtaW5pbWF4KGJvYXJkLCBkZXB0aCwgaXNNYXhpbWl6aW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gY2FsY3VsYXRlV2lubmVyKGJvYXJkKS53aW5uZXI7XG4gIFxuICAgIGlmIChyZXN1bHQgPT09IFwiT1wiKSByZXR1cm4gMTAgLSBkZXB0aDtcbiAgICBpZiAocmVzdWx0ID09PSBcIlhcIikgcmV0dXJuIGRlcHRoIC0gMTA7XG4gICAgaWYgKGJvYXJkLmV2ZXJ5KGNlbGwgPT4gY2VsbCAhPT0gbnVsbCkpIHJldHVybiAwO1xuICBcbiAgICBpZiAoaXNNYXhpbWl6aW5nKSB7XG4gICAgICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbaV0gPT09IG51bGwpIHtcbiAgICAgICAgICBib2FyZFtpXSA9IFwiT1wiO1xuICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgZGVwdGggKyAxLCBmYWxzZSk7XG4gICAgICAgICAgYm9hcmRbaV0gPSBudWxsO1xuICAgICAgICAgIGJlc3RTY29yZSA9IE1hdGgubWF4KHNjb3JlLCBiZXN0U2NvcmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYmVzdFNjb3JlO1xuICBcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbaV0gPT09IG51bGwpIHtcbiAgICAgICAgICBib2FyZFtpXSA9IFwiWFwiO1xuICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgZGVwdGggKyAxLCB0cnVlKTtcbiAgICAgICAgICBib2FyZFtpXSA9IG51bGw7XG4gICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5taW4oc2NvcmUsIGJlc3RTY29yZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBiZXN0U2NvcmU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRHYW1lKCl7XG4gICAgc2V0Qm9hcmQoQXJyYXkoOSkuZmlsbChudWxsKSk7XG4gICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICBzZXRXaW5uaW5nRm9ybWF0aW9uKFtdKTtcbiAgICBzZXRJc0FJTW92aW5nKGZhbHNlKTtcbiAgICBzZXRJc0dhbWVPdmVyKGZhbHNlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyB3aW5uZXIsIGxpbmUgfSA9IGNhbGN1bGF0ZVdpbm5lcihib2FyZCk7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgc2V0U3RhdHVzKGBXaW5uZXI6ICR7d2lubmVyfWApO1xuICAgICAgc2V0V2lubmluZ0Zvcm1hdGlvbihsaW5lKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRJc0dhbWVPdmVyKHRydWUpO1xuICAgICAgfSwgRU5EX0dBTUVfREVMQVkpO1xuICAgIH0gZWxzZSBpZiAoYm9hcmQuZXZlcnkoc3F1YXJlID0+IHNxdWFyZSAhPT0gbnVsbCkpIHtcbiAgICAgIHNldFN0YXR1cyhcIkl0J3MgYSB0aWUhXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldElzR2FtZU92ZXIodHJ1ZSk7XG4gICAgICB9LCBFTkRfR0FNRV9ERUxBWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXR1cyhgTmV4dCBQbGF5ZXI6ICR7aXNYTmV4dCA/ICdYJyA6ICdPJ31gKTtcbiAgICB9XG4gIH0sIFtib2FyZF0pO1xuICAgIFxuICByZXR1cm4gKFxuICAgIDxtYWluIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMSBzdHlsZT17c3R5bGVzLnRpdGxlfT5UaWMtVGFjLVRvZTwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXtnYW1lTW9kZSAmJiAhaXNHYW1lT3ZlciA/IHN0eWxlcy5ib2FyZENvbnRhaW5lciA6IHN0eWxlcy5ib2FyZENvbnRhaW5lckJsdXJ9PlxuICAgICAgICA8Qm9hcmQgYm9hcmQ9e2JvYXJkfSBvblNxdWFyZUNsaWNrPXtnYW1lTW9kZSA/IGhhbmRsZUNsaWNrIDogKCkgPT4ge319IHdpbm5pbmdGb3JtYXRpb249e3dpbm5pbmdGb3JtYXRpb259IC8+XG4gICAgICAgIDxTdGF0dXMgc3RhdHVzPXtzdGF0dXN9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgeyFnYW1lTW9kZSAmJiA8R2FtZU1vZGVTZWxlY3Rpb24gc2V0R2FtZU1vZGU9e3NldEdhbWVNb2RlfSAvPn1cblxuICAgICAge2lzR2FtZU92ZXIgJiYgPEdhbWVPdmVyIHdpbm5lcj17Y2FsY3VsYXRlV2lubmVyKCkud2lubmVyfSByZXNldEdhbWU9e3Jlc2V0R2FtZX0gc2V0R2FtZU1vZGU9e3NldEdhbWVNb2RlfS8+fVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luVG9wOiBcIjEuNXJlbVwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxuICBib2FyZENvbnRhaW5lcjoge1xuICAgIHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiLCBcbiAgfSxcbiAgYm9hcmRDb250YWluZXJCbHVyOiB7XG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsIFxuICAgIG9wYWNpdHk6IDAuMyxcbiAgICBmaWx0ZXI6IFwiYmx1cigwLjI1cmVtKVwiLFxuICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAwLjVzIGVhc2UsIGZpbHRlciAwLjVzIGVhc2VcIixcbiAgfSxcbiAgcmVzZXRCdXR0b246IHtcbiAgICB3aWR0aDogXCIxMy43NXJlbVwiLFxuICAgIG1hcmdpbjogXCIwLjYyNXJlbSBhdXRvXCIsXG4gICAgcGFkZGluZzogXCIwLjc1cmVtXCIsXG4gICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMC41cmVtXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZThlZmIsICMxYzQyOWMpXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICB0cmFuc2l0aW9uOiBcIjAuM3NcIixcbiAgfSxcbiAgcmVzZXRCdXR0b25Ib3Zlcjoge1xuICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDE1cHggcmdiYSgwLDAsMCwwLjIpXCIsXG4gIH1cbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb2FyZCIsIlN0YXR1cyIsIkdhbWVNb2RlU2VsZWN0aW9uIiwiR2FtZU92ZXIiLCJIb21lIiwiYm9hcmQiLCJzZXRCb2FyZCIsIkFycmF5IiwiZmlsbCIsImlzWE5leHQiLCJzZXRJc1hOZXh0Iiwid2lubmluZ0Zvcm1hdGlvbiIsInNldFdpbm5pbmdGb3JtYXRpb24iLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJnYW1lTW9kZSIsInNldEdhbWVNb2RlIiwiaXNBSU1vdmluZyIsInNldElzQUlNb3ZpbmciLCJpc0dhbWVPdmVyIiwic2V0SXNHYW1lT3ZlciIsIkVORF9HQU1FX0RFTEFZIiwiaGFuZGxlQ2xpY2siLCJpbmRleCIsImNhbGN1bGF0ZVdpbm5lciIsIndpbm5lciIsIm5ld0JvYXJkIiwiZGV0ZXJtaW5lR2FtZU1vZGUiLCJ3aW5uaW5nTGluZXMiLCJhIiwiYiIsImMiLCJsaW5lIiwic2V0VGltZW91dCIsIm1ha2VBSU1vdmVFYXN5IiwibWFrZUFJTW92ZU1lZGl1bSIsIm1ha2VBSU1vdmVIYXJkIiwiY29uc29sZSIsImxvZyIsImVtcHR5U3F1YXJlcyIsIm1hcCIsInZhbHVlIiwiaWR4IiwiZmlsdGVyIiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtb3ZlIiwidGVzdEJvYXJkIiwiYmVzdE1vdmUiLCJmaW5kQmVzdE1vdmUiLCJiZXN0U2NvcmUiLCJJbmZpbml0eSIsImkiLCJzY29yZSIsIm1pbmltYXgiLCJkZXB0aCIsImlzTWF4aW1pemluZyIsInJlc3VsdCIsImV2ZXJ5IiwiY2VsbCIsIm1heCIsIm1pbiIsInJlc2V0R2FtZSIsInNxdWFyZSIsIm1haW4iLCJzdHlsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImgxIiwidGl0bGUiLCJkaXYiLCJib2FyZENvbnRhaW5lciIsImJvYXJkQ29udGFpbmVyQmx1ciIsIm9uU3F1YXJlQ2xpY2siLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsInBvaW50ZXJFdmVudHMiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInJlc2V0QnV0dG9uIiwid2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicmVzZXRCdXR0b25Ib3ZlciIsInRyYW5zZm9ybSIsImJveFNoYWRvdyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});