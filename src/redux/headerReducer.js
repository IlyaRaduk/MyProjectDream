const TOGGLE_IS_MENU = 'headerReducer/TOGGLE_IS_MENU';

let initialState = {
  isActiveBurgerMenu: false,
}

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_MENU:
      return {
        ...state,
        isActiveBurgerMenu: !state.isActiveBurgerMenu,
      }
    default:
      return state;
  }
}

export default headerReducer;

export const toggleIsBurgerMenu = () => {
  return {
    type: TOGGLE_IS_MENU,
  }
}