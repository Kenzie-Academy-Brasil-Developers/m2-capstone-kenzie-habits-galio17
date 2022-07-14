import { Login } from "./login.controller.js"

export default class PaginaLogin {

    static login() {
    
        // constroi botão de login
        const botaoLogin = document.createElement("button")
        botaoLogin.innerText = "Entrar"
        botaoLogin.type = "button"


        const labelUsuario = document.createElement("label")
        labelUsuario.innerText = "Usuário"


        const usuarioInput = document.createElement("input")
        usuarioInput.type = "email"
        usuarioInput.name = "email"
        usuarioInput.id = "email"
        usuarioInput.placeholder = "exemplo@mail.com"


        const labelSenha = document.createElement("label")
        labelSenha.innerText = "Senha"


        const senhaInput = document.createElement("input")
        senhaInput.type = "password"
        senhaInput.name = "password"
        senhaInput.id = "password"
        senhaInput.placeholder = "Digitar sua senha"

        botaoLogin.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {}
            const formBotaoLogin = [...event.target.form]
            formBotaoLogin.forEach(elem => {
                data[elem.name] = elem.value

                console.log(data)
            })

            console.log(await Login.logar(data))

            const valueUsuario =  await Login.logar(data)
            console.log(valueUsuario)
        

            if(valueUsuario.message){
              divErro.innerText = valueUsuario.message
            }
            else{
                window.location.replace("../src/views/homePage.html")
            }
        })
        
        const divErro = document.querySelector("div")
        const divOk = document.querySelector("div")
        const form = document.querySelector("form")
        form.append(labelUsuario, usuarioInput, labelSenha, senhaInput, divErro, botaoLogin)
        
    }
}
