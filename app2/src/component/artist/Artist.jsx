import React from 'react'
import im from '../../images/art.png';

export default function Artist() {
  return (
    <>
    <div  style={{backgroundColor:"rgb(66, 28, 89)", height:"400px"}}>
   <h2 style={{color:"#f7ea66",fontFamily:"Berkshire Swash",textAlign:"center"}}>Our Halloween's Artist</h2>
     <div className='container' style={{ display:"flex"}}>

     
   <div  >
   
      <h6 style = {{ fontFamily:"Berkshire Swash",color:"white"}}> <img src={im}/> Remerson Huke
Lead DJ On Deadpoll </h6>
</div>
   <div>
     <h6 style = {{ fontFamily:"Berkshire Swash",color:"white" }}> <img src={im}/> DJ Remerson Huke
Lead DJ On Deadpoll</h6>
</div>
  </div>
 
  </div>
    
    
    </>
  )
}
