//class contato

class Contato {
constructor(nome, sobrenome, email, cpf, telefone, contato){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.contato = contato;
}
    
}

function Post(form) {
    // Adicionei uma verificação de segurança para o checkbox (embora o 'required' no HTML já ajude)
    if (!form.elements.namedItem("aceite-termos").checked) {
        alert("Você precisa aceitar os Termos e Condições para enviar o formulário.");
        return false;
    }

    let data = new Contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);

            console.log(data);
            form.reset();

            // Desabilita o botão novamente após o reset do formulário
            document.getElementById("btn-enviar").disabled = true;

            alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}. Os seus dados foram encaminhados com sucesso!`);

            return false
  
}

// Função para habilitar/desabilitar o botão de envio (Passo 4)
function toggleSubmitButton() {
    const checkbox = document.getElementById("aceite-termos");
    const submitButton = document.getElementById("btn-enviar");
    
    // O botão 'Enviar' será habilitado SE o checkbox estiver marcado
    submitButton.disabled = !checkbox.checked;
}

// A função Enviar() que estava no código original foi encapsulada por um erro de sintaxe, 
// e como ela não é usada após o ajuste para Post(this), ela pode ser removida ou corrigida.
// Mantendo a estrutura original, mas corrigindo a sintaxe de fechamento do }
function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}
// Removi o '}' extra do final do arquivo original que causava um erro de sintaxe.