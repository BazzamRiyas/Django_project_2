import React, { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <div className="search-box">
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search for a course or program"
                />
                <button type="button">Search</button>
            </div>
            <p className="search-hint">You are typing: {query || 'nothing yet'}</p>
        </div>
    );
}

export default SearchBar;