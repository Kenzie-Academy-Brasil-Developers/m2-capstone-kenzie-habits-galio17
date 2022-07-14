export default class Dom {
    static modal(elemento, title, sucess){
        const body = document.querySelector("body")
        const modal = document.createElement("div")
        const container = document.createElement("div")
        const modalInner = document.createElement("div")
        const modalTitulo = document.createElement("h2")
        const modalCabecalho = document.createElement("div")
        const botaoFechar = document.createElement("button")
        const figure = document.createElement("figure")
        const imagem = document.createElement("img")
        modalTitulo.innerText = title
        modal.classList.add("modal")
        container.classList.add("container")
        modalInner.classList.add("modal__inner")
        modalCabecalho.classList.add("modal__cabecalho")
        modalTitulo.classList.add("modal__titulo")
        botaoFechar.classList.add("modal__botaoFechar")

        botaoFechar.type = "button"

        figure.append(imagem)
        botaoFechar.append(figure)
        container.append(modalInner)
        modal.append(container)
        body.append(modal)
        
        if (sucess === true){
            const divInformacoes = document.createElement('div')
            const spanSucess = document.createElement('span')
            spanSucess.innerText = elemento
            spanSucess.classList.add('span--sucesso')
            modal.classList.add("modal--sucesso")

            modalInner.append(modalCabecalho)
            modalCabecalho.append(botaoFechar, divInformacoes)
            divInformacoes.append(modalTitulo, spanSucess)
        }

        else{
            modalCabecalho.append(modalTitulo, botaoFechar)
            modalInner.append(modalCabecalho, elemento)
        }

        botaoFechar.addEventListener("click", () => {
            modal.remove()
        })
        //Para abrir XXX.addEventListerner("click, () => {
        //const modal = document.querySelector(".modal__habito")
        //modal.style.display = "flex"
        //})
    }
    static createForm(textoBotao, inputDados, temCategorias, temBotaoExcluir) {
        const form = document.createElement('form');
        const botaoEnviar = document.createElement('button');

        botaoEnviar.type = 'submit';
        botaoEnviar.innerText = textoBotao;

        inputDados.forEach(dado => {
            const novoLabel = document.createElement('label');
            const novoInput = document.createElement('input');

            novoLabel.innerText = dado.label;
            novoLabel.htmlFor = dado.name;

            novoInput.type = dado.type;
            novoInput.name = dado.name;
            novoInput.id = dado.name;

            form.append(novoLabel, novoInput);
        });

        if(temCategorias) {
            const categoriaSelect = document.createElement('select');

            categoriaSelect.insertAdjacentHTML('afterbegin', `
                <option value="casa">Casa</option>
                <option value="estudo">Estudo</option>
                <option value="lazer">Lazer</option>
                <option value="trabalho">Trabalho</option>
                <option value="saude">Saúde</option>
            `);

            form.append(categoriaSelect);
        }

        if(temBotaoExcluir) {
            const botaoExcluir = document.createElement('button');

            botaoExcluir.innerText = 'Excluir';

            form.append(botaoExcluir)
        }

        form.append(botaoEnviar);

        return form;
    }


    static modelSucessLogin(sucesso){

        const body = document.querySelector("body")
        const modal = document.createElement("div")
        const container = document.createElement("div")
        const modalInner = document.createElement("div")
        const modalCabecalho = document.createElement("div")
        const figure = document.createElement("figure")
        const imagem = document.createElement("img")
        modal.classList.add("modal")
        if (sucesso === true){
            modal.classList.add("modal--sucesso")
        }
        container.classList.add("container")
        modalInner.classList.add("modal__inner")
        modalCabecalho.classList.add("modal__cabecalho")


        figure.append(imagem)
        modalInner.append(modalCabecalho)
        container.append(modalInner)
        modal.append(container)
        body.append(modal)
}

}
