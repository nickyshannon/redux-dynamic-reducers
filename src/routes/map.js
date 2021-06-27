import React from "react";
import withReducer from "../hoc/withReducer";
import reducer from "../store/reducers/map";
import { connect, useSelector } from "react-redux";

const Map = () => {
  const map = useSelector((state) => state.map);
  return (
    <>
      <h1>Dynamic Redux Reducers</h1>
      <p>Inject map reducer</p>
      <p>{map.pageStatus}</p>
    </>
  );
};

export default withReducer("map", reducer)(connect()(Map));
