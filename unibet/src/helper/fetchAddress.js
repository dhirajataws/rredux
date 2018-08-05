const fetchAddress = async function () {
  // trying to mimic rest api call
  return new Promise(function (resolve, reject) {
    try { // Assume we make an axios request here
      let serialisedState = localStorage.getItem('addressList')
      if (serialisedState === null) {
        serialisedState = []
      } else {
        serialisedState = JSON.parse(serialisedState)
      }
      resolve(serialisedState) // Do we need a 'success'.
    } catch (err) {
      reject(err)
    }
  })
}

export default fetchAddress