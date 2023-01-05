import React from 'react';
import {useState} from 'react';
import {IoIosArrowDown} from "react-icons/io";


function Collapsible({title,content}) {
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
        <div className='about__dropdowns__items'>
        <button className='about__dropdowns__items--title' onClick={toggle}>
            <span className='about__dropdowns__items--title--theme'>{title}</span>
            <span className='about__dropdowns__items--title--arrow'><IoIosArrowDown/></span>
        </button>
        {open && (
        <div className="about__dropdowns__items--description">
            <h4>{content}</h4>
        </div>
        )}
        </div>
    );
}
export default Collapsible;