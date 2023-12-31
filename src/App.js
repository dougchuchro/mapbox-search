import './App.css';
import { AddressAutofill } from '@mapbox/search-js-react';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Mapbox Address Autofill Demo</h1>
      </div>
      <div className="form">
        <form>
          <AddressAutofill accessToken={process.env.REACT_APP_MAPBOX_API_KEY}>
            <input
              name="address" placeholder="Address" type="text"
              autoComplete="address-line1"
            />
          </AddressAutofill>
          <input
            name="unit" placeholder="Unit number" type="text"
            autoComplete="address-line2"
          />
          <input
            name="city" placeholder="City" type="text"
            autoComplete="address-level2"
          />
          <input
            name="state" placeholder="State" type="text"
            autoComplete="address-level1"
          />
          <input
            name="country" placeholder="Country" type="text"
            autoComplete="country"
          />
          <input
            name="postcode" placeholder="Postcode" type="text"
            autoComplete="postal-code"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
