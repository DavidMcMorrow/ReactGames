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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board */ \"(app-pages-browser)/./src/app/components/board.js\");\n/* harmony import */ var _components_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/status */ \"(app-pages-browser)/./src/app/components/status.js\");\n/* harmony import */ var _components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gameModeSelection */ \"(app-pages-browser)/./src/app/components/gameModeSelection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(null));\n    const [isXNext, setIsXNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [winningFormation, setWinningFormation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameMode, setGameMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [resetHovered, setResetHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isAIMoving, setIsAIMoving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleClick(index) {\n        if (board[index] || calculateWinner(board).winner || isAIMoving) return;\n        let newBoard = [\n            ...board\n        ];\n        newBoard[index] = isXNext ? 'X' : 'O';\n        setBoard(newBoard);\n        setIsXNext(false);\n        if (gameMode === \"2P\") {\n            setIsXNext(true);\n            setIsXNext(!isXNext);\n        } else {\n            setIsAIMoving(true);\n            if (gameMode === \"Easy\") {\n                setTimeout(()=>{\n                    makeAIMoveEasy(newBoard);\n                }, 500);\n            } else if (gameMode === \"Medium\") {\n                setTimeout(()=>{\n                    makeAIMoveMedium(newBoard);\n                }, 500);\n            } else if (gameMode === \"Hard\") {\n                setTimeout(()=>{\n                    makeAIMoveHard(newBoard);\n                }, 500);\n            }\n        }\n    }\n    function calculateWinner(board) {\n        const winningLines = [\n            [\n                0,\n                1,\n                2\n            ],\n            [\n                3,\n                4,\n                5\n            ],\n            [\n                6,\n                7,\n                8\n            ],\n            [\n                0,\n                3,\n                6\n            ],\n            [\n                1,\n                4,\n                7\n            ],\n            [\n                2,\n                5,\n                8\n            ],\n            [\n                0,\n                4,\n                8\n            ],\n            [\n                2,\n                4,\n                6\n            ]\n        ];\n        for (let [a, b, c] of winningLines){\n            if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n                return {\n                    winner: board[a],\n                    line: [\n                        a,\n                        b,\n                        c\n                    ]\n                };\n            }\n        }\n        return {\n            winner: null,\n            line: []\n        };\n    }\n    function makeAIMoveEasy(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        console.log(calculateWinner(board));\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n        setIsAIMoving(false);\n    }\n    function makeAIMoveMedium(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'O';\n            if (calculateWinner(testBoard).winner === 'O') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                return;\n            }\n        }\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'X';\n            if (calculateWinner(testBoard).winner === 'X') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                return;\n            }\n        }\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n        setIsAIMoving(false);\n    }\n    function makeAIMoveHard(newBoard) {\n        console.log(\"makeAIMoveHard\");\n        const bestMove = findBestMove(newBoard);\n        console.log(\"bestMove\", bestMove);\n        if (bestMove !== -1) {\n            newBoard[bestMove] = \"O\";\n            setBoard([\n                ...newBoard\n            ]);\n            setIsXNext(true);\n            setIsAIMoving(false);\n        }\n    }\n    function findBestMove() {\n        let bestScore = -Infinity;\n        let move = -1;\n        for(let i = 0; i < board.length; i++){\n            if (board[i] === null) {\n                board[i] = \"O\";\n                let score = minimax(board, 0, false);\n                board[i] = null;\n                if (score > bestScore) {\n                    bestScore = score;\n                    move = i;\n                }\n            }\n        }\n        return move;\n    }\n    function minimax(board, depth, isMaximizing) {\n        const result = calculateWinner(board).winner;\n        if (result === \"O\") return 10 - depth;\n        if (result === \"X\") return depth - 10;\n        if (board.every((cell)=>cell !== null)) return 0;\n        if (isMaximizing) {\n            let bestScore = -Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"O\";\n                    const score = minimax(board, depth + 1, false);\n                    board[i] = null;\n                    bestScore = Math.max(score, bestScore);\n                }\n            }\n            return bestScore;\n        } else {\n            let bestScore = Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"X\";\n                    const score = minimax(board, depth + 1, true);\n                    board[i] = null;\n                    bestScore = Math.min(score, bestScore);\n                }\n            }\n            return bestScore;\n        }\n    }\n    function resetGame() {\n        setBoard(Array(9).fill(null));\n        setIsXNext(true);\n        setWinningFormation([]);\n        setGameMode(null);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            const { winner, line } = calculateWinner(board);\n            if (winner) {\n                setStatus(\"Winner: \".concat(winner));\n                setWinningFormation(line);\n            } else {\n                setStatus(\"Next Player: \".concat(isXNext ? 'X' : 'O'));\n            }\n        }\n    }[\"Home.useEffect\"], [\n        board\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.title,\n                children: \"Tic-Tac-Toe\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 201,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: gameMode ? styles.boardContainer : styles.boardContainerBlur,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        board: board,\n                        onSquareClick: gameMode ? handleClick : ()=>{},\n                        winningFormation: winningFormation\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 203,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        status: status\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 204,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 202,\n                columnNumber: 7\n            }, this),\n            !gameMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setGameMode: setGameMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 207,\n                columnNumber: 21\n            }, this),\n            gameMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: resetGame,\n                onMouseEnter: ()=>setResetHovered(true),\n                onMouseLeave: ()=>setResetHovered(false),\n                style: {\n                    ...styles.resetButton,\n                    ...resetHovered === true ? styles.resetButtonHover : {}\n                },\n                children: \"Reset Game\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 211,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 200,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"KI18u1fp14s9j7MunSkfqF3lQd8=\");\n_c = Home;\nconst styles = {\n    container: {\n        position: \"relative\",\n        textAlign: \"center\",\n        marginTop: \"1.5rem\"\n    },\n    title: {\n        fontSize: \"2rem\",\n        marginBottom: \"1rem\",\n        fontWeight: \"bold\"\n    },\n    boardContainer: {\n        pointerEvents: \"auto\"\n    },\n    boardContainerBlur: {\n        pointerEvents: \"none\",\n        opacity: 0.3,\n        filter: \"blur(0.25rem)\",\n        transition: \"opacity 0.5s ease, filter 0.5s ease\"\n    },\n    resetButton: {\n        width: \"13.75rem\",\n        margin: \"0.625rem auto\",\n        padding: \"0.75rem\",\n        fontSize: \"1.2rem\",\n        cursor: \"pointer\",\n        borderRadius: \"0.5rem\",\n        border: \"none\",\n        background: \"linear-gradient(135deg, #6e8efb, #1c429c)\",\n        color: \"white\",\n        transition: \"0.3s\"\n    },\n    resetButtonHover: {\n        transform: \"scale(1.05)\",\n        boxShadow: \"0px 4px 15px rgba(0,0,0,0.2)\"\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cm9qZWN0c1xcbXktbmV4dC1hcHBcXHNyY1xcYXBwXFxwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vY29tcG9uZW50cy9ib2FyZFwiO1xuaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi9jb21wb25lbnRzL3N0YXR1c1wiO1xuaW1wb3J0IEdhbWVNb2RlU2VsZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvZ2FtZU1vZGVTZWxlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShBcnJheSg5KS5maWxsKG51bGwpKTtcbiAgY29uc3QgW2lzWE5leHQsIHNldElzWE5leHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt3aW5uaW5nRm9ybWF0aW9uLCBzZXRXaW5uaW5nRm9ybWF0aW9uXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZ2FtZU1vZGUsIHNldEdhbWVNb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcmVzZXRIb3ZlcmVkLCBzZXRSZXNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNBSU1vdmluZywgc2V0SXNBSU1vdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICBpZihib2FyZFtpbmRleF0gfHwgY2FsY3VsYXRlV2lubmVyKGJvYXJkKS53aW5uZXIgfHwgaXNBSU1vdmluZykgcmV0dXJuXG5cbiAgICBsZXQgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgIG5ld0JvYXJkW2luZGV4XSA9IGlzWE5leHQgPyAnWCcgOiAnTyc7XG4gICAgXG4gICAgc2V0Qm9hcmQobmV3Qm9hcmQpO1xuICAgIHNldElzWE5leHQoZmFsc2UpO1xuXG4gICAgaWYoZ2FtZU1vZGUgPT09IFwiMlBcIil7XG4gICAgICBzZXRJc1hOZXh0KHRydWUpXG4gICAgICBzZXRJc1hOZXh0KCFpc1hOZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNBSU1vdmluZyh0cnVlKTtcbiAgICAgIGlmKGdhbWVNb2RlID09PSBcIkVhc3lcIil7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1ha2VBSU1vdmVFYXN5KG5ld0JvYXJkKVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIGlmKGdhbWVNb2RlID09PSBcIk1lZGl1bVwiKXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWFrZUFJTW92ZU1lZGl1bShuZXdCb2FyZClcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSBpZihnYW1lTW9kZSA9PT0gXCJIYXJkXCIpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBtYWtlQUlNb3ZlSGFyZChuZXdCb2FyZClcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjdWxhdGVXaW5uZXIoYm9hcmQpIHtcbiAgICBjb25zdCB3aW5uaW5nTGluZXMgPSBbXG4gICAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLFxuICAgICAgWzAsIDMsIDZdLCBbMSwgNCwgN10sIFsyLCA1LCA4XSxcbiAgICAgIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gICAgXTtcblxuICAgIGZvciAobGV0IFthLCBiLCBjXSBvZiB3aW5uaW5nTGluZXMpIHtcbiAgICAgIGlmKGJvYXJkW2FdICYmIGJvYXJkW2FdID09PSBib2FyZFtiXSAmJiBib2FyZFthXSA9PT0gYm9hcmRbY10pe1xuICAgICAgICByZXR1cm4geyB3aW5uZXI6IGJvYXJkW2FdLCBsaW5lOiBbYSwgYiwgY10gfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgd2lubmVyOiBudWxsLCBsaW5lOiBbXSB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUFJTW92ZUVhc3kobmV3Qm9hcmQpIHtcbiAgICBpZihjYWxjdWxhdGVXaW5uZXIobmV3Qm9hcmQpLndpbm5lcikgcmV0dXJuXG4gICAgY29uc29sZS5sb2coY2FsY3VsYXRlV2lubmVyKGJvYXJkKSk7XG4gICAgXG4gICAgY29uc3QgZW1wdHlTcXVhcmVzID0gbmV3Qm9hcmQubWFwKCh2YWx1ZSwgaWR4KSA9PiAodmFsdWUgPT09IG51bGwgPyBpZHggOiBudWxsKSkuZmlsdGVyKChpZHgpID0+IGlkeCAhPT0gbnVsbCk7XG5cbiAgICBpZihlbXB0eVNxdWFyZXMubGVuZ3RoID09PSAwKSByZXR1cm5cbiAgICBcbiAgICBjb25zdCByYW5kb21JbmRleCA9IGVtcHR5U3F1YXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbXB0eVNxdWFyZXMubGVuZ3RoKV07XG4gICAgXG4gICAgbmV3Qm9hcmRbcmFuZG9tSW5kZXhdID0gXCJPXCI7XG4gICAgXG4gICAgc2V0Qm9hcmQoWy4uLm5ld0JvYXJkXSk7XG4gICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICBzZXRJc0FJTW92aW5nKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VBSU1vdmVNZWRpdW0obmV3Qm9hcmQpe1xuICAgIGlmKGNhbGN1bGF0ZVdpbm5lcihuZXdCb2FyZCkud2lubmVyKSByZXR1cm5cblxuICAgIGNvbnN0IGVtcHR5U3F1YXJlcyA9IG5ld0JvYXJkLm1hcCgodmFsdWUsIGlkeCkgPT4gKHZhbHVlID09PSBudWxsID8gaWR4IDogbnVsbCkpLmZpbHRlcigoaWR4KSA9PiBpZHggIT09IG51bGwpO1xuICAgIFxuICAgIGlmKGVtcHR5U3F1YXJlcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gICAgZm9yKGxldCBtb3ZlIG9mIGVtcHR5U3F1YXJlcyl7XG4gICAgICBsZXQgdGVzdEJvYXJkID0gWy4uLm5ld0JvYXJkXTtcbiAgICAgIHRlc3RCb2FyZFttb3ZlXSA9ICdPJztcbiAgICAgIGlmKGNhbGN1bGF0ZVdpbm5lcih0ZXN0Qm9hcmQpLndpbm5lciA9PT0gJ08nKXtcbiAgICAgICAgbmV3Qm9hcmRbbW92ZV0gPSAnTyc7XG4gICAgICAgIHNldEJvYXJkKFsuLi5uZXdCb2FyZF0pO1xuICAgICAgICBzZXRJc1hOZXh0KHRydWUpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IobGV0IG1vdmUgb2YgZW1wdHlTcXVhcmVzKXtcbiAgICAgIGxldCB0ZXN0Qm9hcmQgPSBbLi4ubmV3Qm9hcmRdO1xuICAgICAgdGVzdEJvYXJkW21vdmVdID0gJ1gnO1xuICAgICAgaWYoY2FsY3VsYXRlV2lubmVyKHRlc3RCb2FyZCkud2lubmVyID09PSAnWCcpe1xuICAgICAgICBuZXdCb2FyZFttb3ZlXSA9ICdPJztcbiAgICAgICAgc2V0Qm9hcmQoWy4uLm5ld0JvYXJkXSk7XG4gICAgICAgIHNldElzWE5leHQodHJ1ZSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gZW1wdHlTcXVhcmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5U3F1YXJlcy5sZW5ndGgpXTtcbiAgICBuZXdCb2FyZFtyYW5kb21JbmRleF0gPSBcIk9cIjtcbiAgICBcbiAgICBzZXRCb2FyZChbLi4ubmV3Qm9hcmRdKTtcbiAgICBzZXRJc1hOZXh0KHRydWUpO1xuICAgIHNldElzQUlNb3ZpbmcoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUFJTW92ZUhhcmQobmV3Qm9hcmQpe1xuICAgIGNvbnNvbGUubG9nKFwibWFrZUFJTW92ZUhhcmRcIik7XG4gICAgXG4gICAgY29uc3QgYmVzdE1vdmUgPSBmaW5kQmVzdE1vdmUobmV3Qm9hcmQpO1xuICAgIGNvbnNvbGUubG9nKFwiYmVzdE1vdmVcIiwgYmVzdE1vdmUpO1xuICAgIFxuICAgIGlmIChiZXN0TW92ZSAhPT0gLTEpIHtcbiAgICAgIG5ld0JvYXJkW2Jlc3RNb3ZlXSA9IFwiT1wiO1xuICAgICAgc2V0Qm9hcmQoWy4uLm5ld0JvYXJkXSk7XG4gICAgICBzZXRJc1hOZXh0KHRydWUpO1xuICAgICAgc2V0SXNBSU1vdmluZyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZEJlc3RNb3ZlKCl7XG4gICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICBsZXQgbW92ZSA9IC0xO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGJvYXJkW2ldID09PSBudWxsKSB7XG4gICAgICAgIGJvYXJkW2ldID0gXCJPXCI7XG4gICAgICAgIGxldCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIDAsIGZhbHNlKTtcbiAgICAgICAgYm9hcmRbaV0gPSBudWxsO1xuICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgICAgICBtb3ZlID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIG1vdmU7XG4gIH1cblxuICBmdW5jdGlvbiBtaW5pbWF4KGJvYXJkLCBkZXB0aCwgaXNNYXhpbWl6aW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gY2FsY3VsYXRlV2lubmVyKGJvYXJkKS53aW5uZXI7XG4gIFxuICAgIGlmIChyZXN1bHQgPT09IFwiT1wiKSByZXR1cm4gMTAgLSBkZXB0aDtcbiAgICBpZiAocmVzdWx0ID09PSBcIlhcIikgcmV0dXJuIGRlcHRoIC0gMTA7XG4gICAgaWYgKGJvYXJkLmV2ZXJ5KGNlbGwgPT4gY2VsbCAhPT0gbnVsbCkpIHJldHVybiAwO1xuICBcbiAgICBpZiAoaXNNYXhpbWl6aW5nKSB7XG4gICAgICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbaV0gPT09IG51bGwpIHtcbiAgICAgICAgICBib2FyZFtpXSA9IFwiT1wiO1xuICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgZGVwdGggKyAxLCBmYWxzZSk7XG4gICAgICAgICAgYm9hcmRbaV0gPSBudWxsO1xuICAgICAgICAgIGJlc3RTY29yZSA9IE1hdGgubWF4KHNjb3JlLCBiZXN0U2NvcmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYmVzdFNjb3JlO1xuICBcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbaV0gPT09IG51bGwpIHtcbiAgICAgICAgICBib2FyZFtpXSA9IFwiWFwiO1xuICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgZGVwdGggKyAxLCB0cnVlKTtcbiAgICAgICAgICBib2FyZFtpXSA9IG51bGw7XG4gICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5taW4oc2NvcmUsIGJlc3RTY29yZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBiZXN0U2NvcmU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRHYW1lKCl7XG4gICAgc2V0Qm9hcmQoQXJyYXkoOSkuZmlsbChudWxsKSk7XG4gICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICBzZXRXaW5uaW5nRm9ybWF0aW9uKFtdKTtcbiAgICBzZXRHYW1lTW9kZShudWxsKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyB3aW5uZXIsIGxpbmUgfSA9IGNhbGN1bGF0ZVdpbm5lcihib2FyZCk7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgc2V0U3RhdHVzKGBXaW5uZXI6ICR7d2lubmVyfWApO1xuICAgICAgc2V0V2lubmluZ0Zvcm1hdGlvbihsaW5lKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoYE5leHQgUGxheWVyOiAke2lzWE5leHQgPyAnWCcgOiAnTyd9YCk7XG4gICAgfVxuICB9LCBbYm9hcmRdKTtcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgc3R5bGU9e3N0eWxlcy50aXRsZX0+VGljLVRhYy1Ub2U8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17Z2FtZU1vZGUgPyBzdHlsZXMuYm9hcmRDb250YWluZXIgOiBzdHlsZXMuYm9hcmRDb250YWluZXJCbHVyfT5cbiAgICAgICAgPEJvYXJkIGJvYXJkPXtib2FyZH0gb25TcXVhcmVDbGljaz17Z2FtZU1vZGUgPyBoYW5kbGVDbGljayA6ICgpID0+IHt9fSB3aW5uaW5nRm9ybWF0aW9uPXt3aW5uaW5nRm9ybWF0aW9ufSAvPlxuICAgICAgICA8U3RhdHVzIHN0YXR1cz17c3RhdHVzfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHshZ2FtZU1vZGUgJiYgPEdhbWVNb2RlU2VsZWN0aW9uIHNldEdhbWVNb2RlPXtzZXRHYW1lTW9kZX0gLz59XG5cbiAgICAgIHtcbiAgICAgICAgZ2FtZU1vZGUgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXRHYW1lfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFJlc2V0SG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFJlc2V0SG92ZXJlZChmYWxzZSl9IHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMucmVzZXRCdXR0b24sXG4gICAgICAgICAgICAuLi4ocmVzZXRIb3ZlcmVkID09PSB0cnVlID8gc3R5bGVzLnJlc2V0QnV0dG9uSG92ZXIgOiB7fSlcbiAgICAgICAgICB9fT5SZXNldCBHYW1lPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luVG9wOiBcIjEuNXJlbVwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxuICBib2FyZENvbnRhaW5lcjoge1xuICAgIHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiLCAvLyBCb2FyZCBpcyBpbnRlcmFjdGl2ZSB3aGVuIGdhbWUgc3RhcnRzXG4gIH0sXG4gIGJvYXJkQ29udGFpbmVyQmx1cjoge1xuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLCAvLyBQcmV2ZW50cyBjbGlja2luZyBiZWZvcmUgc2VsZWN0aW5nIG1vZGVcbiAgICBvcGFjaXR5OiAwLjMsXG4gICAgZmlsdGVyOiBcImJsdXIoMC4yNXJlbSlcIiwgLy8gQWRkcyBhIHNsaWdodCBibHVyXG4gICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuNXMgZWFzZSwgZmlsdGVyIDAuNXMgZWFzZVwiLFxuICB9LFxuICByZXNldEJ1dHRvbjoge1xuICAgIHdpZHRoOiBcIjEzLjc1cmVtXCIsXG4gICAgbWFyZ2luOiBcIjAuNjI1cmVtIGF1dG9cIixcbiAgICBwYWRkaW5nOiBcIjAuNzVyZW1cIixcbiAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGJvcmRlclJhZGl1czogXCIwLjVyZW1cIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZlOGVmYiwgIzFjNDI5YylcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHRyYW5zaXRpb246IFwiMC4zc1wiLFxuICB9LFxuICByZXNldEJ1dHRvbkhvdmVyOiB7XG4gICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMDUpXCIsXG4gICAgYm94U2hhZG93OiBcIjBweCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMilcIixcbiAgfVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJvYXJkIiwiU3RhdHVzIiwiR2FtZU1vZGVTZWxlY3Rpb24iLCJIb21lIiwiYm9hcmQiLCJzZXRCb2FyZCIsIkFycmF5IiwiZmlsbCIsImlzWE5leHQiLCJzZXRJc1hOZXh0Iiwid2lubmluZ0Zvcm1hdGlvbiIsInNldFdpbm5pbmdGb3JtYXRpb24iLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJnYW1lTW9kZSIsInNldEdhbWVNb2RlIiwicmVzZXRIb3ZlcmVkIiwic2V0UmVzZXRIb3ZlcmVkIiwiaXNBSU1vdmluZyIsInNldElzQUlNb3ZpbmciLCJoYW5kbGVDbGljayIsImluZGV4IiwiY2FsY3VsYXRlV2lubmVyIiwid2lubmVyIiwibmV3Qm9hcmQiLCJzZXRUaW1lb3V0IiwibWFrZUFJTW92ZUVhc3kiLCJtYWtlQUlNb3ZlTWVkaXVtIiwibWFrZUFJTW92ZUhhcmQiLCJ3aW5uaW5nTGluZXMiLCJhIiwiYiIsImMiLCJsaW5lIiwiY29uc29sZSIsImxvZyIsImVtcHR5U3F1YXJlcyIsIm1hcCIsInZhbHVlIiwiaWR4IiwiZmlsdGVyIiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtb3ZlIiwidGVzdEJvYXJkIiwiYmVzdE1vdmUiLCJmaW5kQmVzdE1vdmUiLCJiZXN0U2NvcmUiLCJJbmZpbml0eSIsImkiLCJzY29yZSIsIm1pbmltYXgiLCJkZXB0aCIsImlzTWF4aW1pemluZyIsInJlc3VsdCIsImV2ZXJ5IiwiY2VsbCIsIm1heCIsIm1pbiIsInJlc2V0R2FtZSIsIm1haW4iLCJzdHlsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImgxIiwidGl0bGUiLCJkaXYiLCJib2FyZENvbnRhaW5lciIsImJvYXJkQ29udGFpbmVyQmx1ciIsIm9uU3F1YXJlQ2xpY2siLCJidXR0b24iLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwicmVzZXRCdXR0b24iLCJyZXNldEJ1dHRvbkhvdmVyIiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ0cmFuc2Zvcm0iLCJib3hTaGFkb3ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});