import { Login } from "./login.controller.js"
export default class PaginaLogin {
    static login() {
        // constroi botão de login
        const form = document.querySelector("form")
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
            console.log(form[0])
            const elementos = [{
                name: form[0].name,
                value: form[0].value
            },
            {
                name: form[1].name,
                value: form[1].value
            }]
            elementos.forEach((elem) => {
                data[elem.name] = elem.value
            })
            console.log(data)
            console.log(await Login.logar(data))
            const valueUsuario =  await Login.logar(data)
            console.log(valueUsuario)
            if(valueUsuario.message){
                //senhaInput.id = (
                divErro.innerText =  (valueUsuario.message)
                //window.location.reload(true)
            }
            else{
                window.location.replace("../src/views/homePage.html")
            }
        })
        const container = document.querySelector(".container")
        const divErro = document.querySelector("div")
        divErro.classList.add('divErro')
        form.append(labelUsuario, usuarioInput, labelSenha, senhaInput)
        container.append(botaoLogin, divErro)
    }
}