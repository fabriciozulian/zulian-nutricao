const inputFiltra = document.querySelector("#filtrar-tabela");

inputFiltra.addEventListener("input", (x) => {
    const pacientes = document.querySelectorAll(".paciente");
    //console.log(x.target.value);
    const expressao = new RegExp(x.target.value,"i");
    if(x.target.value.length > 0){
        for (paciente of pacientes){
            if(expressao.test(paciente.querySelector(".info-nome").textContent)){
                console.log(paciente.querySelector(".info-nome").textContent);
                console.log(paciente);
                paciente.classList.remove("invisivel");
            }else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
        for (paciente of pacientes){
            paciente.classList.remove("invisivel");
        }
    }
    })