const removeCliente = id => {
    if (confirm("Deseja deletar o cliente ?")) {
        deletaCliente(id)
        window.location.reload()
    }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (id, cpf, nome) => {
    const linha = document.createElement('tr');
    const conteudoLinha =
        `
        <td>${id}</td>
        <td class="text-center">${cpf}</td>
        <td class="text-center">${nome}</td>
        <td class="text-center">
            <a href="edita-clientes.html?id=${id}" type="button" class="btn btn-primary">Editar</a>
            <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Remover</button>
        </td >
    `

    linha.innerHTML = conteudoLinha;
    return linha;
};

listarClientes().then(exibe => {
    exibe.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.id, indice.cpf, indice.nome))
    })
})