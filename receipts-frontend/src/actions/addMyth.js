export const addMyth = (data) => {
    
    return (dispatch) => {
        fetch('http://localhost:3000/myths', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(myth => dispatch({type: 'ADD_MYTH', payload: myth}))
    }
}
