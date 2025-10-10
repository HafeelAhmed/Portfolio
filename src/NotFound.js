import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div className="not-found-content">
        <h1 style={{ 
          fontSize: '8rem', 
          fontWeight: 'bold', 
          color: '#AA367C',
          margin: '0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          404
        </h1>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '1rem',
          color: '#fff'
        }}>
          Oops! Page Not Found
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          color: '#B8B8B8',
          maxWidth: '500px'
        }}>
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="vvd" style={{
              background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
              border: 'none',
              color: 'white',
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              <span>Go Home</span>
            </button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="vvd"
            style={{
              background: 'transparent',
              border: '1px solid #AA367C',
              color: '#AA367C',
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;