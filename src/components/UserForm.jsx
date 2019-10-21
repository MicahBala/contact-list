import React, { Component } from 'react';
import Calendar from './Calendar';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        age: '',
        // dob: '',
        hobbies: ''
      }
    };
  }

  handleChange = event => {};

  handleSubmit = event => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json));
  };

  render() {
    const { firstName, lastName, age, hobbies } = this.state.user;
    return (
      <div className="user-form">
        <h3 id="heading">Create a user</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              name="firstName"
              value={firstName}
              type="text"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              name="lastName"
              value={lastName}
              type="text"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group md-col-6">
              <label htmlFor="userage">Age</label>
              <input
                id="userage"
                name="age"
                value={age}
                type="text"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <Calendar />
          </div>
          <div className="form-group">
            <label htmlFor="userhobby">Hobbies</label>
            <input
              id="userhobby"
              name="hobbies"
              value={hobbies}
              type="text"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-row my-buttons">
            <button className="btn btn-warning" type="reset">
              Reset
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
