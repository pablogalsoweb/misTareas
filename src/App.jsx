import { useState, useEffect } from 'react'
import { Heading, Input } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import './css/App.css'
import {ListaDeTareas} from "./componentes/listTareas";
import {FormTarea} from "./componentes/formTarea";
import './assets/eventos.js';
import { abreModalForm } from './assets/funciones.js';
import './css/style.css'



function App() {
   const LocalStorageTareas = localStorage.getItem('tareasGrabadas');

   const [tareas, setTareas] = useState([]);

   let totalTareas = tareas.length;
   let tareasFinalizadas = tareas.filter(tarea => tarea.finalizada).length;
   let tareasPendientes = totalTareas - tareasFinalizadas;

   const [inputSearch, setInputSearch] = useState('');
   const grabaValorInputEnEstado = (evento) => {
       let cadenaInput = evento.target.value;
       setInputSearch(cadenaInput);
   }

   useEffect(() => {
       localStorage.setItem('tareasGrabadas', JSON.stringify(tareas));
   }, [tareas]);

   useEffect(() => {
       const recuperoTareas = JSON.parse(LocalStorageTareas);
       if(recuperoTareas) setTareas(recuperoTareas);
   }, []);
 
   // console.log(tareas);
  return (
    <>
       <Heading mb="4">Mi lista de tareas</Heading>
       <Input placeholder='Buscar tareas por texto..' value={inputSearch} onChange={grabaValorInputEnEstado} />
       <div id="contenedorTexto">
            <div className="textoTotal">Total: {totalTareas} </div>
            <div className="textoTotal verde">Completadas: {tareasFinalizadas} </div>
            <div className="textoTotal">Pendientes: {tareasPendientes} </div>
       </div>
       <div className="btn_mas" onClick={abreModalForm}><AddIcon></AddIcon></div>
       <FormTarea setTareas={setTareas} />
       <ListaDeTareas tareas={tareas} setTareas={setTareas} inputSearch={inputSearch}></ListaDeTareas>
    </>
  )
}

export default App
