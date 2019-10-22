import React, { Component } from 'react';
import axios from 'axios';

class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      contact: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    const { data: contact } = await axios.get('http://localhost:4000/contact');
    this.setState({
      contact
    });
  }

  renderTable() {
    return this.state.contact.map((contact, index) => {
      const { id, firstName, lastName, age, dob, hobbies } = contact;
      return (
        <tr key={id}>
          {/* <th scope="row">{id}</th> */}
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{age}</td>
          <td>{dob}</td>
          <td>{hobbies}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Hobbies</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
