import React from "react";
import Form from  './subComponents/abandonForm'
import coinStoreLogo from '../../elements/coinStore_logo.png'
import { Link } from "react-router-dom";
const formFill=()=>(
 
      <div className='form_div'>
             <Link to='/'>  
             <div className='coinStore'>
                <img width='280px' height='81px' src={coinStoreLogo}/>
            </div>  </Link>
            <Form/>
        
    </div>
  
  
);
export default formFill;