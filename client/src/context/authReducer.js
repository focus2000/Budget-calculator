export default (state, action) => {
    switch(action.type){
        case 'SET_USER':
          return {
              ...state,
              user:action.paylaod,
              userAuth:true,
              errors:null
          }
        case 'REGISTER_USER':
        case 'LOGIN_USER':
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                userAuth:true,
                errors:null
            }

            case 'FAIL_REGISTER':
                case 'FAIL_LOGIN':
                 case 'LOG_OUT':
                     case 'AUTH_ERROR':
                     localStorage.removeItem('token')
                    return {
                        ...state,
                        userAuth: null,
                        errors:action.payload
                    }

                    case 'SET_ERROR':
                        return {
                            ...state,
                            errors:action.payload
                        }

                        case 'CLEAR_ERROR':
                            return {
                                ...state,
                                errors:null
                            }
        default: 
        return state
    }
}