import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Inserisci il tuo nome"
          onChange={(e) => {
            setName(e.target.value.toUpperCase());
          }}
          value={name}
        />

        <p>Il tuo nome modificato:</p>

        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
