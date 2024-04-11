// import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NavbarNew = ({ searchText, setSearchText }) => {
    const history = useNavigate();

    const updateSearchText = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        history('/search');
        setSearchText(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Perform any additional actions here, such as navigating to the search page
        history('/search');
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Movie Browser</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" aria-disabled="true">Coming Soon</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearchText} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default NavbarNew;
