import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name</label>
      <input className={styles.searchInput} type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
