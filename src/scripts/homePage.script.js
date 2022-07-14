// import { Habits } from "../controller/habits.controller.js";
// import Dom from "../models/dom.model.js";
import UserPage from "../controller/userPage.controller.js";
import { Habits } from "../controller/habits.controller.js";

let listaDeHabitos = await Habits.ReadAll()

// console.log(listaDeHabitos)
UserPage.header()

UserPage.listarVitrine(listaDeHabitos)

const criar = document.querySelector(".botaoCriar")

class HomePage{
    static habitoId = '';

    static criarHabito(){

        UserPage.criarFormHabito()
        
    }

    static selectForm(e){
        e.preventDefault();
        const option = e.target;
        if(option.classList.contains("customOptions__option")){
            const customSelect = e.composedPath()[4].querySelector(".customSelect__select")
            if(customSelect.classList.contains("customOptions__option")){
                customSelect.className = "customSelect__select"
            }
            customSelect.classList.add(...option.classList)
            customSelect.value = option.value;
            customSelect.innerText = option.innerText;
            // console.dir(option)
        }
        
    }

    static async inserirHabito(e){
        e.preventDefault();
        const form = e.composedPath()[2];
        
        const inserir = e.target
        if(inserir.classList.contains("botao--envio")){
            let novoHabito = {}
            
            const modal = event.composedPath()[5];
            const elemensHabitos = form.elements;

            for(let i = 0; i < elemensHabitos.length; i++){
                let itemHabitos = elemensHabitos[i]
                if(itemHabitos.name) {
                    novoHabito[itemHabitos.name] = itemHabitos.value;
                }
            }
            let habito

            if(form.classList.contains("formulario--criarHabito")) {
                habito = await Habits.CreateHabit(novoHabito)
            } else if (form.classList.contains("formulario--editarHabito")) {
                delete novoHabito.habit_status
                habito = await Habits.UpdateHabit(this.habitoId, novoHabito);
            }
        
            if(habito.message){
                alert(habito.message)
            } else {

                listaDeHabitos = await Habits.ReadAll()

                UserPage.listarVitrine(listaDeHabitos)

                modal.remove()
            }
        }
    }

    static editarHabito(e){
        const botao = e.target;
        if(botao.classList.contains("editarHabito")){
            UserPage.criarFormHabito(true)
            this.habitoId = e.composedPath()[2].id
        }
    }

    static async filtrarTodos() {
        listaDeHabitos = await Habits.ReadAll();

        UserPage.listarVitrine(listaDeHabitos);
    }

    static async filtrarConcluídos() {
        listaDeHabitos = await Habits.ReadAll();

        const listaDeConcluidos = listaDeHabitos.filter((habito) => habito.habit__status)

        UserPage.listarVitrine(listaDeConcluidos);
    }

    static async completarHabito(e) {
        const checkbox = e.target 
        if(checkbox.classList.contains('input')) {
            this.habitoId = e.composedPath()[2].id
            const habito = await Habits.CompleteHabit(this.habitoId)

            listaDeHabitos = await Habits.ReadAll()
            UserPage.listarVitrine(listaDeHabitos)
        }
    }

}

criar.addEventListener("click", HomePage.criarHabito)

// addEventListener("click", HomePage.concluirTarefa)


addEventListener("click", HomePage.editarHabito)
addEventListener("click", HomePage.selectForm)
addEventListener("click", HomePage.inserirHabito)
addEventListener("click", HomePage.completarHabito)



