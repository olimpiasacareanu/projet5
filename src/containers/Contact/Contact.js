import React, {Component} from 'react'
import Title from '../../composants/Title/Title'
import Bouton from '../../composants/Bouton/Bouton'
import FormContact from './FormContact/FormContact'

class Contact extends Component{
    state={
        display : false
    }
    handleDisplayFormContact = ()=> {
        if(this.state.display === false)  this.setState({display : true}) 
        else this.setState({display : false}) 
    }

    render(){
        return (
            <>
                <Title>Contactez-nous ! </Title>
                <div className="container">
                    <h4>Adresse : </h4>
                    <p>Rue des Fleurs<br/>09100 - Foix</p>
                    <h4>Téléphone : </h4>
                    <p>00 00 00 00</p>
                    <h4>Vous préfèrez nous écrire ? </h4>
                    <Bouton  clic={()=>this.handleDisplayFormContact()}>Formulaire du contact</Bouton>
                    <FormContact displayForm={this.state.display}/>
                </div>
            </>
        )
    }
}

export default Contact