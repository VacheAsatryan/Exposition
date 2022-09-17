import React from "react";
import './modal.css'

const Modal=({active,setactive,children})=>{
    return(
        <div className={active? "modal active":'modal'} onClick={()=>setactive(false)}>
            <div className={active? "modalContent active":'modalContent'} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
        
    )
}
export default Modal;