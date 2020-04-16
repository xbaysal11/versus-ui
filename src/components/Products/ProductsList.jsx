import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';
import axios from 'axios';

import ProductCard from './ProductCard';
import CompareWindow from './CompareWindow';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedProductID: [],
            selectedProductName: [],
        };
        this.setProduct = this.setProduct.bind(this);
        this.clearSelectedProduct = this.clearSelectedProduct.bind(this);
    }
    static propTypes = {
        match: PT.any.isRequired,
        location: PT.any.isRequired,
    };

    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/categories/').then(res => {
            let category = res.data.results;
            let categoryId = this.props.match.params.category_id;
            const products = category.find(item => item.id == categoryId);
            this.setState({ products: products.products });
        });
    }
    setProduct = e => {
        const selectedProductID = this.state.selectedProductID.slice(0);
        const selectedProductName = this.state.selectedProductName.slice(0);
        const indexID = selectedProductID.indexOf(e.target.id);
        const indexName = selectedProductName.indexOf(e.target.value);

        console.log(`selectedProduct: ${selectedProductName}`);

        e.target.checked && selectedProductID.length < 2
            ? selectedProductID.push(e.target.id)
            : selectedProductID.splice(indexID, 0);

        e.target.checked && selectedProductName.length < 2
            ? selectedProductName.push(e.target.value)
            : selectedProductName.splice(indexName, 0);

        console.log(`indexOf: ${e.target.value}`);
        this.setState({
            selectedProductID,
            selectedProductName,
        });
    };
    clearSelectedProduct = () => {
        this.setState({
            selectedProductID: [],
            selectedProductName: [],
        });
    };
    render() {
        const { products, selectedProductName, selectedProductID } = this.state;

        return (
            <div className="category">
                <div className="category__body container">
                    <div className="category__list">
                        {products.map(product => (
                            <div key={product.id}>
                                <label>
                                    <input
                                        type="radio"
                                        className="product_select"
                                        name={`card-${product.id}`}
                                        id={product.id}
                                        value={product.name}
                                        onChange={this.setProduct}
                                        checked={selectedProductID.some(
                                            item => item == product.id
                                        )}
                                    />
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        title={product.name}
                                        category="url1"
                                        img="https://via.placeholder.com/280x220/3C59fFC/FFFFFF/"
                                    />
                                </label>
                            </div>
                        ))}
                        {selectedProductName.length == 2 ? (
                            <CompareWindow
                                product1={selectedProductName[0]}
                                product2={selectedProductName[1]}
                                compareLink={`${this.props.location.pathname}/comparison/${selectedProductID}`}
                                crearFunc={this.clearSelectedProduct}
                            />
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(ProductsList);
