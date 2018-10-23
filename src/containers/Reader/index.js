import React, {Component} from 'react'
import Modal from "react-modal";

import './index.scss'
import ScannerInstructions from "../../components/ScannerInstructions"
import ProductPaymet from "../ProductPayment";

class Reader extends Component {

    state = {
        keys: [],
        isDisplayingProduct: false,
        lastReadedProductId: null,
    };

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyPress)
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleInputRead()
        } else {
            this.setState(old => ({keys: [...old.keys, e.key]}))
        }
    };

    handleInputRead = () => {

        this.setState({
            isDisplayingProduct: true,
            keys: [],
            lastReadedProductId: this.state.keys.join(''),
        })
    };

    render() {
        return (
            <div id='reader'>
                <ScannerInstructions/>

                {this.renderModal()}
            </div>
        );
    }

    renderModal() {
        return (
            <Modal
                isOpen={this.state.isDisplayingProduct}
                onRequestClose={() => this.setState({isDisplayingProduct: false})}
                ariaHideApp={false}
            >
                <ProductPaymet productId={this.state.lastReadedProductId}/>
            </Modal>
        )
    }
}

export default Reader;
