import React,{useState, useEffect} from 'react'
import BookList from '../components/BookList'
import Header from '../components/Header'

const MainPage = () => {
  const[books,setBooks]=useState([])
  let url = "http://localhost:5000/library"
  useEffect(() => {
    const fetchBooks = () => {
      fetch(url)
      .then(res => res.json()) 
      .then((book) => setBooks(book)).catch((error) =>console.log(error.messge))
      
    }
fetchBooks()
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

export default MainPage