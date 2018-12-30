import axios from 'axios'
import React from 'react';
import './App.css';
import Users from './Components/Users';



class App extends React.Component {
  constructor(props) {
    super(props);
    //Initialize the state in the constructor

    this.state = {
      users: []   
    };
    this.handleRoleChange = this.handleRoleChange.bind(this);
  }

  /**
   * receives an array of users and sets the role to 
   * the passed role argument of the selected user
   * passed through the index, since find()
   * is not compatible with IE.
   * @param {*} users array of users
   * @param {*} role new role name for the user
   * @param {*} index the index of the element we want to change
   */
  changeRole(users, role, index){
    for (let i = 0; i < users.length; i++) {
      let match = (users[i].index === index);
      if (match) {
        users[i].role = role;
        return users;
      }
    }
  }

  handleRoleChange(role, index) {
    let users = this.state.users;

    // change the role of the desired user by index
    let newUsersArray = this.changeRole(users, role, index);

      // save the updated array
    this.setState(
      {users: newUsersArray},
      () =>
      console.log(
        this.state.users //verify state is updated
      )
    );
  }

  componentWillMount(){
    /*axios.get('/api/users').then(response => {
            this.setState({
              users: response.data
            })
     });*/

  
    this.setState({
      users: [
        {
          index: 1,
          name: "Fred",
          email: "fred@google.com",
          role: "default"
        },
        {
          index: 2,
          name: "Mark",
          email: "fred@google.com",
          role: "default"
        },
        {
          index: 3,
          name: "David",
          email: "fred@google.com",
          role: "default"
        }
      ]
    });
  
  }

  render() {
    return (
      <div className="App">
        
        <Users users={this.state.users} onRoleChange={this.handleRoleChange} />
        
      </div>
    );
}
}

export default App;
