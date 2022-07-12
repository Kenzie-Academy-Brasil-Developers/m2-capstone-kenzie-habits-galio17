import Dom from "../models/dom.model.js";

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
Dom.modal(form, "Criar Hábito")
