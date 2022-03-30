import React from "react";
import PropTypes from 'prop-types';
// import React, { Fragment } from "react";

// FC (Funtional Component)

const  PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>{ saludo }</h1>
            {/* <h1> { JSON.stringify(saludo, null, 3) } </h1> */}
            <p>{ subtitulo }</p>
        </>  
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un Subtitulo",
}

export default PrimeraApp;