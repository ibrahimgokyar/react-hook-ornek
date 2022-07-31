import React from "react";
import {useState} from "react";

//useState Hook örnegi
function StateHookOrnek() {

    const [adet,adetiAta] = useState(0);

    return(
        
        <div>
            <p> {adet} kere tıkladınız!</p>
            <button onClick= {() => adetiAta(adet + 1)}>Tıkla</button>
        </div>
    )
}

export default StateHookOrnek;