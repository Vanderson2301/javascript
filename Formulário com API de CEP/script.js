// Pegar os valores dos inputs HTML
const inputCep = document.getElementById("cep");
const inputCidade = document.getElementById("cidade");
const inputEstado = document.getElementById("estado");
const inputBairro = document.getElementById("bairro");
const inputRua = document.getElementById("rua");
const inputComplemento = document.getElementById("complemento");
const divResultado = document.getElementById("resultado");

// Função de consulta do CEP
async function validarCep() {
    const cep = inputCep.value.replace(/\D/g, "");

    if (cep.length !== 8) {
        inputCep.classList.add("is-invalid");
        divResultado.innerHTML = "<p style='color:red;'>Digite um CEP válido com 8 dígitos.</p>";
        limparEndereco();
        return false;
    }

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();

        if (dados.erro) {
            inputCep.classList.add("is-invalid");
            divResultado.innerHTML = "<p style='color:red;'>CEP não encontrado.</p>";
            limparEndereco();
            return false;
        }

        // Preencher os campos automaticamente
        inputRua.value = dados.logradouro || "";
        inputBairro.value = dados.bairro || "";
        inputCidade.value = dados.localidade || "";
        inputEstado.value = dados.uf || "";
        inputComplemento.value = dados.complemento || "";
        inputCep.classList.remove("is-invalid");
        divResultado.innerHTML = "";
        return true;

    } catch (erro) {
        inputCep.classList.add("is-invalid");
        divResultado.innerHTML = "<p style='color:red;'>Erro ao consultar o CEP.</p>";
        limparEndereco();
        return false;
    }
}

// Limpar campos de endereço
function limparEndereco() {
    inputRua.value = "";
    inputBairro.value = "";
    inputCidade.value = "";
    inputEstado.value = "";
    inputComplemento.value = "";
}

// Evento blur para validar CEP automaticamente
inputCep.addEventListener("blur", validarCep);

// --- Validação de Email com jQuery ---
$(document).ready(function () {
    $("#email").on("blur", function () {
        const email = $(this).val();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            $(this).addClass("is-invalid").removeClass("is-valid");
            $("#resultado").html("<p style='color:red;'>Email inválido</p>");
        } else {
            $(this).removeClass("is-invalid").addClass("is-valid");
            $("#resultado").html("");
        }
    });
});

// --- Mostrar/Ocultar senha ---
function toggleSenha() {
    const input = document.getElementById("senha");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// --- Botão Cadastrar ---
document.getElementById("cadastrar").addEventListener("click", async function () {
    const cepValido = await validarCep();
    const email = $("#email").val();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cepValido) {
        return;
    }

    if (!regex.test(email)) {
        $("#email").addClass("is-invalid");
        $("#resultado").html("<p style='color:red;'>Digite um email válido antes de cadastrar.</p>");
        return;
    }

    divResultado.innerHTML = "<p style='color:green;'>Cadastro realizado com sucesso!</p>";
});
