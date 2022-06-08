import { useState } from "react"
import "./main.css"
const Principal = () => {
    const [titulo, setTitulo] = useState(false)
    const cambiar   = ()=>{
        setTitulo(true)
    }
    
 


    return(
        <section className="Principal">
            <div className="Seccion1">
                <h2 className="Titulo" id="titutlo">
                    {
                        titulo? '"Never give up"' : '"Life is the ultime gift"'
                    }
                    
                    </h2>
                <p className="Parrafo">This is your kanye West quote for today, click below to get another one</p>
                <button className="Boton1" onClick={cambiar}><b>GET NEW ONE</b></button>
            </div>
            <div>
                <img className="Imagen2" src="https://www.e-dea.co/hubfs/lucidchart-en-colombia-decoration.png" alt="Imagen"/>
            </div>
        </section>
    )
}
export default Principal