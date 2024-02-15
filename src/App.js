import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  const [contacts, setContacts] = useState([]);

  // Fetch contact data from the Flask API when the component mounts
  useEffect(() => {
      fetch('/api/people') // Replace with your Flask server URL
          .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
          .then(data => setContacts(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log(contacts)
  return (
      <div className="App">
          <h1>Contact Information</h1>
          <div className="contact-list">
              {/* Map through the contacts and display each as a ContactCard */}
              {contacts.map(contact => (
                  <Card key={contact.id} contact={contact} />
              ))}
          </div>
      </div>
  );
}

export default App;
