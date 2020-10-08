import React, {Component} from 'react';

class Bicycle extends Component{

    render(){
        return(
            <div>
                <p>Product Details:</p>
                <p>Name:Bicycle</p>
                <p>Id:1</p>
                <p>Price:30</p>
                <p>Quantity:15</p>
                <p>Desc:Bicycle is good</p>
                <p>URL:/products/1</p>
            </div>
        );
    }
}

export default Bicycle;