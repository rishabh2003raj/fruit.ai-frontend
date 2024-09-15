// src/components/TranslatorPage.js
import React, { useState } from 'react';

function TranslatorPage() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  // Simple word translation dictionary for demonstration
  const wordDictionary = {
    apple: 'सेब',
    banana: 'केला',
    orange: 'संतरा',
    mango: 'आम',
    grapes: 'अंगूर',
    pineapple: 'अनानास',
  };

  const handleTranslate = () => {
    // Translate the entered word using the dictionary
    const translation = wordDictionary[text.toLowerCase()];
    if (translation) {
      setTranslatedText(`Translated: ${translation}`);
    } else {
      setTranslatedText('Translation not found');
    }
  };

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f0f4f8', // Light gray for a modern background
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '2.5em',
      color: '#37474f', // Dark gray for text
    },
    textarea: {
      width: '100%',
      maxWidth: '500px',
      height: '120px',
      padding: '15px',
      border: '2px solid #00acc1', // Teal border for a clean modern look
      borderRadius: '8px',
      marginBottom: '20px',
      fontSize: '18px',
      transition: 'border-color 0.3s',
      backgroundColor: '#ffffff', // White background for the input
      color: '#37474f',
    },
    textareaFocus: {
      borderColor: '#00838f', // Darker teal on focus
    },
    button: {
      padding: '12px 30px',
      backgroundColor: '#ff7043', // Vibrant orange for the button
      border: 'none',
      borderRadius: '30px',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#f4511e', // Darker orange on hover
    },
    result: {
      marginTop: '20px',
      fontSize: '22px',
      color: '#37474f', // Dark gray for result text
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Translator</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter word to translate"
        style={styles.textarea}
        onFocus={(e) => (e.target.style.borderColor = styles.textareaFocus.borderColor)}
        onBlur={(e) => (e.target.style.borderColor = styles.textarea.borderColor)}
      />
      <button
        onClick={handleTranslate}
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Translate
      </button>
      {translatedText && (
        <div style={styles.result}>
          {translatedText}
        </div>
      )}
    </div>
  );
}

export default TranslatorPage;
