// import { useSelector, useDispatch } from 'react-redux';
import EditAppointment from './EditAppointment';
// import { fetchAppointments } from '../features/appointmentSlice';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowAppointmentCard = () => {
  // const dispatch = useDispatch();
  const BASE_URL = "https://3e1f53ff-f4d5-4bff-8d16-90360c14cb76-00-1nd9sofv7s37h.sisko.repl.co:3000";
  // const appointments = useSelector(state => state.appointments.appointments); // Ensure you select the appointments from the Redux state
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const response = await axios.get(`${BASE_URL}/appointments`);
    let res = response.data.data
    // console.log(res)
    setAppointments(res)
    // setAppointments(res)
    // return response.data.data; // Return the appointments data
  }

  const handleDelete = async (id) => {
    
    await axios.delete (`${BASE_URL}/appointments/${id}`);
    // Optionally call API to delete from backend
  };


  
  useEffect(() => {
    fetchAppointments()
  }, []);

  return (
    <ul className="list-group">
      {appointments.length > 0 ? (
        appointments.map(appt => (
          
          <li key={appt.id}
           className="list-group-item d-flex justify-content-between align-items-center">
            {console.log(appt)}
            <span>
              <strong>Thank you,{appt.name}. 
                <br/> We will contact you via{appt.email} or {appt.phone}</strong> - {appt.session_type} on {appt.date_time}
            </span>
            <div>
              <EditAppointment appointmentId={appt.id} />
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(appt.id)} >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </li>
          
        ))
      ) : (
        <li className="list-group-item">No appointments scheduled.</li>
        )}
    </ul>
  );
};

export default ShowAppointmentCard;
