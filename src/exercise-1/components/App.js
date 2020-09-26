import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
        
        <ul>
        <li>
            <Link to='/aboutus'>About Us</Link>
          </li>
          
          <li>
            <Link to='/my-profile'>My profile</Link>
          </li>
          <li>
          <Link to='/'>Home</Link>
          </li>
        </ul>

        <Route exact path='/' component={Home} />
        <Route path='/my-profile' component={MyProfile} />
        <Route path='/aboutus' component={AboutUs} />
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
