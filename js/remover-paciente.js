var pacientes = document.querySelector("#tabela-pacientes");

    pacientes.addEventListener("dblclick", (paciente) => {
        paciente.target.parentElement.classList.add("paciente-out");
        setTimeout( function(){
            paciente.target.parentElement.remove();
        },500);
    })


console.log(pacientes);