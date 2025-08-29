const btBuscaPaciente = document.querySelector("#busca-paciente");

btBuscaPaciente.addEventListener("click", () => {
    console.log("Teste");

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){   
            const pacientes = JSON.parse(xhr.responseText);
            for(paciente of pacientes){
                if(!validaPaciente(paciente)) return;
                pacienteTr = montaTr(paciente);
                tabela.appendChild(pacienteTr);
            }
        } else{
            console.log(xhr.status);
            console.log(xhr.response);
        }
    })
    
    xhr.send();

})