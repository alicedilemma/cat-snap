import { NAVIGATE } from '../actions'

const initialNavState = {
  activePage: 'home'
}

const navReducer = (state = initialNavState, action) => {
  switch (action.type) {
    case NAVIGATE:
      return {
        activePage: action.target
      }
    default:
      return state
  }
}

export default navReducer
