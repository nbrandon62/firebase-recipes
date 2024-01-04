import React from 'react'
import { Link } from 'react-router-dom'

import './styles/loginform.css'
import ScrollBottomButton from '../elements/ScrollBottomButton'
import Input from './Input'
import Label from './Label'
import ActionButton from '../buttons/ActionButton'

const LoginForm = ({
  existingUser,
  handleSubmit,
  handleLogout,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <div className='login-form__container'>
      <div className='login-container'>
        {existingUser ? (
          <form className='ui mini form'>
            <h1>Welcome, </h1>
            <label>You are now able to create, edit, and delete recipes</label>
            <br />
            <div className='logout-button__container'>
              <Link to='/create-recipes-admin-only'>
                <ActionButton className='button__action'>
                  Create A New Recipe
                </ActionButton>
              </Link>
              <ActionButton className='button__action' onClick={handleLogout}>
                Logout
              </ActionButton>
            </div>
            <ScrollBottomButton />
          </form>
        ) : (
          <form className='ui mini form' onSubmit={handleSubmit}>
            <div className='eight wide field'>
              <label>Have the secret login?</label>
              <br />
              <Label htmlFor='input__username'>Enter Email</Label>
              <Input
                id='input__username'
                placeholder='Enter username'
                type='email'
                required={true}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className='eight wide field'>
              <Label htmlFor='input__password'>Enter Password</Label>
              <Input
                id='input__password'
                placeholder='Enter password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <ActionButton className='button__action'>Login</ActionButton>

            <ScrollBottomButton />
          </form>
        )}
      </div>
    </div>
  )
}

export default LoginForm
