const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
   
    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const sexo = document.getElementById("sexo");
    const checkbox = document.getElementById("s");
   
  

    
    // Validação
    if(nome.value.trim() === "") {
        alert("preencha o nome");
        return false;
    }

     if(telefone.value.trim() === "") {
        alert("preencha o telefone");
        return false;
    }

    // Limpar campos 
    nome.value = "";
    telefone.value = "";
    email.value = "";
    checkbox.checked = false;


    alert("Formulário enviado!");
    
});