import React from 'react';
import Title from "../../composants/Title/Title"
import EtabPublic from "../../assets/img/etablissement-public.jpg"

const Accueil = (props) => (
    <div className="accueil">
        <Title>Bienvenue sur notre site</Title>
        <p>Le site vous aidant à trouver les établissements publics de France</p>
        <div className="accueil-img">
            <img src={EtabPublic} alt="etablissement public" />
        </div>
    </div>
)

export default Accueil