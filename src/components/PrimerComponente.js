import React, {useState} from 'react'
import '../App.css'

export const PrimerComponente = () => {

    // let nombre = 'Matias';
    let web = 'astroguys.io';
    const [nombre, setNombre] = useState("Victor");

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }


  return (
    <div>
        <h1>Mi primer Componente</h1>
        <h2>Es el primero wiii</h2>
        <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>Mi web es: {web}</p>
        <input type="text" onClick={ e => cambiarNombre(e.target.value)} placeholder="Inserta tu nombre"/>

        <button onClick={ e => cambiarNombre("MATIAS SERRANO FABRICIO")}>Cambio</button>
    </div>
  )
}
