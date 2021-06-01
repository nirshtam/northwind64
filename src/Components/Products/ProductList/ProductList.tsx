import axios from "axios";
import { Component } from "react";
import ProductModel from "../../../Models/ProductModel";
import globals from "../../../Services/Globals";
import PleaseWait from "../../Shared/PleaseWait/PleaseWait";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListState {
  products?: ProductModel[];
}

class ProductList extends Component<{}, ProductListState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      products: [],
    };
  }

  public async componentDidMount(): Promise<void> {
    try {
      const response = await axios.get<ProductModel[]>(globals.productUrl);
      this.setState({ products: response.data });
    } catch (err) {
      console.error(err);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="product-list-container">
        <h1>Product List Page</h1>
        <div className="product-list">
          {this.state.products?.length === 0 && <PleaseWait />}
          {this.state.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
