import * as React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink
          to="/"
          exact
          activeClassName="active"
        >Home</NavLink><br />
        <NavLink
          to="/about"
          activeClassName= "active"
        >About</NavLink><br />
      <NavLink
          to="/users"
          activeClassName= "active"
      >Users</NavLink>
      </div><h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="user/:id" element={<User />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div >
  );
}

export default App;
