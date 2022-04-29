import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../reducers";

const CatInfo = ({ info }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("name changed");
  }, [user.name]);

  useEffect(() => {
    dispatch(setName("Giovanni"));
  }, [dispatch]);

  return (
    <div style={{ margin: "4em" }}>
      <p>{info.name}</p>
      <p>{info.description}</p>
      <p>{info.country}</p>
    </div>
  );
};

export default CatInfo;
