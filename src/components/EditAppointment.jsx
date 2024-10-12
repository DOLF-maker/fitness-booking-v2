import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateAppointment } from '../features/appointmentSlice';
import axios from 'axios';

const EditAppointment = ({ appointmentId }) => {
  const BASE_URL = "https://3e1f53ff-f4d5-4bff-8d16-90360c14cb76-00-1nd9sofv7s37h.sisko.repl.co:3000";
  // const dispatch = useDispatch();
  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    dateTime: '',
  });

  // useEffect(() => {
  //   const fetchAppointment = async () => {
  //     const response = await axios.get(`${BASE_URL}/appointments/${appointmentId}`);
  //     console.log(response)
  //     setAppointment(response.data);
  //   };
  //   fetchAppointment();
  // }, [appointmentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log('response')
    e.preventDefault();
    try {
      const response = await axios.put(`${BASE_URL}/appointments/${appointmentId}`, appointment);
      // fetchAppointment()
      console.log(response)// dispatch(updateAppointment(response.data)); // Dispatch the action with the updated appointment
    } catch (error) {
      console.error('Error updating the appointment', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <h3>Edit Appointment</h3>
      {/* Form Fields */}
      <input type="text" name="name" value={appointment.name} onChange={handleChange} required />
      <input type="email" name="email" value={appointment.email} onChange={handleChange} required />
      <input type="text" name="phone" value={appointment.phone} onChange={handleChange} required />
      <select name="sessionType" value={appointment.session_type} onChange={handleChange} required>
        <option value="">Select session</option>
        <option value="Weight Training">Weight Training</option>
        <option value="Physiotherapy">Physiotherapy</option>
        <option value="Cardio">Cardio</option>
      </select>
      <input type="text" name="dateTime" value={appointment.date_time} onChange={handleChange} required />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditAppointment;
