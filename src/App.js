import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './componant/Header/Header';
import Inventory from './componant/Inventory/Inventory';
import PlaceOrder from './componant/PlaceOrder/PlaceOrder';
import Review from './componant/Rewview/Review';
import Shop from './componant/Shop/Shop';



function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Shop></Shop>
          </Route>
          <Route exact path="/shop">
              <Shop></Shop>
          </Route>
          <Route exact path="/Review">
            <Review></Review>
          </Route>
          <Route exact path="/Inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path ="*"> 

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
