export default class Dom {
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
            novoInput.placeholder = dado.placeholder;

            form.append(novoLabel, novoInput);
        });

        if(temCategorias) {
            const categoriaSelect = document.createElement('select');

            categoriaSelect.innerHTML = `
                <option value="casa">Casa</option>
                <option value="estudo">Estudo</option>
                <option value="lazer">Lazer</option>
                <option value="trabalho">Trabalho</option>
                <option value="saude">Saúde</option>
            `;

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
}
