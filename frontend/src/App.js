import * as React from "react";
import "./App.css";
import Setting from "./pages/Setting";
import Home from "./pages/Home";
import SinglePro from "./pages/SinglePro";
import Write from "./pages/Write";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Context } from "./contex/context";

function App() {
  const { user } = React.useContext(Context);
  console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="post/:id" element={<SinglePro />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
