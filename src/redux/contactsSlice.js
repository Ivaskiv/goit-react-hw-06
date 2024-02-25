import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Створення slice для управління контактами
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    deleteContact: (state, action) => {
      const index = state.items.findIndex(el => el.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const selectContacts = state => state.contacts.items;
