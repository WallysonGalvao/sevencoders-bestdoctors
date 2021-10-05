import create from 'zustand';
import { DoctorType } from '.';

export type Service = {
  id: number;
  title: string;
  price: string;
  description: string;
};

export type Appointment = {
  id: number;
  date: string;
  time: string;
  doctor: DoctorType;
  service: Service;
  observations: string;
};

type State = {
  appointment: Appointment;
  setAppointment: (appointment: Appointment) => void;
};

export const useHistoryStore = create<State>(set => ({
  appointment: {} as Appointment,
  setAppointment: appointment => set({ appointment }),
}));
