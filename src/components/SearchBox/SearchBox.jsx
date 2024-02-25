import { useDispatch, useSelector } from 'react-redux';
import { selectTextFilter, setTextFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterText = useSelector(selectTextFilter);

  const handleFilterChange = e => {
    dispatch(setTextFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <input type="text" value={filterText || ''} onChange={handleFilterChange} />
    </div>
  );
};

export default SearchBox;
