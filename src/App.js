import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import List from "./components/List";
import EditListForm from "./components/EditListForm";
import Generator from "./components/Generator";
import CreateListForm from "./components/CreateListForm";
import "./App.css";

const App = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/create-list">
        <CreateListForm />
      </Route>
      <Route exact path="/list">
        <List />
      </Route>
      <Route exact path="/edit-list">
        <EditListForm />
      </Route>
      <Route exact path="/spin-the-wheel">
        <Generator />
      </Route>
    </Switch>
    <Footer />
  </>
);
export default App;
