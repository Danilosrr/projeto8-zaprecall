import React from "react"
import FlashCard, { flashcardsEmbaralhados } from "./FlashCard"
import Logo from "./Logo"
import Resultado from "../Resultado/Resultado"
import Contador from "../Resultado/Contador"

export default function Perguntas(){

    const [Contagem,setContagem]=React.useState(0)
    const [ContagemImg,setContagemImg]=React.useState(<></>)
    const [Erro,setErro] = React.useState(0)

    return(
            <div className="pagina">
                <div className="Perguntas">
                    <Logo/>
                    <div className="Lista">
                        {flashcardsEmbaralhados.map((flashcards,index)=>(
                            <FlashCard 
                            key={flashcards.key} indice={index+1} pergunta={flashcards.Q} resposta={flashcards.R} 
                            funcao={setContagem} cont={Contagem} funcao2={setContagemImg} contImg={ContagemImg}
                            funcaoErro={setErro} erro={Erro}
                            />
                        ))}
                    </div>
                    <div className="Contador">
                            {Contagem!==flashcardsEmbaralhados.length?<Contador contagem={Contagem} deck={flashcardsEmbaralhados}/>:<Resultado erro={Erro}/>}
                            <div>{ContagemImg}</div>
                    </div>
                </div>                
            </div>   
        )
}