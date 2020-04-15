import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CompareWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
        };
        this.open = this.open.bind(this);
    }
    open = () => {
        this.state.height == 0
            ? this.setState({
                  height: 139,
              })
            : this.setState({
                  height: 0,
              });
        console.log('asdfasdf');
    };
    render() {
        const { product1, product2, compareLink, crearFunc } = this.props;
        return (
            <div>
                <div className="ComparisonList__comparisonList___3iorf ComparisonList__open___2nVw9">
                    <div
                        className="ComparisonList__header___2NBHi ComparisonList__open___2nVw9"
                        onClick={this.open}
                    >
                        <span
                            className="ComparisonList__vs___3j7ep"
                            style={{ transform: 'scale(1)' }}
                        >
                            vs
                        </span>
                        <span className="ComparisonList__title___2RVdO">
                            Список сравнения
                        </span>
                        {/* <span className="ComparisonList__titleMobile___3wRwR ComparisonList__open___2nVw9">
                            Comparison list
                        </span> */}
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 256 512"
                            color="white"
                            style={{ color: 'white' }}
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                        </svg>
                    </div>
                    <div
                        className="ComparisonList__body___3lIOV ComparisonList__open___2nVw9"
                        style={{ height: `${this.state.height}px` }}
                    >
                        <ul>
                            <li>
                                <div className="ComparisonList__image___nb7tL">
                                    <img
                                        src="https://images.versus.io/objects/xiaomi-mi-10-pro-5g.front.medium.1582127755973.webp"
                                        alt="Xiaomi Mi 10 Pro 5G (256GB / 12GB RAM)"
                                    />
                                </div>
                                <span className="ComparisonList__name___m2tlp">
                                    {product1.length > 16
                                        ? product1.substring(0, 16 - 3) + '...'
                                        : product1}
                                </span>
                                {/* <button
                                    className="ComparisonList__trash___1lCfA"
                                    aria-label="Clear list"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        color="white"
                                        size="12"
                                        style={{ color: 'white' }}
                                        height="12"
                                        width="12"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                    </svg>
                                </button> */}
                            </li>
                            <li>
                                <div className="ComparisonList__image___nb7tL">
                                    <img
                                        src="https://images.versus.io/objects/xiaomi-mi-10-pro-5g.front.medium.1582127755973.webp"
                                        alt="Xiaomi Mi 10 Pro 5G"
                                    />
                                </div>
                                <span className="ComparisonList__name___m2tlp">
                                    {product2.length > 16
                                        ? product2.substring(0, 16 - 3) + '...'
                                        : product2}
                                </span>
                                {/* <button
                                    className="ComparisonList__trash___1lCfA"
                                    aria-label="Clear list"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        color="white"
                                        size="12"
                                        style={{ color: 'white' }}
                                        height="12"
                                        width="12"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                    </svg>
                                </button> */}
                            </li>
                        </ul>
                        <div className="ComparisonList__buttonContainer___1fdUx">
                            <Link to={compareLink}>
                                <button className="versusButton">
                                    Сравнить
                                </button>
                            </Link>
                            <button
                                className="ComparisonList__addButton___cjPtX"
                                aria-label="Add another object"
                                onClick={crearFunc}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 448 512"
                                    color="white"
                                    size="12"
                                    style={{ color: 'white' }}
                                    height="12"
                                    width="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
