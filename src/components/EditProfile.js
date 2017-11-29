import React from 'react'

const EditProfile = ({
  firstName,
  lastName,
  imageURL,
  editFirst,
  editLast,
  editImage
}) => {
  return (
    <div>
      <div>
        <label>
          First Name: {' '}
          <input value={firstName}
            onChange={
              (event) => {
                editFirst(event.target.value)
              }
            }
          />
        </label>
        <label>
          Last Name: {' '}
          <input value={lastName}
            onChange={
              (event) => {
                editLast(event.target.value)
              }
            }
          />
        </label>
      </div>
      <div>
        <label>
          Image URL: {' '}
          <input value={imageURL}
            onChange={
              (event) => {
                editImage(event.target.value)
              }
            }
          />
        </label>
      </div>
    </div>
  )
}

export default EditProfile