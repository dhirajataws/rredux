import React, {Component} from 'react';

// import './App.css';

class DisplayAddress extends Component {
  constructor(props){
    super(props)
    // this.handleEdit = this.handleEdit.bind(this);
  }
  // handleEdit(e){
  //    this.props.addTempAddress(this.props.addressList[parseInt(e.target.value)-1]);
  //   //this.props.addTempAddress({firstName:'firsss',lastName:'rrrrrrrr',phoneNo:111111});
  // }
  // handleSubmit (e) {
  //   e.preventDefault()
  //   console.log(this.props);
  //   // this.props.addAddress({})
  //   this.props.addAddress({firstName:this.fName,lastName:this.lName,phoneNo:this.phone})
  // }

  // render() {
  //   return (<div>
  //     {this.props.addressBook.map((address, index) => (<Address address={address}/>))}
  //   </div>)
  // }
  render() {
    return (
        <div className="container">
              <div className="table-responsive-sm">
                <table className="table">
                  <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Phone No</th>
                    <th scope="col"></th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.addressList.map((address, index) => (<Address address={address} handleEdit={this.props.addTempAddress}/>))}
                  </tbody>
                </table>
              </div>
            </div>
    )
  }
}

export default DisplayAddress;

class Address extends Component {
  handleClick = () => {
    this.props.handleEdit({
        seqNo: this.props.address.seqNo,
        firstName: this.props.address.firstName,
        lastName: this.props.address.lastName,
        phoneNo: this.props.address.phoneNo
      }
    );
  }

  render(){
  return (
    <tr>
      <td>{this.props.address.seqNo}</td>
      <td>{this.props.address.firstName}</td>
      <td>{this.props.address.lastName}</td>
      <td>{this.props.address.phoneNo}</td>

      <td><button type="button"  onClick={this.handleClick} className="btn btn-info">Edit</button>
      </td>
    </tr>
  )
}
}
