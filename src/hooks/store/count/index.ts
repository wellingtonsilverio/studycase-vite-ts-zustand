import { create } from 'zustand';

interface countState {
  count: number;
  addCount: () => void;
}

export const useCountState = create<countState>((set) => ({
  count: 0,
  addCount: () => {
    set((state) => ({ count: state.count + 1 }));
  },
}));
