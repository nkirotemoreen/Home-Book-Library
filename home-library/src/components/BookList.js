import React from 'react'
import SingleBook from './SingleBook'

const BookList = ({data}) => {
  return (
    <div className="book-list">
    <SingleBook data={data} />
    </div>
  )
}

export default BookList