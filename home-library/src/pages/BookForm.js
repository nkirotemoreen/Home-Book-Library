import React, {useState} from 'react'
import Header from '../components/Header'
import { Form, Button } from 'react-bootstrap';


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
    //console.log(data)

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

      <div className="main-form">
      
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={title}
            placeholder="Enter name of book"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={(e)=>setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Enter description of the book..."
            onChange={(e)=>setDescription(e.target.value)}
          />
        </Form.Group>
        
        
        
        <Button variant="primary" type="submit" className="submit-btn" >
          Submit
        </Button>
      </Form>
    </div>
  

 
  </>
  )
}

export default BookForm