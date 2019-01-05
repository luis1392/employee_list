import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import Employees from "../../pages/Employees";
import NewEmployee from "../../pages/NewEmployee";


class App extends Component {

  render() {
    
    return (
      <div className="app">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list-employees" component={Employees}></Route>
            <Route exact path="/new-employee" component={NewEmployee}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;