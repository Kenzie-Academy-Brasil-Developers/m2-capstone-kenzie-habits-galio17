// import { Habits } from "../controller/habits.controller.js";
// import Dom from "../models/dom.model.js";
import UserPage from "../controller/userPage.controller.js";
import { Habits } from "../controller/habits.controller.js";

let listaDeHabitos = await Habits.ReadAll()

// console.log(listaDeHabitos)
UserPage.header()

UserPage.listarVitrine(listaDeHabitos)

const criar = document.querySelector(".botaoCriar")
const todos = document.querySelector(".botaoTodos")
const concluido = document.querySelector(".botaoConcluido")

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

    static async filtrarConcluidos() {
        listaDeHabitos = await Habits.ReadAll();

        const listaDeConcluidos = listaDeHabitos.filter((habito) => habito.habit_status)

        UserPage.listarVitrine(listaDeConcluidos);
    }

    static async completarHabito(e) {
        const checkbox = e.target 
        if(checkbox.classList.contains('input')) {
            if(e.composedPath()[1].className === 'checkout') this.habitoId = e.composedPath()[2].id
            const habito = await Habits.CompleteHabit(this.habitoId)
            alert(habito.message);
            checkbox.checked = true
            listaDeHabitos = await Habits.ReadAll()
            UserPage.listarVitrine(listaDeHabitos)
        }
    }

    static confirmarDelete(e) {
        const botaoConfirmarDelete = e.target
        if(botaoConfirmarDelete.classList.contains('botao--confirmarDelete')) {
            e.composedPath()[5].remove()
            UserPage.confirmarDeleteHabito();
        }
    }

    static cancelarDelete(e) {
        const botaoCancelarHabitp = e.target;
        if(botaoCancelarHabitp.classList.contains('botao--cancelar')) {
            e.composedPath()[5].remove()
        }
    }

    static async deletarHabito(e) {
        const botaoDeletar = e.target;
        if(botaoDeletar.classList.contains('botao--deletar')){
            e.composedPath()[5].remove()
            const habito = await Habits.DeleteHabit(this.habitoId);
            alert(habito.message)

            listaDeHabitos = await Habits.ReadAll()
            UserPage.listarVitrine(listaDeHabitos);
        }
    }
}

criar.addEventListener("click", HomePage.criarHabito)
todos.addEventListener("click", HomePage.filtrarTodos)
concluido.addEventListener("click", HomePage.filtrarConcluidos)

// addEventListener("click", HomePage.concluirTarefa)


addEventListener("click", HomePage.editarHabito)
addEventListener("click", HomePage.selectForm)
addEventListener("click", HomePage.inserirHabito)
addEventListener("click", HomePage.completarHabito)
addEventListener("click", HomePage.confirmarDelete)
addEventListener("click", HomePage.cancelarDelete)
addEventListener("click", HomePage.deletarHabito)



