import React from 'react'
import librarylist from '././librarylist'

const SingleBook = ({data}) => {

 const handleClick = (id)=>{
  // console.log(id)
  fetch(`http://localhost:5000/library/${id}`)
  .then(res => res.json())
  .then((sngBook) =>librarylist.push(sngBook))
  .catch((error)=>console.log(error))

 }
 
//console.log({data})
  return (
    <>
    {data && data.map(dt=>{
     // console.log(dt.title)
    return (
      <ul className="book" key={dt.id}>
        <li>title:{dt.Title} </li>
        <li className="book-title">author: {dt.Author} </li>
    
        <li>description:{dt.description} </li>
        <button onClick={handleClick(dt.id)}>toLibrary</button>
        </ul>
   ) })}
    </>
  )
}

export default SingleBook