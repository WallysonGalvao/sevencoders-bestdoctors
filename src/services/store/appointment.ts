import create from 'zustand';
import { User } from '.';

export type Review = {
  id: number;
  rating: number;
  description: string;
  user: User;
};

export type DoctorType = {
  id: number;
  image: string;
  name: string;
  specialty: string;
  rating: number;
  description: string;
  ratingNumber: number;
  address: string;
  serviceHours: {
    day: number;
    open: string;
    close: string;
  }[];
  reviews: Review[];
};

type State = {
  doctor: DoctorType;
  setDoctor: (doctor: DoctorType) => void;
};

export const useAppointmentStore = create<State>(set => ({
  doctor: {} as DoctorType,
  setDoctor: doctor => set({ doctor }),
}));
