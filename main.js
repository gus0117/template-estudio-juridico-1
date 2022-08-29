function onClick(event) {
    event.preventDefault();

    const userRegister = {
        userName: document.getElementById("name"),
        userEmail: document.getElementById("email"),
        message: document.getElementById("message")
    }

    Swal.fire({
        title: 'Gracias',
        text: 'Su mensaje fue enviado con exito.',
        icon: 'success',
        confirmButtonText: 'OK'
    })
}

function cleanForm() {
    let form = document.getElementById("form");
    form.reset();
}

const submit = document.getElementById("submit");
submit.addEventListener("click", onClick);