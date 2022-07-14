import { useState, useEffect } from "react";
import Items from "../Components/Itemlist";

const Promises = () => {
    const [loading, setLoading] = useState(false);
    const condition = true;

    const promise = new Promise((resolve, reject) => {
        if (condition) {
            setTimeout(()=> resolve(Items), 2000);
        } else {
            setTimeout(()=> reject("No se han podido cargar los Productos"),2000);
        }
    });



 }

 export default Promises;