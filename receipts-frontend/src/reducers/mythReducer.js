export default function mythReducer(state = {myths: []}, action) {
//debugger;
    switch (action.type){
        case 'FETCH_MYTHS':
            return {myths: action.payload}
        case 'ADD_MYTH':
            return {...state, myths: [...state.myths, action.payload]}
        case 'ADD_FACT':
            let myths = state.myths.map(myth =>{
                if (myth.id === action.payload.id) {
                    return action.payload
                } else {
                    return myth
                }
            })
            return {...state, myths: myths}
        case 'DELETE_MYTH':
            let mythsDelete = state.myths.map(myth => {
                if (myth.id === action.payload.id) {
                    return action.payload
                } else {
                    return myth
                }
            })
            return {...state, myths: mythsDelete}
            default:
            return state
    }
}