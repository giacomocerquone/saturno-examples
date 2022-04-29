import React from "react";
import { useMatch, useNavigate, useParams } from "react-router";

const CatBreed = () => {
  const params = useParams();
  const match = useMatch("/cat/:breed");

  console.log(match, params);

  return <div>Searched Breed: {params.breed}</div>;
};

export default CatBreed;
