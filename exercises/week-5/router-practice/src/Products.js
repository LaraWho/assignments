import React, { Component } from 'react';
import products from './products.json';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    let mappedProducts = products.map(product => {
      return(
        <div key={product._id}>
          <Link to={`/products/${product._id}`}>{product.name}</Link>
        </div>
      )
    })
    return(
      <div className="products">
        {mappedProducts}
      </div>
    )
  }
}
export default Products;