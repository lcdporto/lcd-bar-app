import React, {Component} from 'react';

import './index.scss'
import Pinboard from "../../components/Pinboard";

class ProductPaymet extends Component {
    render() {
        const {productId} = this.props;

        return (
            <div id='product-payment'>
                <div className='product-wrapper'>
                    <h1 style={{textAlign: 'center', width: '100%', opacity: '0.7'}}>Product info: {productId}</h1>
                </div>

                <div className='pinboard-wrapper'>
                    <Pinboard/>
                </div>
            </div>
        );
    }
}

export default ProductPaymet;