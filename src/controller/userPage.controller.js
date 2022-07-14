import Dom from "../models/dom.model.js"

export default class UserPage extends Dom{
    static tbody = document.querySelector(".tbody")

    static header(){
        let username = localStorage.getItem("@kenzie-habits:user_name")
        let avatar = localStorage.getItem("@kenzie-habits:user_img")
        const nomeUsuario = document.querySelector(".nomeUsuario")
        const fotoPerfilUm = document.querySelector(".fotoPerfilUm")
        const fotoPerfilDois = document.querySelector(".fotoPerfilDois")
        
        nomeUsuario.innerText = username
        fotoPerfilUm.src = avatar
        fotoPerfilDois.src = avatar

        fotoPerfilUm.addEventListener("error", () =>{
            fotoPerfilUm.src = "../assets/img/unnamed.jpg"
            fotoPerfilDois.src = "../assets/img/unnamed.jpg"
        })

    }

    static listarVitrine(listaDeHabitos) {
        this.tbody.innerHTML = '';

        listaDeHabitos.forEach((habito) => {
            UserPage.vitrine(habito.habit_status, habito.habit_title, habito.habit_description, habito.habit_category, habito.habit_id);
        })
    }

    static vitrine(statusP, atividadeP, descricaoP, categoriaP, id){
        const caixaHabits = document.createElement("tr")
        const checkout = document.createElement("td")
        const input = document.createElement("input")
        const atividadePlanejada = document.createElement("td")
        const descricapDetalhada = document.createElement("td")
        const categoriaDetalhada = document.createElement("span")
        const tdCategoria = document.createElement("td")
        const CaixaBotaoEditar = document.createElement("td")
        const editarHabito = document.createElement("button")

        caixaHabits.classList.add("caixaHabits")
        checkout.classList.add("checkout")
        input.classList.add("input")
        atividadePlanejada.classList.add("atividadePlanejada")
        descricapDetalhada.classList.add("descricapDetalhada")
        tdCategoria.classList.add("tdCategoria")
        categoriaDetalhada.classList.add("categoriaDetalhada")
        CaixaBotaoEditar.classList.add("CaixaBotaoEditar")
        editarHabito.classList.add("editarHabito")
   
        caixaHabits.id = id
        input.type = "checkbox"
        input.checked = statusP 
        atividadePlanejada.innerText = atividadeP
        descricapDetalhada.innerText = descricaoP
        if(categoriaP === "saude"){
            categoriaP = "Saúde"
        }
        categoriaDetalhada.innerText = categoriaP
        editarHabito.innerText = "..."

        CaixaBotaoEditar.appendChild(editarHabito)
        tdCategoria.appendChild(categoriaDetalhada)
        checkout.appendChild(input)
        caixaHabits.append(checkout, atividadePlanejada, descricapDetalhada, tdCategoria, CaixaBotaoEditar)
        this.tbody.appendChild(caixaHabits)
    }

