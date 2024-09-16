import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => (
          <Product
            key={product.id}
            product={product}
            onSelect={this.props.onSelectProduct}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;