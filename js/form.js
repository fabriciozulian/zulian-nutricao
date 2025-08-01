const frm = document.querySelector("form");
const tabela = document.querySelector("#tabela-pacientes");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    var paciente = obtemPacienteDoFormulario(frm);
    var pacienteTr = montaTr(paciente);
    tabela.appendChild(pacienteTr);

});

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome : form.inNome.value,
        peso : form.inPeso.value,
        altura : form.inAltura.value,
        gordura : form.inGordura.value,
        imc : null
    }
    paciente.imc = calculaImc(paciente);
    return paciente;
}

function montaTr(paciente){
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

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    frm.inNome.value = "";
    frm.inPeso.value = "";
    frm.inAltura.value = "";
    frm.inGordura.value = "";
  
    tr.appendChild(nomeTd);
    tr.appendChild(pesoTd);
    tr.appendChild(alturaTd);
    tr.appendChild(gorduraTd);
    tr.appendChild(imcTd);

    return tr;
}