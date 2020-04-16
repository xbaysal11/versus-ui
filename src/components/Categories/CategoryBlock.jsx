import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

import { CategoryCard } from '../index';

class CategoryBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { category: [] };
    }

    componentDidMount() {
        axios.get('/categories/').then(res => {
            const category = res.data.results;
            this.setState({ category });
        });
    }

    render() {
        const { category } = this.state;
        return (
            <div className="category">
                <div className="category__body container">
                    <div className="section-title">
                        <p>лучшие категории</p>
                        <h2>
                            <Link to="/categories">Категории</Link>
                        </h2>
                    </div>
                    <div className="category__list">
                        {category.slice(0, 4).map(category => (
                            <CategoryCard
                                key={category.id}
                                id={category.id}
                                title={category.name}
                                category={category.name}
                                img="https://via.placeholder.com/280x480/3C59fFC/FFFFFF/"
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(CategoryBlock);
