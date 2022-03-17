import React from "react"
import Login from "./Telas/Inicio/Login"
import Perguntas from "./Telas/Perguntas/Perguntas"

export default function App(){
    const [Tela,setTela] = React.useState(0)

    function acessarPerguntas(){
        setTela(1)
    }

    switch(Tela){
        default:
            return(
                <>
                    <Login funcao={acessarPerguntas}/>
                </>
            );
        case 1:
            return(
                <>
                    <Perguntas/>
                </>
            )  
    }
  
}