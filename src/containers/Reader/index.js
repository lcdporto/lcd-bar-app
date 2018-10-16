import React, {Component} from 'react'

import './index.scss'
import ScannerInstructions from "../../components/ScannerInstructions"

class Reader extends Component {

    state = {
        keys: []
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyPress)
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleInputRead()
        } else {
            this.setState(old => ({keys: [...old.keys, e.key]}))
        }
    }

    handleInputRead = () => {
        console.warn('Barcode readed', this.state.keys.join(''))
        this.setState({keys: []})
    }

    render() {
        return (
            <div id='reader'>
                <ScannerInstructions/>
            </div>
        );
    }
}

export default Reader;