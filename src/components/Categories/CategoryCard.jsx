import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

// import icon from '../../assets/icons/right-arrow.svg';

export default class CategoryCard extends Component {
    static propTypes = {
        id: PT.number.isRequired,
        title: PT.string.isRequired,
        img: PT.string.isRequired,
    };
    render() {
        const { id, title, img } = this.props;
        return (
            <Link to={`/category/${id}`}>
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
                        {/* <div className="category__card-footer">
                            <h4>СМ. ПОДРОБНОСТИ</h4>
                            <img src={icon} alt="right-arrow" />
                        </div> */}
                    </div>
                </div>
            </Link>
        );
    }
}
