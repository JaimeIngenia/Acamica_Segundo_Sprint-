import react from "react";
// import { hotelsData } from "../../statics/data";
import styles from "./Card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { hotelsData } from "../../statics/data";



function Card ({hotel}){
    console.log(hotel.availabilityFrom);
    const opciones ={
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
      };
       let fechaDesdeNatural2 = new Date(hotel.availabilityFrom).toLocaleDateString("es-Co",opciones)
       let fechaHastaNatural2 = new Date(hotel.availabilityTo).toLocaleDateString("es-Co",opciones)


    const reservar =()=> {
        alert("Hotel reservado")

    };


    return(
        <div className={styles.card}>
            
            <img 
            src={hotel.photo} 
            className={styles.image}
            alt="" 
            />
            <h2 className={styles.titulo}>{hotel.name}</h2>
            <div className={styles.contenedorFecha}>
                <h4>Desde el {fechaDesdeNatural2}</h4>
            </div> 
            <div className={styles.contenedorFecha}>
                <h5>Hasta el {fechaHastaNatural2}</h5>
            </div> 
            <div className={styles.contenedor}>
                <p>{hotel.description}</p>
            </div>

            {/* ----------gps---------- */}
            <div className={styles.ubicacion}>
                <div className={styles.bed}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.cama}/>
                </div>
                <div className={styles.gps}>
                    <h5 className={styles.gpsTitulo}>{hotel.city},{" "}{hotel.country}</h5>
                </div>
            </div>
            {/* ----------gps---------- */}





            {/* ----------habitaciones---------- */}
            <div className={styles.habitaciones}>
                
                <div className={styles.tamanio}>
                    <div className={styles.tamanioContenedorIcon} >
                        <FontAwesomeIcon className={styles.tamanioIcon} icon={faTrash} />
                    </div>
                    <div className={styles.text}>
                        <h5 className={styles.parrafo2}>{hotel.rooms}{" "} Habitaciones </h5>
                    </div>    
                </div>


                <div className={styles.precio}>
                    {Array.from({length:hotel.price}).map((i)=>{
                        return <span >$</span>;
                    })}
                    {Array.from({length: 4 - hotel.price}).map((i)=>{
                        return <span className={styles.opaco}>$</span>;
                    })}
                </div>  
            </div>
            {/* ----------habitaciones---------- */}
            
            

            <button className={styles.boton} onClick={reservar}><h3>Reservar</h3></button>
        </div>
    )
}

export default Card