import { Login } from "./login.controller.js"

export default class PaginaLogin{

    static login(){


    const botaoLogin = document.createElement("button")
    botaoLogin.innerText = "Entrar"
    botaoLogin.type = "button"

    botaoLogin.addEventListener("click", async event => {
        event.preventDefault()
        
        const data = {}
        const formBotaoLogin = [...event.target.form]
        console.log(formBotaoLogin)
        formBotaoLogin.forEach(elem => {
            if(elem.value !== ""){
                data[elem.name] = elem.value
            }
        })
        console.log(data)
        await Login.logar(data)
        
        //window.location.replace()
    })

    const section = document.querySelector(".container")
    section.append(botaoLogin)
    }
}