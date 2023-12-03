import React from 'react';
import './navbar.css'
import Dropdown from './Dropdown/dropdown';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const arr=[
{Dropdown:"Dropdown",inner:[{heading:"heading",submsg:"inner"},{heading:"heading",submsg:"inner"},{heading:"heading",submsg:"inner"}]},
{Dropdown:"Dropdown",inner:[{heading:"heading",submsg:"inner"},{heading:"heading",submsg:"inner"}]},
{Dropdown:"Dropdown",inner:[{heading:"heading",submsg:"inner"},{heading:"heading",submsg:"inner"}]},
]
export default function Navbar(){

    return (
     <div className='navbar'>
     <div className='logo'>
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png"></img>
     <span>Notion</span>
     <div className='dropdownElements'>
     {arr.map((i)=>{
        return(
     <Dropdown value={i}/>
        )
     })}
     </div>
     </div>
     <div className='nav-left'>
     <span className='hoverElement'>Request Demo </span>
     <span className='hoverElement'>Login</span>
     <button className='notionButton'>Get Notion free</button>
     </div>
     
     </div>
    );
  }