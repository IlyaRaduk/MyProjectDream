const SET_DATE = 'mainPageReducer/SET_DATE';

let initialState = {
  date: '',
}

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.date,
      }
    default:
      return state;
  }
}

export default mainPageReducer;

export const setDateActionCreator = (date) => {
  return {
    type: SET_DATE,
    date: date,
  }
}