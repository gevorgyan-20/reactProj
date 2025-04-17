import React from 'react'
import './homeSearchBlock.css'

const HomeSearchBlock = ({func}) => {
  return (
    <div className='searchBlock'>
            <div className="container">
                <form onSubmit={(e) => {e.preventDefault();}}>
                    <label htmlFor="search">Search</label>
                    <input placeholder='Search...' type="text" onInput={(e) => func(e)}/>
                </form>
            </div>
        </div>
  )
}

export default HomeSearchBlock