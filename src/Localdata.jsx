import a from "./data/data.json";
// import { useState } from "react";

const Localdata = () => {

    
    
    console.log(a)

    return (
        <div>
           
            {a.map((i) => (
                <div key={i.id}>
                    <h1>{i.name}</h1>
                    <p>{i.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Localdata;