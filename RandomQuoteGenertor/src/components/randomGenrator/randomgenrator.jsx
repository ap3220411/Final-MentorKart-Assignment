import React from 'react'
import "./randomgenrator.css"
import { useState } from 'react'

const Randomgenrator = () => {
  
let quoteStore = [];


async function ReloadQuote()
{
   let res = await fetch("https://type.fit/api/quotes")
    quoteStore = await res.json();
  
};

// create usestates  variable storing qaote

const [quote , setquote ] = useState({
     text:"When you have a dream, you've got to grab it and never let go.",
author:"— Carol Burnett"
});

const Randomqoutes = () =>{
    const sec = quoteStore[Math.floor(Math.random()*quoteStore.length)]
    setquote(sec);
};
ReloadQuote();
   return ( <div className='container'>
                <div className='quote'>{quote.text}</div>
                    <div>
                        <div className='line'></div>
                            <div className='lower'>
                                 <div className='author' style={{fontWeight:650}}>{quote.author}</div>
                                     <div className='icon'>
                                        <butten onClick= {() =>{Randomqoutes()}} >Reload</butten>
                                     </div>
                                 </div>
                            </div>
                        </div>
                              
  )
};

export default Randomgenrator
