import {addAddress} from "./addAddressReducer";
// case ADD_ADDRESS :
//   let seqNo =0;
// if(state.temp.hasOwnProperty('seqNo'))  // differ update vs new. alternatively update handle can be set.
// {
//   seqNo = state.temp.seqNo;
// }else{
//   seqNo = state.addressList.reduce(reducer,1);
//   seqNo = seqNo + 1; //next seq no
// }
// return ({addressList :[...state.addressList, {
//   firstName:action.payload.firstName,
//   lastName:action.payload.lastName,
//   phoneNo:action.payload.phoneNo,
//   seqNo:seqNo
// }], temp:state.temp})
describe('test ',() => {
  it('adds new address into addressBook', () => {
    let state = {
      addressList:[],
      temp:{firstName:'firstName',
        lastName:'lastName',
        phoneNo:123456789,
        // seqNo:1,
      }
    }

    let action = {
      type:'ADD_ADDRESS',
      // payload:address
    }
    console.log(state=addAddress(state, action));

    action = {
      type:'ADD_ADDRESS',
      // payload:address
    }
    state.temp ={firstName:'1firstName',
        lastName:'lastName',
        phoneNo:123456789,
      seqNo:1,
      }
    console.log(addAddress(state, action));
    // assert(addAddress(state, action))
  })
})