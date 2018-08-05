import DisplayAddress from '../components/DisplayAddress';
import {connect} from 'react-redux';
// import {thunkAddAddress} from '../actions/addAddress'
// import {addEdit} from "../actions/addEdit";
import {addTemp} from "../actions/addAddress";

const mapDispatchToProps = (dispatch) => {
  return {
    addTempAddress: (address) => {
      dispatch(addTemp(address));
    }
  }
}

function mapStateToProps(state, hasProps) {
  return {
    addressList: state.addressBook.addressList,
  };
}

export const displayContainer = connect(mapStateToProps,mapDispatchToProps)(DisplayAddress);