import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter,Link,Route, Switch} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Products from '../../exercise-2/components/products';

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
            <Link to='/products'>Products</Link>
          </li>
          <li>
          <Link to='/'>Home</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/my-profile' component={MyProfile} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/goods' component={Products} />
          <Route component={Home} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
