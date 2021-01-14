import './App.css';
import Login from './components/Authentication/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './components/Authentication/SignUp/SignUp';
import ForgetPassword from './components/Authentication/ForgetPassword/ForgetPassword';
import CreateNewPassword from './components/Authentication/CreateNewPassword/CreateNewPassword';
import Verification from './components/Authentication/Verification/Verification';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Products from './components/Products/Product/Products';
import DeliveryAddress from './components/Delivery/Checkout/DeliveryAddress';
import DeliveryTimeAndCost from './components/Delivery/Checkout/DeliveryTimeAndCost';
import Payment from './components/Delivery/Payment/Payment';
import YourCart from './components/Delivery/Cart/YourCart';
import { createContext, useState } from 'react';
import FloatingCard from './components/FloatingCard/FloatingCard';

export const ProductContext = createContext()

function App() {
const [productsInfo, SetProductsInfo] = useState([]);

const updateProductInfo = (id,quan) =>{
  // console.log(id);
  var newCart = productsInfo.map(pd =>{
    if(pd._id == id){
      pd.quantity = quan;
    }
    return pd;
  })
  SetProductsInfo(newCart);
  // console.log(productsInfo)
}
  return (
    <ProductContext.Provider value={[productsInfo, SetProductsInfo]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home updateProductInfo={updateProductInfo}/>
        </Route>
        <Route path="/products">
          <Products updateProductInfo={updateProductInfo}/>
        </Route>
        <Route path="/deliveryAddress">
          <DeliveryAddress/>
        </Route>
        <Route path="/deliveryTimeAndCost">
          <DeliveryTimeAndCost/>
        </Route>
        <Route path="/payment">
          <Payment/>
        </Route>
        <Route path="/cart">
          <YourCart updateProductInfo={updateProductInfo}/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp/>
        </Route>
        <Route path="/forgetPassword">
          <ForgetPassword/>
        </Route>
        <Route path="/createNewPassword">
          <CreateNewPassword/>
        </Route>
        <Route path="/verification">
          <Verification/>
        </Route>
        <Route path="/floatingCard">
          <FloatingCard updateProductInfo={updateProductInfo}/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </ProductContext.Provider>

  );
}

export default App;
