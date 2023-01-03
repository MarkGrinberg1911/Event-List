import { useContext } from "react";
import { useForm } from "react-hook-form";
import { eventContext } from "../App";
import './form.css'
function EventForm() {
  const {register,handleSubmit,formState: { errors }, } = useForm();
  const {eventList, setEventList} = useContext(eventContext)
  const onSubmit = data => {
    setEventList([...eventList,
    {
      eventname: data.eventname,
      eventstart: data.eventstart,
      eventend: data.eventend,
      eventabout: data.eventabout
    }])
    console.log(eventList)
  }
  return (
    <div className="hero">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Event name' id="name" name="name" {...register(`eventname`, { required: true })} />
        {errors.eventname && <p>Please enter the event name.</p>}

        <input placeholder='Start time' id="start" name="start" {...register(`eventstart`, { required: true })} />
        {errors.eventstart && <p>Event Start Date is needed.</p>}

        <input placeholder='End time'id="end" name="end" {...register(`eventend`)} />

        <input placeholder='About' id="about" name="about" {...register(`eventabout`, { required: true })} />
        {errors.eventabout && <p>Please enter a description.</p>}

        <input type="submit"  value='ADD'/>
      </form>      
    </div>
  );
}
export default EventForm;
