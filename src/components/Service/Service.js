import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, serviceName, image, description } = service;
    return (
        <div>
            <Col className="p-4">
                <Card className="feature-card pb-2">
                    <Card.Img variant="top" src={image} style={{ width: '385px', height: '350px' }} />
                    <Card.Body>
                        <Card.Title className="fw-bold text-center" style={{color: 'rgb(92, 28, 58)'}}>{serviceName}</Card.Title>
                        <Card.Text  className="text-center">
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <div className="mx-auto">
                        <Link to={`/service/${id}`}><button className="btn btn-success px-5">Details</button></Link>
                    </div>
                </Card>
            </Col>

        </div>
    );
};

export default Service;