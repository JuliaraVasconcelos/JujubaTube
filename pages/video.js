import React from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";

export default function Video(){
    const context = React.useContext(ColorModeContext);

    return (
        <div>
            {context.mode}
            <button onClick={()=> context.toggleMode()}>switch mode</button>
        </div>
    )
}