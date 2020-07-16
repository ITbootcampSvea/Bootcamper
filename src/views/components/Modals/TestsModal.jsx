import React from 'react';
import { Modal, Button} from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Tests from '../../../base/Tests.json'

export default function TestsModal({ testShow, setTestShow }) {
    const handleTestsClose = () => setTestShow(false);
    const defaultCircleStyle = {
        textColor: '#2e2a2c',
        trailColor: '#2e2a2c',
        backgroundColor: 'white'
    }

    const applyProgressStyle = (percentage) => {
      

        var progressStyle;
        switch (true) {
            case (percentage <= 20): progressStyle = {
                ...defaultCircleStyle,
                pathColor: "#c72828",
                background: true
            }
                break;

            case (percentage > 20 && percentage <= 50): progressStyle = {
                ...defaultCircleStyle,
                pathColor: 'rgb(255,152,3)'
            }
                break;


            case (percentage > 50 && percentage <= 80): progressStyle = {
                ...defaultCircleStyle,
                pathColor: '#307bd1',

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
    return (
       <>
            <Modal centered  show={testShow} onHide={() => handleTestsClose()}>
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title>Mihajlo's Tests</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalTestsBody' >
             {Tests.map(el=><CircularProgressbar className='modalCircleSvg'  test={el} key={el.id} value={el.percentage} background={true}
                                                    text={`${el.percentage}%`}
                                                    styles={buildStyles(applyProgressStyle(el.percentage))} ></CircularProgressbar>)}   
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={() => handleTestsClose()}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
 
       </>
    )
}
