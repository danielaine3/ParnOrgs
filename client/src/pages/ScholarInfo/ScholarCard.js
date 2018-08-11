import React from 'react';
import ScholarContent from './ScholarContent';

const ScholarCard = props => (
  <div className={props.scholars}>
    <title>Scholars</title>
    {props.scholars.map(scholar =>
      <ScholarContent key={scholar._id}
       {...scholar} 
       deleteScholar={props.deleteScholar} />)}
  </div>
);

export default (ScholarCard);