import React, { useState } from "react";
import PropTypes from 'prop-types';

// FC (Funtional Component)

//Repositorio del enunciado de la actividad:
// https://gist.github.com/Klerith/e1a731cc595c00a9794a709062eae757

// Docs de Eventos/Lisrteners:
// https://es.reactjs.org/docs/events.html#mouse-events

//Repositorio de GitHub
//https://github.com/Klerith/react-counter-app/releases/tag/v0.4.0

const CounterAPP = ({value}) => {

    const [ counter, setCounter ]  = useState( 0 ); //Retorna una arreglo Array con dos valores 


    //handleAdd
    const handleAdd = () => { 
        // setCounter( counter + 1 );
        setCounter((c) => c + 1);
    }

    //handleSubstract
    const handleSubstract = () => { 
        // setCounter( counter - 1 ); 
        setCounter((c) => c - 1);
    }

    //handleReset
    const handleReset = () => { 
        // setCounter( counter  = value ); 
        setCounter((c) => value);
    }

    return (
    <>
        <h1>CounterAPP</h1>
        <h2>{ counter }</h2>

        <button onClick={ handleAdd } >+1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSubstract }>-1</button>
    </>
    );        
};

CounterAPP.propTypes = {
    value: PropTypes.number.isRequired
};

export default CounterAPP;