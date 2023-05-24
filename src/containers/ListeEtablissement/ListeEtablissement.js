import React, {Component} from 'react'
import axios from "axios"
import Title from '../../composants/Title/Title'
import Etablissement from "./Etablissement/Etablissment"
import Bouton from '../../composants/Bouton/Bouton'
import {withFormik} from "formik"
import * as Yup from "yup"
import Tortue from "../../assets/img/tortue.png"

class ListeEtablissement extends Component{
    state={
        listeEtablissment : null,
        etablissement : null,
        loading : true,
        estSelect : null,
        codeDepartement: "67",
        disabled : false
    }

    componentDidMount = () => {
        // afficher par défaut les mairies 
        this.handleDisplayInstitution("mairie")
    }  


    handleDisplayInstitution = (etablissement)=>{
        // le code choisit par l'utilisateur 
        let code=this.state.codeDepartement
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/${code}/${etablissement}`)
        .then(reponse => {
            // handle success
            let data = reponse.data.features
            switch(etablissement){
                case "mairie" :  etablissement = "Mairie"
                break
                case "commissariat_police" :  etablissement = "Commisariat de police"
                break
                case "pole_emploi" :  etablissement = "Pôle Emploi"
                break
                case "prefecture" :  etablissement = "Préfecture"
                break
                default : console.log("Pas de établissement")

            }
            this.setState({listeEtablissment : data, etablissement : etablissement,loading : false, estSelect : etablissement})
        })
        .catch(error=> {
            // handle error
            console.log(error);
            this.setState({loading:false})
        })
    }

    handleChoisirCode=(code)=>{
        if(code<=9 && code>=1) code = "0" + code 
        if(code === "2a") code = "2A"
        if(code === "2b") code = "2B" 
        this.setState({codeDepartement : code}, ()=>{
            this.handleDisplayInstitution("mairie")
        })
    }

    render(){
        let vide = ''
        let arr = this.state.listeEtablissment || []
        if(arr.length === 0){
            vide = "Le code n'est pas valide . "
        }

        return (
            <>
                <div className="container">
                    <Title>Rechercher un établissment</Title>

                    {/* Chargement de la page */}
                    {this.state.loading && 
                        <div>
                            {/* <img src={Tortue} alt="chargement" /> */}
                            Chargement ... 
                        </div>
                    }

                    {/* Formulaire pour renseigner le code d'un département recherché */}
                    <form  className="form-inline" >
                        <div className="form-group">
                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="numeroDepartement" ></label>
                                <input 
                                    type="string" 
                                    className="form-control rounded-0 " 
                                    id="numeroDepartement" 
                                    name="numeroDepartement" 
                                    placeholder="Introduisez le code du département " 
                                    onChange={this.props.handleChange}
                                    onBlur={this.props.handleBlur}
                                    value= {this.props.values.numeroDepartement}
                                />
                                {this.props.errors.numeroDepartement && this.props.touched.numeroDepartement && <div id="feedback" className='alert alert-danger'>{this.props.errors.numeroDepartement}</div>}
                            </div>
                            <div className="col-lg-6">
                                <Bouton  styleBtn="mt-4 mb-2" clic={()=>this.handleChoisirCode(this.props.values.numeroDepartement)}>Valider</Bouton>
                            </div>
                        </div>
                        </div>
                    </form>         

                    {/* Les boutons pour filtrer les établissements publics par type */}
                    <Bouton style = {(this.state.estSelect === "Mairie") ? {opacity:1} : {opacity:0.5}} clic = {()=>this.handleDisplayInstitution("mairie")}>Mairie</Bouton>
                    <Bouton style = {this.state.estSelect === "Commisariat de police" ? {opacity:1} : {opacity:0.5}} clic = {()=>this.handleDisplayInstitution("commissariat_police")}>Commisariat de police</Bouton>
                    <Bouton style = {this.state.estSelect === "Pôle Emploi" ? {opacity:1} : {opacity:0.5}} clic = {()=>this.handleDisplayInstitution("pole_emploi")}>Pôle emploi</Bouton>
                    <Bouton style = {this.state.estSelect === "Préfecture"  ? {opacity:1} : {opacity:0.5}} clic = {()=>this.handleDisplayInstitution("prefecture")}>Préfecture</Bouton>
                    <h2>Liste de {this.state.etablissement} du département {this.state.codeDepartement}</h2>

                    {/* Afficher un message si le code n'existe pas dans l'API */}
                    { vide && <div className="alert alert-warning">{vide}</div> }

                    {/* Afficher les informations de chaque établissments */}
                    <div className="row">
                        { this.state.listeEtablissment && this.state.listeEtablissment.map((etablissement, key)=>{
                            return (
                                <div className="col-lg-6" key={key}>
                                    <Etablissement 
                                        etablissement = {this.state.etablissement}
                                        nom = {etablissement.properties.adresses[0].commune}
                                        tel = {etablissement.properties.telephone}
                                        url = {etablissement.properties.url }
                                        email = {etablissement.properties.email}
                                        rue = {etablissement.properties.adresses[0].lignes[0]}
                                        codePostal = {etablissement.properties.adresses[0].codePostal}
                                        jourDebut = { etablissement.properties.horaires?.map((horaire, key)=>{
                                            return (
                                                // retourner les jours d'ouverture d'un tableau
                                                <div className='jours' key={key}>
                                                    <ul>
                                                        <li>
                                                            Du {horaire.du} à {horaire.au}  
                                                                {horaire.heures?.map((heure, key)=>{
                                                                // retourner les heures d'ouverture d'un tableau
                                                                return(
                                                                    <div className='heures' key={key}>
                                                                        De  {heure.de} à {heure.a}                                          
                                                                    </div>
                                                                )
                                                            })}
                                                        </li>
                                                    </ul>
                                                </div>
                                            )
                                        })}
                                    />     
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({ numeroDepartement: '' }),
    validationSchema : Yup.object().shape({
        numeroDepartement: Yup.string()
            .min(2, "Le code doit être valide")
            .max(2, "Le code doit être valide")
    }),  
    displayName: 'BasicForm',
  })(ListeEtablissement)