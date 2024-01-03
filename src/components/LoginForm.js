import React from 'react'
import { useState } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import FirebaseAuthService from '../FirebaseAuthService'
import ScrollBottomButton from '../components/ScrollBottomButton'
import '../css/loginform.css'
import chef3 from '../images/chef3.avif'
import Input from './Form/Input'
import Label from './Form/Label'
import ActionButton from './Buttons/ActionButton'

const LoginForm = ({ existingUser, userId, handleSetUserId }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await FirebaseAuthService.loginUser(username, password)
      setUsername('')
      setPassword('')
      handleSetUserId(FirebaseAuthService.auth.currentUser.uid)
    } catch (error) {
      alert(error.message)
    }
  }

  const handleLogout = () => {
    FirebaseAuthService.logoutUser()
  }

  return (
    <div className='gridded'>
      <Grid divided='vertically'>
        <Grid.Row className='container' columns={2}>
          <Grid.Column>
            <Image fluid src={chef3} alt='chef3' />
          </Grid.Column>

          <Grid.Column>
            <div className='login-container'>
              {existingUser ? (
                <form className='ui mini form'>
                  <h1>Welcome, </h1>
                  <label>
                    You are now able to create, edit, and delete recipes
                  </label>
                  <br />
                  <div className='logout-button__container'>
                    <Link to='/create-recipes-admin-only'>
                      <ActionButton className='button__action'>
                        Create A New Recipe
                      </ActionButton>
                    </Link>
                    <ActionButton
                      className='button__action'
                      onClick={handleLogout}
                    >
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className='z-index'> ABOUT</div>
    </div>
  )
}

export default LoginForm
