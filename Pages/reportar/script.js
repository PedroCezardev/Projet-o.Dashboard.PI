// Inicialização do emailjs (fora da função sendMail)
(function () {
    emailjs.init("k6wDAv9YuePqZQpBd"); // chave pública da conta
})();

// Adiciona o evento de clique ao botão de enviar
document.getElementById('emailButton').addEventListener('click', sendMail);

// Função para enviar e-mail
function sendMail() {
    var params = {
        sendername: document.querySelector("#sendername").value,
        to: document.querySelector("#to").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    }

    var serviceID = "service_wvu4x0e"; // serviço email id
    var templateID = "template_tq87c1n"; // servico template id

    // Envia o e-mail usando emailjs
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Mensagem enviada com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao enviar e-mail:", error);
            alert("Erro ao enviar e-mail. Por favor, tente novamente mais tarde.");
        });
}

// // Esta é a função que será chamada quando o botão com id 'emailButton' for clicado
// function sendMail(e) {
//     // Previne o comportamento padrão do clique em um botão dentro de um formulário.
//     e.preventDefault();

//     // Obtém os valores dos campos de estrada do formulário com base em seu respectivos Ids
//     const name = document.getElementById('name').value;
//     const mail = document.getElementById('contato-email').value;
//     const subject = document.getElementById('contato-assunto').value;
//     const message = document.getElementById('contato-message').value;

//     // verifica se todos os campos (nome, e-mail, assunto e mensagem) foram preenchidos pelo usuário.
//     if (name && mail && subject && message) {
//         // se todos os campos tiverem preenchidos, usa a biblioteca 'Email.js'
//         // para enviar o e-mail com os detalhes fornecidos pelo usuário.
//         Email.send({
//             Host: "smtp.elasticemail.com",
//             Username: "pedrocezartesting@gmail.com",
//             Password: "498B706AB239E0272214262D532EAA691FB8",
//             To: "pcdasilvabeserra@gmail.com",
//             From: "pedrocezartesting@gmail.com",
//             name: `Olá sou ${name} Gostaria de entrar em contato!`,
//             Subject: `Olá sou ${name} Gostaria de entrar em contato!`,
//             Body: `Seria sobre: ${subject} \n \n Meu email é: ${mail} \n ${message}`,
//         }).then(() => {
//             // após o envio bem-sucedido exibe um alerta informando que a mensagem foi enviada
//             alert('Mensagem enviada!');
//             // e recarrega a página, para limpar os campos e permitir que o usuário envie mais e-mails.
//             location.reload();
//         });
//     } else {
//         // se algum dos campos estiver em branco, exibre um alerta informando que todos os campos devem
//         // ser preenchidos.
//         alert('Preencha todos os campos!');
//     }
// }   

/* Formulário de contato */
const contatoForm = document.getElementById('contato-form'),
    contatoName = document.getElementById('contato-name'),
    contatoEmail = document.getElementById('contato-email'),
    contatoSubject = document.getElementById('contato-subject'),
    contatoMessage = document.getElementById('contato-message'),
    mensagemErro = document.getElementById('mensagem-erro');

const enviarEmail = (e) => {
    e.preventDefault();

    // Verificar se o campo a ser preenchido tem algum tipo de valor
    if (
        contatoName.value === '' ||
        contatoEmail.value === '' ||
        contatoSubject.value === '' ||
        contatoMessage.value === ''
    ) {

        // Mensagem de erro
        mensagemErro.textContent = 'Preencha todos os campos obrigatórios 😉'
    }

    else {
        // serviceID - TemplateID - #form - publickey
        emailjs.sendForm(
            'service_rj4nwud',
            'template_p2ri2vl',
            '#contato-form',
            'XAvL7RxhjDLFfUFEm'
        ).then(() => {
            // Show menssage and add color, window + dot to open emoji
            mensagemErro.classList.add('color-first');
            mensagemErro.textContent = 'Mensagem enviada com sucesso! ✔️';

            // Remover mensagem depois de 7 segundos
            setTimeout(() => {
                mensagemErro.textContent = '';
            }, 5000);
        },
            (error) => {
                alert('Oxe! Alguma coisa aconteceu de errado...', error);
            }
        );

        // limpar campos de entrada
        contatoName.value = '';
        contatoEmail.value = '';
        contatoSubject.value = '';
        contatoMessage.value = '';
    }
};