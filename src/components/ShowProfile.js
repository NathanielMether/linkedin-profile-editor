import React from 'react'

const ShowProfile = ({
  firstName,
  lastName,
  imageURL
}) => {
  return (
    <div>
      <img src={imageURL} alt='profile'/>
      <p>Name: {firstName } {lastName}</p>
    </div>
  )
}

export default ShowProfile