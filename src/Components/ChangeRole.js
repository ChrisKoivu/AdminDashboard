import React, { Component } from 'react';

class ChangeRole extends Component {
 
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    roles: [
      'default', 'volunteer', 'admin'
    ]
  }

  handleSubmit(e){
    this.props.onChangeRole(this.refs.role.value, this.props.index);
    e.preventDefault();
  }

  render() {
    let roleOptions = this.props.roles.map(role=> {
      return <option key = {role} value={role}>{role}</option>
    });
   
    return (
      
        <form onSubmit ={this.handleSubmit.bind(this)}>
          <select ref = "role">
              {roleOptions}
          </select>
          <input type="submit" value="Save" />
        </form>
    );
  }
}

/*

Users.propTypes = {
  users: React.PropTypes.array,
  onDelete: React.PropTypes.func
}*/

export default ChangeRole;