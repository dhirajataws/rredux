export const ADD_ADDRESS = 'ADD_ADDRESS';
export const ADD_TEMP = 'ADD_TEMP';

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
})
export const addTempAddress = (address) => ({
  type: ADD_TEMP,
  payload: address,
})

const saveAddress = async function (address) {
  // trying to mimic rest api call
  return new Promise(function (resolve, reject) {
    try { // Assume we make an axios request here
      let serialisedState = localStorage.getItem('addressList')
      if (serialisedState === null) {
        localStorage.setItem('addressList', JSON.stringify([address]))
      } else {
        serialisedState = JSON.parse(serialisedState)
        localStorage.setItem('addressList', JSON.stringify([...serialisedState, address]))
      }
      resolve() // Do we need a 'success'.
    } catch (err) {
      reject(err)
    }
  })
}

const saveTempAddress = async function (tempAddress) {
  // trying to mimic rest api call
  return new Promise(function (resolve, reject) {
    try { // Assume we make an axios request here
        localStorage.setItem('tempAddress', JSON.stringify(tempAddress))
      resolve(tempAddress)
    } catch (err) {
      reject(err)
    }
  })
}
export const thunkAddAddress = function (address) {
  return async function (dispatch) {
    try {
      await saveAddress(address)
      dispatch(addAddress(address)) // Not passing address further. It is available in temp
    } catch (err) {
      console.log(err) // cannot load local storage.
      // error handling
    }
  };
}
export const thunkAddTempAddress = function (tempAddress) {
  return async function (dispatch) {
    try {
      await saveTempAddress(tempAddress)
      dispatch(addTempAddress(tempAddress))
    } catch (err) {
      console.log(err) // cannot load local storage.
      // error handling needed
    }
  };
}