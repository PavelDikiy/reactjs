// # Core
import React, { Component } from "react";

// # Components
import Profile from "../../components/Profile";
// import ToDo from "../../components/ToDo";
// import Log from "../../components/Log";


class App extends Component {
  render() {
    return (
      <>
        <header className="header"></header>
        <Profile />
        {/* <ToDo /> */}
        {/* <Log /> */}
      </>
    );
  }
}


export default App;
