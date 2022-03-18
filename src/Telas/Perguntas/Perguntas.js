import React from "react"
import FlashCard, { flashcardsEmbaralhados } from "./FlashCard"
import Logo from "./Logo"

export default function Perguntas(){
    
    return(
            <div className="pagina">
                <div className="Perguntas">
                    <Logo/>
                    <div className="Lista">
                        {flashcardsEmbaralhados.map((flashcards,index)=>(
                            <FlashCard key={flashcards.key} indice={index+1} pergunta={flashcards.Q} resposta={flashcards.R}/>
                        ))}
                    </div>
                    <div className="Contador">
                            <h1>0/4 CONCLUÍDOS</h1>
                    </div>
                </div>                
            </div>   
        )
}