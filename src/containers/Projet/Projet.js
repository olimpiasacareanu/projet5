import React from 'react';
import Title from '../../composants/Title/Title';

const Projet = (props) => (
    <>
        <Title>A propos du projet</Title>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <iframe src="https://embed.lottiefiles.com/animation/122338"></iframe>
                <div className="col-lg-6 mt-5">
                    <p>Ce projet consiste en la création d'une application <b>React</b> qui va utiliser un API disponible gratuitement mis en place par le gouvernement français. Pour la configuration des routes j'ai utilisé le module <b>React Router</b>. La librairie <b>Axios</b> m'a permis d'intéragir avec l'API. <br />
                        La création de la maquette a été realisée avec <b>Bootstrap</b>. <br />
                        L’application contient : une page d’accueil, une page de présentation du projet, une page d’établissements publics contenant <i>un formulaire de recherche par département</i> ainsi qu’<i>un filtrage par type d’établissements</i>, une page de contact dont le but n’étant pas le traitement serveur, mais la mise en place d’un formulaire utilisant <b>Formik</b> et <b>Yup</b> pour la gestion et la validation des données. 

                    </p>
                </div>
            </div>
        </div>
    </>
)

export default Projet