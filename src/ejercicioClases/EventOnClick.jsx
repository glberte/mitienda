import React from "react";

const Eventsyntetic = ()=> {
    
        const triggerAlert = (msg)=> {
            console.log("this is triggered by a click event")
        }

        return( 
                <h1 onClick={triggerAlert} id="title"> Test </h1> 
            )
    };


export default Eventsyntetic;