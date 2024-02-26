/*Botão para entrar e validar Login */
const btnEntrar = document.querySelector(".entrar")

/*Botão que chama a função */
btnEntrar.addEventListener("click", ()=>{
   entrar()
})


function entrar(){
    const inNome = document.querySelector(".inNome")
    const inSenha = document.querySelector(".inSenha")
    const msgErro = document.querySelector(".msgErro")
    const msgEntrando = document.querySelector(".msgEntrando")

    /*Ela recebe um objeto e abaixo eu digo para ela quais campos ela receberá */
    let listaUsuarios = []

    /*Objeto com campos/atributos determinados que virão do localStorage */
    let userValid ={
        nome: "",
        senha: ""
    }

    /*Converte os dados do localStorage */
    listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))

    /*O forEach varre o meu array e se estiver certo, será adicionado ao objeto */
    listaUsuarios.forEach((item) =>{
        if(inNome.value == item.nomeCad && inSenha.value == item.senhaCad){
            /*objeto que será incrementado */
            userValid ={
                nome: item.nomeCad,
                senha: item.senhaCad
            }
        }
    })

    console.log(userValid)

    /*Faz a validação dos campos e apresenta as mensagens de sucesso e erro */
    if(inNome.value == userValid.nome && inSenha.value == userValid.senha){
        msgEntrando.style.display = "block"
        setTimeout(function () {
            msgEntrando.style.display = "none"
        }, 3000);
        window.location.href = "https://github.com/ThPernomian?tab=repositories"
    }else{
        msgErro.style.display = "block"
        setTimeout(function () {
            msgErro.style.display = "none"
        }, 3000);
            
    }
}

