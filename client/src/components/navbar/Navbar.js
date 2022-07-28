import React, {useState, useEffect} from 'react'
import './Navbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
    
    {/* <a onClick={toggleNav} className="btn">=</a> */}
    
    <a onClick={toggleNav} className="btn" >
            <i class="fa fa-bars"></i>
    </a>

      {(toggleMenu || screenWidth > 600) && (
        
    
    <div className="list">
       
      <a href="/" className="items">HOME</a>
      <a href="/getinvolved" className="items">GET INVOLVED</a>
      <a href="/aboutus" className="items">ABOUT US</a>
     
      
    </div>
      )}

      
    </nav>
  )
}
