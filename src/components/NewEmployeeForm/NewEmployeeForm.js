import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'

import Title from "../Title";
import "./NewEmployeeForm.css";

//validation required
const required = value => (value ? undefined : 'Este campo es requerido')

// fun for many validations
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

// validation email
const validateEmail = value => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(value) ){
        return 'No es un email valido'
    }
}
//validation number
const mustBeNumber = value => (isNaN(value) ? 'Se requiere que se un valor numérico' : undefined)

    

class NewEmployeeForm extends Component {
    state = {
        loading: true,
        newEmployee: null
    }
    handleSubmit = (values) => {
        let storageEmployees = {}
        storageEmployees = JSON.parse( localStorage.getItem('Employees') ) ;
        if(storageEmployees){
            console.log(storageEmployees)
            let newEmployee = {...values, ...storageEmployees}
            localStorage.setItem('Employees', JSON.stringify(newEmployee));
        }else{
            localStorage.setItem('Employees', JSON.stringify(values));
        }
    }

    render() {
        
        return (
            <React.Fragment>
                <Title text="Crear nuevo empleado"/>
                <Form
                    onSubmit={this.handleSubmit}
                >
                    {({ handleSubmit, submitting }) => (
                    <form onSubmit={handleSubmit}>

                        <div className="col-md-12">
                            <div className="col-md-6"> 
                                <Field name="name" validate={required}>
                                    {({ input, meta }) => (
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input {...input} type="text" placeholder="Nombre" className="form-control"/>
                                        {meta.error && meta.touched && <span className="tag-error" >{meta.error}</span>}
                                    </div>
                                    )}
                                </Field>
                            </div>
                            <div className="col-md-6"> 
                                <Field  name="email" 
                                        validate={composeValidators(required, validateEmail )}>
                                    {({ input, meta }) => (
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input {...input} type="email" placeholder="Email" className="form-control"/>
                                        {meta.error && meta.touched && <span className="tag-error">{meta.error}</span>}
                                    </div>
                                    )}
                                </Field>
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div className="col-md-6"> 
                                <Field  name="birthdate" 
                                        validate={required}>
                                    {({ input, meta }) => (
                                    <div className="form-group">
                                        <label>Fecha de cumpleaños</label>
                                        <input {...input} type="date" placeholder="Fecha de cumpleaños" className="form-control"/>
                                        {meta.error && meta.touched && <span className="tag-error">{meta.error}</span>}
                                    </div>
                                    )}
                                </Field>
                            </div>
                            
                            <div className="col-md-6"> 
                                <Field  name="city" 
                                        validate={required}>
                                    {({ input, meta }) => (
                                    <div className="form-group">
                                        <label>Ciudad</label>
                                        <input {...input} type="text" placeholder="Ciudad" className="form-control"  />
                                        {meta.error && meta.touched && <span className="tag-error">{meta.error}</span>}
                                    </div>
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="col-md-6"> 
                                <Field  name="colony" 
                                        validate={required}>
                                    {({ input, meta }) => (
                                    <div className="form-group">
                                        <label>Colonia</label>
                                        <input {...input} type="text" placeholder="Colonia" className="form-control"  />
                                        {meta.error && meta.touched && <span className="tag-error">{meta.error}</span>}
                                    </div>
                                    )}
                                </Field>
                            </div>
                            <div className="col-md-6"> 
                                <Field  name="address_number" 
                                        validate={composeValidators(required, mustBeNumber) }>
                                    {({ input, meta }) => (
                                    <div className="form-group">
                                        <label>Número</label>
                                        <input {...input} type="text" placeholder="Número" className="form-control"  />
                                        {meta.error && meta.touched && <span className="tag-error">{meta.error}</span>}
                                    </div>
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="col-md-6"> 
                                <Field  name="postal_code" 
                                        validate={composeValidators(required, mustBeNumber) }>
                                    {({ input, meta }) => (
                                    <div className="form-group">
                                        <label>Codigo Postal</label>
                                        <input {...input} type="text" placeholder="Codigo Postal" className="form-control"  />
                                        {meta.error && meta.touched && <span className="tag-error">{meta.error}</span>}
                                    </div>
                                    )}
                                </Field>
                            </div>
                            <div className="col-md-6"> 
                                <button type="submit" className="btn btn-primary btn-sub-em" disabled={submitting}>
                                    Guardar
                                </button>
                            </div>
                        </div>


                    </form>
                    )}
                </Form>
            </React.Fragment>
        );
    }
}

export default NewEmployeeForm;