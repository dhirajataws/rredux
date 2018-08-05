import DisplayAddress from '../components/DisplayAddress';
import {connect} from 'react-redux';
// import {thunkAddAddress} from '../actions/addAddress'
// import {addEdit} from "../actions/addEdit";
import {addTemp} from "../actions/addAddress";

const mapDispatchToProps = (dispatch) => {
  return {
    addTempAddress: (address) => {
      console.log("add temp")
      console.log(addTemp(address))
      dispatch(addTemp(address));
    }
  }
}

function mapStateToProps(state, hasProps) {
  return {
    // seqNo: state.seqNo,// TODO this needs cleaning
    addressList: state.addressBook.addressList,
  };
}

export const displayContainer = connect(mapStateToProps,mapDispatchToProps)(DisplayAddress);