import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Blog Post Website</h1>

      <div className='login'>
        <Link to='/login'>Login</Link>
      </div>

      <div className='search-box'>
        <input type='text' placeholder='Search posts'/>
        <button type='button'>Search</button>
      </div>
    </div>
  );
}

export default HomePage;
