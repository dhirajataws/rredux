import AddAddress from '../components/AddAddress';
import {connect} from 'react-redux';
import {addAddress} from '../actions/addAddress'

const mapDispatchToProps = (dispatch) => {
  return {
    addAddress: (address) => {
      dispatch(addAddress(address));
    }
  }
}

function mapStateToProps(state, hasProps) {
  return {
    selectedRedirect: 'dummy',// TODO this needs cleaning
  };
}

export const saveContainer = connect(mapStateToProps, mapDispatchToProps)(AddAddress);