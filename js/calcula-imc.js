const frm = document.querySelector("form");
const tabela = document.querySelector("#tabela-pacientes");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tr = document.createElement("tr");

    const nomeTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const alturaTd = document.createElement("td");
    const gorduraTd = document.createElement("td");
    const imcTd = document.createElement("td");
    
    tr.classList.add("paciente");
    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");
    
    
    nomeTd.textContent = frm.inNome.value;
    pesoTd.textContent = frm.inPeso.value;
    alturaTd.textContent = frm.inAltura.value;
    gorduraTd.textContent = frm.inGordura.value;
    imcTd.textContent = 0;

    tr.appendChild(nomeTd);
    tr.appendChild(pesoTd);
    tr.appendChild(alturaTd);
    tr.appendChild(gorduraTd);
    tr.appendChild(imcTd);
    tabela.appendChild(tr);
    
    frm.inNome.value = "";
    frm.inPeso.value = "";
    frm.inAltura.value = "";
    frm.inGordura.value = "";

    calculaImc(tr);
})