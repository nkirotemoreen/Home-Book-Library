import React, {useState} from 'react'
import Header from '../components/Header'


const BookForm = () => {
  //Post books to Json Server
  const [title, setTitle]= useState('')
  const [author, setAuthor]= useState('')
  const [description, setDescription]= useState('')

  const handleSubmit =(e)=>{
    e.preventDefault();
    const data={
      id:Math.floor(Math.random()*10000),
      Title:title, Author:author,description
    }
    console.log(data)

    //posting books to the server
    let url ="http://localhost:5000/library"
    fetch(url,{method:"POST",
    body: JSON.stringify(data),
    headers:{"Content-type": "application/json"}

  })
 
  .then(alert ("saved"))

  }
    
    
  
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder="Book Title"/>

        <label>Author</label>
        <input type="text" value={author} placeholder="Book Author" onChange={(e)=>setAuthor(e.target.value)}/>

        <label>Description</label>
        <input type="text" value={description} placeholder="Book Description"onChange={(e)=>setDescription(e.target.value)}/>
        
        <button type="submit">submit</button>
      </form>
      
     
 
  </>
  )
}

export default BookForm