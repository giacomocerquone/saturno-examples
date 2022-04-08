import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import client from "./services/client";

function App() {
  const [image, setImage] = useState("");
  const [date, setDate] = useState(Date.now());

  // This useEffect runs only at mount time (e.g. when the component is first rendered)
  // registers an interval where each 3 seconds we update the dateState
  useEffect(() => {
    console.log("running the effect");

    setInterval(() => {
      setDate(Date.now());
    }, 3000);
  }, []);

  // This fetches a cat each 3 seconds
  // but to showcase the usage of the second useeffect parameter
  // we're gonna take a look at the above one

  // useEffect(() => {
  //   const fetchCat = () => {
  //     setInterval(async () => {
  //       const stream = await client("images/search");
  //       const data = await stream.json();

  //       setImage(data?.[0]?.url);
  //     }, 3000);
  //   };

  //   fetchCat();
  // }, []);

  const requestCat = async () => {
    const stream = await client("images/search");
    const data = await stream.json();

    console.log(data);

    // If there are no images, we don't crash and instead set undefined
    setImage(data?.[0]?.url);
  };

  // Here we register a useEffect where each time the date state change
  // we issue a new cat request
  useEffect(() => {
    const fetchCat = async () => {
      const stream = await client("images/search");
      const data = await stream.json();

      setImage(data?.[0]?.url);
    };

    fetchCat();
  }, [date]);

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
