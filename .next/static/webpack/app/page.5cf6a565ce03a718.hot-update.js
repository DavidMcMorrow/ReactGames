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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board */ \"(app-pages-browser)/./src/app/components/board.js\");\n/* harmony import */ var _components_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/status */ \"(app-pages-browser)/./src/app/components/status.js\");\n/* harmony import */ var _components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gameModeSelection */ \"(app-pages-browser)/./src/app/components/gameModeSelection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(null));\n    const [isXNext, setIsXNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [winningFormation, setWinningFormation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [gameMode, setGameMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isAIMoving, setIsAIMoving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isGameOver, setIsGameOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleClick(index) {\n        if (board[index] || calculateWinner(board).winner || isAIMoving) return;\n        let newBoard = [\n            ...board\n        ];\n        newBoard[index] = isXNext ? 'X' : 'O';\n        setBoard(newBoard);\n        setIsXNext(false);\n        determineGameMode(newBoard);\n    }\n    function calculateWinner(board) {\n        const winningLines = [\n            [\n                0,\n                1,\n                2\n            ],\n            [\n                3,\n                4,\n                5\n            ],\n            [\n                6,\n                7,\n                8\n            ],\n            [\n                0,\n                3,\n                6\n            ],\n            [\n                1,\n                4,\n                7\n            ],\n            [\n                2,\n                5,\n                8\n            ],\n            [\n                0,\n                4,\n                8\n            ],\n            [\n                2,\n                4,\n                6\n            ]\n        ];\n        for (let [a, b, c] of winningLines){\n            if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n                setIsGameOver(true);\n                return {\n                    winner: board[a],\n                    line: [\n                        a,\n                        b,\n                        c\n                    ]\n                };\n            }\n        }\n        return {\n            winner: null,\n            line: []\n        };\n    }\n    function determineGameMode(newBoard) {\n        if (gameMode === \"2P\") {\n            setIsXNext(true);\n            setIsXNext(!isXNext);\n        } else {\n            setIsAIMoving(true);\n            if (gameMode === \"Easy\") {\n                setTimeout(()=>{\n                    makeAIMoveEasy(newBoard);\n                }, 500);\n            } else if (gameMode === \"Medium\") {\n                setTimeout(()=>{\n                    makeAIMoveMedium(newBoard);\n                }, 500);\n            } else if (gameMode === \"Hard\") {\n                setTimeout(()=>{\n                    makeAIMoveHard(newBoard);\n                }, 500);\n            }\n        }\n    }\n    function makeAIMoveEasy(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        console.log(calculateWinner(board));\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n        setIsAIMoving(false);\n    }\n    function makeAIMoveMedium(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        const emptySquares = newBoard.map((value, idx)=>value === null ? idx : null).filter((idx)=>idx !== null);\n        if (emptySquares.length === 0) return;\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'O';\n            if (calculateWinner(testBoard).winner === 'O') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                setIsAIMoving(false);\n                return;\n            }\n        }\n        for (let move of emptySquares){\n            let testBoard = [\n                ...newBoard\n            ];\n            testBoard[move] = 'X';\n            if (calculateWinner(testBoard).winner === 'X') {\n                newBoard[move] = 'O';\n                setBoard([\n                    ...newBoard\n                ]);\n                setIsXNext(true);\n                setIsAIMoving(false);\n                return;\n            }\n        }\n        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];\n        newBoard[randomIndex] = \"O\";\n        setBoard([\n            ...newBoard\n        ]);\n        setIsXNext(true);\n        setIsAIMoving(false);\n    }\n    function makeAIMoveHard(newBoard) {\n        if (calculateWinner(newBoard).winner) return;\n        const bestMove = findBestMove(newBoard);\n        console.log(\"bestMove\", bestMove);\n        if (bestMove !== -1) {\n            newBoard[bestMove] = \"O\";\n            setBoard([\n                ...newBoard\n            ]);\n            setIsXNext(true);\n            setIsAIMoving(false);\n        }\n    }\n    function findBestMove(board) {\n        let bestScore = -Infinity;\n        let move = -1;\n        for(let i = 0; i < board.length; i++){\n            if (board[i] === null) {\n                board[i] = \"O\";\n                let score = minimax(board, 0, false);\n                board[i] = null;\n                if (score > bestScore) {\n                    bestScore = score;\n                    move = i;\n                }\n            }\n        }\n        return move;\n    }\n    function minimax(board, depth, isMaximizing) {\n        const result = calculateWinner(board).winner;\n        if (result === \"O\") return 10 - depth;\n        if (result === \"X\") return depth - 10;\n        if (board.every((cell)=>cell !== null)) return 0;\n        if (isMaximizing) {\n            let bestScore = -Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"O\";\n                    const score = minimax(board, depth + 1, false);\n                    board[i] = null;\n                    bestScore = Math.max(score, bestScore);\n                }\n            }\n            return bestScore;\n        } else {\n            let bestScore = Infinity;\n            for(let i = 0; i < board.length; i++){\n                if (board[i] === null) {\n                    board[i] = \"X\";\n                    const score = minimax(board, depth + 1, true);\n                    board[i] = null;\n                    bestScore = Math.min(score, bestScore);\n                }\n            }\n            return bestScore;\n        }\n    }\n    function resetGame() {\n        setBoard(Array(9).fill(null));\n        setIsXNext(true);\n        setWinningFormation([]);\n        setGameMode(null);\n        setIsAIMoving(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            const { winner, line } = calculateWinner(board);\n            if (winner) {\n                setStatus(\"Winner: \".concat(winner));\n                setWinningFormation(line);\n            } else {\n                setStatus(\"Next Player: \".concat(isXNext ? 'X' : 'O'));\n            }\n        }\n    }[\"Home.useEffect\"], [\n        board\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.title,\n                children: \"Tic-Tac-Toe\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 209,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: gameMode ? styles.boardContainer : styles.boardContainerBlur,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        board: board,\n                        onSquareClick: gameMode ? handleClick : ()=>{},\n                        winningFormation: winningFormation\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 211,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        status: status\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 212,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 210,\n                columnNumber: 7\n            }, this),\n            !gameMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameModeSelection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setGameMode: setGameMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 215,\n                columnNumber: 21\n            }, this),\n            isGameOver && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameOver, {\n                winner: calculateWinner.winner\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n                lineNumber: 217,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Coding Projects\\\\ReactProjects\\\\React Games\\\\src\\\\app\\\\page.js\",\n        lineNumber: 208,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EdvHRsRXFia6bmDSKxY+ImBaOLU=\");\n_c = Home;\nconst styles = {\n    container: {\n        position: \"relative\",\n        textAlign: \"center\",\n        marginTop: \"1.5rem\"\n    },\n    title: {\n        fontSize: \"2rem\",\n        marginBottom: \"1rem\",\n        fontWeight: \"bold\"\n    },\n    boardContainer: {\n        pointerEvents: \"auto\"\n    },\n    boardContainerBlur: {\n        pointerEvents: \"none\",\n        opacity: 0.3,\n        filter: \"blur(0.25rem)\",\n        transition: \"opacity 0.5s ease, filter 0.5s ease\"\n    },\n    resetButton: {\n        width: \"13.75rem\",\n        margin: \"0.625rem auto\",\n        padding: \"0.75rem\",\n        fontSize: \"1.2rem\",\n        cursor: \"pointer\",\n        borderRadius: \"0.5rem\",\n        border: \"none\",\n        background: \"linear-gradient(135deg, #6e8efb, #1c429c)\",\n        color: \"white\",\n        transition: \"0.3s\"\n    },\n    resetButtonHover: {\n        transform: \"scale(1.05)\",\n        boxShadow: \"0px 4px 15px rgba(0,0,0,0.2)\"\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQUNKO0tBQU07SUFFVixxQkFDRSw4REFBQzREO1FBQUtDLE9BQU9DLE9BQU9DLFNBQVM7OzBCQUMzQiw4REFBQ0M7Z0JBQUdILE9BQU9DLE9BQU9HLEtBQUs7MEJBQUU7Ozs7OzswQkFDekIsOERBQUNDO2dCQUFJTCxPQUFPbkQsV0FBV29ELE9BQU9LLGNBQWMsR0FBR0wsT0FBT00sa0JBQWtCOztrQ0FDdEUsOERBQUN4RSx5REFBS0E7d0JBQUNJLE9BQU9BO3dCQUFPcUUsZUFBZTNELFdBQVdNLGNBQWMsS0FBTzt3QkFBR1Ysa0JBQWtCQTs7Ozs7O2tDQUN6Riw4REFBQ1QsMERBQU1BO3dCQUFDVyxRQUFRQTs7Ozs7Ozs7Ozs7O1lBR2pCLENBQUNFLDBCQUFZLDhEQUFDWixxRUFBaUJBO2dCQUFDYSxhQUFhQTs7Ozs7O1lBRTdDRyw0QkFBYyw4REFBQ3dEO2dCQUFTbkQsUUFBUUQsZ0JBQWdCQyxNQUFNOzs7Ozs7Ozs7Ozs7QUFHN0Q7R0FwTndCcEI7S0FBQUE7QUF1TnhCLE1BQU0rRCxTQUFTO0lBQ2JDLFdBQVc7UUFDVFEsVUFBVTtRQUNWQyxXQUFXO1FBQ1hDLFdBQVc7SUFDYjtJQUNBUixPQUFPO1FBQ0xTLFVBQVU7UUFDVkMsY0FBYztRQUNkQyxZQUFZO0lBQ2Q7SUFDQVQsZ0JBQWdCO1FBQ2RVLGVBQWU7SUFDakI7SUFDQVQsb0JBQW9CO1FBQ2xCUyxlQUFlO1FBQ2ZDLFNBQVM7UUFDVHpDLFFBQVE7UUFDUjBDLFlBQVk7SUFDZDtJQUNBQyxhQUFhO1FBQ1hDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RULFVBQVU7UUFDVlUsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLFFBQVE7UUFDUkMsWUFBWTtRQUNaQyxPQUFPO1FBQ1BULFlBQVk7SUFDZDtJQUNBVSxrQkFBa0I7UUFDaEJDLFdBQVc7UUFDWEMsV0FBVztJQUNiO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGF2aWRcXE9uZURyaXZlXFxDb2RpbmcgUHJvamVjdHNcXFJlYWN0UHJvamVjdHNcXFJlYWN0IEdhbWVzXFxzcmNcXGFwcFxccGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvYm9hcmRcIjtcbmltcG9ydCBTdGF0dXMgZnJvbSBcIi4vY29tcG9uZW50cy9zdGF0dXNcIjtcbmltcG9ydCBHYW1lTW9kZVNlbGVjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWVNb2RlU2VsZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoQXJyYXkoOSkuZmlsbChudWxsKSk7XG4gIGNvbnN0IFtpc1hOZXh0LCBzZXRJc1hOZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbd2lubmluZ0Zvcm1hdGlvbiwgc2V0V2lubmluZ0Zvcm1hdGlvbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2dhbWVNb2RlLCBzZXRHYW1lTW9kZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzQUlNb3ZpbmcsIHNldElzQUlNb3ZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNHYW1lT3Zlciwgc2V0SXNHYW1lT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICBpZihib2FyZFtpbmRleF0gfHwgY2FsY3VsYXRlV2lubmVyKGJvYXJkKS53aW5uZXIgfHwgaXNBSU1vdmluZykgcmV0dXJuXG5cbiAgICBsZXQgbmV3Qm9hcmQgPSBbLi4uYm9hcmRdO1xuICAgIG5ld0JvYXJkW2luZGV4XSA9IGlzWE5leHQgPyAnWCcgOiAnTyc7XG4gICAgXG4gICAgc2V0Qm9hcmQobmV3Qm9hcmQpO1xuICAgIHNldElzWE5leHQoZmFsc2UpO1xuXG4gICAgZGV0ZXJtaW5lR2FtZU1vZGUobmV3Qm9hcmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlV2lubmVyKGJvYXJkKSB7XG4gICAgY29uc3Qgd2lubmluZ0xpbmVzID0gW1xuICAgICAgWzAsIDEsIDJdLCBbMywgNCwgNV0sIFs2LCA3LCA4XSxcbiAgICAgIFswLCAzLCA2XSwgWzEsIDQsIDddLCBbMiwgNSwgOF0sXG4gICAgICBbMCwgNCwgOF0sIFsyLCA0LCA2XVxuICAgIF07XG5cbiAgICBmb3IgKGxldCBbYSwgYiwgY10gb2Ygd2lubmluZ0xpbmVzKSB7XG4gICAgICBpZihib2FyZFthXSAmJiBib2FyZFthXSA9PT0gYm9hcmRbYl0gJiYgYm9hcmRbYV0gPT09IGJvYXJkW2NdKXtcbiAgICAgICAgc2V0SXNHYW1lT3Zlcih0cnVlKTtcbiAgICAgICAgcmV0dXJuIHsgd2lubmVyOiBib2FyZFthXSwgbGluZTogW2EsIGIsIGNdIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpbm5lcjogbnVsbCwgbGluZTogW10gfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRldGVybWluZUdhbWVNb2RlKG5ld0JvYXJkKXtcbiAgICBpZihnYW1lTW9kZSA9PT0gXCIyUFwiKXtcbiAgICAgIHNldElzWE5leHQodHJ1ZSlcbiAgICAgIHNldElzWE5leHQoIWlzWE5leHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc0FJTW92aW5nKHRydWUpO1xuICAgICAgaWYoZ2FtZU1vZGUgPT09IFwiRWFzeVwiKXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWFrZUFJTW92ZUVhc3kobmV3Qm9hcmQpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9IGVsc2UgaWYoZ2FtZU1vZGUgPT09IFwiTWVkaXVtXCIpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBtYWtlQUlNb3ZlTWVkaXVtKG5ld0JvYXJkKVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIGlmKGdhbWVNb2RlID09PSBcIkhhcmRcIil7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1ha2VBSU1vdmVIYXJkKG5ld0JvYXJkKVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VBSU1vdmVFYXN5KG5ld0JvYXJkKSB7XG4gICAgaWYoY2FsY3VsYXRlV2lubmVyKG5ld0JvYXJkKS53aW5uZXIpIHJldHVyblxuICAgIGNvbnNvbGUubG9nKGNhbGN1bGF0ZVdpbm5lcihib2FyZCkpO1xuICAgIFxuICAgIGNvbnN0IGVtcHR5U3F1YXJlcyA9IG5ld0JvYXJkLm1hcCgodmFsdWUsIGlkeCkgPT4gKHZhbHVlID09PSBudWxsID8gaWR4IDogbnVsbCkpLmZpbHRlcigoaWR4KSA9PiBpZHggIT09IG51bGwpO1xuXG4gICAgaWYoZW1wdHlTcXVhcmVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBlbXB0eVNxdWFyZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1wdHlTcXVhcmVzLmxlbmd0aCldO1xuICAgIFxuICAgIG5ld0JvYXJkW3JhbmRvbUluZGV4XSA9IFwiT1wiO1xuICAgIFxuICAgIHNldEJvYXJkKFsuLi5uZXdCb2FyZF0pO1xuICAgIHNldElzWE5leHQodHJ1ZSk7XG4gICAgc2V0SXNBSU1vdmluZyhmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQUlNb3ZlTWVkaXVtKG5ld0JvYXJkKXtcbiAgICBpZihjYWxjdWxhdGVXaW5uZXIobmV3Qm9hcmQpLndpbm5lcikgcmV0dXJuXG5cbiAgICBjb25zdCBlbXB0eVNxdWFyZXMgPSBuZXdCb2FyZC5tYXAoKHZhbHVlLCBpZHgpID0+ICh2YWx1ZSA9PT0gbnVsbCA/IGlkeCA6IG51bGwpKS5maWx0ZXIoKGlkeCkgPT4gaWR4ICE9PSBudWxsKTtcbiAgICBcbiAgICBpZihlbXB0eVNxdWFyZXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgIGZvcihsZXQgbW92ZSBvZiBlbXB0eVNxdWFyZXMpe1xuICAgICAgbGV0IHRlc3RCb2FyZCA9IFsuLi5uZXdCb2FyZF07XG4gICAgICB0ZXN0Qm9hcmRbbW92ZV0gPSAnTyc7XG4gICAgICBpZihjYWxjdWxhdGVXaW5uZXIodGVzdEJvYXJkKS53aW5uZXIgPT09ICdPJyl7XG4gICAgICAgIG5ld0JvYXJkW21vdmVdID0gJ08nO1xuICAgICAgICBzZXRCb2FyZChbLi4ubmV3Qm9hcmRdKTtcbiAgICAgICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICAgICAgc2V0SXNBSU1vdmluZyhmYWxzZSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGZvcihsZXQgbW92ZSBvZiBlbXB0eVNxdWFyZXMpe1xuICAgICAgbGV0IHRlc3RCb2FyZCA9IFsuLi5uZXdCb2FyZF07XG4gICAgICB0ZXN0Qm9hcmRbbW92ZV0gPSAnWCc7XG4gICAgICBpZihjYWxjdWxhdGVXaW5uZXIodGVzdEJvYXJkKS53aW5uZXIgPT09ICdYJyl7XG4gICAgICAgIG5ld0JvYXJkW21vdmVdID0gJ08nO1xuICAgICAgICBzZXRCb2FyZChbLi4ubmV3Qm9hcmRdKTtcbiAgICAgICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICAgICAgc2V0SXNBSU1vdmluZyhmYWxzZSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gZW1wdHlTcXVhcmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtcHR5U3F1YXJlcy5sZW5ndGgpXTtcbiAgICBuZXdCb2FyZFtyYW5kb21JbmRleF0gPSBcIk9cIjtcbiAgICBcbiAgICBzZXRCb2FyZChbLi4ubmV3Qm9hcmRdKTtcbiAgICBzZXRJc1hOZXh0KHRydWUpO1xuICAgIHNldElzQUlNb3ZpbmcoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUFJTW92ZUhhcmQobmV3Qm9hcmQpe1xuICAgIGlmKGNhbGN1bGF0ZVdpbm5lcihuZXdCb2FyZCkud2lubmVyKSByZXR1cm5cblxuICAgIGNvbnN0IGJlc3RNb3ZlID0gZmluZEJlc3RNb3ZlKG5ld0JvYXJkKTtcbiAgICBjb25zb2xlLmxvZyhcImJlc3RNb3ZlXCIsIGJlc3RNb3ZlKTtcbiAgICBcbiAgICBpZiAoYmVzdE1vdmUgIT09IC0xKSB7XG4gICAgICBuZXdCb2FyZFtiZXN0TW92ZV0gPSBcIk9cIjtcbiAgICAgIHNldEJvYXJkKFsuLi5uZXdCb2FyZF0pO1xuICAgICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICAgIHNldElzQUlNb3ZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRCZXN0TW92ZShib2FyZCl7XG4gICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICBsZXQgbW92ZSA9IC0xO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGJvYXJkW2ldID09PSBudWxsKSB7XG4gICAgICAgIGJvYXJkW2ldID0gXCJPXCI7XG4gICAgICAgIGxldCBzY29yZSA9IG1pbmltYXgoYm9hcmQsIDAsIGZhbHNlKTtcbiAgICAgICAgYm9hcmRbaV0gPSBudWxsO1xuICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgICAgICBtb3ZlID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIG1vdmU7XG4gIH1cblxuICBmdW5jdGlvbiBtaW5pbWF4KGJvYXJkLCBkZXB0aCwgaXNNYXhpbWl6aW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gY2FsY3VsYXRlV2lubmVyKGJvYXJkKS53aW5uZXI7XG4gIFxuICAgIGlmIChyZXN1bHQgPT09IFwiT1wiKSByZXR1cm4gMTAgLSBkZXB0aDtcbiAgICBpZiAocmVzdWx0ID09PSBcIlhcIikgcmV0dXJuIGRlcHRoIC0gMTA7XG4gICAgaWYgKGJvYXJkLmV2ZXJ5KGNlbGwgPT4gY2VsbCAhPT0gbnVsbCkpIHJldHVybiAwO1xuICBcbiAgICBpZiAoaXNNYXhpbWl6aW5nKSB7XG4gICAgICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbaV0gPT09IG51bGwpIHtcbiAgICAgICAgICBib2FyZFtpXSA9IFwiT1wiO1xuICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgZGVwdGggKyAxLCBmYWxzZSk7XG4gICAgICAgICAgYm9hcmRbaV0gPSBudWxsO1xuICAgICAgICAgIGJlc3RTY29yZSA9IE1hdGgubWF4KHNjb3JlLCBiZXN0U2NvcmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYmVzdFNjb3JlO1xuICBcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbaV0gPT09IG51bGwpIHtcbiAgICAgICAgICBib2FyZFtpXSA9IFwiWFwiO1xuICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChib2FyZCwgZGVwdGggKyAxLCB0cnVlKTtcbiAgICAgICAgICBib2FyZFtpXSA9IG51bGw7XG4gICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5taW4oc2NvcmUsIGJlc3RTY29yZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBiZXN0U2NvcmU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRHYW1lKCl7XG4gICAgc2V0Qm9hcmQoQXJyYXkoOSkuZmlsbChudWxsKSk7XG4gICAgc2V0SXNYTmV4dCh0cnVlKTtcbiAgICBzZXRXaW5uaW5nRm9ybWF0aW9uKFtdKTtcbiAgICBzZXRHYW1lTW9kZShudWxsKTtcbiAgICBzZXRJc0FJTW92aW5nKGZhbHNlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyB3aW5uZXIsIGxpbmUgfSA9IGNhbGN1bGF0ZVdpbm5lcihib2FyZCk7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgc2V0U3RhdHVzKGBXaW5uZXI6ICR7d2lubmVyfWApO1xuICAgICAgc2V0V2lubmluZ0Zvcm1hdGlvbihsaW5lKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoYE5leHQgUGxheWVyOiAke2lzWE5leHQgPyAnWCcgOiAnTyd9YCk7XG4gICAgfVxuICB9LCBbYm9hcmRdKTtcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgc3R5bGU9e3N0eWxlcy50aXRsZX0+VGljLVRhYy1Ub2U8L2gxPlxuICAgICAgPGRpdiBzdHlsZT17Z2FtZU1vZGUgPyBzdHlsZXMuYm9hcmRDb250YWluZXIgOiBzdHlsZXMuYm9hcmRDb250YWluZXJCbHVyfT5cbiAgICAgICAgPEJvYXJkIGJvYXJkPXtib2FyZH0gb25TcXVhcmVDbGljaz17Z2FtZU1vZGUgPyBoYW5kbGVDbGljayA6ICgpID0+IHt9fSB3aW5uaW5nRm9ybWF0aW9uPXt3aW5uaW5nRm9ybWF0aW9ufSAvPlxuICAgICAgICA8U3RhdHVzIHN0YXR1cz17c3RhdHVzfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHshZ2FtZU1vZGUgJiYgPEdhbWVNb2RlU2VsZWN0aW9uIHNldEdhbWVNb2RlPXtzZXRHYW1lTW9kZX0gLz59XG5cbiAgICAgIHtpc0dhbWVPdmVyICYmIDxHYW1lT3ZlciB3aW5uZXI9e2NhbGN1bGF0ZVdpbm5lci53aW5uZXJ9PjwvR2FtZU92ZXI+fVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luVG9wOiBcIjEuNXJlbVwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxuICBib2FyZENvbnRhaW5lcjoge1xuICAgIHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiLCAvLyBCb2FyZCBpcyBpbnRlcmFjdGl2ZSB3aGVuIGdhbWUgc3RhcnRzXG4gIH0sXG4gIGJvYXJkQ29udGFpbmVyQmx1cjoge1xuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLCAvLyBQcmV2ZW50cyBjbGlja2luZyBiZWZvcmUgc2VsZWN0aW5nIG1vZGVcbiAgICBvcGFjaXR5OiAwLjMsXG4gICAgZmlsdGVyOiBcImJsdXIoMC4yNXJlbSlcIiwgLy8gQWRkcyBhIHNsaWdodCBibHVyXG4gICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuNXMgZWFzZSwgZmlsdGVyIDAuNXMgZWFzZVwiLFxuICB9LFxuICByZXNldEJ1dHRvbjoge1xuICAgIHdpZHRoOiBcIjEzLjc1cmVtXCIsXG4gICAgbWFyZ2luOiBcIjAuNjI1cmVtIGF1dG9cIixcbiAgICBwYWRkaW5nOiBcIjAuNzVyZW1cIixcbiAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGJvcmRlclJhZGl1czogXCIwLjVyZW1cIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZlOGVmYiwgIzFjNDI5YylcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHRyYW5zaXRpb246IFwiMC4zc1wiLFxuICB9LFxuICByZXNldEJ1dHRvbkhvdmVyOiB7XG4gICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMDUpXCIsXG4gICAgYm94U2hhZG93OiBcIjBweCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMilcIixcbiAgfVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJvYXJkIiwiU3RhdHVzIiwiR2FtZU1vZGVTZWxlY3Rpb24iLCJIb21lIiwiYm9hcmQiLCJzZXRCb2FyZCIsIkFycmF5IiwiZmlsbCIsImlzWE5leHQiLCJzZXRJc1hOZXh0Iiwid2lubmluZ0Zvcm1hdGlvbiIsInNldFdpbm5pbmdGb3JtYXRpb24iLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJnYW1lTW9kZSIsInNldEdhbWVNb2RlIiwiaXNBSU1vdmluZyIsInNldElzQUlNb3ZpbmciLCJpc0dhbWVPdmVyIiwic2V0SXNHYW1lT3ZlciIsImhhbmRsZUNsaWNrIiwiaW5kZXgiLCJjYWxjdWxhdGVXaW5uZXIiLCJ3aW5uZXIiLCJuZXdCb2FyZCIsImRldGVybWluZUdhbWVNb2RlIiwid2lubmluZ0xpbmVzIiwiYSIsImIiLCJjIiwibGluZSIsInNldFRpbWVvdXQiLCJtYWtlQUlNb3ZlRWFzeSIsIm1ha2VBSU1vdmVNZWRpdW0iLCJtYWtlQUlNb3ZlSGFyZCIsImNvbnNvbGUiLCJsb2ciLCJlbXB0eVNxdWFyZXMiLCJtYXAiLCJ2YWx1ZSIsImlkeCIsImZpbHRlciIsImxlbmd0aCIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibW92ZSIsInRlc3RCb2FyZCIsImJlc3RNb3ZlIiwiZmluZEJlc3RNb3ZlIiwiYmVzdFNjb3JlIiwiSW5maW5pdHkiLCJpIiwic2NvcmUiLCJtaW5pbWF4IiwiZGVwdGgiLCJpc01heGltaXppbmciLCJyZXN1bHQiLCJldmVyeSIsImNlbGwiLCJtYXgiLCJtaW4iLCJyZXNldEdhbWUiLCJtYWluIiwic3R5bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoMSIsInRpdGxlIiwiZGl2IiwiYm9hcmRDb250YWluZXIiLCJib2FyZENvbnRhaW5lckJsdXIiLCJvblNxdWFyZUNsaWNrIiwiR2FtZU92ZXIiLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsInBvaW50ZXJFdmVudHMiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInJlc2V0QnV0dG9uIiwid2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicmVzZXRCdXR0b25Ib3ZlciIsInRyYW5zZm9ybSIsImJveFNoYWRvdyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});