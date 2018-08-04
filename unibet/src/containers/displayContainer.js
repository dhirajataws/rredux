import DisplayAddress from '../components/DisplayAddress';
import {connect} from 'react-redux';
// import {thunkAddAddress} from '../actions/addAddress'
import {addEdit} from "../actions/addEdit";

const mapDispatchToProps = (dispatch) => {
  return {
    editSeqNo: (seqNo) => {
      dispatch((addEdit(seqNo)));
    }
  }
}

function mapStateToProps(state, hasProps) {
  return {
    // seqNo: state.seqNo,// TODO this needs cleaning
    addressBook: state.addressBook,
  };
}

export const displayContainer = connect(mapStateToProps,mapDispatchToProps)(DisplayAddress);