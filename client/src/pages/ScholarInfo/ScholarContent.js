import React from 'react';

const ScholarContent = props => (
    <div class={props.classes.card}>
        <div class="cardcontent">
            <p>{props.childfirstname}</p>
            <p>{props.childlastname}</p>
            <p>{props.grade}</p>
            <p>{props.homeroom}</p>

            <div class={props.classes.deleteBtn}>
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