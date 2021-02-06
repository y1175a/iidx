import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoogleButton from "../google-login/googleButton";
import "../resources/style/css/header.css";

const Header = () => {
  const [ auth, setAuth ] = useState(false);

  return (
    <div className="header">
      <div className="wrapper">
        <h2>IIDX SKILL SIMULATOR</h2>
        <div>
          <Route>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    {auth && <Link to="/mypage">My page</Link>}
                  </li>
                  <li>
                    {auth && <Link to="/home">Upload</Link>}
                  </li>
                </ul>
              </nav>
            </div>
          </Route>
        </div>
      </div>
      <div className="user">
        {/* <GoogleButton /> */}
        {auth && <p>User님, 환영합니다.</p>}
        <button onClick={() => { setAuth(!auth) }}> {auth ? "Logout" : "Login"} </button>
      </div>
    </div>
  );
};

export default Header;
