import React from 'react'
import { Container, Card, Row, Col, Accordion, CustomToggle } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import NavBar from '../components/NavBar/NavBar';
import Dashboard from './Dashboard/Dashboard';




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
                pathColor: "#c72828"
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

        <div className='wrapper'>
            <NavBar></NavBar>
            <Container fluid  >
                <Row className='homeBody'>
                    <Col xl={9}>
                        <Dashboard ></Dashboard>
                    </Col>
                    <Col xl={3} ></Col>
                </Row>
                <footer className='homeFooter aligmentFlexCenter'>
                    <Col className="col-xl-3" >
                        <ul className="sci">
                            <li><a href='https://html5test.com' target='_blank' rel='noreferrer noopener'><i className="fa fa-html5"></i></a></li>
                            <li><a href='https://www.tutorialrepublic.com/css-tutorial' target='_blank' rel='noreferrer noopener'><i className="fa fa-css3"></i></a></li>
                            <li><a href='https://www.youtube.com' target='_blank' rel='noreferrer noopener'><i className="fa fa-youtube"></i></a></li>
                            <li><a href='https://github.com' target='_blank' rel='noreferrer noopener'><i className="fa fa-github"></i></a></li>
                            <li><a href='https://www.google.com' target='_blank' rel='noreferrer noopener'><i className="fa fa-chrome"></i></a></li>
                        </ul>
                    </Col>
                </footer>
            </Container>
        </div>
    </>

    )
}
