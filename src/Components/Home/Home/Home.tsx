import Discount from '../Discount/Discount';
import Specials from '../Specials/Specials';
import Desserts from '../Desserts/Desserts';
import './Home.css';
import Sales from '../Sales/Sales';

export function Home(): JSX.Element {
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
    </div>
  )
}