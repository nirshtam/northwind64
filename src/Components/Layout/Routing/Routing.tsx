import { Route, Switch } from "react-router";
import Loadable from "react-loadable";
import About from "../../About/About";
import Home from "../../Home/Home/Home";
import ProductList from "../../Products/ProductList/ProductList";
import Page404 from "../../Shared/Page404/Page404";
import PleaseWait from "../../Shared/PleaseWait/PleaseWait";
import ProductDetails from "../../Products/ProductDetails/ProductDetails";
import AddProduct from "../../Products/AddProduct/AddProduct";

const LazyLoadContactUsComponent = Loadable({
  loader: () => import("../../ContactUs/ContactUs"),
  loading: PleaseWait,
});

export default function Routing() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/products" component={ProductList} exact />
      <Route path="/addProduct" component={AddProduct} exact />
      <Route path="/products/details/:id" component={ProductDetails} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact-us" component={LazyLoadContactUsComponent} exact />
      <Route component={Page404} /> {/* This must be last! */}
    </Switch>
  );
}
