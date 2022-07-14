import { Habits } from "../controller/habits.controller.js";
import { Login } from "../controller/login.controller.js";
import { User } from "../controller/user.controller.js";
import Dom from "../models/dom.model.js";


const dataLogin = {
    email: "rafaelBertoldo@mail.com",
    password: "123456"
}

const dataNewHabit = {
    habit_title: "Requisições do Capstone",
	habit_description: "terminar as requisições do Capstone",
	habit_category: "trabalho"
}

const idUpdate = 6
const idComplete = 6

const dataUpdate = {
        habit_title: "Jogar volei aos domingos no parque Marina",
        habit_description: "Ir aos domingos com a família no parque Marina e aproveitar para jogar vôlei de areia",
        habit_category: "lazer"
}

let userUpdate = {
    usr_image: "https://www.google.com/images/Kammer"
}

/* exemplos de requisições */

// // LOGIN:

// // Login:
Login.logar(dataLogin)

// HABITS:

// // Criar novo hábito:
// Habits.CreateHabit(dataNewHabit)

// // Buscar/Ler todos os hábitos:
// Habits.ReadAll()

// // Buscar/Ler hábitos por categoria:
// Habits.ReadByCategory('trabalho')

// // Atualizar hábito:
// Habits.UpdateHabit(idUpdate, dataUpdate)

// // Completar hábito:
// Habits.CompleteHabit(idComplete) 

// // Deletar hábito:
// Habits.DeleteHabit(idComplete)

// USER:

// // Atualizar profile:
// User.updateProfile(userUpdate)


Dom.modal(undefined, "teste", true)