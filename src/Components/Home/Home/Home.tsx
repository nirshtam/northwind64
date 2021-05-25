import Discount from "../Discount/Discount";
import Specials from "../Specials/Specials";
import Desserts from "../Desserts/Desserts";
import Sales from "../Sales/Sales";
import Recommand from "../Recommand/Recommand";
import "./Home.css";
import Location from "../Location/Location";
import BestSeller from "../BestSeller/BestSeller";
import RandomProduct from "../RandomProduct/RandomProduct";
import { Component } from "react";
import Search from "../Search/Search";
import Address from "../Address/Address";
import Hours from "../Hours/Hours";

interface HomeState {
    counter: number;
}

class Home extends Component<{}, HomeState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  public render(): JSX.Element {
    return (
      <div className="home-page">
        {/* Interpolation: */}
        <Discount />

        {/* Conditional Rendering */}
        <Specials />

        {/* Displaying List */}
        <Desserts />

        {/* Props */}
        <Sales percent={30} />
        <Sales percent={50} category="Shoes" />

        {/* Events */}
        <Recommand />
        <Location />

        {/* State */}
        <BestSeller />

        <div>
            <p>
                {this.state.counter % 2 === 0 && (
                    <RandomProduct />
                )}
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Increase Counter</button>
                <p>Counter: {this.state.counter}</p>
            </p>
        </div>

        {/* Two-way Binding */}
        <Search />

        <Address />

        <Hours />
      </div>
    );
  }
}

export default Home;