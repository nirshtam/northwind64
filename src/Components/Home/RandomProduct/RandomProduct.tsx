import { Component } from "react";

interface RandomProductState {
  product: string;
}

export default class RandomProduct extends Component<{}, RandomProductState> {
  private products: string[] = ["Coffee", "Ice Cream", "Apple", "Strawbery", "Chocolate"]

  public constructor(props: {}) {
    super(props);

    this.state = {
      product: "",
    }

    setInterval(() => {
      const productIndex = Math.floor(Math.random() * this.products.length);
      const productName = this.products[productIndex];
      this.setProduct(productName);
    }, 1000);
  }

  private setProduct = (value: string) => {
    this.setState({
      product: value
    });
  }

  public render(): JSX.Element {
    return (
      <div className="random-product-container">
        {this.state.product && (
          <div className="box">
            <p>
              {this.state.product}
            </p>
          </div>
        )}
      </div>
    )
  }
}