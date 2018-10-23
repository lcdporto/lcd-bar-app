import React, {Component} from 'react';

import './index.scss'

class Pinboard extends Component {

    render() {
        return (
            <div className='pinboard'>
                <table cellSpacing='5px'>
                    <tbody>
                    <tr>
                        <td className='input-btn'>1</td>
                        <td className='input-btn'>2</td>
                        <td className='input-btn'>3</td>
                    </tr>
                    <tr>
                        <td className='input-btn'>4</td>
                        <td className='input-btn'>5</td>
                        <td className='input-btn'>6</td>
                    </tr>
                    <tr>
                        <td className='input-btn'>7</td>
                        <td className='input-btn'>8</td>
                        <td className='input-btn'>9</td>
                    </tr>
                    <tr>
                        <td className='input-btn'>0</td>
                        <td className='pay-btn' colSpan={2}>Pagar</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Pinboard;