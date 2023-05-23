import React from 'react';
import Bouton from '../../../composants/Bouton/Bouton';
import {withFormik} from "formik"
import * as Yup from "yup"


const FormContact = (props) => {
    return(
        <>
        <form className={props.displayForm === false ? 'd-none' : 'd-block' } >
            <div className="form-group">
                <label htmlFor="nom"><span className="badge  bg-warning">Minimum 5 caractères</span></label>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-describedby="nom" 
                    placeholder="Enter nom"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="nom"
                 />
                 {props.errors.nom && props.touched.nom && <div id="feedback" className='alert alert-danger'>{props.errors.nom}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="email"></label>
                <input 
                    type="email" 
                    className="form-control" 
                    aria-describedby="email" 
                    placeholder="Enter email" 
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    name="email"

                    />
                {props.errors.email && props.touched.email && <div id="feedback" className='alert alert-danger'>{props.errors.email}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="msg"><span className="badge  bg-warning">Minimum 50 caractères</span></label>
                <textarea 
                    className="form-control" 
                    rows="3" 
                    placeholder='Message'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.message}
                    name="message"></textarea>
                {props.errors.message && props.touched.message && <div id="feedback" className='alert alert-danger'>{props.errors.message}</div>}
            </div>
            <Bouton styleBtn="mt-3 " onClick={props.handleSubmit}>Submit</Bouton>

        </form>
    </>
    )
}

export default withFormik({
    mapPropsToValues: () => ({ 
        nom: "", 
        email: "", 
        message : "" 
    }),
  
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Ce n'est pas un e-mail valid. ")
            .required(),
        nom: Yup.string()
            .min(5, 'Le nom doit contenir min 5 caractères.'),
        message: Yup.string()
            .min(50, "Min 50 caractères")
       }),
    handleChange : (values, {props}) =>{
        console.log("hello")
    },
    handleBlur : (values, {props})=>{
    },
    handleSubmit : (values, {props})=>{
        
    },
  
    displayName: 'FormContact',
  })(FormContact);
