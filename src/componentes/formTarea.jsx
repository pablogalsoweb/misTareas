import {Button, Input} from "@chakra-ui/react";
import {useRef, useState} from 'react'
import { v4 as uuid} from 'uuid'
import { hayCamposVacios } from './../assets/funciones.js'; 

export function FormTarea({ setTareas }){

    let refTitulo = useRef();
    let refDate = useRef();
    //const fechaActual = new Date().toISOString().slice(0, 16);

    const meteTarea = () => {
        let titulo = refTitulo.current.value;
        let date = refDate.current.value;
        let id = uuid();
        if(hayCamposVacios({refTitulo,refDate})) return false;
        setTareas(
            (tareasAnteriores) => {
                return [...tareasAnteriores, {id : id, titulo : titulo, fecha : date, finalizada : 0}]
            }
        );

        refTitulo.current.value = null;
        refDate.current.value = null;
        const capaFormTarea = document.querySelector('.formtarea');
        capaFormTarea.classList.add('oculto');
    }

    return (
        <div className="formtarea oculto">
            <Input ref={refTitulo} type='text' name='titulo' className='jsx_titulo' placeholder='Escribe una tarea' size='md' mb='2'/>
            <Input id='jsx_fecha' ref={refDate} name='fecha' className='jsx_date' placeholder='Fecha y hora de la tarea' size='md' type="date" mt='4' mb='2'/>
            <Button onClick={meteTarea} colorScheme='facebook' width='200px' mt='4'>Añadir nueva tarea</Button>
        </div>
    )
}