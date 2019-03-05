import React, { Component } from "react";
import Editor from "./Editor";

class App extends Component {
  render() {
    return (
      <div className="mw7 center pt4">
        <h2>Reactivepad x Prosemirror</h2>
        <div className="mt4">
          <Editor className="ba b--black-20 editor-container" />
        </div>
      </div>
    );
  }
}

export default App;
