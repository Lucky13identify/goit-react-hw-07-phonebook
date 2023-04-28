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

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async data => {
    try {
      const response = await axios.post('/contacts', data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
