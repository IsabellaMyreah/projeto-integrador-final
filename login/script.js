const loginButton = document.querySelector("#btn-avanco");
const fullEmail = document.querySelector("#emailInp");
const fullSenha = document.querySelector("#senha");

let emailErro = document.querySelector("#emailErro");
let senhaErro = document.querySelector("#senhaErro");

loginButton.addEventListener("click", () => {
    if (fullEmail.value.trim() === "" ) {
      (document.querySelector("#emailErro" ).innerHTML = "*Preencha este campo");
   } else {
     emailErro.style.display = "none"
   }
     if(fullEmail.value.trim(true) && fullSenha.value.trim(true)){
        window.location.href = "../home-cadastrado/index.html";
    }
   
  });

  loginButton.addEventListener("click", () => {
    if (fullSenha.value.trim() === "" ) {
      (document.querySelector("#senhaErro" ).innerHTML = "*Preencha este campo");
   } else {
     senhaErro.style.display = "none"
   }
     if(fullEmail.value.trim(true) && fullSenha.value.trim(true) ){
     window.location.href = "../home-cadastrado/index.html";
    }
   
  });

  
// let users = [
//     {
//         ""
//     }
// ]

// let emailUser = document.getElementById("#emailInp").value;
// let senhaUser = document.getElementById("#senha").value;

// loginButton.addEventListener("click", () => {
//     if (fullEmail.value.trim(true) && fullSenha.value.trim(true) ) {
//          alert('Nome de usuário é:');
//    } 
     
//   });

