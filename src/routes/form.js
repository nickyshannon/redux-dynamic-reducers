import React from "react";
import reducer from "../store/reducers/form";
import withReducer from "../hoc/withReducer";
import { connect, useSelector } from "react-redux";

const Form = () => {
  const form = useSelector((state) => state.form);

  return (
    <>
      <h1>Dynamic Redux Reducers</h1>
      <p>Inject form reducer</p>
      <p>{form.pageStatus}</p>
    </>
  );
};

export default withReducer("form", reducer)(connect()(Form));
