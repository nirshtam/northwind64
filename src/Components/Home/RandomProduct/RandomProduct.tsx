import { Component } from "react";

interface RandomProductState {
  product: string;
}

export default class RandomProduct extends Component<{}, RandomProductState> {
  private products: string[] = ["Coffee", "Ice Cream", "Apple", "Strawbery", "Chocolate"]
  private timerId = 0;

  // constructor - Object has been created
  public constructor(props: {}) {
    super(props);

    this.state = {
      product: "",
    }
  }

  // componentDidMount - Object is ready for use:
  public componentDidMount(): void {
    console.log('componentDidMount');
    this.timerId = window.setInterval(() => {
      const productIndex = Math.floor(Math.random() * this.products.length);
      const productName = this.products[productIndex];
      this.setProduct(productName);
    }, 1000);
  }

  // componentDidUpdate - Object has been updated
  public componentDidUpdate(): void {
  }

  // componentWillUnmount - The componenet is about to be destroyed.
  public componentWillUnmount(): void {
    console.log('componentWillUnmount');
    window.clearInterval(this.timerId);
  }

  private setProduct = (value: string) => {
    this.setState({
      product: value
    });
  }

  // render - UI Needs to be rendered into the DOM
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