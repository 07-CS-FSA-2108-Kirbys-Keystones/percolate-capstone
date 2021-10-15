import React, { Component } from "react";
import { Route, Switch } from "react-router";
import AllBusinesses from "../businesses/allBusinesses/AllBusinesses";
import AddReview from "../reviews/AddReview";
import LoginPage from "../loginSignup/Login";
import Signup from "../loginSignup/Signup";
import Business from "../businesses/singleBusiness/singleBusiness";
import SingleUserPage from "../user/SinglePageUser";
import SingleCoffee from "../coffee/SingleCoffee";
// import AllBusinesses from "./components/businesses/allBusinesses/AllBusinesses";
// import LoginPage from "./components/Login";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/review/add" component={AddReview} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/all-business" component={AllBusinesses} />
        <Route path="/singleBusiness" component={Business} />
        <Route path="/users/:id" component={SingleUserPage} />
        <Route exact path="/coffee/:coffeeId" component={SingleCoffee} />
      </Switch>
    );
  }
}

export default Routes;