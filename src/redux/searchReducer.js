import { getWords } from "../api/api";

const SET_KEY_WORD = 'searchReducer/SET_KEY_WORD';
const SET_SUB_WORDS = 'searchReducer/SET_SUB_WORDS';
const TOGGLE_IS_ALPHABET = 'searchReducer/TOGGLE_IS_ALPHABET';
const TOGGLE_SUBWORDS = 'searchReducer/TOGGLE_SUBWORDS';

let initialState = {
    keyWordInSerch: '',
    subWords: null,
    isActiveSubWords: true,
    isAlphabet: false,
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
        case TOGGLE_IS_ALPHABET:
            return {
                ...state,
                isAlphabet: !state.isAlphabet,
            }
        case TOGGLE_SUBWORDS:
            return {
                ...state,
                isActiveSubWords: action.bool,
            }
        default:
            return state;
    }
}

export default searchReducer;

export const toggleSubWordsActionCreator = (bool) => {
    return {
        type: TOGGLE_SUBWORDS,
        bool:bool,
    }
}

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

export const toggleIsAlphabetActionCreator = () => {
    return {
        type: TOGGLE_IS_ALPHABET,
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
            if (wordProfile.length === 0) {
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
