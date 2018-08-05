// export const loadState = () => {
//   try{
//     const serialisedState = localStorage.getItem('state')
//     if(serialisedState === null){
//       return {addressBook: {addressList:[], temp:{}}}
//     }
//     return JSON.parse(serialisedState);
//
//   }catch(err){
//   return {addressBook: {addressList:[], temp:{}}}
//   }
// }
//
// export const saveState = (state)=>{
//   try{
//     const serialisedState = JSON.stringify(state);
//     localStorage.setItem('state',serialisedState)
//   }catch(err){
//     // ignoring error
//   }
// }
