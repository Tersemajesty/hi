import React from 'react'

 const SearchResultPage = () => {
const allProducts = [
    { id: 1, name: 'mesh' },
    { id: 2, name: 'senstor' },
    { id: 3, name: 'disaper' },
    { id: 4, name: 'casuals' },
    { id: 5, name: 'formal' },
];

    return (
        <div className='search-result-page'>
            <h1>Search Results for "{query}"</h1>
            {filtered.length > 0 ? (
        filtered.map(item => (
          <div key={item.id} className="product-card">
            {item.name}
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
        </div>
    )
}
export default SearchResultPage;