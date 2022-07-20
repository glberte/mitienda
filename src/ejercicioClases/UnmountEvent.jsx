import React, { useEffect } from "react";

const UnmountExample = ()=> {
    useEffect(()=>{
        const title = document.getElementById("title");
        const onClick = ()=> {
            alert("this is triggered by a click event");
        }

        title.addEventListener("click", onClick);

        return( () => {
                title.removeEventListener("click", onClick);
            })
    }, []);

    return(
        <>
        <h2 onClick={} id="title">Hola</h2>
        </>
    );
}

export default UnmountExample;