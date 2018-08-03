import AddAddress from '../components/AddAddress';
import {connect} from 'react-redux';
import {addAddress} from '../actions/addAddress'

const mapDispatchToProps = (dispatch) => {
  return {
    addAddress: (address) => {
      dispatch(selectMake(make));
    }
  }
}

function mapStateToProps(state, hasProps) {
  return {
    selectedMake: state.selectedMake.make,
    selectedModel: state.selectedModel.model,
    selectedRedirect: state.selectedRedirect.redirect,
  };
}

export const saveContainer = connect(mapStateToProps, mapDispatchToProps)(AddAddress);