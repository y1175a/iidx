import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN, LOGOUT } from '../reducers/auth';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../resources/style/css/header.css";
import client from '../api/client';
import * as authAPI from '../api/auth';
import axios from "axios";

const Header = () => {
  const auth = useSelector(({ auth }) => ({
    login: auth.login,
    loading: auth.loading,
    error: auth.error
  }));

  useEffect(() => {
    client.get('/api/auth/login/success', { withCredentials: true })
    console.log(auth);
  }, []);

  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    window.open("http://localhost:4000/api/auth/login", "_self");
  }

  const onLogout = () => {
    dispatch(LOGOUT());
  }

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
        {auth.login && <p>User님, 환영합니다.</p>}
        {!auth.login && <button onClick={onLogin}> Login </button>}
        {auth.login && <button onClick={onLogout}> Logout </button>}
      </div>
    </div>
  );
};

export default Header;
