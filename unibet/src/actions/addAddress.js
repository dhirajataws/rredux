export const ADD_ADDRESS = 'ADD_ADDRESS';

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
})

export const saveState = async function(address){
  // trying to mimic rest api call
  return new Promise(function(resolve, reject){
    try{
      let serialisedState = localStorage.getItem('addressBook')
      if(serialisedState === null){
        localStorage.setItem('addressBook',JSON.stringify([address]))
      }else{
        serialisedState = JSON.parse(serialisedState)
        localStorage.setItem('addressBook',JSON.stringify([...serialisedState, address]))
      }
      resolve('success')
    }catch(err){
      reject(err)
      // ignoring error
    }
  })
}
export const thunkAddAddress =  function (address) {
  return async function(dispatch){
    //localStorage.setItem('address', address);
    // console.log(address);
    try{
      await saveState(address)
      dispatch(addAddress(address))
    }catch(err){
      console.log(err)
      // error handling
    }



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