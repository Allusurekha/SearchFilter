import React from "react";

const users = [
  {
    name: "Ali Nikolaus",
    email: "Ali.Nikolaus@ramon.com",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/renbyrd/128.jpg"
  },
  {
    name: "Angela Prosacco",
    email: "Angela.Prosacco@aurelie.info",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/timpetricola/128.jpg"
  }
];

function Users() {
  const userList = users.map(user => <div>{user.name}</div>);

  return (
    <div>
      <h2>List Of Names</h2>
      <ul>{userList}</ul>
    </div>
  );
}
export default Users;
