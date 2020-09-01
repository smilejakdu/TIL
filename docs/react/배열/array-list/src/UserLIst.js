import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
};

const UserList = () => {
  const users = [
    {
      id: 1,
      username: "jakdu",
      email: "test@gmail.com",
    },
    {
      id: 2,
      username: "jakdu2",
      email: "test2@gmail.com",
    },
    {
      id: 3,
      username: "jakdu3",
      email: "test3@gmail.com",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
