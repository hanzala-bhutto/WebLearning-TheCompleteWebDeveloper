import React from 'react';

// SearchBox component containing search input tag
const SearchBox = ( {searchfield, searchChange} ) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue' 
            type='search' 
            placeholder='search robots'
            onChange={searchChange} />
        </div>
    )
}

export default SearchBox;