import React from 'react';
import Content from './subComponents/content';
 const section  =(props)=>( // img msg
    <div className='sec_nav  nav2'>
        <h2  className='nav2-h2'><span id='difference'>The Difference</span> Is Clear</h2>
        <Content img={props.info.img} msg={props.info.msg}/>
        <Content img={props.info.img2}msg={props.info.msg2}/>
        <div className='green'></div>
        <div className='red'></div>
    </div>
);
export default section;