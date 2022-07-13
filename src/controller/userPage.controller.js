export default class UserPage {
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

    static vitrine(){
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
        const atividadePlanejada = document.createElement("td")
        const descricapDetalhada = document.createElement("td")
        const categoriaDetalhada = document.createElement("span")
        const tdCategoria = document.createElement("td")
        const CaixaBotaoEditar = document.createElement("td")
        const editarHabito = document.createElement("td")

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
        atividadePlanejada.classList.add("atividadePlanejada")
        descricapDetalhada.classList.add("descricapDetalhada")
        tdCategoria.classList.add("tdCategoria")
        categoriaDetalhada.classList.add("categoriaDetalhada")
        CaixaBotaoEditar.classList.add("CaixaBotaoEditar")
        editarHabito.classList.add("editarHabito")

        status.innerText = "Status"
        tituloTabela.innerText = "Título"
        descricao.innerText = "Descrição"
        categoria.innerText = "Categoria"
        editar.innerText = "Editar"

        checkout.type = "chechbox"
        atividadePlanejada.innerText = "Fazer exercícios segunda pela manhâ"
        descricapDetalhada.innerText = "Ir correr na praça próxima a minha casa"
        tdCategoria.innerText = "Saúde"
        CaixaBotaoEditar.innerText = "..."
        
        tdCategoria.appendChild(categoriaDetalhada)
        caixaHabits.append(checkout, atividadePlanejada, descricapDetalhada, tdCategoria, CaixaBotaoEditar)
        tbody.appendChild(caixaHabits)
        caixaOrganizacao.append(status, tituloTabela, descricao, categoria, editar)
        tituloMain.appendChild(caixaOrganizacao)
        tabela.append(tituloMain, tbody)
        secaoTabela.appendChild(tabela)
        body.appendChild(secaoTabela)
    }

    static editarUsuario(){
        
        // criação de modal
        const title = "Editar perfil"
        const body = document.querySelector("body")
        const modal = document.createElement("div")
        const container = document.createElement("div")
        const modalInner = document.createElement("div")
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

        botaoFechar.type = "button"
        imagem.src = "../../src/assets/img/X.png"
        imagem.alt = "Fechar"

        figure.appendChild(imagem)
        botaoFechar.appendChild(figure)
        modalInner.append(modalTitulo)
        container.append(modalInner, botaoFechar)
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
}
