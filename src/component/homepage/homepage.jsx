import React from 'react';
import './HomePage.css'
import { ArrowRight } from 'lucide-react';
export default function HomePage(){
    return(
        <div className='homepage'>
        <div> Write, plan, share.<br></br>
        With AI at your side.
        <div>Notion is the connected workspace where better, faster work happens.</div>
        </div>
        <div className='homeButton'>
        <button className='notionButton'> Get Notion free <span><ArrowRight strokeWidth={3}/></span> </button>
        </div>
        </div>
    )
}