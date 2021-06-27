import React from "react";
import { useStore } from "react-redux";

const withReducer = (key, reducer) => (WrappedComponent) => {
  const Component = (props) => {
    const store = useStore();
    store.injectReducer(key, reducer);
    return <WrappedComponent {...props} />;
  };

  return Component;
};

export default withReducer;
