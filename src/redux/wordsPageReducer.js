import { getWords } from "../api/api";
const SET_WORDS = 'wordsPageReducer/SET_WORDS';
const SET_LETTER = 'wordsPageReducer/SET_LETTER';
const IS_FETCHING = 'wordsPageReducer/IS_FETCHING';
const SET_PAGE = 'wordsPageReducer/SET_PAGE';
const RESET_INIT = 'wordsPageReducer/RESET_INIT';
const SET_TOTAL_COUNT = 'wordsPageReducer/SET_TOTAL_COUNT';

let initialState = {
  letter: '',
  words: [],
  currentPage: 1,
  isFetching: true,
  totalCountWords: 1,
}

const wordsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORDS:
      return {
        ...state,
        words: [...state.words, ...action.words],
      }
    case RESET_INIT:
      return {
        ...state,
        words: [],
        currentPage: 1,
        isFetching: true,
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCountWords: action.totalCountWords,
      }
    case SET_LETTER:
      return {
        ...state,
        letter: action.letter,
      }
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case SET_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      }

    default:
      return state;
  }
}

export default wordsPageReducer;



export const setTotalCountActionCreator = (totalCountWords) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCountWords: totalCountWords,
  }
}
export const setWordsActionCreator = (words) => {
  return {
    type: SET_WORDS,
    words: words,
  }
}

export const resetInitActionCreator = () => {
  return {
    type: RESET_INIT,
  }
}

export const setLetterActionCreator = (letter) => {
  return {
    type: SET_LETTER,
    letter: letter,
  }
}
export const setIsFetchingActionCreator = (isFetching) => {
  return {
    type: IS_FETCHING,
    isFetching: isFetching,
  }
}
export const setPageActionCreator = () => {
  return {
    type: SET_PAGE
  }
}


export const getWordsThunkCreator = (page, letter = null) => async (dispatch) => {
  try {
    if (letter) {
      dispatch(setLetterActionCreator(letter));
    }
    else {
      dispatch(setLetterActionCreator('Все слова'));
    }
    const response = await getWords(letter, page);
    const words = response.data;
    const total = response.total;
    dispatch(setTotalCountActionCreator(total))
    dispatch(setPageActionCreator());
    dispatch(setWordsActionCreator(words));
    dispatch(setIsFetchingActionCreator(false));
  }
  catch (error) {
    console.log(error);
  }
}
