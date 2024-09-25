import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/apislice';


const HomePage = () => {
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to the Home Page!</h1>
      <button onClick={handleLogout} style={styles.button}>
        Logout
      </button>
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
  button: {
    padding: '10px 20px',
    marginTop: '20px',
  },
};

export default HomePage;
