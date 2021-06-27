import React from "react";
import { connect, useSelector } from "react-redux";

const Home = () => {
  const home = useSelector((state) => state.home);
  return (
    <>
      <h1>Dynamic Redux Reducers</h1>
      <p>Home Route</p>
      <p>{home.pageStatus}</p>
    </>
  );
};

export default connect()(Home);
