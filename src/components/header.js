import React from 'react';
 import coinStoreLogo from '../../elements/coinStore_logo.png'

const header =()=>(
    <div id='nav'>
        <div id='img-nav'>
    <img className='image coin1' width='280px' height='81px' src={coinStoreLogo}/>
        </div>
        <div id='btn-nav'>
            <button id='sign-up'> Sign up</button>
        </div>
    </div>
)
export default header;
