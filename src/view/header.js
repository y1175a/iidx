import React from 'react';
import { 
    BrowserRouter as Router, 
    Route,
    Link,
    Switch
} from 'react-router-dom';
import GoogleButton from '../google-login/googleButton';
import headerStyle from '../resources/style/css/header.css';

const Header = () => {
    return (
        <div>
        <h1>IIDX SKILL SIMULATOR</h1>
        <div><GoogleButton /></div>
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
              <Link to="/mypage">My page</Link>
            </li>
                        </ul>
                    </nav>
                </div>
            </Route>
        </div>
        </div>
    )
}

export default Header;