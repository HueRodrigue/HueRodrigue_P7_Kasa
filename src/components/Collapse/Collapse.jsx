import React from 'react';
import {useState} from 'react';
import {IoIosArrowDown} from "react-icons/io";
import arrowCollapse from "../../data/img/arrowCollapse.png"


function Collapsible({title,content}) {
    console.log(content)
    
    const [open, setOPen] = useState(false);
    const toggle = (e) => {
        setOPen(!open);
        let arrow ;
        let targetNode;
        if(e.target.tagName.toLowerCase() === 'button') {
            arrow = e.target.children[1];
        }else if (e.target.tagName.toLowerCase() === 'svg') {
            console.log(e.target)
            targetNode = e.target.parentNode
            console.log(targetNode)
            arrow = targetNode
        }else if (e.target.tagName.toLowerCase() === 'path') {
            console.log(e.target)
            targetNode = e.target.parentNode.parentNode
            console.log(targetNode)
            arrow = targetNode
        }else{
            targetNode = e.target.parentNode
            arrow = targetNode.children[1]
            console.log(e.target.parentNode)
        }

        
        console.log(arrow)
        if(arrow.classList.contains("rotate")){
            
            arrow.classList.remove("rotate");
        }else{
            arrow.classList.add("rotate");
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