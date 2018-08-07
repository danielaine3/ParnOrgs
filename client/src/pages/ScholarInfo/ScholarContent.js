import React from 'react';

const ScholarContent = props => (
    <div className={props.card}>
        <div className="cardcontent">
            <p>{props.childfirstname}</p>
            <p>{props.childlastname}</p>
            <p>{props.grade}</p>
            <p>{props.homeroom}</p>

            <div className={props.deleteBtn}>
                <button 
                id="deleteButton"
                accessKey={props._id}
                onClick={props.deleteScholar}
                >Delete</button>
            </div>
        </div>
    </div>
);

export default (ScholarContent);