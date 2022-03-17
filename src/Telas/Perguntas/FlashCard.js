
const dadosFlashcards=[
    { key:'pergunta1', indice:1},
    { key:'pergunta2', indice:2},
    { key:'pergunta3', indice:3},
    { key:'pergunta4', indice:4},
]
export {dadosFlashcards}

export default function FlashCard(props){
    return(
        <div className="Pergunta">
            <h1>Pergunta {props.indice}</h1>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )  
}