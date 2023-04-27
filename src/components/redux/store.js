// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

console.log(initialState.contacts.items);

const contactsRed = createSlice({
  name: 'contact',
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },

    [fetchContacts.rejected](state, action) {
      state.contacts.error = action.payload;
    },
  },
});

export const { addContact, changeFilter, deleteContact } = contactsRed.actions;

export const store = configureStore({
  reducer: contactsRed.reducer,
});

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'tasks/addContact': {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }

//     case 'tasks/changeFilter': {
//       return { ...state, filter: action.payload };
//     }
//     case 'tasks/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//   }

//   return state;
// };

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
