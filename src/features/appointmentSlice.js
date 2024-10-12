import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the base URL for the API
// const BASE_URL = "https://3e1f53ff-f4d5-4bff-8d16-90360c14cb76-00-1nd9sofv7s37h.sisko.repl.co:3000";



 












// Async thunk to fetch all appointments
// export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async () => {
//   const response = await axios.get(`${BASE_URL}/appointments`);
//   // console.log(response.data.data)
//   return response.json(); // Return the appointments data
// });

// const appointmentSlice = createSlice({
//   name: 'appointments',
//   initialState: {
//     appointments: [],
//     status: 'idle', // "idle" | "loading" | "succeeded" | "failed"
//     error: null
//   },
//   // reducers: {
//   //   addAppointment: (state, action) => {
//   //     state.appointments.push(action.payload);
//   //   },
//   //   updateAppointment: (state, action) => {
//   //     const index = state.appointments.findIndex(appt => appt.id === action.payload.id);
//   //     if (index !== -1) {
//   //       state.appointments[index] = action.payload;
//   //     }
//   //   },
//   //   deleteAppointment: (state, action) => {
//   //     state.appointments = state.appointments.filter(appt => appt.id !== action.payload);
//   //   },
//   // },
//   extraReducers: (builder) => {
//     builder    
//       .addCase(fetchAppointments.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // Add any fetched appointments to the array
//         console.log(action.payload)
//         state.appointments = action.payload;
//       })
//   },
// });

// // Export actions
// // export const { fetchAppointments, addAppointment, updateAppointment, deleteAppointment } = appointmentSlice.actions;

// // Export the reducer
// export default appointmentSlice.reducer;


// const initialState = [];

// const appointmentSlice = createSlice({
//   name: 'appointments',
//   initialState,
//   reducers: {
//     setAppointments: (state, action) => action.payload,
//     addAppointment: (state, action) => {
//       console.log("Before Add:", state);
//       state.push(action.payload);
//       console.log("After Add:", state);
//     },
//     updateAppointment: (state, action) => {
//       const index = state.findIndex(appt => appt.id === action.payload.id);
//       if (index !== -1) {
//         state[index] = action.payload;
//       }
//     },
//     deleteAppointment: (state, action) => {
//       return state.filter(appt => appt.id !== action.payload);
//     },
//   },
// });

// export const { setAppointments, addAppointment, updateAppointment, deleteAppointment } = appointmentSlice.actions;

// export const fetchAppointments = () => async dispatch => {
//   const response = await axios.get('https://c7736ec3-ca3d-4adb-98a1-4becec9c8772-00-2v4tulvcdkrqv.sisko.replit.dev:3000/appointments');
//   dispatch(setAppointments(response.data));
// };

// export const createAppointment = (appointment) => async dispatch => {
//   const response = await axios.post('https://c7736ec3-ca3d-4adb-98a1-4becec9c8772-00-2v4tulvcdkrqv.sisko.replit.dev:3000/appointments', appointment);
//   dispatch(addAppointment(response.data));
// };

// export const editAppointment = (id, updatedAppointment) => async dispatch => {
//   const response = await axios.put(`https://c7736ec3-ca3d-4adb-98a1-4becec9c8772-00-2v4tulvcdkrqv.sisko.replit.dev:3000/appointments/${id}`, updatedAppointment);
//   dispatch(updateAppointment(response.data));
// };

// export const removeAppointment = (id) => async dispatch => {

//   dispatch(deleteAppointment(id));
// };

// export default appointmentSlice.reducer;
