
let pacientes = document.querySelectorAll(".paciente");
for(paciente of pacientes){
    calculaImc(paciente);
}

function calculaImc(paciente){
    const peso = (paciente.querySelector(".info-peso")).textContent;
    const altura = (paciente.querySelector(".info-altura")).textContent;
    const imc = paciente.querySelector(".info-imc");
    let alturaStatus = true;
    let pesoStatus = true
    
    if(peso <= 0 || peso >=1000){
        imc.textContent = "Peso inválido";
        pesoStatus = false;
    }

    if(altura <=0 || altura >= 3.00){
        imc.textContent = "Altura é inválida";
        alturaStatus = false;
    }
    
    if(alturaStatus && pesoStatus){
        imc.textContent = (peso/(altura*altura)).toFixed(2);
    }
}