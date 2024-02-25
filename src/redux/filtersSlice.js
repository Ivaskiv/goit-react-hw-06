import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    nameFilter: '',
    textFilter: '',
  },
  reducers: {
    setNameFilter: (state, action) => {
      state.nameFilter = action.payload;
    },
    setTextFilter: (state, action) => {
      state.textFilter = action.payload;
    },
  },
});

export const { setNameFilter, setTextFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectNameFilter = state => state.filters.nameFilter;
export const selectTextFilter = state => state.filters.textFilter;

// createSlice - створює slice з іменем "filters" із початковим станом, що містить nameFilter (початково порожній рядок)
// setNameFilter - редюсер, який приймає поточний стан і дію з новим значенням фільтру. Він оновлює nameFilter у стані за допомогою значення дії
// exsport - експорт дії та редюсера для використання в інших частинах додатка
//electFilter - селектор, який повертає значення nameFilter із стану фільтрів
