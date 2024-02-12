
export function hayCamposVacios({refTitulo,refDate}){ 

    vaciarErrores();
    let controlError = ponerErrores({refTitulo,refDate});

    return controlError;
}

 function ponerErrores({refTitulo,refDate}){
    let titulo = refTitulo.current.value;
    let date = refDate.current.value; 
    let controlError = false;

    if(titulo.length < 2){

        if(!document.getElementById('tituloError')) {
            const nuevoElemento = document.createElement('div');
            nuevoElemento.id = 'tituloError';
            nuevoElemento.classList.add('avisoError');
            nuevoElemento.textContent = `*Tienes que escribir una tarea`;
            refTitulo.current.insertAdjacentElement('afterend', nuevoElemento);
        }
        controlError = true;
    }

    if(date == ''){

        if(!document.getElementById('dateError')) {
            const nuevoElemento = document.createElement('div');
            nuevoElemento.id = 'dateError';
            nuevoElemento.classList.add('avisoError');
            nuevoElemento.textContent = `*Tienes que escribir una fecha`;
            refDate.current.insertAdjacentElement('afterend', nuevoElemento);
        }
        controlError = true;
    }

    return controlError;

}

function vaciarErrores(){
    document.getElementById('tituloError') ? document.getElementById('tituloError').remove() : '';
    document.getElementById('dateError') ? document.getElementById('dateError').remove() : '';
}


export const abreModalForm = () =>{
    const capaFormTarea = document.querySelector('.formtarea');
    capaFormTarea.classList.remove('oculto');
}
