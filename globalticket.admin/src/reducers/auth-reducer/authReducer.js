const authReducer = (state, {type, token, user}) => {
    
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                token: token,
                user: user
            }
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                user: null
            }
        default:
            return state
    }
    
}
export default authReducer