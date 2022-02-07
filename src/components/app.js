import React from "react";
import Head from "./header"
import Landingpage from "./landing_page";
import Section from "./section"
import Section2 from "./section2"
import withCoinStore from "../../elements/withCoinbase.png"
import withOutCoinStore from "../../elements/withoutCoinbase.png"
 import Prompter from "./foot_prompter";
import Footer from "./footer";
import Form from "./form"
import "../css/global.css"
 
const arr ={
    img:{
        name:'girl',
        path:withCoinStore,
        width:`459px`,
        height:`449px`,
        msg_heading:`With`
    },
    img2:{
        name:'girl2',
        path:withOutCoinStore,
        width:`489px`,
        height:`389px`,
        msg_heading:`Without`
    },
    msg:{
        txt1:` Exchange, send and receive
        cryptocurrencies and liquid(cash).`,
        txt2:`One wallet multipurpose wallet for
        buying commodities on e-commerce
         platform, selling and Trading`,
         txt3:`Managing Password is never being,
         than using Coinbase password
         manager`,
         txt4:`Easy swapping of  wallets`
    },
    msg2:{
        txt1:` Unable to exchange, send and receive
        cryptocurrencies and liquid(cash).`,
        txt2:` multiple wallets for
        buying commodities on e-commerce
         platform, selling and Trading`,
         txt3:`Absence of Password Manager`,
         txt4:`Unable  to Easy swapping of  wallets`
    }
    
};
const App =()=>(
     <div className='sub_body'>
        {/* header nav */}
        <Head/>
        {/* landing page img & info */}
        <Landingpage/>
        <Section/>
        <Section2 
        info={arr}  
        />
         <Prompter/>
        <Footer/>
    </div>
 )
const App2 =()=><Form/>;
export {App,App2}; 