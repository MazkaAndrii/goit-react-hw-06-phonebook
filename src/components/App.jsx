import React from 'react';
import ContactsList from './Phonebook/ContactsList/ContactsList';
import Form from './Phonebook/Form/Form';
import css from './Phonebook.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Form />
      <ContactsList title="Contacts" />
    </div>
  );
};
