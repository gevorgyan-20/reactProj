import React, { useState } from 'react'
import './navContainer.css'
import MenuLinksComp from '../MenuLinksComp/MenuLinksComp'

const NavContainer = () => {
    const [menuOpen, setMenuOpen] = useState(1200)
    const [display, setDisplay] = useState('none')

    let func = () => {
        let x = 0 
        if(menuOpen === 0) { 
            x = 1200
        }
        if(x === 1200) {
            setTimeout(() => {
                setDisplay('none')    
            }, 100);
        } else {
            setDisplay('block')
            setTimeout(() => {
                setMenuOpen(x)    
            }, 100);
            return
        }
        setMenuOpen(x)
        
    }

    let closeMenu = () => {
        setMenuOpen(1200)
        setTimeout(() => {
            setDisplay('none')
        }, 1000);
    }

  return (
        <nav>
            <div className="container">
                <div className='logo'>KinoGoDB</div>
                <div className='navMenuPart'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" onClick={func}>
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
                <div className="respMenu" style={{transform: `translateX(${menuOpen}px)`, display: `${display}`}}>
                    {[{link: '/', place: 'Home', funcc: closeMenu}, {link: '/favourites', place: 'Watch Later', funcc: closeMenu}, {link: '/lasts', place: 'Last Views', funcc: closeMenu}].map((el) => {
                            return <MenuLinksComp key={Math.random()*9999} link={el.link} place={el.place} />
                        })}
                </div>
                    <div className='block'>
                        {[{link: '/', place: 'Home'}, {link: '/favourites', place: 'Watch Later'}, {link: '/lasts', place: 'Last Views'}].map((el) => {
                            return <MenuLinksComp key={Math.random()*9999} link={el.link} place={el.place} />
                        })}
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default NavContainer