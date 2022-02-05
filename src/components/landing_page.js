import React from 'react';
 import Phone from '../../elements/infographics1.png'

const landing_page=()=>(
    <div className='landing_div'>
        <div className='sublanding_div'>
        <span className='wallet'>
        <span id='crypto'>
            Crypto
        </span>
        Wallet app made easy
        </span>
        <span id='land_info'>
        CoinStore is a multi-currency crypto app that allows
        you to buy, sell, send and receive payments seemly.
        </span>
        </div>
        <div className='phone'>
            <img  width= '478px' height='550px' className='image phone' src={Phone}/>
        </div>
    </div>
)
export default landing_page;