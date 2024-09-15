import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [editFaqId, setEditFaqId] = useState(null); // For editing a FAQ
  const [editFaqData, setEditFaqData] = useState({ question: '', answer: '' });

  // Fetch FAQs on component mount
  useEffect(() => {
    axios.get('http://localhost:3000/faqs')
      .then(response => setFaqs(response.data))
      .catch(error => console.error(error));
  }, []);

  // Create new FAQ
  const handleCreateFaq = () => {
    if (newFaq.question && newFaq.answer) {
      axios.post('http://localhost:3000/faqs', newFaq)
        .then(response => setFaqs([...faqs, response.data]))
        .catch(error => console.error(error));
    }
  };

  // Delete FAQ by ID
  const handleDeleteFaq = (id) => {
    axios.delete(`http://localhost:3000/faqs/${id}`)
      .then(() => setFaqs(faqs.filter(faq => faq._id !== id)))
      .catch(error => console.error(error));
  };

  // Set FAQ for editing
  const handleEditFaq = (faq) => {
    setEditFaqId(faq._id);
    setEditFaqData({ question: faq.question, answer: faq.answer });
  };

  // Update FAQ
  const handleUpdateFaq = () => {
    axios.put(`http://localhost:3000/faqs/${editFaqId}`, editFaqData)
      .then(response => {
        setFaqs(faqs.map(faq => faq._id === editFaqId ? response.data : faq));
        setEditFaqId(null); // Reset edit mode
      })
      .catch(error => console.error(error));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>FAQ List</h2>
      {faqs.map(faq => (
        <div key={faq._id} style={styles.faqItem}>
          {editFaqId === faq._id ? (
            <div style={styles.editFaq}>
              <input
                type="text"
                value={editFaqData.question}
                onChange={(e) => setEditFaqData({ ...editFaqData, question: e.target.value })}
                style={styles.input}
              />
              <input
                type="text"
                value={editFaqData.answer}
                onChange={(e) => setEditFaqData({ ...editFaqData, answer: e.target.value })}
                style={styles.input}
              />
              <button style={{ ...styles.button, ...styles.updateButton }} onClick={handleUpdateFaq}>Update FAQ</button>
            </div>
          ) : (
            <div style={styles.faqDetails}>
              <h4 style={styles.question}>{faq.question}</h4>
              <p style={styles.answer}>{faq.answer}</p>
              <div style={styles.actions}>
                <button style={{ ...styles.button, ...styles.editButton }} onClick={() => handleEditFaq(faq)}>Edit</button>
                <button style={{ ...styles.button, ...styles.deleteButton }} onClick={() => handleDeleteFaq(faq._id)}>Delete</button>
              </div>
            </div>
          )}
        </div>
      ))}

      <h2 style={styles.title}>Create a New FAQ</h2>
      <div style={styles.createFaq}>
        <input
          type="text"
          placeholder="Question"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Answer"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
          style={styles.input}
        />
        <button style={{ ...styles.button, ...styles.addButton }} onClick={handleCreateFaq}>Add FAQ</button>
      </div>
    </div>
  );
};

// Inline CSS styles
// Inline CSS styles
const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '50px',
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#f0f4f8',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e0e0e0',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px',
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    
  },
  faqItem: {
    backgroundColor: '#fff',
    padding: '25px',
    marginBottom: '20px',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    },
  },
  faqDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '15px',
    marginBottom: '15px',
  },
  question: {
    fontSize: '1.7rem',
    color: '#007BFF',
    marginBottom: '5px',
    fontWeight: '600',
  },
  answer: {
    fontSize: '1.3rem',
    color: '#555',
    lineHeight: '1.8',
    marginBottom: '20px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  editButton: {
    backgroundColor: '#ffc107',
    color: '#fff',
    ':hover': {
      backgroundColor: '#e0a800',
    },
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    ':hover': {
      backgroundColor: '#c82333',
    },
  },
  updateButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    ':hover': {
      backgroundColor: '#218838',
    },
  },
  addButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
  input: {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '15px',
    fontSize: '1.1rem',
    width: '100%',
    transition: 'border-color 0.3s ease',
    ':focus': {
      borderColor: '#007BFF',
    },
  },
  createFaq: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    marginTop: '40px',
  },
  editFaq: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export default FaqPage;
