import css from './SearchBox.module.css';

const SearchBox = ({ filterText, onFilterChange }) => {
  return (
    <div className={css.searchBox}>
      <input type="text" value={filterText || ''} onChange={e => onFilterChange(e.target.value)} />
    </div>
  );
};
export default SearchBox;
