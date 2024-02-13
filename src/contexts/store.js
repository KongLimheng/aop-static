import { create } from 'zustand'

export const store = create((set) => ({
  mainFlex: null,
  maxWidth: '100%',
  isMini: false,
  formData: {},
  setMaxWidth: (width) => set({ maxWidth: width }),
  setMainFlex: (m) => set({ mainFlex: m }),
  setIsMini: (bool) => set({ isMini: bool }),
  setFormData: (data) => set({ formData: data }),
}))

// export const isMini = store((state) => state.isMini)
// export const setIsMini = store((state) => state.setIsMini)
