import React from 'react';
import {useState} from 'react';
import {IoIosArrowDown} from "react-icons/io";


function Collapsible({title,content}) {
    console.log(content)
    
    const [open, setOPen] = useState(false);
    const toggle = e => {
        setOPen(!open);
        console.log(e.target.children[1]);
        const arrow = e.target.children[1];
        if(!arrow.classList.contains("rotate")){
            arrow.classList.add("rotate");
        }else{
            arrow.classList.remove("rotate");
        }
        
    };
    return (
        <div className='dropdowns__items'>
        <button className='dropdowns__items--title' onClick={toggle}>
            <span className='dropdowns__items--title--theme'>{title}</span>
            <span className='dropdowns__items--title--arrow'><IoIosArrowDown/></span>
        </button>
        {open && (
        <div className="dropdowns__items--description">
            {content}
        </div>
        )}
        </div>
    );
}
export default Collapsible;