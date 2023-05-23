// import React from 'react';
// import {withFormik} from "formik"
// import * as Yup from "yup"
// import Bouton from '../../../composants/Bouton/Bouton';

// const FormCodeDepartement = (props) => (
//     <>
//         <form className="form-inline" onSubmit={props.handleSubmit}>
//             <div className="form-group">
//             <div className="row">
//                 <div className="col-lg-6">
//                     <label htmlFor="numeroDepartement" ><span className="badge  bg-warning">Le code doit être inclus entre 1 et 99. </span></label>
//                     <input 
//                         type="number" 
//                         className="form-control rounded-0 " 
//                         id="numeroDepartement" 
//                         name="numeroDepartement" 
//                         placeholder="Introduisez le code du département." 
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                         value= {props.values.numeroDepartement}
//                     />
//                     {props.errors.numeroDepartement && props.touched.numeroDepartement && <div id="feedback" className='alert alert-danger'>{props.errors.numeroDepartement}</div>}
//                 </div>
//                 <div className="col-lg-6">
//                     <button type="submit">Submit</button>
//                 </div>
//             </div>
//             </div>
//         </form>

//     </>
// )

// export default withFormik({
//     mapPropsToValues: () => ({ numeroDepartement: '' }),
//     validationSchema : Yup.object().shape({
//         numeroDepartement: Yup.number()
//             .integer()
//             .positive()
//             .min(1, "Le numéro doit être entre 1 et 98")
//             .max(99,"Le numéro doit être entre 1 et 98")
//             .required('Required'),
//       }),
  
//       handleSubmit: (values, { setSubmitting }) => {
//           setSubmitting(false);
//         return values

//       },
//     handleChange: (values, {props})=>{
//         console.log('hellochange')
//     },
//     handleBlur: (values, {props})=>{
//         console.log('helloblur')
//     },
  
//     displayName: 'BasicForm',
//   })(FormCodeDepartement);