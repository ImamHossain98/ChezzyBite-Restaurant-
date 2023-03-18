import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { LocalForm, Control, Errors } from 'react-redux-form';

class Contact extends Component {


    handleSubmit = values => {
        console.log(values);
        
    }

    render() {
        document.title = "Contact | CheezyBite"
        return (
            <div className='container'>
                <div className='row row-content' style={{ padding: "20px", textAlign: "left " }}>
                    <div className='col-12'>
                        <h3>Send us feedback</h3>
                    </div>
                    <div className='col-12 col-md-7'>
                        <LocalForm onSubmit={ values=>this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text
                                    model=".firstname"
                                     name="firstname" placeholder='First Name' className='form-control' />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text 
                                    model=".lastName" name="lastName" placeholder='Last Name' className='form-control' />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <Control.text 
                                    model=".telnum" name="telnum" placeholder='Telephone Number' className='form-control'  />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>E-mail</Label>
                                <Col md={10}>
                                    <Control.text  
                                    model=".email" name="email" placeholder='enter your E-mail'className='form-control'  />

                                </Col>
                            </FormGroup>
                            <FormGroup row>

                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label>
                                            <Control.checkbox 
                                            model=".agree" name="agree" className='form-check-input' /> <strong>May we contact you?</strong>
                                        </Label>

                                    </FormGroup>

                                </Col>
                                <Col md={{ size: 6, offset: 1 }}>
                                    <Control.select 
                                    model="contactType" name="contactType" className='form-control'>
                                        <option>Telephone Number</option>
                                        <option>Email</option>
                                    </Control.select >
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea 
                                    model=".message" name="message" className='form-control' rows="12" 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </div>
                </div>
            </div >
        );
    }
}

export default Contact;