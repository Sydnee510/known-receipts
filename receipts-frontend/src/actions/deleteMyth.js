export const deleteMyth = (mythId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/myths/${mythId}`, {
        method: 'DELETE'
        })
        .then(response => response.json())
        .then(myth => dispatch({type: 'DELETE_MYTH', payload: myth}))
    }

}