import React from 'react'
import ban from '../../images/Banner.png'
import bl7 from '../Home/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={` ${bl7.cont}`}>
      
      
      
      <div><img src={ban}/></div>



      <div className={`${bl7.para}`}>
        <br/><br/><br/><br/>
<h3 style={{color:"white"}}>31th octobar 2018</h3>
<h1 style={{color:"yellow",fontSize:"80px"}}>Halloween Party</h1>
<p style={{color:"white"}}>Halloween or Hallowe'en (a contraction of All Hallows' Evening)<h3></h3>
 also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 Octoberr</p> 
 <button  style={{color:"#7f479a",borderRadius:"35px",backgroundColor:"#f7ea66",width:"150px", height:"50px"}}>Explore more </button>

      </div>
      </div>
 
</>
 )

}
