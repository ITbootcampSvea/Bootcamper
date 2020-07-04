import React from 'react';
import { Card } from 'react-bootstrap';

export default function DashCard(props) {
    const {singleCard} = props; 

    
    let numText = 50;
    let numTitle = 10;
    
    
    let title = '';
    if (singleCard.title.length <= numTitle) {
        title = singleCard.title;
    } else {
        title = singleCard.title.slice(0, numTitle) + '...';
    }

    let text = '';
    if (singleCard.text.length <= numText) {
        text = singleCard.text;
    } else {
        text = singleCard.text.slice(0, numText) + '...';
    }
      

    return (
        <div>
            <p>{singleCard.time}</p>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}
