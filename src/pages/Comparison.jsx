import React, { Component } from 'react';
import PT from 'prop-types';
import axios from 'axios';

import { CategoryBlock } from '../components';

export default class Comparison extends Component {
    constructor(props) {
        super(props);

        this.state = {
            all: {},
            fieldsHead: [],
            product1: [],
            product2: [],
            product1Fields: [],
            product2Fields: [],
        };
        this.MergeRecursive = this.MergeRecursive.bind(this);
    }
    static propTypes = {
        match: PT.any.isRequired,
    };
    MergeRecursive(obj1, obj2) {
        for (var p in obj2) {
            try {
                obj2[p].constructor == Object
                    ? (obj1[p] = this.MergeRecursive(obj1[p], obj2[p]))
                    : (obj1[p] = obj2[p]);
            } catch (e) {
                obj1[p] = obj2[p];
            }
        }

        return obj1;
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/categories/').then(res => {
            let categoryId = this.props.match.params.category_id;
            let product1Id = this.props.match.params.item1_id;
            let product2Id = this.props.match.params.item2_id;

            let category = res.data.results.find(item => item.id == categoryId);

            const product1 = category.products.find(
                item => item.id == product1Id
            );
            const product2 = category.products.find(
                item => item.id == product2Id
            );
            const product1Fields = product1.fields.map(item => item.value);
            const product2Fields = product2.fields.map(item => item.value);
            const fieldsHead = product1.fields.map(item => item.name);

            let obj1 = fieldsHead.reduce(
                (acc, cur, i) => ({ ...acc, [i]: { id: i, field: cur } }),
                {}
            );
            let obj2 = product1Fields.reduce(
                (acc, cur, i) => ({ ...acc, [i]: { product1: cur } }),
                {}
            );
            let obj3 = product2Fields.reduce(
                (acc, cur, i) => ({ ...acc, [i]: { product2: cur } }),
                {}
            );
            let obj5 = this.MergeRecursive(obj1, obj2);
            let obj6 = this.MergeRecursive(obj5, obj3);

            console.log(obj6);

            this.setState({
                all: obj6,
                fieldsHead,
                product1,
                product2,
                product1Fields,
                product2Fields,
            });
        });
    }

    render() {
        const {
            all,
            fieldsHead,
            product1,
            product2,
            product1Fields,
            product2Fields,
        } = this.state;
        return (
            <div className="category">
                <div className="category__body">
                    <div className="container">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                margin: '4em 0',
                                position: 'relative',
                                flexBasis: '50%',
                            }}
                        >
                            <div>
                                <div className="namesContainer">
                                    <div className="nameContainer">
                                        <p>{product1.name}</p>
                                    </div>
                                    <div className="nameContainer">
                                        <p>{product2.name}</p>
                                    </div>
                                </div>
                                <div
                                    className="vsSeparator"
                                    style={{ left: '50%' }}
                                >
                                    <span>vs</span>
                                </div>
                                <div className="picturesContainer">
                                    <div className="pictureContainer">
                                        <div className="modernImage">
                                            <img
                                                src="https://via.placeholder.com/280x220/3C59fFC/FFFFFF/"
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <div className="pictureContainer">
                                        <div className="modernImage">
                                            <img
                                                src="https://via.placeholder.com/280x220/3C59fFC/FFFFFF/"
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: '#f6f7fb', padding: '2em 0' }}>
                        <div className="container">
                            <table style={{ width: '100%', display: 'flex' }}>
                                <tbody
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        margin: '0 auto',
                                    }}
                                >
                                    {Object.keys(all).map((item, idx) => (
                                        <tr key={idx}>
                                            <td style={{ textAlign: 'right'}}>{all[item].product1}</td>
                                            <th>
                                                {typeof all[item].field !==
                                                'undefined'
                                                    ? all[item].field
                                                          .toString()
                                                          .toUpperCase()
                                                    : '0'}
                                            </th>
                                            <td>{all[item].product2}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <CategoryBlock />
                </div>
            </div>
        );
    }
}
