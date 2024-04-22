import React, { useState } from 'react';
import Hero from './Hero';
import MovieCard from './MovieCard'; // Assuming MovieCard component is imported

const SearchView = ({ keyword, searchResults }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4); // Number of items per page

    if (!searchResults) {
        // If searchResults is null or undefined, return early or render a loading indicator
        return <Hero text="Loading...." />;
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const title = `You are searching for ${keyword}`;

    let resultsHTML = null;
    if (currentItems.length > 0) {
        resultsHTML = currentItems.map((movie, i) => {
            return <MovieCard movie={movie} key={i} />;
        });
    } else {
        resultsHTML = <p>No results found</p>;
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(searchResults.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Hero text={title} />
            <div className='container'>
                <div className='row'>{resultsHTML}</div>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button onClick={() => paginate(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SearchView;
