import React from 'react';
import ScholarContent from './ScholarContent';

const ScholarCard = props => (
  <div className={props.scholars}>
    <title>Scholars</title>
    <p><input label="All Week" name="allWeek" type="checkbox" required value={props.scholar} /> Select</p>
    {props.scholars.map(scholar =>
      <ScholarContent key={scholar._id}
       {...scholar} 
       deleteScholar={props.deleteScholar} />)}
  </div>
);

export default (ScholarCard);