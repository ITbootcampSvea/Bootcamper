import React, { useState, useEffect } from 'react';
import { Card, CardGroup, CardDeck, Row, Col, Image} from 'react-bootstrap';
import DashCard from '../Dashboard/DashCard/DashCard';
import DashCardModal from '../Dashboard/DashCardModal/DashCardModal';
import plussign from '../../img/plussign.png';

export default function Dashboard() {
    let date = new Date();
    let dayNumber = date.getDate();
    let month = date.getMonth();
    let dayName = date.toLocaleString('en-US', { weekday: 'long' });
    let monthName = date.toLocaleString('en-US', { month: 'long' });
    let year = date.getFullYear();
    
    console.log(dayNumber, month+1, year);

    let data = [{
                 date: "4 7 2020",
                 time: "10:40", 
                 title: "Javascript tutorial", 
                 author: "Cvijan Peranovic", 
                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam adipisci esse corrupti veritatis, quisquam architecto exercitationem illum ipsam soluta dolores, natus reprehenderit in vero laboriosam, maxime repellendus consectetur molestiae.Delectus sed recusandae doloribus non nemo necessitatibus, esse obcaecati quisquam corrupti possimus asperiores eius nostrum vel, assumenda saepe ipsum, est voluptate magnam illum maxime pariatur?", 
                 links: []
                 },
                 {
                 date: "4 7 2020", 
                 time: "12:17", 
                 title: "While loop", 
                 author: "Dusan Bobicic", 
                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam adipisci esse corrupti veritatis, quisquam architecto exercitationem illum ipsam soluta dolores, natus reprehenderit in vero laboriosam, maxime repellendus consectetur molestiae.Delectus sed recusandae doloribus non nemo necessitatibus, esse obcaecati quisquam corrupti possimus asperiores eius nostrum vel, assumenda saepe ipsum, est voluptate magnam illum maxime pariatur?", 
                 links: []
                 },
                 {
                 date: "4 7 2020",
                 time: "13:05", 
                 title: "Node.js", 
                 author: "Cvijan Peranovic", 
                 text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam adipisci esse corrupti veritatis, quisquam architecto exercitationem illum ipsam soluta dolores, natus reprehenderit in vero laboriosam, maxime repellendus consectetur molestiae.Delectus sed recusandae doloribus non nemo necessitatibus, esse obcaecati quisquam corrupti possimus asperiores eius nostrum vel, assumenda saepe ipsum, est voluptate magnam illum maxime pariatur?", 
                 links: []
                }]

    
    const [modalShow, setModalShow] = React.useState(false);
    const [modalDataIndex, setModalDataIndex] = React.useState(0);

    const cardStyle = {
        height: "15rem",
        padding: "0.5rem",
        textAlign: "center", 
        verticalAlign: "middle"
    }

    return (

       <div>
            <Card>
                <div className="calendar">
                    <label className='calendarLbl'>{monthName}</label>
                    <label className='calendarLbl'>{dayName}</label>
                    <label className='calendarLbl'>{dayNumber}</label>
                    <label className='calendarLbl'>{year}</label>
                </div>
                <CardDeck>             
                    {data.map((single, index) => 
                        <Col xl={4}>
                            <Card style={cardStyle} 
                                  onClick={() => {setModalShow(true); setModalDataIndex(index)}
                                  }>
                                      <DashCard singleCard={single} />
                            </Card>
                            
                            
                        
                        </Col>)
                    }


                        <Col xl={4}>
                            <Card style={cardStyle}>
                                <div><Image style={{height:"150px", width:"150px"}} src={plussign}/></div>
                            </Card>
                        </Col>
                </CardDeck>  
             
                
            </Card>
            
            <DashCardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                singlemodal={data[modalDataIndex]}
            />

    </div>
)
}
