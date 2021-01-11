import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Header from './view/header';
import Home from './view/home';

const App = () => {
  return (
    <div>
      <Route path ="/" component={Header} />
      <Route path ="/home" component={Home} />
    </div>
  )
}

export default App;
