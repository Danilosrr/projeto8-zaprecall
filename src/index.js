import reactDom from "react-dom";

import Login from "./Login";

function Index(){
    return(
        <Login src="assets/imgs/logo.png" nome="Zap Recall"/>
    )
}

const divRoot = document.querySelector(".root")
reactDom.render(<Index/>,divRoot)
