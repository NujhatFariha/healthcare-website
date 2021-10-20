import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleService = () => {
    const {serviceId} = useParams();
    const [serviceDetails,setServiceDetails]= useState([]);
    const [singleService,setSingleService] = useState({})
    useEffect(()=>{
        fetch('/Services.json')
        .then(res=>res.json())
        .then(data=>setServiceDetails(data))
    },[])
    useEffect(()=>{
        const foundSingleService= serviceDetails.find(service=>service.id === serviceId)
        setSingleService(foundSingleService)
    },[serviceDetails]);


    return (
        <div className="my-5 py-5">
            <Container>
            <Row>
                <Col md={4}>
                    <Card>
                    <Card.Img variant="top" src={singleService?.image} />
                    </Card>
                </Col>
                <Col md={5}>
                <Card style={{ width: '18rem'}}>
        
            <Card.Body>
            <Card.Title>{singleService?.serviceName}</Card.Title>
            <Card.Text>
         {singleService?.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
                </Col>
            </Row>
            </Container>
        </div>
       
    );
};

export default SingleService;