import React from 'react'

const Search = props => {

  const handleChange = (e) => {
    props.onChange(e)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => handleChange(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
