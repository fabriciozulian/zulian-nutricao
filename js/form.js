const frm = document.querySelector("form");
const tabela = document.querySelector("#tabela-pacientes");
const msgErro = document.querySelector("#mensagemErro");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    msgErro.innerHTML = "";
    var paciente = obtemPacienteDoFormulario(frm);
    if(!validaPaciente(paciente)) return;
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
    paciente.imc = calculaImc(paciente.peso, paciente.altura);
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

function validaPaciente(paciente){
    const pesoEhValido = validaPeso(paciente.peso);
    const alturaEhValido = validaAltura(paciente.altura);
    const erros = [];
    
    if(!pesoEhValido) erros.push("Peso é inválido!");
    if(!alturaEhValido) erros.push("Altura é inválida!");
    if(paciente.nome.length == 0) erros.push("O campo nome não pode ser vazio!");
    if(paciente.gordura.length == 0) erros.push("O campo %Gordura não pode ser vazio!");
    if(paciente.peso.length == 0) erros.push("O campo peso não pode ser vazio!");
    if(paciente.altura.length == 0) erros.push("O campo altura não pode ser vazio!")


    exibirErros(erros);
    
    if(erros.length > 0){
        return false;
    }else{
        return true;
    }
}

function exibirErros(erros){
    if(erros.length > 0){
        for(erro of erros){
            msgErro.appendChild(montaLi(erro));
        }
    }
}

function montaLi(erro){
    const li = document.createElement("li");
    li.textContent = erro;
    return li;
}


