import React from 'react'
import coinStoreLogo from '../../elements/coinStore_logo.png'
import Btc from '../../elements/bitcoin-btc-logo.svg'
import {Link} from 'react-router-dom';
 const prompter =()=>(
     <div className='prompter_div'>
         <div className='coinStore'>
        <img height='93px' weight='323px' src={coinStoreLogo}/>
         </div>
         <div className='btc_border'>
         <div className='btc_div'>
                <img height='103px' width='103px' src={Btc}/>
         </div>
            <div className='prompter_div_info'>
                <div className='prompter_info'>
                Sign up on CoinStore and Get 15% off<br/>
                of all your Trade and Purchases 
                </div>
                <div className='prompter_div_btn'>
                  <Link to='/login'>  <button className='prompter_btn'>Sign up</button> </Link>
                </div>
            </div>
         <div className='btc_div'>
                <img  height='103px' width='103px' src={Btc}/>
         </div>
         </div>
     </div>
 );
 export default prompter;