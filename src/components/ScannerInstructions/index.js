import React, {Component} from 'react';

import './index.scss'
import ScannerImg from '../../assets/scanner.png'

class ScannerInstructions extends Component {

    render() {
        return (
            <div id='scanner-instructions'>
                <div className='badge mui--z2'>
                    <img alt='Scanner' src={ScannerImg}/>
                </div>
                <h1>Scan a product</h1>
            </div>
        );
    }
}

export default ScannerInstructions;