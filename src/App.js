import React from "react";
import { Route, Switch } from "react-router";
import { Footer } from "./Footer/Footer";
import { Booking } from "./Booking/Booking";
import { Booked } from "./Booking/Booked";
import { Header } from "./Header/Header";
import { Location } from "./Header/Location";
import { Home } from "./Home/Home";

const App = () =>{
  return(
    <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/location" component={Location}></Route>
      <Route exact path="/booking" component={Booking}></Route>
      <Route exact path="/booked" component={Booked}></Route>
    </Switch>
    <Footer/>
    </>
  )
}

export default App;