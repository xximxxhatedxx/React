import React from 'react';
import UserComment from './UserComment';

class ProductPageModal extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            value: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onPostingComment(this.props.product.id, this.state.value)
        this.setState({ value : "" })
    };
    
    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }
  
    render() {
        if (!this.props.show) {
          return null;
        }

        return (
            <div className="modal">
                <div className="modal-container">
                    <button className="close" onClick={this.props.onClose}>×</button>
                    <form onSubmit={this.handleSubmit} className='modal-content'>
                        <img className='productPageImage'
                            src={this.props.product.image}
                            alt={this.props.product.name}
                        />
                        <h2>{this.props.product.name}</h2>
                        <div className='productPagePrice'>{this.props.product.price}UAH | {this.props.dollarPrice}USD</div>
                        <div className='commentSection'>
                            <div>Comments</div>
                            {this.props.product.comments.length === 0 ? (
                                <div>No comments here</div>
                            ) : (
                                <ul type="none">
                                {this.props.product.comments.map((comment, id) => (
                                    <UserComment key={id} text={comment} />
                                ))}
                                </ul>
                            )}
                        </div>
                        <textarea maxLength={150} placeholder='Write your comment here' onChange={this.handleChange} value={this.state.value}></textarea>
                        <button type="submit" className='ProductPageModalButton'>Send</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ProductPageModal;
