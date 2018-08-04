import AddAddress from '../components/AddAddress';
import {connect} from 'react-redux';
import {thunkAddAddress,addTemp} from '../actions/addAddress'

const mapDispatchToProps = (dispatch) => {
  return {
    addAddress: (address) => {
      dispatch(thunkAddAddress(address));
    },
    addTempAddress: (address) => {
      dispatch(addTemp(address))
    }
  }
}

function mapStateToProps(state, hasProps) {
  return {
    // seqNo: state.addEdit,
    // addressList: state.addressBook.addressList,
    tempAddress:state.addressBook.temp,
  };
}

export const saveContainer = connect(mapStateToProps, mapDispatchToProps)(AddAddress);