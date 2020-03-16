import React, { Component } from 'react';
import { Banner, ProductsList } from '../components';

export default class Products extends Component {
    render() {
        return (
            <>
                <Banner
                    title="Title"
                    description="Выберите продукты для сравнения."
                />
                <ProductsList />
            </>
        );
    }
}
