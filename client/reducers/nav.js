import { NAVIGATE, NAVIGATE_SNAP } from '../actions'

const initialNavState = {
  activePage: 'home',
  activeSnap: 0
}

const navReducer = (state = initialNavState, action) => {
  switch (action.type) {
    case NAVIGATE:
      return {
        activePage: action.target,
        activeSnap: state.activeSnap
      }

    case NAVIGATE_SNAP:
      return {
        activePage: 'snap',
        activeSnap: action.snapId
      }

    default:
      return state
  }
}

export default navReducer
