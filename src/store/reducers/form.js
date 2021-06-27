import * as Formik from "formik";

const initialState = {
  pageStatus: 3
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "IS_VALID_FORM":
      return {
        ...state,
        // example of using a module within reducer (not good) should be in payload
        // although this showcases that dynamic load is working correctly
        isValid: Formik.valid
      };
    default:
      return state;
  }
}
