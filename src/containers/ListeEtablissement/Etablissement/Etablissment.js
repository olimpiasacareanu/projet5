import React from 'react';
import Horaire from './Horaire/Horaire';

const Etablissment = (props) => (
    <>
        <div className="card mb-4 rounded-0" >
            <div className="card-body">
                <h3 className="card-title bg-light p-2" >{props.etablissement} de {props.nom}</h3>
                <h4><span className='accent'><i className="fa-solid fa-square-phone"></i></span> {props.tel}</h4>
                <h4><span className='accent'><i className="fa-solid fa-square-envelope"></i></span> {props.email}</h4>
                <h6><span className='accent'>Adresse :</span> </h6>
                <p>{props.rue}
                <br />{props.codePostal}-{props.nom}</p>
                <div>
                    <h6><span className='accent'>Horaire :</span> </h6>
                    <Horaire {...props}/>
                </div>
                <a href={props.url} className={`card-link `} style={props.disabled}>Visiter le site web</a>
            </div>
        </div>
    </>
)

export default Etablissment