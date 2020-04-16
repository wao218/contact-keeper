import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [{
      type: 'personal',
      id: '1',
      name: 'Ted Johnson',
      email: 'ted@gmail.com',
      phone: '222-222-2222'
    },
    {
      type: 'personal',
      id: '2',
      name: 'lauren Johnson',
      email: 'lauren@gmail.com',
      phone: '333-333-333'
    },
    {
        type: 'professional',
        id: '3',
        name: 'Sara Smith',
        email: 'ssmith@gmail.com',
        phone: '111-111-1111'
    }]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete Contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider 
      value={{
        contacts: state.contacts

      }}
    >
      {props.childern}
    </ContactContext.Provider>
  );
}

export default ContactState;