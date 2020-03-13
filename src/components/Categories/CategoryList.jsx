import React, { Component } from 'react';
import CategoryCard from './CategoryCard';
import { withRouter, Link } from 'react-router-dom';
class CategoryList extends Component {
    render() {
        return (
            <div className="category">
                <div className="category__body container">
                    <div className="category__list">
                        <CategoryCard
                            title="text"
                            category="url1"
                            img="http://placehold.it/280x480/"
                        />
                        <CategoryCard
                            title="text"
                            category="url2"
                            img="http://placehold.it/280x480/"
                        />
                        <CategoryCard
                            title="text"
                            category="url3"
                            img="http://placehold.it/280x480/"
                        />
                        <CategoryCard
                            title="text"
                            category="url4"
                            img="http://placehold.it/280x480/"
                        />{' '}
                        <CategoryCard
                            title="text"
                            category="url4"
                            img="http://placehold.it/280x480/"
                        />{' '}
                        <CategoryCard
                            title="text"
                            category="url4"
                            img="http://placehold.it/280x480/"
                        />{' '}
                        <CategoryCard
                            title="text"
                            category="url4"
                            img="http://placehold.it/280x480/"
                        />{' '}
                        <CategoryCard
                            title="text"
                            category="url4"
                            img="http://placehold.it/280x480/"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(CategoryList);
