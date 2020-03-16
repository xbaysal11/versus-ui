import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { withRouter } from 'react-router-dom';
class ProductsList extends Component {
    render() {
        return (
            <div className="category">
                <div className="category__body container">
                    <div className="category__list">
                        <ProductCard
                            title="title"
                            category="url1"
                            img="http://placehold.it/280x220/"
                        />
                        <ProductCard
                            title="title"
                            category="url1"
                            img="http://placehold.it/280x220/"
                        />{' '}
                        <ProductCard
                            title="title"
                            category="url1"
                            img="http://placehold.it/280x220/"
                        />{' '}
                        <ProductCard
                            title="title"
                            category="url1"
                            img="http://placehold.it/280x220/"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(ProductsList);
