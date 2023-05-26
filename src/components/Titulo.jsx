import React from 'react';

const Titulo = (props) => {
    return (
        <h1>
           Hola {props.tituloAmigo} {props.estadoMjs}!!
        </h1>
    );
};

export default Titulo;