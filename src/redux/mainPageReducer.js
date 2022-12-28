const SET_DATE = 'mainPageReducer/SET_DATE';
const SET_MOON_PHASE = 'mainPageReducer/SET_MOON_PHASE';

let initialState = {
  date: '',
  moonPhase: null,
}

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.date,
      }
    case SET_MOON_PHASE:
      return {
        ...state,
        moonPhase: action.moonPhase,
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
export const setMoonPhaseActionCreator = (moonPhase) => {
  return {
    type: SET_MOON_PHASE,
    moonPhase: moonPhase,
  }
}