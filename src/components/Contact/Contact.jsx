import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={styles.contactBox}>
    <div className={styles.contactInfo}>
      <li >{contact.name}</li>
       <li >{contact.number}</li>
    
     
  
      </div>
       <button className={styles.contactBtn} onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
    
  );
};

export default Contact;
