import React from 'react';

class Product extends React.Component {
  handleCheckboxChange = () => {
    this.props.onSelect(this.props.product.id);
  };

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheckboxChange} />
        <span>{this.props.product.name}</span>
      </div>
    );
  }
}

export default Product;