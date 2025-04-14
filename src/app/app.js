import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicTacToe from "./components/tic-tac-toe/container"
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}