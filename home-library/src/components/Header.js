import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (


    
    <header>
      
      <h1>Home-Library Management</h1>
      <hr />
      <div className="links">
        <ul>
        <NavLink to="/" className="nav" activeClassName="active" exact>
          BooksList
        </NavLink>
        <NavLink to="/add" className="nav" activeClassName="active">
          Add Book
        </NavLink>
        <NavLink to="/read" className="nav" activeClassName="active">Library</NavLink>
     
        </ul>
        </div>
       
    </header>
  );
};

export default Header;