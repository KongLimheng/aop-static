import { create } from 'zustand'

export const store = create((set) => ({
  mainFlex: null,
  maxWidth: '100%',
  isMini: false,
  formData: {},
  openModal: false,
  setOpenModal: (state) => set({ openModal: state }),
  setMaxWidth: (width) => set({ maxWidth: width }),
  setMainFlex: (m) => set({ mainFlex: m }),
  setIsMini: (bool) => set({ isMini: bool }),
  setFormData: (data) => set({ formData: data }),
}))
