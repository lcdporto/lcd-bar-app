import "muicss/dist/css/mui.min.css";
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

import "./App.scss";
import Reader from "./containers/Reader/Reader";
import apolloClient from "./helpers/ApolloClient";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Reader />
      </ApolloProvider>
    );
  }
}

export default App;
