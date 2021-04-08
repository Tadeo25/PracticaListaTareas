import React, {useState, useEffect} from 'react';
import Lista from './Lista'

export default function Formtarea() {
    let tareaLs = JSON.parse(localStorage.getItem('listaTareas'))
    const [tarea,setTarea] = useState('');
    const [listaTareas,setListaTareas] = useState([])

    useEffect(() => {
        console.log('ejecutando ciclo de vida de un componente')
        if(tareaLs){
            console.log('aqui quiero actualizar localStorage')
            localStorage.setItem('listaTareas', JSON.stringify(listaTareas))
        }else{
            console.log('él localStorage no existe')
            localStorage.setItem('listaTareas', JSON.stringify([]))
        }
    },[])

const handleSubmit = (e) =>{

    e.preventDefault();
    console.log(('desde la funcion handleSubmit'))
    setListaTareas([...listaTareas,tarea]);
    // Limpiar el valor del state tarea
    setTarea('');

}

const borrarTareas = (name) => {
let filter = listaTareas.filter((element)=> element !== name);
setListaTareas(filter);
}

  return (
    <>
    <div className="container p-2 my-5 d-flex flex-column bg-aqua">
    <h3>
        Ingrese sus tareas ✏️
        
    </h3>
        <form className="w-100 d-flex " onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Tarea 1..."
            className="form-control"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
            />
            <button className="btn btn-info ml-2">
                <b>AGREGAR</b>
            </button>
        </form>
    </div>
    <section>
        <Lista listaTareas={listaTareas} borrarTareas={borrarTareas}/>
    </section>
    </>
  );
}

