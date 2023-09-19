import React from 'react';

const Task = (props) => {
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p> {/* Added the description here */}
        </div>
    )
}

export default Task;