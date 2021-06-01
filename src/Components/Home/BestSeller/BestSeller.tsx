import { Component } from "react";

interface BestSellerState {
  item: string;
  price: number;
}

// class BestSeller extends Component { // No props or state
// class BestSeller extends Component<SomePropsType> { // We have props (SomePropsType), and not state
// class BestSeller extends Component<{}, SomeStateType> { // We don't have props, but we have state (SomeStateType)
class BestSeller extends Component<{}, BestSellerState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      item: "",
      price: 0
    }
  }

  private showBestSellerProduct = () => {
    this.setState({
      item: "Coffee",
      price: 8.5
    });
  }

  public render(): JSX.Element {
    return (
      <div className="best-seller-container box">
        <p>
          <button onClick={this.showBestSellerProduct}>Show BestSeller Product</button>
        </p>
        {this.state.item && (
          <p>{this.state.item}, price: ${this.state.price}</p>
        )}
      </div>
    )
  }
}

export default BestSeller;