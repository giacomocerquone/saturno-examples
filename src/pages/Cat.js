import "../App.css";
import { useEffect, useState } from "react";
import client from "../services/client";
import CatInfo from "../components/CatInfo";
import { useSelector } from "react-redux";

function Cat() {
  const [image, setImage] = useState("");
  const [info, setInfo] = useState({});
  // prendiamo una porzione del nostro stato 
  // (ovvero dell'insieme dei reducer) e ascoltiamo il suo valore
  const token = useSelector((state) => state.user.jwt);

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
    <div className="App">
      <header className="App-header">
        <CatInfo info={info} />
        {image && <img src={image} alt="my cat" width="360px" />}
      </header>
    </div>
  );
}
export default Cat;
