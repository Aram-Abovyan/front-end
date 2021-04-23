import { v4 as uuidv4 } from 'uuid';

let initialState = [
  {
    id: 666,
    type: "killer",
    description: "delete someone from life",
    price: 3000,
    specialistId: 1,
  },
  {
    id: uuidv4(),
    type: "cleaning",
    description: "clean after killer",
    price: 1000,
    specialistId: 2,
  },
];

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case "services/AddService":
      return [...state, action.payload];
    case "services/DeleteService":
      return state.filter(({id}) => id !== action.payload);
    default:
      return state
  }
}

export function addNewService(obj) {
  return async function(dispatch, getState) {
    dispatch({type: "services/AddService", payload: {...obj, id: uuidv4()}});
  }
}

export function deleteService(id) {
  return async function(dispatch, getState) {
    dispatch({type: "services/DeleteService", payload: id});
    console.log(getState());
  }
}