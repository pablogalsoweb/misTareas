import {Tarea} from "./tarea";

export function ListaDeTareas({tareas, setTareas, inputSearch}){

    const deleteTarea = (id) =>{
        const copiaTareas = [...tareas];
        const indexTarea = copiaTareas.findIndex(
            (copia) => copia.id == id
        );
        copiaTareas.splice(indexTarea,1);
        setTareas(copiaTareas);
    }

    const finalizarTarea = (id) =>{
        const copiaTareas = [...tareas];
        const indexTarea = copiaTareas.findIndex(
            (copia) => copia.id == id
        );

        copiaTareas[indexTarea].finalizada = 1;
        setTareas(copiaTareas);
    }

    const activarTarea = (id) =>{
        const copiaTareas = [...tareas];
        const indexTarea = copiaTareas.findIndex(
            (copia) => copia.id == id
        );

        copiaTareas[indexTarea].finalizada = 0;
        setTareas(copiaTareas);
    }



    const tareasBuscadas = tareas.filter(
        (tarea) => {
            let textoBuscadoMinusculas = inputSearch.toLowerCase();
            let tituloTareaMinuscula = tarea.titulo.toLowerCase();
            let tareasEncontradas = tituloTareaMinuscula.includes(textoBuscadoMinusculas);
            if(tareasEncontradas){
                 return tareasEncontradas;
            }
        }
    );

    if(tareasBuscadas.length > 0){
        return (
            tareasBuscadas.map((tarea) => (
                <Tarea
                    key={tarea.id}
                    tarea={tarea}
                    onDeleteTarea={ () => deleteTarea(tarea.id) }
                    onFinalize={ () => finalizarTarea(tarea.id) }
                    onActiveTarea={ () => activarTarea(tarea.id) }>
                </Tarea>
            ))

        );
    }
    else{
        return (
            <p>Sin resultados</p>
        );
    }


}