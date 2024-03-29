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
    }
}
