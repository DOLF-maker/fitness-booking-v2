import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addAppointment } from '../features/appointmentSlice';
import axios from 'axios';
import { Container, Form } from 'react-bootstrap';



const AddAppointment = () => {
  const BASE_URL = "https://3e1f53ff-f4d5-4bff-8d16-90360c14cb76-00-1nd9sofv7s37h.sisko.repl.co:3000";
  // const dispatch = useDispatch();
  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    phone: '',
    session_type: '',
    date_time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/appointments`, appointment);
     
     console.log(response) // dispatch(addAppointment(response.data)); // Dispatch the action with the new appointment
      setAppointment({ name: '', email: '', phone: '', session_type: '', date_time: '' }); // Reset the form
    } catch (error) {
      console.error('Error submitting the appointment', error);
    }
  };

  return (
    <Container>
    <Form.Group onSubmit={handleSubmit}>
      <h2>Book a New Appointment</h2>
      {/* Form Fields */}
      <input type="text" name="name" value={appointment.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={appointment.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={appointment.phone} onChange={handleChange} placeholder="Phone" required />
      <select name="session_type" value={appointment.session_type} onChange={handleChange} required>
        <option value="">Select session</option>
        <option value="Weight Training">Weight Training</option>
        <option value="Physiotherapy">Physiotherapy</option>
        <option value="Cardio">Cardio</option>
      </select>
      <input type="text" name="date_time" value={appointment.date_time} onChange={handleChange} placeholder="Date and Time" required />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </Form.Group>
    </Container>
  );
};

export default AddAppointment;
