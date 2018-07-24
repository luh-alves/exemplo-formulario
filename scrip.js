let nome = document.querySelector("#nome")
let sobrenome = document.querySelector("#sobrenome")
let email = document.querySelector("#email")
let botao = document.querySelector("button")

botao.onclick = validar;

function validar() {
    if (nome.value == "" || sobrenome.value == "" || email.value == "") {
        alert("É obrigatório o preenchimento de todos os campos.");
    } else {
        alert("Cadastro realizado com sucesso!");
    }
}