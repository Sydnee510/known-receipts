export const addFact = (fact, mythId) => {
    
    return (dispatch) => {
        fetch(`http://localhost:3000/myths/${mythId}/facts`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(fact)
        })
        .then(response => response.json())
        .then(myth => dispatch({type: 'ADD_FACT', payload: myth}))
    }
}