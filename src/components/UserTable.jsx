import React, { Component } from 'react';

class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    // fetch('userData.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       user: data
    //     });
    //   })
    //   .catch(error => console.log(error));
  }

  renderTable() {
    return this.state.user.map((user, index) => {
      const { id, firstName, lastName, age, dob, hobbies } = user;
      return (
        <tr key={id}>
          <th scope="row">{id}</th>
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
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Age</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Hobbies</th>
          </tr>
        </thead>
        <tbody>{this.renderTable()}</tbody>
      </table>
    );
  }
}

export default UserTable;
