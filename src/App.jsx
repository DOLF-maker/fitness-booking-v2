import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddAppointment from './components/AddAppointment';
import ShowAppointmentCard from './components/ShowAppointmentCard';
// import { fetchAppointments } from './features/appointmentSlice';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // 
  //   // console.log(fetchAppointments())
  //   // let res = fetchAppointments()
  //   // console.log()
  //   dispatch(fetchAppointments())
  // }, [dispatch]);

  return (
    <div className="container mt-5">
      <h1>Scheduled Appointments</h1>
      <AddAppointment />
      <ShowAppointmentCard /> 
    </div>
  );
};

export default App;
