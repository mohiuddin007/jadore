import "./App.css";
import Login from "./components/Authentication/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/Authentication/SignUp/SignUp";
import ForgetPassword from "./components/Authentication/ForgetPassword/ForgetPassword";
import CreateNewPassword from "./components/Authentication/CreateNewPassword/CreateNewPassword";
import Verification from "./components/Authentication/Verification/Verification";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Products from "./components/Products/Product/Products";
import DeliveryAddress from "./components/Delivery/Checkout/DeliveryAddress";
import DeliveryTimeAndCost from "./components/Delivery/Checkout/DeliveryTimeAndCost";
import Payment from "./components/Delivery/Payment/Payment";
import YourCart from "./components/Delivery/Cart/YourCart";
import ProductPopUp from "./components/Delivery/ProductPopUp/ProductPopUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/deliveryAddress">
          <DeliveryAddress />
        </Route>
        <Route path="/deliveryTimeAndCost">
          <DeliveryTimeAndCost />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/cart">
          <YourCart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Router path="/forgetPassword">
          <ForgetPassword />
        </Router>
        <Router path="/createNewPassword">
          <CreateNewPassword />
        </Router>
        <Route path="/verification">
          <Verification />
        </Route>
        <Route path="/popup">
          <ProductPopUp />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
