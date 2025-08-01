const frm = document.querySelector("form");
const tabela = document.querySelector("#tabela-pacientes");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    //Cria elementos html do paciente
    const tr = document.createElement("tr");

    const nomeTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const alturaTd = document.createElement("td");
    const gorduraTd = document.createElement("td");
    const imcTd = document.createElement("td");
  

    //Adiciona classes css nos elementos criados
    tr.classList.add("paciente");
    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");
  
    
    var paciente = obtemPacienteDoFormulario(frm);
    console.log(paciente);

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
  
    tabela.appendChild(tr);
});

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