import { getWords } from "../api/api";
const SET_WORDS = 'wordsPageReducer/SET_WORDS';
const SET_LETTER = 'wordsPageReducer/SET_LETTER';

let initialState = {
  letter: '',
  words: [],
}

const wordsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORDS:
      return {
        ...state,
        words: action.words,
      }
    case SET_LETTER:
      return {
        ...state,
        letter: action.letter,
      }
    default:
      return state;
  }
}

export default wordsPageReducer;

export const setWordsActionCreator = (words) => {
  return {
    type: SET_WORDS,
    words: words,
  }
}
export const setLetterActionCreator = (letter) => {
  return {
    type: SET_LETTER,
    letter: letter,
  }
}

export const getWordsThunkCreator = (letter) => async (dispatch) => {
  try {
    dispatch(setLetterActionCreator(letter));
    const words = await getWords(letter);
    console.log(words)
    dispatch(setWordsActionCreator(words));
  }
  catch (error) {
    console.log(error);
  }
}