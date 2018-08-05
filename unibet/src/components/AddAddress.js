import React, {Component} from 'react';

class AddAddress extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.checkDisabled = this.checkDisabled.bind(this);
  }

  handleChange(e) {
    this.props.tempAddress[e.target.name] = e.target.value
    this.props.addTempAddress(this.props.tempAddress)
    e.preventDefault()
  }

  checkDisabled() {
    return this.props.tempAddress.firstName === '' &&
      this.props.tempAddress.lastName === '' &&
      this.props.tempAddress.phoneNo === ''
  }

  handleSubmit(e) {
    this.props.addAddress(this.props.tempAddress) // tempAddress for mocking axios style data insert.reducer not needed
    e.preventDefault()
  }

  handleCancel(e) {
    this.props.addTempAddress({firstName: '', lastName: '', phoneNo: '', seqNo: ''})
    e.preventDefault()
  }

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" name="firstName" id="firstName"
                       value={this.props.tempAddress.firstName} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" name="lastName" id="lastName"
                       value={this.props.tempAddress.lastName} onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group">
                <label>Phone No.</label>
                <input type="text" className="form-control" id="phoneNo" name="phoneNo"
                       value={this.props.tempAddress.phoneNo} onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end my-4">
            <input className="btn btn-primary btn-md ml-2" disabled={this.checkDisabled()} type="submit" value="Save"/>
            <input className="btn btn-primary btn-md ml-2" type="button" onClick={this.handleCancel} value="Cancel"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddAddress;