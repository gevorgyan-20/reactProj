import React from 'react'
import { Link } from 'react-router-dom'

const MenuLinksComp = ({link, place, funcc = 0}) => {
  return (
    funcc === 0 ?
    <button >
        <Link to={link}>{place}</Link>
    </button>
    :
    <button >
        <Link to={link} onClick={funcc}>{place}</Link>
    </button>
  )
}

export default MenuLinksComp