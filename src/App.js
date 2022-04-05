import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import client from "./services/client";

function App() {
  const [image, setImage] = useState("");

  const requestCat = async () => {
    const stream = await client("images/search");
    const data = await stream.json();

    console.log(data);

    // If there are no images, we don't crash and instead set undefined
    setImage(data?.[0]?.url);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestCat}>Request a random cat image</button>

        {image && <img src={image} alt="my cat" width="100%" height="100%" />}
      </header>
    </div>
  );
}

export default App;
