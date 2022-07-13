import UserPage from "../controller/userPage.controller.js";

// teste UserPage
UserPage.header("Júlia Silva Camargo")
UserPage.menu()
UserPage.vitrine(true, "fazer exercicios", "ir correr na...", "Saude")
UserPage.vitrine()
/* 
// modelo de parametros formulário
let form = UserPage.createForm("Enviar", [
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
UserPage.modal(form, "Criar Hábito"); */

UserPage.criarFormHabito(true)
Dom.modal(form, "Criar Hábito")


