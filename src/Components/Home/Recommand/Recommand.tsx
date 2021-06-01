import { Component, SyntheticEvent } from 'react';
import './Recommand.css';

// function Recommand() {

//   const item = "Ice Cream!"; // Demo for getting a response from a remote server

//   function showRecommandation(event: SyntheticEvent) {
//     console.log(event.target); // The element raising the event
//     console.log(event.nativeEvent); //The html native event object
//     console.log((event.target as HTMLButtonElement).innerText);
//     alert(item);
//   }

//   return (
//     <div className="recommand-container box">
//       <button onClick={showRecommandation}>Recommand a Product</button>
//     </div>
//   )
// }

class Recommand extends Component<{}> {
  private item = "Ice Cream!";

  // constructor(props: {}) {
  //   super(props);
  //   this.showRecommandation = this.showRecommandation.bind(this);
  // }

  private showRecommandation = (event: SyntheticEvent) => {
    console.log(event.target); // The element raising the event
    console.log(event.nativeEvent); //The html native event object
    console.log((event.target as HTMLButtonElement).innerText);
    alert(this.item);
  }

  public render(): JSX.Element {
    return (
      <div className="recommand-container box">
        <button onClick={this.showRecommandation}>Recommand a Product</button>
      </div>
    )
  }
}

export default Recommand;