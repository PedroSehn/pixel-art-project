import React, { useState } from "react";
import '../styles/Editor.css'
import { CirclePicker } from 'react-color';


function Editor(){
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("Começar");
    const [selectedColor, setColor] = useState("#f44336");
    
    const initializeDrawingPanel = () => {
        // Quando iniciar o painel, esconde as opções, mostrar o painel e muda o texto do botão para "Reiniciar";
        // Quando iniciarmos novmente, mostra as opões, esconde o painel e muda o texto do botão para "Começar";
        // Assim, podemos reaproveitar o botão;
        
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "Começar" ? setButtonText("Reiniciar") : setButtonText("Começar")
    }


    function changeColor(color){
        // Seta a cor na variavel global referente a cor selecionada na grid de cores;
        setColor(color.hex)
    }
    return(
        <div id="editor"> 
            <h1>Editor de Pixel</h1>
            { hideDrawingPanel && <h2>Selecione as dimenções</h2>}
           {hideDrawingPanel && (
           <section id="options">
                <div className="option">
                    <input 
                    type="number" 
                    className="panelInput" 
                    defaultValue={panelWidth} 
                    onChange={(e) => {setPanelWidth(e.target.value)} }
                    ></input>
                     <span>Largura</span>
                </div>
               
                <div className="option">
                <input 
                    type="number" 
                    className="panelInput" 
                    defaultValue={panelHeight}
                    onChange={(e) => {setPanelHeight(e.target.value)} }
                    ></input>
                    <span>Altura</span>
                </div>   
            </section>)}
            <button className="button" onClick={initializeDrawingPanel}>{buttonText}</button>

            {hideOptions && (<CirclePicker color={selectedColor} onChangeComplete={changeColor}/>)}
        </div>
     )
}

export default Editor;