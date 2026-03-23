import React from 'react'
import { BrowserRouter ,NavLink , Outlet} from 'react-router-dom'

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration:'none',
  fontWeight:'bold',
  // fontSize:'14px',
  // padding: '5px 10px',
  borderBottom: isActive? '4px solid #007bff':'none',
  whiteSpace: "nowrap"  
});

const NavLinkes = () => {
  return (
    <>
    <div >
    <nav className='d-flex justify-content-center gap-3 position-fixed w-100 bg-white' style={{paddingTop:"120px",overflow:'scroll',scrollbarWidth:'none',zIndex:'100'}}>
      <NavLink to='/' style={navLinkStyles}>For You</NavLink>
      <NavLink to='/Aipan-Art' style={navLinkStyles}>Aipan Art</NavLink>
      <NavLink to='/Wooden-Crafts' style={navLinkStyles}>Wooden Crafts</NavLink>
      <NavLink to='/Bamboo-Ringaal-Crafts' style={navLinkStyles}>Bamboo & Ringaal Crafts</NavLink>
      <NavLink to='/Pooja-Spiritual-Items' style={navLinkStyles}>Pooja & Spiritual Items</NavLink>
      <NavLink to='/Home-decore' style={navLinkStyles}>Home & decoration</NavLink>
      <NavLink to='/Handmade-Accessories' style={navLinkStyles}>Handmade Accessories </NavLink>
      <NavLink to='/Wool-Textiles' style={navLinkStyles}>Wool Textiles</NavLink>
      <NavLink to='/Cultural-Crafts' style={navLinkStyles}>Cultural Crafts</NavLink></nav>
    </div>
   
    </>
  )
}

export default NavLinkes
