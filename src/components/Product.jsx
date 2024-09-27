import React from 'react';

class Product extends React.Component {
  handleCheckboxChange = () => {
    this.props.onSelect(this.props.product.id);
  };

  handleClickProduct = () => {
    this.props.onOpen(this.props.product.id)
  }

  render() {
    return (
      <div className="productContainer">
        <img className='productImage'
            src={this.props.product.image}
            alt={this.props.product.name}
        />
        <div className='productName' onClick={this.handleClickProduct}>{this.props.product.name}</div>
        <div className='productPrice'>{this.props.product.price}</div>
        <input type="checkbox" onChange={this.handleCheckboxChange} />
        
      </div>
    );
  }
}

export default Product;