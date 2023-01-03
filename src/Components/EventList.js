import { useContext } from "react";
import { eventContext } from "../App";
import { NavLink } from "react-router-dom";
import React from "react";
import './form.css'
function EventList() {
    const { eventList, setEventList } = useContext(eventContext)
    function deleteItem(index) { setEventList(eventList.filter((event, listItemIndex) => index !== listItemIndex)) }
    return (<div>
        <ul>
            {eventList.map((event, index) => <li className='list' key={index}>
                {event.eventname}<br />{event.eventstart}<br /> to<br /> {event.eventend}<br />
                <NavLink  state={{ index: {index}, Name: event.eventname, Start: event.eventstart, End: event.eventend, About: event.eventabout, }} to={`/EventListDetails/${event.eventname}`}><button className="del">Details</button></NavLink>
                <p><button className="deets" onClick={() => deleteItem(index)}>Delete</button></p>
            </li>)
            }</ul></div>


    )

}
export default EventList;