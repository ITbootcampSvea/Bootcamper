import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import NavBar from '../components/NavBar/NavBar';




export default function Home() {
    const studentTest = [
        {
            testName: 'Test1',
            percentage: 20,
            id: 1
        },
        {
            testName: 'Test2',
            percentage: 43,
            id: 2
        },
        {
            testName: 'Test3',
            percentage: 62,
            id: 3
        },
        {
            testName: 'Test4',
            percentage: 89,
            id: 4
        },
    ]
    const defaultCircleStyle = {
        textColor: '#161515',
        trailColor: '#161515',
        backgroundColor: '#fff',
    }

    const applyProgressStyle = (percentage) => {
        console.warn(percentage)
        var progressStyle;
        switch (true) {
            case (percentage <= 20): progressStyle = {
                ...defaultCircleStyle,
                pathColor: 'rgb(184, 78, 57)'
            }
                break;



            case (percentage > 20 && percentage <= 50): progressStyle = {
                ...defaultCircleStyle,
                pathColor: 'rgb(255,152,3)'
            }
                break;


            case (percentage > 50 && percentage <= 80): progressStyle = {
                ...defaultCircleStyle,
                pathColor: '#307bd1'
            }
                break;

            case (percentage > 80 && percentage <= 100): progressStyle = {
                ...defaultCircleStyle,
                pathColor: '#6AB93C'
            }
                break;

            default:
                progressStyle = {
                    ...defaultCircleStyle,
                    pathColor: '#afb1b3'
                }

        }

        return progressStyle;
    }


    return (<>
        <NavBar></NavBar>
        <div className='wrapper'>
            <Container fluid className='aligmentFlexCenter' >
                <Row>
                    {studentTest.map(el =>
                        <Col className="col-xl-3" key={el.id} test={el}>
                            <Card className='card' style={{ width: '22rem' }}>
                                <Card.Header className='text-center progresCardHeader cardHeaderBackground'>{el.testName}</Card.Header>
                                <Card.Body>
                                    <CircularProgressbar styles={buildStyles(applyProgressStyle(el.percentage))} value={el.percentage} text={`${el.percentage}%`} strokeWidth={14} background={true} />
                                </Card.Body>
                            </Card>
                  )
                    </Col>)}

                </Row>
            </Container>
        </div>
    </>

    )
}
