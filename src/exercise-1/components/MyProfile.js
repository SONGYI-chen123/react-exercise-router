import React, {Component} from 'react';
import '../styles/MyProfile.css';

class MyProfile extends Component{
    render(){
        return(
            <div className='myprofile'>
                <p>
                    Username:XXX
                </p>
                <p>
                    Gender:Female
                </p>
                <p>
                    Work:IT Industry
                </p>
                <p>
                    Website:'/my-profile'
                </p>
            </div>
        );
    }
}

export default MyProfile;