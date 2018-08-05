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

    // this.clear()
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
    console.log("hello"+this.props.tempAddress)
    this.props.addTempAddress(this.props.tempAddress)
  }
  handleSubmit (e) {
    // this.props.addAddress({firstName:'',lastName:'',phoneNo:''})
    this.props.addAddress(this.props.tempAddress) // tempAddress for mocking axios style data insert.reducer not needed
    e.preventDefault()

    // this.clear();
  }
  handleCancel (e) {
  }
  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label>First Name</label>
                <input type="text"  className="form-control" id="firstName" value={this.props.tempAddress.firstName} onChange={this.handlefNameChange} />
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" id="lastName" value={this.props.tempAddress.lastName} onChange={this.handleLNameChange}
                       />
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group">
                <label>Phone No.</label>
                <input type="text" className="form-control" id="phoneNo"  value={this.props.tempAddress.phoneNo} onChange={this.handlePhoneChange}
                       />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end my-4">
              <input className="btn btn-primary btn-md ml-2" type="submit" value="Save"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddAddress;