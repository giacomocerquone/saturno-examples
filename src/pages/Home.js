import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setToken } from "../reducers";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div>Home</div>
      <button
        onClick={() => {
          dispatch(setToken("jwt12398012983019udjiasnhbfka"));
          navigate("/cat");
        }}
      >
        Naviga e passa il token
      </button>
    </>
  );
};

export default Home;
