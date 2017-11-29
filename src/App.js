import React, { Component } from 'react';
import './App.css';
import ShowProfile from './components/ShowProfile'
import EditProfile from './components/EditProfile'

class App extends Component {
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImageURL: 'https://randomuser.me/api/portraits/women/50.jpg'
    }
  }

  onChangeFirstName = (newName) => {
    const newFirstName = newName
    this.setState((prevState) => {
      const user = prevState.user
      const newUser = { ...user, firstName: newFirstName}
      return {
        user: newUser
      }
    })
  }

  onChangeLastName = (newName) => {
    const newLastName = newName
    this.setState((prevState) => {
      const user = prevState.user
      const newUser = { ...user, lastName: newLastName}
      return {
        user: newUser
      }
    })
  }

  onChangeImage = (newPic) => {
    const newImage = newPic
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
        <ShowProfile firstName={user.firstName} lastName={user.lastName}
        imageURL={user.profileImageURL}/>
        <EditProfile firstName={user.firstName}
          lastName={user.lastName}
          imageURL={user.profileImageURL}
          editFirst={
            (newName) => {
              this.onChangeFirstName(newName)
            }
          }
          editLast={
            (newName) => {
              this.onChangeLastName(newName)
            }
          }
          editImage={
            (newPic) => {
              this.onChangeImage(newPic)
            }           
          }
        />
      </div>
    );
  }
}

export default App;
