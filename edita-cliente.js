const pegaURL = new URL(window.location)
const id = pegaURL.searchParams.get('id')

const inputCPF = document.querySelector('[data-cpf]')
const inputNome = document.querySelector('[data-nome]')

detalhaCliente(id).then(data => {
    console.log("Data: ", data)
    inputNome.value = data.nome
    inputCPF.value = data.cpf
})

const formEdicao = document.querySelector('[data-form]')

const alert = (classe, mensagem) => {
    const linha = document.querySelector('[data-sucesso]')
    const conteudoLinha = `
    <div class="${classe}">${mensagem}</div>`
    linha.innerHTML = conteudoLinha;
    return linha;
}

/* const mensagemSucesso = (mensagem) => {
    const linha = document.createElement('tr');
    const conteudoLinha =
        `
        <div class="alert alert-success" role="alert">
            ${mensagem }
        </div>
    `

    linha.innerHTML = conteudoLinha;
    return linha;
}

const mensagemErro = (mensagem) => {
    const linha = document.createElement('tr');
    const conteudoLinha =
        `
        <div class="alert alert-danger" role="alert">
            ${mensagem }
        </div>
    `

    linha.innerHTML = conteudoLinha;
    return linha;
} */

formEdicao.addEventListener("submit",
    event => {
        event.preventDefault()

        if (!validaCPF(inputCPF.value)) {
            alert("ESSE CPF NÃO EXISTE")
            return
        }

        editaCliente(id, inputNome.value, inputCPF.value).then(resposta => {
            if (resposta.status === 200) {
                formEdicao.appendChild(alert(
                    "alert alert-success",
                    "Cliente editado com sucesso!"
                ))
            } else {
                formEdicao.appendChild(alert(
                    "alert alert-danger",
                    "O cliente não pode ser editado!"))
            }
        })
    })