import React from 'react';
import {Route, useLocation} from 'react-router-dom';
// import { useState } from 'react';


function AboutPage(){
    let variabila = true;
    return(
        <div> 
            <button 
            onClick={()=>{ 
                variabila = !variabila;
                console.log(variabila);
            }}>
                Apasa-ma
            </button>
            {
                variabila &&
                <div> Am fost apasat</div>
            }     
        </div>
    )
}

export default AboutPage;