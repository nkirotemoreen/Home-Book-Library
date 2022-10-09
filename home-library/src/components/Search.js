import React from 'react'

const Search = ({val,onSearch,...props}) => {
  return (
    <>
    <input value={value} onChange={onSearch} placeholder="search for books"/>
    </>
  )
}

export default Search