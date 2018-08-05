import DisplayAddressList from '../components/DisplayAddressList';
import {connect} from 'react-redux';
import {thunkAddTempAddress} from "../actions/address";

const mapDispatchToProps = (dispatch) => {
  return {
    addTempAddress: (address) => {
      dispatch(thunkAddTempAddress(address));
    }
  }
}

function mapStateToProps(state) {
  return {
    addressList: state.phoneBook.addressList,
  };
}

export const DisplayContainer = connect(mapStateToProps,mapDispatchToProps)(DisplayAddressList);