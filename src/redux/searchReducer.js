import { getWords} from "../api/api";

const SET_KEY_WORD = 'searchReducer/SET_KEY_WORD';
const SET_SUB_WORDS = 'searchReducer/SET_SUB_WORDS';

let initialState = {
  keyWordInSerch: '',
  subWords: null,
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEY_WORD:
      return {
        ...state,
        keyWordInSerch: action.keyWordInSerch,
      }
    case SET_SUB_WORDS:
      return {
        ...state,
        subWords: action.subWords,
      }
    default:
      return state;
  }
}

export default searchReducer;


export const setKeyWordActionCreator = (keyWordInSerch) => {
  return {
    type: SET_KEY_WORD,
    keyWordInSerch: keyWordInSerch,
  }
}
export const setSubWordsActionCreator = (subWords) => {
  return {
    type: SET_SUB_WORDS,
    subWords: subWords,
  }
}


export const setKeyWordThunkCreator = (word) => async (dispatch) => {
  try {
    if (word === '') {
      dispatch(setKeyWordActionCreator(''))
      dispatch(setSubWordsActionCreator(null))
    }
    else {
      const response = await getWords(word);
      const wordProfile = response.data;
      if (wordProfile.length == 0) {
        dispatch(setKeyWordActionCreator(word))
      }
      else {
        dispatch(setKeyWordActionCreator(word))
        if (word.length > 2) {
          dispatch(setSubWordsActionCreator(wordProfile))
        }
      }
    }
  }
  catch (error) {
    console.log(error);
  }
}
