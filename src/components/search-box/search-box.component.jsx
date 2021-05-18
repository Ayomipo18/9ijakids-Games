import React from 'react';

import './search-box.styles.css';

const SearchBox = ({ setSearchText }) => {
    return (
    <div className='search-container'>
    <   input
        className='search-box'
        type='search'
        placeholder='Search Games by Topic'
        onChange={e => setSearchText(e.target.value.toLowerCase())}
        />
    </div>
    )
}

export default SearchBox