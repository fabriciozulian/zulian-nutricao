
const tabelaPacientes = document.querySelector("#tabela-pacientes");
tabelaPacientes.addEventListener("dblclick", (x) => {
    x.target.parentElement.classList.add("slideRemove");
    setTimeout( () => {
        x.target.parentElement.remove();
    }, 500)
});



