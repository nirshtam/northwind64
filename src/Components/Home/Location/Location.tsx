import { Component, SyntheticEvent } from 'react';

export default class Location extends Component {
  private showLocation = (event: SyntheticEvent) => {
    const location = (event.target as HTMLSelectElement).value;
    if (location) {
      alert(location);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="location-container box">
        <p>
          <select onChange={this.showLocation}>
            <option value="" defaultValue={""}>Select Location</option>
            <option>מחוז צפון</option>
            <option>מחוז מרכז</option>
            <option>מחוז ת"א</option>
            <option>מחוז דרום</option>
          </select>
        </p>
      </div>
    )
  }
}