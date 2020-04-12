import React, { Component } from 'react';
import { Banner, ProductsList } from '../components';
import axios from 'axios';
export default class Products extends Component {
    state = {
        title: [],
    };

    componentDidMount() {
        let url = this.props.match.params.category_id;
        axios.get('http://localhost:8000/api/v1/categories/').then(res => {
            // console.log(res);
            let category = res.data.results;
            const products = category.find(item => item.id == url);
            this.setState({ title: products.name });
            console.log(this.state.title);
        });
    }
    render() {
        const { title } = this.state;
        return (
            <>
                <Banner
                    title={title}
                    description={`Выберите ${title.toString().toLowerCase()} для сравнения.`}
                />
                <ProductsList />
            </>
        );
    }
}
