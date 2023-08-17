import React, { useState } from 'react'
import Card from './Card'

const Form = () => {

    const[paciente, setPaciente] = useState ({
        nombre: '',
        obraSocial: ''
    })
    const[show, setShow] = useState(false)
    const[error, setError] = useState(false)

    const handleSubmit = () =>{
        if (
            paciente.nombre.length >= 3 &&
            paciente.obraSocial.length >= 6 &&
            paciente.nombre.trim() === paciente.nombre
        ) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    console.log(paciente)
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        border: "2px solid white",
        borderRadius: "10px",
        padding: "20px"
    }}>
        <label htmlFor="">Nombre del paciente</label>
        <input type="text" value={paciente.nombre} 
            onChange={(event)=> setPaciente({...paciente,nombre: event.target.value})}
        />
        <label htmlFor="">Obra social</label>
        <input type="text" value={paciente.obraSocial} 
            onChange={(event)=> setPaciente({...paciente,obraSocial: event.target.value})} 
        />
        <button onClick={handleSubmit}>Enviar</button>
        {show && <Card paciente={paciente}/>}
        {error && <h3 style={{color:'red'}}>Por favor chequea que la información sea correcta</h3>}
    </div>
  )
}

export default Form