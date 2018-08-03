import React, {Component} from 'react';

// import './App.css';

class AddAddress extends Component {
  render() {
    return (
      <div className="container mt-5">
        <form>
          <div className="row">
            <div className="col-sm">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName"
                       placeholder="First Name"/>
              </div>
            </div>
            <div className="col-sm">

              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Last Name"/>
              </div>
            </div>
            <div className="col-sm">
              <div class="form-group">
                <label for="phoneno">Phone No.</label>
                <input type="text" className="form-control" id="phoneno" placeholder="Phone No."/>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end my-4">
            <input class="btn btn-primary btn-md mr-2" type="button" value="Cancel"/>
              <input class="btn btn-primary btn-md ml-2" type="submit" value="Save"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddAddress;