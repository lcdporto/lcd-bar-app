import React, { Component } from "react";
import Modal from "react-modal";

import ScannerInstructions from "../../components/ScannerInstructions/ScannerInstructions";
import ProductPaymet from "../ProductPayment/ProductPayment";

import "./Reader.scss";

interface IState {
  keys: string[];
  isDisplayingProduct: boolean;
  lastReadedProductId: number;
}

class Reader extends Component<{}, IState> {
  state = {
    isDisplayingProduct: false,
    keys: [],
    lastReadedProductId: 0
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      this.handleInputRead();
    } else {
      this.setState((old: { keys: any[] }) => ({ keys: [...old.keys, e.key] }));
    }
  };

  handleInputRead = () => {
    this.setState({
      isDisplayingProduct: true,
      keys: [],
      lastReadedProductId: Number(this.state.keys.join(""))
    });
  };

  render() {
    return (
      <div id="reader">
        <ScannerInstructions />

        {this.renderModal()}
      </div>
    );
  }

  renderModal() {
    if (!this.state.lastReadedProductId) {
      return null;
    }

    return (
      <Modal
        isOpen={this.state.isDisplayingProduct}
        onRequestClose={() => this.setState({ isDisplayingProduct: false })}
        ariaHideApp={false}
      >
        <ProductPaymet productId={this.state.lastReadedProductId} />
      </Modal>
    );
  }
}

export default Reader;
