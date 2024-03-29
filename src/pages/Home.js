import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image } from 'semantic-ui-react'

import './styles/home.css'
import FirebaseAuthService from '../utils/firebase/FirebaseAuthService'
import ActionButton from '../components/buttons/ActionButton'
import NoBackgroundBttn from '../components/buttons/NoBackgroundBttn'
import ScrollButton from '../components/buttons/ScrollButton'
import LoginForm from '../components/form/LoginForm'
import Jumbrotron from '../components/elements/Jumbrotron'
import { infoProps, infoProps2, jumboProps } from '../utils/staticData'
import chef3 from '../images/chef3.avif'

const Home = ({ existingUser, handleSetUserId }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    <div>
      <div className='login-form__container'>
        <Grid divided='vertically' stackable columns={2}>
          <Grid.Row className='container'>
            <Grid.Column>
              <Image fluid src={chef3} alt='chef3' />
            </Grid.Column>

            <Grid.Column>
              <LoginForm
                existingUser={existingUser}
                handleSetUserId={handleSetUserId}
                handleSubmit={handleSubmit}
                handleLogout={handleLogout}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className='info__container'>
        <Grid columns={2} relaxed='very' reversed='computer' stackable>
          <Grid.Column>
            <div className='z-index__about'>ABOUT</div>
          </Grid.Column>
          <Grid.Column>
            <p className='info__body'>{infoProps.description}</p>
          </Grid.Column>
        </Grid>
      </div>
      <Jumbrotron header={jumboProps.header} />
      <div className='info__container'>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Image src={infoProps2.image} alt='' />
          </Grid.Column>
          <Grid.Column>
            <p className='info__body'>{infoProps2.description}</p>
            <Link to='/recipes'>
              <ActionButton>Browse Recipes</ActionButton>
            </Link>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
}

export default Home
