// import { Habits } from "../controller/habits.controller.js";
// import Dom from "../models/dom.model.js";
import UserPage from "../controller/userPage.controller.js";

import { Habits } from "../controller/habits.controller.js";

const nome = localStorage.getItem('@kenzie-habits:user_name')

let habito = await Habits.ReadAll()

// console.log(habito)
UserPage.header(nome)
UserPage.menu()

habito.forEach(element => {
    UserPage.vitrine(element.habit_status, element.habit_title, element.habit_description, element.habit_category)
});

const criar = document.querySelector(".botaoCriar")

class HomePage{

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
            console.dir(option)
        }
        
    }

    static async inserirHabito(e){
        const form = e.composedPath()[2];
        e.preventDefault();

        const inserir = e.target
        if(inserir.classList.contains("botao--envio")){
           let novoHabito = {}

           const elemensHabitos = form.elements;

           for(let i = 0; i < elemensHabitos.length; i++){
            let itemHabitos = elemensHabitos[i]
            if(itemHabitos.name !== ""){
                novoHabito[itemHabitos.name] = itemHabitos.value;
            }
           }
        //    console.log(novoHabito)
          const habitoCriado = await  Habits.CreateHabit(novoHabito)
          if(habitoCriado.message){
            alert(habitoCriado.message)
          } else {

            habito = await Habits.ReadAll()

            habito.forEach(element => {
                UserPage.vitrine(element.habit_status, element.habit_title, element.habit_description, element.habit_category)
            });

          }
        }
    }

    static editarHabito(e){
        const botao = e.target;
        if(botao.classList.contains("editarHabito")){
            UserPage.criarFormHabito(true)
        }
    }

    


}

criar.addEventListener("click", HomePage.criarHabito)

// addEventListener("click", HomePage.concluirTarefa)


addEventListener("click", HomePage.editarHabito)
addEventListener("click", HomePage.selectForm)
addEventListener("click", HomePage.inserirHabito)



