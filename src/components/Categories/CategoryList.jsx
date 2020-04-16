import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { CategoryCard } from '../index';

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = { category: [] };
    }

    componentDidMount() {
        axios.get('/categories/').then(res => {
            console.log(res);
            const category = res.data.results;
            this.setState({ category });
        });
    }

    render() {
        const { category } = this.state;
        return (
            <div className="category">
                <div className="category__body container">
                    <div className="category__list">
                        {category
                            .map(category => (
                                <CategoryCard
                                    key={category.id}
                                    id={category.id}
                                    title={category.name}
                                    category={category.name}
                                    img="https://via.placeholder.com/280x480/3C59fFC/FFFFFF/"
                                />
                            ))
                            .sort()}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(CategoryList);
