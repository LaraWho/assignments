import React, { Component } from 'react';
import products from './products.json';
import Item from './Item';
import { Link, Switch, Route } from 'react-router-dom';

class Products extends Component {
  render() {
    let mappedProducts = products.map(product => {
      return(
        <div key={product._id} >
          <Link to={`/products/${product._id}`}>{product.name}</Link>
        </div>
      )
    })
    return(
      <div style={{width: "100vw"}}>

      <div className="products">
        {mappedProducts}

      </div>
      <div>
        <Switch>
          <Route path="/products/:_id" component={Item}/>
        </Switch>
      </div>
    </div>
    )
  }
}
export default Products;