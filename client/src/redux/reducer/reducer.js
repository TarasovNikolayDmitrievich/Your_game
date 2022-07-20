export default function reducer(state = { userName: null, userId: null, scope: 0 }, action) {
  switch (action.type) {
    case 'REGIST_USER': {
      return {
        userName: action.payload.name, 
        userId: action.payload.id,
        scope: 0
      }
    }
    case 'LOGIN_USER': {
      return {
        userName: action.payload.name, 
        userId: action.payload.id,
        scope: 0
      }
    }
    case 'LOGOUT_USER': {
      return {
        userName: null, 
        userId: null,
        scope: 0
      }
    }

    case 'SET_USER': {
      return {
        userName: action.payload.name, 
        userId: action.payload.id,
        scope: 0
      }
    }

    case 'ADD_SCOPE': {
      return {
        ...state, scope: state.scope + action.payload
      }
    }

    case 'MINUS_SCOPE': {
      return {
        ...state, scope: state.scope - action.payload
      }
    }

    case 'STOP_GAME': {
      return {
        ...state, scope: 0
      }
    }

    default: {
      return state;
    }
  }
}
