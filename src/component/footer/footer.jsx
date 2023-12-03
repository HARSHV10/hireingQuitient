import React from 'react';
import './Footer.css'
import { ArrowRight } from 'lucide-react';
export default function Footer(){
    return(
        <div className='Footer'>
        <h1>Get started for free</h1>
        <div className='homeButton'>
        <button className='notionButton'> Get Notion free <span><ArrowRight strokeWidth={3}/></span> </button>
        <span><a href='#'>Request a demo</a></span>
        </div>
        <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png"></img>
        </div>
    )
}