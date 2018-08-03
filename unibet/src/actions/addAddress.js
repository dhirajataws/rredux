export const ADD_ADDRESS = 'ADD_ADDRESS';

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
})

export const thunkAddAddress = function (address) {
  return (dispatch) => {
    //localStorage.setItem('address', address);
    console.log(address);
    dispatch(addAddress(address))
// getter
    // fetch(url)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //     return response;
    //   })
    //   .then((response) => response.json())
    //   .then((cow) => dispatch(storeCow(cow)))
  };
}