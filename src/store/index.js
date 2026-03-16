import { create } from 'zustand';

const useMacbookStore = create((set) => ({
    color: '#888',
    setColor: (color) => set({ color }),

    scale: 0.06,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: '#888', scale: 0.06 }),

}))

export default useMacbookStore;