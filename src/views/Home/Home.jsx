import React from 'react'
import {Container, Card} from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';


export default function Home() {
    const percentage = 66;
    return (
        <Container >
            <Card style={{ width: '18rem' }}>
                <Card.Header>Bootcamper</Card.Header>
                <Card.Body>
                   <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </Card.Body>
            </Card>
        </Container>
    )
}
