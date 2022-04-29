import "./App.css";
import { useEffect, useState } from "react";
import client from "./services/client";
import CatInfo from "./components/CatInfo";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [image, setImage] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchCat = async () => {
      fetch({ method: "GET" });
      const stream = await client.get("images/search");
      const data = stream.data;

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
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <CatInfo info={info} />
          {image && <img src={image} alt="my cat" width="360px" />}
        </header>
      </div>
    </Provider>
  );
}
export default App;
