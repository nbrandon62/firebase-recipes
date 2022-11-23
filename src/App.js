import './App.css';
import { useState } from 'react';
import FirebaseAuthService from './FirebaseAuthService';
import LoginForm from './components/LoginForm';

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div className="ui container">
      <div>
        <h1 className="title">Firebase Recipes</h1>
        <LoginForm existingUser = {user} />
      </div>
    </div>
  );
}

export default App;
 