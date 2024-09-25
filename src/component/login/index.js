import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectAuth ,fetchProfile} from '../../store/apislice';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, accessToken, error,profile } = useSelector(selectAuth);

  console.log("suresh profile",profile,accessToken)
 

  useEffect(() => {
    if (accessToken) {
        console.log("suresh profile")
      dispatch(fetchProfile(accessToken?.access)); // Call the fetchProfile thunk
    }
  }, [accessToken, dispatch]);

  const handleLogin = () => {
    dispatch(loginUser(email, password));
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <p>{accessToken?.access}</p>
      <input
        type="text"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
    
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  input: {
    margin: '8px 0',
    padding: '8px',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default LoginPage;
