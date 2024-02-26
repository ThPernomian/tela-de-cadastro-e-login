/*Puxa os valores que aparecem escritos no INPUT de cada campo */
const inNome = document.querySelector(".inNome")
const inSenha = document.querySelector(".inSenha")
const inSenhaConfirma = document.querySelector(".inSenhaConfirma")

/*Apresenta as mensagens que estão escondidas*/
const msgNome = document.querySelector(".msgNome")
const msgSenha = document.querySelector(".msgSenha")
const msgSenhaConfirma = document.querySelector(".msgSenhaConfirma")
const msgCadastrando = document.querySelector(".msgCadastrando")
const msgErroCadastro = document.querySelector(".msgErroCadastro")

/*Apresenta os títulos usados sobre cada campo de preenchimento*/
const nome = document.querySelector(".nome")
const senha = document.querySelector(".senha")
const senhaConfirm = document.querySelector(".senhaConfirm")

/*Variaveis para ajudar na validação/preenchimento dos campos*/
let validNome = false
let validSenha = false
let validSenhaConfirm = false

/*Variaveis dos botões utilizados */
const btnCadastrar = document.querySelector(".cadastrar")
const btnCancelar = document.querySelector(".cancelar")

/*Chama as funções declaradas nele*/
btnCadastrar.addEventListener("click", () => {
    validar()
    cadastrar()
})

/*Limpa todos os campos de preenchimento */
btnCancelar.addEventListener("click", () => {
    inNome.value = ""
    inSenha.value = ""
    inSenhaConfirma.value = ""
    inNome.focus()
})

function cadastrar() {
    let nome = inNome.value
    let senha = inSenha.value
    let senhaConfirma = inSenhaConfirma.value

    /*Condicional para verificar se os campos são true ou false no preenchimento*/
    if (validNome && validSenha && validSenhaConfirm) {
        //obtem do localStorage se existe uma lista ou não, se existir uma lista
        //use-a senão crie uma vazia.
        let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios") || "[]")

        /*método push na lista para obter os nomes e salvar nas novas chaves*/
        listaUsuarios.push({
            nomeCad: nome,
            senhaCad: senha,
        })

        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))

        msgCadastrando.style.display = "block"

        /*setTimeout para apagar a mensagem e redirecionar o usuário 
        se o cadastro estiver certo*/
        setTimeout(function () {
            msgCadastrando.style.display = "none"
        }, 3000)
        window.location.href = "http://127.0.0.1:5500/login.html"
    } else {
        msgErroCadastro.style.display = "block"
        setTimeout(() => {
            msgErroCadastro.style.display = "none"
        }, 3000);
    }
    console.log(localStorage.getItem("nome"))
}

/*Função para validar as condições de preenchimento dos campos*/
function validar() {

    //O tamanho do nome precisa ser maior que 2.
    if (inNome.value.length <= 2) {
        msgNome.style.display = "block"
        setTimeout(() => {
            msgNome.style.display = "none"
        }, 3000)

        //O tamanho da senha precisa ser maior que 6.    
    } else if (inSenha.value.length < 6) {
        msgSenha.style.display = "block"
        setTimeout(function () {
            msgSenha.style.display = "none"
        }, 3000)
        //A senha e confirmação de senha precisam ser iguais.    
    } else if (inSenhaConfirma.value.length != inSenha.value.length) {
        msgSenhaConfirma.style.display = "block"
        setTimeout(function () {
            msgSenhaConfirma.style.display = "none"
        }, 3000)
    }
}

/*Mensagens que aparecerão caso o campo não seja preenchido corretamente*/
nome.addEventListener("keyup", () => {
    if (inNome.value.length <= 2) {
        nome.setAttribute("style", "color: red")
        validNome = false
    } else {
        nome.setAttribute("style", "color: green")
        validNome = true
    }
})

/*Mensagens que aparecerão caso o campo não seja preenchido corretamente*/
senha.addEventListener("keyup", () => {
    if (inSenha.value.length < 6) {
        senha.setAttribute("style", "color: red")
        validSenha = false
    } else {
        senha.setAttribute("style", "color: green")
        validSenha = true
    }
})

/*Mensagens que aparecerão caso o campo não seja preenchido corretamente*/
senhaConfirm.addEventListener("keyup", () => {
    if (inSenhaConfirma.value.length != inSenha.value.length) {
        senhaConfirm.setAttribute("style", "color: red")
        validSenhaConfirm = false
    } else {
        senhaConfirm.setAttribute("style", "color: green")
        validSenhaConfirm = true
    }
})
