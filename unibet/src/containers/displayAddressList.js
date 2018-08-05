import DisplayAddressList from '../components/DisplayAddressList';
import {connect} from 'react-redux';
import {thunkAddTempAddress, addAddressList} from "../actions/address";

const mapDispatchToProps = (dispatch) => {
  return {
    addTempAddress: (address) => {
      dispatch(thunkAddTempAddress(address));
    },
    addAddressList: (addressList) => {
      dispatch(addAddressList(addressList));
    }
  }
}

function mapStateToProps(state) {
  return {
    addressList: state.phoneBook.addressList,
  };
}

export const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayAddressList);