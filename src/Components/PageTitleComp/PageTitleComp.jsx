import React from 'react'
import { useLocation } from 'react-router-dom'

const PageTitleComp = () => {
    const location = useLocation()
    
    if(location.pathname === '/') {
        document.title = 'HOME'
    } else {
        document.title = (location.pathname).slice(-(location.pathname.length - 1)).toUpperCase()
    }
  return (
    <></>
  )
}

export default PageTitleComp