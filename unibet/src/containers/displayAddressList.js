import DisplayAddressList from '../components/DisplayAddressList';
import {connect} from 'react-redux';
import {addTempAddress, addAddressList} from "../actions/address";

const mapDispatchToProps = (dispatch) => {
  return {
    addTempAddress: (address) => {
      dispatch(addTempAddress(address));
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