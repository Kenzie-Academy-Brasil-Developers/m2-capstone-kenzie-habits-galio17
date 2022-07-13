import UserPage from "../controller/userPage.controller.js";
import Dom from "../models/dom.model.js";

// teste UserPage
UserPage.header("Júlia Silva Camargo")
UserPage.menu()
UserPage.vitrine()

// modelo de parametros formulário
let form = Dom.createForm("Enviar", [
    {
    label: "Senha",
    name: "password",
    type: "password",
    placeholder: "Place",
    }
])

let elemento = document.createElement("h1")
elemento.innerText = "Oi"

// teste Dom.modal
Dom.modal(form, "Criar Hábito")