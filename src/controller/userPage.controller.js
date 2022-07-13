import Dom from "../models/dom.model.js"

export default class UserPage extends Dom{
    static header(title){
        const body = document.querySelector("body")
        const header = document.createElement("header")

        const headerUm = document.createElement("div")
        const tituloSite = document.createElement("h1")
        const figureUm = document.createElement("figure")
        const imagemUm = document.createElement("img")
        
        const headerDois = document.createElement("div")
        const divFormato = document.createElement("div")
        const figureDois = document.createElement("figure")
        const imagemDois = document.createElement("img")
        const nomeUsuario = document.createElement("h2")

        header.classList.add("header")

        headerUm.classList.add("headerUm")
        tituloSite.classList.add("tituloSite")
        imagemUm.classList.add("fotoPerfilUm")

        headerDois.classList.add("headerDois")
        divFormato.classList.add("divFormato")
        imagemDois.classList.add("fotoPerfilDois")
        nomeUsuario.classList.add("nomeUsuario")

        tituloSite.innerText = "KenzieHabit"
        nomeUsuario.innerText = title
        imagemUm.src = "../temp/imgsTemporarias/unnamed.jpg"
        imagemUm.alt = "fotoPerfil"
        imagemDois.src = "../temp/imgsTemporarias/unnamed.jpg"
        imagemDois.alt = "fotoPerfil"

        figureDois.appendChild(imagemDois)
        divFormato.append(figureDois, nomeUsuario)
        headerDois.appendChild(divFormato)
        figureUm.appendChild(imagemUm)
        headerUm.append(tituloSite, figureUm)
        header.append(headerUm, headerDois)
        body.appendChild(header)
    }
    static menu(){
        const body = document.querySelector("body")
        const tituloEBotoes = document.createElement("div")
        const titulo = document.createElement("h1")
        const organizacaoBotoes = document.createElement("div")
        const botaoTodos = document.createElement("button")
        const botaoConcluido = document.createElement("button")
        const botaoCriar = document.createElement("button")

        tituloEBotoes.classList.add("tituloEBotoes")
        titulo.classList.add("titulo")
        botaoTodos.classList.add("botaoTodos")
        botaoConcluido.classList.add("botaoConcluido")
        botaoCriar.classList.add("botaoCriar")

        titulo.innerText = "Tarefas"
        botaoTodos.innerText = "Todos"
        botaoConcluido.innerText = "Concluídos"
        botaoCriar.innerText = "Criar"

        organizacaoBotoes.append(botaoTodos, botaoConcluido, botaoCriar)
        tituloEBotoes.append(titulo, organizacaoBotoes)
        body.appendChild(tituloEBotoes)
    }
    static vitrine(statusP, atividadeP, descricaoP, categoriaP){
        const body = document.querySelector("body")
        const secaoTabela = document.createElement("section")
        const tabela = document.createElement("table")
        const tituloMain = document.createElement("thead")
        const caixaOrganizacao = document.createElement("tr")
        const status = document.createElement("th")
        const tituloTabela = document.createElement("th")
        const descricao = document.createElement("th")
        const categoria = document.createElement("th")
        const editar = document.createElement("th")

        const tbody = document.createElement("tbody")
        const caixaHabits = document.createElement("tr")
        const checkout = document.createElement("td")
        const input = document.createElement("input")
        const atividadePlanejada = document.createElement("td")
        const descricapDetalhada = document.createElement("td")
        const categoriaDetalhada = document.createElement("span")
        const tdCategoria = document.createElement("td")
        const CaixaBotaoEditar = document.createElement("td")
        const editarHabito = document.createElement("button")

        secaoTabela.classList.add("secaoTabela")
        tabela.classList.add("tabela")
        tituloMain.classList.add("tituloMain")
        status.classList.add("status")
        tituloTabela.classList.add("tituloTabela")
        descricao.classList.add("descricao")
        categoria.classList.add("categoria")
        editar.classList.add("editar")

        caixaHabits.classList.add("caixaHabits")
        checkout.classList.add("checkout")
        input.classList.add("input")
        atividadePlanejada.classList.add("atividadePlanejada")
        descricapDetalhada.classList.add("descricapDetalhada")
        tdCategoria.classList.add("tdCategoria")
        categoriaDetalhada.classList.add("categoriaDetalhada")
        CaixaBotaoEditar.classList.add("CaixaBotaoEditar")
        editarHabito.classList.add("editarHabito")

        input.type = "checkbox"
        status.innerText = "Status"
        tituloTabela.innerText = "Título"
        descricao.innerText = "Descrição"
        categoria.innerText = "Categoria"
        editar.innerText = "Editar"
        
        checkout.type = "chechbox"
        checkout.checked = statusP 
        atividadePlanejada.innerText = atividadeP
        descricapDetalhada.innerText = descricaoP
        if(categoriaP === "Saude"){
            categoriaP = "Saúde"
        }
        categoriaDetalhada.innerText = categoriaP
        editarHabito.innerText = "..."

        CaixaBotaoEditar.appendChild(editarHabito)
        tdCategoria.appendChild(categoriaDetalhada)
        checkout.appendChild(input)
        caixaHabits.append(checkout, atividadePlanejada, descricapDetalhada, tdCategoria, CaixaBotaoEditar)
        tbody.appendChild(caixaHabits)
        caixaOrganizacao.append(status, tituloTabela, descricao, categoria, editar)
        tituloMain.appendChild(caixaOrganizacao)
        tabela.append(tituloMain, tbody)
        secaoTabela.appendChild(tabela)
        body.appendChild(secaoTabela)
    }

    static criarFormHabito(edicao) {
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
        habitoTitulo.insertAdjacentHTML('beforebegin', `
            <label for="habit_title">Título</label>
        `);

        habitoDescricao.name = 'habit_description';
        habitoDescricao.id = 'habit_description';
        habitoDescricao.insertAdjacentHTML('beforebegin', `
        <label for="habit_description">Título</label>
        `);

        habitoCategoria.classList.add('customSelect');
        habitoCategoria.insertAdjacentHTML('beforebegin', `
            <label for="habit_category">Título</label>
        `);
        habitoCategoria.insertAdjacentHTML('afterbegin', `
            <div class="customSelect__inner">
                <button class="customSelect__select" name="habit_category" id="habit_category">Selecionar categoria</button>
                <div class="customSelect__customOptions customOptions fechado">
                    <button class="customOptions__option customOptions__option--casa" value="casa">Casa</button>
                    <button class="customOptions__option customOptions__option--estudo" value="estudo">Estudo</button>
                    <button class="customOptions__option customOptions__option--lazer" value="lazer">Lazer</button>
                    <button class="customOptions__option customOptions__option--trabalho" value="trabalho">Trabalho</button>
                    <button class="customOptions__option customOptions__option--saude" value="saude">Saúde</button>
                </div>
            </div>
        `);

        habitoBotoes.append(habitoBotaoEnvio);
        habitoBotaoEnvio.innerText = 'Inserir';

        if(edicao) {
            form.classList.add('formulario--editarHabito');

            habitoBotaoEnvio.innerText = 'Salvar alterações';
            habitoBotoes.insertAdjacentHTML('afterbegin', `
                <button>Excluir</button>
            `);
            habitoBotoes.insertAdjacentElement('beforebegin', habitoStatus)

            habitoStatus.insertAdjacentHTML('afterbegin', `
                <label for="habit_status">Status</label>
                <input type="checkbox" name="habit_status" id="habit_status">
            `);

            this.modal(form, 'Editar hábito');
        }
        else this.modal(form, 'Criar hábito');
    }
}
