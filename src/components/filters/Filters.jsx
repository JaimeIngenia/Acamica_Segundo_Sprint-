import react from "react";
import { useState } from "react/cjs/react.development";
import styles from "./Filters.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { hotelsData } from "../../statics/data";

function Filter ({hotelesFiltradosFecha,fechaDesdeNatural,fechaHastaNatural,pais, setPais,precio,setPrecio, tamanio, setTamanio,fechaDesde,setFechaDesde,fechaHasta,setFechaHasta,DS_desde,DS_hasta}){ 

    const manejarFechaDesde = (e) =>{
        setFechaDesde(e.target.value)

    }
    const manejarFechaHasta =(e)=>{
        setFechaHasta(e.target.value)
    }
    const limpiarFiltros = ()=>{
    // console.log(FechaDesde.target.value)

        setFechaDesde("")
        setFechaHasta("")
        setPais("todos")
        setPrecio("todos")
        setTamanio("todos")
    }
    const manejarCambioPais=(e)=>{
        setPais(e.target.value)
    }
    const manejarCambioPrecio=(evento)=>{
        setPrecio(evento.target.value)
    }
    const manejarCambioTamanio=(evento)=>{
        setTamanio(evento.target.value)
    }    
        return(
        <div className={styles.tituloFilter}>
            {/* <p>soy desde : {fechaDesde}</p>
            <p>soy hasta: {fechaHasta}</p> */}
            <div className={styles.desdeHasta}>
                <div className={styles.desde}>
                    <h5>{"Desde     :"}</h5>
                    <input  value={fechaDesde} name="fd" type="date" onChange={manejarFechaDesde}/>
                </div>
                <div className={styles.desde}>
                    <h5>{"Hasta     :"}</h5>
                    <input value={fechaHasta} name="fh" type="date" onChange={manejarFechaHasta} />
                </div>
            </div>

            {/* {hotelesFiltradosFecha.map((hotel)=>{
                return <h2>{hotel.name}</h2>
            })}   */}
            <select value={pais} name="" id="" onChange={manejarCambioPais} >
                <option value="todos Los">Todos los paises</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
            </select>
            <select value={precio} name="" id="" onChange={manejarCambioPrecio} >
                <option value="todos">Todos los precios</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>
            <select value={tamanio} name="" id="" onChange={manejarCambioTamanio} >
                <option value="todos">Todos los tamaños</option>
                <option value="pequeño">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
            </select>
            <button onClick={limpiarFiltros} className={ styles.boton}>
                <FontAwesomeIcon icon={faTrash}/>
                Limpiar
            </button>
        </div> 
    )
}

export default Filter;