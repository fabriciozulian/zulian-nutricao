const frm = document.querySelector("form");
const tabela = document.querySelector("#tabela-pacientes");


atualizarDados();

function atualizarDados(){
    let pacientes = document.querySelectorAll(".paciente");
    for (paciente of pacientes) {
        calculaImc(paciente);
    }
}

function calculaImc(paciente) {
    const peso = Number((paciente.querySelector(".info-peso")).textContent);
    const altura = Number((paciente.querySelector(".info-altura")).textContent);
    const imc = paciente.querySelector(".info-imc");
    let alturaStatus = true;
    let pesoStatus = true

    if (peso <= 0 || peso >= 1000) {
        imc.textContent = "Peso inválido";
        pesoStatus = false;
        imc.style.background = "red";
    }

    if (altura <= 0 || altura >= 3.00) {
        imc.textContent = "Altura é inválida";
        alturaStatus = false;
    }

    if (alturaStatus && pesoStatus) {
        imc.textContent = (peso / (altura * altura)).toFixed(2);
    }
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const tr = document.createElement("tr");
    tr.classList.add("paciente");
    const nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = frm.inNome.value;
    const pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    pesoTd.textContent = frm.inPeso.value;
    const alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    alturaTd.textContent = frm.inAltura.value;
    const gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    gorduraTd.textContent = frm.inGordura.value;
    const imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");
    imcTd.textContent = 0;
    tr.appendChild(nomeTd);
    tr.appendChild(pesoTd);
    tr.appendChild(alturaTd);
    tr.appendChild(gorduraTd);
    tr.appendChild(imcTd);
    tabela.appendChild(tr);
    atualizarDados();
})