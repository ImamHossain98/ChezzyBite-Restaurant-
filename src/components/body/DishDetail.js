import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />

                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle style={{ font: "20" }}>{props.dish.name} </CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        {props.dish.price}/-
                    </CardText>

                    <hr />

                    <LoadComments comments={props.comments} />

                </CardBody>


            </Card >
        </div >
    );
};

export default DishDetail;