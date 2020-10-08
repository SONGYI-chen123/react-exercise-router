import React, {Component} from 'react';
import '../style/products.css';
import Data from '../mockups/data.json';
 // eslint-disable-next-line
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Bicycle from './Bicycle';
import TV from './TV';
import Pencil from './Pencil';


class Products extends Component{
    constructor(){
        super();
        this.state={
            products:Data
        }
    }

    render(){
        return(
            <BrowserRouter>
            <div className="products">
                <p>
                    All Products:
                </p>
                <p>
                    <Link to={`/product/${this.state.products.bicycle.id}`} id="mylink" >Bicycle</Link>
                </p>
                <p>
                    <Link to={`/product/${this.state.products.TV.id}`} id="mylink">TV</Link>
                </p>
                <p>
                    <Link to={`/product/${this.state.products.pencil.id}`} id="mylink">pencil</Link>
                </p>
                <Route path={`/product/${this.state.products.bicycle.id}`} component={Bicycle} />
                <Route path={`/product/${this.state.products.TV.id}`} component={TV} />
                <Route path={`/product/${this.state.products.pencil.id}`} component={Pencil} />
            </div>
            </BrowserRouter>
        );
    }
}

export default Products;