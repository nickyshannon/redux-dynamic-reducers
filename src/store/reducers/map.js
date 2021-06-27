import { latLng } from "leaflet";

const initialState = {
  pageStatus: 2
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_LATLNG":
      return {
        ...state,
        // example of using a module within reducer (not good) should be in payload
        // although this showcases that dynamic load is working correctly
        lat: latLng(1, 2)
      };
    default:
      return state;
  }
}
