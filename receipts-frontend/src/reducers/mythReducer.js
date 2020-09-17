export default function mythReducer(state = {myths: []}, action) {
//debugger;
    switch (action.type){
        case 'FETCH_MYTHS':
            return {myths: action.payload}
        default:
            return state
    }


}