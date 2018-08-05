import AddAddress from '../components/AddAddress';
import {connect} from 'react-redux';
import {thunkAddAddress, thunkAddTempAddress} from '../actions/address'

const mapDispatchToProps = (dispatch) => {
  return {
    addAddress: (address) => {
      dispatch(thunkAddAddress(address));
    },
    addTempAddress: (address) => {
      dispatch(thunkAddTempAddress(address))
    }
  }
}

function mapStateToProps(state) {
  return {
    tempAddress: state.phoneBook.tempAddress,
  };
}

export const AddContainer = connect(mapStateToProps, mapDispatchToProps)(AddAddress);