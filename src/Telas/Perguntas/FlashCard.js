import React from "react"

const dadosFlashcards=[
    { key:'pergunta1', Q: 'O que é JSX?', R: 'Uma extensão de linguagem do JavaScript'},
    { key:'pergunta2', Q: 'O React é __', R: 'uma biblioteca JavaScript para construção de interfaces'},
    { key:'pergunta3', Q: 'Componentes devem iniciar com __', R: 'letra maiúscula'},
    { key:'pergunta4', Q: 'Podemos colocar __ dentro do JSX', R: 'expressões'},
    { key:'pergunta5', Q: 'O ReactDOM nos ajuda __', R: 'interagindo com a DOM para colocar componentes React na mesma'},
    { key:'pergunta6', Q: 'Usamos o npm para __', R: 'gerenciar os pacotes necessários e suas dependências'},
    { key:'pergunta7', Q: 'Usamos props para __', R: 'passar diferentes informações para componentes'},
    { key:'pergunta8', Q: 'Usamos estado (state) para __ ', R: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
]

const flashcardsEmbaralhados=dadosFlashcards.sort(()=>Math.random()-0.5)
export {flashcardsEmbaralhados}

export default function FlashCard(props){

    const [TelaPergunta,setTelaPergunta] = React.useState(0)

    function virarFlashCard(){
        setTelaPergunta(1)
    }

    switch(TelaPergunta){
        default:
            return(
                <div className="Pergunta">
                    <h1>Pergunta {props.indice}</h1>
                    <ion-icon onClick={virarFlashCard} name="play-outline"></ion-icon>
                </div>
            ) 
        case 1:
            return(
                <div className="Pergunta Selecionada">
                    <h1>{props.pergunta}</h1>
                    <img src="assets/imgs/setinha.png" alt="ver resposta"/>
                </div>
            )          
    }         
}