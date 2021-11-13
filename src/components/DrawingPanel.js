import React from "react";
import Row from './Row'

function DrawingPanel(props){
    const {width, height, selectedColor } = props;
    let rows = [];

    for(let i = 0; i < height; i++){
        rows.push(<Row key={ i } width={ width } selectedColor={ selectedColor } />)
    }
    
    return(
        <div id="drawing-panel"> 
            <section id="pixels">
                {rows}
            </section>
        </div>
     )
}

export default DrawingPanel;