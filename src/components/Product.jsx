import React from 'react';

const Product = ({product, onSelect, onOpen}) => {
  const handleCheckboxChange = () => {
    onSelect(product.id);
  };

  const handleClickProduct = () => {
    onOpen(product.id)
  }

  return (
    <div className="productContainer">
      <img className='productImage'
          src={product.image}
          alt={product.name}
      />
      <div className='productName' onClick={handleClickProduct}>{product.name}</div>
      <div className='productPrice'>{product.price}</div>
      <input type="checkbox" onChange={handleCheckboxChange} />
      
    </div>
  );
}

export default Product;