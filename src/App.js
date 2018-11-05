import React, { Component } from "react";
import { FloatingLabel, MaskFloatingLabel } from "./ui/inputs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FloatingLabel
          label="Sobrenome completo*"
          placeholder="Ex. de Oliveira Barbosa Junior"
        />

        <MaskFloatingLabel
          label="Fecha de nacimiento*"
          mask="99/99/9999"
          placeholder="__/__/____"
        />
      </div>
    );
  }
}

export default App;
