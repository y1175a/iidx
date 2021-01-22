import { Route } from 'react-router-dom';
import Header from './view/header';
import Home from './view/home';
import About from './view/about';
import Mypage from './view/mypage';

const App = () => {
  return (
    <div>
      <Route path ="/" component={Header} />
      <Route path ="/home" component={Home} />
      <Route path ="/about" component={About} />
      <Route path ="/mypage" component={Mypage} />
    </div>
  )
}

export default App;
