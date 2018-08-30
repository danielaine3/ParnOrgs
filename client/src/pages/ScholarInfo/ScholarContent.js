import React from 'react';

const ScholarContent = props => (
    <div className={props.card}>
        <div className="cardcontent">
            <p><input label="select" name="select" type="checkbox" required value={props.scholar} /> </p>
            <p class= "props">{props.childfirstname}</p>
            <p class= "props">{props.childlastname}</p>
            <p class= "props">{props.grade}</p>
            <p class= "props">{props.homeroom}</p>

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