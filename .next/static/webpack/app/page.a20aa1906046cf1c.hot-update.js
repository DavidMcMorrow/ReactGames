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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board */ \"(app-pages-browser)/./src/app/components/board.js\");\n/* harmony import */ var _components_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/status */ \"(app-pages-browser)/./src/app/components/status.js\");\n/* harmony import */ var _components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gameModeSelection */ \"(app-pages-browser)/./src/app/components/gameModeSelection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(null));\n    const [isXNext, setIsXNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [winningFormation, setWinningFormation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameMode, setGameMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [resetHovered, setResetHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isAIMoving, setIsAIMoving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleClick(index) {\n        if (board[index] || calculateWinner(board).winner || isAIMoving) return;\n        let newBoard = [\n            ...board\n        ];\n        newBoard[index] = isXNext ? 'X' : 'O';\n        setBoard(newBoard);\n        setIsXNext(false);\n        if (gameMode === \"2P\") {\n            setIsXNext(true);\n            setIsXNext(!isXNext);\n        } else {\n            setIsAIMoving(true);\n            if (gameMode === \"Easy\") {\n                setTimeout(()=>{\n                    makeAIMoveEasy(newBoard);\n                }, 500);\n            } else if (gameMode === \"Medium\") {\n                setTimeout(()=>{\n                    makeAIMoveMedium(newBoard);\n                }, 500);\n            } else if (gameMode === \"Hard\") {\n                setTimeout(()=>{\n                    makeAIMoveHard(newBoard);\n                }, 500);\n            }\n        }\n    }\n    function calculateWinner(board) {\n        const winningLines = [\n            [\n                0,\n                1,\n                2\n            ],\n            [\n                3,\n                4,\n                5\n            ],\n            [\n                6,\n                7,\n                8\n            ],\n            [\n                0,\n                3,\n                6\n            ],\n            [\n                1,\n                4,\n                7\n            ],\n            [\n                2,\n                5,\n                8\n            ],\n            [\n                0,\n                4,\n                8\n            ],\n            [\n                2,\n                4,\n                6\n            ]\n        ];\n        for (let [a, b, c] of winningLines){\n            if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n                return {\n                    winner: board[a],\n                    line: [\n                        a,\n                        b,\n                        c\n                    ]\n                };\n            }\n        }\n        return {\n            winner: null,\n            line: []\n        };\n    }\n    function makeAIMoveEasy(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        console.log(calculateWinner(board));\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n        setIsAIMoving(false);\n    }\n    function makeAIMoveMedium(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'O';\n            if (calculateWinner(testBoard).winner === 'O') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                setIsAIMoving(false);\n                return;\n            }\n        }\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'X';\n            if (calculateWinner(testBoard).winner === 'X') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                return;\n            }\n        }\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n        setIsAIMoving(false);\n    }\n    function makeAIMoveHard(newBoard) {\n        console.log(\"makeAIMoveHard\");\n        const bestMove = findBestMove(newBoard);\n        console.log(\"bestMove\", bestMove);\n        if (bestMove !== -1) {\n            newBoard[bestMove] = \"O\";\n            setBoard([\n                ...newBoard\n            ]);\n            setIsXNext(true);\n            setIsAIMoving(false);\n        }\n    }\n    function findBestMove() {\n        let bestScore = -Infinity;\n        let move = -1;\n        for(let i = 0; i < board.length; i++){\n            if (board[i] === null) {\n                board[i] = \"O\";\n                let score = minimax(board, 0, false);\n                board[i] = null;\n                if (score > bestScore) {\n                    bestScore = score;\n                    move = i;\n                }\n            }\n        }\n        return move;\n    }\n    function minimax(board, depth, isMaximizing) {\n        const result = calculateWinner(board).winner;\n        if (result === \"O\") return 10 - depth;\n        if (result === \"X\") return depth - 10;\n        if (board.every((cell)=>cell !== null)) return 0;\n        if (isMaximizing) {\n            let bestScore = -Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"O\";\n                    const score = minimax(board, depth + 1, false);\n                    board[i] = null;\n                    bestScore = Math.max(score, bestScore);\n                }\n            }\n            return bestScore;\n        } else {\n            let bestScore = Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"X\";\n                    const score = minimax(board, depth + 1, true);\n                    board[i] = null;\n                    bestScore = Math.min(score, bestScore);\n                }\n            }\n            return bestScore;\n        }\n    }\n    function resetGame() {\n        setBoard(Array(9).fill(null));\n        setIsXNext(true);\n        setWinningFormation([]);\n        setGameMode(null);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            const { winner, line } = calculateWinner(board);\n            if (winner) {\n                setStatus(\"Winner: \".concat(winner));\n                setWinningFormation(line);\n            } else {\n                setStatus(\"Next Player: \".concat(isXNext ? 'X' : 'O'));\n            }\n        }\n    }[\"Home.useEffect\"], [\n        board\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.title,\n                children: \"Tic-Tac-Toe\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 202,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: gameMode ? styles.boardContainer : styles.boardContainerBlur,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        board: board,\n                        onSquareClick: gameMode ? handleClick : ()=>{},\n                        winningFormation: winningFormation\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 204,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        status: status\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 205,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 203,\n                columnNumber: 7\n            }, this),\n            !gameMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setGameMode: setGameMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 208,\n                columnNumber: 21\n            }, this),\n            gameMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: resetGame,\n                onMouseEnter: ()=>setResetHovered(true),\n                onMouseLeave: ()=>setResetHovered(false),\n                style: {\n                    ...styles.resetButton,\n                    ...resetHovered === true ? styles.resetButtonHover : {}\n                },\n                children: \"Reset Game\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 212,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\my-next-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 201,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"KI18u1fp14s9j7MunSkfqF3lQd8=\");\n_c = Home;\nconst styles = {\n    container: {\n        position: \"relative\",\n        textAlign: \"center\",\n        marginTop: \"1.5rem\"\n    },\n    title: {\n        fontSize: \"2rem\",\n        marginBottom: \"1rem\",\n        fontWeight: \"bold\"\n    },\n    boardContainer: {\n        pointerEvents: \"auto\"\n    },\n    boardContainerBlur: {\n        pointerEvents: \"none\",\n        opacity: 0.3,\n        filter: \"blur(0.25rem)\",\n        transition: \"opacity 0.5s ease, filter 0.5s ease\"\n    },\n    resetButton: {\n        width: \"13.75rem\",\n        margin: \"0.625rem auto\",\n        padding: \"0.75rem\",\n        fontSize: \"1.2rem\",\n        cursor: \"pointer\",\n        borderRadius: \"0.5rem\",\n        border: \"none\",\n        background: \"linear-gradient(135deg, #6e8efb, #1c429c)\",\n        color: \"white\",\n        transition: \"0.3s\"\n    },\n    resetButtonHover: {\n        transform: \"scale(1.05)\",\n        boxShadow: \"0px 4px 15px rgba(0,0,0,0.2)\"\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWN0c1xcUmVhY3RQcm9qZWN0c1xcbXktbmV4dC1hcHBcXHNyY1xcYXBwXFxwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vY29tcG9uZW50cy9ib2FyZFwiO1xuaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi9jb21wb25lbnRzL3N0YXR1c1wiO1xuaW1wb3J0IEdhbWVNb2RlU2VsZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvZ2FtZU1vZGVTZWxlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShBcnJheSg5KS5maWxsKG51bGwpKTtcbiAgY29uc3QgW2lzWE5leHQsIHNldElzWE5leHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt3aW5uaW5nRm9ybWF0aW9uLCBzZXRXaW5uaW5nRm9ybWF0aW9uXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZ2FtZU1vZGUsIHNldEdhbWVNb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcmVzZXRIb3ZlcmVkLCBzZXRSZXNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNBSU1vdmluZywgc2V0SXNBSU1vdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICBpZihib2FyZFtpbmRleF0gfHwgY2FsY3VsYXRlV2lubmVyKGJvYXJkKS53aW5uZXIgfHwgaXNBSU1vdmluZykgcmV0dXJuXG5cbiAgICBsZXQgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgIG5ld0JvYXJkW2luZGV4XSA9IGlzWE5leHQgPyAnWCcgOiAnTyc7XG4gICAgXG4gICAgc2V0Qm9hcmQobmV3Qm9hcmQpO1xuICAgIHNldElzWE5leHQoZmFsc2UpO1xuXG4gICAgaWYoZ2FtZU1vZGUgPT09IFwiMlBcIil7XG4gICAgICBzZXRJc1hOZXh0KHRydWUpXG4gICAgICBzZXRJc1hOZXh0KCFpc1hOZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNBSU1vdmluZyh0cnVlKTtcbiAgICAgIGlmKGdhbWVNb2RlID09PSBcIkVhc3lcIil7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1ha2VBSU1vdmVFYXN5KG5ld0JvYXJkKVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIGlmKGdhbWVNb2RlID09PSBcIk1lZGl1bVwiKXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWFrZUFJTW92ZU1lZGl1bShuZXdCb2FyZClcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSBpZihnYW1lTW9kZSA9PT0gXCJIYXJkXCIpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBtYWtlQUlNb3ZlSGFyZChuZXdCb2FyZClcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjdWxhdGVXaW5uZXIoYm9hcmQpIHtcbiAgICBjb25zdCB3aW5uaW5nTGluZXMgPSBbXG4gICAgICBbMCwgMSwgMl0sIFszLCA0LCA1XSwgWzYsIDcsIDhdLFxuICAgICAgWzAsIDMsIDZdLCBbMSwgNCwgN10sIFsyLCA1LCA4XSxcbiAgICAgIFswLCA0LCA4XSwgWzIsIDQsIDZdXG4gICAgXTtcblxuICAgIGZvciAobGV0IFthLCBiLCBjXSBvZiB3aW5uaW5nTGluZXMpIHtcbiAgICAgIGlmKGJvYXJkW2FdICYmIGJvYXJkW2FdID09PSBib2FyZFtiXSAmJiBib2FyZFthXSA9PT0gYm9hcmRbY10pe1xuICAgICAgICByZXR1cm4geyB3aW5uZXI6IGJvYXJkW2FdLCBsaW5lOiBbYSwgYiwgY10gfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgd2lubmVyOiBudWxsLCBsaW5lOiBbXSB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUFJTW92ZUVhc3kobmV3Qm9hcmQpIHtcbiAgICBpZihjYWxjdWxhdGVXaW5uZXIobmV3Qm9hcmQpLndpbm5lcikgcmV0dXJuXG4gICAgY29uc29sZS5sb2coY2FsY3VsYXRlV2lubmVyKGJvYXJkKSk7XG4gICAgXG4gICAgY29uc3QgZW1wdHlTcXVhcmVzID0gbmV3Qm9hcmQubWFwKCh2YWx1ZSwgaWR4KSA9PiAodmFsdWUgPT09IG51bGwgPyBpZHggOiBudWxsKSkuZmlsdGVyKChpZHgpID0+IGlkeCAhPT0gbnVsbCk7XG5cbiAgICBpZihlbXB0eVNxdWFyZXMubGVuZ3RoID09PSAwKSByZXR1cm5cbiAgICBcbiAgICBjb25zdCByYW5kb21JbmRleCA9IGVtcHR5U3F1YXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbXB0eVNxdWFyZXMubGVuZ3RoKV07XG4gICAgXG4gICAgbmV3Qm9hcmRbcmFuZG9tSW5kZXhdID0gXCJPXCI7XG4gICAgXG4gICAgc2V0Qm9hcmQoWy4uLm5ld0JvYXJkXSk7XG4gICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICBzZXRJc0FJTW92aW5nKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VBSU1vdmVNZWRpdW0obmV3Qm9hcmQpe1xuICAgIGlmKGNhbGN1bGF0ZVdpbm5lcihuZXdCb2FyZCkud2lubmVyKSByZXR1cm5cblxuICAgIGNvbnN0IGVtcHR5U3F1YXJlcyA9IG5ld0JvYXJkLm1hcCgodmFsdWUsIGlkeCkgPT4gKHZhbHVlID09PSBudWxsID8gaWR4IDogbnVsbCkpLmZpbHRlcigoaWR4KSA9PiBpZHggIT09IG51bGwpO1xuICAgIFxuICAgIGlmKGVtcHR5U3F1YXJlcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gICAgZm9yKGxldCBtb3ZlIG9mIGVtcHR5U3F1YXJlcyl7XG4gICAgICBsZXQgdGVzdEJvYXJkID0gWy4uLm5ld0JvYXJkXTtcbiAgICAgIHRlc3RCb2FyZFttb3ZlXSA9ICdPJztcbiAgICAgIGlmKGNhbGN1bGF0ZVdpbm5lcih0ZXN0Qm9hcmQpLndpbm5lciA9PT0gJ08nKXtcbiAgICAgICAgbmV3Qm9hcmRbbW92ZV0gPSAnTyc7XG4gICAgICAgIHNldEJvYXJkKFsuLi5uZXdCb2FyZF0pO1xuICAgICAgICBzZXRJc1hOZXh0KHRydWUpO1xuICAgICAgICBzZXRJc0FJTW92aW5nKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yKGxldCBtb3ZlIG9mIGVtcHR5U3F1YXJlcyl7XG4gICAgICBsZXQgdGVzdEJvYXJkID0gWy4uLm5ld0JvYXJkXTtcbiAgICAgIHRlc3RCb2FyZFttb3ZlXSA9ICdYJztcbiAgICAgIGlmKGNhbGN1bGF0ZVdpbm5lcih0ZXN0Qm9hcmQpLndpbm5lciA9PT0gJ1gnKXtcbiAgICAgICAgbmV3Qm9hcmRbbW92ZV0gPSAnTyc7XG4gICAgICAgIHNldEJvYXJkKFsuLi5uZXdCb2FyZF0pO1xuICAgICAgICBzZXRJc1hOZXh0KHRydWUpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21JbmRleCA9IGVtcHR5U3F1YXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbXB0eVNxdWFyZXMubGVuZ3RoKV07XG4gICAgbmV3Qm9hcmRbcmFuZG9tSW5kZXhdID0gXCJPXCI7XG4gICAgXG4gICAgc2V0Qm9hcmQoWy4uLm5ld0JvYXJkXSk7XG4gICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICBzZXRJc0FJTW92aW5nKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VBSU1vdmVIYXJkKG5ld0JvYXJkKXtcbiAgICBjb25zb2xlLmxvZyhcIm1ha2VBSU1vdmVIYXJkXCIpO1xuICAgIFxuICAgIGNvbnN0IGJlc3RNb3ZlID0gZmluZEJlc3RNb3ZlKG5ld0JvYXJkKTtcbiAgICBjb25zb2xlLmxvZyhcImJlc3RNb3ZlXCIsIGJlc3RNb3ZlKTtcbiAgICBcbiAgICBpZiAoYmVzdE1vdmUgIT09IC0xKSB7XG4gICAgICBuZXdCb2FyZFtiZXN0TW92ZV0gPSBcIk9cIjtcbiAgICAgIHNldEJvYXJkKFsuLi5uZXdCb2FyZF0pO1xuICAgICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICAgIHNldElzQUlNb3ZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRCZXN0TW92ZSgpe1xuICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgbGV0IG1vdmUgPSAtMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChib2FyZFtpXSA9PT0gbnVsbCkge1xuICAgICAgICBib2FyZFtpXSA9IFwiT1wiO1xuICAgICAgICBsZXQgc2NvcmUgPSBtaW5pbWF4KGJvYXJkLCAwLCBmYWxzZSk7XG4gICAgICAgIGJvYXJkW2ldID0gbnVsbDtcbiAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgbW92ZSA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHJldHVybiBtb3ZlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWluaW1heChib2FyZCwgZGVwdGgsIGlzTWF4aW1pemluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhbGN1bGF0ZVdpbm5lcihib2FyZCkud2lubmVyO1xuICBcbiAgICBpZiAocmVzdWx0ID09PSBcIk9cIikgcmV0dXJuIDEwIC0gZGVwdGg7XG4gICAgaWYgKHJlc3VsdCA9PT0gXCJYXCIpIHJldHVybiBkZXB0aCAtIDEwO1xuICAgIGlmIChib2FyZC5ldmVyeShjZWxsID0+IGNlbGwgIT09IG51bGwpKSByZXR1cm4gMDtcbiAgXG4gICAgaWYgKGlzTWF4aW1pemluZykge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldID09PSBudWxsKSB7XG4gICAgICAgICAgYm9hcmRbaV0gPSBcIk9cIjtcbiAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIGRlcHRoICsgMSwgZmFsc2UpO1xuICAgICAgICAgIGJvYXJkW2ldID0gbnVsbDtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBNYXRoLm1heChzY29yZSwgYmVzdFNjb3JlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJlc3RTY29yZTtcbiAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldID09PSBudWxsKSB7XG4gICAgICAgICAgYm9hcmRbaV0gPSBcIlhcIjtcbiAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIGRlcHRoICsgMSwgdHJ1ZSk7XG4gICAgICAgICAgYm9hcmRbaV0gPSBudWxsO1xuICAgICAgICAgIGJlc3RTY29yZSA9IE1hdGgubWluKHNjb3JlLCBiZXN0U2NvcmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYmVzdFNjb3JlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0R2FtZSgpe1xuICAgIHNldEJvYXJkKEFycmF5KDkpLmZpbGwobnVsbCkpO1xuICAgIHNldElzWE5leHQodHJ1ZSk7XG4gICAgc2V0V2lubmluZ0Zvcm1hdGlvbihbXSk7XG4gICAgc2V0R2FtZU1vZGUobnVsbCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgd2lubmVyLCBsaW5lIH0gPSBjYWxjdWxhdGVXaW5uZXIoYm9hcmQpO1xuICAgIGlmICh3aW5uZXIpIHtcbiAgICAgIHNldFN0YXR1cyhgV2lubmVyOiAke3dpbm5lcn1gKTtcbiAgICAgIHNldFdpbm5pbmdGb3JtYXRpb24obGluZSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdHVzKGBOZXh0IFBsYXllcjogJHtpc1hOZXh0ID8gJ1gnIDogJ08nfWApO1xuICAgIH1cbiAgfSwgW2JvYXJkXSk7XG4gICAgXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIHN0eWxlPXtzdHlsZXMudGl0bGV9PlRpYy1UYWMtVG9lPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e2dhbWVNb2RlID8gc3R5bGVzLmJvYXJkQ29udGFpbmVyIDogc3R5bGVzLmJvYXJkQ29udGFpbmVyQmx1cn0+XG4gICAgICAgIDxCb2FyZCBib2FyZD17Ym9hcmR9IG9uU3F1YXJlQ2xpY2s9e2dhbWVNb2RlID8gaGFuZGxlQ2xpY2sgOiAoKSA9PiB7fX0gd2lubmluZ0Zvcm1hdGlvbj17d2lubmluZ0Zvcm1hdGlvbn0gLz5cbiAgICAgICAgPFN0YXR1cyBzdGF0dXM9e3N0YXR1c30gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7IWdhbWVNb2RlICYmIDxHYW1lTW9kZVNlbGVjdGlvbiBzZXRHYW1lTW9kZT17c2V0R2FtZU1vZGV9IC8+fVxuXG4gICAgICB7XG4gICAgICAgIGdhbWVNb2RlICYmIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0R2FtZX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRSZXNldEhvdmVyZWQodHJ1ZSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRSZXNldEhvdmVyZWQoZmFsc2UpfSBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLnJlc2V0QnV0dG9uLFxuICAgICAgICAgICAgLi4uKHJlc2V0SG92ZXJlZCA9PT0gdHJ1ZSA/IHN0eWxlcy5yZXNldEJ1dHRvbkhvdmVyIDoge30pXG4gICAgICAgICAgfX0+UmVzZXQgR2FtZTwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L21haW4+XG4gIClcbn1cblxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIG1hcmdpblRvcDogXCIxLjVyZW1cIixcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbiAgYm9hcmRDb250YWluZXI6IHtcbiAgICBwb2ludGVyRXZlbnRzOiBcImF1dG9cIiwgLy8gQm9hcmQgaXMgaW50ZXJhY3RpdmUgd2hlbiBnYW1lIHN0YXJ0c1xuICB9LFxuICBib2FyZENvbnRhaW5lckJsdXI6IHtcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIiwgLy8gUHJldmVudHMgY2xpY2tpbmcgYmVmb3JlIHNlbGVjdGluZyBtb2RlXG4gICAgb3BhY2l0eTogMC4zLFxuICAgIGZpbHRlcjogXCJibHVyKDAuMjVyZW0pXCIsIC8vIEFkZHMgYSBzbGlnaHQgYmx1clxuICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAwLjVzIGVhc2UsIGZpbHRlciAwLjVzIGVhc2VcIixcbiAgfSxcbiAgcmVzZXRCdXR0b246IHtcbiAgICB3aWR0aDogXCIxMy43NXJlbVwiLFxuICAgIG1hcmdpbjogXCIwLjYyNXJlbSBhdXRvXCIsXG4gICAgcGFkZGluZzogXCIwLjc1cmVtXCIsXG4gICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMC41cmVtXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZThlZmIsICMxYzQyOWMpXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICB0cmFuc2l0aW9uOiBcIjAuM3NcIixcbiAgfSxcbiAgcmVzZXRCdXR0b25Ib3Zlcjoge1xuICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDE1cHggcmdiYSgwLDAsMCwwLjIpXCIsXG4gIH1cbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb2FyZCIsIlN0YXR1cyIsIkdhbWVNb2RlU2VsZWN0aW9uIiwiSG9tZSIsImJvYXJkIiwic2V0Qm9hcmQiLCJBcnJheSIsImZpbGwiLCJpc1hOZXh0Iiwic2V0SXNYTmV4dCIsIndpbm5pbmdGb3JtYXRpb24iLCJzZXRXaW5uaW5nRm9ybWF0aW9uIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiZ2FtZU1vZGUiLCJzZXRHYW1lTW9kZSIsInJlc2V0SG92ZXJlZCIsInNldFJlc2V0SG92ZXJlZCIsImlzQUlNb3ZpbmciLCJzZXRJc0FJTW92aW5nIiwiaGFuZGxlQ2xpY2siLCJpbmRleCIsImNhbGN1bGF0ZVdpbm5lciIsIndpbm5lciIsIm5ld0JvYXJkIiwic2V0VGltZW91dCIsIm1ha2VBSU1vdmVFYXN5IiwibWFrZUFJTW92ZU1lZGl1bSIsIm1ha2VBSU1vdmVIYXJkIiwid2lubmluZ0xpbmVzIiwiYSIsImIiLCJjIiwibGluZSIsImNvbnNvbGUiLCJsb2ciLCJlbXB0eVNxdWFyZXMiLCJtYXAiLCJ2YWx1ZSIsImlkeCIsImZpbHRlciIsImxlbmd0aCIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibW92ZSIsInRlc3RCb2FyZCIsImJlc3RNb3ZlIiwiZmluZEJlc3RNb3ZlIiwiYmVzdFNjb3JlIiwiSW5maW5pdHkiLCJpIiwic2NvcmUiLCJtaW5pbWF4IiwiZGVwdGgiLCJpc01heGltaXppbmciLCJyZXN1bHQiLCJldmVyeSIsImNlbGwiLCJtYXgiLCJtaW4iLCJyZXNldEdhbWUiLCJtYWluIiwic3R5bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoMSIsInRpdGxlIiwiZGl2IiwiYm9hcmRDb250YWluZXIiLCJib2FyZENvbnRhaW5lckJsdXIiLCJvblNxdWFyZUNsaWNrIiwiYnV0dG9uIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInJlc2V0QnV0dG9uIiwicmVzZXRCdXR0b25Ib3ZlciIsInBvc2l0aW9uIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0IiwicG9pbnRlckV2ZW50cyIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImNvbG9yIiwidHJhbnNmb3JtIiwiYm94U2hhZG93Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});