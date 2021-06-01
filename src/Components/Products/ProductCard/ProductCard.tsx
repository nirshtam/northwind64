import ProductModel from "../../../Models/ProductModel";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: ProductModel;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <Link to={`/products/details/${props.product.id}`}>
      <div className="product-card box">
        <p>
          {props.product.name}
          <br />
          Price: {props.product.unitPrice}
          <br />
          Stock: {props.product.unitsInStock}
        </p>
      </div>
    </Link>
  );
}
