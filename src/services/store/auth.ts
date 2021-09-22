import create from 'zustand';

type State = {
  user: {};
  setUser: (props: {}) => void;
};

export const useAuthStore = create<State>(set => ({
  user: {},
  setUser: props => set(state => ({ user: { ...state.user, ...props } })),
}));
