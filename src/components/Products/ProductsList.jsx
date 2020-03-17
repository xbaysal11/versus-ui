import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

class ProductsList extends Component {
    state = {
        products: [],
    };

    componentDidMount() {
        let url = this.props.location.pathname.split('/').pop();
        axios.get('http://localhost:8000/api/v1/categories/').then(res => {
            // console.log(res);
            let category = res.data.results;
            const products = category.find(item => item.name === url);
            this.setState({ products: products.products });
            console.log(products.products);
        });
    }
    render() {
        return (
            <div className="category">
                <div className="category__body container">
                    <div className="category__list">
                        {this.state.products.map(product => (
                            <ProductCard
                                key={product.id}
                                title={product.name}
                                category="url1"
                                img="http://placehold.it/280x220/"
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(ProductsList);
