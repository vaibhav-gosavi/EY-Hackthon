import { create } from 'zustand';

export const useAuth = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (email, password) => {
    // TODO: Replace with actual API call
    set({
      isAuthenticated: true,
      user: {
        id: '1',
        email,
        name: 'Test User',
      },
    });
  },
  register: (email, password, name) => {
    // TODO: Replace with actual API call
    set({
      isAuthenticated: true,
      user: {
        id: '1',
        email,
        name,
      },
    });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
