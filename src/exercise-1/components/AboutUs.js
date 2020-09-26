import React, {Component} from 'react';
// eslint-disable-next-line 
import {BrowserRouter,Link,Route} from 'react-router-dom';
import '../styles/AboutUs.css';

class AboutUs extends Component{
    render(){
        return(
            <div className='aboutus'>
                <p>
                    Company:ThoughtWorks Local
                </p>
                <p>
                    Location:Xi'an
                </p>
                <p>
                    For more information,please
                </p>
                <p>
                    view our <Link to='/' id='myLink'>website</Link>.
                </p>
            </div>
        );
    }
}

export default AboutUs;