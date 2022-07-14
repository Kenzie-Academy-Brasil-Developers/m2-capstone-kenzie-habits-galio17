// import { Habits } from "../controller/habits.controller.js";
// import Dom from "../models/dom.model.js";
import UserPage from "../controller/userPage.controller.js";
import { Habits } from "../controller/habits.controller.js";
import { User } from "../controller/user.controller.js"

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
        const categorias = document.querySelector('.customOptions');
        if(option.classList.contains("customOptions__option")){
            const customSelect = e.composedPath()[4].querySelector(".select")

            if(customSelect.classList.contains("customOptions__option")){
                customSelect.className = "select"
                customSelect.innerText = 'Selecionar categoria';
            }
            categorias.classList.toggle('fechado')
            customSelect.classList.add(...option.classList)
            customSelect.value = option.value;
            customSelect.innerText = option.innerText;
        }
        else if(option.classList.contains('customSelect__select')
        || option.classList.contains('select')) {
            categorias.classList.toggle('fechado')
        } else {
            if(categorias) categorias.classList.add('fechado')
        }
        
    }

    static salvarInformacoes(form){
        let novaInfo = {}
            
            const elemensInfo = form.elements;

            for(let i = 0; i < elemensInfo.length; i++){
                let itemInfo = elemensInfo[i]
                if(itemInfo.name) {
                    novaInfo[itemInfo.name] = itemInfo.value;
                }
            }
            return novaInfo
    }

    static async salvarUsuario(e){
        e.preventDefault();
        const form = e.composedPath()[3].querySelector("form");
        
        const inserir = e.target
        if(inserir.classList.contains("botao--envio/usuario")){

            let usuarioEditado = HomePage.salvarInformacoes(form)
            
            const modal = event.composedPath()[4];
  
            let user = await User.updateProfile(usuarioEditado);

            if(user.message){
                alert(user.message)
                
            } else {
                UserPage.modal('Usuário atualizado', 'Sucesso', true);
                
                localStorage.setItem("@kenzie-habits:user_name", user.usr_name)
                localStorage.setItem("@kenzie-habits:user_img", user.usr_image)
                
                UserPage.header()
                
                modal.remove()

                setTimeout(() => {
                    const modalSucesso = document.querySelector('.modal--sucesso')

                    if(modalSucesso) modalSucesso.remove()
                }, 3000);
            }
        }
    }

    static async salvarHabito(e){
        e.preventDefault();
        const form = e.composedPath()[3].querySelector("form");
        
        const inserir = e.target
        if(inserir.classList.contains("botao--envio/habito")){

            let novoHabito = HomePage.salvarInformacoes(form)
            
            const modal = event.composedPath()[5];
  
            let habito

            if(form.classList.contains("formulario--criarHabito")) {
                habito = await Habits.CreateHabit(novoHabito)
            } else if (form.classList.contains("formulario--editarHabito")) {
                delete novoHabito.habit_status
                habito = await Habits.UpdateHabit(this.habitoId, novoHabito);
            } else if (form.classList.contains("formulario--editarPerfil")) {
                habito = await User.updateProfile(novoHabito);

                localStorage.setItem("@kenzie-habits:user_name", habito.usr_name)
                localStorage.setItem("@kenzie-habits:user_img", habito.usr_image)

                UserPage.header()

            }

            if(habito.message){
                alert(habito.message)
            } else {
                UserPage.modal('Hábito salvo', 'Sucesso', true)

                listaDeHabitos = await Habits.ReadAll()

                UserPage.listarVitrine(listaDeHabitos)

                setTimeout(() => {
                    const modalSucesso = document.querySelector('.modal--sucesso')

                    if(modalSucesso) modalSucesso.remove()
                }, 3000);

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
            UserPage.modal(habito.message, 'Sucesso', true);
            checkbox.checked = true
            listaDeHabitos = await Habits.ReadAll()
            UserPage.listarVitrine(listaDeHabitos)

            setTimeout(() => {
                const modalSucesso = document.querySelector('.modal--sucesso')

                if(modalSucesso) modalSucesso.remove()
            }, 3000);
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
            UserPage.modal(habito.message, 'Sucesso', true)

            listaDeHabitos = await Habits.ReadAll()
            UserPage.listarVitrine(listaDeHabitos);

            setTimeout(() => {
                const modalSucesso = document.querySelector('.modal--sucesso')

                if(modalSucesso) modalSucesso.remove()
            }, 3000);
        }
    }

    static edutarPerfil(e){
        const botaoEditar = e.target;
        if(botaoEditar.classList.contains("editarPerfil")){
            UserPage.editarUsuario()
        }
    }

    static sairDoPerfil(e){
        const sair = e.target;

        if(sair.classList.contains("sair")){
            localStorage.clear();
            window.location.replace("../../index.html")
        }    
    }

}





criar.addEventListener("click", HomePage.criarHabito)
todos.addEventListener("click", HomePage.filtrarTodos)
concluido.addEventListener("click", HomePage.filtrarConcluidos)

// addEventListener("click", HomePage.concluirTarefa)


addEventListener("click", HomePage.editarHabito)
addEventListener("click", HomePage.selectForm)
addEventListener("click", HomePage.salvarHabito)
addEventListener("click", HomePage.completarHabito)
addEventListener("click", HomePage.confirmarDelete)
addEventListener("click", HomePage.cancelarDelete)
addEventListener("click", HomePage.deletarHabito)
addEventListener("click", HomePage.edutarPerfil)
addEventListener("click", HomePage.sairDoPerfil)
addEventListener("click", HomePage.salvarUsuario)



