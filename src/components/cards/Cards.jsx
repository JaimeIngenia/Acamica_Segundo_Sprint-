import react from "react";
import styles from "./Cards.module.css";
import Card from "../card/Card";

function Cards ({nuevaListaFiltrada}){
    // console.log(nuevaListaFiltrada+"Esta es la lista filtrada");
    return(
        <main className={styles.main}>
            {nuevaListaFiltrada.map((hotel)=>{
                    return <Card key={hotel.slug} hotel={hotel}/>
                })};

        </main>
        );          
}
export default Cards;
