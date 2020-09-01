import React, { useState, useEffect } from "react";

function User({ user }) {
  return (
    <div>
      <b>{users.username}</b>
      <span>{users.email}</span>
    </div>
  );
}

const UserList = () => {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "test@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "test2@gmail.com",
    },
    {
      id: 3,
      username: "tester3",
      email: "test3@gmail.com",
    },
  ];
  return (
    <div>
      <div>
        <b>{users.username}</b>
        <span>{users.email}</span>
      </div>
    </div>
  );
};

export default UserList;
