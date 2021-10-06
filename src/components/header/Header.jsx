import react from "react";
import styles from "./Header.module.css"
// import {hotelsData} from "../../statics/data"


function Header ({pais,precio,tamanio, fechaDesdeNatural, fechaHastaNatural}){
    return(
        
        <div className={styles.tituloHeader}>
            <div className={styles.contenedor}>
                {
                    pais!=="todos"?
                    <h3 className={styles.subtitulo}>Su país seleccionado es:{pais} </h3>
                    :
                    <h3 className={styles.subtitulo}>Escoger país  </h3>
                }
                {
                    precio!=="todos"?
                    <h3 className={styles.subtitulo}>Su precio seleccionado es:{precio}{"$"} </h3>
                    :
                    <h3 className={styles.subtitulo}>Escoger precio  </h3>
                }
                {
                    tamanio!=="todos"?
                    <h3 className={styles.subtitulo}>Su Tamaño seleccionado es:{tamanio} </h3>
                    :
                    <h3 className={styles.subtitulo}>Escoger Tamaño  </h3>
                }
                {
                    fechaDesdeNatural!==""?
                    <h3 className={styles.subtitulo}>Su fecha "Desde" seleccionada es:{fechaDesdeNatural} </h3>
                    :
                    <h3 className={styles.subtitulo}>Escoger Fecha Desde  </h3>
                }
                {
                    fechaHastaNatural!==""?
                    <h3 className={styles.subtitulo}>Su fecha "Hasta" seleccionada es:{fechaHastaNatural} </h3>
                    :
                    <h3 className={styles.subtitulo}>Escoger Fecha Hasta  </h3>
                }
{/* 
                <h3 className={styles.subtitulo}>La fecha desde es        : {fechaDesdeNatural}</h3>
                <h3 className={styles.subtitulo}>La fecha hasta es        : {fechaHastaNatural}</h3> */}
            </div>
        </div>
    )
}

export default Header;