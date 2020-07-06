
import React from 'react'
import { Card, Col } from 'react-bootstrap';




export default function StudentCardHeader({ student }) {



    return (
        <>
            <Col xl={8}>
                <label id="studentName" ><span className='studentCardSpan'>StudentID: </span>{student.studentID}</label>
                <label id="studentName"><span className='studentCardSpan'>Name and Surname: </span>{`${student.name} ${student.lastName}`}</label>
                <label id="studentName"><span className='studentCardSpan'>Phone: </span>{student.phone}</label>
                <label id="studentName"><span className='studentCardSpan'>Email: </span>{student.email}</label>
            </Col>
            <Col xl={4} className='aligmentFlexCenter' >
                <Card.Img style={{ height: '10rem' }} src={student.gender === 'male' ? student.img.src : student.img.src1} variant="top" className='cardAvatar' />
            </Col>
        </>

    )
}
