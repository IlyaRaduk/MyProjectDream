import { getWords } from "../api/api";
const SET_WORD_PROFILE = 'wordPageReducer/SET_WORD_PROFILE';

let initialState = {
  wordProfile: null,
}

const wordProfilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORD_PROFILE:
      return {
        ...state,
        wordProfile: action.wordProfile,
      }
    default:
      return state;
  }
}

export default wordProfilePageReducer;

export const setWordProfileActionCreator = (wordProfile) => {
  return {
    type: SET_WORD_PROFILE,
    wordProfile: wordProfile,
  }
}

export const getWordProfileThunkCreator = (word) => async (dispatch) => {
  try {
    const response = await getWords(word);
    const wordProfile = response.data;
    dispatch(setWordProfileActionCreator(...wordProfile));
  }
  catch (error) {
    console.log(error);
  }
}