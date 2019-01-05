import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";


class App extends Component {

  render() {
    
    return (
      <div className="app">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;