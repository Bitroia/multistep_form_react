import React from 'react'

const UserForm = () => {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input type="text"  name='text' id='name' placeholder=''/>
        </div>
    </div>
  )
}

export default UserForm