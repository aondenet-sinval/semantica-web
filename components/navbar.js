import Link from 'next/link'
import Image from 'next/image'
import NavBarDesktop from './navbar-desktop'
import NavBarMobile from './navbar-mobile'
import { useState, useEffect } from 'react'
const NavBar = () => {
  const [navBar, setNavBar ] = useState(1000)
  useEffect(() => {
    const myScreen = window.screen.width
    setNavBar(myScreen)
  },[])
  return(<>
    { navBar > 1000
      ? <NavBarDesktop />
      : <NavBarMobile />
    }
  </>)
}
export default NavBar
