import React, { Component } from "react";

import Pinboard from "../../components/Pinboard/Pinboard";

import { ProductDetailsComponent, ProductDetailsProduct } from "../../queries";

import "./ProductPayment.scss";

interface IProps {
  productId: number;
}

class ProductPaymet extends Component<IProps> {
  render() {
    const { productId } = this.props;

    return (
      <div id="product-payment">
        <div className="product-wrapper">
          <ProductDetailsComponent variables={{ id: productId }}>
            {({ data, loading, error }) => {
              if (loading) return <h3>Loading</h3>;
              if (error) return <h3>Invalid product!</h3>;

              if (
                data !== undefined &&
                data.product !== undefined &&
                data.product !== null
              ) {
                return this.displayProductPaymentInfo(data.product);
              }

              return null;
            }}
          </ProductDetailsComponent>
        </div>

        <div className="pinboard-wrapper">
          <Pinboard />
        </div>
      </div>
    );
  }

  displayProductPaymentInfo(product: ProductDetailsProduct) {
    return (
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
    );
  }
}

export default ProductPaymet;

/*

{({ loading, error, data }) => {
              if (loading) { return "Loading..."; }
              if (error) { return `Error! ${error.message}`; }

              return (
                <select name="dog" onChange={onDogSelected}>
                  {data.dogs.map(dog => (
                    <option key={dog.id} value={dog.breed}>
                      {dog.breed}
                    </option>
                  ))}
                </select>
              );
            }}
 */
