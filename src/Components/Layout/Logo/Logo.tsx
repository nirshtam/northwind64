import { Component } from "react";
import logoImage from "../../../Assets/Images/northwind-logo.jpg";

// function Logo(): JSX.Element {
//   return (
//     <div className="logo-container">
//       <img src={logoImage} alt="Northwind Logo" width={250} />
//     </div>
//   )
// }

class Logo extends Component {
  public render(): JSX.Element {
    return (
      <div className="logo-container">
        <img src={logoImage} alt="Northwind Logo" width={250} />
      </div>
    )
  }
}

export default Logo;