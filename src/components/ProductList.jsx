import React from 'react';
import Product from './Product';
import { useProductContext } from './contexts/ProductContext';

const ProductList = ({onSelectProduct}) => {
  const { products } = useProductContext();

  return (
    <div className='productListContainer'>
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          onSelect={onSelectProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;