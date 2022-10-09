import React,{useState, useEffect} from 'react'
import BookList from '../components/BookList'
import Header from '../components/Header'
import {librarylist} from '../librarylist'


const Library = () => {
  const[books,setBooks]=useState([])
  useEffect(() => {
    setBooks(librarylist)
      
  },[])
// console.log('books', books)
    return (
    <div className='main-content'>
      
        <Header />
        <div>
           <BookList data={books} />
        </div>
    </div>
  )
}

export default Library