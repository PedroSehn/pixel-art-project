import React, { useState } from "react";

function Pixel(props){
    const { selectedColor } = props;

    const [pixelColor, setPixelColor] = useState("#fff");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [changeColor, setChangeColor] = useState(true);

    const applyColor = () => { setPixelColor(selectedColor); setChangeColor(false); };
    const changeColorOnHover = () => { setOldColor(pixelColor); setPixelColor(selectedColor) }
    const resetColor = () =>  { if(changeColor){setPixelColor(oldColor)}; setChangeColor(true)}

    return(
        <div className="pixel" style={{ backgroundColor: pixelColor }}
        onClick={applyColor}
        onMouseEnter={changeColorOnHover}
        onMouseLeave={resetColor}
        > </div>
     )
}

export default Pixel;