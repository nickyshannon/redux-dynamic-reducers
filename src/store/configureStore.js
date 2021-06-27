import { createStore } from "redux";
import createReducer from "./reducers/rootReducer";

// Configure the store
const configureStore = (initialState) => {
  // createStore returns a plain object so we'll mess with it after creation.
  const store = createStore(createReducer(), initialState);

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    if (!(key in store.getState())) {
      store.asyncReducers[key] = asyncReducer;
      store.replaceReducer(createReducer(store.asyncReducers));
    }
  };

  return store;
};

export default configureStore;
