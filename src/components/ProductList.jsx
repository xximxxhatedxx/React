import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    return (
      <div className='productListContainer'>
        {this.props.products.map(product => (
          <Product
            key={product.id}
            product={product}
            onSelect={this.props.onSelectProduct}
            onOpen={this.props.onOpen}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;