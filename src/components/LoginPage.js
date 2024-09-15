// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === 'dummy' && password === 'password') {
      setError('');
      navigate('/home');
    } else {
      setError('Invalid User ID or Password');
    }
  };

  const handleSignInWithInstagram = () => {
    // Placeholder for Instagram sign-in functionality
    alert('Sign in with Instagram functionality coming soon!');
  };

  const handleSignInWithFacebook = () => {
    // Placeholder for Facebook sign-in functionality
    alert('Sign in with Facebook functionality coming soon!');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f4f8',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    },
    form: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    inputBox: {
      marginBottom: '15px',
      marginRight: '20px',
      textAlign: 'left',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      marginTop: '5px',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
    socialButton: {
      width: '100%',
      padding: '12px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      cursor: 'pointer',
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    },
    instagramButton: {
      backgroundColor: '#C13584', // Instagram color
    },
    facebookButton: {
      backgroundColor: '#3b5998', // Facebook color
    },
    errorMessage: {
      color: 'red',
      marginBottom: '15px',
      fontSize: '14px',
    },
    heading: {
      marginBottom: '20px',
      color: '#000',
      fontSize: '32px',
    },
    label: {
      fontWeight: 'bold',
      fontSize: '14px',
      color: '#333',
    },
    '@media (max-width: 600px)': {
      form: {
        padding: '20px',
      },
      heading: {
        fontSize: '24px',
      },
      input: {
        fontSize: '14px',
      },
      button: {
        fontSize: '16px',
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login to Fruit.Ai</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputBox}>
          <label style={styles.label}>User ID</label>
          <input
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputBox}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        {error && <p style={styles.errorMessage}>{error}</p>}
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
        
        {/* Instagram Sign In */}
        <button
          type="button"
          style={{ ...styles.socialButton, ...styles.instagramButton }}
          onClick={handleSignInWithInstagram}
        >
          Sign in with Instagram
        </button>

        {/* Facebook Sign In */}
        <button
          type="button"
          style={{ ...styles.socialButton, ...styles.facebookButton }}
          onClick={handleSignInWithFacebook}
        >
          Sign in with Facebook
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
