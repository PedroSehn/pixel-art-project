import React, { useRef } from "react";
import Row from './Row'
import { exportComponentAsPNG } from "react-component-export-image";
function DrawingPanel(props){
    const {width, height, selectedColor } = props;
    let rows = [];
    const panelRef = useRef();
    for(let i = 0; i < height; i++){
        rows.push(<Row key={ i } width={ width } selectedColor={ selectedColor } />)
    }
    
    return(
        <div id="drawing-panel"> 
            <section ref={panelRef} id="pixels">
                {rows}
            </section>
            <button onClick={ () => exportComponentAsPNG(panelRef)}>Exportar PNG</button>
        </div>
     )
}

export default DrawingPanel;