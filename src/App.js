import { Route } from 'react-router-dom';
import Header from './view/header';
import Home from './view/home';
import About from './view/about';
import Mypage from './view/mypage';
import "./App.css";

const App = () => {
  return (
    <div>
      <Route path="/" component={Header}/>
      <div className="pages">
        <Route path="/home" component={Home} />
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
