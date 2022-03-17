export default function Login(props){
   
    return(
        <div className="pagina">
            <div className="Inicio">
                <div className="logoImg">  
                    <img src="assets/imgs/logo.png" alt="logo"/>
                    <h1>Zap Recall</h1>
                </div>      
                <button onClick={props.funcao}>Iniciar Recall</button>
            </div>
        </div>
    )
};