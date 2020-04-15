import React, { Component } from 'react';
import CategoryCard from './CategoryCard';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class CategoryList extends Component {
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
                    <div className="category__list">
                        {this.state.category
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
