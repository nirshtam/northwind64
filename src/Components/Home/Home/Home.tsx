import Discount from '../Discount/Discount';
import Specials from '../Specials/Specials';
import Desserts from '../Desserts/Desserts';
import './Home.css';

export function Home(): JSX.Element {
  return (
    <div className="home-page">
      {/* Interpolation: */}
      <Discount />

      {/* Conditional Rendering */}
      <Specials />

      <Desserts />
    </div>
  )
}