export default function Login(props){
    return(
        <div className="login">
            <div className="logo">
                <div className="logoImg">  
                    <img src={props.src} alt="logo"/>
                    <h1>{props.nome}</h1>
                </div>      
                <button>Iniciar Recall</button>
            </div>
        </div>
    )
};