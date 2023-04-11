import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Sharing stories, connecting people.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to MyBookStack, a web-based platform that allows book enthusiasts to manage and share their book collections with others. With Bookshelf, you can create a private or public library of your favorite books, search for new books to add to your collection, and connect with other readers who share your interests.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header