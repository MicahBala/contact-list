import React from 'react';
import UserTable from './UserTable';
import UserForm from './UserForm';

function UserList() {
  return (
    <div className="user-list">
      <UserForm />
      <UserTable />
    </div>
  );
}

export default UserList;
