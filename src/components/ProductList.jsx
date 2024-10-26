import React from 'react';
import Product from './Product';

const ProductList = ({products, onSelectProduct, onOpen}) => {
  return (
    <div className='productListContainer'>
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          onSelect={onSelectProduct}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}

export default ProductList;