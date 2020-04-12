import React, { Component } from 'react';
import CategoryCard from './CategoryCard';
import { withRouter, Link } from 'react-router-dom';

import axios from 'axios';

class CategoryBlock extends Component {
    state = {
        category: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/categories/').then(res => {
            console.log(res);
            const category = res.data.results;
            this.setState({ category });
        });
    }
    render() {
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
                        {this.state.category.slice(0, 4).map(category => (
                            <CategoryCard
                                key={category.id}
                                id={category.id}
                                title={category.name}
                                category={category.name}
                                img="http://placehold.it/280x480/"
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(CategoryBlock);
