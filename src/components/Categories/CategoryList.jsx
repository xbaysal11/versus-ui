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
                                    title={category.name}
                                    category={category.name}
                                    img="http://placehold.it/280x480/"
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
