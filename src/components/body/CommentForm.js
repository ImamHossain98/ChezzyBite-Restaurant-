import React, { Component } from "react";
import { Form, Button, Input } from "reactstrap";



class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: "",
            rating: "",
            comment: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })


    }

    handleSubmit = event => {
        console.log(this.state);
        this.setState({
            author: "",
            rating: "",
            comment: ""
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        onChange={this.handleInputChange}
                        required />

                    <br />
                    <Input
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleInputChange}>

                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>

                    </Input>
                    <br />
                    <input
                        type="text-area"
                        name="comment"
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                        placeholder="Your Comment" />
                    <br />
                    <br />
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        );
    }
}

export default CommentForm;