import React from 'react';

const Bouton = (props) => {
    return(
        <>
            {/* props.children permet de remplir l'éspace avec l'information differante pour chaque bouton */}
            <button style={props.style} type="button" className={`rounded-0 border btn btn-primary ${props.styleBtn}`} onClick={props.clic}>{props.children}</button>
        </>
    )
}

export default Bouton