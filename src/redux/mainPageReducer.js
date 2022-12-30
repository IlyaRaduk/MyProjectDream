import { getWordProfile } from "../api/api";

const SET_DATE = 'mainPageReducer/SET_DATE';
const SET_MOON_PHASE = 'mainPageReducer/SET_MOON_PHASE';
const SET_KEY_WORD = 'mainPageReducer/SET_KEY_WORD';
const TOGGLE_IS_ALPHABET = 'mainPageReducer/TOGGLE_IS_ALPHABET';



let initialState = {
  date: '',
  moonPhase: null,
  keyWordInSerch: null,
  isAlphabet: false,
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
    case SET_KEY_WORD:
      return {
        ...state,
        keyWordInSerch: action.keyWordInSerch,
      }
    case TOGGLE_IS_ALPHABET:
      return {
        ...state,
        isAlphabet: !state.isAlphabet,
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
export const setKeyWordActionCreator = (keyWordInSerch) => {
  return {
    type: SET_KEY_WORD,
    keyWordInSerch: keyWordInSerch,
  }
}
export const toggleIsAlphabetActionCreator = () => {
  return {
    type: TOGGLE_IS_ALPHABET,
  }
}

export const setKeyWordThunkCreator = (word) => async (dispatch) => {
  try {
    const wordProfile = await getWordProfile(word);
    console.log(wordProfile);
    if (!wordProfile) {
      alert('такого слово нет!')
    }
    else {
      dispatch(setKeyWordActionCreator(wordProfile.name))
    }
  }
  catch (error) {
    console.log(error);
  }
}