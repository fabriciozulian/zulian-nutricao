const frm = document.querySelector("form");
const tabela = document.querySelector("#tabela-pacientes");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    var paciente = obtemPacienteDoFormulario(frm);
    var pacienteTr = montaTr(paciente);
    tabela.appendChild(pacienteTr);
    frm.reset();

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

    tr.classList.add("paciente");

    tr.appendChild(montaTd(paciente.nome, "info-nome"));
    tr.appendChild(montaTd(paciente.peso, "info-peso"));
    tr.appendChild(montaTd(paciente.altura, "info-altura"));
    tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    tr.appendChild(montaTd(paciente.imc, "info-imc"));

    return tr;
}

