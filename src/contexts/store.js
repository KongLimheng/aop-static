import { create } from 'zustand'

export const store = create((set) => ({
  mainFlex: null,
  maxWidth: '100%',
  setMaxWidth: (width) => set({ maxWidth: width }),
  setMainFlex: (m) => set((state) => ({ mainFlex: m })),
}))
