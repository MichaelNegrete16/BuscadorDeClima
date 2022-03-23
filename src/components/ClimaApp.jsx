import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
import Spinner from './Spinner'
import useClima from '../hooks/useClima'

const ClimaApp = () => {

    const {resultado,spinner,noResultado} = useClima()

  return (
    <>
        <main className='dos-columnas'>

            <Formulario/>

            {spinner ? <Spinner/> : 
            resultado?.name ? <Resultado/> :
            noResultado ? <p>{noResultado}</p> : <p>El clima se muestra aqui</p>}
            
            
        </main>
    </>

    
  )
}

export default ClimaApp