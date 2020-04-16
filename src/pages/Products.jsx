import React, { Component } from 'react';
import axios from 'axios';

import { Banner, ProductsList } from '../components';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    componentDidMount() {
        let url = this.props.match.params.category_id;
        axios.get('/categories/').then(res => {
            let category = res.data.results;
            const products = category.find(item => item.id == url);
            this.setState({ title: products.name });
        });
    }
    render() {
        const { title } = this.state;
        return (
            <>
                <Banner
                    title={title}
                    description={`Выберите ${title
                        .toString()
                        .toLowerCase()} для сравнения.`}
                />
                <ProductsList />
            </>
        );
    }
}
