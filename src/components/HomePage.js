// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Horizontally centers the content
        alignItems: 'center', // Vertically centers the content
        height: '100vh', // Full viewport height
        backgroundColor: '#e0f7fa',
        padding: '20px', // Add padding for small screens
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '1000px', // Limit the width for larger screens
          width: '100%',
        }}
      >
        <h1
          style={{
            marginBottom: '30px',
            fontSize: '2.5em',
            color: '#00796b',
          }}
        >
          Welcome to Fruit.ai
        </h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)), repeat(2, 1fr) ', // Two-column layout for larger screens
            gap: '20px',
            justifyItems: 'center', // Centers the items horizontally
            width: '100%',
          }}
        >
          {/* Responsive box for Chat */}
          <Link
            to="/chat"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '1.5em',
              backgroundColor: '#ff8a80',
              padding: '30px',
              borderRadius: '10px',
              width: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#e53935';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ff8a80';
            }}
          >
            Chat
          </Link>

          {/* Responsive box for Translator */}
          <Link
            to="/translator"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '1.5em',
              backgroundColor: '#ffca28',
              padding: '30px',
              borderRadius: '10px',
              width: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#f57f17';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ffca28';
            }}
          >
            Translator
          </Link>

          {/* Responsive box for FAQ */}
          <Link
            to="/faq"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '1.5em',
              backgroundColor: '#4db6ac',
              padding: '30px',
              borderRadius: '10px',
              width: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#00796b';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#4db6ac';
            }}
          >
            FAQ
          </Link>

          {/* Responsive box for About */}
          <Link
            to="/about"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '1.5em',
              backgroundColor: '#7986cb',
              padding: '30px',
              borderRadius: '10px',
              width: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#3f51b5';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#7986cb';
            }}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
