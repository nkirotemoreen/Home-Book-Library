import React from 'react'
import {librarylist} from '../librarylist'
import { Button, Card } from 'react-bootstrap';


const SingleBook = ({data}) => {
//console.log(librarylist)
 const handleClick = (id)=>{
  console.log(id)
  fetch(`http://localhost:5000/library/${id}`)
  .then(res => res.json())
.then((sngBook) =>{
  //console.log(sngBook)

  librarylist.push(sngBook)

  console.log(librarylist)})
  

  
  .catch((error)=>console.log(error))



}
//console.log('yoooh',librarylist)


//console.log({data})
  return (
    <>
    {data && data.map(dt=>{
     // console.log(dt.title)
    return (
      <Card style={{ width: '18rem' }} className="book">
        <Card.Body>
        <Card.Title className="book-title" key={dt.id}> </Card.Title>
        <ul className="book-details">
          <li>title:{dt.Title} </li>
          <li className="book-title">author: {dt.Author} </li>
    
            <li>description:{dt.description} </li>
           </ul> 
        <Button variant="primary"onClick={() =>handleClick(dt.id)}>toLibrary</Button>
        
        </Card.Body>
       </Card> 
   ) })}
    </>
  )
}


export default SingleBook