import React from 'react';

import './search-box.styles.css';

export const SearchBox = props => (
    <input
    className='search-box'
    type='search'
    placeholder='Search Games by Topic'
    onChange={props.onSearchChange}
    />
);