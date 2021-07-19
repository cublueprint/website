//import React, {useState} from "react";
import './Button.css'

function Button(props){
    //button text, bg colour (change when hover)
    //const [bgColour, setBgColour] = useState("#fafafa")

    
    
    return(
        <div >
            <button 
                className='Button' 
                // onMouseEnter={() => setBgColour("#c83f49")}
                // onMouseLeave={() => setBgColour("#fafafa")}
            >
                
                {props.buttonText}

            </button>
        </div>
    )
}
export default Button