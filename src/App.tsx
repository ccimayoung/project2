import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { AW } from "./Styles/AllStyle";
import Board from "./pages/Board";
import PostAdd from "./pages/PostAdd";
import PostEdit from "./pages/PostEdit";
import Join from "./pages/Join";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <AW>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postadd" element={<PostAdd />} />
          <Route path="/postedit/:id" element={<PostEdit />} />
        </Routes>
      </BrowserRouter>
    </AW>
  );
}

export default App;
