import './App.css';
import React from 'react';
import { Route, Routes, NavLink, } from 'react-router-dom';
import {createContext,useState } from 'react';
import EventForm from './Components/EventForm';
import EventList from './Components/EventList';
import EventListDetails from './Components/EventListDetails';
export const eventContext=createContext()
function App() {
  const [eventList, setEventList]=useState([])
  const contextValue={eventList, setEventList}
  return (
      <eventContext.Provider value={contextValue}>
    <div className="App">
      <NavLink className="link" to="/EventForm">Event Form</NavLink>
        <br/>
      <NavLink className="link" to="/EventListPage">Event List</NavLink>
        <br/>
      <Routes>
        <Route path="/EventListPage" element={<EventList/>}> </Route>
        <Route path="/EventForm" element={<EventForm/>}> </Route>
        <Route path="/EventListDetails/:Event" element={<EventListDetails></EventListDetails>}> </Route>
      </Routes>
    </div>
      </eventContext.Provider>
  );
}
export default App;
