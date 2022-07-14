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
                <button class="customSelect__select" name="habit_category" id="habit_category">Selecionar categoria</button>
                <div class="customSelect__customOptions customOptions fechado">
                    <button class="customOptions__option customOptions__option--casa" value="casa">Casa</button>
                    <button class="customOptions__option customOptions__option--estudo" value="estudos">Estudo</button>
                    <button class="customOptions__option customOptions__option--lazer" value="lazer">Lazer</button>
                    <button class="customOptions__option customOptions__option--trabalho" value="trabalho">Trabalho</button>
                    <button class="customOptions__option customOptions__option--saude" value="saude">Saúde</button>
                </div>
            </div>
        `);

        habitoBotoes.append(habitoBotaoEnvio);
        habitoBotaoEnvio.innerText = 'Inserir';
        habitoBotaoEnvio.classList.add('botao', "botao--envio")

        if(eParaEditar) {
            form.classList.add('formulario--editarHabito');

            habitoBotaoEnvio.classList.add("botao--envio")
            habitoBotaoEnvio.innerText = 'Salvar alterações';
            habitoBotoes.insertAdjacentHTML('afterbegin', `
                <button class="botao botao--secundario">Excluir</button>
            `);
            habitoBotoes.insertAdjacentElement('beforebegin', habitoStatus)

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
        
        // criação de modal
        const title = "Editar perfil"
        const body = document.querySelector("body")
        const modal = document.createElement("div")
        const container = document.createElement("div")
        const modalInner = document.createElement("div")
        const modalHeader = document.createElement('div')
        const modalTitulo = document.createElement("h2")
        const botaoFechar = document.createElement("button")
        const figure = document.createElement("figure")
        const imagem = document.createElement("img")
        modalTitulo.innerText = title
        modal.classList.add("modal", "modal__habito")
        container.classList.add("container")
        modalInner.classList.add("modal__inner")
        modalTitulo.classList.add("modal__titulo")
        botaoFechar.classList.add("modal__botaoFechar")
        modalHeader.classList.add("modal__header")

        botaoFechar.type = "button"

        figure.appendChild(imagem)
        botaoFechar.appendChild(figure)
        modalInner.append(modalHeader)
        modalHeader.append(modalTitulo, botaoFechar)
        container.append(modalInner)
        modal.appendChild(container)
        body.appendChild(modal)

        botaoFechar.addEventListener("click", () => {
            modal.style.display = "none"
        })

        // criação de form

        const form = document.createElement('form');
        const botaoEnviar = document.createElement('button')

        botaoEnviar.type = 'submit'
        botaoEnviar.innerText = 'Salvar Alterações'
        botaoEnviar.classList.add('botao')

        console.log(localStorage.getItem('@kenzie-habits:user_img'))

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
            
            modalInner.append(form, botaoEnviar)
            form.append(novoLabel, novoInput);
        });
    }

    static confirmarDeleteHabito() {
        const deletarContainer = document.createElement('div');
        const confirmacao = document.createElement('h3');
        const detalhes = document.createElement('span');
        const botoesContainer = document.createElement('div');

        confirmacao.innerText = 'Certeza que deseja excluir este hábito?';
        detalhes.innerText = 'Após executar essa ação não será possível desfazer';
        botoesContainer.insertAdjacentHTML('afterbegin', `
            <button class="botao botao--secundario botao--cancelar">Cancelar</button>
            <button class="botao botao--deletar">Sim, excluir este hábito</button>
        `);

        deletarContainer.append(confirmacao, detalhes, botoesContainer);

        this.modal(deletarContainer, 'Excluir hábito');
    }
}
