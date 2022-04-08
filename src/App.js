import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import client from "./services/client";
import CatInfo from "./components/CatInfo";

function App() {
  const [image, setImage] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchCat = async () => {
      const stream = await client("images/search");
      const data = await stream.json();

      if (data[0]) {
        setImage(data[0].url);
        setInfo({
          description: "Descrizione",
          country: "United States",
          name: "Giovanni",
        });
      }
    };

    fetchCat();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <CatInfo info={info} />
        {image && <img src={image} alt="my cat" width="360px" />}
      </header>
    </div>
  );
}
export default App;
