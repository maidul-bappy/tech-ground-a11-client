
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Admin from './Components/Admin/Admin/Admin';
import AddService from './Components/AddService/AddService';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login/Login';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import Orders from './Components/Home/Orders/Orders';
import ManageService from './Components/ManageService/ManageService';
import NotFound from './Components/NotFound/NotFound';
import ServiceCheckout from './Components/Home/ServiceCheckout/ServiceCheckout';
import AddReview from './Components/AddReview/AddReview';
import OrderItem from './Components/Home/OrderItem/OrderItem';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <Route path="/manageServices">
            <ManageService></ManageService>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <PrivateRoute path="/service/:serviceKey">
            <ServiceCheckout></ServiceCheckout>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/orderItems">
            <OrderItem></OrderItem>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;