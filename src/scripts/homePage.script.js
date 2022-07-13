import { Habits } from "../controller/habits.controller.js";
import Dom from "../models/dom.model.js";

const criar = document.querySelector(".botaoCriar")
const editar = document.querySelector(".editarHabito")

class HomePage{
    static concluirTarefa(e){
        const input = e.target;
        if(input.classList.contains("input")){
            // Habits.CompleteHabit(input.id)
        }
    }

    static criarHabito(){
        let form = Dom.createForm("Enviar", [
            {
            label: "Senha",
            name: "password",
            type: "password",
            placeholder: "Place",
            }, 
           
        ])
        let elemento = document.createElement("h1")
        elemento.innerText = "Oi"
        
        Dom.modal(form, "Criar Hábito")
    }

    static editarhabito(e){
        const botaoEditar = e.target;
        if(botaoEditar.classList.contains("editarHabito")){
            console.log(botaoEditar.id)
        }
    }

}

addEventListener("click", HomePage.concluirTarefa)

criar.addEventListener("click", HomePage.criarHabito)

addEventListener("click", HomePage.editarhabito)

