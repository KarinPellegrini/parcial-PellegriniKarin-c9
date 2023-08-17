import React from 'react'

const Card = ({paciente}) => {
  return (
    <div style={{
      border: "2px solid white",
      borderRadius: "10px",
      padding: "20px"
    }}>
        <p>Hola {paciente.nombre}</p>
        <p>Obra social utilizada: {paciente.obraSocial}</p>
        <p>Tenés un turno el 17/08/2023</p>
    </div>
  )
}

export default Card