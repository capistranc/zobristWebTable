import React, { Component } from 'react';
import {data} from '../data';
import CardDisplay from './CardDisplay';


class ProductDisplay extends Component {
    constructor() {
        super();
        this.state = {
            currentCount: 0,
            products: [],
            currentProducts:[],
            displayCount: 8,
        }
    }

    componentDidMount(){
        var allProducts = [];
        for (var i = 0; i < data.length; i++) {
            for (const product in data[i]["products"]) {
                allProducts.push({...product})
            }
        }
        const currentProducts = allProducts.slice(0,7);
        this.setState({products: allProducts, currentProducts});
    }

    render() {
        return (<div className="container">
                <CardDisplay {...this.state.currentProducts}/>
            </div>
        );
    }
}
export default ProductDisplay;
