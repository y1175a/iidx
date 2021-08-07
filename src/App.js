import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './reducers/auth';
import { userActions } from './reducers/user';
import { Route } from 'react-router-dom';
import Header from './view/header';
import Home from './view/home';
import About from './view/about';
import Mypage from './view/mypage';
import "./App.css";
import Charts from './view/charts';
import Chart from './view/chart';

const App = () => {
  const auth = useSelector(state => state.auth);

  const user = useSelector(state => state.user.user);

  const { LOGIN } = authActions;

  const { GET_USER } = userActions;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.login) {
      dispatch(LOGIN());
    }
  }, []);

  useEffect(() => {
    if (auth.login && !user){
      dispatch(GET_USER(auth.login.id));
    }
  }, [auth.login]);

  return (
    <div>
      <Route path="/" component={Header}/>
      <div className="pages">
        <Route path="/home" component={Home} />
        <Route path="/charts" component={Charts} />
        <Route path="/chart/:id" component={Chart} />
        {/* <Route path="/songs" component={Songs} /> */}
        {/* <Route path="/players" component={Players} /> */}
        {/* <Route path="/topscores" component={Topscores} /> */}
        <Route path="/about" component={About} />
        <Route path="/mypage" component={Mypage} />
      </div>
    </div>
  )
}

export default App;
