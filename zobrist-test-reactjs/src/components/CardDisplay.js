import React, { Component } from 'react';
import {data} from '../data';
import Card from './Card';

class CardDisplay extends Component {
    constructor() {
        super();
        this.state = {
            currentProducts: [],
            displayCount: 8,
        }

    }

    componentDidUpdate(){
        this.renderContent()
    }

    renderContent() {
        var displayContent = [];
        console.log(this.props);
        const products = {};localStorage
        for (const product in products) {
            displayContent.push(<li><Card {...product} /></li>)
        }
        return <ul>{displayContent}</ul>
    }

    render() {

        return (<div className="container">
                {this.renderContent()}
            </div>
        );
    }
}
export default CardDisplay