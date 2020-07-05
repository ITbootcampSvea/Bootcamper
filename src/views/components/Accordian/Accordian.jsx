import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

export default function Accordian() {
    let date = new Date();
    let dayNumber = date.getDate();
    let month = date.getMonth();
    let dayName = date.toLocaleString('en-US', { weekday: 'long' });
    let monthName = date.toLocaleString('en-US', { month: 'long' });
    let year = date.getFullYear();

    let style={
        width:'100%',
        marginBottom:'1rem'
    }
 


    return (

        <>
            <Accordion style={style}  >
                <Card>
                    <Card.Header>
                        <Accordion.Toggle className='flexSpaceBeetween' as={Card.Header} eventKey="0">
                            <div className="calendar">
                                <label className='calendarLbl'>{monthName}</label>
                                <label className='calendarLbl'>{dayName}</label>
                                <label className='calendarLbl'>{dayNumber}</label>
                                <label className='calendarLbl'>{year}</label>
                            </div>
                            <label className='testName'>While loop</label>
                            <span className='indicator'></span>
                            <i className="fa fa-angle-down miniCalendarIcon"></i>

                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam adipisci esse corrupti veritatis, quisquam architecto exercitationem illum ipsam soluta dolores, natus reprehenderit in vero laboriosam, maxime repellendus consectetur molestiae.Delectus sed recusandae doloribus non nemo necessitatibus, esse obcaecati quisquam corrupti possimus asperiores eius nostrum vel, assumenda saepe ipsum, est voluptate magnam illum maxime pariatur? Molestiae maxime reprehenderit veritatis laudantium!</p></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>

    )
}
