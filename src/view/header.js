import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../reducers/auth';
import { userActions } from '../reducers/user';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../resources/style/css/header.css";
import client from '../api/client';
import * as authAPI from '../api/auth';
import axios from "axios";

const Header = () => {
  const { auth, user } = useSelector(({ auth, user }) => ({ auth, user }));

  const { LOGIN, LOGOUT } = authActions;

  const { GET_USER } = userActions;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.login) {
      dispatch(LOGIN());
    }
  }, []);

  useEffect(() => {
    if (auth.login){
      dispatch(GET_USER(auth.login.uid));
    }
  }, [auth.login]);

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
                    <Link to="/charts">Charts</Link>
                  </li>
                  <li>
                    {auth.login && <Link to="/mypage">My page</Link>}
                  </li>
                  <li>
                    {auth.login && <Link to="/home">Upload</Link>}
                  </li>
                </ul>
              </nav>
            </div>
          </Route>
        </div>
      </div>
      <div className="user">
        {/* <GoogleButton /> */}
        {user.user && <p>{user.user.nickname}님, 환영합니다.</p>}
        {!auth.login && <button onClick={onLogin}> Login </button>}
        {auth.login && <button onClick={onLogout}> Logout </button>}
      </div>
    </div>
  );
};

export default Header;
