import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are required!");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({
      name: "",
      email: "",
    });
  };

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.add}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />

          <button>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
