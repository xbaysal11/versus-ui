import React, { Component } from 'react';
import PT from 'prop-types';

import icon from '../../assets/icons/right-arrow.svg';

export default class CategoryCard extends Component {
    static propTypes = {
        title: PT.string.isRequired,
        category: PT.string.isRequired,
        img: PT.string.isRequired,
    };
    render() {
        const { title, category, img } = this.props;
        return (
            <a href={`/category/${category}`}>
                <div
                    className="category__card"
                    style={{
                        backgroundImage: `url(${img})`,
                    }}
                >
                    <div className="category__card-body">
                        <div className="category__card-title">
                            <h1>{title}</h1>
                        </div>
                        <div className="category__card-footer">
                            <h4>СМ. ПОДРОБНОСТИ</h4>
                            <img src={icon} alt="right-arrow" />
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}
