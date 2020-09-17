export function fetchMyths() {
   return (dispatch) => {
    fetch('http://localhost:3000/myths', {
      method: "GET"})
    .then(response => response.json())
    .then(myths => dispatch({
        type: 'FETCH_MYTHS', 
        payload: myths
    }))
    .then(data => console.log(data))
   }


}