    static criarFormHabito(eParaEditar) {
        const form = document.createElement('form');

        const habitoTitulo = document.createElement('input');
        const habitoDescricao = document.createElement('textarea');
        const habitoCategoria = document.createElement('div');
        const habitoStatus = document.createElement('div');
        const habitoBotoes = document.createElement('div');
        const habitoBotaoEnvio = document.createElement('button');

        form.append(habitoTitulo, habitoDescricao, habitoCategoria, habitoBotoes);
        
        habitoTitulo.type = 'text'
        habitoTitulo.name = 'habit_title';
        habitoTitulo.id = 'habit_title';
        habitoTitulo.insertAdjacentHTML('beforebegin',`
            <label for="habit_title">Título</label>
        `);

        habitoDescricao.name = 'habit_description';
        habitoDescricao.id = 'habit_description';
        habitoDescricao.insertAdjacentHTML('beforebegin', `
        <label for="habit_description">Descrição</label>
        `);

        habitoCategoria.classList.add('customSelect');
        habitoCategoria.insertAdjacentHTML('beforebegin', `
            <label for="habit_category">Categoria</label>
        `);
        habitoCategoria.insertAdjacentHTML('afterbegin', `
            <div class="customSelect__inner">
                <div class="customSelect__select">
                    <button class="select" name="habit_category" id="habit_category">Selecionar categoria</button>
                </div>
                <div class="customSelect__customOptions customOptions fechado">
                    <button class="customOptions__option customOptions__option--casa" value="casa">Casa</button>
                    <button class="customOptions__option customOptions__option--estudo" value="estudos">Estudo</button>
                    <button class="customOptions__option customOptions__option--lazer" value="lazer">Lazer</button>
                    <button class="customOptions__option customOptions__option--trabalho" value="trabalho">Trabalho</button>
                    <button class="customOptions__option customOptions__option--saude" value="saude">Saúde</button>
                </div>
            </div>
        `);

        habitoBotoes.classList.add('botoesContainer')
        habitoBotoes.append(habitoBotaoEnvio);
        habitoBotaoEnvio.innerText = 'Inserir';
        habitoBotaoEnvio.classList.add('botao', "botao--envio", "botao--envio/habito")

        if(eParaEditar) {
            form.classList.add('formulario--editarHabito');

            habitoBotaoEnvio.classList.add("botao--envio")
            habitoBotaoEnvio.innerText = 'Salvar alterações';
            habitoBotoes.insertAdjacentHTML('afterbegin', `
                <button class="botao botao--secundario botao--confirmarDelete">Excluir</button>
            `);
            habitoBotoes.insertAdjacentElement('beforebegin', habitoStatus)

            habitoStatus.classList.add('statusForm')
            habitoStatus.insertAdjacentHTML('afterbegin', `
                <label for="habit_status">Status</label>
                <input class="input" type="checkbox" name="habit_status" id="habit_status">
            `);

            this.modal(form, 'Editar hábito');
        }
        else {
            form.classList.add('formulario--criarHabito');
            this.modal(form, 'Criar hábito');
        }
    }

    static editarUsuario(){
        // criação de form

        const form = document.createElement('form');
        const botaoEnviar = document.createElement('button')

        form.classList.add("formulario--editarPerfil")

        botaoEnviar.type = 'submit'
        botaoEnviar.innerText = 'Salvar Alterações'
        botaoEnviar.classList.add('botao', 'botao--envio', 'botao--envio/usuario')

        const inputDados = [
            {
                label: 'Nome',
                name: 'usr_name',
                type: 'text',
                value: localStorage.getItem('@kenzie-habits:user_name')
            },
            {
                label: 'URL da imagem do perfil',
                name: 'usr_image',
                type: 'text',
                value: localStorage.getItem('@kenzie-habits:user_img')
            }
        ]

        inputDados.forEach(dado => {
            console.log(dado)

            const novoLabel = document.createElement('label');
            const novoInput = document.createElement('input');

            novoLabel.innerText = dado.label;
            novoLabel.htmlFor = dado.name;

            novoInput.type = dado.type;
            novoInput.name = dado.name;
            novoInput.id = dado.name;
            novoInput.value = dado.value;
            
            form.append(novoLabel, novoInput, botaoEnviar);
        });

        this.modal(form, 'Editar Perfil')
    }

    static confirmarDeleteHabito() {
        const deletarContainer = document.createElement('div');
        const confirmacao = document.createElement('h3');
        const detalhes = document.createElement('span');
        const botoesContainer = document.createElement('div');

        deletarContainer.classList.add('deletarContainer')
        
        confirmacao.innerText = 'Certeza que deseja excluir este hábito?';
        detalhes.innerText = 'Após executar essa ação não será possível desfazer';

        botoesContainer.classList.add('botoesContainer')
        botoesContainer.insertAdjacentHTML('afterbegin', `
            <button class="botao botao--secundario botao--cancelar">Cancelar</button>
            <button class="botao botao--deletar">Sim, excluir este hábito</button>
        `);

        deletarContainer.append(confirmacao, detalhes, botoesContainer);

        this.modal(deletarContainer, 'Excluir hábito');
    }
}
