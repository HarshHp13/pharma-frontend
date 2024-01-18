import { useState } from "react";
import "./task.css"
export default function Task(props) {
    const [value, setValue] = useState(props.item.status);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleForward = () => {

    }

    return (
        <div className="task">
        <div className="task__card">
            <div className="task__cardHeader">
            <div className="task__cardHeaderTitle">{props.item.name}</div>
            <div className="task__cardHeaderDate">{props.item.date}</div>
            </div>
            <div className="task__cardBodyDescription">{props.item.description}</div>
            <div className="task__cardBodyStatus">
                <select className="task__cardBodyStatusSelect" value={value} onChange={handleChange}>
                    <option value="onHold">On Hold</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                    <option value="ongoing">Ongoing</option>
                </select>
            </div>
            <div className="task__cardBodyForward">
                <button className="task__cardBodyForwardButton" onClick={handleForward} >Forward</button>
            </div>
        </div>
        </div>
    )
}
