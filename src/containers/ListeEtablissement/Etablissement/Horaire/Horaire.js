import React from 'react';
import Heure from './Heure/Heure';

const Horaire = (props) => (
    <>  
        {props.jourDebut} {props.jourFin} <Heure {...props} />
    </>
)

export default Horaire