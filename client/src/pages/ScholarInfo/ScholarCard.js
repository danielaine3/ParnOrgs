import React from 'react';
import ScholarContent from './ScholarContent';
import './ScholarCard.css';

const ScholarCard = props => (
    <div class={props.classes.scholars}>
        <title>Scholars</title>
        {props.scholars.map(scholar =>
        <ScholarContent key={scholar._id} {...scholar} deleteScholar={props.deleteScholar} />)}
    </div>
);

export default (ScholarCard);