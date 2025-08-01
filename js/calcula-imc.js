atualizarDados();

function atualizarDados(){
    let pacientes = document.querySelectorAll(".paciente");
    for (paciente of pacientes) {
        const x = {
            peso : Number(paciente.querySelector(".info-peso").textContent),
            altura : Number(paciente.querySelector(".info-altura").textContent)
        }
        paciente.querySelector(".info-imc").textContent = calculaImc(x);
    }
}

function calculaImc(paciente) {
    const peso = Number(paciente.peso);
    const altura = Number(paciente.altura);
        return (peso / (altura * altura)).toFixed(2);
}


