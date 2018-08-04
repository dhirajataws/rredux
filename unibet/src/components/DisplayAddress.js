import React, {Component} from 'react';

// import './App.css';

class DisplayAddress extends Component {
  constructor(props){
    super(props)
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(e){
    this.props.editSeqNo(e.target.value);
  }
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
        <div class="container">
              <div class="table-responsive-sm">
                <table class="table">
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
                  {this.props.addressBook.map((address, index) => (<Address address={address} handleEdit={this.handleEdit}/>))}
                  </tbody>
                </table>
              </div>
            </div>
    )
  }
}

export default DisplayAddress;


const Address = (props) => {
  return (
    <tr>
      <td>{props.address.seqNo}</td>
      <td>{props.address.firstName}</td>
      <td>{props.address.lastName}</td>
      <td>{props.address.phoneNo}</td>
      <td><button type="button" value={props.address.seqNo} onClick={props.handleEdit} className="btn btn-info">Edit</button>
      </td>
    </tr>
  )
}
