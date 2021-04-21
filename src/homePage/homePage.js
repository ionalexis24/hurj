import React from 'react';
import {Route, useLocation} from 'react-router-dom';
import { useState } from 'react';

function HomePage({portugalia}){
    const [variabila, setVariabila]=useState(false);
    return(
        <div> 
            <button 
            onClick={()=>{ setVariabila(!variabila)}}>
                Apasa-ma {portugalia}
            </button>
            {
                variabila &&
                <div> Am fost apasat</div>
            }     
        </div>
    )

}

export default HomePage;