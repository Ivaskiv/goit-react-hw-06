import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Створення slice для управління контактами
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    // Додавання контакту до списку
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    // Підготовка контакту до додавання, генерація унікального id
    prepare(contact) {
      return {
        payload: {
          ...contact,
          id: nanoid(),
        },
      };
    },
  },
  // Видалення контакту зі списку за його id
  deleteContact: (state, action) => {
    state.items = state.items.filter(contact => contact.id !== action.payload);
  },
});
// Налаштування для зберігання стану контактів у локальному сховищі
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const selectContacts = state => state.contacts.items;
