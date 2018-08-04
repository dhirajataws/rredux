import React, {Component} from 'react';

// import './App.css';

class AddAddress extends Component {
  constructor(props){
    super(props)
    this.handlefNameChange= this.handlefNameChange.bind(this); // do we requrie these binds
    this.handleLNameChange= this.handleLNameChange.bind(this);
    this.handlePhoneChange= this.handlePhoneChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleCancel= this.handleSubmit.bind(this);
    this.clear=this.clear.bind(this);
    // this.clear()
  }
  componentWillReceiveProps(newProps) {
   // if(newProps.seqNo > 0){
   //   this.fName= newProps.addressBook[newProps.seqNo-1].firstName
   //   this.fName= newProps.addressBook[newProps.seqNo-1].lastName
   //   this.fName= newProps.addressBook[newProps.seqNo-1].phoneNo
   // }else{
     // this.fName='';
     // this.fName=undefined
   // }

    // this.filterModel(newProps.selectedMake);
  }
  handlefNameChange(e) {
    this.props.tempAddress.firstName = e.target.value
    this.props.addTempAddress(this.props.tempAddress)
  }
  handleLNameChange(e) {
    this.props.tempAddress.lastName = e.target.value
    this.props.addTempAddress(this.props.tempAddress)

  }
  handlePhoneChange(e) {
    this.props.tempAddress.phoneNo = e.target.value
    this.props.addTempAddress(this.props.tempAddress)
  }
  clear(){
    this.props.tempAddress.firstName=undefined;
    this.props.tempAddress.lasttName=undefined;
    this.props.tempAddress.phoneNo=undefined;
  }
  handleSubmit (e) {
    e.preventDefault()
    // this.props.addAddress({})
    this.props.addAddress()
    this.clear();
  }
  handleCancel (e) {
    // e.preventDefault()
    // console.log(this.props);
    // this.fName=''
    // this.lName=''
    // this.phone=''
    // this.props.addAddress({firstName:this.fName,lastName:this.lName,phoneNo:this.phone})
  }
  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" value={this.props.tempAddress.firstName} id="firstName"  onChange={this.handlefNameChange}
                       placeholder="First Name"/>
              </div>
            </div>
            <div className="col-sm">

              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" id="lastName" value={this.props.tempAddress.lastName} onChange={this.handleLNameChange}
                       placeholder="Last Name"/>
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group">
                <label>Phone No.</label>
                <input type="text" className="form-control" id="phoneno"  value={this.props.tempAddress.phoneNo} onChange={this.handlePhoneChange}
                       placeholder="Phone No."/>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end my-4">
            <input className="btn btn-primary btn-md mr-2" type="button" value="Cancel"/>
              <input className="btn btn-primary btn-md ml-2" type="submit" value="Save"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddAddress;