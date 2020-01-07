import React, { Component } from "react";

function searchingFor(term) {
  return function(x) {
    return x.name.includes(term) || !term;
  };
}

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const { term } = this.state;
    const { users } = this.props;
    return (
      <div>
        <form>
          <input type="text" onChange={this.searchHandler} value={term} />
        </form>
        {users.filter(searchingFor(term)).map(user => (
          <div>
            <h1>{user.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;

/*searchHandler(event) {
    this.setState({ 
      ...this.state,
      term: event.target.value });
  }*/

/*import React, { Component } from "react";

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
  },
  {
    name: "Anjali Kemmer",
    email: "Anjali.Kemmer@eino.com",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/thewillbeard/128.jpg"
  },
  {
    name: "Arlene Kub",
    email: "Arlene.Kub@aurelie.info",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/jlsolerdeltoro/128.jpg"
  }
];

function searchingFor(term) {
  return function(x) {
    return x.name.includes(term) || !term;
  };
}

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      term: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const { term, users } = this.state;
    return (
      <div>
        <form>
          <input type="text" onChange={this.searchHandler} value={term} />
        </form>
        {users.filter(searchingFor(term)).map(user => (
          <div>
            <h1>{user.name}</h1>
          </div>
        ))}
        );
      </div>
    );
  }
}

export default Task;

/*searchHandler(event) {
    this.setState({ 
      ...this.state,
      term: event.target.value });
  }*/
