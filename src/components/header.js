import React from 'react';
import {Link} from 'react-router-dom'
 import coinStoreLogo from '../../elements/coinStore_logo.png'

const header =()=>(
    <div id='nav'>
        <Link to='/'>
        <div id='img-nav'>
             <img className='image coin1' width='280px' height='81px' src={coinStoreLogo}/>
        </div>
        </Link>
        
        <div id='btn-nav'>
            <Link to="/login">
               <button id='sign-up'> Sign up</button>
            </Link>
         
        </div>
    </div>
)
export default header;
