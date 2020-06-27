import React from 'react'
import {Container, Card} from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import NavBar from '../components/NavBar/NavBar';

        


export default function Home() {
    const percentage = 100;
    return (
        <div className='wrapper'>
            <NavBar></NavBar>
        <Container >
            <Card bg="danger" style={{ width: '18rem' }}>
                <Card.Header>Bootcamper</Card.Header>
                <Card.Body>
                   <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </Card.Body>
            </Card>
        </Container>
        </div>
    )
}
