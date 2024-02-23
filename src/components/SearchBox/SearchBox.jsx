import { useDispatch, useSelector } from 'react-redux';
import { setFilterText } from '../../redux/contactsSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterText = useSelector(state => state.contacts.filterText);

  const handleFilterChange = e => {
    dispatch(setFilterText(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <input type="text" value={filterText || ''} onChange={handleFilterChange} />
    </div>
  );
};

export default SearchBox;
