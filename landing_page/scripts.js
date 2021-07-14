function handleShowMessageConfirmation(){
    let email = document.getElementById('email');

    if(email.value.trim() != ""){
        alert('Email Recebido! \nEm breve verifique sua caixa de e-mails.')
        localStorage.setItem("email", JSON.stringify(email.value));
        email.value = " ";
    }else{
        alert("Informe o seu e-mail corretamente.");
    }
}