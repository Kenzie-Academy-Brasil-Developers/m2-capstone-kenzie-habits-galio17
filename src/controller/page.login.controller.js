import { Login } from "./login.controller.js"
import Dom from "../models/dom.model.js"

export default class PaginaLogin extends Dom {
    static login() {

        const botaoLogin = document.createElement("button")
        botaoLogin.classList.add("botaoLogin")
        botaoLogin.innerText = "Entrar"
        botaoLogin.type = "button"



        const xSairUsuario = document.createElement("div")
        xSairUsuario.classList.add("xsairUsuario")
        xSairUsuario.innerText = "x"
        xSairUsuario.style.display = "none"


        const xSairSenha = document.createElement("div")     
        xSairSenha.classList.add("xsairSenha")
        xSairSenha.innerText = "x"
        xSairSenha.style.display = "none"



        const usuarioInput = document.createElement("input")
        usuarioInput.type = "email"
        usuarioInput.name = "email"
        usuarioInput.id = "email"
        usuarioInput.placeholder = "exemplo@mail.com"


        usuarioInput.addEventListener("click", () => {
            xSairUsuario.style.display = "flex"
            
            xSairUsuario.addEventListener("click", () => {
                usuarioInput.value = ""
                xSairUsuario.style.display = "none"
            })
        })



        const senhaInput = document.createElement("input")
        senhaInput.type = "password"
        senhaInput.name = "password"
        senhaInput.id = "password"
        senhaInput.placeholder = "Digitar sua senha"


        senhaInput.addEventListener("click", () => {
            xSairSenha.style.display = "flex"

            xSairSenha.addEventListener("click", () => {
                senhaInput.value = ""
                xSairSenha.style.display = "none"
            })
        })


        botaoLogin.addEventListener("click", async (event) => {
            event.preventDefault()
            const data = {}

            const formBotaoLogin = [...event.target.form]
            formBotaoLogin.forEach(elem => {
                data[elem.name] = elem.value               
            })

            const valueUsuario =  await Login.logar(data)        

            if(valueUsuario.message){
              divErro.innerText = valueUsuario.message

            }
            else{
                this.modal('Usuário logado', 'Sucesso', true)
                setTimeout(() => {
                    window.location.replace("../src/views/homePage.html")
                }, 3000);
            }
        })


        const divErro = document.querySelector(".divErro")
        const form = document.querySelector("form")

        form.append( divErro, botaoLogin)
        //   labelUsuario, labelSenha)

        const sairBotaoUsuario = document.querySelector(".sairBotaoUsuario")
        const sairBotaoSenha = document.querySelector(".sairBotaoSenha")

        sairBotaoUsuario.append(usuarioInput, xSairUsuario)
        sairBotaoSenha.append(senhaInput, xSairSenha)
        
        

    }
}