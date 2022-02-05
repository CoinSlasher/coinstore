import React from "react";
import tiredMale from '../../elements/tired_male.png'
 const section =()=>(
     <div className='sec_nav  nav1' >
         <h2  className='sec_header'>
             <span>Tired of having multiple Crypto apps?</span><br/>
                We got <span id='stress'>YOU</span> covered.
         </h2>
                <div id='sec_nav_img'>
                    <img className='tired'  width='517px' height='282'src={tiredMale}/>
                </div>

     </div>
 )
 export default section;