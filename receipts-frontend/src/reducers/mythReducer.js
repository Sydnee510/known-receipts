export default function mythReducer(state = {myths: [], searchResults: []}, action) {
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
        case 'SEARCH_MYTHS':
            return {...state, searchResults: action.searchResults}

            default:
            return state
    }
}

export const searchMyths = (query, myths) => {
    return {
        type: "SEARCH_MYTHS",
        searchResults: myths.filter(myth => {
            return (
                myth.false_content.toLowerCase() === query.toLowerCase() ||
                myth.false_content.toLowerCase().startsWith(query) ||
                myth.false_content.toLowerCase().includes(query)
            )
        })  
    }


}