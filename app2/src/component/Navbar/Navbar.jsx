import React from 'react'
import Artist from '../artist/Artist'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import style from'../Navbar/Navbar.module.css'



export default function Navbar() {
  
  
  return (
    <>
<nav className={` ${style.bg}  ${style.fontlink}    navbar navbar-expand-lg bg-body-tertiar`}>
  <div className="container-fluid">
    <Link className="navbar-brand" href="#"><img src={logo} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{color:'red'}}>
        <li className="nav-item" >
          <Link className="nav-link active" to ={''} style={{color:"white"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" to ={'Artist'} style={{color:"white"}}>Artist</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" to ={'About'} style={{color:"white"}}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link"  to ={'Contact'}  style={{color:"white"}}>Contact</Link> 
        </li>
        
      
      
      
      
      </ul>
     <button  style={{color:"#7f479a",borderRadius:"35px",backgroundColor:"#f7ea66",width:"150px", height:"50px"}}>get a ticket</button>
     <button style={{color:"#2c0047",borderRadius:"35px",backgroundColor:"#f7ea66",width:"50px"}} > audio </button>
    </div>
  </div>
</nav>

</>
  )
}

