import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Створення slice для управління контактами
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filterText: '',
  },
  reducers: {
    // Додавання контакту до списку
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    // Видалення контакту зі списку за його id
    deleteContact: (state, action) => {
      const index = state.items.findIndex(el => el.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    },
  },
});
// Налаштування для зберігання стану контактів у локальному сховищі
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const { addContact, deleteContact, setFilterText } = contactsSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const selectContacts = state => state.contacts.items;
