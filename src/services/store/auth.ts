import create from 'zustand';

export type User = {
  name: string;
  image?: string;
};

type State = {
  user: User;
  setUser: (user: User) => void;
};

export const useAuthStore = create<State>(set => ({
  user: {} as User,
  setUser: props => set(state => ({ user: { ...state.user, ...props } })),
}));
