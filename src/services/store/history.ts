import create from 'zustand';
import { DoctorType } from '.';

export type Appointment = {
  doctor: DoctorType;
  service: {
    title: string;
  };
  date: string;
};

type State = {
  appointment: Appointment;
  setAppointment: (appointment: Appointment) => void;
};

export const useHistoryStore = create<State>(set => ({
  appointment: {} as Appointment,
  setAppointment: appointment => set({ appointment }),
}));
