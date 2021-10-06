import Card from "./components/card/Card";
import Cards from "./components/cards/Cards";
import Filter from "./components/filters/Filters";
import Header from "./components/header/Header";
import styles from "./App.module.css"
import { hotelsData } from "./statics/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Alerta from "./components/alerta/Alerta";


function App() {

  
  
  let[pais,setPais]=useState("todos");
  let [precio,setPrecio]=useState("todos");
  let [tamanio, setTamanio]=useState("todos")

  const[fechaDesde,setFechaDesde]=useState("");//null
  const[fechaHasta,setFechaHasta]=useState("");//null

  //convertir string a datastring
  let DS_desde = new Date(fechaDesde+"T00:00:00")
  let DS_hasta = new Date(fechaHasta+"T00:00:00")
//CONVERTIMOS EL DATE STRING A fECHAS NATURALES
  const opciones ={
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
  };
  let fechaDesdeNatural = DS_desde.toLocaleDateString("es-Co",opciones)
  let fechaHastaNatural = DS_hasta.toLocaleDateString("es-Co",opciones)


  
  //esta es la parte nueva
  let brayan =(fechaDesde2,fechaDesdeNatural2)=>{
    if(fechaDesde2!==""){
      return fechaDesdeNatural2
    }else{
      return ""
    }
  }
  //esta es la parte nueva
  let Alejandro=brayan(fechaDesde,fechaDesdeNatural)
  let Alejandro2=brayan(fechaHasta,fechaHastaNatural)
  






  // Obetner el tiempo UNIX
  let fechaDesdeUNIX= DS_desde.getTime();
  let fechaHastaUNIX =DS_hasta.getTime();
  //Filtrar hoteles por fechas
   let hotelesFiltradosFecha = hotelsData;
   if(fechaDesde !== "" && fechaHasta!==""){
       hotelesFiltradosFecha = hotelsData
   }

  const nuevaListaHoteles =()=>{
    let nuevaLista = hotelsData.filter((hotel)=>{
      if(!fechaDesde && !fechaHasta){
        return hotel 
      }else{
        return hotel.availabilityFrom<=fechaDesdeUNIX && hotel.availabilityTo>=fechaHastaUNIX
      }
      // if(hotel.availabilityFrom<=fechaDesdeUNIX && hotel.availabilityTo>=fechaHastaUNIX){
      //     return true;
      // }else{
      //     return false;
      // }   
  }).filter((hotel)=>{
      if(tamanio === "pequeño"){
        return hotel.rooms<10;
        }   
        else if(tamanio ==="mediano"){
          return hotel.rooms > 10 && hotel.rooms <= 20;
          }   
          else if (tamanio ==="grande"){
            return hotel.rooms > 20;
            }   
            else{
              return hotel;
              } 
      })
      .filter((hotel)=>{
        if ( hotel.country===pais){
          return hotel;
          }else if (pais === "todos"){
            return hotel;
            }
            return null;
      })
      .filter((hotel)=>{
        if(hotel.price===Number(precio)){
          return hotel;
          }else if(precio==="todos"){
            return hotel;
            }
            return null;
      });
    return nuevaLista;
  }
  const nuevaListaFiltrada = nuevaListaHoteles();

  return (
    <div className={styles.App}>

      <Header 
      pais={pais}
      precio={precio}
      tamanio={tamanio}
      //Asesoría Brayan
      // fechaDesdeNatural={fechaDesdeNatural}
      // fechaHastaNatural={fechaHastaNatural}
      fechaDesdeNatural={Alejandro}
      fechaHastaNatural={Alejandro2}
      


      />
      
      <Filter 
      pais={pais} 
      setPais={setPais}
      precio={precio}
      setPrecio={setPrecio}
      tamanio={tamanio}
      setTamanio={setTamanio}
      fechaDesde ={fechaDesde}
      setFechaDesde={setFechaDesde}
      fechaHasta={fechaHasta}
      setFechaHasta={setFechaHasta}
      DS_desde={DS_desde}
      DS_hasta={DS_hasta}
      fechaDesdeNatural={fechaDesdeNatural}
      fechaHastaNatural={fechaHastaNatural}
      hotelesFiltradosFecha={hotelesFiltradosFecha}
      /> 
      {
      nuevaListaFiltrada.length ===0?
        <Alerta/>
        :
        <Cards nuevaListaFiltrada={nuevaListaFiltrada} />
      }
    </div>
  );
}

export default App;
