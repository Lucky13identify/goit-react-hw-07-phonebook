import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://644949c5e7eb3378ca4532e7.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', data => {
  try {
    fetch('https://644949c5e7eb3378ca4532e7.mockapi.io/contacts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ...data }),
    });
  } catch (e) {
    console.log(e);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', id => {
  try {
    fetch(`https://644949c5e7eb3378ca4532e7.mockapi.io/contacts/${id}`, {
      method: 'DELETE',
    });
  } catch (e) {
    console.log(e);
  }
});
