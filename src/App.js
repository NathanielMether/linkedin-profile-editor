import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/women/50.jpg'
    }
  }

  onChangeFirstName = (event) => {
    const input = event.target
    const newFirstName = input.value
    this.setState((prevState) => {
      const user = prevState.user
      const newUser = { ...user, firstName: newFirstName}
      return {
        user: newUser
      }
    })
  }

  onChangeLastName = (event) => {
    const input = event.target
    const newLastName = input.value
    this.setState((prevState) => {
      const user = prevState.user
      const newUser = { ...user, lastName: newLastName}
      return {
        user: newUser
      }
    })
  }

  onChangeImage = (event) => {
    const input = event.target
    const newImage = input.value
    this.setState((prevState) => {
      const user = prevState.user
      const newUser = { ...user, profileImageURL: newImage}
      return {
        user: newUser
      }
    })
  }

  render() {
    const user = this.state.user

    return (
      <div className="App">
        <h1>LinkedIn Profile Editor</h1>
        <img src={user.profileImageURL}/>
        <p>Name: {user.firstName } {user.lastName}</p>
        <label>
          First name:
          {' '}
          <input value={ user.firstName }
            onChange={ this.onChangeFirstName }
          />
        </label>
        <label>
          Last name:
          {' '}
          <input value={ user.lastName }
            onChange={ this.onChangeLastName }
          />
        </label>
        <div>
          <label>
            Image URL:
            {' '}
            <input value={ user.profileImageURL }
              onChange={ this.onChangeImage }
            />
          </label>
        </div>
      </div>
    );
  }
}

export default App;
