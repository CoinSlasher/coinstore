import React from "react";
const content =(props)=>(
<div className='sub_sec_nav'>
            <div  className='sub_sec_img_div'>
                <img  className={props.img.name} width={props.img.width} height={props.img.height} src={props.img.path}/>
            </div>
            <div className='sub_sec_info'>
                <div className='info_div'>
                <h4 className='info_heading'>
                    {props.img.msg_heading}
                 <span className='coin'>coin</span>
                <span className='store'>Store</span>
                </h4>
                    {/* Testing for duplication */}
                    <div className='info'>{props.msg.txt1}</div>
                    <div className='info'>{props.msg.txt2}</div>
                    <div className='info'>{props.msg.txt3}</div>
                    <div className='info'>{props.msg.txt4}</div>
                </div>
            </div>
        </div>
);
export default content;