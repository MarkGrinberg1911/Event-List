import './form.css'
import { useLocation } from "react-router-dom";

function EventListDetails() {
   const location=useLocation()
    return (
        <div className="details">
            <ul>
                <li><p>{location.state.Name}</p></li>
                <li><p>{location.state.Start}</p></li>
                <li><p>To</p></li>
                <li><p>{location.state.End}</p></li>
                <li><p>{location.state.About}</p></li>
            </ul>
        </div>
    )
}
export default EventListDetails;
