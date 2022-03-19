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
    const [Cor,setCor] = React.useState('')
    function clickBotao(){
        props.funcao(props.cont+1)
        setTelaPergunta(3)
    }

    switch(TelaPergunta){
        default:
            return(
                <div className="Pergunta">
                    <h1>Pergunta {props.indice}</h1>
                    <ion-icon onClick={()=>(setTelaPergunta(1))} name="play-outline"></ion-icon>
                </div>
            ) 
        case 1:
            return(
                <div className="Pergunta Selecionada">
                    <h1>{props.pergunta}</h1>
                    <img onClick={()=>(setTelaPergunta(2))} src="assets/imgs/setinha.png" alt="ver resposta"/>
                </div>
            )
        case 2:
            return(
                <div className="Pergunta Responder">
                    <h1>{props.resposta}</h1>
                    <div className="botoes">
                        <button style={{background:'#FF3030'}} className="botao" onClick={()=>{clickBotao(); setCor('vermelho')}}>Não lembrei</button>
                        <button style={{background:'#FF922E'}} className="botao" onClick={()=>{clickBotao(); setCor('amarelo')}}>Quase não lembrei</button>
                        <button style={{background:'#2FBE34'}} className="botao" onClick={()=>{clickBotao(); setCor('verde')}}>Zap!</button>
                    </div>
                </div>    
            )
        case 3:
            return(
                <div className={"Pergunta Respondida "+Cor}>
                    <h1>Pergunta {props.indice}</h1>
                    {Cor==="vermelho"?<ion-icon name="close-circle-outline"></ion-icon>:null}
                    {Cor==="verde"?<ion-icon name="checkmark-circle-outline"></ion-icon>:null}
                    {Cor==="amarelo"?<ion-icon name="help-circle-outline"></ion-icon>:null}
                </div>
            )                  
    }         
}