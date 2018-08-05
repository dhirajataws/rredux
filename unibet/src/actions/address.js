export const ADD_ADDRESS = 'ADD_ADDRESS';
export const ADD_TEMP = 'ADD_TEMP';
export const ADD_ADDRESS_LIST = 'ADD_ADDRESS_LIST';

// export const addAddress = (address) => ({
//   type: ADD_ADDRESS,
//   payload: address,
// })

export const addTempAddress = (address) => ({
  type: ADD_TEMP,
  payload: address,
})

export const addAddressList = (addressList) => ({
  type: ADD_ADDRESS_LIST,
  payload: addressList,
})

const reducer = (accumulator, currentValue) => {
  return (accumulator > currentValue.seqNo) ? accumulator : currentValue.seqNo; // do we need brackets
}
const saveAddress = async function (address) {
  // trying to mimic rest api call
  return new Promise(function (resolve, reject) {
    try { // Assume we make an axios request here
      let serialisedAddressList = localStorage.getItem('addressList')
      if (serialisedAddressList === null) {
        localStorage.setItem('addressList', JSON.stringify([Object.assign(address,{seqNo:1})])) // add sequence no.
        JSON.parse(localStorage.getItem('addressList'))
        resolve (JSON.parse(localStorage.getItem('addressList'))) //
      } else {
        serialisedAddressList = JSON.parse(serialisedAddressList)

        if (address.seqNo === '')  // differ update vs new. alternatively update handle can be set.
        {
          address.seqNo = serialisedAddressList.reduce(reducer, 0) + 1
        }
        //address.seqNo !== '' &&
        let found = false
        serialisedAddressList = serialisedAddressList.map((item) => {
          if (item.seqNo === address.seqNo) {
            found = true;
            return address
          } else {
            return item
          }
        })// try spread below

        serialisedAddressList = found ? serialisedAddressList : serialisedAddressList.concat(address) // address list is already new. mutable ok.
        localStorage.setItem('addressList', JSON.stringify(serialisedAddressList))
      }
      resolve(serialisedAddressList) // Do we need a 'success'.
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
      const updatedAddressList = await saveAddress(address)
      console.log(updatedAddressList)
      dispatch(addAddressList(updatedAddressList)) // Not passing address further. It is available in temp
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