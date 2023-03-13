import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastName: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: ""

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleInputChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <input type="text" name="firstname" placeholder='First Name' defaultValue={this.state.firstname} onChange={this.handleInputChange} />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <input type="text" name="lastName" placeholder='Last Name' defaultValue={this.state.lastName} onChange={this.handleInputChange} />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <input type="text" name="telnum" placeholder='Telephone Number' defaultValue={this.state.telnum} onChange={this.handleInputChange} />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>E-mail</Label>
                                <Col md={10}>
                                    <input type="text" name="email" placeholder='enter your E-mail' defaultValue={this.state.email} onChange={this.handleInputChange} />

                                </Col>
                            </FormGroup>
                            <FormGroup row>

                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} /> <strong>May we contact you?</strong>
                                        </Label>

                                    </FormGroup>

                                </Col>
                                <Col md={{ size: 6, offset: 1 }}>
                                    <Input type="select" name="contactType" defaultValue={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Telephone Number</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" defaultValue={this.state.message} onChange={this.handleInputChange} rows="12">
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div >
        );
    }
}

export default Contact;