// src/components/AboutPage.js
import React from 'react';

function AboutPage() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#F1BD9F',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      fontSize: '2em',
      color: '#6a1b9a',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.2em',
      lineHeight: '1.6',
      color: 'black',
      margin: '0 auto',
      maxWidth: '800px',
    },
    infoBox: {
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      marginTop: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'left',
    },
    list: {
      marginTop: '20px',
      listStyleType: 'disc',
      marginLeft: '20px',
    },
    listItem: {
      fontSize: '1.1em',
      marginBottom: '10px',
      color: '#4a148c',
    },
    mobileFriendly: {
      '@media (max-width: 768px)': {
        paragraph: {
          fontSize: '1em',
        },
        heading: {
          fontSize: '1.5em',
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      
      <div style={styles.infoBox}>
        <p style={styles.paragraph}>
          🍎 Fruit.ai is a cutting-edge app designed to revolutionize the fruit industry. Our team of experts has leveraged advanced AI technology to create a powerful tool that accurately identifies fruit quality, streamlines sorting processes, and minimizes waste. With Fruit.ai, users can enjoy:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>🍏 Enhanced efficiency in fruit sorting and quality assessment.</li>
          <li style={styles.listItem}>🍑 Increased profitability through optimized processes.</li>
          <li style={styles.listItem}>🍊 A sustainable approach to fruit production, reducing waste.</li>
          <li style={styles.listItem}>🍓 Real-time insights and data-driven decisions for better management.</li>
        </ul>

        <p style={styles.paragraph}>
          Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist:
        </p>

        <ul style={styles.list}>
          <li style={styles.listItem}>🍌 Personalized fruit recommendations tailored to your health needs.</li>
          <li style={styles.listItem}>🍉 Easy access to nutritional information for a variety of fruits.</li>
          <li style={styles.listItem}>🍇 A user-friendly experience to help integrate the best fruits into your daily routine.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
