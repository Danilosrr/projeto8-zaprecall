import React from "react"
import FlashCard, { flashcardsEmbaralhados } from "./FlashCard"
import Logo from "./Logo"

export default function Perguntas(){

    const [Contagem,setContagem]=React.useState(0)

    return(
            <div className="pagina">
                <div className="Perguntas">
                    <Logo/>
                    <div className="Lista">
                        {flashcardsEmbaralhados.map((flashcards,index)=>(
                            <FlashCard key={flashcards.key} indice={index+1} pergunta={flashcards.Q} resposta={flashcards.R} funcao={setContagem} cont={Contagem}/>
                        ))}
                    </div>
                    <div className="Contador">
                            <h1>{Contagem}/{flashcardsEmbaralhados.length} CONCLUÍDOS</h1>
                    </div>
                </div>                
            </div>   
        )
}