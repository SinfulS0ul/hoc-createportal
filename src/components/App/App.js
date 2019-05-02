import React, { Component } from "react";
import { TestComponent } from "../TestComponent/TestComponent";
import { CreatePortalFactory } from "../HOCs/CreatePortalFactory";

//const node = document.getElementById("root");

const UpdatedComponent = CreatePortalFactory("body")(TestComponent);

class App extends Component {
  render() {
    return (
      <div className="App">
        <UpdatedComponent />
      </div>
    );
  }
}

export default App;
