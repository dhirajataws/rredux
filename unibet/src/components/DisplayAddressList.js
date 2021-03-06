import React, {Component} from 'react';
import fetchAddress from '../helper/fetchAddress';

class DisplayAddressList extends Component {
  componentDidMount() {
    fetchAddress()
      .then(addressList => {
        this.props.addAddressList(addressList)
      }).catch(err => {
      // console.log(err) // error handling required for testing. isPlatormBrowser can be added.
    })
  }

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
            {this.props.addressList.map((address) => (
              <Address key={address.seqNo} address={address} handleEdit={this.props.addTempAddress}/>))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


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

  render() {
    return (
      <tr>
        <td>{this.props.address.seqNo}</td>
        <td>{this.props.address.firstName}</td>
        <td>{this.props.address.lastName}</td>
        <td>{this.props.address.phoneNo}</td>
        <td>
          <button type="button" onClick={this.handleClick} className="btn btn-info">Edit</button>
        </td>
      </tr>
    )
  }
}

export default DisplayAddressList;
