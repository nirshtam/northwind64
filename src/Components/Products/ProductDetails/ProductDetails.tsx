import axios from "axios";
import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import globals from "../../../Services/Globals";
import PleaseWait from "../../Shared/PleaseWait/PleaseWait";

// interface containg the route parameters
// The exact route params in the Routing must be here as string variables:
interface RouteParams {
  id: string;
}

// Our props interface must extends as the following:
interface ProductDetailsProps extends RouteComponentProps<RouteParams> {}

interface ProductDetailsState {
  product: ProductModel | null;
}

export default class ProductDetails extends Component<
  ProductDetailsProps,
  ProductDetailsState
> {
  public constructor(props: ProductDetailsProps) {
    super(props);
    this.state = {
      product: null,
    };
  }

  public async componentDidMount(): Promise<void> {
    try {
      const response = await axios.get<ProductModel>(
        globals.productUrl + "/" + this.props.match.params.id
      );
      this.setState({ product: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  public render(): JSX.Element {
    return (
      <>
        {this.state.product === null && <PleaseWait />}
        {this.state.product && (
          <div className="product-details box">
            <h2>Product Details</h2>
            <div>
              <h3>{this.state.product.name}</h3>
              <h3>Price: {this.state.product.unitPrice}</h3>
              <h3>Stock: {this.state.product.unitsInStock}</h3>
            </div>
            <NavLink to="/products">Back</NavLink>
          </div>
        )}
      </>
    );
  }
}
