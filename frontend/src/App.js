import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Splash from "./components/Splash"
import Footer from "./components/Footer";
import SearchIndex from './components/BusinessPage/';

function App() {
  return (
    <>
      <Switch>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/" component={Splash} />
        <Route path="/search" component={SearchIndex} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;