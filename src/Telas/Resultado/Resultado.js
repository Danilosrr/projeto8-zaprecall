export default function Resultado(props){
    if (props.erro>0){
        return(
            <h1>
                <span role="img" aria-label="sad">😢</span>
                Ainda faltaram alguns...
                Mas não desanime!
            </h1>
        )
    }else{
        return(
            <h1>
                <span role="img" aria-label="congratulations">🥳</span>
                PARABÉNS!
                Você não esqueceu de nenhum flashcard!
            </h1>
        )
    }
}
