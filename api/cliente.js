const listarClientes = () => {
    return fetch('http://localhost:3000/clientes', {
        method: "GET"
    }).then(resposta => {
        return resposta.json()
    }).then(json => {
        return json
    });
};

const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    });
    return fetch('http://localhost:3000/clientes', {
        method: "POST",
        headers: { // cabeçalho é o tipo de dados que está enviando para o servidor
            'Content-Type': 'application/json'
        },
        body: json
    }).then(resp => {
        return resp.body
    });
};

const deletaCliente = id => {
    return fetch(`http://localhost:3000/clientes/${id}`, {
        method: "DELETE"
    })
}

const detalhaCliente = id => {
    return fetch(`http://localhost:3000/clientes/${id}`, {
        method: "GET"
    }).then(resposta => {
        return resposta.json();
    });
}

console.log("Teste 1: ", detalhaCliente(5))

const editaCliente = (id, nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    });

    return fetch(`http://localhost:3000/clientes/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
}