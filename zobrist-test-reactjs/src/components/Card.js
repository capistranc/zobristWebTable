import React, { Component } from 'react';


class Card extends Component {
    render() {
        const {name, price, img} = this.props
        return (
            <div className="ProductCard container">
                    <img src={img} className="cardImage" alt="noImage" />
                    <h3> {name || "no prod Name"}</h3>
                    <p> ${price || "0.00"}</p>
            </div>
        );
    }
}
export default Card;