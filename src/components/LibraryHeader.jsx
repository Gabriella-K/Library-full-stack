import React from 'react'
import { Link } from 'react-router'

function LibraryHeader() {
    const LibraryHeader = "Library Management System";
  return (
    <div>
      <header>
        <h1> {LibraryHeader} </h1>
        <Link to ="/books" style={{paddingRight: "10px"}}>BOOKS</Link>
        <Link to="/office" style={{paddingRight: "10px"}}>OFFICE</Link>
        <Link to="/doctor" style={{paddingRight: "10px"}}>DOCTOR</Link>
        <Link to="/Logout" style={{paddingRight: "10px"}}>LOGOUT</Link>
      </header>
    </div>
  );
}

export default LibraryHeader