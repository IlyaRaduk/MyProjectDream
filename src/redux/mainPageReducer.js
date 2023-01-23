import { getWords, sendDream, getPrediction } from "../api/api";

const SET_DATE = 'mainPageReducer/SET_DATE';
const SET_MOON_PHASE = 'mainPageReducer/SET_MOON_PHASE';
const SET_KEY_WORD = 'mainPageReducer/SET_KEY_WORD';
const TOGGLE_IS_ALPHABET = 'mainPageReducer/TOGGLE_IS_ALPHABET';
const IS_ACTIVE_PREDICTION = 'mainPageReducer/IS_ACTIVE_PREDICTION';
const IS_UNACTIVE_PREDICTION = 'mainPageReducer/IS_UNACTIVE_PREDICTION';

let initialState = {
  date: '',
  moonPhase: null,
  keyWordInSerch: null,
  isAlphabet: false,
  isActivePrediction: false,
  prediction: null,
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
    case IS_ACTIVE_PREDICTION:
      return {
        ...state,
        isActivePrediction: true,
        prediction: action.prediction,
      }
    case IS_UNACTIVE_PREDICTION:
      return {
        ...state,
        isActivePrediction: false,
        prediction: action.prediction,
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
export const ActivePredictionActionCreator = () => {
  return {
    type: IS_ACTIVE_PREDICTION,
    prediction: null,
  }
}
export const UnActivePredictionActionCreator = (prediction) => {
  return {
    type: IS_UNACTIVE_PREDICTION,
    prediction: prediction,
  }
}

export const setKeyWordThunkCreator = (word) => async (dispatch) => {
  try {
    const wordProfile = await getWords(word);
    if (!wordProfile || wordProfile.length == 0) {
      alert('такого слово нет!')
    }
    else {
      dispatch(setKeyWordActionCreator(word))
    }
  }
  catch (error) {
    console.log(error);
  }
}

export const sendDreamThunkCreator = (dream) => async (dispatch) => {
  try {
    console.log(dream)
    const response = await sendDream(dream);
    if (response) {
      alert('Сон отправлен, ждите расшифровку на Ваш email');
    }
    else {
      alert('Ошибка!');
    }
  }
  catch (error) {
    console.log(error);
  }
}

export const getPredictionThunkCreator = () => async (dispatch) => {
  const prediction = await getPrediction();
  dispatch(ActivePredictionActionCreator());
  setTimeout(()=>{
    dispatch(UnActivePredictionActionCreator(prediction))
  },5000)
}