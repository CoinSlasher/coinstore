import React,{Component} from "react";
import Form from  './subComponents/abandonForm'
import coinStoreLogo from '../../elements/coinStore_logo.png'
const formFill=()=>(
    <div className='form_div'>
            <div className='coinStore'>
                <img width='280px' height='81px' src={coinStoreLogo}/>
            </div>
            <Form/>
        
    </div>
);
export default formFill;