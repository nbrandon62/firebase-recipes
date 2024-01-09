import React from 'react'
import { Link } from 'react-router-dom'

import './styles/loginform.css'
import Input from './Input'
import Label from './Label'
import ActionButton from '../buttons/ActionButton'
import ScrollButton from '../buttons/ScrollButton'
import NoBackgroundBttn from '../buttons/NoBackgroundBttn'
import FirebaseAuthService from '../../utils/firebase/FirebaseAuthService'

const LoginForm = ({
  existingUser,
  handleSubmit,
  handleLogout,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  const handleSignUp = async (e) => {
    e.preventDefault()

    try {
      await FirebaseAuthService.loginWithGoogle()
    } catch (err) {
      console.log('Error:', err)
    }
  }
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
            <div className='scroll-button__down__container'>
              <ScrollButton direction='down' />
            </div>
          </form>
        ) : (
          <>
            <form className='ui mini form' onSubmit={handleSubmit}>
              <div className='eight wide field'>
                <Label htmlFor='input__username'>Have the secret login?</Label>
                <br />
                <Label htmlFor='input__username'>Enter Email</Label>
                <Input
                  id='input__username'
                  placeholder='Enter username'
                  type='email'
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type='submit' style={{ display: 'none' }} />
            </form>

            <div className='login__buttons__wrapper'>
              <div className='login__buttons__container'>
                <ActionButton
                  onClick={handleSignUp}
                  disabled={true}
                  arialabel='sign up using Google Auth'
                >
                  Sign up soon...
                </ActionButton>
                <NoBackgroundBttn
                  arialabel={'login with email and password'}
                  onClick={handleSubmit}
                >
                  Login
                </NoBackgroundBttn>
              </div>

              <ScrollButton direction='down' />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginForm
