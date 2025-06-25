import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/appointments';

export const getAppointments = () => axios.get(API_BASE);
export const getAppointmentById = (id) => axios.get(`${API_BASE}/${id}`);
export const createAppointment = (appointment) => axios.post(API_BASE, appointment);
export const updateAppointment = (id, appointment) => axios.put(`${API_BASE}/${id}`, appointment);
export const deleteAppointment = (id) => axios.delete(`${API_BASE}/${id}`);
