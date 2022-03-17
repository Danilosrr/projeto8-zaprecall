import FlashCard, { dadosFlashcards } from "./FlashCard"
import Logo from "./Logo"

export default function Perguntas(){
    return(
            <div className="pagina">
                <div className="Perguntas">
                    <Logo/>
                    <div className="Lista">
                        {dadosFlashcards.map(flashcards=>(
                            <FlashCard key={flashcards.key} indice={flashcards.indice}/>
                        ))}
                    </div>
                    <div className="Contador">
                            <h1>0/4 CONCLUÍDOS</h1>
                    </div>
                </div>                
            </div>   
        )
}