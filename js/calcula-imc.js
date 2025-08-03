atualizarDados();

function atualizarDados(){
    let pacientes = document.querySelectorAll(".paciente");
    for (paciente of pacientes) {
        
        const tdPeso = paciente.querySelector(".info-peso");
        const tdAltura = paciente.querySelector(".info-altura");
        const tdImc = paciente.querySelector(".info-imc");
    

        const pesoEhValido = validaPeso(tdPeso.textContent);
        const alturaEhValido = validaAltura(tdAltura.textContent);

        if(!pesoEhValido){
            tdImc.textContent = "Peso inválido!"
            tdImc.style.backgroundColor = "red";
        }

        if(!alturaEhValido){
            tdImc.textContent = "Altura inválida!"
            tdImc.style.backgroundColor = "red";
        }

        if(pesoEhValido && alturaEhValido){
            paciente.querySelector(".info-imc").textContent = calculaImc(tdPeso.textContent, tdAltura.textContent);
        }

    }
}

function calculaImc(xpeso, xaltura) {
    const peso = Number(xpeso);
    const altura = Number(xaltura);
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso){
    if(peso >=0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}


